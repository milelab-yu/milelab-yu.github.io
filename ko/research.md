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

<section class="section">
<p>
의료영상·생체신호·임상텍스트 등 의료 데이터 전반을 대상으로, 표현 학습·생성 모델·
멀티모달 융합·약한 감독 학습에 이르는 인공지능 기법 전반을 연구합니다. 반복되는 질문은
하나입니다 — 한 상황에서 학습한 것이 다음 상황에서도 성립하는가. 다른 모달리티, 다른
피험자, 다른 병원으로 옮겨갔을 때 말입니다.
</p>
<p>
아래 그림은 연구실에서 발표한 논문에서 가져온 것으로, 각 방향의 구체적인 사례일 뿐
연구 범위를 한정하지는 않습니다.
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
