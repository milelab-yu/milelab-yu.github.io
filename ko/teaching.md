---
layout: page
lang: ko
ref: teaching
permalink: /ko/teaching/
title: "강의"
description: "영남대학교 컴퓨터학부 정의진 교수 담당 과목."
---
{%- assign L = site.data.i18n[page.lang] -%}

{%- for t in site.data.teaching[page.lang] %}
<section class="section">
  <h2>{{ t.term }}</h2>
  <ul class="course-list plain">
    {%- for c in t.courses %}
    <li>
      <span class="course-title">{{ c.title }}</span>
      <span class="course-alt">{{ c.title_local }}</span>
    </li>
    {%- endfor %}
  </ul>
</section>
{%- endfor %}
