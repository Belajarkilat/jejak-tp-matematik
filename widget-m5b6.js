/* Widget Tingkatan 5 Bab 6 Nisbah dan Graf Fungsi Trigonometri. Widget `t5trig`, lima mod:
   - bulatan : bulatan unit. Gelongsor sudut θ (spek: sudut [..]); titik (kos θ, sin θ), sukuan,
               sudut rujukan dan nilai sin, kos, tan (4 t.p.) dengan tanda.
   - cari    : cip memilih persamaan (fungsi, nilai); semua sudut 0° ≤ θ ≤ 360° yang memenuhi
               ditanda pada bulatan unit. Spek: soalan [{f:"sin"|"kos"|"tan", v, t}].
   - graf    : graf y = sin x, kos x atau tan x bagi 0° ≤ x ≤ 360° (cip) dan gelongsor x.
               Spek: xs [..].
   - abc     : y = a sin bx + c atau y = a kos bx + c. Cip fungsi, gelongsor a, b dan c.
               Amplitud, tempoh, maksimum dan minimum dikira. Spek: a [..], b [..], c [..].
   - model   : model sebenar y = a sin(b t) + c (contoh paras air pasang surut). Gelongsor t.
               Spek: a, b, c, ts [..], namaT, unitT, namaY, unitY.
   Semua nilai dikira. Unsur jawapan bertanda jmi-hasil. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;
    var RAD = Math.PI / 180;
    function bul(n, d) { var p = Math.pow(10, d == null ? 4 : d), r = Math.round(n * p) / p; return r === 0 ? 0 : r; }
    function fmt(n, d) { return String(bul(n, d)).replace("-", "−"); }
    function nilai(f, x) {
      var r = x * RAD, s = Math.sin(r), k = Math.cos(r);
      if (Math.abs(s) < 1e-12) s = 0; if (Math.abs(k) < 1e-12) k = 0;
      if (f === "sin") return s; if (f === "kos") return k;
      return k === 0 ? null : s / k;
    }
    function sukuan(t) { t = ((t % 360) + 360) % 360; if (t === 0 || t === 90 || t === 180 || t === 270) return 0; return t < 90 ? 1 : t < 180 ? 2 : t < 270 ? 3 : 4; }
    function rujukan(t) { var q = sukuan(t); return q === 1 ? t : q === 2 ? 180 - t : q === 3 ? t - 180 : q === 4 ? 360 - t : null; }
    function cariSudut(f, v) {
      var out = [];
      for (var t = 0; t <= 360; t += 0.5) { var y = nilai(f, t); if (y !== null && Math.abs(y - v) < 1e-9) out.push(t); }
      if (!out.length) {
        /* nilai bukan sudut khas: guna fungsi songsang */
        var a = f === "sin" ? Math.asin(v) / RAD : f === "kos" ? Math.acos(v) / RAD : Math.atan(v) / RAD;
        var calon = f === "sin" ? [a, 180 - a] : f === "kos" ? [a, 360 - a] : [a, a + 180];
        out = calon.map(function (x) { return bul(((x % 360) + 360) % 360, 1); }).filter(function (x, i, A) { return A.indexOf(x) === i; }).sort(function (p, q) { return p - q; });
      }
      return out;
    }
    function bulatanUnit(cx, cy, R) {
      var o = '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="' + h.w("garis2") + '" stroke-width="1.4"></circle>';
      o += h.garis(cx - R - 8, cy, cx + R + 8, cy, { warna: "tinta3", tebal: 1.2 }) + h.garis(cx, cy - R - 8, cx, cy + R + 8, { warna: "tinta3", tebal: 1.2 });
      o += teks(cx + R + 4, cy - 14, "I", { saiz: 11, warna: "tinta3", tebal: true }) + teks(cx - R - 10, cy - 14, "II", { saiz: 11, warna: "tinta3", tebal: true });
      o += teks(cx - R - 12, cy + 22, "III", { saiz: 11, warna: "tinta3", tebal: true }) + teks(cx + R + 2, cy + 22, "IV", { saiz: 11, warna: "tinta3", tebal: true });
      return o;
    }
    function titik(x, y, warna, r) { return '<circle cx="' + b1(x) + '" cy="' + b1(y) + '" r="' + (r || 4) + '" fill="' + h.w(warna) + '"></circle>'; }
    /* paksi graf 0..360 */
    function grafPaksi(y0, y1, lo, hi, langkah, labelY) {
      var X = function (x) { return 40 + x / 360 * 196; }, Y = function (v) { return y1 - (v - lo) / (hi - lo) * (y1 - y0); }, o = "";
      for (var v = lo; v <= hi + 1e-9; v += langkah) {
        o += h.garis(40, Y(v), 236, Y(v), { warna: Math.abs(v) < 1e-9 ? "tinta3" : "garis", tebal: Math.abs(v) < 1e-9 ? 1.3 : 0.7 });
        o += teks(36, Y(v) + 4, fmt(v, 2), { kanan: true, saiz: 11, warna: "tinta3" });
      }
      for (var x = 0; x <= 360; x += 90) { o += h.garis(X(x), y0, X(x), y1, { warna: "garis", tebal: 0.7 }); o += teks(X(x), y1 + 14, x + "°", { tengah: true, saiz: 11, warna: "tinta3" }); }
      o += h.garis(40, y0, 40, y1, { warna: "tinta3", tebal: 1.3 });
      if (labelY) o += teks(44, y0 - 6, labelY, { saiz: 11, warna: "tinta2", tebal: true });
      return { X: X, Y: Y, svg: o };
    }
    function lengkung(G, fn, lo, hi) {
      var d = "", putus = true;
      for (var x = 0; x <= 360; x += 2) {
        var y = fn(x);
        if (y === null || y > hi + 0.01 || y < lo - 0.01 || !isFinite(y)) { putus = true; continue; }
        d += (putus ? "M" : "L") + b1(G.X(x)) + " " + b1(G.Y(y)); putus = false;
      }
      return h.laluan(d, { warna: "ungu", tebal: 2 });
    }
    var NAMA = { sin: "sin", kos: "kos", tan: "tan" };

    var Wd = W.t5trig = {
      mula: function (c) {
        if (c.mod === "abc") return { f: 0, a: c.aAwal || 0, b: c.bAwal || 0, c: c.cAwal || 0 };
        if (c.mod === "graf") return { f: 0, i: c.iAwal || 0 };
        return { i: c.iAwal || 0 };
      },
      kawalan: function (c) {
        if (c.mod === "bulatan") return [{ k: "i", label: "θ", min: 0, maks: c.sudut.length - 1, teks: c.sudut.map(function (t) { return t + "°"; }) }];
        if (c.mod === "cari") return [{ k: "i", label: "persamaan", min: 0, maks: c.soalan.length - 1, teks: c.soalan.map(function (q) { return q.t; }), pilih: true }];
        if (c.mod === "graf") return [{ k: "f", label: "graf", min: 0, maks: 2, teks: ["y = sin x", "y = kos x", "y = tan x"], pilih: true }, { k: "i", label: "x", min: 0, maks: c.xs.length - 1, teks: c.xs.map(function (t) { return t + "°"; }) }];
        if (c.mod === "abc") return [
          { k: "f", label: "fungsi", min: 0, maks: 1, teks: ["sin", "kos"], pilih: true },
          { k: "a", label: "a", min: 0, maks: c.a.length - 1, teks: c.a.map(String) },
          { k: "b", label: "b", min: 0, maks: c.b.length - 1, teks: c.b.map(String) },
          { k: "c", label: "c", min: 0, maks: c.c.length - 1, teks: c.c.map(function (v) { return fmt(v); }) }];
        return [{ k: "i", label: c.namaT, min: 0, maks: c.ts.length - 1, teks: c.ts.map(function (t) { return t + " " + c.unitT; }) }];
      },
      kira: function (c, s) {
        if (c.mod === "bulatan") { var t = c.sudut[s.i]; return { t: t, sin: nilai("sin", t), kos: nilai("kos", t), tan: nilai("tan", t), q: sukuan(t), ruj: rujukan(t) }; }
        if (c.mod === "cari") { var q = c.soalan[s.i]; return { q: q, sudut: cariSudut(q.f, q.v) }; }
        if (c.mod === "graf") { var f = ["sin", "kos", "tan"][s.f], x = c.xs[s.i]; return { f: f, x: x, y: nilai(f, x) }; }
        if (c.mod === "abc") {
          var a = c.a[s.a], b = c.b[s.b], cc = c.c[s.c], fn = s.f ? "kos" : "sin";
          return { fn: fn, a: a, b: b, c: cc, tempoh: 360 / b, maks: a + cc, min: cc - a };
        }
        var tt = c.ts[s.i], y = c.a * Math.sin(c.b * tt * RAD) + c.c;
        return { t: tt, y: bul(y, 2), maks: c.a + c.c, min: c.c - c.a, tempoh: 360 / c.b };
      },
      lukis: function (c, s) {
        var r = Wd.kira(c, s), o = "";
        if (c.mod === "bulatan") {
          var cx = 130, cy = 98, R = 64, px = cx + R * r.kos, py = cy - R * r.sin;
          o += teks(130, 16, "Bulatan unit, θ = " + r.t + "°", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += bulatanUnit(cx, cy, R);
          o += h.garis(cx, cy, px, py, { warna: "merah", tebal: 2 });
          o += h.garis(px, py, px, cy, { warna: "kuning", tebal: 1.2, putus: "3 3" });
          o += titik(px, py, "merah");
          var yb = 192;
          o += teks(8, yb, "(kos θ, sin θ) = (" + fmt(r.kos) + ", " + fmt(r.sin) + ")", { saiz: 11, warna: "tinta2", hasil: true });
          o += teks(8, yb + 20, r.q ? "Sukuan " + ["", "I", "II", "III", "IV"][r.q] + ", sudut rujukan = " + r.ruj + "°" : "Pada paksi (bukan dalam sukuan)", { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, yb + 42, "sin " + r.t + "° = " + fmt(r.sin), { saiz: 12, warna: "merah", tebal: true, hasil: true });
          o += teks(8, yb + 60, "kos " + r.t + "° = " + fmt(r.kos), { saiz: 12, warna: "hijau", tebal: true, hasil: true });
          o += teks(8, yb + 78, "tan " + r.t + "° = " + (r.tan === null ? "tidak tertakrif" : fmt(r.tan)), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          return h.svg(yb + 88, o, "Bulatan unit dengan sudut " + r.t + " darjah; sin = " + fmt(r.sin) + ", kos = " + fmt(r.kos) + ", tan = " + (r.tan === null ? "tidak tertakrif" : fmt(r.tan)));
        }
        if (c.mod === "cari") {
          var cx2 = 130, cy2 = 96, R2 = 62, q = r.q;
          o += teks(130, 16, q.t + ", 0° ≤ θ ≤ 360°", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += bulatanUnit(cx2, cy2, R2);
          if (q.f === "sin") o += h.garis(cx2 - R2 - 4, cy2 - R2 * q.v, cx2 + R2 + 4, cy2 - R2 * q.v, { warna: "kuning", tebal: 1.2, putus: "4 3" });
          if (q.f === "kos") o += h.garis(cx2 + R2 * q.v, cy2 - R2 - 4, cx2 + R2 * q.v, cy2 + R2 + 4, { warna: "kuning", tebal: 1.2, putus: "4 3" });
          var g = "";
          r.sudut.forEach(function (t) { var px2 = cx2 + R2 * Math.cos(t * RAD), py2 = cy2 - R2 * Math.sin(t * RAD); g += h.garis(cx2, cy2, px2, py2, { warna: "merah", tebal: 1.8 }) + titik(px2, py2, "merah"); });
          o += '<g class="jmi-hasil">' + g + "</g>";
          var yb2 = 186, a0 = r.sudut.length ? rujukan(r.sudut[0]) : null;
          o += teks(8, yb2, "Sudut rujukan = " + (a0 === null ? "tiada (sudut pada paksi)" : fmt(a0, 1) + "°"), { saiz: 12, warna: "tinta2", hasil: true });
          o += teks(8, yb2 + 20, "Sukuan: " + r.sudut.map(function (t) { var k = sukuan(t); return k ? ["", "I", "II", "III", "IV"][k] : "paksi"; }).join(" dan "), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, yb2 + 42, "θ = " + r.sudut.map(function (t) { return fmt(t, 1) + "°"; }).join(", "), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          return h.svg(yb2 + 52, o, "Penyelesaian " + q.t + " bagi 0 hingga 360 darjah: " + r.sudut.map(function (t) { return fmt(t, 1); }).join(", ") + " darjah");
        }
        if (c.mod === "graf") {
          var f = r.f, lo = f === "tan" ? -4 : -1, hi = f === "tan" ? 4 : 1, G = grafPaksi(30, 150, lo, hi, f === "tan" ? 2 : 0.5, "y");
          o += teks(130, 16, "y = " + NAMA[f] + " x", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += G.svg + lengkung(G, function (x) { return nilai(f, x); }, lo, hi);
          if (f === "tan") [90, 270].forEach(function (x) { o += h.garis(G.X(x), 30, G.X(x), 150, { warna: "merah", tebal: 1, putus: "4 3" }); });
          if (r.y !== null && r.y >= lo && r.y <= hi) o += titik(G.X(r.x), G.Y(r.y), "merah");
          var yb3 = 190, ciri = f === "sin" ? ["Maks 1 (x = 90°), min −1 (x = 270°)", "Pintasan-x: 0°, 180°, 360°", "Pintasan-y: 0"]
            : f === "kos" ? ["Maks 1 (x = 0°, 360°)", "Min −1 (x = 180°)", "Pintasan-x: 90°, 270°; pintasan-y: 1"]
            : ["Tiada nilai maks atau min", "Asimptot: x = 90° dan x = 270°", "Pintasan-x: 0°, 180°, 360°"];
          o += teks(8, yb3, NAMA[f] + " " + r.x + "° = " + (r.y === null ? "tidak tertakrif" : fmt(r.y)), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          ciri.forEach(function (b, k) { o += teks(8, yb3 + 22 + k * 16, b, { saiz: 11, warna: "tinta2", hasil: true }); });
          return h.svg(yb3 + 62, o, "Graf y = " + NAMA[f] + " x bagi 0 hingga 360 darjah; nilai pada x = " + r.x + " ialah " + (r.y === null ? "tidak tertakrif" : fmt(r.y)));
        }
        if (c.mod === "abc") {
          var lo2 = -4, hi2 = 6, G2 = grafPaksi(30, 160, lo2, hi2, 2, "y");
          var tajuk = "y = " + (r.a === 1 ? "" : r.a + " ") + r.fn + " " + (r.b === 1 ? "" : r.b) + "x" + (r.c ? (r.c > 0 ? " + " + r.c : " − " + (-r.c)) : "");
          o += teks(130, 16, tajuk, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += G2.svg;
          o += lengkung(G2, function (x) { return nilai(r.fn, x); }, lo2, hi2).replace(h.w("ungu"), h.w("garis2"));
          o += lengkung(G2, function (x) { return r.a * nilai(r.fn, r.b * x) + r.c; }, lo2, hi2);
          var yb4 = 200;
          o += teks(8, yb4, "Amplitud = a = " + r.a, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, yb4 + 20, "Tempoh = 360° ÷ b = " + fmt(r.tempoh, 1) + "°", { saiz: 12, warna: "hijau", tebal: true, hasil: true });
          o += teks(8, yb4 + 40, "Maksimum = a + c = " + fmt(r.maks), { saiz: 12, warna: "merah", tebal: true, hasil: true });
          o += teks(8, yb4 + 58, "Minimum = c − a = " + fmt(r.min), { saiz: 12, warna: "merah", tebal: true, hasil: true });
          o += teks(8, yb4 + 78, "Garis kelabu: y = " + r.fn + " x asal", { saiz: 11, warna: "tinta3" });
          return h.svg(yb4 + 88, o, "Graf " + tajuk + " dengan amplitud " + r.a + ", tempoh " + fmt(r.tempoh, 1) + " darjah, maksimum " + fmt(r.maks) + " dan minimum " + fmt(r.min));
        }
        var tMax = c.ts[c.ts.length - 1], X3 = function (t) { return 40 + t / tMax * 208; }, loY = 0, hiY = Math.ceil(c.a + c.c), Y3 = function (v) { return 160 - (v - loY) / (hiY - loY) * 116; };
        o += teks(130, 16, c.namaY + " = " + c.a + " sin(" + c.b + c.namaT + ") + " + c.c, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        for (var v = loY; v <= hiY; v++) { o += h.garis(40, Y3(v), 248, Y3(v), { warna: v ? "garis" : "tinta3", tebal: v ? 0.7 : 1.3 }); o += teks(36, Y3(v) + 4, String(v), { kanan: true, saiz: 11, warna: "tinta3" }); }
        for (var tt = 0; tt <= tMax; tt += 6) o += teks(X3(tt), 174, String(tt), { tengah: true, saiz: 11, warna: "tinta3" });
        o += teks(248, 190, c.namaT + " (" + c.unitT + ")", { kanan: true, saiz: 11, warna: "tinta2" }) + teks(44, 36, c.namaY + " (" + c.unitY + ")", { saiz: 11, warna: "tinta2", tebal: true });
        var d = ""; for (var u = 0; u <= tMax; u += 0.25) d += (u ? "L" : "M") + b1(X3(u)) + " " + b1(Y3(c.a * Math.sin(c.b * u * RAD) + c.c));
        o += h.laluan(d, { warna: "ungu", tebal: 2 }) + titik(X3(r.t), Y3(r.y), "merah");
        var yb5 = 212;
        o += teks(8, yb5, c.namaT + " = " + r.t + " " + c.unitT, { saiz: 12, warna: "tinta2" });
        o += teks(8, yb5 + 20, c.namaY + " = " + fmt(r.y, 2) + " " + c.unitY, { saiz: 13, warna: "merah", tebal: true, hasil: true });
        o += teks(8, yb5 + 42, "Maks " + fmt(r.maks) + " " + c.unitY + ", min " + fmt(r.min) + " " + c.unitY + ", tempoh " + fmt(r.tempoh, 2) + " " + c.unitT, { saiz: 11, warna: "tinta2", hasil: true });
        return h.svg(yb5 + 52, o, "Model " + c.namaY + " = " + c.a + " sin(" + c.b + c.namaT + ") + " + c.c + "; pada " + c.namaT + " = " + r.t + ", " + c.namaY + " = " + fmt(r.y, 2));
      }
    };
    Wd.nilai = nilai; Wd.cariSudut = cariSudut; Wd.rujukan = rujukan;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
