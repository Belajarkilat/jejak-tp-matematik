/* Widget Tingkatan 4 Bab 6 Ketaksamaan Linear dalam Dua Pemboleh Ubah. Widget `t4rantau`:
   Ketaksamaan ditulis {a, b, c, s} bermaksud ax + by s c, dengan s salah satu daripada
   ">", "≥", "<", "≤". Pilihan `y: true` memaparkannya dalam bentuk y s mx + k.
   Mod (spec.mod):
   - satu    : satu ketaksamaan dipilih dengan cip daripada spec.senarai; rantau dilorek,
               garis putus-putus bagi < dan >. Titik ujian P(x, y) digerakkan dengan gelongsor.
   - sistem  : spec.sistem = [{nama, ket:[...]}]; rantau sepunya (persilangan) dilorek.
               Cip memilih sistem; gelongsor menggerakkan P dan setiap ketaksamaan disemak.
   - masalah : satu sistem kekangan bagi situasi sebenar; titik integer dalam rantau ditanda.
               Gelongsor x dan y; nilai fungsi objektif spec.objektif {p, q, label} dipaparkan.
   Rantau dikira dengan keratan poligon (Sutherland–Hodgman) terhadap bingkai, bukan dilukis
   tangan. Unsur jawapan bertanda jmi-hasil (tersembunyi dalam mod cabar). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;
    var WARNA = ["ungu", "hijau", "merah", "kuning"];

    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function fmt(n) { return String(bul(n)).replace("-", "−"); }
    function lulus(q, x, y) {
      var v = q.a * x + q.b * y, e = 1e-9;
      if (q.s === ">") return v > q.c + e;
      if (q.s === "≥") return v >= q.c - e;
      if (q.s === "<") return v < q.c - e;
      if (q.s === "≤") return v <= q.c + e;
      throw new Error("tanda ketaksamaan tidak dikenali: " + q.s);
    }
    var BALIK = { ">": "<", "≥": "≤", "<": ">", "≤": "≥" };
    function sebutan(k, v, pertama) {
      if (!k) return "";
      var neg = k < 0, m = Math.abs(k), kk = m === 1 && v ? "" : fmt(m);
      return (pertama ? (neg ? "−" : "") : (neg ? " − " : " + ")) + kk + v;
    }
    function teksKet(q) {
      if (q.y && q.b) {
        var s = q.b < 0 ? BALIK[q.s] : q.s, m = -q.a / q.b, k = q.c / q.b, kanan = "";
        if (m) kanan = sebutan(m, "x", true);
        if (k) kanan += kanan ? sebutan(k, "", false) : fmt(k);
        return "y " + s + " " + (kanan || "0");
      }
      var kiri = sebutan(q.a, "x", true);
      kiri += kiri ? sebutan(q.b, "y", false) : sebutan(q.b, "y", true);
      return kiri + " " + q.s + " " + fmt(q.c);
    }

    /* ---------- bingkai Cartes ---------- */
    var K = { x: 40, y: 46, w: 204, h: 170 };
    function bingkai(j) {
      var x0 = j[0], x1 = j[1], y0 = j[2], y1 = j[3];
      var G = { x0: x0, x1: x1, y0: y0, y1: y1 };
      G.px = function (x) { return K.x + (x - x0) / (x1 - x0) * K.w; };
      G.py = function (y) { return K.y + K.h - (y - y0) / (y1 - y0) * K.h; };
      var d = h.kotak(K.x, K.y, K.w, K.h, { garis: "garis2", bulat: 0, tebal: 1 }), i;
      var sx = (x1 - x0) > 12 ? 2 : 1, sy = (y1 - y0) > 12 ? 2 : 1;
      for (i = Math.ceil(x0); i <= x1; i++) {
        if (i > x0 && i < x1) d += h.garis(G.px(i), K.y, G.px(i), K.y + K.h, { warna: "garis", tebal: 0.5 });
        if (i % sx === 0) d += teks(G.px(i), K.y + K.h + 14, fmt(i), { tengah: true, saiz: 11, warna: "tinta3" });
      }
      for (i = Math.ceil(y0); i <= y1; i++) {
        if (i > y0 && i < y1) d += h.garis(K.x, G.py(i), K.x + K.w, G.py(i), { warna: "garis", tebal: 0.5 });
        if (i % sy === 0 && i > y0) d += teks(K.x - 5, G.py(i) + 4, fmt(i), { kanan: true, saiz: 11, warna: "tinta3" });
      }
      if (y0 <= 0 && y1 >= 0) d += h.garis(K.x, G.py(0), K.x + K.w, G.py(0), { warna: "tinta3", tebal: 1.5 });
      if (x0 <= 0 && x1 >= 0) d += h.garis(G.px(0), K.y, G.px(0), K.y + K.h, { warna: "tinta3", tebal: 1.5 });
      d += teks(K.x + K.w, K.y + K.h + 28, "x", { kanan: true, saiz: 12, warna: "tinta3", tebal: true });
      d += teks(K.x - 30, K.y - 8, "y", { saiz: 12, warna: "tinta3", tebal: true });
      G.lukis = d;
      return G;
    }
    /* keratan poligon dengan separuh satah tertutup ax + by (≤ atau ≥) c */
    function kerat(poli, q) {
      var dalam = function (p) { var v = q.a * p[0] + q.b * p[1]; return (q.s === "<" || q.s === "≤") ? v <= q.c + 1e-9 : v >= q.c - 1e-9; };
      var out = [], i;
      for (i = 0; i < poli.length; i++) {
        var A = poli[i], B = poli[(i + 1) % poli.length], dA = dalam(A), dB = dalam(B);
        if (dA) out.push(A);
        if (dA !== dB) {
          var fA = q.a * A[0] + q.b * A[1] - q.c, fB = q.a * B[0] + q.b * B[1] - q.c, t = fA / (fA - fB);
          out.push([A[0] + t * (B[0] - A[0]), A[1] + t * (B[1] - A[1])]);
        }
      }
      return out;
    }
    function rantau(G, ket) {
      var poli = [[G.x0, G.y0], [G.x1, G.y0], [G.x1, G.y1], [G.x0, G.y1]];
      ket.forEach(function (q) { if (poli.length) poli = kerat(poli, q); });
      return poli;
    }
    function lukisPoli(G, poli, kelas) {
      if (poli.length < 3) return "";
      var d = poli.map(function (p, i) { return (i ? "L" : "M") + b1(G.px(p[0])) + " " + b1(G.py(p[1])); }).join(" ") + " Z";
      return '<path' + (kelas ? ' class="' + kelas + '"' : "") + ' d="' + d + '" fill="' + h.w("kuning") + '" fill-opacity="0.3" stroke="none"></path>';
    }
    function lukisGaris(G, q, warna) {
      /* titik persilangan garis ax + by = c dengan sempadan bingkai */
      var t = [], add = function (x, y) { if (x >= G.x0 - 1e-9 && x <= G.x1 + 1e-9 && y >= G.y0 - 1e-9 && y <= G.y1 + 1e-9) t.push([x, y]); };
      if (q.b) { add(G.x0, (q.c - q.a * G.x0) / q.b); add(G.x1, (q.c - q.a * G.x1) / q.b); }
      if (q.a) { add((q.c - q.b * G.y0) / q.a, G.y0); add((q.c - q.b * G.y1) / q.a, G.y1); }
      if (t.length < 2) return "";
      t.sort(function (p, r) { return p[0] - r[0] || p[1] - r[1]; });
      var A = t[0], B = t[t.length - 1];
      return h.garis(G.px(A[0]), G.py(A[1]), G.px(B[0]), G.py(B[1]), { warna: warna, tebal: 2.5, putus: (q.s === "<" || q.s === ">") ? "7 5" : null });
    }
    function titikP(G, x, y, ok) {
      return '<circle cx="' + b1(G.px(x)) + '" cy="' + b1(G.py(y)) + '" r="6" fill="' + h.w(ok ? "hijau" : "merah") + '" stroke="' + h.w("tinta") + '" stroke-width="1.5"></circle>' +
        teks(G.px(x) + 8, G.py(y) - 8, "P", { saiz: 12, warna: "tinta", tebal: true });
    }
    function julat(c) { return c.julat || [0, 10, 0, 10]; }
    function senaraiNilai(a, b) { var o = []; for (var i = a; i <= b; i++) o.push(fmt(i)); return o; }

    W.t4rantau = {
      mula: function (c) {
        var j = julat(c), p = c.P || [Math.round((j[0] + j[1]) / 2), Math.round((j[2] + j[3]) / 2)];
        if (c.mod === "satu") return { i: 0, x: p[0], y: p[1] };
        if (c.mod === "sistem") return { i: 0, x: p[0], y: p[1] };
        if (c.mod === "masalah") return { x: p[0], y: p[1] };
        throw new Error("mod t4rantau tidak dikenali: " + c.mod);
      },
      kawalan: function (c) {
        var j = julat(c), k = [];
        if (c.mod === "satu") k.push({ k: "i", label: "ketaksamaan", min: 0, maks: c.senarai.length - 1, teks: c.senarai.map(teksKet), pilih: true });
        if (c.mod === "sistem" && c.sistem.length > 1) k.push({ k: "i", label: "sistem", min: 0, maks: c.sistem.length - 1, teks: c.sistem.map(function (s) { return s.nama; }), pilih: true });
        k.push({ k: "x", label: c.mod === "masalah" ? c.lblX : "x bagi P", min: j[0], maks: j[1] });
        k.push({ k: "y", label: c.mod === "masalah" ? c.lblY : "y bagi P", min: j[2], maks: j[3] });
        return k;
      },
      kira: function (c, s) {
        var ket = c.mod === "satu" ? [c.senarai[s.i]] : c.mod === "sistem" ? c.sistem[s.i].ket : c.ket;
        var semak = ket.map(function (q) { return { t: teksKet(q), ok: lulus(q, s.x, s.y), nilai: q.a * s.x + q.b * s.y }; });
        var r = { x: s.x, y: s.y, semak: semak, dalam: semak.every(function (z) { return z.ok; }) };
        if (c.mod === "masalah") {
          var j = julat(c), titik = [], best = null;
          for (var x = j[0]; x <= j[1]; x++) for (var y = j[2]; y <= j[3]; y++) {
            if (ket.every(function (q) { return lulus(q, x, y); })) {
              var v = c.objektif.p * x + c.objektif.q * y; titik.push([x, y]);
              if (!best || (c.objektif.min ? v < best.v : v > best.v)) best = { x: x, y: y, v: v };
            }
          }
          r.bilTitik = titik.length; r.titik = titik; r.objektif = c.objektif.p * s.x + c.objektif.q * s.y; r.terbaik = best;
        }
        return r;
      },
      lukis: function (c, s) {
        var r = W.t4rantau.kira(c, s), G = bingkai(julat(c)), o = "";
        var ket = c.mod === "satu" ? [c.senarai[s.i]] : c.mod === "sistem" ? c.sistem[s.i].ket : c.ket;
        o += lukisPoli(G, rantau(G, ket), "jmi-hasil");
        o += G.lukis;
        ket.forEach(function (q, i) { o += lukisGaris(G, q, WARNA[i % 4]); });
        if (c.mod === "masalah") r.titik.forEach(function (p) { o += '<circle class="jmi-hasil" cx="' + b1(G.px(p[0])) + '" cy="' + b1(G.py(p[1])) + '" r="2.6" fill="' + h.w("tinta2") + '" stroke="none"></circle>'; });
        o += titikP(G, s.x, s.y, r.dalam);
        o += teks(130, 16, c.tajuk || (c.mod === "satu" ? "Rantau " + teksKet(ket[0]) : "Rantau sepunya"), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        var y = 264;
        o += teks(8, y, "P(" + fmt(s.x) + ", " + fmt(s.y) + ")", { saiz: 13, warna: "tinta", tebal: true });
        y += 4;
        ket.forEach(function (q, i) {
          y += 18;
          o += h.garis(10, y - 4, 26, y - 4, { warna: WARNA[i % 4], tebal: 3, putus: (q.s === "<" || q.s === ">") ? "4 3" : null });
          o += teks(32, y, teksKet(q), { saiz: 12, warna: "tinta2" });
          o += teks(250, y, r.semak[i].ok ? "✓" : "✗", { kanan: true, saiz: 13, warna: r.semak[i].ok ? "hijau" : "merah", tebal: true, hasil: true });
        });
        y += 22;
        o += teks(8, y, r.dalam ? "P dalam rantau" + (ket.length > 1 ? " sepunya" : "") : "P di luar rantau", { saiz: 13, warna: r.dalam ? "hijau" : "merah", tebal: true, hasil: true });
        if (c.mod === "masalah") {
          y += 20;
          o += teks(8, y, c.objektif.label + " = " + (c.objektif.rm ? "RM" : "") + fmt(r.objektif), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
        }
        return h.svg(y + 10, o, "Rajah satah Cartes dengan rantau " + ket.map(teksKet).join(", ") + " dilorek dan titik P(" + s.x + ", " + s.y + ")");
      }
    };
    W.t4rantau.teksKet = teksKet;
    W.t4rantau.lulus = lulus;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
