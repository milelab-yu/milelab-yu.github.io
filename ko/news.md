---
layout: page
lang: ko
ref: news
permalink: /ko/news/
title: "소식"
intro: "연구실 소식과 언론 보도를 모았습니다."
description: "영남대학교 의료지능·학습 연구실(MILE Lab @ YU)의 소식과 언론 보도입니다."
---
{%- assign L = site.data.i18n[page.lang] -%}
{%- assign items = site.data.news[page.lang] | sort: "date" | reverse -%}
{%- if items and items.size > 0 -%}
{%- assign years = items | group_by_exp: "n", "n.date | slice: 0, 4" -%}
{%- for year in years %}
<section class="section">
<h2>{{ year.name }}년</h2>
<ul class="news-list">
{%- for n in year.items -%}
{%- assign d = n.date | split: "-" -%}
<li>
<time datetime="{{ n.date }}">{{ d[1] | plus: 0 }}월 {{ d[2] | plus: 0 }}일</time>
<div class="news-body">
<h3>{{ n.title }}</h3>
<p>{{ n.body }}</p>
{%- if n.link %}
<p><a href="{{ n.link }}" target="_blank" rel="noopener">{{ n.link_label | default: L.read_more }} &rarr;</a></p>
{%- endif %}
</div>
</li>
{%- endfor %}
</ul>
</section>
{%- endfor %}
{%- else %}
<div class="empty-state">
<strong>아직 등록된 소식이 없습니다.</strong>
연구실 소식과 언론 보도가 이곳에 올라옵니다.
</div>
{%- endif %}
