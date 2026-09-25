/* Kertas conteng untuk Jejak TP Matematik.

   Murid Matematik perlu mengira di atas kertas. Tanpa ruang conteng, mereka
   menekan pilihan secara meneka. Butang kuning di bucu bawah membuka helaian
   bertitik yang boleh dilukis dengan jari, dan soalan tetap kelihatan di atas.

   - Muncul hanya semasa ada soalan (elemen .qtext dalam #murid).
   - Dikosongkan secara automatik bila soalan bertukar.
   - Pen gelap, pen biru, pemadam, kosongkan, tutup.
   - Tiada data disimpan atau dihantar. */
(function () {
  "use strict";
  var btn, lembar, kanvas, ctx, buka = false, lukis = false, x0 = 0, y0 = 0, alat = "pen", warna = "#1C1B3A", soalanKini = "";

  function buat(t, id, html, attr) {
    var e = document.createElement(t); if (id) e.id = id; if (html) e.innerHTML = html;
    for (var k in (attr || {})) e.setAttribute(k, attr[k]);
    return e;
  }
  function ukur() {
    var dpr = window.devicePixelRatio || 1, r = kanvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    var w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
    if (kanvas.width === w && kanvas.height === h) return;
    kanvas.width = w; kanvas.height = h;
    ctx = kanvas.getContext("2d");
    ctx.scale(dpr, dpr); ctx.lineCap = "round"; ctx.lineJoin = "round";
  }
  function titik(e) { var r = kanvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
  function mula(e) {
    if (!ctx) ukur();
    e.preventDefault(); lukis = true;
    var p = titik(e); x0 = p[0]; y0 = p[1];
    try { kanvas.setPointerCapture(e.pointerId); } catch (x) {}
    garis(x0, y0, x0 + 0.01, y0 + 0.01);
  }
  function garis(a, b, c, d) {
    if (!ctx) return;
    ctx.globalCompositeOperation = alat === "padam" ? "destination-out" : "source-over";
    ctx.strokeStyle = warna; ctx.lineWidth = alat === "padam" ? 22 : 2.6;
    ctx.beginPath(); ctx.moveTo(a, b); ctx.lineTo(c, d); ctx.stroke();
  }
  function gerak(e) {
    if (!lukis) return;
    e.preventDefault();
    var p = titik(e); garis(x0, y0, p[0], p[1]); x0 = p[0]; y0 = p[1];
  }
  function henti() { lukis = false; }
  function kosong() { if (ctx) { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, kanvas.width, kanvas.height); ctx.restore(); } }
  function tetapAlat(a, w) {
    alat = a; if (w) warna = w;
    [].forEach.call(lembar.querySelectorAll("[data-alat]"), function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-alat") === (a === "padam" ? "padam" : (w === "#1F5FD9" ? "biru" : "gelap")) ? "true" : "false");
    });
  }
  function togol(v) {
    buka = v === undefined ? !buka : v;
    lembar.hidden = !buka; [].forEach.call(document.querySelectorAll("[data-conteng]"), function (b) { b.setAttribute("aria-expanded", buka ? "true" : "false"); });
    document.body.classList.toggle("conteng-buka", buka);
    if (buka) { setTimeout(function () { ukur(); }, 30); try { if (window.JM_GETAR) window.JM_GETAR(8); } catch (e) {} }
  }
  function kemasKelihatan() {
    var adaSoalan = !!document.querySelector("#murid .qtext");
    document.body.classList.toggle("ada-conteng", adaSoalan);
    if (adaSoalan) {
      var akt = [].slice.call(document.querySelectorAll("#murid .actions")).pop();
      if (akt && !akt.querySelector("[data-conteng]")) {
        var b = buat("button", "", "&#9999;&#65039; Conteng", { type: "button", "data-conteng": "1", "aria-controls": "conteng", "aria-expanded": buka ? "true" : "false", title: "Kertas conteng" });
        b.className = "btn ghost sm"; b.onclick = function () { togol(); };
        akt.appendChild(b);
      }
    }
    if (!adaSoalan && buka) togol(false);
    var q = adaSoalan ? document.querySelector("#murid .qtext").textContent : "";
    if (q && q !== soalanKini) { soalanKini = q; kosong(); }
  }

  function pasang() {
    btn = null;

    lembar = buat("div", "conteng", "", { role: "region", "aria-label": "Kertas conteng" });
    lembar.hidden = true;
    lembar.innerHTML =
      '<div class="alat"><b>Conteng</b>' +
      '<button type="button" data-alat="gelap" aria-pressed="true" aria-label="Pen gelap">&#9679;</button>' +
      '<button type="button" data-alat="biru" aria-pressed="false" aria-label="Pen biru" style="color:#1F5FD9">&#9679;</button>' +
      '<button type="button" data-alat="padam" aria-pressed="false" aria-label="Pemadam">Padam</button>' +
      '<button type="button" data-alat="kosong" aria-label="Kosongkan kertas">Kosong</button>' +
      '<button type="button" data-alat="tutup" aria-label="Tutup kertas conteng">&#10005;</button></div>';
    kanvas = document.createElement("canvas");
    kanvas.setAttribute("aria-label", "Kertas conteng bertitik. Lukis dengan jari.");
    lembar.appendChild(kanvas);
    document.body.appendChild(lembar);


    lembar.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("[data-alat]"); if (!b) return;
      var a = b.getAttribute("data-alat");
      if (a === "gelap") tetapAlat("pen", "#1C1B3A");
      else if (a === "biru") tetapAlat("pen", "#1F5FD9");
      else if (a === "padam") tetapAlat("padam");
      else if (a === "kosong") kosong();
      else if (a === "tutup") togol(false);
    });
    kanvas.addEventListener("pointerdown", mula);
    kanvas.addEventListener("pointermove", gerak);
    kanvas.addEventListener("pointerup", henti);
    kanvas.addEventListener("pointercancel", henti);
    window.addEventListener("resize", function () { if (buka) ukur(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && buka) togol(false); });
    var akar = document.getElementById("stage") || document.getElementById("murid") || document.body;
    new MutationObserver(kemasKelihatan).observe(akar, { childList: true, subtree: true, characterData: true });
    kemasKelihatan();
  }
  window.JM_CONTENG = { togol: togol, kosong: kosong };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", pasang); else pasang();
})();
