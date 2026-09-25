/* Widget Bab 8 Lokus dalam Dua Dimensi: W.lokus dengan enam mod.

   Mod (c.mod):
   - titik   : berjarak tetap dari satu titik (bulatan), syarat = / < / >
   - dua     : berjarak sama dari dua titik (pembahagi dua sama serenjang)
   - garis   : berjarak tetap dari satu garis lurus (dua garis selari)
   - selari  : berjarak sama dari dua garis selari (garis tengah)
   - silang  : berjarak sama dari dua garis bersilang (pembahagi dua sudut)
   - gabung  : dua syarat serentak (bulatan dan pembahagi dua sama serenjang)

   Setiap nombor dikira daripada formula dalam kira(). Titik P digerakkan oleh
   gelongsor, jarak dipaparkan, dan lokus dilukis di atas rajah. Fail ini
   didaftar oleh interaktif.js (Node) atau dimuatkan selepas interaktif.js
   dalam pelayar. */
function daftarLokus(JMI) {
  "use strict";
  var h = JMI.h, teks = h.teks, garis = h.garis, laluan = h.laluan, kotak = h.kotak, svg = h.svg, w = h.w, b1 = h.b1, nomK = h.nomK;
  var OX = 130, OY = 90, X0 = 8, X1 = 252, Y0 = 8, Y1 = 172, EPS = 1e-9;
  var pi = Math.PI;
  function bulat2(n) { return Math.round(n * 100) / 100; }
  function bulatan(x, y, r, isi, garisW) {
    return '<circle cx="' + b1(x) + '" cy="' + b1(y) + '" r="' + r + '" fill="' + w(isi) + '" stroke="' + w(garisW || "kertas") + '" stroke-width="1.5"></circle>';
  }
  /* Garis melalui (px,py) arah (dx,dy), dipotong pada kotak lukisan. */
  function potong(px, py, dx, dy) {
    var lo = -1e9, hi = 1e9;
    function t(a, d, min, maks) {
      if (Math.abs(d) < EPS) return;
      var t1 = (min - a) / d, t2 = (maks - a) / d;
      lo = Math.max(lo, Math.min(t1, t2)); hi = Math.min(hi, Math.max(t1, t2));
    }
    t(px, dx, X0, X1); t(py, dy, Y0, Y1);
    return [px + lo * dx, py + lo * dy, px + hi * dx, py + hi * dy];
  }
  function panjangGaris(px, py, dx, dy, o) { var p = potong(px, py, dx, dy); return garis(p[0], p[1], p[2], p[3], o); }
  function tanda(x, y, d) { /* penanda sudut tegak kecil pada kaki serenjang */
    return kotak(x + d[0] - 4, y + d[1] - 4, 8, 8, { garis: "tinta3", tebal: 1, bulat: 0 });
  }
  function bingkai() { return kotak(X0, Y0, X1 - X0, Y1 - Y0, { garis: "garis", tebal: 1, bulat: 4 }); }
  function baris(n, isi, warna, hasil) {
    return teks(8, 192 + n * 16, isi, { saiz: 12, warna: warna || "tinta", tebal: true, hasil: !!hasil });
  }
  function lorek(d) { return '<path d="' + d + '" fill-rule="evenodd" fill="' + w("kuningLembut") + '" stroke="none"></path>'; }
  function polilaluan(pts) { return pts.map(function (p, i) { return (i ? "L" : "M") + b1(p[0]) + " " + b1(p[1]); }).join(" "); }

  var W = JMI.W;

  W.lokus = {
    mula: function (c) {
      switch (c.mod) {
        case "titik": return { i: c.i == null ? 3 : c.i, s: c.s || 0 };
        case "dua": return { y: c.y == null ? 1 : c.y, x: c.x == null ? 3 : c.x };
        case "garis": return { x: c.x == null ? 2 : c.x, s: c.s || 0 };
        case "selari": return { y: c.y == null ? Math.round(c.G * 0.5) + 1 : c.y, x: c.x == null ? 2 : c.x };
        case "silang": return { t: c.t == null ? 1 : c.t, a: c.a == null ? 1 : c.a };
        case "gabung": return { r: c.r == null ? 2 : c.r, s: c.s || 0 };
      }
      throw new Error("mod lokus " + c.mod + " tidak dikenali");
    },
    kawalan: function (c) {
      var i, sudut = [], x9 = [], y7 = [], a24 = [];
      switch (c.mod) {
        case "titik":
          for (i = 0; i < 24; i++) sudut.push(i * 15 + "°");
          return [{ k: "i", label: "arah P", min: 0, maks: 23, teks: sudut },
                  { k: "s", label: "syarat", min: 0, maks: 2, teks: ["OP = r", "OP < r", "OP > r"] }];
        case "dua":
          for (i = 0; i < 7; i++) { y7.push((i - 3) + " cm"); x9.push(bulat2((i - 3) * 0.5) + " cm"); }
          return [{ k: "y", label: "P naik/turun", min: 0, maks: 6, teks: y7 },
                  { k: "x", label: "P ke tepi", min: 0, maks: 6, teks: x9 }];
        case "garis":
          for (i = 0; i < 9; i++) x9.push((i - 4) + " cm");
          return [{ k: "x", label: "kedudukan P", min: 0, maks: 8, teks: x9 },
                  { k: "s", label: "sisi", min: 0, maks: 1, teks: ["atas garis", "bawah garis"] }];
        case "selari":
          for (i = 0; i <= 2 * c.G; i++) y7.push(bulat2((i - c.G) * 0.5) + " cm");
          for (i = 0; i < 9; i++) x9.push((i - 4) + " cm");
          return [{ k: "y", label: "P naik/turun", min: 0, maks: 2 * c.G, teks: y7 },
                  { k: "x", label: "P ke tepi", min: 0, maks: 8, teks: x9 }];
        case "silang":
          for (i = 0; i < 24; i++) a24.push(i * 15 + "°");
          return [{ k: "t", label: "jarak OP", min: 0, maks: 3, teks: ["1 cm", "2 cm", "3 cm", "4 cm"] },
                  { k: "a", label: "arah P", min: 0, maks: 23, teks: a24 }];
        case "gabung":
          return [{ k: "r", label: "jejari r", min: 0, maks: c.jejari.length - 1, teks: c.jejari.map(function (r) { return r + " cm"; }) },
                  { k: "s", label: "syarat", min: 0, maks: 1, teks: ["garis sahaja", "kawasan"] }];
      }
    },
    kira: function (c, s) {
      var r, d;
      switch (c.mod) {
        case "titik":
          d = c.r * [1, 0.55, 1.4][s.s];
          return { d: bulat2(d), r: c.r, sudut: s.i * 15, wilayah: ["lokus", "dalam", "luar"][s.s] };
        case "dua": {
          var px = (s.x - 3) * 0.5, py = s.y - 3, A = c.D / 2;
          var pa = Math.hypot(px + A, py), pb = Math.hypot(px - A, py);
          return { PA: bulat2(pa), PB: bulat2(pb), sama: Math.abs(pa - pb) < 1e-9, x: px, y: py };
        }
        case "garis":
          return { jarak: c.d, x: s.x - 4, y: s.s ? -c.d : c.d, padaLokus: true };
        case "selari": {
          var yy = (s.y - c.G) * 0.5, atas = c.G / 2 - yy, bawah = c.G / 2 + yy;
          return { atas: bulat2(atas), bawah: bulat2(bawah), sama: Math.abs(atas - bawah) < 1e-9, y: yy };
        }
        case "silang": {
          var a = (c.sudut / 2) * pi / 180, t = s.t + 1, f = s.a * 15 * pi / 180;
          var x = t * Math.cos(f), y = t * Math.sin(f);
          var j1 = Math.abs(x * Math.sin(a) - y * Math.cos(a)), j2 = Math.abs(x * Math.sin(-a) - y * Math.cos(-a));
          return { j1: bulat2(j1), j2: bulat2(j2), sama: Math.abs(j1 - j2) < 1e-9, t: t, arah: s.a * 15 };
        }
        case "gabung": {
          r = c.jejari[s.r]; var dx = c.D / 2, n, yv = null;
          if (r < dx - EPS) n = 0; else if (Math.abs(r - dx) < EPS) { n = 1; yv = 0; } else { n = 2; yv = bulat2(Math.sqrt(r * r - dx * dx)); }
          return { r: r, titik: n, y: yv, panjang: bulat2(Math.min(dx + r, 2 * r)) };
        }
      }
    },
    lukis: function (c, s) {
      var r = this.kira(c, s), isi = bingkai(), k, ox = OX, oy = OY, tinggi = 234;
      var X = function (x) { return ox + x * k; }, Y = function (y) { return oy - y * k; };
      var i, P, d;

      if (c.mod === "titik") {
        k = 55 / c.r;
        var R = 55, a = r.sudut * pi / 180, dp = r.d * k;
        var px = OX + dp * Math.cos(a), py = OY - dp * Math.sin(a);
        if (s.s === 1) isi += '<circle cx="' + OX + '" cy="' + OY + '" r="' + R + '" fill="' + w("kuningLembut") + '" stroke="none"></circle>';
        if (s.s === 2) isi += lorek("M" + X0 + " " + Y0 + " H" + X1 + " V" + Y1 + " H" + X0 + " Z M" + (OX - R) + " " + OY + " a" + R + " " + R + " 0 1 0 " + 2 * R + " 0 a" + R + " " + R + " 0 1 0 " + (-2 * R) + " 0 Z");
        if (s.s === 0) {
          isi += '<circle cx="' + OX + '" cy="' + OY + '" r="' + R + '" fill="none" stroke="' + w("garis2") + '" stroke-width="1.2" stroke-dasharray="3 4"></circle>';
          if (r.sudut > 0) {
            var pts = []; for (i = 0; i <= r.sudut; i += 5) pts.push([OX + R * Math.cos(i * pi / 180), OY - R * Math.sin(i * pi / 180)]);
            isi += laluan(polilaluan(pts), { warna: "hijau", tebal: 3 });
          }
        } else {
          isi += '<circle cx="' + OX + '" cy="' + OY + '" r="' + R + '" fill="none" stroke="' + w("hijau") + '" stroke-width="2" stroke-dasharray="6 4"></circle>';
        }
        isi += garis(OX, OY, px, py, { warna: "merah", tebal: 2 });
        isi += bulatan(OX, OY, 4, "tinta") + bulatan(px, py, 5, "merah");
        isi += teks(OX - 15, OY + 16, "O", { saiz: 12, warna: "tinta", tebal: true });
        isi += teks(Math.min(X1 - 12, Math.max(X0 + 2, px + 10 * Math.cos(a) - 4 + (Math.cos(a) < 0 ? -6 : 0))), Math.min(Y1 - 4, Math.max(Y0 + 13, py - 10 * Math.sin(a) + 4)), "P", { saiz: 12, warna: "merah", tebal: true });
        isi += baris(0, "OP = " + nomK(r.d) + " cm", "merah", true);
        isi += baris(1, "r = " + nomK(r.r) + " cm", "tinta");
        isi += baris(2, ["P pada lokus (OP = r)", "P dalam kawasan (OP < r)", "P luar kawasan (OP > r)"][s.s], "hijau", true);
        return svg(tinggi, isi, "Rajah lokus titik P berjarak " + nomK(r.r) + " sentimeter dari titik tetap O; jarak OP ialah " + nomK(r.d) + " sentimeter, kawasan " + r.wilayah);
      }

      if (c.mod === "dua") {
        k = Math.min(20, 150 / c.D);
        var A = c.D / 2;
        P = [X(r.x), Y(r.y)];
        isi += garis(ox, Y0, ox, Y1, { warna: "hijau", tebal: 2.5, putus: "6 4" });
        isi += garis(X(-A), oy, X(A), oy, { warna: "tinta3", tebal: 1, putus: "2 3" });
        isi += garis(X(-A), oy, P[0], P[1], { warna: "ungu", tebal: 2 }) + garis(X(A), oy, P[0], P[1], { warna: "merah", tebal: 2 });
        isi += bulatan(X(-A), oy, 4.5, "tinta") + bulatan(X(A), oy, 4.5, "tinta") + bulatan(P[0], P[1], 5, r.sama ? "hijau" : "merah");
        isi += teks(X(-A) - 6, oy + 18, "A", { saiz: 12, warna: "tinta", tebal: true }) + teks(X(A) - 4, oy + 18, "B", { saiz: 12, warna: "tinta", tebal: true });
        isi += teks(P[0] + 9, P[1] + (r.y <= 0 ? 16 : -6), "P", { saiz: 12, warna: "merah", tebal: true });
        isi += baris(0, "PA = " + nomK(r.PA) + " cm", "ungu", true) + baris(1, "PB = " + nomK(r.PB) + " cm", "merah", true);
        isi += baris(2, r.sama ? "PA sama PB: P pada lokus" : "PA tak sama PB: bukan lokus", r.sama ? "hijau" : "merah", true);
        return svg(tinggi, isi, "Rajah lokus titik P yang sama jauh dari titik A dan B, dengan jarak AB " + nomK(c.D) + " sentimeter; PA ialah " + nomK(r.PA) + " dan PB ialah " + nomK(r.PB));
      }

      if (c.mod === "garis") {
        k = Math.min(20, 64 / c.d);
        P = [X(r.x), Y(r.y)];
        isi += garis(X0, oy, X1, oy, { warna: "tinta", tebal: 3 });
        isi += garis(X0, Y(c.d), X1, Y(c.d), { warna: "hijau", tebal: 2.5, putus: "6 4" }) + garis(X0, Y(-c.d), X1, Y(-c.d), { warna: "hijau", tebal: 2.5, putus: "6 4" });
        isi += garis(P[0], P[1], P[0], oy, { warna: "merah", tebal: 2 });
        isi += tanda(P[0], oy, [r.y > 0 ? (r.x >= 0 ? -8 : 0) : (r.x >= 0 ? -8 : 0), r.y > 0 ? -4 : 4]);
        isi += bulatan(P[0], P[1], 5, "merah");
        isi += teks(P[0] + 9, P[1] + (r.y > 0 ? -7 : 16), "P", { saiz: 12, warna: "merah", tebal: true });
        isi += teks(X0 + 6, oy - 8, "garis PQ", { saiz: 11, warna: "tinta", tebal: true });
        isi += baris(0, "Jarak P ke garis = " + nomK(r.jarak) + " cm", "merah", true);
        isi += baris(1, "Lokus: dua garis selari", "hijau", true);
        tinggi = 218;
        return svg(tinggi, isi, "Rajah lokus titik P berjarak tetap " + nomK(c.d) + " sentimeter dari garis lurus PQ, iaitu dua garis selari di kedua-dua sisi");
      }

      if (c.mod === "selari") {
        var G = c.G; k = Math.min(20, 70 / (G / 2));
        P = [X(s.x - 4), Y(r.y)];
        isi += garis(X0, Y(G / 2), X1, Y(G / 2), { warna: "tinta", tebal: 3 }) + garis(X0, Y(-G / 2), X1, Y(-G / 2), { warna: "tinta", tebal: 3 });
        isi += garis(X0, oy, X1, oy, { warna: "hijau", tebal: 2.5, putus: "6 4" });
        isi += garis(P[0], P[1], P[0], Y(G / 2), { warna: "ungu", tebal: 2 }) + garis(P[0], P[1], P[0], Y(-G / 2), { warna: "merah", tebal: 2 });
        isi += bulatan(P[0], P[1], 5, r.sama ? "hijau" : "kuning");
        isi += teks(P[0] + 9, P[1] + (r.y > 0 ? 16 : r.y < 0 ? -8 : 4), "P", { saiz: 12, warna: "tinta", tebal: true });
        isi += teks(X0 + 6, Y(G / 2) - 6, "garis atas", { saiz: 11, warna: "tinta", tebal: true }) + teks(X0 + 6, Y(-G / 2) + 15, "garis bawah", { saiz: 11, warna: "tinta", tebal: true });
        isi += baris(0, "Ke garis atas = " + nomK(r.atas) + " cm", "ungu", true) + baris(1, "Ke garis bawah = " + nomK(r.bawah) + " cm", "merah", true);
        isi += baris(2, r.sama ? "Sama jauh: P pada lokus" : "Tak sama jauh: bukan lokus", r.sama ? "hijau" : "merah", true);
        return svg(tinggi, isi, "Rajah lokus titik P sama jauh dari dua garis selari yang berjarak " + nomK(G) + " sentimeter; jarak ke garis atas " + nomK(r.atas) + " dan ke garis bawah " + nomK(r.bawah));
      }

      if (c.mod === "silang") {
        k = 19;
        var al = (c.sudut / 2) * pi / 180, t = r.t, f = r.arah * pi / 180;
        var u1 = [Math.cos(al), Math.sin(al)], u2 = [Math.cos(-al), Math.sin(-al)];
        var Px = t * Math.cos(f), Py = t * Math.sin(f);
        var pr1 = Px * u1[0] + Py * u1[1], pr2 = Px * u2[0] + Py * u2[1];
        var F1 = [pr1 * u1[0], pr1 * u1[1]], F2 = [pr2 * u2[0], pr2 * u2[1]];
        isi += garis(X0, oy, X1, oy, { warna: "hijau", tebal: 2, putus: "6 4" }) + garis(ox, Y0, ox, Y1, { warna: "hijau", tebal: 2, putus: "6 4" });
        isi += panjangGaris(ox, oy, u1[0], -u1[1], { warna: "ungu", tebal: 3 }) + panjangGaris(ox, oy, u2[0], -u2[1], { warna: "merah", tebal: 3 });
        isi += garis(X(Px), Y(Py), X(F1[0]), Y(F1[1]), { warna: "ungu", tebal: 1.5, putus: "3 3" }) + garis(X(Px), Y(Py), X(F2[0]), Y(F2[1]), { warna: "merah", tebal: 1.5, putus: "3 3" });
        isi += bulatan(ox, oy, 4, "tinta") + bulatan(X(Px), Y(Py), 5, r.sama ? "hijau" : "kuning");
        isi += teks(ox - 15, oy + 16, "O", { saiz: 12, warna: "tinta", tebal: true });
        isi += teks(Math.min(X1 - 12, Math.max(X0 + 2, X(Px) + (Px >= 0 ? 8 : -16))), Math.min(Y1 - 4, Math.max(Y0 + 13, Y(Py) + (Py > 0 ? -7 : 16))), "P", { saiz: 12, warna: "tinta", tebal: true });
        isi += teks(ox + 104 * u1[0] + 4, Math.max(Y0 + 14, oy - 104 * u1[1] - 8), "1", { saiz: 12, warna: "ungu", tebal: true });
        isi += teks(ox + 104 * u2[0] + 4, Math.min(Y1 - 6, oy + 104 * u1[1] + 14), "2", { saiz: 12, warna: "merah", tebal: true });
        isi += baris(0, "Jarak ke garis 1 = " + nomK(r.j1) + " cm", "ungu", true) + baris(1, "Jarak ke garis 2 = " + nomK(r.j2) + " cm", "merah", true);
        isi += baris(2, r.sama ? "Sama jauh: P pada lokus" : "Tak sama jauh: bukan lokus", r.sama ? "hijau" : "merah", true);
        return svg(tinggi, isi, "Rajah lokus titik P sama jauh dari dua garis bersilang dengan sudut " + nomK(c.sudut) + " darjah; jarak ke garis 1 ialah " + nomK(r.j1) + " dan ke garis 2 ialah " + nomK(r.j2));
      }

      if (c.mod === "gabung") {
        k = 19; var Dh = c.D / 2; ox = OX + Dh * k;
        var rr = r.r, RR = rr * k;
        if (s.s === 1) {
          var pts2 = [];
          for (i = 0; i <= 360; i += 3) { var xx = Math.min(-Dh + rr * Math.cos(i * pi / 180), 0); pts2.push([X(xx), Y(rr * Math.sin(i * pi / 180))]); }
          isi += '<path d="' + polilaluan(pts2) + ' Z" fill="' + w("kuningLembut") + '" stroke="none"></path>';
        }
        isi += garis(ox, Y0, ox, Y1, { warna: "hijau", tebal: 2.5, putus: "6 4" });
        isi += '<circle cx="' + b1(X(-Dh)) + '" cy="' + oy + '" r="' + b1(RR) + '" fill="none" stroke="' + w("ungu") + '" stroke-width="2.5"' + (s.s ? ' stroke-dasharray="6 4"' : "") + '></circle>';
        isi += garis(X(-Dh), oy, X(Dh), oy, { warna: "tinta3", tebal: 1, putus: "2 3" });
        if (r.titik >= 1) isi += bulatan(ox, Y(r.y), 5, "merah");
        if (r.titik === 2) isi += bulatan(ox, Y(-r.y), 5, "merah");
        isi += bulatan(X(-Dh), oy, 4.5, "tinta") + bulatan(X(Dh), oy, 4.5, "tinta");
        isi += teks(X(-Dh) - 12, oy + 16, "A", { saiz: 12, warna: "tinta", tebal: true }) + teks(X(Dh) + 7, oy + 16, "B", { saiz: 12, warna: "tinta", tebal: true });
        isi += baris(0, "Bulatan pusat A, r = " + nomK(rr) + " cm", "ungu");
        if (s.s === 0) {
          isi += baris(1, "Titik memenuhi dua syarat: " + r.titik, "merah", true);
          isi += baris(2, r.titik === 0 ? "Tiada titik persilangan" : (r.titik === 1 ? "Titik pada AB (y = 0)" : "Dua titik, y = ±" + nomK(r.y) + " cm"), "hijau", true);
        } else {
          isi += baris(1, "Syarat: PA < r dan PA < PB", "merah");
          isi += baris(2, "Panjang kawasan pada AB = " + nomK(r.panjang) + " cm", "hijau", true);
        }
        return svg(tinggi, isi, "Rajah gabungan dua syarat lokus: bulatan pusat A berjejari " + nomK(rr) + " sentimeter dan pembahagi dua sama serenjang AB dengan jarak AB " + nomK(c.D) + " sentimeter");
      }
    }
  };
}
if (typeof module !== "undefined") module.exports = daftarLokus; else daftarLokus(window.JMI);
