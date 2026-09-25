/* Widget Tingkatan 1 Bab 3: Kuasa Dua, Punca Kuasa Dua, Kuasa Tiga dan Punca Kuasa Tiga.
   Satu widget `t1petak` dengan enam mod (spec.mod):
   - dua       : gelongsor n, petak n x n dilukis dan luasnya n x n dikira (kuasa dua)
   - sempurna  : gelongsor bilangan jubin N, jubin disusun menjadi petak terbesar;
                 jika ada baki, N bukan kuasa dua sempurna
   - tiga      : gelongsor n, kubus n x n x n dilukis daripada kubus kecil (kuasa tiga)
   - puncadua  : gelongsor luas petak, sisi petak ialah punca kuasa dua
   - puncatiga : gelongsor isi padu kubus, sisi kubus ialah punca kuasa tiga
   - anggar    : nombor yang bukan kuasa sempurna, punca dianggar pada garis nombor
   Semua nombor dikira daripada formula. Fail ini didaftarkan oleh interaktif.js
   (Node: readdirSync widget-*.js; pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;

    var NILAI_PUNCA2 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
    var NILAI_PUNCA3 = [1, 8, 27, 64, 125, 216];
    var NILAI_SEMPURNA = [];
    for (var q = 1; q <= 36; q++) NILAI_SEMPURNA.push(q);
    var NILAI_ANGGAR2 = [2, 3, 5, 7, 10, 12, 15, 20, 30, 40, 50, 60, 70, 90];
    var NILAI_ANGGAR3 = [2, 5, 10, 20, 30, 40, 60, 90, 100, 150, 200];

    function bul2(x) { return Math.round(x * 100) / 100; }
    function hasilG(isi, aktif) { return aktif ? '<g class="jmi-hasil">' + isi + "</g>" : isi; }
    function senarai(c, kunci, lalai) { return (c[kunci] && c[kunci].length) ? c[kunci] : lalai; }
    function teksNilai(a) { return a.map(String); }
    function idxNilai(a, v, lalai) { var n = a.indexOf(v); return n < 0 ? lalai : n; }
    function tepat(n, k) { var r = Math.round(Math.pow(n, 1 / k)); return Math.pow(r, k) === n ? r : null; }
    function baris(y, t, o) {
      o = o || {};
      return teks(o.x == null ? 8 : o.x, y, t, { saiz: o.saiz || 12, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil, tengah: o.tengah });
    }
    function tengah(y, segs, o) {
      o = o || {};
      return h.ungkap(130, y, segs, { saiz: o.saiz || 13, warna: o.warna || "tinta", tebal: o.tebal !== false, hasil: o.hasil });
    }

    /* Grid petak: garis-garis dalaman sebagai satu laluan. */
    function garisGrid(x0, y0, n, sel) {
      var d = "", t;
      for (t = 1; t < n; t++) {
        d += "M" + h.b1(x0 + t * sel) + " " + h.b1(y0) + "L" + h.b1(x0 + t * sel) + " " + h.b1(y0 + n * sel);
        d += "M" + h.b1(x0) + " " + h.b1(y0 + t * sel) + "L" + h.b1(x0 + n * sel) + " " + h.b1(y0 + t * sel);
      }
      return d ? h.laluan(d, { warna: "garis2", tebal: 0.8 }) : "";
    }
    function petak(x0, y0, n, sel, isi, garisWarna) {
      var o = h.kotak(x0, y0, n * sel, n * sel, { isi: isi, garis: garisWarna || "hijau", bulat: 0, tebal: 1.6 });
      return o + garisGrid(x0, y0, n, sel);
    }

    /* Kubus n x n x n dalam unjuran serong. (bx, by) = sudut kiri bawah muka hadapan. */
    function kubus(n, c, bx, by, warna) {
      var d = c * 0.5, o = "", t;
      function P(i, j, k) { return h.b1(bx + i * c + k * d) + " " + h.b1(by - j * c - k * d); }
      function poli(a, b, cc, dd, isi) { return h.laluan("M" + P.apply(null, a) + "L" + P.apply(null, b) + "L" + P.apply(null, cc) + "L" + P.apply(null, dd) + "Z", { isi: isi, warna: warna || "hijau", tebal: 1.6 }); }
      var g;
      o += poli([0, 0, 0], [n, 0, 0], [n, n, 0], [0, n, 0], "hijauLembut");
      g = ""; for (t = 1; t < n; t++) g += "M" + P(t, 0, 0) + "L" + P(t, n, 0) + "M" + P(0, t, 0) + "L" + P(n, t, 0);
      if (g) o += h.laluan(g, { warna: "garis2", tebal: 0.8 });
      o += poli([0, n, 0], [n, n, 0], [n, n, n], [0, n, n], "kuningLembut");
      g = ""; for (t = 1; t < n; t++) g += "M" + P(t, n, 0) + "L" + P(t, n, n) + "M" + P(0, n, t) + "L" + P(n, n, t);
      if (g) o += h.laluan(g, { warna: "garis2", tebal: 0.8 });
      o += poli([n, 0, 0], [n, 0, n], [n, n, n], [n, n, 0], "lembayungLembut");
      g = ""; for (t = 1; t < n; t++) g += "M" + P(n, t, 0) + "L" + P(n, t, n) + "M" + P(n, 0, t) + "L" + P(n, n, t);
      if (g) o += h.laluan(g, { warna: "garis2", tebal: 0.8 });
      return o;
    }

    var TINGGI = { dua: 240, sempurna: 250, tiga: 238, puncadua: 244, puncatiga: 238, anggar: 214 };

    W.t1petak = {
      mula: function (c) {
        var mod = c.mod;
        if (mod === "dua") return { n: c.n == null ? 4 : c.n };
        if (mod === "tiga") return { n: c.n == null ? 3 : c.n };
        if (mod === "sempurna") return { i: c.i == null ? idxNilai(senarai(c, "nilai", NILAI_SEMPURNA), 12, 0) : c.i };
        if (mod === "puncadua") return { i: c.i == null ? idxNilai(senarai(c, "nilai", NILAI_PUNCA2), 25, 0) : c.i };
        if (mod === "puncatiga") return { i: c.i == null ? idxNilai(senarai(c, "nilai", NILAI_PUNCA3), 27, 0) : c.i };
        if (mod === "anggar") return { i: c.i == null ? 0 : c.i };
        throw new Error("mod t1petak tidak dikenali: " + mod);
      },
      kawalan: function (c) {
        var mod = c.mod, a;
        if (mod === "dua") return [{ k: "n", label: "n", min: c.nMin || 1, maks: c.nMaks || 10 }];
        if (mod === "tiga") return [{ k: "n", label: "n", min: c.nMin || 1, maks: c.nMaks || 6 }];
        if (mod === "sempurna") { a = senarai(c, "nilai", NILAI_SEMPURNA); return [{ k: "i", label: "jubin", min: 0, maks: a.length - 1, teks: teksNilai(a) }]; }
        if (mod === "puncadua") { a = senarai(c, "nilai", NILAI_PUNCA2); return [{ k: "i", label: "luas", min: 0, maks: a.length - 1, teks: teksNilai(a) }]; }
        if (mod === "puncatiga") { a = senarai(c, "nilai", NILAI_PUNCA3); return [{ k: "i", label: "isi padu", min: 0, maks: a.length - 1, teks: teksNilai(a) }]; }
        a = senarai(c, "nilai", c.akar === 3 ? NILAI_ANGGAR3 : NILAI_ANGGAR2);
        return [{ k: "i", label: "nombor", min: 0, maks: a.length - 1, teks: teksNilai(a) }];
      },
      kira: function (c, s) {
        var mod = c.mod, a, N, k, r;
        if (mod === "dua") return { n: s.n, luas: s.n * s.n };
        if (mod === "tiga") return { n: s.n, isi: s.n * s.n * s.n };
        if (mod === "sempurna") {
          a = senarai(c, "nilai", NILAI_SEMPURNA); N = a[s.i]; k = Math.floor(Math.sqrt(N));
          return { N: N, k: k, lebih: N - k * k, sempurna: k * k === N };
        }
        if (mod === "puncadua") { a = senarai(c, "nilai", NILAI_PUNCA2); N = a[s.i]; return { luas: N, sisi: tepat(N, 2) }; }
        if (mod === "puncatiga") { a = senarai(c, "nilai", NILAI_PUNCA3); N = a[s.i]; return { isi: N, sisi: tepat(N, 3) }; }
        var akar = c.akar === 3 ? 3 : 2;
        a = senarai(c, "nilai", akar === 3 ? NILAI_ANGGAR3 : NILAI_ANGGAR2); N = a[s.i];
        var p = Math.pow(N, 1 / akar), lo = Math.floor(p);
        r = { N: N, akar: akar, a: lo, atas: lo + 1, bawah: Math.pow(lo, akar), hujung: Math.pow(lo + 1, akar), punca: bul2(p), dekatBawah: p - lo < 0.5 };
        return r;
      },
      lukis: function (c, s) {
        var mod = c.mod, r = this.kira(c, s), o = "", y, i, alt;

        if (mod === "dua") {
          var nm = c.nMaks || 10, sel = Math.floor(150 / nm), x0 = 55, y0 = 24, n = s.n;
          o += h.kotak(x0, y0, nm * sel, nm * sel, { garis: "garis", bulat: 0, tebal: 0.8 });
          o += petak(x0, y0, n, sel, "hijauLembut", "hijau");
          o += teks(x0 + n * sel / 2, y0 - 8, String(n), { tengah: true, saiz: 12, warna: "hijau", tebal: true });
          o += teks(x0 - 6, y0 + n * sel / 2 + 4, String(n), { kanan: true, saiz: 12, warna: "hijau", tebal: true });
          y = y0 + nm * sel + 24;
          o += tengah(y, [String(n), { p: "2" }, " = " + n + " × " + n], { saiz: 14 });
          o += tengah(y + 22, ["= " + r.luas + " petak"], { saiz: 14, warna: "ungu", hasil: true });
          alt = "Rajah petak " + n + " kali " + n + ", luas " + r.luas + " petak, mewakili " + n + " kuasa dua";
          return h.svg(TINGGI.dua, o, alt);
        }

        if (mod === "sempurna") {
          var k = r.k, S = 20, sx = 70, sy = 10;
          o += h.kotak(sx, sy, 6 * S, 6 * S, { garis: "garis", bulat: 0, tebal: 0.8 });
          if (k > 0) o += petak(sx, sy, k, S, r.sempurna ? "hijauLembut" : "kuningLembut", r.sempurna ? "hijau" : "kuning");
          var lb = "", ly = sy + 6 * S + 10, lx = 30;
          for (i = 0; i < r.lebih; i++) {
            lb += h.kotak(lx + (i % 10) * S, ly + Math.floor(i / 10) * S, S - 2, S - 2, { isi: "merahLembut", garis: "merah", bulat: 2, tebal: 1.2 });
          }
          o += hasilG(lb, true);
          y = ly + 2 * S + 16;
          o += tengah(y, ["N = " + r.N + " jubin"], { saiz: 13 });
          o += tengah(y + 20, r.sempurna ? [String(k), { p: "2" }, " = " + r.N + ", tiada baki"] : [k + " × " + k + " = " + k * k + ", baki " + r.lebih], { saiz: 12, warna: r.sempurna ? "hijau" : "merah", hasil: true });
          o += tengah(y + 38, [r.sempurna ? "Kuasa dua sempurna" : "Bukan kuasa dua sempurna"], { saiz: 12, warna: r.sempurna ? "hijau" : "merah", hasil: true });
          alt = "Rajah " + r.N + " jubin disusun menjadi petak " + k + " kali " + k + (r.sempurna ? " tanpa baki, kuasa dua sempurna" : " dengan baki " + r.lebih + ", bukan kuasa dua sempurna");
          return h.svg(TINGGI.sempurna, o, alt);
        }

        if (mod === "tiga" || mod === "puncatiga") {
          var nm3 = 6, cs = 14, jum = 1.5 * nm3 * cs, kx = (260 - jum) / 2, kb = 20 + jum;
          var n3 = mod === "tiga" ? s.n : r.sisi;
          o += kubus(n3, cs, kx, kb, "hijau");
          y = kb + 26;
          if (mod === "tiga") {
            o += tengah(y, [String(n3), { p: "3" }, " = " + n3 + " × " + n3 + " × " + n3], { saiz: 14 });
            o += tengah(y + 22, ["= " + r.isi + " kubus kecil"], { saiz: 14, warna: "ungu", hasil: true });
            alt = "Rajah kubus " + n3 + " kali " + n3 + " kali " + n3 + " daripada " + r.isi + " kubus kecil, mewakili " + n3 + " kuasa tiga";
          } else {
            o += tengah(y, ["Isi padu = " + r.isi + " kubus kecil"], { saiz: 13 });
            o += tengah(y + 22, ["Sisi = ³√" + r.isi + " = " + n3], { saiz: 14, warna: "ungu", hasil: true });
            alt = "Rajah kubus berisi padu " + r.isi + " kubus kecil dengan sisi " + n3 + " kubus kecil, iaitu punca kuasa tiga bagi " + r.isi;
          }
          return h.svg(TINGGI[mod], o, alt);
        }

        if (mod === "puncadua") {
          var A = senarai(c, "nilai", NILAI_PUNCA2), maks = Math.sqrt(Math.max.apply(null, A));
          var u = Math.floor(140 / maks), sisi = r.sisi, px0 = 30, pyb = 24 + Math.floor(140 / maks) * Math.ceil(maks);
          o += petak(px0, pyb - sisi * u, sisi, u, "hijauLembut", "hijau");
          y = pyb + 24;
          o += tengah(y, ["Luas = " + r.luas + " unit²"], { saiz: 13 });
          o += tengah(y + 20, ["Sisi = √" + r.luas + " = " + sisi], { saiz: 14, warna: "ungu", hasil: true });
          o += tengah(y + 38, ["Punca kuasa dua: +" + sisi + " dan −" + sisi], { saiz: 12, warna: "hijau", hasil: true });
          alt = "Rajah petak berluas " + r.luas + " unit persegi dengan sisi " + sisi + " unit, iaitu punca kuasa dua bagi " + r.luas;
          return h.svg(TINGGI.puncadua, o, alt);
        }

        /* anggar */
        var ak = r.akar, sm = ak === 3 ? "³√" : "√", L = 24, W2 = 212, ly2 = 82;
        o += h.garis(L, ly2, L + W2, ly2, { warna: "tinta3", tebal: 2 });
        for (i = 0; i <= 10; i++) {
          o += h.garis(L + i * W2 / 10, ly2 - (i % 5 === 0 ? 8 : 4), L + i * W2 / 10, ly2 + (i % 5 === 0 ? 8 : 4), { warna: "tinta3", tebal: i % 5 === 0 ? 2 : 1 });
        }
        o += teks(L, ly2 + 24, String(r.a), { tengah: true, saiz: 13, warna: "tinta", tebal: true });
        o += teks(L + W2, ly2 + 24, String(r.atas), { tengah: true, saiz: 13, warna: "tinta", tebal: true });
        o += teks(L + W2 / 2, ly2 + 24, String(r.a) + ".5", { tengah: true, saiz: 11, warna: "tinta3" });
        var mx = L + (Math.pow(r.N, 1 / ak) - r.a) * W2;
        var pen = '<circle cx="' + h.b1(mx) + '" cy="' + ly2 + '" r="6" fill="' + h.w("merah") + '" stroke="' + h.w("kertas") + '" stroke-width="1.5"></circle>' +
          h.garis(mx, ly2 - 8, mx, ly2 - 28, { warna: "merah", tebal: 1.5 }) +
          teks(Math.max(46, Math.min(214, mx)), ly2 - 34, sm + r.N + " ≈ " + r.punca, { tengah: true, saiz: 12, warna: "merah", tebal: true });
        o += hasilG(pen, true);
        y = ly2 + 52;
        o += tengah(y, [String(r.a), { p: String(ak) }, " = " + r.bawah + "  dan  " + r.atas, { p: String(ak) }, " = " + r.hujung], { saiz: 13 });
        o += tengah(y + 20, [r.N + " antara " + r.bawah + " dan " + r.hujung], { saiz: 13 });
        o += tengah(y + 40, [sm + r.N + " antara " + r.a + " dan " + r.atas], { saiz: 13, warna: "ungu", hasil: true });
        o += tengah(y + 60, ["lebih dekat kepada " + (r.dekatBawah ? r.a : r.atas)], { saiz: 12, warna: "hijau", hasil: true });
        alt = "Rajah garis nombor antara " + r.a + " dan " + r.atas + " dengan " + sm + r.N + " lebih kurang " + r.punca + " (" + r.bawah + " < " + r.N + " < " + r.hujung + ")";
        return h.svg(TINGGI.anggar, o, alt);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
