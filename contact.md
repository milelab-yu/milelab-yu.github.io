---
layout: page
lang: en
ref: contact
permalink: /contact/
title: "Contact"
description: "Contact MILE Lab — email, office in Room 223 of the IT Building, and a map of the Yeungnam University Gyeongsan campus."
---
{%- assign L = site.data.i18n[page.lang] -%}

<section class="section">
  <dl class="dl-grid">
    <dt>{{ L.email }}</dt>
    <dd><a href="mailto:{{ site.email }}">{{ site.email }}</a></dd>

    <dt>{{ L.office }}</dt>
    <dd>Room 223, IT Building</dd>

    <dt>{{ L.address_label }}</dt>
    <dd>
      280 Daehak-ro, Gyeongsan-si, Gyeongsangbuk-do 38541, Republic of Korea<br>
      School of Computer Science and Engineering, Yeungnam University
    </dd>
  </dl>
</section>

<section class="section">
  <h2>{{ L.directions }}</h2>
  <div class="map-embed">
    <iframe
      src="https://map.kakao.com/?q=%EC%98%81%EB%82%A8%EB%8C%80%ED%95%99%EA%B5%90%20IT%EA%B4%80"
      title="Map of the IT Building, Yeungnam University (Kakao Map)"
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>
