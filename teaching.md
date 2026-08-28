---
layout: page
lang: en
ref: teaching
permalink: /teaching/
title: "Teaching"
description: "Courses taught by Euijin Jung at the School of Computer Science and Engineering, Yeungnam University."
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
