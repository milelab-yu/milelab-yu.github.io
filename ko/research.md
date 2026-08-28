---
layout: page
lang: ko
ref: research
permalink: /ko/research/
title: "연구"
description: "뇌신호 파운데이션 모델, 비침습 EEG·fNIRS 분석, 조건부·모달리티 간 의료영상 합성 — MILE Lab @ YU의 연구 주제."
intro: "모달리티와 피험자, 레이블의 제약을 넘어 살아남는 표현을 학습합니다."
---
{%- assign L = site.data.i18n[page.lang] -%}
{%- assign areas = site.data.research[page.lang] -%}

<section class="section">
<p>
MILE Lab은 멀티모달리티를 아우르는 범용 의료 지능을 목표로, 의료영상·뇌신호·임상텍스트에
공통으로 흐르는 구조를 학습하는 모델을 연구합니다. 아래 주제들을 관통하는 것은 하나의
현실적 제약입니다. 의료 데이터는 서로 다른 모달리티로, 서로 다른 피험자와 기관에서,
믿을 만한 레이블은 거의 없는 채로 도착합니다. 한 상황에서 학습한 표현이 다음 상황으로
옮겨가서도 살아남는가 — 각 주제마다 저희가 던지는 질문입니다.
</p>
</section>

{%- for a in areas %}
<section class="section" id="{{ a.id }}">
<h2>{{ a.title }}</h2>
<p>{{ a.summary }}</p>
{%- if a.keywords %}
<ul class="keywords" aria-label="{{ L.keywords }}">
{%- for k in a.keywords %}
<li>{{ k }}</li>
{%- endfor %}
</ul>
{%- endif %}
{%- if a.figure %}
<figure class="figure">
<img src="{{ a.figure | relative_url }}" alt="{{ a.title }}" loading="lazy">
<figcaption>{{ a.figure_credit }}</figcaption>
</figure>
{%- endif %}
</section>
{%- endfor %}
