(function () {
  "use strict";

  /* ---- 테마 토글: auto → light → dark → auto ---------------------------- */
  var KEY = "milelab-theme";
  var root = document.documentElement;
  var btn = document.querySelector("[data-theme-toggle]");
  var labels = { auto: null, light: null, dark: null };

  function read() {
    try { var v = localStorage.getItem(KEY); return v === "light" || v === "dark" ? v : "auto"; }
    catch (e) { return "auto"; }
  }
  function apply(mode) {
    if (mode === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", mode);
    if (!btn) return;
    var txt = btn.querySelector(".theme-toggle-text");
    if (txt && labels[mode]) txt.textContent = labels[mode];
    btn.setAttribute("data-mode", mode);
  }
  if (btn) {
    labels.auto = btn.getAttribute("data-label-auto") || btn.querySelector(".theme-toggle-text").textContent;
    labels.light = btn.getAttribute("data-label-light") || labels.auto;
    labels.dark = btn.getAttribute("data-label-dark") || labels.auto;
    apply(read());
    btn.addEventListener("click", function () {
      var order = ["auto", "light", "dark"];
      var next = order[(order.indexOf(read()) + 1) % order.length];
      try { next === "auto" ? localStorage.removeItem(KEY) : localStorage.setItem(KEY, next); } catch (e) {}
      apply(next);
    });
  }

  /* ---- 모바일 내비 ------------------------------------------------------ */
  var navBtn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (navBtn && nav) {
    navBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
