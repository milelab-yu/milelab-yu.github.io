# MILE Lab @ YU 홈페이지 — 작업 규칙

## 무엇인가
영남대학교 컴퓨터학부 MILE Lab(의료지능·학습 연구실) 공식 홈페이지.
Jekyll 4 + GitHub Actions → https://milelab-yu.github.io
저장소: `milelab-yu/milelab-yu.github.io` (public)

## 절대 규칙
1. **모든 페이지에 `ref`가 있어야 한다.** 같은 ref를 가진 en/ko 페이지가 짝을 이뤄
   언어 토글과 hreflang을 만든다. 한쪽만 만들면 `tools/check.mjs`가 빌드를 실패시킨다.
2. **영어는 루트(`/`), 한국어는 `/ko/`.** `/en/` 접두사를 만들지 않는다.
   리다이렉트를 쓰지 않는다(검색 색인이 죽는다).
3. **`_data/i18n.yml`의 en/ko 키 집합은 정확히 같아야 한다.** 한쪽만 추가하면
   반대 언어에서 빈 문자열이 조용히 출력된다. 전체 덮어쓰기 금지, 부분 편집만.
4. **논문 데이터(`_data/publications.json`)는 언어로 나누지 않는다.** 번역 대상이 아니다.
5. **로고는 `{% include partials/mark.html %}`로 인라인 삽입.** `<img>`로 넣으면
   다크모드 색 대응(`--mark-field`/`--mark-accent`)이 깨진다.
6. 커밋 전 반드시: `bundle exec jekyll build && node tools/check.mjs _site`

## 환경
- Ruby 3.3.12 (`C:/Ruby33-x64/bin`), Jekyll 4.4.1. Bash에서 `export PATH="/c/Ruby33-x64/bin:$PATH"`
- `Gemfile.lock`에 `x86_64-linux` 플랫폼이 있어야 CI가 돈다. 로컬에서 gem을 바꾸면
  `bundle lock --add-platform x86_64-linux`를 다시 돌릴 것.
- 로컬 렌더 검증: 스크래치패드의 puppeteer로 스크린샷 (Chrome MCP 확장 미연결)

## 확정 사실 (지어내지 말 것)
- PI: 정의진, 영남대 컴퓨터학부 조교수. 이전 소속 DGIST BRAIN Lab 박사후연구원
- 이메일 euijin@yu.ac.kr / IT관 223호 / **전화번호 미정**
- 연구실 개설 2026년, 구성원은 아직 PI 1인
- 논문 14편(Journal 5 / Conference 9) 전부 DGIST 시절 성과 — 사용자 결정으로 구분 없이 게시
- Teaching 담당 과목 **미확정**

## 남은 일
- 구 사이트 `EuijinMisp.github.io` 처리 (경로별 스텁, 루트 한 장 교체 금지)
- 오피스 전화번호, Teaching 과목 확정 시 반영
- 디자이너 로고 벡터 원본 확보 시 `assets/logo/` 교체
