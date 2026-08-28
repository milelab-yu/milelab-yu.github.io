# MILE Lab @ YU — 연구실 홈페이지

Medical Intelligence & Learning Lab · 영남대학교 컴퓨터학부

Jekyll 4 정적 사이트. 영어가 루트(`/`), 한국어가 `/ko/` 아래에 있고
언어 전환은 리다이렉트 없이 페이지 대 페이지로 연결된다.

## 빠른 시작

```bash
bundle install                 # 최초 1회
bundle exec jekyll serve       # http://localhost:4000
bundle exec jekyll build       # _site/ 생성
node tools/check.mjs _site     # 정합성 검사 (실패 시 exit 1)
```

Windows에서 Ruby가 PATH에 없으면 `export PATH="/c/Ruby33-x64/bin:$PATH"`.

## 구조

```
_config.yml              사이트 설정
_data/
  i18n.yml               UI 문자열 (en / ko 대칭이어야 함)
  nav.yml                내비게이션
  research.yml           연구 분야
  members.yml            구성원
  news.yml               소식
  publications.json      논문 — 언어중립 데이터, 번역하지 않는다
_layouts/                default, page
_includes/               head, header, footer, partials/mark.html
assets/                  css, js, logo, img
index.html   ko/index.html          홈
news.md      ko/news.md             소식
members.html ko/members.html        구성원
research.md  ko/research.md         연구
publications.html ko/publications.html  논문
photos.md    ko/photos.md           사진
teaching.md  ko/teaching.md         강의
contact.md   ko/contact.md          연락처
404.html                            영어·한국어 병기 (Pages는 루트 404 하나만 쓴다)
tools/check.mjs                     빌드 산출물 정합성 게이트
```

## 이중언어 규칙

**모든 페이지 front matter에 `ref`가 있어야 한다.** 같은 `ref`를 가진 en/ko 페이지가
서로의 짝이 되어 언어 토글과 `hreflang`을 만든다. `ref`가 없거나 짝이 없으면
`tools/check.mjs`가 빌드를 실패시킨다.

```yaml
---
layout: page
lang: en          # 또는 ko
ref: research     # en/ko 양쪽에 정확히 하나씩
permalink: /research/      # 한국어판은 /ko/research/
title: "Research"
description: "검색결과에 나오는 한 줄 설명"
---
```

UI 문자열은 `_data/i18n.yml`에서 가져온다.

```liquid
{% assign L = site.data.i18n[page.lang] %}
{{ L.research_areas }}
```

`i18n.yml`의 `en:`과 `ko:` **키 집합은 정확히 같아야 한다.** 한쪽에만 키를 추가하면
반대 언어에서 빈 문자열이 조용히 출력된다.

## 콘텐츠 추가하기

### 소식 한 건 추가

`_data/news.yml`의 `en:`과 `ko:` 양쪽 맨 위에 항목을 넣는다.

```yaml
- date: "2026-09-01"
  title: "..."
  body: "..."
  link: "https://..."        # 없으면 생략
  link_label: "..."
```

### 구성원 추가

`_data/members.yml`의 `members:` 배열에 넣는다. 사진은
`assets/img/people/`에 두고 경로로 참조한다.

### 논문 추가

`_data/publications.json`의 `journal` 또는 `conference` 배열에 넣는다.
**언어별로 나누지 않는다** — 논문 메타데이터는 번역 대상이 아니다.

```json
{
  "key": "jung2027xyz",
  "type": "journal",
  "abbr": "TMI",
  "title": "...",
  "authors": [{ "last": "Jung", "first": "Euijin", "display": "Euijin Jung" }],
  "venue": "IEEE Transactions on Medical Imaging",
  "volume": "", "number": "", "pages": "", "year": 2027,
  "doi": "10.1109/...", "code": "", "url": "", "note": "",
  "selected": false
}
```

## 배포

`main`에 push하면 `.github/workflows/deploy.yml`이 빌드 → 정합성 검사 → Pages 배포를 수행한다.

**최초 1회 수동 설정**: 저장소 Settings → Pages → Build and deployment →
Source를 **GitHub Actions**로 바꾼다. 이걸 안 하면 첫 배포가 404가 된다.

`_config.yml`의 `url`은 실제 배포 주소와 일치해야 한다. `canonical`, `hreflang`,
`og:url`, `sitemap.xml`이 전부 이 값에서 나온다.

## 로고

`assets/logo/README.md` 참조. 페이지 안에서는 `{% include partials/mark.html %}`로
인라인 SVG를 넣는다 — `<img>`로 넣으면 다크모드 색 대응이 깨진다.
