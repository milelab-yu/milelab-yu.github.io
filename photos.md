---
layout: page
lang: en
ref: photos
permalink: /photos/
title: "Photos"
description: "Photographs from MILE Lab — group photos, seminars, and conference trips will be posted here."
intro: "A record of the lab as it takes shape."
---
{%- assign L = site.data.i18n[page.lang] -%}

<section class="section">
  <div class="empty-state">
    <strong>{{ L.empty_photos }}</strong>
    {{ L.empty_photos_body }}
  </div>
  <p>
    <a class="btn ghost" href="{{ '/news/' | relative_url }}">{{ L.all_news }}</a>
  </p>
</section>
