---
layout: page
lang: ko
ref: teaching
permalink: /ko/teaching/
title: "강의"
description: "영남대학교 컴퓨터학부 정의진 교수 담당 과목과 학부연구생 연구 주제 안내."
intro: "영남대학교 컴퓨터학부 MILE Lab의 강의와 학부연구생 지도 안내입니다."
---
{%- assign L = site.data.i18n[page.lang] -%}

<section class="section">
  <h2>{{ L.courses }}</h2>
  {%- for t in site.data.teaching[page.lang] %}
  <h3 class="term-head">{{ t.term }}</h3>
  <ul class="course-list">
    {%- for c in t.courses %}
    <li>
      <div class="course-name">
        <strong>{{ c.title }}</strong>
        <span class="course-alt">{{ c.title_local }}</span>
      </div>
      <dl class="course-meta">
        <dt>{{ L.course_kind }}</dt><dd>{{ c.kind }} · {{ c.credits }}</dd>
        <dt>{{ L.course_time }}</dt><dd>{{ c.schedule }}</dd>
        <dt>{{ L.course_room }}</dt><dd>{{ c.room }}</dd>
        <dt>{{ L.course_text }}</dt><dd>{{ c.textbook }}</dd>
      </dl>
    </li>
    {%- endfor %}
  </ul>
  {%- if t.office_hours %}
  <p class="office-hours">{{ L.office_hours }}: {{ t.office_hours }}</p>
  {%- endif %}
  {%- endfor %}
</section>

<section class="section">
  <h2>{{ L.undergrad_research }}</h2>
  <p>
    학부연구생은 한 학기 이상 연구실에서 함께 연구할 수 있습니다. 보통 발표된 결과를
    직접 재현하는 것으로 시작해, 그중 한 가지를 바꿔 보고 무엇이 달라졌는지 정리하는
    순서로 진행합니다. 아래 주제는 정해진 과제가 아니라 출발점이며, 무엇을 배우고
    싶은지 이야기한 뒤 함께 범위를 정합니다.
  </p>

  <div class="grid cols-2">
    <article class="card">
      <p class="kicker">뇌신호</p>
      <h3>EEG·fNIRS baseline 재현</h3>
      <p>
        공개 데이터로 발표된 EEG·fNIRS 디코딩 파이프라인을 다시 구현해 보고된 성능이
        재현되는지 확인합니다. 학습에 쓰이지 않은 피험자에서 정확도가 얼마나 떨어지는지
        측정합니다.
      </p>
    </article>

    <article class="card">
      <p class="kicker">표현 학습</p>
      <h3>비레이블 신호 사전학습</h3>
      <p>
        레이블이 없는 기록으로 self-supervised 모델을 학습한 뒤, downstream 과제에서
        쓸 만한 정확도에 도달하려면 레이블이 얼마나 필요한지 확인합니다.
      </p>
    </article>

    <article class="card">
      <p class="kicker">생성 모델</p>
      <h3>조건부 영상 생성</h3>
      <p>
        segmentation mask나 구조적 제약 같은 명시적 조건을 주고 GAN·diffusion 모델을
        학습한 뒤, 생성된 영상이 그 조건을 실제로 지키는지 평가합니다.
      </p>
    </article>

    <article class="card">
      <p class="kicker">의료영상</p>
      <h3>모달리티 간 영상 변환</h3>
      <p>
        짝지어진 공개 데이터에서 모달리티 간 변환을 수행하고 실패 사례를 살펴봅니다.
        어떤 구조가 그대로 옮겨지고 어떤 구조가 모델이 지어낸 것인지 구분합니다.
      </p>
    </article>

    <article class="card">
      <p class="kicker">멀티모달 학습</p>
      <h3>영상·신호와 그 주변의 텍스트</h3>
      <p>
        판독문이나 주석을 해당 영상·신호와 짝지어, 공유 표현이 모달리티별 표현보다
        더 잘 전이되는지 확인합니다.
      </p>
    </article>

    <article class="card">
      <p class="kicker">평가</p>
      <h3>서로 다른 레이블 다루기</h3>
      <p>
        의료 레이블은 주관적이고 평가자마다 다른 경우가 많습니다. 공개 데이터에서 이
        불일치를 정량화하고, 보고된 성능 향상이 그 안에서도 유지되는지 확인합니다.
      </p>
    </article>
  </div>
</section>

<section class="section">
  <h2>시작하는 데 필요한 것</h2>
  <p>
    Python과 선형대수·확률에 대한 기본기면 충분합니다. 딥러닝 수업을 들었다면 도움이
    되지만 필수 조건은 아닙니다. 그보다는 논문을 꼼꼼히 읽고 스스로 설명할 수 있는
    코드를 쓰는 태도가 더 중요합니다. 진행 상황은 정기적인 미팅에서 함께 논의하고,
    결과는 각자 관리하는 저장소에서 재현 가능해야 합니다.
  </p>
  <p>
    위 주제 중 관심 있는 것이 있다면, 지금까지 만들어 보았거나 읽어 본 내용을 짧게
    적고 언제부터 시작하고 싶은지 함께 적어 이메일로 보내 주세요.
  </p>
  <p>
    <a class="btn" href="mailto:{{ site.email }}">{{ site.email }}</a>
    <a class="btn ghost" href="{{ '/ko/research/' | relative_url }}">{{ L.research_areas }}</a>
  </p>
</section>
