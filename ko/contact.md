---
layout: page
lang: ko
ref: contact
permalink: /ko/contact/
title: "연락처"
description: "MILE Lab 연락처 — 이메일, 영남대학교 IT관 223호 위치와 경산 캠퍼스 약도입니다."
---
{%- assign L = site.data.i18n[page.lang] -%}

<section class="section">
  <p class="welcome-note">
    학부연구생과 대학원 진학을 고민하는 분들의 연락을 환영합니다.
  </p>
  <dl class="dl-grid">
    <dt>{{ L.email }}</dt>
    <dd><a href="mailto:{{ site.email }}">{{ site.email }}</a></dd>

    <dt>{{ L.office }}</dt>
    <dd>IT관 223호</dd>

    <dt>{{ L.address_label }}</dt>
    <dd>
      경상북도 경산시 대학로 280 (38541)<br>
      영남대학교 컴퓨터학부 IT관 223호
    </dd>
  </dl>
</section>

<section class="section">
  <h2>{{ L.directions }}</h2>
  <div class="map-embed">
    <iframe
      src="https://map.kakao.com/?q=%EC%98%81%EB%82%A8%EB%8C%80%ED%95%99%EA%B5%90%20IT%EA%B4%80"
      title="영남대학교 IT관 위치 (카카오맵)"
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>
