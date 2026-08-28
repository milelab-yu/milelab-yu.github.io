---
layout: page
lang: en
ref: news
permalink: /news/
title: "News"
intro: "Announcements from the lab and press coverage of our work."
description: "News and press coverage from MILE Lab @ YU, Medical Intelligence & Learning Lab at Yeungnam University."
---
{%- assign L = site.data.i18n[page.lang] -%}
{%- assign months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec" | split: "," -%}
{%- assign items = site.data.news[page.lang] | sort: "date" | reverse -%}
{%- if items and items.size > 0 -%}
{%- assign years = items | group_by_exp: "n", "n.date | slice: 0, 4" -%}
{%- for year in years %}
<section class="section">
<h2>{{ year.name }}</h2>
<ul class="news-list">
{%- for n in year.items -%}
{%- assign d = n.date | split: "-" -%}
{%- assign mi = d[1] | plus: 0 | minus: 1 -%}
<li>
<time datetime="{{ n.date }}">{{ months[mi] }} {{ d[2] | plus: 0 }}</time>
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
<strong>No news yet.</strong>
Announcements and press coverage will appear here.
</div>
{%- endif %}
