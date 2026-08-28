#!/usr/bin/env node
/**
 * 빌드 산출물 정합성 게이트.
 *   node tools/check.mjs [_site]
 * 위반이 하나라도 있으면 exit 1. 경고가 아니라 실패다.
 *
 * 검사 항목
 *   1. 미치환 Liquid / 템플릿 잔재
 *   2. 언어별 페이지 1:1 대응 (hreflang 상호 참조)
 *   3. 내부 링크가 실제 파일을 가리키는가
 *   4. 이미지·CSS·JS 자산 존재
 *   5. 페이지당 <h1> 정확히 1개, <html lang> 존재
 *   6. canonical / description / og:locale 존재
 *   7. 한국어 페이지에 남은 영어 UI 문자열 탐지(휴리스틱)
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, dirname, resolve, sep } from "node:path";

const ROOT = resolve(process.argv[2] ?? "_site");
const problems = [];
const warn = [];
const fail = (f, m) => problems.push(`${f}: ${m}`);

if (!existsSync(ROOT)) {
  console.error(`빌드 산출물이 없습니다: ${ROOT}\n먼저 'bundle exec jekyll build'를 실행하세요.`);
  process.exit(1);
}

/* ---- 파일 수집 ---------------------------------------------------------- */
const walk = (dir, out = []) => {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    statSync(p).isDirectory() ? walk(p, out) : out.push(p);
  }
  return out;
};
const all = walk(ROOT);
const html = all.filter((p) => p.endsWith(".html"));
const rel = (p) => relative(ROOT, p).split(sep).join("/");

if (html.length === 0) fail("(site)", "HTML 파일이 하나도 없습니다");

/* ---- URL → 파일 해석 ---------------------------------------------------- */
const assetSet = new Set(all.map(rel));
const resolveUrl = (url) => {
  let u = url.split("#")[0].split("?")[0];
  if (!u.startsWith("/")) return null;
  u = u.replace(/^\/+/, "");
  if (u === "") u = "index.html";
  else if (u.endsWith("/")) u += "index.html";
  if (assetSet.has(u)) return u;
  if (assetSet.has(u + "/index.html")) return u + "/index.html";
  if (assetSet.has(u + ".html")) return u + ".html";
  return null;
};

/* ---- 페이지별 검사 ------------------------------------------------------ */
const pages = new Map(); // rel -> {lang, alts:Set, canonical}

for (const f of html) {
  const r = rel(f);
  const s = readFileSync(f, "utf8");

  // 1. 미치환 템플릿
  for (const pat of ["{{", "{%", "[object Object]", "translation missing", "liquid error", "Liquid Exception"]) {
    if (s.includes(pat)) fail(r, `미치환/오류 흔적 발견: ${JSON.stringify(pat)}`);
  }

  // 5. lang / h1
  const langM = s.match(/<html[^>]*\blang="([^"]+)"/);
  if (!langM) fail(r, "<html lang> 없음");
  const lang = langM?.[1] ?? "?";
  const h1s = (s.match(/<h1[\s>]/g) || []).length;
  if (r !== "404.html") {
    if (h1s === 0) fail(r, "<h1> 없음");
    else if (h1s > 1) fail(r, `<h1>이 ${h1s}개 (1개여야 함)`);
  }

  // 6. 메타
  if (!/rel="canonical"/.test(s)) fail(r, "canonical 없음");
  if (!/<meta name="description" content="[^"]{10,}"/.test(s)) fail(r, "description 비어 있음/짧음");
  if (!/property="og:locale"/.test(s)) warn.push(`${r}: og:locale 없음`);

  // 2. hreflang 대응 수집
  const alts = new Set();
  for (const m of s.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) {
    if (m[1] !== "x-default") alts.add(m[1]);
  }
  pages.set(r, { lang, alts, is404: r === "404.html" });

  // 3-4. 링크·자산
  for (const m of s.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|tel:|data:|#|javascript:)/i.test(u)) continue;
    if (!u.startsWith("/")) continue; // 상대경로는 relative_url이 생성하지 않음
    if (resolveUrl(u) === null) fail(r, `깨진 내부 링크: ${u}`);
  }
}

/* ---- 언어 대응 검증 ----------------------------------------------------- */
const enPages = [...pages].filter(([, v]) => v.lang === "en" && !v.is404);
const koPages = [...pages].filter(([, v]) => v.lang === "ko" && !v.is404);

for (const [r, v] of pages) {
  if (v.is404) continue;
  if (!v.alts.has("en") || !v.alts.has("ko")) {
    fail(r, `hreflang 짝 없음 (있는 것: ${[...v.alts].join(",") || "없음"}) — front matter의 ref 확인`);
  }
}
if (enPages.length !== koPages.length) {
  fail("(site)", `언어별 페이지 수 불일치: en ${enPages.length} vs ko ${koPages.length}`);
}

/* ---- 한국어 페이지의 영어 UI 잔존 (휴리스틱) ---------------------------- */
const EN_UI = ["Read more", "View all", "All news", "Skip to content", "Menu",
  "Principal Investigator", "Lab members", "Alumni", "Journal articles",
  "Conference papers", "Research areas", "Latest news", "About the lab"];
for (const [r, v] of pages) {
  if (v.lang !== "ko") continue;
  const s = readFileSync(join(ROOT, r), "utf8");
  const body = s.replace(/<head[\s\S]*?<\/head>/i, "");
  for (const t of EN_UI) {
    // 논문 제목 등 영문 고유명사와의 오탐을 줄이려고 태그 사이 단독 출현만 본다
    const re = new RegExp(`>\\s*${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*<`);
    if (re.test(body)) warn.push(`${r}: 한국어 페이지에 영어 UI 문자열 "${t}"`);
  }
}

/* ---- sitemap / robots --------------------------------------------------- */
if (!assetSet.has("sitemap.xml")) fail("(site)", "sitemap.xml 없음");
if (!assetSet.has("robots.txt")) warn.push("(site): robots.txt 없음");
if (!assetSet.has("404.html")) fail("(site)", "404.html 없음");

/* ---- 결과 -------------------------------------------------------------- */
console.log(`검사 대상: HTML ${html.length}개 (en ${enPages.length} / ko ${koPages.length}), 전체 파일 ${all.length}개`);
if (warn.length) {
  console.log(`\n경고 ${warn.length}건`);
  for (const w of warn) console.log("  ! " + w);
}
if (problems.length) {
  console.log(`\n실패 ${problems.length}건`);
  for (const p of problems) console.log("  x " + p);
  process.exit(1);
}
console.log("\n통과: 정합성 문제 없음");
