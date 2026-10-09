/* Widget Tingkatan 5 Bab 1 Ubahan. Widget `t5ubah`, empat mod (spec.mod):
   - langsung : y = k xⁿ. Gelongsor memilih x daripada spec.xs; cip memilih paparan graf
                "y lawan x" (lengkung) atau "y lawan xⁿ" (garis lurus melalui asalan, kecerunan k).
                Pilihan: spec.ns [{n, t}] menambah cip kuasa n (contoh n = 1, 2, 3, ½).
                Spek: k, n, nt (teks xⁿ), xs, namaX, namaY, unitX, unitY.
   - songsang : y = k / xⁿ. Sama seperti langsung; paparan kedua ialah "y lawan 1/xⁿ" (garis lurus).
   - gabung   : y = k × Π vᵢ^pᵢ (p negatif = songsang). Satu gelongsor bagi setiap pemboleh ubah.
                Spek: k, namaY, unitY, v [{nama, p, nilai:[...], unit}], rumus (teks).
   - jadual   : data (x, y) dan cip model. Lajur ketiga ialah y ÷ xⁿ (atau y × xⁿ bagi songsang);
                model yang betul memberi lajur malar. Spek: x, y, namaX, namaY, model [{t, n}].
   Semua nilai dikira daripada spek. Unsur jawapan bertanda jmi-hasil. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    function bul(n, d) { var p = Math.pow(10, d == null ? 3 : d), r = Math.round(n * p) / p; return r === 0 ? 0 : r; }
    function fmt(n, d) { return String(bul(n, d)).replace("-", "−"); }
    function kuasa(x, n) { return Math.pow(x, n); }
    function nOf(c, s) { return c.ns ? c.ns[s.n].n : c.n; }
    function ntOf(c, s) { return c.ns ? c.ns[s.n].t : c.nt; }
    function nilaiY(c, x, n) { return c.mod === "songsang" ? c.k / kuasa(x, n) : c.k * kuasa(x, n); }
    function skalaNaik(maks) {
      var s = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000], i;
      for (i = 0; i < s.length; i++) if (maks / s[i] <= 5) return { st: s[i], hi: Math.ceil(maks / s[i] - 1e-9) * s[i] || s[i] };
      return { st: maks / 5, hi: maks };
    }
    /* kawasan graf: x 44..240, y 50..164 (label paksi-y di bawah tajuk) */
    var GX0 = 44, GX1 = 240, GY0 = 164, GY1 = 50;
    function paksiGraf(Sx, Sy, labelX, labelY) {
      var o = h.garis(GX0, GY0, GX1, GY0, { warna: "tinta3", tebal: 1.4 }) + h.garis(GX0, GY0, GX0, GY1 - 6, { warna: "tinta3", tebal: 1.4 });
      for (var v = 0; v <= Sx.hi + 1e-9; v += Sx.st) {
        var px = GX0 + v / Sx.hi * (GX1 - GX0);
        o += h.garis(px, GY0, px, GY0 + 3, { warna: "tinta3", tebal: 1.1 });
        o += teks(px, GY0 + 15, fmt(v, 2), { tengah: true, saiz: 11, warna: "tinta3" });
      }
      for (var u = Sy.st; u <= Sy.hi + 1e-9; u += Sy.st) {
        var py = GY0 - u / Sy.hi * (GY0 - GY1);
        o += h.garis(GX0 - 3, py, GX0, py, { warna: "tinta3", tebal: 1.1 }) + h.garis(GX0, py, GX1, py, { warna: "garis", tebal: 0.8 });
        o += teks(GX0 - 5, py + 4, fmt(u, 2), { kanan: true, saiz: 11, warna: "tinta3" });
      }
      o += teks(GX1, GY0 + 30, labelX, { kanan: true, saiz: 11, warna: "tinta2", tebal: true });
      o += teks(GX0 + 4, GY1 - 10, labelY, { saiz: 11, warna: "tinta2", tebal: true });
      return o;
    }
    function px(Sx, v) { return GX0 + v / Sx.hi * (GX1 - GX0); }
    function py(Sy, v) { return GY0 - Math.min(v, Sy.hi * 1.04) / Sy.hi * (GY0 - GY1); }
    function rmT(v) { return "RM" + (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : v.toFixed(2)); }
    function titik(x, y, warna) { return '<circle cx="' + b1(x) + '" cy="' + b1(y) + '" r="4.5" fill="' + h.w(warna) + '" stroke="' + h.w("kertas") + '" stroke-width="1.4"></circle>'; }

    function lukisSatu(c, s) {
      var n = nOf(c, s), nt = ntOf(c, s), x = c.xs[s.i], y = nilaiY(c, x, n), inv = c.mod === "songsang";
      var paksiX = s.v === 1 ? (inv ? "1/" + nt : nt) : c.namaX, o = "";
      o += teks(130, 14, c.namaY + (inv ? " ∝ 1/" + nt : " ∝ " + nt) + ",  " + c.namaY + " = " + fmt(c.k) + (inv ? "/" + nt : nt), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      var xs = c.xs, ys = xs.map(function (v) { return nilaiY(c, v, n); });
      var maksY = Math.max.apply(null, ys);
      if (s.v === 0) {
        var Sx = skalaNaik(Math.max.apply(null, xs)), Sy = skalaNaik(maksY), d = "", lo = inv ? xs[0] : 0;
        var xHujung = Math.max.apply(null, xs);
        for (var t = 0; t <= 60; t++) { var xv = lo + (xHujung - lo) * t / 60; if (inv && xv < xs[0]) continue; var yv = nilaiY(c, xv, n); if (!isFinite(yv)) continue; d += (d ? "L" : "M") + b1(px(Sx, xv)) + " " + b1(py(Sy, yv)); }
        o += paksiGraf(Sx, Sy, c.namaX + (c.unitX ? " (" + c.unitX + ")" : ""), c.namaY + (c.unitY ? " (" + c.unitY + ")" : ""));
        o += h.laluan(d, { warna: "ungu", tebal: 2 });
        o += titik(px(Sx, x), py(Sy, y), "merah");
      } else {
        var us = xs.map(function (v) { return inv ? 1 / kuasa(v, n) : kuasa(v, n); });
        var Su = skalaNaik(Math.max.apply(null, us)), Sy2 = skalaNaik(maksY), u = inv ? 1 / kuasa(x, n) : kuasa(x, n);
        o += paksiGraf(Su, Sy2, paksiX, c.namaY);
        o += h.garis(px(Su, 0), py(Sy2, 0), px(Su, Math.max.apply(null, us)), py(Sy2, c.k * Math.max.apply(null, us)), { warna: "ungu", tebal: 2 });
        o += titik(px(Su, u), py(Sy2, y), "merah");
      }
      var yb = 212;
      function nilaiU(v, unit) { return unit === "RM" ? rmT(v) : fmt(v) + (unit ? " " + unit : ""); }
      o += teks(8, yb, c.namaX + " = " + fmt(x) + (c.unitX ? " " + c.unitX : ""), { saiz: 12, warna: "tinta2" });
      var ganti = nt.split(c.namaX).join(fmt(x));
      o += teks(8, yb + 20, c.namaY + " = " + fmt(c.k) + (inv ? " ÷ " : " × ") + ganti + " = " + nilaiU(y, c.unitY), { saiz: 12, warna: "merah", tebal: true, hasil: true });
      if (s.v === 1) o += teks(8, yb + 40, "Kecerunan garis = k = " + fmt(c.k), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      else o += teks(8, yb + 40, (inv ? c.namaY + " × " + nt : c.namaY + " ÷ " + nt) + " = k = " + fmt(c.k), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      return h.svg(yb + 50, o, "Graf " + c.namaY + " lawan " + paksiX + " bagi " + c.namaY + (inv ? " berubah secara songsang dengan " : " berubah secara langsung dengan ") + nt + "; titik pada " + c.namaX + " = " + fmt(x) + ", " + c.namaY + " = " + fmt(y));
    }

    W.t5ubah = {
      mula: function (c) {
        if (c.mod === "gabung") { var s = {}; c.v.forEach(function (v, i) { s["v" + i] = v.awal != null ? v.awal : 0; }); return s; }
        if (c.mod === "jadual") return { m: 0 };
        return { i: c.iAwal != null ? c.iAwal : 0, v: 0, n: 0 };
      },
      kawalan: function (c) {
        if (c.mod === "gabung") return c.v.map(function (v, i) { return { k: "v" + i, label: v.nama, min: 0, maks: v.nilai.length - 1, teks: v.nilai.map(function (x) { return fmt(x) + (v.unit ? " " + v.unit : ""); }) }; });
        if (c.mod === "jadual") return [{ k: "m", label: "model", min: 0, maks: c.model.length - 1, teks: c.model.map(function (m) { return m.t; }), pilih: true }];
        var inv = c.mod === "songsang", out = [];
        if (c.ns) out.push({ k: "n", label: "kuasa", min: 0, maks: c.ns.length - 1, teks: c.ns.map(function (m) { return c.namaY + " ∝ " + m.t; }), pilih: true });
        out.push({ k: "v", label: "graf", min: 0, maks: 1, teks: [c.namaY + " lawan " + c.namaX, c.namaY + " lawan " + (inv ? "1/" : "") + (c.ns ? "xⁿ" : c.nt)], pilih: true });
        out.push({ k: "i", label: c.namaX, min: 0, maks: c.xs.length - 1, teks: c.xs.map(function (x) { return fmt(x) + (c.unitX ? " " + c.unitX : ""); }) });
        return out;
      },
      kira: function (c, s) {
        if (c.mod === "gabung") {
          var y = c.k; c.v.forEach(function (v, i) { y *= kuasa(v.nilai[s["v" + i]], v.p); });
          return { y: y };
        }
        if (c.mod === "jadual") {
          var m = c.model[s.m];
          var nisbah = c.x.map(function (x, i) { return m.n < 0 ? c.y[i] * kuasa(x, -m.n) : c.y[i] / kuasa(x, m.n); });
          var malar = nisbah.every(function (r) { return Math.abs(r - nisbah[0]) < 1e-6 * Math.max(1, Math.abs(nisbah[0])); });
          return { nisbah: nisbah, malar: malar, k: nisbah[0] };
        }
        var n = nOf(c, s);
        return { x: c.xs[s.i], y: nilaiY(c, c.xs[s.i], n), k: c.k };
      },
      lukis: function (c, s) {
        if (c.mod === "langsung" || c.mod === "songsang") return lukisSatu(c, s);
        var r = W.t5ubah.kira(c, s), o = "";
        if (c.mod === "gabung") {
          o += teks(130, 16, c.rumus, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          var y0 = 44;
          c.v.forEach(function (v, i) {
            var nilai = v.nilai[s["v" + i]], lebar = (nilai - v.nilai[0]) / ((v.nilai[v.nilai.length - 1] - v.nilai[0]) || 1);
            o += teks(8, y0 + i * 34, v.nama + " = " + fmt(nilai) + (v.unit ? " " + v.unit : ""), { saiz: 12, warna: v.p < 0 ? "hijau" : "ungu", tebal: true });
            o += h.kotak(128, y0 + i * 34 - 11, 120, 12, { garis: "garis2", bulat: 6 });
            o += h.kotak(128, y0 + i * 34 - 11, Math.max(6, 120 * lebar), 12, { isi: v.p < 0 ? "hijauLembut" : "lembayungLembut", garis: v.p < 0 ? "hijau" : "ungu", bulat: 6 });
            o += teks(8, y0 + i * 34 + 16, v.p < 0 ? "songsang" + (v.p === -1 ? "" : ", kuasa " + (-v.p)) : "langsung" + (v.p === 1 ? "" : ", kuasa " + v.p), { saiz: 11, warna: "tinta3" });
          });
          var yb = y0 + c.v.length * 34 + 10, bahagian = c.k + "";
          c.v.forEach(function (v, i) { var nilai = fmt(v.nilai[s["v" + i]]), pp = Math.abs(v.p); bahagian += (v.p < 0 ? " ÷ " : " × ") + nilai + (pp === 1 ? "" : pp === 2 ? "²" : pp === 3 ? "³" : pp === 0.5 ? "" : ""); });
          o += teks(8, yb, c.namaY + " = " + bahagian, { saiz: 12, warna: "tinta2" });
          o += teks(8, yb + 22, c.namaY + " = " + fmt(r.y) + (c.unitY ? " " + c.unitY : ""), { saiz: 14, warna: "merah", tebal: true, hasil: true });
          return h.svg(yb + 32, o, "Rajah ubahan: " + c.rumus + "; " + c.v.map(function (v, i) { return v.nama + " = " + fmt(v.nilai[s["v" + i]]); }).join(", ") + "; " + c.namaY + " = " + fmt(r.y));
        }
        var m = c.model[s.m], inv = m.n < 0;
        o += teks(130, 16, "Uji model " + m.t, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        var lajur = inv ? c.namaY + " × " + m.u : c.namaY + " ÷ " + m.u, xk = [40, 110, 196], y1 = 42;
        o += teks(xk[0], y1, c.namaX, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        o += teks(xk[1], y1, c.namaY, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        o += teks(xk[2], y1, lajur, { tengah: true, saiz: 12, warna: "ungu", tebal: true });
        o += h.garis(8, y1 + 7, 252, y1 + 7, { warna: "garis2", tebal: 1 });
        c.x.forEach(function (x, i) {
          var yy = y1 + 26 + i * 22;
          o += teks(xk[0], yy, fmt(x), { tengah: true, saiz: 12, warna: "tinta2" });
          o += teks(xk[1], yy, fmt(c.y[i]), { tengah: true, saiz: 12, warna: "tinta2" });
          o += teks(xk[2], yy, fmt(r.nisbah[i], 3), { tengah: true, saiz: 12, warna: r.malar ? "hijau" : "merah", tebal: true, hasil: true });
        });
        var yb2 = y1 + 26 + c.x.length * 22 + 6;
        o += teks(8, yb2, r.malar ? "Malar: model sesuai, k = " + fmt(r.k, 3) : "Tidak malar: model tidak sesuai", { saiz: 12, warna: r.malar ? "hijau" : "merah", tebal: true, hasil: true });
        return h.svg(yb2 + 10, o, "Jadual " + c.namaX + " dan " + c.namaY + " dengan lajur " + lajur + " bagi model " + m.t + "; " + (r.malar ? "nilai malar" : "nilai tidak malar"));
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
