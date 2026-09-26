/* Widget Tingkatan 2 Bab 8 Graf Fungsi. Dua widget:
   - t2mesin : fungsi sebagai mesin input-output, dan hubungan sebagai gambar rajah pemetaan
       mod "mesin"    : gelongsor input x, mesin f(x) = a x^n + b mengeluarkan output; jadual pasangan tertib
       mod "pemetaan" : gelongsor memilih hubungan; kod mengira sama ada ia fungsi dan jenisnya
   - t2graf  : graf pada satah Cartes
       mod "plot"    : jadual nilai bagi y = a x^n; gelongsor memalot titik satu demi satu, kemudian lengkung
       mod "bentuk"  : gelongsor kuasa n dan pekali a bagi y = a x^n, serta nilai x pada graf
       mod "silang"  : lengkung y = a x^n dan garis lurus y = m x + k; titik persilangan dikira dengan kod
       mod "situasi" : graf situasi sebenar (bola dilambung, tambang teksi, kolam, petak) dengan nilai bagi masa/jarak/sisi
   Semua nombor dikira daripada formula. Unsur jawapan bertanda jmi-hasil (tersembunyi dalam mod cabar).
   Fail ini didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js; pelayar: tag <script>). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;

    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function fmt(n) { return String(bul(n)); }
    function tanda(n) { return n < 0 ? "(" + fmt(n) + ")" : fmt(n); }
    function fx(a, n, x) { return a * Math.pow(x, n); }
    function sHasil(hasil) { return hasil ? ' class="jmi-hasil"' : ""; }

    /* ungkapan a x^n sebagai segmen untuk h.ungkap: [teks, {p:indeks}, teks...] */
    function segAxn(kiri, a, n) {
      var k = a === 1 ? "" : a === -1 ? "-" : fmt(a);
      if (n === 1) return [kiri + k + "x"];
      if (n > 0) return [kiri + k + "x", { p: String(n) }];
      if (n === -1) return [kiri + fmt(a) + "/x"];
      return [kiri + fmt(a) + "/x", { p: String(-n) }];
    }
    function teksAxn(a, n) {
      var k = a === 1 ? "" : a === -1 ? "-" : fmt(a);
      if (n === 1) return k + "x";
      if (n > 0) return k + "x^" + n;
      return fmt(a) + "/x" + (n === -1 ? "" : "^" + (-n));
    }

    /* ================= satah Cartes dikongsi ================= */
    var GX0 = 38, GW = 210, GY0 = 30, GH = 140;
    function langkahAuto(jarak) {
      var s = [1, 2, 5, 10, 20, 25, 50, 100], i;
      for (i = 0; i < s.length; i++) if (jarak / s[i] <= 8) return s[i];
      return 100;
    }
    function bingkai(x0, x1, y0, y1) {
      var G = { x0: x0, x1: x1, y0: y0, y1: y1 };
      G.px = function (x) { return GX0 + (x - x0) / (x1 - x0) * GW; };
      G.py = function (y) { return GY0 + GH - (y - y0) / (y1 - y0) * GH; };
      G.dalam = function (x, y) { return x >= x0 - 1e-9 && x <= x1 + 1e-9 && y >= y0 - 1e-9 && y <= y1 + 1e-9; };
      var o = h.kotak(GX0, GY0, GW, GH, { garis: "garis2", bulat: 0, tebal: 1 }), sx = langkahAuto(x1 - x0), sy = langkahAuto(y1 - y0), i;
      for (i = Math.ceil(x0 / sx) * sx; i <= x1 + 1e-9; i += sx) {
        if (i !== 0 && i > x0 + 1e-9 && i < x1 - 1e-9) o += h.garis(G.px(i), GY0, G.px(i), GY0 + GH, { warna: "garis", tebal: 0.6 });
        o += teks(G.px(i), GY0 + GH + 16, fmt(i), { tengah: true, saiz: 11, warna: "tinta3" });
      }
      for (i = Math.ceil(y0 / sy) * sy; i <= y1 + 1e-9; i += sy) {
        if (i !== 0 && i > y0 + 1e-9 && i < y1 - 1e-9) o += h.garis(GX0, G.py(i), GX0 + GW, G.py(i), { warna: "garis", tebal: 0.6 });
        o += teks(GX0 - 4, G.py(i) + 4, fmt(i), { kanan: true, saiz: 11, warna: "tinta3" });
      }
      if (y0 <= 0 && y1 >= 0) o += h.garis(GX0, G.py(0), GX0 + GW, G.py(0), { warna: "tinta3", tebal: 1.5 });
      if (x0 <= 0 && x1 >= 0) o += h.garis(G.px(0), GY0, G.px(0), GY0 + GH, { warna: "tinta3", tebal: 1.5 });
      G.lukis = o;
      return G;
    }
    /* lengkung y = f(x): dipotong di sempadan bingkai dan diputuskan di x = 0 bagi n negatif */
    function lengkung(G, f, warna, tebal, putusDi0, hasil) {
      var N = 500, d = "", buka = false, px0 = null, py0 = null, x, y, i, xp = null, yp = null;
      function batas(xa, ya, xb, yb) {
        var yt = yb > G.y1 ? G.y1 : G.y0, t = (yt - ya) / (yb - ya);
        return [xa + t * (xb - xa), yt];
      }
      for (i = 0; i <= N; i++) {
        x = G.x0 + (G.x1 - G.x0) * i / N;
        if (putusDi0 && Math.abs(x) < 1e-9) { buka = false; xp = null; continue; }
        y = f(x);
        var dalamNow = y >= G.y0 && y <= G.y1;
        if (dalamNow) {
          if (!buka) {
            if (xp !== null && (yp < G.y0 || yp > G.y1)) { var b = batas(x, y, xp, yp); d += "M" + h.b1(G.px(b[0])) + " " + h.b1(G.py(b[1])) + " L"; }
            else d += "M";
            buka = true;
          } else d += " L";
          d += h.b1(G.px(x)) + " " + h.b1(G.py(y));
        } else if (buka) {
          var c = batas(xp, yp, x, y);
          d += " L" + h.b1(G.px(c[0])) + " " + h.b1(G.py(c[1]));
          buka = false;
        }
        xp = x; yp = y;
      }
      if (!d) return "";
      return '<path' + sHasil(hasil) + ' d="' + d + '" fill="none" stroke="' + h.w(warna) + '" stroke-width="' + (tebal || 2.5) + '" stroke-linejoin="round" stroke-linecap="round"></path>';
    }
    function titik(G, x, y, warna, r, hasil) {
      return '<circle' + sHasil(hasil) + ' cx="' + h.b1(G.px(x)) + '" cy="' + h.b1(G.py(y)) + '" r="' + (r || 4.5) + '" fill="' + h.w(warna) +
        '" stroke="' + h.w("kertas") + '" stroke-width="1.5"></circle>';
    }
    function anak(x1, y1, x2, y2, warna) {
      /* garis dengan kepala anak panah pada (x2, y2) */
      var a = Math.atan2(y2 - y1, x2 - x1), s = 5;
      var p1 = [x2 - s * Math.cos(a - 0.45), y2 - s * Math.sin(a - 0.45)], p2 = [x2 - s * Math.cos(a + 0.45), y2 - s * Math.sin(a + 0.45)];
      return h.garis(x1, y1, x2, y2, { warna: warna, tebal: 1.6 }) +
        h.laluan("M" + h.b1(x2) + " " + h.b1(y2) + " L" + h.b1(p1[0]) + " " + h.b1(p1[1]) + " L" + h.b1(p2[0]) + " " + h.b1(p2[1]) + " Z", { isi: warna, warna: warna, tebal: 1 });
    }

    /* ================= t2mesin ================= */
    /* hubungan: {nama, a:[...asal], b:[...kawasan], p:[[dari,ke],...]} */
    function jenisHubungan(hb) {
      var kira = {}, i, ada = true;
      hb.a.forEach(function (v) { kira[v] = 0; });
      hb.p.forEach(function (q) { kira[q[0]]++; });
      var tiada = hb.a.some(function (v) { return kira[v] === 0; });
      var dua = hb.a.some(function (v) { return kira[v] > 1; });
      if (tiada) return { fungsi: false, jenis: "Bukan fungsi: input tiada output" };
      if (dua) return { fungsi: false, jenis: "Bukan fungsi: input ada 2 output" };
      var lihat = {}, banyak = false;
      for (i = 0; i < hb.p.length; i++) { if (lihat[hb.p[i][1]]) banyak = true; lihat[hb.p[i][1]] = true; }
      return { fungsi: ada, jenis: banyak ? "Fungsi banyak kepada satu" : "Fungsi satu kepada satu" };
    }
    function fungsiMesin(c, x) { return fx(c.a, c.n || 1, x) + (c.b || 0); }
    function ruleTeks(c) {
      var n = c.n || 1, s = teksAxn(c.a, n);
      if (c.b) s += (c.b < 0 ? " - " : " + ") + fmt(Math.abs(c.b));
      return "f(x) = " + s;
    }
    function segRule(c) {
      var n = c.n || 1, sg = segAxn("f(x) = ", c.a, n);
      if (c.b) sg.push((c.b < 0 ? " - " : " + ") + fmt(Math.abs(c.b)));
      return sg;
    }

    W.t2mesin = {
      mula: function (c) {
        if (c.mod === "pemetaan") return { i: c.i0 || 0 };
        var k = c.x.indexOf(c.xAwal == null ? c.x[Math.floor(c.x.length / 2)] : c.xAwal);
        return { i: k < 0 ? 0 : k };
      },
      kawalan: function (c) {
        if (c.mod === "pemetaan") return [{ k: "i", label: "hubungan", min: 0, maks: c.hubungan.length - 1, teks: c.hubungan.map(function (q) { return q.kod; }) }];
        return [{ k: "i", label: "input x", min: 0, maks: c.x.length - 1, teks: c.x.map(String) }];
      },
      kira: function (c, s) {
        if (c.mod === "pemetaan") { var hb = c.hubungan[s.i], j = jenisHubungan(hb); return { fungsi: j.fungsi, jenis: j.jenis, kod: hb.kod }; }
        var x = c.x[s.i]; return { x: x, y: bul(fungsiMesin(c, x)) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", i;
        if (c.mod === "pemetaan") {
          var hb = c.hubungan[s.i], yA = 60, jarak = 28, xA = 66, xB = 194;
          o += teks(130, 16, hb.nama, { tengah: true, saiz: 13, warna: "tinta", tebal: true });
          o += teks(xA, 40, "Input", { tengah: true, saiz: 11, warna: "tinta2", tebal: true });
          o += teks(xB, 40, "Output", { tengah: true, saiz: 11, warna: "tinta2", tebal: true });
          var tinggi = Math.max(hb.a.length, hb.b.length) * jarak;
          o += h.kotak(xA - 26, yA - 16, 52, tinggi + 4, { isi: "hijauLembut", garis: "hijau", bulat: 14, tebal: 1.4 });
          o += h.kotak(xB - 26, yA - 16, 52, tinggi + 4, { isi: "lembayungLembut", garis: "ungu", bulat: 14, tebal: 1.4 });
          hb.p.forEach(function (q) {
            var ia = hb.a.indexOf(q[0]), ib = hb.b.indexOf(q[1]);
            o += anak(xA + 14, yA + ia * jarak - 4, xB - 14, yA + ib * jarak - 4, "merah");
          });
          hb.a.forEach(function (v, k) { o += teks(xA, yA + k * jarak, String(v), { tengah: true, saiz: 13, warna: "tinta", tebal: true }); });
          hb.b.forEach(function (v, k) { o += teks(xB, yA + k * jarak, String(v), { tengah: true, saiz: 13, warna: "tinta", tebal: true }); });
          var bawah = yA - 16 + tinggi + 4 + 18;
          o += teks(130, bawah, r.jenis, { tengah: true, saiz: 12, warna: r.fungsi ? "hijau" : "merah", tebal: true });
          return h.svg(bawah + 12, o, "Rajah pemetaan " + hb.nama + ": input di kiri, output di kanan. " + r.jenis);
        }
        /* mesin */
        o += h.ungkap(130, 20, segRule(c), { saiz: 14, tebal: true });
        o += h.kotak(92, 40, 76, 56, { isi: "kuningLembut", garis: "kuning", bulat: 10, tebal: 2 });
        o += teks(130, 63, "MESIN", { tengah: true, saiz: 11, warna: "tinta2", tebal: true });
        o += teks(130, 84, "f", { tengah: true, saiz: 20, warna: "tinta", tebal: true });
        o += anak(30, 68, 90, 68, "hijau") + anak(170, 68, 230, 68, "merah");
        o += teks(60, 54, "x = " + fmt(r.x), { tengah: true, saiz: 12, warna: "hijau", tebal: true });
        o += teks(200, 54, "f(" + fmt(r.x) + ") =", { tengah: true, saiz: 12, warna: "merah", tebal: true });
        o += teks(200, 92, fmt(r.y), { tengah: true, saiz: 14, warna: "merah", tebal: true, hasil: true });
        var yj = 122, cw = Math.floor(232 / (c.x.length + 1)), x0 = 8;
        o += teks(x0 + cw / 2, yj, "x", { tengah: true, saiz: 12, warna: "hijau", tebal: true });
        o += teks(x0 + cw / 2, yj + 18, "f(x)", { tengah: true, saiz: 11, warna: "merah", tebal: true });
        c.x.forEach(function (v, k) {
          var cx = x0 + cw * (k + 1) + cw / 2, semasa = k === s.i;
          if (semasa) o += h.kotak(x0 + cw * (k + 1) + 1, yj - 13, cw - 2, 36, { isi: "kuningLembut", garis: "kuning", bulat: 4, tebal: 1.2 });
          o += teks(cx, yj, fmt(v), { tengah: true, saiz: 12, warna: "tinta", tebal: semasa });
          o += teks(cx, yj + 18, fmt(fungsiMesin(c, v)), { tengah: true, saiz: 12, warna: "tinta", tebal: semasa, hasil: true });
        });
        o += teks(130, yj + 42, "Pasangan tertib: (" + fmt(r.x) + ", " + fmt(r.y) + ")", { tengah: true, saiz: 12, warna: "tinta", tebal: true, hasil: true });
        return h.svg(yj + 54, o, "Rajah mesin fungsi " + ruleTeks(c) + ". Input x " + fmt(r.x) + " menghasilkan output " + fmt(r.y) + ", dan jadual pasangan tertib dipaparkan");
      }
    };

    /* ================= t2graf ================= */
    var SITUASI = {
      bola: { rumus: ["h = 20t - 5t", { p: "2" }], namaX: "t (saat)", namaY: "h (m)", xs: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4], f: function (t) { return 20 * t - 5 * t * t; }, x1: 4.5, y0: 0, y1: 25, x: "t", y: "h", ux: "s", uy: "m", tajuk: "Bola dilambung" },
      tambang: { rumus: ["J = 3 + 2d"], namaX: "d (km)", namaY: "J (RM)", xs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], f: function (d) { return 3 + 2 * d; }, x1: 11, y0: 0, y1: 25, x: "d", y: "J", ux: "km", uy: "RM", tajuk: "Tambang teksi" },
      kolam: { rumus: ["V = 100 - 8t"], namaX: "t (jam)", namaY: "V (m3)", xs: [0, 2, 4, 6, 8, 10, 12], f: function (t) { return 100 - 8 * t; }, x1: 13, y0: 0, y1: 110, x: "t", y: "V", ux: "jam", uy: "m3", tajuk: "Kolam disalirkan" },
      petak: { rumus: ["L = s", { p: "2" }], namaX: "s (cm)", namaY: "L (cm2)", xs: [0, 1, 2, 3, 4, 5, 6], f: function (s) { return s * s; }, x1: 6.6, y0: 0, y1: 40, x: "s", y: "L", ux: "cm", uy: "cm2", tajuk: "Luas petak" }
    };
    function akarSilang(G, f, g, tanpa0) {
      /* imbas nod x = j/100 dan cari sifar bagi f - g (termasuk sentuhan) */
      var lst = [], j, j0 = Math.round(G.x0 * 100), j1 = Math.round(G.x1 * 100), prev = null, xp = null, x, d;
      for (j = j0; j <= j1; j++) {
        x = j / 100;
        if (tanpa0 && j === 0) { prev = null; xp = null; continue; }
        d = f(x) - g(x);
        if (Math.abs(d) < 1e-9) lst.push(x);
        else if (prev !== null && prev * d < 0 && Math.abs(prev) < 50 && Math.abs(d) < 50) {
          var lo = xp, hi = x, m, k;
          for (k = 0; k < 40; k++) { m = (lo + hi) / 2; if ((f(lo) - g(lo)) * (f(m) - g(m)) <= 0) hi = m; else lo = m; }
          lst.push((lo + hi) / 2);
        }
        prev = d; xp = x;
      }
      var out = [];
      lst.forEach(function (v) { v = Math.round(v * 1000) / 1000; if (!out.length || Math.abs(out[out.length - 1] - v) > 1e-6) out.push(bul(v)); });
      return out;
    }
    function persLurus(g) {
      var m = g[0], k = g[1], s = "y = ";
      if (m === 0) return "y = " + fmt(k);
      s += (m === 1 ? "" : m === -1 ? "-" : fmt(m)) + "x";
      if (k) s += (k < 0 ? " - " : " + ") + fmt(Math.abs(k));
      return s;
    }
    function pendekLurus(g) { return persLurus(g).replace(/ /g, ""); }

    W.t2graf = {
      mula: function (c) {
        if (c.mod === "plot") return { i: c.i0 == null ? 0 : c.i0 };
        if (c.mod === "bentuk") return { ni: c.ns.indexOf(c.n0 == null ? c.ns[1] : c.n0), ai: c.as.indexOf(c.a0 == null ? c.as[0] : c.a0), xi: c.xs.indexOf(c.xAwal == null ? c.xs[0] : c.xAwal) };
        if (c.mod === "silang") return { g: c.g0 || 0 };
        return { i: c.i0 == null ? 0 : c.i0 };
      },
      kawalan: function (c) {
        if (c.mod === "plot") return [{ k: "i", label: "titik dipalot", min: 0, maks: c.x.length, teks: c.x.map(function (_, j) { return String(j); }).concat([String(c.x.length)]).slice(0, c.x.length + 1) }];
        if (c.mod === "bentuk") return [
          { k: "ni", label: "kuasa n", min: 0, maks: c.ns.length - 1, teks: c.ns.map(String) },
          { k: "ai", label: "pekali a", min: 0, maks: c.as.length - 1, teks: c.as.map(String) },
          { k: "xi", label: "nilai x", min: 0, maks: c.xs.length - 1, teks: c.xs.map(String) }
        ];
        if (c.mod === "silang") return [{ k: "g", label: "garis", min: 0, maks: c.garis.length - 1, teks: c.garis.map(pendekLurus) }];
        var S = SITUASI[c.s];
        return [{ k: "i", label: S.x, min: 0, maks: S.xs.length - 1, teks: S.xs.map(function (v) { return String(v); }) }];
      },
      kira: function (c, s) {
        if (c.mod === "plot") {
          var pts = c.x.map(function (x) { return { x: x, y: bul(fx(c.a, c.n, x)) }; });
          return { titik: pts, dipalot: s.i, lengkap: s.i === c.x.length };
        }
        if (c.mod === "bentuk") {
          var n = c.ns[s.ni], a = c.as[s.ai], x = c.xs[s.xi];
          return { n: n, a: a, x: x, y: (n < 0 && x === 0) ? null : bul(fx(a, n, x)) };
        }
        if (c.mod === "silang") {
          var gg = c.garis[s.g], G = bingkai(c.xa, c.xb, c.ya, c.yb);
          var ak = akarSilang(G, function (x) { return fx(c.a, c.n, x); }, function (x) { return gg[0] * x + gg[1]; }, c.n < 0);
          return { garis: gg, x: ak, titik: ak.map(function (x) { return [x, bul(gg[0] * x + gg[1])]; }) };
        }
        var S = SITUASI[c.s], t = S.xs[s.i];
        return { x: t, y: bul(S.f(t)) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", G, i;
        if (c.mod === "plot") {
          G = bingkai(c.xa, c.xb, c.ya, c.yb);
          o += h.ungkap(130, 16, segAxn("y = ", c.a, c.n), { saiz: 14, tebal: true });
          o += G.lukis;
          if (r.lengkap) o += lengkung(G, function (x) { return fx(c.a, c.n, x); }, "merah", 2.5, c.n < 0);
          r.titik.forEach(function (p, j) {
            if (j < r.dipalot && G.dalam(p.x, p.y)) o += titik(G, p.x, p.y, j === r.dipalot - 1 && !r.lengkap ? "hijau" : "kuning", j === r.dipalot - 1 && !r.lengkap ? 5.5 : 4.5);
          });
          var yj = GY0 + GH + 34, cw = Math.floor(232 / (c.x.length + 1)), x0 = 8;
          o += teks(x0 + cw / 2, yj, "x", { tengah: true, saiz: 12, warna: "hijau", tebal: true });
          o += teks(x0 + cw / 2, yj + 18, "y", { tengah: true, saiz: 12, warna: "merah", tebal: true });
          r.titik.forEach(function (p, j) {
            var cx = x0 + cw * (j + 1) + cw / 2, semasa = j === r.dipalot - 1;
            if (semasa) o += h.kotak(x0 + cw * (j + 1) + 1, yj - 13, cw - 2, 36, { isi: "kuningLembut", garis: "kuning", bulat: 4, tebal: 1.2 });
            o += teks(cx, yj, fmt(p.x), { tengah: true, saiz: 12, warna: "tinta", tebal: semasa });
            o += teks(cx, yj + 18, fmt(p.y), { tengah: true, saiz: 12, warna: j < r.dipalot ? "tinta" : "tinta3", tebal: semasa });
          });
          var kap = r.dipalot === 0 ? "Belum ada titik dipalot." : r.lengkap ? "Semua titik dipalot dan disambung." : "Titik ke-" + r.dipalot + ": (" + fmt(r.titik[r.dipalot - 1].x) + ", " + fmt(r.titik[r.dipalot - 1].y) + ")";
          o += teks(130, yj + 42, kap, { tengah: true, saiz: 11, warna: "tinta2", tebal: true });
          return h.svg(yj + 52, o, "Rajah graf y = " + teksAxn(c.a, c.n) + ": jadual nilai dan " + r.dipalot + " daripada " + c.x.length + " titik telah dipalot pada satah Cartes");
        }
        if (c.mod === "bentuk") {
          G = bingkai(c.xa, c.xb, c.ya, c.yb);
          o += h.ungkap(130, 16, segAxn("y = ", r.a, r.n), { saiz: 14, tebal: true });
          o += G.lukis;
          o += lengkung(G, function (x) { return fx(r.a, r.n, x); }, "merah", 2.5, r.n < 0);
          if (r.y !== null && G.dalam(r.x, r.y)) o += titik(G, r.x, r.y, "hijau", 5.5, true);
          var bentuk = { "1": r.a > 0 ? "garis lurus (naik)" : "garis lurus (turun)",
            "2": r.a > 0 ? "parabola terbuka ke atas" : "parabola terbuka ke bawah",
            "3": r.a > 0 ? "lengkung kubik (naik)" : "lengkung kubik (turun)",
            "-1": r.a > 0 ? "dua cabang (sukuan 1 dan 3)" : "dua cabang (sukuan 2 dan 4)",
            "-2": r.a > 0 ? "dua cabang di atas paksi-x" : "dua cabang di bawah paksi-x" }[String(r.n)];
          o += teks(130, GY0 + GH + 34, "Bentuk: " + bentuk, { tengah: true, saiz: 11, warna: "tinta2", tebal: true });
          o += teks(130, GY0 + GH + 52, r.y === null ? "x = 0: y tidak tertakrif" : "x = " + fmt(r.x) + ",  y = " + fmt(r.y), { tengah: true, saiz: 12, warna: "tinta", tebal: true, hasil: true });
          return h.svg(GY0 + GH + 62, o, "Rajah graf y = " + teksAxn(r.a, r.n) + " dengan bentuk " + bentuk + "; titik pada x = " + r.x + " dipaparkan");
        }
        if (c.mod === "silang") {
          G = bingkai(c.xa, c.xb, c.ya, c.yb);
          o += h.ungkap(130, 16, segAxn("y = ", c.a, c.n), { saiz: 13, warna: "merah", tebal: true });
          o += G.lukis;
          o += lengkung(G, function (x) { return fx(c.a, c.n, x); }, "merah", 2.5, c.n < 0);
          var gl = r.garis;
          o += lengkung(G, function (x) { return gl[0] * x + gl[1]; }, "hijau", 2.5, false);
          r.titik.forEach(function (p) { if (G.dalam(p[0], p[1])) o += titik(G, p[0], p[1], "kuning", 5.5, true); });
          o += teks(130, GY0 + GH + 34, persLurus(gl), { tengah: true, saiz: 12, warna: "hijau", tebal: true });
          var xs = r.x.length ? "x = " + r.x.map(fmt).join(" atau x = ") : "Tiada titik persilangan";
          o += teks(130, GY0 + GH + 52, xs, { tengah: true, saiz: 12, warna: "tinta", tebal: true, hasil: true });
          return h.svg(GY0 + GH + 62, o, "Rajah lengkung y = " + teksAxn(c.a, c.n) + " dan garis lurus " + persLurus(gl) + ": " + (r.x.length ? "bersilang pada x = " + r.x.join(" dan ") : "tiada titik persilangan"));
        }
        /* situasi */
        var S = SITUASI[c.s];
        G = bingkai(0, S.x1, S.y0, S.y1);
        o += h.ungkap(130, 14, S.rumus, { saiz: 13, tebal: true });
        o += teks(GX0 - 4, GY0 - 6, S.namaY, { kanan: true, saiz: 11, warna: "ungu", tebal: true });
        o += G.lukis;
        o += lengkung(G, S.f, "merah", 2.5, false);
        S.xs.forEach(function (v) { if (v !== r.x) o += titik(G, v, S.f(v), "kuning", 3); });
        o += titik(G, r.x, r.y, "hijau", 5.5, true);
        o += teks(GX0 + GW / 2, GY0 + GH + 28, S.namaX, { tengah: true, saiz: 11, warna: "ungu", tebal: true });
        o += teks(130, GY0 + GH + 46, S.tajuk + ": " + S.x + " = " + fmt(r.x) + " " + S.ux, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        o += teks(130, GY0 + GH + 62, S.y + " = " + fmt(r.y) + " " + S.uy, { tengah: true, saiz: 12, warna: "tinta", tebal: true, hasil: true });
        return h.svg(GY0 + GH + 72, o, "Rajah graf situasi " + S.tajuk + ": " + S.y + " melawan " + S.x + "; pada " + S.x + " = " + r.x + " nilai " + S.y + " ialah " + r.y);
      }
    };
  }
  if (typeof module !== "undefined") module.exports = pasang; else pasang(window.JMI);
})();
