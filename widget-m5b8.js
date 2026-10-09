/* Widget Tingkatan 5 Bab 8 Pemodelan Matematik. Widget `t5model`, enam mod:
   - proses  : cip memilih satu daripada enam langkah proses pemodelan (DSKP 8.1.1) dengan contoh.
               Spek: langkah [{t, ket:[baris...]}], masalah.
   - pola    : cip memilih set data dan cip memilih ujian (beza pertama, beza kedua, nisbah);
               ujian yang malar menunjukkan jenis model. Spek: set [{nama, x, y, model}].
   - linear  : y = a + b x dengan gelongsor x; graf dan jadual. Spek: a, b, xs, namaX, namaY, unitX, unitY.
   - dua     : dua model linear (pelan A dan B); gelongsor x; titik persilangan dikira.
               Spek: A {nama, a, b}, B {...}, xs, namaX, unitX.
   - kuadeks : cip memilih model kuadratik (h = at² + bt + c) atau eksponen (A = P rᵗ);
               gelongsor t. Spek: model [{nama, jenis:"kuad"|"eks", ..., ts, unitT, namaY, unitY}].
   - murni   : data sebenar dan beberapa model (cip); ramalan, ralat dan ralat maksimum.
               Spek: t, data, model [{nama, f:"lin"|"eks"|"kuad", p:[..]}], namaY.
   Semua nilai dikira. Unsur jawapan bertanda jmi-hasil. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;
    function bul(n, d) { var p = Math.pow(10, d == null ? 2 : d), r = Math.round(n * p) / p; return r === 0 ? 0 : r; }
    function fmt(n, d) { return String(bul(n, d)).replace("-", "−"); }
    function rm(n) { var t = (Math.abs(n - Math.round(n)) < 1e-9 ? String(Math.round(n)) : n.toFixed(2)); return "RM" + t; }
    function nilaiM(m, x) {
      if (m.f === "lin") return m.p[0] + m.p[1] * x;
      if (m.f === "eks") return m.p[0] * Math.pow(m.p[1], x);
      return m.p[0] + m.p[1] * x + m.p[2] * x * x;
    }
    function titik(x, y, warna) { return '<circle cx="' + b1(x) + '" cy="' + b1(y) + '" r="3.6" fill="' + h.w(warna) + '"></circle>'; }
    function atasY(m) { var s = [1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000], i; for (i = 0; i < s.length; i++) if (m / s[i] <= 5) return { st: s[i], hi: Math.ceil(m / s[i]) * s[i] }; return { st: m / 5, hi: m }; }
    function paksi(xhi, xst, yhi, yst, labelX, labelY) {
      var X = function (v) { return 40 + v / xhi * 196; }, Y = function (v) { return 160 - v / yhi * 114; }, o = "";
      for (var v = 0; v <= yhi + 1e-9; v += yst) { o += h.garis(40, Y(v), 236, Y(v), { warna: v ? "garis" : "tinta3", tebal: v ? 0.7 : 1.3 }); o += teks(36, Y(v) + 4, fmt(v), { kanan: true, saiz: 11, warna: "tinta3" }); }
      for (var u = 0; u <= xhi + 1e-9; u += xst) o += teks(X(u), 174, fmt(u), { tengah: true, saiz: 11, warna: "tinta3" });
      o += h.garis(40, 46, 40, 160, { warna: "tinta3", tebal: 1.3 });
      o += teks(236, 190, labelX, { kanan: true, saiz: 11, warna: "tinta2" }) + teks(44, 38, labelY, { saiz: 11, warna: "tinta2", tebal: true });
      return { X: X, Y: Y, svg: o };
    }
    function lengkung(G, fn, x0, x1) { var d = ""; for (var k = 0; k <= 60; k++) { var x = x0 + (x1 - x0) * k / 60; d += (k ? "L" : "M") + b1(G.X(x)) + " " + b1(G.Y(fn(x))); } return d; }

    var Wd = W.t5model = {
      mula: function (c) {
        if (c.mod === "pola") return { d: 0, u: 0 };
        if (c.mod === "kuadeks") return { m: 0, i: c.iAwal || 0 };
        return { i: c.iAwal || 0 };
      },
      kawalan: function (c) {
        if (c.mod === "proses") return [{ k: "i", label: "langkah", min: 0, maks: c.langkah.length - 1, teks: c.langkah.map(function (l, i) { return (i + 1) + " " + l.t; }), pilih: true }];
        if (c.mod === "pola") return [{ k: "d", label: "data", min: 0, maks: c.set.length - 1, teks: c.set.map(function (s) { return s.nama; }), pilih: true }, { k: "u", label: "ujian", min: 0, maks: 2, teks: ["Beza pertama", "Beza kedua", "Nisbah"], pilih: true }];
        if (c.mod === "linear" || c.mod === "dua") return [{ k: "i", label: c.namaX, min: 0, maks: c.xs.length - 1, teks: c.xs.map(function (x) { return fmt(x) + " " + c.unitX; }) }];
        if (c.mod === "kuadeks") return [{ k: "m", label: "model", min: 0, maks: c.model.length - 1, teks: c.model.map(function (m) { return m.nama; }), pilih: true }, { k: "i", label: "t", min: 0, maks: c.model[0].ts.length - 1, teks: c.model[0].ts.map(function (_, i) { return c.model.map(function (m) { return fmt(m.ts[i]) + " " + m.unitT; }).join(" · "); }) }];
        return [{ k: "i", label: "model", min: 0, maks: c.model.length - 1, teks: c.model.map(function (m) { return m.nama; }), pilih: true }];
      },
      kira: function (c, s) {
        if (c.mod === "pola") {
          var d = c.set[s.d], y = d.y, b1a = y.slice(1).map(function (v, i) { return bul(v - y[i], 4); }), b2 = b1a.slice(1).map(function (v, i) { return bul(v - b1a[i], 4); }), ns = y.slice(1).map(function (v, i) { return bul(v / y[i], 4); });
          var malar = function (a) { return a.every(function (v) { return Math.abs(v - a[0]) < 1e-9; }); };
          return { d: d, ujian: [b1a, b2, ns][s.u], malar: malar([b1a, b2, ns][s.u]) };
        }
        if (c.mod === "linear") { var x = c.xs[s.i]; return { x: x, y: c.a + c.b * x }; }
        if (c.mod === "dua") { var x2 = c.xs[s.i]; return { x: x2, yA: c.A.a + c.A.b * x2, yB: c.B.a + c.B.b * x2, silang: (c.B.a - c.A.a) / (c.A.b - c.B.b) }; }
        if (c.mod === "kuadeks") {
          var m = c.model[s.m], t = m.ts[s.i], v = m.jenis === "kuad" ? m.a * t * t + m.b * t + m.c : m.P * Math.pow(m.r, t);
          return { m: m, t: t, v: v, puncak: m.jenis === "kuad" ? -m.b / (2 * m.a) : null };
        }
        if (c.mod === "murni") {
          var md = c.model[s.i], ram = c.t.map(function (t) { return nilaiM(md, t); }), ralat = c.data.map(function (v, i) { return v - ram[i]; });
          return { md: md, ram: ram, ralat: ralat, maks: Math.max.apply(null, ralat.map(Math.abs)) };
        }
        return c.langkah[s.i];
      },
      lukis: function (c, s) {
        var r = Wd.kira(c, s), o = "";
        if (c.mod === "proses") {
          o += teks(130, 16, "Proses pemodelan matematik", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          c.langkah.forEach(function (l, i) {
            var x = 8 + (i % 3) * 82, y = 30 + Math.floor(i / 3) * 40, on = i === s.i;
            o += h.kotak(x, y, 78, 32, { isi: on ? "kuningLembut" : "kertas2", garis: on ? "kuning" : "garis2", bulat: 8 });
            o += teks(x + 39, y + 21, String(i + 1), { tengah: true, saiz: 13, warna: on ? "tinta" : "tinta3", tebal: true });
          });
          var yb = 132;
          o += teks(8, yb, "Langkah " + (s.i + 1) + ":", { saiz: 11, warna: "tinta3", tebal: true });
          o += teks(8, yb + 18, r.t, { saiz: 12, warna: "merah", tebal: true, hasil: true });
          o += teks(8, yb + 40, "Contoh (" + c.masalah + "):", { saiz: 11, warna: "tinta3" });
          r.ket.forEach(function (b, i) { o += teks(8, yb + 58 + i * 16, b, { saiz: 11, warna: "tinta2", hasil: true }); });
          return h.svg(yb + 64 + r.ket.length * 16, o, "Proses pemodelan matematik, langkah " + (s.i + 1) + ": " + r.t);
        }
        if (c.mod === "pola") {
          var d = r.d, nm = ["Beza pertama", "Beza kedua", "Nisbah"][s.u];
          o += teks(130, 16, d.nama, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          var xs = [40, 100, 180], y0 = 76;
          o += teks(8, 36, "x: " + d.namaX, { saiz: 11, warna: "tinta3" }) + teks(8, 52, "y: " + d.namaY, { saiz: 11, warna: "tinta3" });
          o += teks(xs[0], y0, "x", { tengah: true, saiz: 11, warna: "tinta3", tebal: true }) + teks(xs[1], y0, "y", { tengah: true, saiz: 11, warna: "tinta3", tebal: true }) + teks(xs[2], y0, nm, { tengah: true, saiz: 11, warna: "ungu", tebal: true });
          d.x.forEach(function (x, i) {
            var yy = y0 + 20 + i * 18;
            o += teks(xs[0], yy, fmt(x), { tengah: true, saiz: 12, warna: "tinta2" }) + teks(xs[1], yy, fmt(d.y[i]), { tengah: true, saiz: 12, warna: "tinta2" });
          });
          var lompat = s.u === 1 ? 2 : 1;
          r.ujian.forEach(function (v, i) { o += teks(xs[2], y0 + 20 + (i + lompat / 2) * 18 + 0, fmt(v, 3), { tengah: true, saiz: 12, warna: r.malar ? "hijau" : "merah", tebal: true, hasil: true }); });
          var yb2 = y0 + 20 + d.x.length * 18 + 10;
          o += teks(8, yb2, r.malar ? nm + " malar" : nm + " tidak malar", { saiz: 12, warna: r.malar ? "hijau" : "merah", tebal: true, hasil: true });
          o += teks(8, yb2 + 20, r.malar ? "Model " + ["linear", "kuadratik", "eksponen"][s.u] + " sesuai" : "Cuba ujian lain", { saiz: 12, warna: "tinta2", hasil: true });
          return h.svg(yb2 + 30, o, d.nama + ": ujian " + nm + " " + (r.malar ? "malar" : "tidak malar"));
        }
        if (c.mod === "linear") {
          var xm = c.xs[c.xs.length - 1], Ay = atasY(c.a + c.b * xm), G = paksi(xm, xm / 5, Ay.hi, Ay.st, c.namaX + " (" + c.unitX + ")", c.namaY + " (" + c.unitY + ")");
          o += teks(130, 16, c.namaY + " = " + c.a + " + " + c.b + c.namaX, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += G.svg + h.laluan(lengkung(G, function (x) { return c.a + c.b * x; }, 0, xm), { warna: "ungu", tebal: 2 }) + titik(G.X(r.x), G.Y(r.y), "merah");
          o += teks(8, 212, c.namaX + " = " + fmt(r.x) + " " + c.unitX, { saiz: 12, warna: "tinta2" });
          o += teks(8, 232, c.namaY + " = " + c.a + " + " + c.b + " × " + fmt(r.x) + " = " + rm(r.y), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          return h.svg(242, o, "Model linear " + c.namaY + " = " + c.a + " + " + c.b + c.namaX + "; pada " + fmt(r.x) + " " + c.unitX + ", " + rm(r.y));
        }
        if (c.mod === "dua") {
          var xm2 = c.xs[c.xs.length - 1], Ay2 = atasY(Math.max(c.A.a + c.A.b * xm2, c.B.a + c.B.b * xm2)), G2 = paksi(xm2, xm2 / 4, Ay2.hi, Ay2.st, c.namaX + " (" + c.unitX + ")", "Bayaran (RM)");
          o += teks(130, 16, "Bandingkan dua pelan", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += G2.svg + h.laluan(lengkung(G2, function (x) { return c.A.a + c.A.b * x; }, 0, xm2), { warna: "ungu", tebal: 2 }) + h.laluan(lengkung(G2, function (x) { return c.B.a + c.B.b * x; }, 0, xm2), { warna: "hijau", tebal: 2 });
          o += '<g class="jmi-hasil">' + titik(G2.X(r.silang), G2.Y(c.A.a + c.A.b * r.silang), "merah") + "</g>";
          o += h.garis(G2.X(r.x), 46, G2.X(r.x), 160, { warna: "kuning", tebal: 1.2, putus: "4 3" });
          o += teks(8, 212, c.A.nama + ": " + rm(c.A.a) + " + " + c.A.b + " × " + fmt(r.x) + " = " + rm(r.yA), { saiz: 11, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, 230, c.B.nama + ": " + rm(c.B.a) + " + " + c.B.b + " × " + fmt(r.x) + " = " + rm(r.yB), { saiz: 11, warna: "hijau", tebal: true, hasil: true });
          o += teks(8, 252, "Sama apabila " + c.namaX + " = " + fmt(r.silang) + " " + c.unitX, { saiz: 12, warna: "merah", tebal: true, hasil: true });
          return h.svg(262, o, "Dua model linear " + c.A.nama + " dan " + c.B.nama + "; bayaran sama pada " + fmt(r.silang) + " " + c.unitX);
        }
        if (c.mod === "kuadeks") {
          var m = r.m, tm = m.ts[m.ts.length - 1], fn = m.jenis === "kuad" ? function (t) { return m.a * t * t + m.b * t + m.c; } : function (t) { return m.P * Math.pow(m.r, t); };
          var maksV = 0; for (var k = 0; k <= 40; k++) maksV = Math.max(maksV, fn(tm * k / 40));
          var Ay3 = atasY(maksV), G3 = paksi(tm, tm / 4, Ay3.hi, Ay3.st, "t (" + m.unitT + ")", m.namaY + " (" + m.unitY + ")");
          var tajuk = m.jenis === "kuad" ? m.namaY + " = " + fmt(m.a) + "t² + " + m.b + "t + " + m.c : m.namaY + " = " + m.P + "(" + m.r + ")ᵗ";
          o += teks(130, 16, tajuk, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += G3.svg + h.laluan(lengkung(G3, function (t) { return Math.max(0, fn(t)); }, 0, tm), { warna: "ungu", tebal: 2 }) + titik(G3.X(r.t), G3.Y(Math.max(0, r.v)), "merah");
          o += teks(8, 212, "t = " + fmt(r.t) + " " + m.unitT, { saiz: 12, warna: "tinta2" });
          o += teks(8, 232, m.namaY + " = " + (m.unitY === "RM" ? rm(r.v) : fmt(r.v) + " " + m.unitY), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          o += teks(8, 252, m.jenis === "kuad" ? "Maksimum pada t = −b ÷ 2a = " + fmt(r.puncak) + " " + m.unitT : "Bertambah " + fmt((m.r - 1) * 100) + "% setiap " + m.unitT, { saiz: 11, warna: "ungu", tebal: true, hasil: true });
          return h.svg(262, o, "Model " + (m.jenis === "kuad" ? "kuadratik " : "eksponen ") + tajuk + "; pada t = " + fmt(r.t) + ", nilai " + fmt(r.v));
        }
        var tm2 = c.t[c.t.length - 1], Ay4 = atasY(Math.max.apply(null, c.data.concat(r.ram))), G4 = paksi(tm2, 1, Ay4.hi, Ay4.st, "Bulan", c.namaY);
        o += teks(130, 16, "Model " + r.md.nama.toLowerCase(), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        o += G4.svg + h.laluan(lengkung(G4, function (t) { return nilaiM(r.md, t); }, 0, tm2), { warna: "ungu", tebal: 2 });
        c.t.forEach(function (t, i) { o += titik(G4.X(t), G4.Y(c.data[i]), "merah"); });
        o += teks(8, 212, "Titik merah: data sebenar", { saiz: 11, warna: "tinta3" });
        o += teks(8, 230, "Bulan ke-" + tm2 + ": data " + fmt(c.data[c.data.length - 1]) + ", ramalan " + fmt(r.ram[r.ram.length - 1]), { saiz: 11, warna: "tinta2", hasil: true });
        o += teks(8, 252, "Ralat maksimum = " + fmt(r.maks), { saiz: 13, warna: r.maks < 0.2 ? "hijau" : "merah", tebal: true, hasil: true });
        return h.svg(262, o, "Model " + r.md.nama + " bagi data pengguna; ralat maksimum " + fmt(r.maks));
      }
    };
    Wd.nilaiM = nilaiM;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
