/* Widget Tingkatan 2 Bab 11 Transformasi Isometri: rajah interaktif pada satah Cartes.
   Satu widget `t2iso` dengan lima mod (spec.mod):
   - translasi : objek L digerakkan oleh vektor (a, b); gelongsor a dan b
   - pantulan  : objek dipantul pada paksi yang dipilih (x = k, y = k, y = x, y = -x)
   - putaran   : objek diputar 90 atau 180 darjah pada pusat yang dipilih
   - isometri  : enam transformasi (tiga isometri, tiga bukan isometri), jarak BC dan B'C' dibandingkan
   - simetri   : bentuk diputar mengelilingi pusat; padan dengan objek asal atau tidak, peringkat simetri putaran
   Semua koordinat dikira daripada formula. Unsur jawapan (imej, koordinat imej, jarak, keputusan)
   bertanda hasil supaya tersembunyi dalam mod cabar. Fail ini didaftarkan oleh interaktif.js
   (Node: readdirSync widget-*.js; pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;
    var U = 20, OX = 130, OY = 126, MIN = -5, MAX = 5;

    function X(x) { return OX + U * x; }
    function Y(y) { return OY - U * y; }
    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function neg(n) { n = bul(n); return (n < 0 ? "−" : "") + Math.abs(n); }
    function koor(p) { return "(" + neg(p[0]) + ", " + neg(p[1]) + ")"; }
    function pts(P) { return P.map(function (p) { return b1(X(p[0])) + "," + b1(Y(p[1])); }).join(" "); }
    function poligon(P, isi, garis, tebal, putus) {
      return '<polygon points="' + pts(P) + '" fill="' + (isi ? h.w(isi) : "none") + '" stroke="' + h.w(garis) +
        '" stroke-width="' + (tebal || 2) + '" stroke-linejoin="round"' + (putus ? ' stroke-dasharray="' + putus + '"' : "") + "></polygon>";
    }
    function hasil(s) { return '<g class="jmi-hasil">' + s + "</g>"; }
    function titik(x, y, warna, r) {
      return '<circle cx="' + b1(x) + '" cy="' + b1(y) + '" r="' + (r || 3.5) + '" fill="' + h.w(warna) + '"></circle>';
    }
    function panah(x1, y1, x2, y2, warna) {
      var dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy);
      if (len < 1) return "";
      var ux = dx / len, uy = dy / len, hx = x2 - ux * 8, hy = y2 - uy * 8;
      return h.garis(x1, y1, hx, hy, { warna: warna, tebal: 2 }) +
        '<polygon points="' + b1(x2) + "," + b1(y2) + " " + b1(hx + uy * 4) + "," + b1(hy - ux * 4) + " " + b1(hx - uy * 4) + "," + b1(hy + ux * 4) +
        '" fill="' + h.w(warna) + '"></polygon>';
    }

    /* Grid Cartes -5..5. Nombor paksi diletak di luar grid supaya tidak berlanggar dengan label bucu. */
    function grid() {
      var o = "", i;
      for (i = MIN; i <= MAX; i++) {
        o += h.garis(X(i), Y(MAX), X(i), Y(MIN), { warna: i === 0 ? "tinta3" : "garis", tebal: i === 0 ? 1.6 : 0.8 });
        o += h.garis(X(MIN), Y(i), X(MAX), Y(i), { warna: i === 0 ? "tinta3" : "garis", tebal: i === 0 ? 1.6 : 0.8 });
        o += teks(X(i), Y(MIN) + 14, neg(i), { tengah: true, saiz: 11, warna: "tinta3" });
        if (i > MIN) o += teks(X(MIN) - 4, Y(i) + 4, neg(i), { kanan: true, saiz: 11, warna: "tinta3" });
      }
      o += teks(X(MAX) + 4, Y(0) + 4, "x", { saiz: 12, warna: "tinta", tebal: true });
      o += teks(X(0) + 5, Y(MAX) - 4, "y", { saiz: 12, warna: "tinta", tebal: true });
      return o;
    }

    /* Penaruh label bucu: cuba beberapa kedudukan sehingga tidak bertindih dengan label lain
       dan kekal dalam grid. Lebar anggaran sama dengan semakan bina.js (0.6 x saiz x aksara). */
    function penaruh() {
      var kotak = [];
      return function (x, y, isi, warna, opsyen) {
        opsyen = opsyen || {};
        var saiz = 12, w = String(isi).length * saiz * 0.6, i, c, bx, by, k, ok;
        var calon = [[7, -6], [-7 - w, -6], [7, 15], [-7 - w, 15], [-w / 2, -11], [-w / 2, 20], [11, 4], [-11 - w, 4]];
        var pilih = null;
        for (i = 0; i < calon.length && !pilih; i++) {
          c = calon[i]; bx = x + c[0]; by = y + c[1];
          k = { mula: bx - 2, hujung: bx + w + 2, atas: by - saiz * 0.78 - 1, bawah: by + saiz * 0.24 + 1 };
          ok = k.mula >= X(MIN) + 2 && k.hujung <= X(MAX) - 2 && k.atas >= Y(MAX) + 2 && k.bawah <= Y(MIN) - 2;
          if (ok) for (var j = 0; j < kotak.length; j++) {
            var t = kotak[j];
            if (Math.min(k.hujung, t.hujung) - Math.max(k.mula, t.mula) > 0 && Math.min(k.bawah, t.bawah) - Math.max(k.atas, t.atas) > 0) { ok = false; break; }
          }
          if (ok) pilih = { bx: bx, by: by, k: k };
        }
        if (!pilih) { c = calon[0]; bx = x + c[0]; by = y + c[1]; pilih = { bx: bx, by: by, k: { mula: bx, hujung: bx + w, atas: by - 10, bawah: by + 3 } }; }
        kotak.push(pilih.k);
        return teks(pilih.bx, pilih.by, isi, { saiz: saiz, warna: warna, tebal: true, hasil: opsyen.hasil });
      };
    }

    /* ---------- objek dan transformasi ---------- */
    var L_TRANS = [[-1, -1], [2, -1], [2, 0], [0, 0], [0, 1], [-1, 1]];      /* lengan 3 dan 2: tidak simetri */
    var L_LAIN = [[1, 1], [3, 1], [3, 2], [2, 2], [2, 4], [1, 4]];           /* lengan 2 dan 3: tidak simetri */
    var TRI = [[-4, 1], [-2, 1], [-4, 2]];                                    /* segi tiga ABC */

    var PAKSI = [
      { n: "x = 0", j: "v", k: 0 }, { n: "x = −1", j: "v", k: -1 }, { n: "x = 2", j: "v", k: 2 },
      { n: "y = 0", j: "h", k: 0 }, { n: "y = x", j: "d" }, { n: "y = −x", j: "a" }
    ];
    var PUSAT = [[0, 0], [1, 1], [2, 2], [0, 2]];
    var SUDUT = [{ n: "+90°", p: "90° lawan jam", d: 90 }, { n: "180°", p: "180°", d: 180 }, { n: "−90°", p: "90° ikut jam", d: -90 }];

    function pantul(p, ax) {
      if (ax.j === "v") return [2 * ax.k - p[0], p[1]];
      if (ax.j === "h") return [p[0], 2 * ax.k - p[1]];
      if (ax.j === "d") return [p[1], p[0]];
      return [-p[1], -p[0]];
    }
    function putar(p, c, d) {
      var dx = p[0] - c[0], dy = p[1] - c[1], r;
      if (d === 90) r = [-dy, dx]; else if (d === 180) r = [-dx, -dy]; else r = [dy, -dx];
      return [c[0] + r[0], c[1] + r[1]];
    }
    function jarak(p, q) { return Math.sqrt((p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1])); }

    var TF = [
      { n: "translasi", s: "translasi", f: function (p) { return [p[0] + 5, p[1] - 3]; }, iso: true },
      { n: "pantulan", s: "pantulan", f: function (p) { return [-p[0], p[1]]; }, iso: true, garis: "x" },
      { n: "putaran", s: "putaran", f: function (p) { return [p[1], -p[0]]; }, iso: true, pusat: [0, 0] },
      { n: "pembesaran ×2", s: "besar ×2", f: function (p) { return [-5 + 2 * (p[0] + 5), 2 * p[1]]; }, iso: false, pusat: [-5, 0], serupa: true },
      { n: "pengecilan ×½", s: "kecil ×½", f: function (p) { return [5 + 0.5 * (p[0] - 5), 0.5 * p[1]]; }, iso: false, pusat: [5, 0], serupa: true },
      { n: "regangan tegak", s: "regangan", f: function (p) { return [p[0], 2 * p[1]]; }, iso: false, serupa: false }
    ];

    /* ---------- bentuk untuk simetri putaran (koordinat matematik, y ke atas, unit piksel) ---------- */
    function biasa(n, R, mula) {
      var v = [], k;
      for (k = 0; k < n; k++) { var a = (mula + k * 360 / n) * Math.PI / 180; v.push([R * Math.cos(a), R * Math.sin(a)]); }
      return v;
    }
    function bintang() {
      var v = [], k;
      for (k = 0; k < 10; k++) { var a = (90 + k * 36) * Math.PI / 180, r = k % 2 ? 28 : 70; v.push([r * Math.cos(a), r * Math.sin(a)]); }
      return v;
    }
    var BENTUK = [
      { n: "segi tiga sama sisi", s: "segi tiga", v: biasa(3, 70, 90) },
      { n: "segi empat sama", s: "petak", v: biasa(4, 64, 45) },
      { n: "segi empat tepat", s: "segi tepat", v: [[-64, -36], [64, -36], [64, 36], [-64, 36]] },
      { n: "segi empat selari", s: "selari", v: [[-64, -32], [24, -32], [64, 32], [-24, 32]] },
      { n: "segi enam sekata", s: "heksagon", v: biasa(6, 66, 0) },
      { n: "bintang lima penjuru", s: "bintang", v: bintang() },
      { n: "trapezium sama kaki", s: "trapezium", v: [[-60, -32], [60, -32], [34, 32], [-34, 32]] },
      { n: "rombus", s: "rombus", v: [[-64, 0], [0, -36], [64, 0], [0, 36]] }
    ];
    var CX = 130, CY = 104;
    function putarBentuk(v, deg) {
      var a = deg * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
      return v.map(function (p) { return [p[0] * c - p[1] * s, p[0] * s + p[1] * c]; });
    }
    function samaSet(P, Q) {
      return P.every(function (p) { return Q.some(function (q) { return Math.abs(p[0] - q[0]) < 0.05 && Math.abs(p[1] - q[1]) < 0.05; }); });
    }
    function padan(idx, deg) { return samaSet(putarBentuk(BENTUK[idx].v, deg), BENTUK[idx].v); }
    function peringkat(idx) {
      var n = 0, s;
      for (s = 0; s < 60; s++) if (padan(idx, s * 6)) n++;
      return n;
    }
    function skrin(v) { return v.map(function (p) { return b1(CX + p[0]) + "," + b1(CY - p[1]); }).join(" "); }

    function teksBerangka(mula, hujung) {
      var a = [], i;
      for (i = mula; i <= hujung; i++) a.push(neg(i));
      return a;
    }
    /* Vektor lajur (a atas b) dengan kurungan */
    function lajur(x, y, a, b) {
      var o = teks(x, y, neg(a), { tengah: true, saiz: 13, warna: "tinta", tebal: true }) +
        teks(x, y + 16, neg(b), { tengah: true, saiz: 13, warna: "tinta", tebal: true });
      o += h.laluan("M" + b1(x - 16) + " " + b1(y - 12) + " L" + b1(x - 20) + " " + b1(y - 12) + " L" + b1(x - 20) + " " + b1(y + 21) + " L" + b1(x - 16) + " " + b1(y + 21), { warna: "tinta", tebal: 1.5 });
      o += h.laluan("M" + b1(x + 16) + " " + b1(y - 12) + " L" + b1(x + 20) + " " + b1(y - 12) + " L" + b1(x + 20) + " " + b1(y + 21) + " L" + b1(x + 16) + " " + b1(y + 21), { warna: "tinta", tebal: 1.5 });
      return o;
    }

    W.t2iso = {
      mula: function (c) {
        var mod = c.mod || "translasi";
        if (mod === "translasi") return { a: c.a == null ? 6 : c.a, b: c.b == null ? 5 : c.b };
        if (mod === "pantulan") return { p: c.p == null ? 0 : c.p };
        if (mod === "putaran") return { c: c.c == null ? 0 : c.c, u: c.u == null ? 0 : c.u };
        if (mod === "isometri") return { j: c.j == null ? 0 : c.j };
        return { i: c.i == null ? 0 : c.i, s: c.s == null ? 0 : c.s };
      },
      kawalan: function (c) {
        var mod = c.mod || "translasi";
        if (mod === "translasi") return [
          { k: "a", label: "a (mendatar)", min: 0, maks: 7, teks: teksBerangka(-4, 3) },
          { k: "b", label: "b (menegak)", min: 0, maks: 6, teks: teksBerangka(-3, 3) }];
        if (mod === "pantulan") return [{ k: "p", label: "paksi", min: 0, maks: PAKSI.length - 1, teks: PAKSI.map(function (a) { return a.n; }) }];
        if (mod === "putaran") return [
          { k: "c", label: "pusat", min: 0, maks: PUSAT.length - 1, teks: PUSAT.map(koor) },
          { k: "u", label: "putar", min: 0, maks: SUDUT.length - 1, teks: SUDUT.map(function (a) { return a.n; }) }];
        if (mod === "isometri") return [{ k: "j", label: "ubah", min: 0, maks: TF.length - 1, teks: TF.map(function (t) { return t.s; }) }];
        var sudut = [], i;
        for (i = 0; i <= 60; i++) sudut.push(i * 6 + "°");
        return [
          { k: "i", label: "bentuk", min: 0, maks: BENTUK.length - 1, teks: BENTUK.map(function (b) { return b.s; }) },
          { k: "s", label: "putaran", min: 0, maks: 60, teks: sudut }];
      },
      kira: function (c, s) {
        var mod = c.mod || "translasi", r = {}, i;
        if (mod === "translasi") {
          r.a = s.a - 4; r.b = s.b - 3;
          r.objek = L_TRANS; r.imej = L_TRANS.map(function (p) { return [p[0] + r.a, p[1] + r.b]; });
          r.A = r.objek[0]; r.A2 = r.imej[0]; r.jarakAA = bul(Math.sqrt(r.a * r.a + r.b * r.b));
          return r;
        }
        if (mod === "pantulan") {
          var ax = PAKSI[s.p];
          r.paksi = ax.n; r.objek = L_LAIN; r.imej = L_LAIN.map(function (p) { return pantul(p, ax); });
          r.A = r.objek[0]; r.A2 = r.imej[0];
          if (ax.j === "v") { r.jarakA = Math.abs(r.A[0] - ax.k); r.jarakA2 = Math.abs(r.A2[0] - ax.k); }
          else if (ax.j === "h") { r.jarakA = Math.abs(r.A[1] - ax.k); r.jarakA2 = Math.abs(r.A2[1] - ax.k); }
          else { r.jarakA = bul(Math.abs(r.A[0] - r.A[1]) / Math.SQRT2); r.jarakA2 = bul(Math.abs(r.A2[0] - r.A2[1]) / Math.SQRT2); }
          return r;
        }
        if (mod === "putaran") {
          var pu = PUSAT[s.c], su = SUDUT[s.u];
          r.pusat = pu; r.sudut = su.d; r.nama = su.p; r.objek = L_LAIN;
          r.imej = L_LAIN.map(function (p) { return putar(p, pu, su.d); });
          r.A = r.objek[0]; r.A2 = r.imej[0]; r.PA = bul(jarak(pu, r.A)); r.PA2 = bul(jarak(pu, r.A2));
          return r;
        }
        if (mod === "isometri") {
          var t = TF[s.j];
          r.nama = t.n; r.objek = TRI; r.imej = TRI.map(t.f);
          r.BC = bul(jarak(TRI[1], TRI[2])); r.BC2 = bul(jarak(r.imej[1], r.imej[2]));
          r.isometri = Math.abs(jarak(TRI[1], TRI[2]) - jarak(r.imej[1], r.imej[2])) < 1e-9 &&
            Math.abs(jarak(TRI[0], TRI[1]) - jarak(r.imej[0], r.imej[1])) < 1e-9 &&
            Math.abs(jarak(TRI[0], TRI[2]) - jarak(r.imej[0], r.imej[2])) < 1e-9;
          r.kongruen = r.isometri; r.serupa = r.isometri || !!t.serupa;
          return r;
        }
        var b = BENTUK[s.i];
        r.bentuk = b.n; r.sudut = s.s * 6; r.padan = padan(s.i, r.sudut); r.peringkat = peringkat(s.i);
        return r;
      },
      lukis: function (c, s) {
        var mod = c.mod || "translasi", r = this.kira(c, s), o = "", tag = penaruh(), i;

        /* ---------- translasi ---------- */
        if (mod === "translasi") {
          o += grid();
          o += poligon(r.objek, "hijauLembut", "hijau", 2);
          var nol = r.a === 0 && r.b === 0;
          if (!nol) o += hasil(poligon(r.imej, "merahLembut", "merah", 2) + panah(X(r.A[0]), Y(r.A[1]), X(r.A2[0]), Y(r.A2[1]), "ungu"));
          o += titik(X(r.A[0]), Y(r.A[1]), "hijau", 3);
          o += tag(X(r.A[0]), Y(r.A[1]), "A", "hijau");
          o += tag(X(r.A2[0]), Y(r.A2[1]), "A′", "merah", { hasil: true });
          o += hasil(titik(X(r.A2[0]), Y(r.A2[1]), "merah", 3));
          o += teks(8, 270, "Vektor translasi", { saiz: 12, warna: "tinta", tebal: true });
          o += teks(133, 270, "=", { saiz: 12, warna: "tinta", tebal: true });
          o += lajur(165, 264, r.a, r.b);
          o += teks(8, 306, "A" + koor(r.A) + " → A′" + koor(r.A2), { saiz: 12, warna: "merah", tebal: true, hasil: true });
          o += teks(8, 322, "Jarak AA′ = " + neg(r.jarakAA) + " unit", { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          return h.svg(332, o, "Rajah translasi pada grid: objek berbentuk L digerakkan oleh vektor (" + r.a + ", " + r.b + "); gelongsor a dan b menukar vektor");
        }

        /* ---------- pantulan ---------- */
        if (mod === "pantulan") {
          var ax = PAKSI[s.p];
          o += grid();
          if (ax.j === "v") o += h.garis(X(ax.k), Y(MAX), X(ax.k), Y(MIN), { warna: "ungu", tebal: 2, putus: "6 4" });
          else if (ax.j === "h") o += h.garis(X(MIN), Y(ax.k), X(MAX), Y(ax.k), { warna: "ungu", tebal: 2, putus: "6 4" });
          else if (ax.j === "d") o += h.garis(X(MIN), Y(MIN), X(MAX), Y(MAX), { warna: "ungu", tebal: 2, putus: "6 4" });
          else o += h.garis(X(MIN), Y(MAX), X(MAX), Y(MIN), { warna: "ungu", tebal: 2, putus: "6 4" });
          o += poligon(r.objek, "hijauLembut", "hijau", 2);
          o += hasil(poligon(r.imej, "merahLembut", "merah", 2) +
            (r.A[0] === r.A2[0] && r.A[1] === r.A2[1] ? "" : h.garis(X(r.A[0]), Y(r.A[1]), X(r.A2[0]), Y(r.A2[1]), { warna: "ungu", tebal: 1.2, putus: "3 3" })));
          o += titik(X(r.A[0]), Y(r.A[1]), "hijau", 3);
          o += tag(X(r.A[0]), Y(r.A[1]), "A", "hijau");
          o += tag(X(r.A2[0]), Y(r.A2[1]), "A′", "merah", { hasil: true });
          o += teks(8, 264, "Paksi pantulan: " + ax.n, { saiz: 12, warna: "ungu", tebal: true });
          o += teks(8, 282, "A" + koor(r.A) + " → A′" + koor(r.A2), { saiz: 12, warna: "merah", tebal: true, hasil: true });
          o += teks(8, 298, ax.j === "v" || ax.j === "h"
            ? "Jarak ke paksi: A = " + neg(r.jarakA) + ", A′ = " + neg(r.jarakA2)
            : "AA′ serenjang dengan paksi", { saiz: 12, warna: "tinta", tebal: true, hasil: true });
          return h.svg(308, o, "Rajah pantulan pada grid: objek berbentuk L dipantul pada paksi " + ax.n + "; gelongsor memilih paksi pantulan");
        }

        /* ---------- putaran ---------- */
        if (mod === "putaran") {
          var pu = r.pusat;
          o += grid();
          o += poligon(r.objek, "hijauLembut", "hijau", 2);
          o += hasil(poligon(r.imej, "merahLembut", "merah", 2) +
            h.garis(X(pu[0]), Y(pu[1]), X(r.A[0]), Y(r.A[1]), { warna: "ungu", tebal: 1.2, putus: "3 3" }) +
            h.garis(X(pu[0]), Y(pu[1]), X(r.A2[0]), Y(r.A2[1]), { warna: "ungu", tebal: 1.2, putus: "3 3" }));
          o += titik(X(r.A[0]), Y(r.A[1]), "hijau", 3);
          o += titik(X(pu[0]), Y(pu[1]), "tinta", 4);
          o += tag(X(pu[0]), Y(pu[1]), "P", "tinta");
          o += tag(X(r.A[0]), Y(r.A[1]), "A", "hijau");
          o += tag(X(r.A2[0]), Y(r.A2[1]), "A′", "merah", { hasil: true });
          o += teks(8, 264, "P" + koor(pu) + " · " + r.nama, { saiz: 12, warna: "ungu", tebal: true });
          o += teks(8, 282, "A" + koor(r.A) + " → A′" + koor(r.A2), { saiz: 12, warna: "merah", tebal: true, hasil: true });
          o += teks(8, 298, "PA = PA′ = " + neg(r.PA), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
          return h.svg(308, o, "Rajah putaran pada grid: objek berbentuk L diputar " + r.nama + " pada pusat P" + koor(pu) + "; gelongsor memilih pusat dan putaran");
        }

        /* ---------- isometri lawan bukan isometri ---------- */
        if (mod === "isometri") {
          var t = TF[s.j];
          o += grid();
          if (t.garis === "x") o += h.garis(X(0), Y(MAX), X(0), Y(MIN), { warna: "ungu", tebal: 2, putus: "6 4" });
          o += poligon(r.objek, "hijauLembut", "hijau", 2);
          o += hasil(poligon(r.imej, "merahLembut", "merah", 2));
          if (t.pusat) o += titik(X(t.pusat[0]), Y(t.pusat[1]), "ungu", 4);
          o += tag(X(r.objek[1][0]), Y(r.objek[1][1]), "B", "hijau");
          o += tag(X(r.objek[2][0]), Y(r.objek[2][1]), "C", "hijau");
          o += tag(X(r.imej[1][0]), Y(r.imej[1][1]), "B′", "merah", { hasil: true });
          o += tag(X(r.imej[2][0]), Y(r.imej[2][1]), "C′", "merah", { hasil: true });
          o += teks(8, 264, "Ubah: " + r.nama, { saiz: 12, warna: "ungu", tebal: true });
          o += teks(8, 282, "BC = " + neg(r.BC) + " · B′C′ = " + neg(r.BC2), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
          o += teks(8, 300, "Isometri? " + (r.isometri ? "Ya" : "Tidak"), { saiz: 12, warna: r.isometri ? "hijau" : "merah", tebal: true, hasil: true });
          o += teks(8, 318, r.kongruen ? "Kongruen (bentuk, saiz sama)" : r.serupa ? "Serupa, tidak kongruen" : "Tidak serupa, tidak kongruen", { saiz: 12, warna: "tinta", tebal: true, hasil: true });
          return h.svg(330, o, "Rajah transformasi " + r.nama + " pada segi tiga ABC; jarak BC dan B'C' dibandingkan untuk menentukan sama ada isometri");
        }

        /* ---------- simetri putaran ---------- */
        var bt = BENTUK[s.i], hasilPutar = putarBentuk(bt.v, r.sudut);
        o += '<polygon points="' + skrin(hasilPutar) + '" fill="' + h.w("kuningLembut") + '" stroke="' + h.w("kuning") + '" stroke-width="2" stroke-linejoin="round"></polygon>';
        o += '<polygon points="' + skrin(bt.v) + '" fill="none" stroke="' + h.w("tinta") + '" stroke-width="1.8" stroke-linejoin="round" stroke-dasharray="5 3"></polygon>';
        if (r.padan) o += hasil('<polygon points="' + skrin(bt.v) + '" fill="none" stroke="' + h.w("hijau") + '" stroke-width="4" stroke-linejoin="round"></polygon>');
        o += titik(CX + bt.v[0][0], CY - bt.v[0][1], "hijau", 4.5);
        o += titik(CX + hasilPutar[0][0], CY - hasilPutar[0][1], "merah", 3);
        o += titik(CX, CY, "tinta", 2.5);
        o += teks(8, 202, "Bentuk: " + bt.n, { saiz: 12, warna: "tinta", tebal: true });
        o += teks(8, 220, "Diputar " + r.sudut + "° lawan jam", { saiz: 12, warna: "tinta", tebal: true });
        o += teks(8, 238, "Padan dengan asal? " + (r.padan ? "Ya" : "Tidak"), { saiz: 12, warna: r.padan ? "hijau" : "merah", tebal: true, hasil: true });
        o += teks(8, 254, "Peringkat simetri putaran = " + r.peringkat, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
        return h.svg(264, o, "Rajah simetri putaran: " + bt.n + " diputar " + r.sudut + " darjah mengelilingi pusat; gelongsor menukar bentuk dan sudut putaran");
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else pasang(window.JMI);
})();
