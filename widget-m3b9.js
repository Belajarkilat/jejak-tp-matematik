/* Widget Bab 9 Garis Lurus: satah Cartes interaktif.
   Satu widget `garis` dengan lima mod (spec.mod):
   - mc      : gelongsor kecerunan m dan pintasan-y c, y = mx + c, titik pada / bukan pada garis
   - selari  : dua garis dengan kecerunan sama, gelongsor c bagi garis kedua
   - khas    : garis mengufuk y = k dan garis mencancang x = k
   - abc     : bentuk pintasan x/a + y/b = 1, ax + by = c dan y = mx + c
   - silang  : garis tetap L1 dan garis L2 yang digerakkan, titik persilangan dikira
   Semua nombor dikira daripada formula. Fail ini didaftarkan oleh interaktif.js
   (Node: readdirSync widget-*.js; pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;
    var R0 = 5, U = 22, OX = 130, OY = 130, ATAS = 20, BARIS = 258, JARAK = 17;
    var M_LALAI = [-3, -2, -1, -0.5, 0, 0.5, 1, 2, 3];
    var C_LALAI = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
    var A_LALAI = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];

    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function fmt(n) { return String(bul(n)); }
    function suku(t) { return t < 0 ? " - " + fmt(-t) : " + " + fmt(t); }
    function pers(m, c) {
      if (m === 0) return "y = " + fmt(c);
      var mx = m === 1 ? "x" : m === -1 ? "-x" : fmt(m) + "x";
      return "y = " + mx + (c === 0 ? "" : suku(c));
    }
    function px(x) { return OX + x * U; }
    function py(y) { return OY - y * U; }

    /* Garis y = mx + c dipotong pada petak -R..R. Mengembalikan [x1,y1,x2,y2] atau null. */
    function potong(m, c) {
      var lo = -R0, hi = R0;
      if (m !== 0) {
        var a = (-R0 - c) / m, b = (R0 - c) / m;
        lo = Math.max(-R0, Math.min(a, b)); hi = Math.min(R0, Math.max(a, b));
      } else if (Math.abs(c) > R0) return null;
      if (lo > hi + 1e-9) return null;
      return [lo, m * lo + c, hi, m * hi + c];
    }
    function tebalLuar(x1, y1, x2, y2, warna, tebal, hasil, putus) {
      return '<line' + (hasil ? ' class="jmi-hasil"' : "") + ' x1="' + h.b1(px(x1)) + '" y1="' + h.b1(py(y1)) + '" x2="' + h.b1(px(x2)) +
        '" y2="' + h.b1(py(y2)) + '" stroke="' + h.w(warna) + '" stroke-width="' + tebal + '" stroke-linecap="round"' +
        (putus ? ' stroke-dasharray="' + putus + '"' : "") + "></line>";
    }
    function titik(x, y, warna, hasil) {
      return '<circle' + (hasil ? ' class="jmi-hasil"' : "") + ' cx="' + h.b1(px(x)) + '" cy="' + h.b1(py(y)) + '" r="5" fill="' + h.w(warna) +
        '" stroke="' + h.w("kertas") + '" stroke-width="1.5"></circle>';
    }
    function garisM(m, c, warna, tebal, hasil, putus) {
      var p = potong(m, c); if (!p) return "";
      return tebalLuar(p[0], p[1], p[2], p[3], warna, tebal || 3, hasil, putus);
    }
    function satah() {
      var i, o = h.kotak(px(-R0), py(R0), 2 * R0 * U, 2 * R0 * U, { garis: "garis2", bulat: 0, tebal: 1 });
      for (i = -R0 + 1; i < R0; i++) {
        if (i === 0) continue;
        o += h.garis(px(i), py(R0), px(i), py(-R0), { warna: "garis", tebal: 0.6 });
        o += h.garis(px(-R0), py(i), px(R0), py(i), { warna: "garis", tebal: 0.6 });
      }
      o += h.garis(px(-R0), OY, px(R0), OY, { warna: "tinta3", tebal: 1.5 });
      o += h.garis(OX, py(R0), OX, py(-R0), { warna: "tinta3", tebal: 1.5 });
      for (i = -R0; i <= R0; i++) {
        if (i === 0) continue;
        o += teks(px(i), OY + 13, String(i), { tengah: true, saiz: 11, warna: "tinta3" });
        o += teks(OX - 5, py(i) + 4, String(i), { kanan: true, saiz: 11, warna: "tinta3" });
      }
      o += teks(px(R0) + 4, OY + 4, "x", { saiz: 12, warna: "tinta", tebal: true });
      o += teks(OX + 6, py(R0) - 5, "y", { saiz: 12, warna: "tinta", tebal: true });
      return o;
    }
    function baris(n, r) {
      /* r: {t, warna, hasil, tebal, x, saiz} */
      return teks(r.x == null ? 8 : r.x, BARIS + n * JARAK, r.t, { saiz: r.saiz || 12, warna: r.warna || "tinta", tebal: r.tebal, hasil: r.hasil });
    }
    function tinggi(nb) { return BARIS + (nb - 1) * JARAK + 12; }
    function nilai(c, k, lalai) { return (c[k] && c[k].length) ? c[k] : lalai; }
    function tekss(arr) { return arr.map(fmt); }
    function di(a, i) { return a[Math.max(0, Math.min(a.length - 1, i))]; }
    function tengahIdx(a, v) { var n = a.indexOf(v); return n < 0 ? Math.floor(a.length / 2) : n; }
    var HURUF = ["A", "B", "C"];

    W.garis = {
      mula: function (c) {
        var mod = c.mod;
        if (mod === "khas") return { a: c.a == null ? 0 : c.a, b: c.b == null ? tengahIdx(nilai(c, "cNilai", C_LALAI), 2) : c.b };
        if (mod === "abc") return { a: c.a == null ? tengahIdx(nilai(c, "aNilai", A_LALAI), 3) : c.a, b: c.b == null ? tengahIdx(nilai(c, "bNilai", A_LALAI), 2) : c.b };
        return {
          a: c.a == null ? tengahIdx(nilai(c, "mNilai", M_LALAI), 1) : c.a,
          b: c.b == null ? tengahIdx(nilai(c, "cNilai", C_LALAI), 0) : c.b
        };
      },
      kawalan: function (c) {
        var mod = c.mod, k = [], mN = nilai(c, "mNilai", M_LALAI), cN = nilai(c, "cNilai", C_LALAI);
        if (mod === "khas") {
          return [{ k: "a", label: "jenis", min: 0, maks: 1, teks: ["y = k mengufuk", "x = k mencancang"] },
                  { k: "b", label: "k", min: 0, maks: cN.length - 1, teks: tekss(cN) }];
        }
        if (mod === "abc") {
          var aN = nilai(c, "aNilai", A_LALAI), bN = nilai(c, "bNilai", A_LALAI);
          return [{ k: "a", label: "a (pintasan-x)", min: 0, maks: aN.length - 1, teks: tekss(aN) },
                  { k: "b", label: "b (pintasan-y)", min: 0, maks: bN.length - 1, teks: tekss(bN) }];
        }
        if (mod === "selari") {
          if (mN.length > 1) k.push({ k: "a", label: "m", min: 0, maks: mN.length - 1, teks: tekss(mN) });
          k.push({ k: "b", label: "c garis kedua", min: 0, maks: cN.length - 1, teks: tekss(cN) });
          return k;
        }
        if (mod === "silang") {
          return [{ k: "a", label: "m garis 2", min: 0, maks: mN.length - 1, teks: tekss(mN) },
                  { k: "b", label: "c garis 2", min: 0, maks: cN.length - 1, teks: tekss(cN) }];
        }
        if (mN.length > 1) k.push({ k: "a", label: "m", min: 0, maks: mN.length - 1, teks: tekss(mN) });
        k.push({ k: "b", label: "c", min: 0, maks: cN.length - 1, teks: tekss(cN) });
        return k;
      },
      kira: function (c, s) {
        var mod = c.mod, mN = nilai(c, "mNilai", M_LALAI), cN = nilai(c, "cNilai", C_LALAI), r = {};
        if (mod === "khas") {
          r.mengufuk = s.a === 0; r.k = di(cN, s.b);
          r.m = r.mengufuk ? 0 : null; r.persamaan = (r.mengufuk ? "y = " : "x = ") + fmt(r.k);
          return r;
        }
        if (mod === "abc") {
          var a = di(nilai(c, "aNilai", A_LALAI), s.a), b = di(nilai(c, "bNilai", A_LALAI), s.b);
          r.a = a; r.b = b; r.m = bul(-b / a); r.c = b; r.am = { x: b, y: a, k: a * b };
          return r;
        }
        var m = di(mN, s.a), cc = di(cN, s.b);
        r.m = m; r.c = cc; r.pintasanX = m === 0 ? null : bul(-cc / m);
        if (mod === "selari") {
          r.c1 = c.c1 == null ? 0 : c.c1; r.sama = r.c1 === cc;
        } else if (mod === "silang") {
          r.m1 = c.m1; r.c1 = c.c1; r.selari = c.m1 === m; r.sama = r.selari && c.c1 === cc;
          if (!r.selari) { var x = (cc - c.c1) / (c.m1 - m); r.x = bul(x); r.y = bul(c.m1 * x + c.c1); }
        } else if (c.titik) {
          r.pada = c.titik.map(function (t) { return Math.abs(m * t[0] + cc - t[1]) < 1e-9; });
        }
        return r;
      },
      lukis: function (c, s) {
        var mod = c.mod, r = this.kira(c, s), o = satah(), n = 0, rows = "", alt;
        if (mod === "khas") {
          var k = r.k;
          if (r.mengufuk) o += garisM(0, k, "merah", 3);
          else o += tebalLuar(k, -R0, k, R0, "merah", 3);
          rows += baris(n++, { t: r.persamaan, warna: "merah", tebal: true, saiz: 13 });
          rows += baris(n++, { t: r.mengufuk ? "Mengufuk: m = 0" : "Mencancang: m tak tertakrif", warna: "tinta", hasil: true });
          rows += baris(n++, { t: r.mengufuk ? "Pintasan-y = " + fmt(k) + ", tiada pintasan-x" : "Pintasan-x = " + fmt(k) + ", tiada pintasan-y", warna: "tinta2", hasil: true });
          if (r.mengufuk && k === 0) rows = rows.replace("tiada pintasan-x", "ia paksi-x");
          alt = "Rajah satah Cartes dengan garis " + r.persamaan + (r.mengufuk ? " yang mengufuk" : " yang mencancang");
          return h.svg(tinggi(n), o + rows, alt);
        }
        if (mod === "abc") {
          var a = r.a, b = r.b, m = r.m;
          o += garisM(m, b, "merah", 3);
          o += titik(a, 0, "kuning") + titik(0, b, "hijau");
          rows += baris(n++, { t: "x/" + (a < 0 ? "(" + a + ")" : a) + " + y/" + (b < 0 ? "(" + b + ")" : b) + " = 1", warna: "merah", tebal: true, saiz: 13 });
          rows += baris(n++, { t: (b === 1 ? "" : fmt(b)) + "x" + (a < 0 ? " - " : " + ") + (Math.abs(a) === 1 ? "" : fmt(Math.abs(a))) + "y = " + fmt(a * b), warna: "tinta", hasil: true });
          rows += baris(n++, { t: pers(m, b) + "  (m = " + fmt(m) + ")", warna: "tinta", hasil: true });
          alt = "Rajah satah Cartes dengan garis yang memotong paksi-x pada " + a + " dan paksi-y pada " + b + ", bentuk x/a + y/b = 1";
          return h.svg(tinggi(n), o + rows, alt);
        }
        var mm = r.m, cc = r.c;
        if (mod === "selari") {
          o += garisM(mm, r.c1, "ungu", 3);
          o += garisM(mm, cc, "merah", 3, false, r.sama ? "2 5" : "");
          rows += baris(n++, { t: "L1: " + pers(mm, r.c1), warna: "ungu", tebal: true, saiz: 13 });
          rows += baris(n++, { t: "L2: " + pers(mm, cc), warna: "merah", tebal: true, saiz: 13 });
          rows += baris(n++, { t: r.sama ? "m sama dan c sama: garis yang sama" : "m1 = m2 = " + fmt(mm) + ": garis selari", warna: "tinta", hasil: true });
          alt = "Rajah satah Cartes dengan dua garis selari " + pers(mm, r.c1) + " dan " + pers(mm, cc);
          return h.svg(tinggi(n), o + rows, alt);
        }
        if (mod === "silang") {
          o += garisM(r.m1, r.c1, "ungu", 3);
          o += garisM(mm, cc, "merah", 3, false, r.sama ? "2 5" : "");
          var hasilTxt;
          if (r.sama) hasilTxt = "Garis sama: semua titik sepunya";
          else if (r.selari) hasilTxt = "Selari: tiada titik persilangan";
          else {
            hasilTxt = "Persilangan: (" + fmt(r.x) + ", " + fmt(r.y) + ")";
            if (Math.abs(r.x) <= R0 && Math.abs(r.y) <= R0) o += titik(r.x, r.y, "kuning", true);
          }
          rows += baris(n++, { t: "L1: " + pers(r.m1, r.c1), warna: "ungu", tebal: true, saiz: 13 });
          rows += baris(n++, { t: "L2: " + pers(mm, cc), warna: "merah", tebal: true, saiz: 13 });
          rows += baris(n++, { t: hasilTxt, warna: "tinta", tebal: true, hasil: true });
          alt = "Rajah satah Cartes dengan dua garis " + pers(r.m1, r.c1) + " dan " + pers(mm, cc) + ", titik persilangan ditunjukkan";
          return h.svg(tinggi(n), o + rows, alt);
        }
        /* mc */
        o += garisM(mm, cc, "merah", 3);
        o += titik(0, cc, "hijau");
        if (mm !== 0) o += titik(r.pintasanX, 0, "kuning");
        rows += baris(n++, { t: pers(mm, cc), warna: "merah", tebal: true, saiz: 13 });
        rows += baris(n++, { t: "m = " + fmt(mm) + "   pintasan-y = " + fmt(cc), warna: "tinta" });
        rows += baris(n++, { t: mm === 0 ? "tiada pintasan-x" : "pintasan-x = " + fmt(r.pintasanX), warna: "tinta2", hasil: true });
        (c.titik || []).forEach(function (t, i) {
          o += '<circle cx="' + h.b1(px(t[0])) + '" cy="' + h.b1(py(t[1])) + '" r="4" fill="' + h.w("kertas") + '" stroke="' + h.w("tinta") + '" stroke-width="2"></circle>';
          o += teks(px(t[0]) + 7, py(t[1]) - 6, HURUF[i], { saiz: 11, warna: "tinta", tebal: true });
          rows += baris(n, { t: HURUF[i] + "(" + fmt(t[0]) + ", " + fmt(t[1]) + ")", warna: "tinta", tebal: true });
          rows += baris(n, { t: r.pada[i] ? "pada garis" : "bukan pada garis", warna: r.pada[i] ? "hijau" : "merah", x: 110, hasil: true, tebal: true });
          n++;
        });
        alt = "Rajah satah Cartes dengan garis " + pers(mm, cc) + ", kecerunan " + fmt(mm) + " dan pintasan-y " + fmt(cc);
        return h.svg(tinggi(n), o + rows, alt);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
