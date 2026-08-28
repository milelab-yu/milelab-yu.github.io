---
layout: page
lang: en
ref: teaching
permalink: /teaching/
title: "Teaching"
description: "Courses taught by Euijin Jung at Yeungnam University, and research topics open to undergraduate researchers."
intro: "Coursework and supervised research at MILE Lab, School of Computer Science and Engineering, Yeungnam University."
---
{%- assign L = site.data.i18n[page.lang] -%}

<section class="section">
  <h2>{{ L.courses }}</h2>
  {%- for t in site.data.teaching[page.lang] %}
  <h3 class="term-head">{{ t.term }}</h3>
  <ul class="course-list">
    {%- for c in t.courses %}
    <li>
      <div class="course-name">
        <strong>{{ c.title }}</strong>
        <span class="course-alt">{{ c.title_local }}</span>
      </div>
      <dl class="course-meta">
        <dt>{{ L.course_kind }}</dt><dd>{{ c.kind }} · {{ c.credits }}</dd>
        <dt>{{ L.course_time }}</dt><dd>{{ c.schedule }}</dd>
        <dt>{{ L.course_room }}</dt><dd>{{ c.room }}</dd>
        <dt>{{ L.course_text }}</dt><dd>{{ c.textbook }}</dd>
      </dl>
    </li>
    {%- endfor %}
  </ul>
  {%- if t.office_hours %}
  <p class="office-hours">{{ L.office_hours }}: {{ t.office_hours }}</p>
  {%- endif %}
  {%- endfor %}
</section>

<section class="section">
  <h2>{{ L.undergrad_research }}</h2>
  <p>
    Undergraduate researchers are welcome to work in the lab for a semester or
    longer. A project usually starts by reproducing a published result, then
    changing one thing about it and reporting what happened. The topics below
    are starting points rather than fixed assignments — the scope is settled
    together once we know what you want to learn.
  </p>

  <div class="grid cols-2">
    <article class="card">
      <p class="kicker">Brain signals</p>
      <h3>Reproducing EEG and fNIRS baselines</h3>
      <p>
        Re-implement a published EEG or fNIRS decoding pipeline on public data,
        check whether the reported numbers hold, and measure how much accuracy
        is lost on a subject the model has never seen.
      </p>
    </article>

    <article class="card">
      <p class="kicker">Representation learning</p>
      <h3>Pretraining on unlabelled signals</h3>
      <p>
        Train a self-supervised model on unlabelled recordings and test how few
        labelled trials are enough to reach usable accuracy on a downstream
        task.
      </p>
    </article>

    <article class="card">
      <p class="kicker">Generative models</p>
      <h3>Conditional image generation</h3>
      <p>
        Train a GAN or a diffusion model with an explicit condition — a
        segmentation mask, a structural constraint — and evaluate whether the
        generated images actually respect that condition.
      </p>
    </article>

    <article class="card">
      <p class="kicker">Medical imaging</p>
      <h3>Cross-modality synthesis</h3>
      <p>
        Translate between imaging modalities on paired public data, then study
        the failure cases: which anatomical structures survive the translation
        and which ones are invented by the model.
      </p>
    </article>

    <article class="card">
      <p class="kicker">Multimodal learning</p>
      <h3>Images, signals, and the text around them</h3>
      <p>
        Pair reports or annotations with the corresponding image or recording
        and test whether a shared representation transfers better than a
        modality-specific one.
      </p>
    </article>

    <article class="card">
      <p class="kicker">Evaluation</p>
      <h3>Labels that disagree</h3>
      <p>
        Medical labels are often subjective and inconsistent between annotators.
        Quantify that disagreement on a public dataset and check how much of a
        reported improvement survives it.
      </p>
    </article>
  </div>
</section>

<section class="section">
  <h2>What you need to start</h2>
  <p>
    Python and comfort with linear algebra and probability are enough. Prior
    deep-learning coursework helps but is not a prerequisite; reading papers
    carefully and writing code you can defend matters more. Progress is
    discussed in regular meetings, and results should be reproducible from the
    repository you keep.
  </p>
  <p>
    If one of the topics above interests you, send an email with a short note on
    what you have built or read so far, and when you would like to start.
  </p>
  <p>
    <a class="btn" href="mailto:{{ site.email }}">{{ site.email }}</a>
    <a class="btn ghost" href="{{ '/research/' | relative_url }}">{{ L.research_areas }}</a>
  </p>
</section>
