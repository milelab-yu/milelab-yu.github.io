---
layout: page
lang: en
ref: research
permalink: /research/
title: "Research"
description: "Medical AI research at MILE Lab @ YU — foundation models, multimodal learning, generative models, label-efficient learning, and trustworthy clinical AI."
intro: "Machine learning across medical images, biosignals, and clinical text."
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
