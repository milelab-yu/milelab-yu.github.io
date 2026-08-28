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

<section class="section">
<p>
We work on machine learning for medical data of every kind — images, biosignals,
and clinical text — and across the methods that make it usable: representation
learning, generative modelling, multimodal fusion, and learning under weak or
shifting supervision. The recurring question is whether something learned in one
setting still holds in the next: another modality, another subject, another hospital.
</p>
<p>
The figures below come from our published work and stand as concrete instances of
each direction rather than the boundary of it.
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
