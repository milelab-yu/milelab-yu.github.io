---
layout: page
lang: en
ref: research
permalink: /research/
title: "Research"
description: "Brain-signal foundation models, non-invasive EEG/fNIRS analysis, conditional and cross-modality medical image synthesis at MILE Lab @ YU."
intro: "Learning representations that hold across modalities, subjects, and label budgets."
---
{%- assign L = site.data.i18n[page.lang] -%}
{%- assign areas = site.data.research[page.lang] -%}

<section class="section">
<p>
MILE Lab works toward general medical intelligence across multi-modality:
models that learn the structure shared by medical images, brain signals, and
clinical text. What ties the topics below together is a practical constraint —
medical data arrive in different modalities, from different subjects and sites,
with very few labels that can be trusted. Our question in each case is whether a
representation learned in one such setting survives the move to the next.
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
