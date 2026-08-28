---
layout: page
lang: ko
ref: photos
permalink: /ko/photos/
title: "사진"
description: "MILE Lab 활동 사진 — 단체 사진, 세미나, 학회 참석 사진을 이곳에 올립니다."
intro: "연구실이 만들어지는 과정을 기록합니다."
---
{%- assign L = site.data.i18n[page.lang] -%}

<section class="section">
  <div class="empty-state">
    <strong>{{ L.empty_photos }}</strong>
    {{ L.empty_photos_body }}
  </div>
  <p>
    <a class="btn ghost" href="{{ '/ko/news/' | relative_url }}">{{ L.all_news }}</a>
  </p>
</section>
