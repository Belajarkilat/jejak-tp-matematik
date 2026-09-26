/* Widget Tingkatan 2 Bab 1 Pola dan Jujukan.
   Satu widget `t2pola` dengan empat mod (spec.mod):
   - mancis  : corak batang mancis (segi empat atau segi tiga berderet); gelongsor n
   - titik   : corak titik (segi empat sama, segi tiga, segi empat tepat); lapisan baharu berwarna lain
   - jujukan : jubin jujukan (genap, ganjil, Fibonacci, ganda dua, aritmetik) dengan beza antara sebutan
   - pascal  : Segi Tiga Pascal; gelongsor bilangan baris
   Semua nombor dikira daripada formula. Unsur jawapan (bilangan, senarai sebutan, rumus)
   bertanda hasil supaya tersembunyi dalam mod cabar. Fail ini didaftarkan oleh
   interaktif.js (Node: readdirSync widget-*.js; pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    function bulatan(cx, cy, r, isi, garis) {
      return '<circle cx="' + b1(cx) + '" cy="' + b1(cy) + '" r="' + b1(r) + '" fill="' + h.w(isi) + '" stroke="' + h.w(garis) + '" stroke-width="1.2"></circle>';
    }
    /* Ungkapan berindeks, rata kiri: lebar ikut formula ungkap() dalam interaktif.js. */
    function ung(x, y, segs, o) {
      o = o || {};
      var sz = o.saiz || 12, jum = 0, i;
      for (i = 0; i < segs.length; i++) jum += typeof segs[i] === "string" ? segs[i].length * sz * 0.6 : segs[i].p.length * 11 * 0.6;
      return h.ungkap(x + jum / 2, y, segs, o);
    }
    function C(r, k) { var v = 1, i; for (i = 1; i <= k; i++) v = v * (r - k + i) / i; return Math.round(v); }
    function sebutan(j, n) {
      if (j.t === "lin") return j.a + (n - 1) * j.d;
      if (j.t === "fib") { var a = 1, b = 1, i, t; if (n <= 2) return 1; for (i = 3; i <= n; i++) { t = a + b; a = b; b = t; } return b; }
      if (j.t === "kuasa2") return n * n;
      if (j.t === "segi3") return n * (n + 1) / 2;
      if (j.t === "ganda") return j.a * Math.pow(j.r, n - 1);
      throw new Error("jenis jujukan tidak dikenali: " + j.t);
    }
    function senarai(j, n) { var o = [], k; for (k = 1; k <= n; k++) o.push(sebutan(j, k)); return o; }
    var NAMA_BENTUK = { segiempat: "segi empat sama", segitiga: "segi tiga", oblong: "segi empat tepat" };
    var NAMA_MANCIS = { segiempat: "segi empat", segitiga: "segi tiga" };
    function bentukSemasa(c, s) { return Array.isArray(c.bentuk) ? c.bentuk[s.b || 0] : (c.bentuk || "segiempat"); }
    function jumMancis(bentuk, n) { return bentuk === "segitiga" ? 2 * n + 1 : 3 * n + 1; }
    function jumTitik(bentuk, n) { return bentuk === "segitiga" ? n * (n + 1) / 2 : bentuk === "oblong" ? n * (n + 1) : n * n; }

    W.t2pola = {
      mula: function (c) {
        var mod = c.mod || "mancis";
        if (mod === "pascal") return { r: c.r == null ? 4 : c.r };
        if (mod === "jujukan") return { j: c.j || 0, n: c.n == null ? 4 : c.n };
        return { b: c.b || 0, n: c.n == null ? 3 : c.n };
      },
      kawalan: function (c) {
        var mod = c.mod || "mancis", k = [];
        if (mod === "pascal") return [{ k: "r", label: "baris", min: 0, maks: c.rMaks || 7 }];
        if (mod === "jujukan") {
          if (c.set.length > 1) k.push({ k: "j", label: "jujukan", min: 0, maks: c.set.length - 1, teks: c.set.map(function (x) { return x.nama; }) });
          k.push({ k: "n", label: "n", min: 1, maks: c.nMaks || 8 });
          return k;
        }
        k.push({ k: "n", label: "n", min: 1, maks: c.nMaks || 8 });
        if (Array.isArray(c.bentuk)) {
          var nama = mod === "mancis" ? NAMA_MANCIS : NAMA_BENTUK;
          k.push({ k: "b", label: "corak", min: 0, maks: c.bentuk.length - 1, teks: c.bentuk.map(function (x) { return nama[x]; }) });
        }
        return k;
      },
      kira: function (c, s) {
        var mod = c.mod || "mancis";
        if (mod === "mancis") { var bm = bentukSemasa(c, s); return { bentuk: bm, n: s.n, batang: jumMancis(bm, s.n) }; }
        if (mod === "titik") { var bt = bentukSemasa(c, s); return { bentuk: bt, n: s.n, titik: jumTitik(bt, s.n) }; }
        if (mod === "jujukan") { var j = c.set[s.j || 0]; return { n: s.n, nilai: sebutan(j, s.n), senarai: senarai(j, s.n) }; }
        var baris = [], k;
        for (k = 0; k <= s.r; k++) baris.push(C(s.r, k));
        return { r: s.r, baris: baris, jumlah: Math.pow(2, s.r) };
      },
      lukis: function (c, s) {
        var mod = c.mod || "mancis";
        if (mod === "mancis") return lukisMancis(c, s);
        if (mod === "titik") return lukisTitik(c, s);
        if (mod === "jujukan") return lukisJujukan(c, s);
        return lukisPascal(c, s);
      }
    };

    /* ---------- mancis ---------- */
    function lukisMancis(c, s) {
      var bentuk = bentukSemasa(c, s), n = s.n, nMaks = c.nMaks || 8, o = "", y0 = 30, x0, y1, sisi, i, lama = "", baru = "";
      function batang(x1, y1_, x2, y2, isBaru) {
        var g = h.garis(x1, y1_, x2, y2, { warna: isBaru ? "merah" : "hijau", tebal: 4 });
        if (isBaru) baru += g; else lama += g;
      }
      if (bentuk === "segiempat") {
        sisi = Math.min(30, Math.floor(232 / nMaks)); x0 = (260 - n * sisi) / 2; y1 = y0 + sisi;
        for (i = 0; i < n; i++) {
          var akhir = i === n - 1;
          batang(x0 + i * sisi, y0, x0 + (i + 1) * sisi, y0, akhir);
          batang(x0 + i * sisi, y1, x0 + (i + 1) * sisi, y1, akhir);
        }
        for (i = 0; i <= n; i++) batang(x0 + i * sisi, y0, x0 + i * sisi, y1, i === n || (n === 1 && i === 0));
      } else {
        sisi = Math.min(46, Math.floor(230 * 2 / (nMaks + 1))); var hw = sisi / 2, tg = sisi * 0.866;
        x0 = (260 - (n + 1) * hw) / 2; y1 = y0 + tg;
        var v = function (k) { return [x0 + k * hw, k % 2 === 0 ? y1 : y0]; };
        for (i = 0; i <= n; i++) { var a = v(i), b = v(i + 1); batang(a[0], a[1], b[0], b[1], i >= n || (n === 1)); }
        for (i = 0; i < n; i++) { var p = v(i), q = v(i + 2); batang(p[0], p[1], q[0], q[1], i === n - 1); }
      }
      o += lama + baru;
      var bil = jumMancis(bentuk, n), ter = [], k;
      for (k = 1; k <= n; k++) ter.push(jumMancis(bentuk, k));
      var rumus = bentuk === "segitiga" ? "2 × " + n + " + 1 = " + bil : "3 × " + n + " + 1 = " + bil;
      o += teks(8, y1 + 26, "Batang mancis = " + bil, { saiz: 13, warna: "tinta", tebal: true, hasil: true });
      o += teks(8, y1 + 44, "Batang: " + ter.join(", "), { saiz: 11, warna: "tinta2", hasil: true });
      o += teks(8, y1 + 62, "Rumus: " + rumus, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      return h.svg(y1 + 72, o, "Rajah corak batang mancis: " + n + " " + NAMA_MANCIS[bentuk] + " berderet, dan bilangan batang mancis yang digunakan");
    }

    /* ---------- titik ---------- */
    function lukisTitik(c, s) {
      var bentuk = bentukSemasa(c, s), n = s.n, nMaks = c.nMaks || 8, o = "", y0 = 12;
      var lajur = bentuk === "oblong" ? nMaks + 1 : nMaks, sel = Math.min(24, Math.floor(232 / lajur)), r = sel * 0.36;
      var tinggi = nMaks * sel, r0, c0, cx, cy;
      for (r0 = 0; r0 < n; r0++) {
        var bilLajur = bentuk === "segitiga" ? r0 + 1 : bentuk === "oblong" ? n + 1 : n;
        var xm = 130 - bilLajur * sel / 2;
        for (c0 = 0; c0 < bilLajur; c0++) {
          cx = xm + (c0 + 0.5) * sel; cy = y0 + (r0 + 0.5) * sel;
          var baru = bentuk === "segitiga" ? r0 === n - 1 : bentuk === "oblong" ? (r0 === n - 1 || c0 === n) : (r0 === n - 1 || c0 === n - 1);
          o += bulatan(cx, cy, r, baru ? "merah" : "ungu", baru ? "merah" : "ungu");
        }
      }
      var yt = y0 + tinggi + 22, ter = [], k, jum = jumTitik(bentuk, n);
      for (k = 1; k <= n; k++) ter.push(jumTitik(bentuk, k));
      var rumus = bentuk === "segitiga" ? n + " × " + (n + 1) + " ÷ 2 = " + jum : bentuk === "oblong" ? n + " × " + (n + 1) + " = " + jum : n + " × " + n + " = " + jum;
      o += teks(8, yt, "Jumlah titik = " + jum, { saiz: 13, warna: "tinta", tebal: true, hasil: true });
      o += teks(8, yt + 18, "Jujukan: " + ter.join(", "), { saiz: 11, warna: "tinta2", hasil: true });
      o += teks(8, yt + 36, "Rumus: " + rumus, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      o += teks(8, yt + 54, "Corak " + NAMA_BENTUK[bentuk], { saiz: 11, warna: "tinta3" });
      return h.svg(yt + 64, o, "Rajah corak titik berbentuk " + NAMA_BENTUK[bentuk] + " dengan " + n + " lapisan; lapisan terakhir berwarna merah");
    }

    /* ---------- jujukan ---------- */
    function lukisJujukan(c, s) {
      var j = c.set[s.j || 0], n = s.n, nMaks = c.nMaks || 8, tw = Math.floor(236 / nMaks), x0 = (260 - nMaks * tw) / 2, o = "", k;
      var nilai = senarai(j, n);
      o += teks(8, 16, "Jujukan: " + j.nama, { saiz: 12, warna: "tinta", tebal: true });
      for (k = 1; k <= n; k++) {
        var baru = k === n, x = x0 + (k - 1) * tw + 1;
        o += h.kotak(x, 26, tw - 2, 26, { isi: baru ? "merahLembut" : "hijauLembut", garis: baru ? "merah" : "hijau", tebal: 1.2 });
        o += teks(x + (tw - 2) / 2, 43, String(nilai[k - 1]), { saiz: 11, warna: "tinta", tebal: true, tengah: true });
        if (k >= 2) {
          var beza = nilai[k - 1] - nilai[k - 2], lbl = j.t === "ganda" ? "×" + j.r : (beza > 0 ? "+" : "") + beza;
          o += teks(x + (tw - 2) / 2, 68, lbl, { saiz: 11, warna: "tinta3", tengah: true });
        }
      }
      o += teks(8, 86, j.t === "ganda" ? "Setiap sebutan didarab " + j.r : "Beza antara sebutan berturut-turut", { saiz: 11, warna: "tinta3" });
      o += teks(8, 108, "Sebutan ke-" + n + " = " + nilai[n - 1], { saiz: 13, warna: "tinta", tebal: true, hasil: true });
      var segs = ["T(n) = "].concat(typeof j.rumus === "string" ? [j.rumus] : j.rumus);
      o += ung(8, 128, segs, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      return h.svg(140, o, "Rajah jujukan " + j.nama + ": " + n + " sebutan pertama dalam jubin, dengan beza antara sebutan berturut-turut");
    }

    /* ---------- pascal ---------- */
    function lukisPascal(c, s) {
      var r = s.r, rMaks = c.rMaks || 7, o = "", i, k, langkah = 22, ax = 30;
      o += teks(8, 14, "Segi Tiga Pascal", { saiz: 12, warna: "tinta", tebal: true });
      for (i = 0; i <= r; i++) {
        var y = 32 + i * langkah, akhir = i === r;
        for (k = 0; k <= i; k++) {
          var x = 130 + (k - i / 2) * ax;
          o += teks(x, y, String(C(i, k)), { saiz: 12, warna: akhir ? "merah" : "tinta", tebal: akhir, tengah: true });
        }
      }
      var yt = 32 + (rMaks + 1) * langkah + 8;
      o += ung(8, yt, ["Jumlah baris " + r + " = 2", { p: String(r) }, " = " + Math.pow(2, r)], { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      return h.svg(yt + 12, o, "Rajah Segi Tiga Pascal dari baris 0 hingga baris " + r + "; baris terakhir berwarna merah dan jumlahnya ialah dua kuasa baris");
    }
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
