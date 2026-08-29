---
layout: page
lang: ko
ref: research
permalink: /ko/research/
title: "연구"
description: "MILE Lab @ YU의 의료 AI 연구 — 파운데이션 모델, 멀티모달 학습, 생성 모델, 레이블 효율 학습, 신뢰할 수 있는 임상 AI."
intro: "의료영상·생체신호·임상텍스트를 아우르는 기계학습 연구입니다."
---
{%- assign L = site.data.i18n[page.lang] -%}
{%- assign areas = site.data.research[page.lang] -%}


{%- for a in areas %}
<section class="section research-section" id="{{ a.id }}">
  <div class="research-head">
    {% include research-icon.html id=a.id %}
    <h2>{{ a.title }}</h2>
  </div>
  {%- if a.keywords %}
  <ul class="kw" aria-label="{{ L.keywords }}">
    {%- for k in a.keywords %}
    <li>{{ k }}</li>
    {%- endfor %}
  </ul>
  {%- endif %}
  {%- if a.figure %}
  <figure class="figure figure-sm">
    <a href="{{ a.figure | relative_url }}" target="_blank" rel="noopener">
      <img src="{{ a.figure | relative_url }}" alt="{{ a.title }}" loading="lazy">
    </a>
    <figcaption>{{ a.figure_credit }}</figcaption>
  </figure>
  {%- endif %}
</section>
{%- endfor %}
