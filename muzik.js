/* Muzik latar Jejak TP Matematik.

   Dijana dengan WebAudio, tiada fail audio dan tiada isu hak cipta.
   Lagu gelung lembut 84 bpm: pad empat kord (C - Am - F - G), bunyi
   petikan pentatonik yang dipilih secara rawak berbenih, dan bass halus.
   Isi padu sengaja rendah supaya tidak menenggelamkan bunyi betul/salah.

   Peraturan:
   - Bermula hanya selepas murid menekan sesuatu (telefon menyekat autoplay).
   - Berhenti bila tab tersembunyi, dalam mod cikgu, atau bila dimatikan.
   - Pilihan murid disimpan dalam localStorage "jm-muzik" ("0" = tutup).
   - Guna AudioContext yang sama dengan app jika ada (window.JM_AC). */
(function () {
  "use strict";
  var KEY = "jm-muzik", BPM = 84, SAAT = 60 / BPM;
  var KORD = [[261.63, 329.63, 392.0], [220.0, 261.63, 329.63], [174.61, 220.0, 261.63], [196.0, 246.94, 293.66]];
  var BASS = [65.41, 55.0, 43.65, 49.0];
  var PENTA = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];

  var ctx = null, induk = null, jalan = false, timer = null, palang = 0, tempoMula = 0, rand = 7;
  var hidup = true, mod = "murid", terbuka = false;

  try { hidup = localStorage.getItem(KEY) !== "0"; } catch (e) {}

  function rawak() { rand = (rand * 1664525 + 1013904223) % 4294967296; return rand / 4294967296; }
  function ambilCtx() {
    if (ctx) return ctx;
    ctx = window.JM_AC ? window.JM_AC() : null;
    if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ctx = null; } }
    if (ctx) { induk = ctx.createGain(); induk.gain.value = 0; induk.connect(ctx.destination); }
    return ctx;
  }
  function nota(f, t, dur, jenis, vol) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = jenis; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + Math.min(0.08, dur / 3));
    g.gain.exponentialRampToValueAtTime(0.0002, t + dur);
    o.connect(g); g.connect(induk); o.start(t); o.stop(t + dur + 0.05);
  }
  /* Satu palang = 4 ketukan. Empat palang = satu pusingan kord. */
  function jadualkan(t) {
    var k = palang % 4, kord = KORD[k], dur = SAAT * 4;
    kord.forEach(function (f, i) { nota(f, t, dur * 1.05, "sine", 0.05); nota(f * 2, t + 0.01 * i, dur, "triangle", 0.012); });
    nota(BASS[k], t, SAAT * 1.9, "triangle", 0.06);
    nota(BASS[k], t + SAAT * 2, SAAT * 1.9, "triangle", 0.045);
    for (var i = 0; i < 8; i++) {
      if (rawak() < 0.55) {
        var f = PENTA[Math.floor(rawak() * PENTA.length)];
        nota(f, t + i * SAAT / 2, SAAT * 0.9, "triangle", 0.022);
      }
    }
    palang++;
  }
  function pusing() {
    if (!jalan) return;
    while (tempoMula < ctx.currentTime + 1.2) { jadualkan(tempoMula); tempoMula += SAAT * 4; }
  }
  function mula() {
    if (jalan || !hidup || !terbuka || mod !== "murid" || document.hidden) return;
    if (!ambilCtx()) return;
    if (ctx.state === "suspended") ctx.resume();
    jalan = true; tempoMula = ctx.currentTime + 0.1;
    induk.gain.cancelScheduledValues(ctx.currentTime);
    induk.gain.setValueAtTime(induk.gain.value, ctx.currentTime);
    induk.gain.linearRampToValueAtTime(0.9, ctx.currentTime + 2);
    pusing(); timer = setInterval(pusing, 400);
  }
  function henti() {
    if (!jalan) return;
    jalan = false; clearInterval(timer);
    try {
      induk.gain.cancelScheduledValues(ctx.currentTime);
      induk.gain.setValueAtTime(induk.gain.value, ctx.currentTime);
      induk.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
    } catch (e) {}
  }
  function kemas() { (hidup && terbuka && mod === "murid" && !document.hidden) ? mula() : henti(); }

  var sw = null;
  function lukisButang() {
    if (sw) sw.checked = hidup;
    try { if (window.kemasIkonBunyi) window.kemasIkonBunyi(); } catch (e) {}
  }
  function tetap(nilai, dariPengguna) {
    hidup = !!nilai; terbuka = terbuka || (hidup && dariPengguna);
    try { localStorage.setItem(KEY, hidup ? "1" : "0"); } catch (e) {}
    lukisButang(); kemas();
  }
  function pasangButang() {
    sw = document.getElementById("swMuzik"); if (!sw) return;
    sw.checked = hidup;
  }
  /* Isyarat pertama murid membuka pintu audio. */
  function isyarat() {
    terbuka = true; kemas();
    ["pointerdown", "keydown", "touchstart"].forEach(function (n) { document.removeEventListener(n, isyarat, true); });
  }
  ["pointerdown", "keydown", "touchstart"].forEach(function (n) { document.addEventListener(n, isyarat, true); });
  document.addEventListener("visibilitychange", kemas);
  window.JM_MUZIK = {
    mod: function (m) { mod = m; kemas(); },
    hidup: function () { return hidup; },
    set: function (v) { tetap(v, true); }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", pasangButang); else pasangButang();
})();
