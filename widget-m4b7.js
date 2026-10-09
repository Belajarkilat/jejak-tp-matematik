/* Widget Tingkatan 4 Bab 7 Graf Gerakan. Satu widget `t4gerak` dengan empat mod (spec.mod):
   - lukis     : jadual nilai (masa, jarak atau laju) diplot satu demi satu. Gelongsor n.
                 Spek: titik [[t, y]], paksiY "jarak" | "laju", unit.
   - jarakmasa : graf jarak-masa sekeping-sekeping lurus. Gelongsor masa t (langkah spec.langkah).
                 Kedudukan, laju bahagian semasa (kecerunan × faktor) dan keadaan (bergerak/pegun)
                 dikira. Spek: titik, unit {masa, jarak, laju, faktor}.
   - lajumasa  : graf laju-masa. Luas di bawah graf hingga masa t dilorek dan dikira sebagai jarak;
                 pecutan bahagian semasa = kecerunan. Spek: titik atau varian [[...]] (gelongsor V),
                 unit {masa, laju, jarak, pecutan, faktor}.
   - banding   : dua graf jarak-masa (A dan B). Gelongsor t. Jarak antara dan masa bertemu dikira.
                 Spek: A, B (titik), namaA, namaB, unit.
   Semua nombor dikira daripada titik graf. Unsur jawapan bertanda jmi-hasil. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function fmt(n) { return String(bul(n)).replace("-", "−"); }
    function nilai(P, t) {
      if (t <= P[0][0]) return P[0][1];
      for (var i = 0; i < P.length - 1; i++) if (t <= P[i + 1][0] + 1e-9) {
        var a = P[i], b = P[i + 1]; return a[1] + (b[1] - a[1]) * (t - a[0]) / (b[0] - a[0]);
      }
      return P[P.length - 1][1];
    }
    function bahagian(P, t) {
      for (var i = 0; i < P.length - 1; i++) if (t < P[i + 1][0] - 1e-9 || i === P.length - 2) return { i: i, a: P[i], b: P[i + 1], k: (P[i + 1][1] - P[i][1]) / (P[i + 1][0] - P[i][0]) };
    }
    /* luas di bawah graf dari P[0][0] hingga t (trapezium) */
    function luas(P, t) {
      var L = 0;
      for (var i = 0; i < P.length - 1; i++) {
        var a = P[i], b = P[i + 1]; if (t <= a[0]) break;
        var hj = Math.min(t, b[0]), vh = nilai(P, hj);
        L += (a[1] + vh) / 2 * (hj - a[0]);
      }
      return L;
    }
    function masaSet(c, P) { var t0 = P[0][0], t1 = P[P.length - 1][0], d = c.langkah || 1, o = []; for (var t = t0; t <= t1 + 1e-9; t += d) o.push(bul(t)); return o; }
    function maksY(P) { var m = 0; P.forEach(function (p) { if (p[1] > m) m = p[1]; }); return m; }
    function langkahAuto(j) { var s = [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]; for (var i = 0; i < s.length; i++) if (j / s[i] <= 6) return s[i]; return 1000; }

    var K = { x: 44, y: 50, w: 200, h: 140 };
    function bingkai(x1, y1, lx, ly) {
      var G = { x1: x1, y1: y1 };
      G.px = function (x) { return K.x + x / x1 * K.w; };
      G.py = function (y) { return K.y + K.h - y / y1 * K.h; };
      var d = "", sx = langkahAuto(x1), sy = langkahAuto(y1), i;
      for (i = 0; i <= x1 + 1e-9; i += sx) {
        if (i > 0) d += h.garis(G.px(i), K.y, G.px(i), K.y + K.h, { warna: "garis", tebal: 0.5 });
        d += teks(G.px(i), K.y + K.h + 14, fmt(i), { tengah: true, saiz: 11, warna: "tinta3" });
      }
      for (i = sy; i <= y1 + 1e-9; i += sy) {
        d += h.garis(K.x, G.py(i), K.x + K.w, G.py(i), { warna: "garis", tebal: 0.5 });
        d += teks(K.x - 5, G.py(i) + 4, fmt(i), { kanan: true, saiz: 11, warna: "tinta3" });
      }
      d += h.garis(K.x, K.y + K.h, K.x + K.w, K.y + K.h, { warna: "tinta3", tebal: 1.5 });
      d += h.garis(K.x, K.y, K.x, K.y + K.h, { warna: "tinta3", tebal: 1.5 });
      d += teks(K.x + K.w, K.y + K.h + 28, lx, { kanan: true, saiz: 11, warna: "tinta3" });
      d += teks(6, K.y - 8, ly, { saiz: 11, warna: "tinta3" });
      G.lukis = d;
      return G;
    }
    function garisan(G, P, warna, tebal, hasil) {
      var d = P.map(function (p, i) { return (i ? "L" : "M") + b1(G.px(p[0])) + " " + b1(G.py(p[1])); }).join(" ");
      return '<path' + (hasil ? ' class="jmi-hasil"' : "") + ' d="' + d + '" fill="none" stroke="' + h.w(warna) + '" stroke-width="' + (tebal || 2.5) + '" stroke-linejoin="round"></path>';
    }
    function bulat(cx, cy, r, isi, tepi, kelas) {
      return '<circle' + (kelas ? ' class="' + kelas + '"' : "") + ' cx="' + b1(cx) + '" cy="' + b1(cy) + '" r="' + r + '" fill="' + h.w(isi) + '" stroke="' + h.w(tepi) + '" stroke-width="1.5"></circle>';
    }
    function tPadu(c) { return c.varian ? c.varian[0] : c.titik; }
    function grafSemasa(c, s) { return c.varian ? c.varian[s.v] : c.titik; }
    function keadaanJ(k) { return Math.abs(k) < 1e-9 ? "pegun" : k > 0 ? "bergerak menjauhi titik mula" : "pulang ke titik mula"; }
    function keadaanL(k) { return Math.abs(k) < 1e-9 ? "laju seragam" : k > 0 ? "pecutan" : "nyahpecutan"; }

    W.t4gerak = {
      mula: function (c) {
        if (c.mod === "lukis") return { n: 1 };
        if (c.mod === "banding") return { t: 0 };
        var s = { t: 0 }; if (c.varian) s.v = 0; return s;
      },
      kawalan: function (c) {
        if (c.mod === "lukis") return [{ k: "n", label: "titik diplot", min: 1, maks: c.titik.length }];
        if (c.mod === "banding") { var tb = masaSet(c, c.A); return [{ k: "t", label: "masa t (" + c.unit.masa + ")", min: 0, maks: tb.length - 1, teks: tb.map(fmt) }]; }
        var P = tPadu(c), ts = masaSet(c, P), k = [];
        if (c.varian) k.push({ k: "v", label: c.labelV || "V", min: 0, maks: c.varian.length - 1, teks: c.varianLabel });
        k.push({ k: "t", label: "masa t (" + c.unit.masa + ")", min: 0, maks: ts.length - 1, teks: ts.map(fmt) });
        return k;
      },
      kira: function (c, s) {
        if (c.mod === "lukis") return { n: s.n, titik: c.titik.slice(0, s.n) };
        if (c.mod === "banding") {
          var t = masaSet(c, c.A)[s.t], sa = nilai(c.A, t), sb = nilai(c.B, t), temu = null;
          for (var x = 0; x <= c.A[c.A.length - 1][0]; x += 0.01) { if (Math.abs(nilai(c.A, x) - nilai(c.B, x)) < 1e-6 && x > 0) { temu = bul(x); break; } }
          return { t: t, a: bul(sa), b: bul(sb), beza: bul(Math.abs(sa - sb)), temu: temu };
        }
        var P = grafSemasa(c, s), tt = masaSet(c, P)[s.t], bh = bahagian(P, tt), f = c.unit.faktor || 1;
        if (c.mod === "jarakmasa") {
          var jarakJ = 0; for (var i = 0; i < P.length - 1; i++) { if (tt <= P[i][0]) break; jarakJ += Math.abs(nilai(P, Math.min(tt, P[i + 1][0])) - P[i][1]); }
          return { t: tt, s: bul(nilai(P, tt)), laju: bul(Math.abs(bh.k) * f), keadaan: keadaanJ(bh.k), jumlahJarak: bul(jarakJ), jarakAkhir: bul(P[P.length - 1][1]) };
        }
        return { t: tt, v: bul(nilai(P, tt)), jarak: bul(luas(P, tt) / f), jumlah: bul(luas(P, P[P.length - 1][0]) / f), pecutan: bul(bh.k), keadaan: keadaanL(bh.k) };
      },
      lukis: function (c, s) {
        var r = W.t4gerak.kira(c, s), o = "", u = c.unit;
        if (c.mod === "lukis") {
          var P = c.titik, G = bingkai(P[P.length - 1][0], c.yMaks || Math.ceil(maksY(P) / langkahAuto(maksY(P))) * langkahAuto(maksY(P)), "t (" + u.masa + ")", (c.paksiY === "laju" ? "v (" + u.laju + ")" : "s (" + u.jarak + ")"));
          o += teks(130, 16, c.tajuk || "Plot titik daripada jadual", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += G.lukis;
          if (r.n >= 2) o += garisan(G, r.titik, "ungu", 2.5);
          r.titik.forEach(function (p, i) { o += bulat(G.px(p[0]), G.py(p[1]), 4.5, i === r.n - 1 ? "merah" : "ungu", "kertas"); });
          /* jadual */
          var y0 = 236, lb = Math.min(40, 200 / P.length);
          o += teks(8, y0, "t", { saiz: 12, warna: "tinta3", tebal: true });
          o += teks(8, y0 + 20, c.paksiY === "laju" ? "v" : "s", { saiz: 12, warna: "tinta3", tebal: true });
          P.forEach(function (p, i) {
            var cx = 48 + i * lb + lb / 2;
            o += h.kotak(48 + i * lb, y0 - 13, lb - 2, 38, { isi: i < r.n ? "lembayungLembut" : "kertas", garis: "garis2", bulat: 4, tebal: 1 });
            o += teks(cx, y0, fmt(p[0]), { tengah: true, saiz: 11, warna: "tinta2" });
            o += teks(cx, y0 + 20, fmt(p[1]), { tengah: true, saiz: 11, warna: "tinta", tebal: true });
          });
          return h.svg(y0 + 36, o, "Rajah plot graf daripada jadual; " + r.n + " daripada " + P.length + " titik telah diplot");
        }
        if (c.mod === "banding") {
          var t1 = c.A[c.A.length - 1][0], ym = Math.max(maksY(c.A), maksY(c.B)), G2 = bingkai(t1, ym, "t (" + u.masa + ")", "s (" + u.jarak + ")");
          o += teks(130, 16, c.tajuk || "Dua perjalanan", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += G2.lukis + garisan(G2, c.A, "ungu", 2.5) + garisan(G2, c.B, "hijau", 2.5);
          o += h.garis(G2.px(r.t), K.y, G2.px(r.t), K.y + K.h, { warna: "kuning", tebal: 1.5, putus: "4 3" });
          o += bulat(G2.px(r.t), G2.py(r.a), 5, "ungu", "kertas") + bulat(G2.px(r.t), G2.py(r.b), 5, "hijau", "kertas");
          var y = 236;
          o += teks(8, y, c.namaA + ": " + fmt(r.a) + " " + u.jarak, { saiz: 12, warna: "ungu", tebal: true });
          o += teks(8, y + 18, c.namaB + ": " + fmt(r.b) + " " + u.jarak, { saiz: 12, warna: "hijau", tebal: true });
          o += teks(8, y + 36, "Jarak antara: " + fmt(r.beza) + " " + u.jarak, { saiz: 12, warna: "tinta2", hasil: true });
          o += teks(8, y + 54, r.temu == null ? "Tidak bertemu" : "Bertemu pada t = " + fmt(r.temu) + " " + u.masa, { saiz: 12, warna: "merah", tebal: true, hasil: true });
          return h.svg(y + 64, o, "Rajah dua graf jarak-masa bagi " + c.namaA + " dan " + c.namaB + " pada masa t = " + r.t);
        }
        var P2 = grafSemasa(c, s), t2 = P2[P2.length - 1][0], ymax = c.yMaks || maksY(c.varian ? c.varian[c.varian.length - 1] : P2);
        var jm = c.mod === "jarakmasa", G3 = bingkai(t2, Math.ceil(ymax / langkahAuto(ymax)) * langkahAuto(ymax), "t (" + u.masa + ")", jm ? "s (" + u.jarak + ")" : "v (" + u.laju + ")");
        o += teks(130, 16, c.tajuk || (jm ? "Graf jarak-masa" : "Graf laju-masa"), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        if (!jm) {
          /* luas di bawah graf hingga t */
          var poli = [[P2[0][0], 0]];
          P2.forEach(function (p) { if (p[0] <= r.t) poli.push(p); });
          poli.push([r.t, nilai(P2, r.t)]); poli.push([r.t, 0]);
          o += '<path class="jmi-hasil" d="' + poli.map(function (p, i) { return (i ? "L" : "M") + b1(G3.px(p[0])) + " " + b1(G3.py(p[1])); }).join(" ") + ' Z" fill="' + h.w("kuning") + '" fill-opacity="0.32" stroke="none"></path>';
        }
        o += G3.lukis + garisan(G3, P2, "ungu", 2.5);
        o += h.garis(G3.px(r.t), K.y, G3.px(r.t), K.y + K.h, { warna: "kuning", tebal: 1.5, putus: "4 3" });
        o += bulat(G3.px(r.t), G3.py(jm ? r.s : r.v), 5.5, "merah", "kertas");
        if (jm) {
          /* trek: kedudukan objek dari titik mula */
          var smax = Math.ceil(ymax / langkahAuto(ymax)) * langkahAuto(ymax);
          o += h.garis(K.x, 32, K.x + K.w, 32, { warna: "garis2", tebal: 3 });
          o += bulat(K.x + r.s / smax * K.w, 32, 6, "merah", "tinta");
        }
        var yy = 236;
        o += teks(8, yy, "t = " + fmt(r.t) + " " + u.masa + (jm ? ", s = " + fmt(r.s) + " " + u.jarak : ", v = " + fmt(r.v) + " " + u.laju), { saiz: 12, warna: "tinta", tebal: true });
        if (jm) {
          o += teks(8, yy + 20, "Keadaan: " + r.keadaan, { saiz: 11, warna: "tinta2", hasil: true });
          o += teks(8, yy + 38, "Laju bahagian ini = " + fmt(r.laju) + " " + u.laju, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, yy + 56, "Jumlah jarak yang dilalui = " + fmt(r.jumlahJarak) + " " + u.jarak, { saiz: 12, warna: "merah", tebal: true, hasil: true });
          return h.svg(yy + 66, o, "Rajah graf jarak-masa dengan objek pada t = " + r.t + " " + u.masa + ", jarak " + r.s + " " + u.jarak);
        }
        o += teks(8, yy + 20, "Keadaan: " + r.keadaan, { saiz: 11, warna: "tinta2", hasil: true });
        o += teks(8, yy + 38, "Pecutan = " + fmt(r.pecutan) + " " + u.pecutan, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
        o += teks(8, yy + 56, "Jarak (luas berlorek) = " + fmt(r.jarak) + " " + u.jarak, { saiz: 12, warna: "merah", tebal: true, hasil: true });
        return h.svg(yy + 66, o, "Rajah graf laju-masa dengan luas di bawah graf hingga t = " + r.t + " " + u.masa + " dilorek sebagai jarak");
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
