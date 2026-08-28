---
layout: page
lang: ko
ref: contact
permalink: /ko/contact/
title: "연락처"
description: "MILE Lab 연락처 — 이메일, 영남대학교 IT관 223호 위치와 경산 캠퍼스 찾아오는 길 안내입니다."
intro: "이메일로 연락 주시는 것이 가장 확실합니다."
---
{%- assign L = site.data.i18n[page.lang] -%}

<section class="section">
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
  <p>
    연구실은 영남대학교 경산 캠퍼스에 있습니다. 컴퓨터학부는 IT관에 있으며, 연구실은
    IT관 223호입니다.
  </p>
  <p>
    캠퍼스는 대구도시철도 2호선 종점인 영남대역과 맞닿아 있습니다. 캠퍼스에 도착한
    뒤에는 아래 지도 링크에서 IT관 위치를 확인하실 수 있습니다.
  </p>
  <p>
    <a class="btn ghost" href="https://map.naver.com/p/search/%EC%98%81%EB%82%A8%EB%8C%80%ED%95%99%EA%B5%90%20IT%EA%B4%80" target="_blank" rel="noopener">네이버 지도</a>
    <a class="btn ghost" href="https://map.kakao.com/?q=%EC%98%81%EB%82%A8%EB%8C%80%ED%95%99%EA%B5%90%20IT%EA%B4%80" target="_blank" rel="noopener">카카오맵</a>
  </p>
</section>

<section class="section">
  <h2>{{ L.inquiries }}</h2>
  <p>
    학부연구생과 대학원 진학을 고민하는 분들의 연락을 환영합니다. 첫 연락은 짧아도
    괜찮습니다. 지금까지 해 온 일, 연구실 주제 중 관심 있는 부분, 그리고 언제부터
    시작하고 싶은지 정도를 적어 주시면 됩니다. 이력서와 성적증명서가 있으면 도움이
    되지만 첫 메일에 반드시 필요하지는 않습니다.
  </p>
  <p>
    한국어와 영어 중 편한 쪽으로 작성해 주세요.
  </p>
  <p>
    <a class="btn" href="mailto:{{ site.email }}">{{ site.email }}</a>
    <a class="btn ghost" href="{{ '/ko/members/lab-members/' | relative_url }}">{{ L.join_us }}</a>
  </p>
</section>
