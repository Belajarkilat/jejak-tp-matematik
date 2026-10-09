/* Widget Tingkatan 5 Bab 7 Sukatan Serakan Data Terkumpul. Widget `t5kumpul`, enam mod:
   - jadual   : jadual kekerapan; gelongsor memilih satu selang kelas dan menunjukkan had bawah,
                had atas, sempadan, titik tengah, saiz selang dan kekerapan longgokan.
   - graf     : cip memilih histogram, poligon kekerapan atau histogram longgokan.
   - ogif     : ogif (titik dihubungkan dengan garis lurus) dengan gelongsor persentil;
                nilai dibaca pada kedudukan p% × n.
   - sukatan  : langkah pengiraan min, varians σ² = Σfx²/Σf − x̄² dan sisihan piawai (cip).
   - banding  : dua set data dengan selang kelas yang sama: poligon kekerapan atau plot kotak (cip),
                min, sisihan piawai dan julat antara kuartil.
   - bentuk   : cip memilih bentuk taburan (simetri, pencong ke kanan, pencong ke kiri, seragam).
   Spek data: kelas [[had bawah, had atas]...] (integer, selang sama), f [..]; banding: fA, fB, namaA, namaB.
   Sempadan = had ± 0.5. Semua nilai dikira. Unsur jawapan bertanda jmi-hasil. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;
    function bul(n, d) { var p = Math.pow(10, d == null ? 2 : d), r = Math.round(n * p) / p; return r === 0 ? 0 : r; }
    function fmt(n, d) { return String(bul(n, d)).replace("-", "−"); }

    function statistik(kelas, f) {
      var n = 0, sfx = 0, sfx2 = 0, lg = [], x = kelas.map(function (k) { return (k[0] + k[1]) / 2; });
      f.forEach(function (v, i) { n += v; sfx += v * x[i]; sfx2 += v * x[i] * x[i]; lg.push(n); });
      var min = sfx / n, varians = sfx2 / n - min * min;
      var sb = kelas.map(function (k) { return k[0] - 0.5; }), sa = kelas.map(function (k) { return k[1] + 0.5; });
      /* ogif garis lurus: titik (sempadan bawah kelas pertama, 0) dan (sempadan atas, longgokan) */
      var tx = [sb[0]].concat(sa), ty = [0].concat(lg);
      function baca(k) { for (var i = 1; i < ty.length; i++) if (k <= ty[i] + 1e-9) return ty[i] === ty[i - 1] ? tx[i - 1] : tx[i - 1] + (k - ty[i - 1]) / (ty[i] - ty[i - 1]) * (tx[i] - tx[i - 1]); return tx[tx.length - 1]; }
      var Q1 = baca(n / 4), Q2 = baca(n / 2), Q3 = baca(3 * n / 4);
      return { n: n, x: x, sfx: sfx, sfx2: sfx2, min: min, varians: varians, sp: Math.sqrt(varians), lg: lg, sb: sb, sa: sa, tx: tx, ty: ty, baca: baca, Q1: Q1, median: Q2, Q3: Q3, JAK: Q3 - Q1, julat: x[x.length - 1] - x[0], saiz: kelas[0][1] - kelas[0][0] + 1 };
    }
    /* paksi umum: x dari sempadan, y dari 0 */
    function paksi(xlo, xhi, xst, ylo, yhi, yst, x0, x1, y0, y1, labelX, labelY) {
      var X = function (v) { return x0 + (v - xlo) / (xhi - xlo) * (x1 - x0); }, Y = function (v) { return y1 - (v - ylo) / (yhi - ylo) * (y1 - y0); }, o = "";
      for (var v = ylo; v <= yhi + 1e-9; v += yst) { o += h.garis(x0, Y(v), x1, Y(v), { warna: v ? "garis" : "tinta3", tebal: v ? 0.7 : 1.3 }); o += teks(x0 - 4, Y(v) + 4, fmt(v), { kanan: true, saiz: 11, warna: "tinta3" }); }
      o += h.garis(x0, y0, x0, y1, { warna: "tinta3", tebal: 1.3 });
      for (var u = xlo; u <= xhi + 1e-9; u += xst) o += teks(X(u), y1 + 14, fmt(u, 1), { tengah: true, saiz: 11, warna: "tinta3" });
      if (labelX) o += teks(x1, y1 + 30, labelX, { kanan: true, saiz: 11, warna: "tinta2" });
      if (labelY) o += teks(x0 + 4, y0 - 6, labelY, { saiz: 11, warna: "tinta2", tebal: true });
      return { X: X, Y: Y, svg: o };
    }
    function titik(x, y, warna) { return '<circle cx="' + b1(x) + '" cy="' + b1(y) + '" r="3.2" fill="' + h.w(warna) + '"></circle>'; }
    function garisan(P, warna, putus) { return h.laluan(P.map(function (p, i) { return (i ? "L" : "M") + b1(p[0]) + " " + b1(p[1]); }).join(""), { warna: warna, tebal: 2 }).replace("<path", putus ? '<path stroke-dasharray="' + putus + '"' : "<path"); }
    function atasY(m) { var s = [1, 2, 5, 10, 20, 25, 50, 100], i; for (i = 0; i < s.length; i++) if (m / s[i] <= 5) return { st: s[i], hi: Math.ceil(m / s[i]) * s[i] }; return { st: m / 5, hi: m }; }
    function plotKotak(G, st, y, warna, x0b, x1b) {
      var o = h.garis(G.X(x0b), y - 7, G.X(x0b), y + 7, { warna: warna, tebal: 2 }) + h.garis(G.X(x1b), y - 7, G.X(x1b), y + 7, { warna: warna, tebal: 2 });
      o += h.garis(G.X(x0b), y, G.X(st.Q1), y, { warna: warna, tebal: 1.6 }) + h.garis(G.X(st.Q3), y, G.X(x1b), y, { warna: warna, tebal: 1.6 });
      o += h.kotak(G.X(st.Q1), y - 11, G.X(st.Q3) - G.X(st.Q1), 22, { isi: warna === "ungu" ? "lembayungLembut" : "hijauLembut", garis: warna, bulat: 2 });
      o += h.garis(G.X(st.median), y - 11, G.X(st.median), y + 11, { warna: "merah", tebal: 2.2 });
      return o;
    }

    var Wd = W.t5kumpul = {
      mula: function (c) { return c.mod === "ogif" ? { p: c.pAwal || 0 } : { i: c.iAwal || 0 }; },
      kawalan: function (c) {
        if (c.mod === "jadual") return [{ k: "i", label: "selang kelas", min: 0, maks: c.kelas.length - 1, teks: c.kelas.map(function (k) { return k[0] + " – " + k[1]; }) }];
        if (c.mod === "graf") return [{ k: "i", label: "perwakilan", min: 0, maks: 2, teks: ["Histogram", "Poligon kekerapan", "Histogram longgokan"], pilih: true }];
        if (c.mod === "ogif") return [{ k: "p", label: "persentil", min: 0, maks: c.ps.length - 1, teks: c.ps.map(function (p) { return "P" + p; }) }];
        if (c.mod === "sukatan") return [{ k: "i", label: "langkah", min: 0, maks: 2, teks: ["Jadual fx dan fx²", "Min", "Varians dan σ"], pilih: true }];
        if (c.mod === "banding") return [{ k: "i", label: "paparan", min: 0, maks: 1, teks: ["Poligon kekerapan", "Plot kotak"], pilih: true }];
        return [{ k: "i", label: "bentuk", min: 0, maks: c.bentuk.length - 1, teks: c.bentuk.map(function (b) { return b.nama; }), pilih: true }];
      },
      kira: function (c, s) {
        if (c.mod === "banding") return { A: statistik(c.kelas, c.fA), B: statistik(c.kelas, c.fB) };
        if (c.mod === "bentuk") return statistik(c.kelas, c.bentuk[s.i].f);
        return statistik(c.kelas, c.f);
      },
      lukis: function (c, s) {
        var r = Wd.kira(c, s), o = "", K = c.kelas;
        if (c.mod === "jadual") {
          o += teks(130, 16, c.tajuk, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          var xs = [36, 100, 158, 214], y0 = 38;
          ["Selang", "T. tengah", "f", "Longgokan"].forEach(function (t, k) { o += teks(xs[k], y0, t, { tengah: true, saiz: 11, warna: "tinta3", tebal: true }); });
          K.forEach(function (k, i) {
            var yy = y0 + 18 + i * 17, on = i === s.i;
            if (on) o += h.kotak(4, yy - 12, 252, 16, { isi: "kuningLembut", garis: "kuning", bulat: 4 });
            o += teks(xs[0], yy, k[0] + " – " + k[1], { tengah: true, saiz: 11, warna: on ? "tinta" : "tinta2", tebal: on });
            o += teks(xs[1], yy, fmt(r.x[i], 1), { tengah: true, saiz: 11, warna: on ? "tinta" : "tinta2", tebal: on });
            o += teks(xs[2], yy, String(c.f[i]), { tengah: true, saiz: 11, warna: on ? "tinta" : "tinta2", tebal: on });
            o += teks(xs[3], yy, String(r.lg[i]), { tengah: true, saiz: 11, warna: on ? "tinta" : "tinta2", tebal: on });
          });
          var yb = y0 + 18 + K.length * 17 + 12, k0 = K[s.i];
          o += teks(8, yb, "Had bawah " + k0[0] + ", had atas " + k0[1], { saiz: 12, warna: "tinta2" });
          o += teks(8, yb + 20, "Sempadan: " + fmt(k0[0] - 0.5, 1) + " hingga " + fmt(k0[1] + 0.5, 1), { saiz: 11, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, yb + 38, "Titik tengah = (" + k0[0] + " + " + k0[1] + ") ÷ 2 = " + fmt(r.x[s.i], 1), { saiz: 11, warna: "hijau", tebal: true, hasil: true });
          o += teks(8, yb + 56, "Saiz selang kelas = " + fmt(k0[1] + 0.5, 1) + " − " + fmt(k0[0] - 0.5, 1) + " = " + r.saiz, { saiz: 11, warna: "merah", tebal: true, hasil: true });
          return h.svg(yb + 66, o, "Jadual kekerapan " + c.tajuk + "; selang " + k0[0] + " hingga " + k0[1] + ", titik tengah " + fmt(r.x[s.i], 1) + ", kekerapan longgokan " + r.lg[s.i]);
        }
        if (c.mod === "graf") {
          var longgok = s.i === 2, ymax = longgok ? r.n : Math.max.apply(null, c.f), Ay = atasY(ymax);
          var xlo = r.sb[0] - (s.i === 1 ? r.saiz : 0), xhi = r.sa[r.sa.length - 1] + (s.i === 1 ? r.saiz : 0);
          var G = paksi(xlo, xhi, r.saiz * (s.i === 1 ? 2 : 1), 0, Ay.hi, Ay.st, 36, 236, 46, 170, c.labelX, longgok ? "Kekerapan longgokan" : "Kekerapan");
          o += teks(130, 16, ["Histogram", "Poligon kekerapan", "Histogram longgokan"][s.i], { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += G.svg;
          if (s.i !== 1) K.forEach(function (k, i) { var v = longgok ? r.lg[i] : c.f[i]; o += h.kotak(G.X(r.sb[i]), G.Y(v), G.X(r.sa[i]) - G.X(r.sb[i]), G.Y(0) - G.Y(v), { isi: longgok ? "hijauLembut" : "lembayungLembut", garis: longgok ? "hijau" : "ungu", bulat: 0 }); });
          else {
            var P = [[G.X(r.x[0] - r.saiz), G.Y(0)]].concat(r.x.map(function (x, i) { return [G.X(x), G.Y(c.f[i])]; })).concat([[G.X(r.x[r.x.length - 1] + r.saiz), G.Y(0)]]);
            o += garisan(P, "ungu"); P.forEach(function (p) { o += titik(p[0], p[1], "ungu"); });
          }
          var yb2 = 218;
          o += teks(8, yb2, s.i === 1 ? "Titik diplot pada titik tengah kelas" : s.i === 2 ? "Tinggi palang = kekerapan longgokan" : "Lebar palang = saiz selang (sempadan)", { saiz: 11, warna: "tinta2" });
          var mod = c.f.indexOf(Math.max.apply(null, c.f));
          o += teks(8, yb2 + 18, "Kelas mod " + K[mod][0] + " – " + K[mod][1] + ", Σf = " + r.n, { saiz: 11, warna: "merah", tebal: true, hasil: true });
          return h.svg(yb2 + 28, o, ["Histogram", "Poligon kekerapan", "Histogram longgokan"][s.i] + " bagi " + c.tajuk + "; kelas mod " + K[mod][0] + " hingga " + K[mod][1]);
        }
        if (c.mod === "ogif") {
          var p = c.ps[s.p], kedudukan = p / 100 * r.n, nilai = r.baca(kedudukan), Ay2 = atasY(r.n);
          var G2 = paksi(r.sb[0], r.sa[r.sa.length - 1], r.saiz, 0, Ay2.hi, Ay2.st, 36, 236, 46, 170, c.labelX, "Kekerapan longgokan");
          o += teks(130, 16, "Ogif " + c.tajuk, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += G2.svg;
          var T = r.tx.map(function (x, i) { return [G2.X(x), G2.Y(r.ty[i])]; });
          o += garisan(T, "ungu"); T.forEach(function (q) { o += titik(q[0], q[1], "ungu"); });
          o += '<g class="jmi-hasil">' + h.garis(G2.X(r.sb[0]), G2.Y(kedudukan), G2.X(nilai), G2.Y(kedudukan), { warna: "merah", tebal: 1.4, putus: "4 3" }) + h.garis(G2.X(nilai), G2.Y(kedudukan), G2.X(nilai), G2.Y(0), { warna: "merah", tebal: 1.4, putus: "4 3" }) + titik(G2.X(nilai), G2.Y(kedudukan), "merah") + "</g>";
          var yb3 = 218;
          o += teks(8, yb3, "P" + p + ": kedudukan = " + p + "% × " + r.n + " = " + fmt(kedudukan), { saiz: 12, warna: "tinta2" });
          o += teks(8, yb3 + 20, "P" + p + " ≈ " + fmt(nilai, 2) + (p === 25 ? "  (Q1)" : p === 50 ? "  (median)" : p === 75 ? "  (Q3)" : ""), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          o += teks(8, yb3 + 40, "Q1 = " + fmt(r.Q1) + ", Q3 = " + fmt(r.Q3) + ", JAK = " + fmt(r.JAK), { saiz: 11, warna: "ungu", tebal: true, hasil: true });
          return h.svg(yb3 + 50, o, "Ogif " + c.tajuk + "; persentil ke-" + p + " kira-kira " + fmt(nilai, 2));
        }
        if (c.mod === "sukatan") {
          o += teks(130, 16, c.tajuk, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          var xs2 = [30, 80, 112, 160, 220], y1 = 36;
          ["Selang", "x", "f", "fx", "fx²"].forEach(function (t, k) { o += teks(xs2[k], y1, t, { tengah: true, saiz: 11, warna: "tinta3", tebal: true }); });
          K.forEach(function (k, i) {
            var yy = y1 + 17 + i * 16, x = r.x[i];
            o += teks(xs2[0], yy, k[0] + "–" + k[1], { tengah: true, saiz: 11, warna: "tinta2" });
            o += teks(xs2[1], yy, fmt(x, 1), { tengah: true, saiz: 11, warna: "tinta2" });
            o += teks(xs2[2], yy, String(c.f[i]), { tengah: true, saiz: 11, warna: "tinta2" });
            o += teks(xs2[3], yy, fmt(c.f[i] * x, 1), { tengah: true, saiz: 11, warna: "tinta2", hasil: true });
            o += teks(xs2[4], yy, fmt(c.f[i] * x * x, 2), { tengah: true, saiz: 11, warna: "tinta2", hasil: true });
          });
          var yb4 = y1 + 17 + K.length * 16 + 2;
          o += h.garis(8, yb4 - 10, 252, yb4 - 10, { warna: "garis2", tebal: 1 });
          o += teks(xs2[2], yb4 + 4, String(r.n), { tengah: true, saiz: 11, warna: "tinta", tebal: true }) + teks(xs2[3], yb4 + 4, fmt(r.sfx, 1), { tengah: true, saiz: 11, warna: "tinta", tebal: true, hasil: true }) + teks(xs2[4], yb4 + 4, fmt(r.sfx2, 2), { tengah: true, saiz: 11, warna: "tinta", tebal: true, hasil: true });
          var yb5 = yb4 + 28;
          if (s.i >= 1) o += teks(8, yb5, "x̄ = Σfx ÷ Σf = " + fmt(r.sfx, 1) + " ÷ " + r.n + " = " + fmt(r.min, 3), { saiz: 11, warna: "hijau", tebal: true, hasil: true });
          if (s.i >= 2) {
            o += teks(8, yb5 + 20, "σ² = Σfx²/Σf − x̄² = " + fmt(r.varians, 3), { saiz: 11, warna: "ungu", tebal: true, hasil: true });
            o += teks(8, yb5 + 40, "σ = √σ² = " + fmt(r.sp, 3), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          }
          return h.svg(yb5 + 50, o, "Pengiraan min, varians dan sisihan piawai bagi " + c.tajuk + (s.i >= 2 ? "; sisihan piawai " + fmt(r.sp, 3) : ""));
        }
        if (c.mod === "banding") {
          var A = r.A, B = r.B, xlo2 = A.sb[0] - A.saiz, xhi2 = A.sa[A.sa.length - 1] + A.saiz;
          o += teks(130, 16, c.tajuk, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          if (s.i === 0) {
            var Ay3 = atasY(Math.max(Math.max.apply(null, c.fA), Math.max.apply(null, c.fB))), G3 = paksi(xlo2, xhi2, A.saiz * 2, 0, Ay3.hi, Ay3.st, 36, 236, 46, 160, c.labelX, "Kekerapan");
            o += G3.svg;
            [[A, c.fA, "ungu", null], [B, c.fB, "hijau", "5 3"]].forEach(function (d) {
              var P2 = [[G3.X(d[0].x[0] - d[0].saiz), G3.Y(0)]].concat(d[0].x.map(function (x, i) { return [G3.X(x), G3.Y(d[1][i])]; })).concat([[G3.X(d[0].x[d[0].x.length - 1] + d[0].saiz), G3.Y(0)]]);
              o += garisan(P2, d[2], d[3]);
            });
          } else {
            var lo4 = A.sb[0], hi4 = A.sa[A.sa.length - 1], G4 = { X: function (v) { return 36 + (v - lo4) / (hi4 - lo4) * 200; } };
            o += h.garis(36, 160, 236, 160, { warna: "tinta3", tebal: 1.3 });
            for (var u4 = lo4; u4 <= hi4 + 1e-9; u4 += A.saiz) o += h.garis(G4.X(u4), 157, G4.X(u4), 163, { warna: "tinta3", tebal: 1 }) + teks(G4.X(u4), 174, fmt(u4, 1), { tengah: true, saiz: 11, warna: "tinta3" });
            o += teks(236, 190, c.labelX, { kanan: true, saiz: 11, warna: "tinta2" });
            o += teks(8, 66, c.namaA, { saiz: 11, warna: "ungu", tebal: true }) + plotKotak(G4, A, 88, "ungu", A.sb[0], A.sa[A.sa.length - 1]);
            o += teks(8, 116, c.namaB, { saiz: 11, warna: "hijau", tebal: true }) + plotKotak(G4, B, 138, "hijau", B.sb[0], B.sa[B.sa.length - 1]);
          }
          var yb6 = 208;
          [[c.namaA, A, "ungu"], [c.namaB, B, "hijau"]].forEach(function (d, k) {
            o += teks(8, yb6 + k * 36, d[0] + ": x̄ = " + fmt(d[1].min) + ", σ = " + fmt(d[1].sp), { saiz: 11, warna: d[2], tebal: true, hasil: true });
            o += teks(8, yb6 + k * 36 + 16, "JAK = " + fmt(d[1].JAK), { saiz: 11, warna: d[2], hasil: true });
          });
          o += teks(8, yb6 + 76, (A.sp < B.sp ? c.namaA : c.namaB) + " lebih konsisten", { saiz: 12, warna: "merah", tebal: true, hasil: true });
          return h.svg(yb6 + 86, o, "Perbandingan " + c.namaA + " dan " + c.namaB + " dengan " + (s.i ? "plot kotak" : "poligon kekerapan") + "; sisihan piawai " + fmt(A.sp) + " dan " + fmt(B.sp));
        }
        var bt = c.bentuk[s.i], Ay4 = atasY(Math.max.apply(null, bt.f)), G5 = paksi(r.sb[0], r.sa[r.sa.length - 1], r.saiz, 0, Ay4.hi, Ay4.st, 36, 236, 46, 160, c.labelX, "Kekerapan");
        o += teks(130, 16, "Taburan " + bt.nama.toLowerCase(), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        o += G5.svg;
        K.forEach(function (k, i) { o += h.kotak(G5.X(r.sb[i]), G5.Y(bt.f[i]), G5.X(r.sa[i]) - G5.X(r.sb[i]), G5.Y(0) - G5.Y(bt.f[i]), { isi: "lembayungLembut", garis: "ungu", bulat: 0 }); });
        o += '<g class="jmi-hasil">' + h.garis(G5.X(r.min), 46, G5.X(r.min), 160, { warna: "merah", tebal: 1.6, putus: "4 3" }) + h.garis(G5.X(r.median), 46, G5.X(r.median), 160, { warna: "hijau", tebal: 1.6, putus: "2 3" }) + "</g>";
        var yb7 = 208;
        o += teks(8, yb7, "Min = " + fmt(r.min) + " (garis merah)", { saiz: 11, warna: "tinta2", hasil: true }) + teks(8, yb7 + 16, "Median ≈ " + fmt(r.median) + " (garis hijau)", { saiz: 11, warna: "tinta2", hasil: true });
        yb7 += 16;
        bt.ket.forEach(function (b, i) { o += teks(8, yb7 + 20 + i * 16, b, { saiz: 11, warna: "ungu", tebal: true, hasil: true }); });
        return h.svg(yb7 + 26 + bt.ket.length * 16, o, "Histogram taburan " + bt.nama + "; min " + fmt(r.min) + " dan median " + fmt(r.median));
      }
    };
    Wd.statistik = statistik;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
