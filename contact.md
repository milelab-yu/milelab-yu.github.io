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
  <p class="welcome-note">
    Enquiries from prospective undergraduate researchers and graduate students are welcome.
  </p>
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
      src="https://www.google.com/maps?q=Yeungnam+University+IT+Building&hl=en&z=16&output=embed"
      title="Map of the IT Building, Yeungnam University"
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen></iframe>
  </div>
  <p class="map-links">
    <a href="https://map.naver.com/p/search/%EC%98%81%EB%82%A8%EB%8C%80%ED%95%99%EA%B5%90%20IT%EA%B4%80" target="_blank" rel="noopener">Naver Map</a>
    <a href="https://map.kakao.com/?q=%EC%98%81%EB%82%A8%EB%8C%80%ED%95%99%EA%B5%90%20IT%EA%B4%80" target="_blank" rel="noopener">Kakao Map</a>
  </p>
</section>
