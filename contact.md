---
layout: page
lang: en
ref: contact
permalink: /contact/
title: "Contact"
description: "How to reach MILE Lab — email, our office in the IT Building, and directions to the Yeungnam University Gyeongsan campus."
intro: "Email is the most reliable way to reach us."
---
{%- assign L = site.data.i18n[page.lang] -%}

<section class="section">
  <dl class="dl-grid">
    <dt>{{ L.email }}</dt>
    <dd><a href="mailto:{{ site.email }}">{{ site.email }}</a></dd>

    <dt>{{ L.office }}</dt>
    <dd>Room 223, IT Building (IT관)</dd>

    <dt>{{ L.address_label }}</dt>
    <dd>
      School of Computer Science and Engineering, Yeungnam University<br>
      280 Daehak-ro, Gyeongsan-si, Gyeongsangbuk-do 38541, Republic of Korea
    </dd>
  </dl>
</section>

<section class="section">
  <h2>{{ L.directions }}</h2>
  <p>
    The lab is on the Gyeongsan campus of Yeungnam University. The School of
    Computer Science and Engineering is housed in the IT Building, and our
    office is Room 223.
  </p>
  <p>
    The campus is next to Yeungnam University Station, the last stop on Daegu
    Metro Line 2. Once on campus, the map links below will take you to the IT
    Building.
  </p>
  <p>
    <a class="btn ghost" href="https://map.naver.com/p/search/%EC%98%81%EB%82%A8%EB%8C%80%ED%95%99%EA%B5%90%20IT%EA%B4%80" target="_blank" rel="noopener">Naver Map</a>
    <a class="btn ghost" href="https://map.kakao.com/?q=%EC%98%81%EB%82%A8%EB%8C%80%ED%95%99%EA%B5%90%20IT%EA%B4%80" target="_blank" rel="noopener">Kakao Map</a>
  </p>
</section>

<section class="section">
  <h2>{{ L.inquiries }}</h2>
  <p>
    Prospective undergraduate researchers and graduate students are welcome to
    write. A short email is enough to start: what you have worked on, which of
    our topics interests you, and when you would like to begin. A CV and a
    transcript help but are not required for a first message.
  </p>
  <p>
    Please write in English or Korean, whichever you are more comfortable with.
  </p>
  <p>
    <a class="btn" href="mailto:{{ site.email }}">{{ site.email }}</a>
    <a class="btn ghost" href="{{ '/members/lab-members/' | relative_url }}">{{ L.join_us }}</a>
  </p>
</section>
