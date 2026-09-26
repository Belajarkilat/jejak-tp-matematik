/* Widget Tingkatan 2 Bab 4 Poligon: satu widget "t2poligon" dengan enam mod.

   sifat      poligon sekata lawan tak sekata: sisi, sudut, paksi simetri
   bina       membina poligon sekata daripada bulatan (sudut pusat = 360 / n), langkah demi langkah
   sudut      poligon sekata dibahagi kepada (n - 2) segi tiga; jumlah dan setiap sudut pedalaman dan peluaran
   peluaran   mengumpul sudut peluaran satu demi satu sehingga jumlahnya satu pusingan penuh
   cari       diberi sudut peluaran poligon sekata, cari bilangan sisi dan sudut pedalaman
   hilang     poligon tak sekata: cari satu sudut pedalaman yang hilang menggunakan jumlah sudut

   Semua sudut dan panjang dikira daripada koordinat dan rumus, bukan ditaip tangan.
   Bentuk poligon tak sekata dibina daripada sudut pedalaman (arah sisi dan panjang
   sisi terakhir dikira supaya poligon tertutup). Fail ini didaftarkan oleh
   interaktif.js (Node) dan sebagai skrip biasa (pelayar). */
(function () {
  "use strict";
  function daftar(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, garis = h.garis, laluan = h.laluan, svg = h.svg, b1 = h.b1;
    var D = Math.PI / 180, HURUF = "ABCDEFGHIJKL";
    var NS = [3, 4, 5, 6, 8, 9, 10, 12];
    var NAMA = { 3: "segi tiga", 4: "segi empat", 5: "segi lima", 6: "segi enam", 7: "segi tujuh", 8: "segi lapan", 9: "segi sembilan", 10: "segi sepuluh", 12: "segi dua belas" };
    var PERALUAN = [120, 90, 72, 60, 45, 40, 36, 30];

    /* Poligon tak sekata: sudut pedalaman (darjah) dan indeks sudut yang hilang (x). */
    var HILANG = [
      { a: [100, 110, 120, 105, 105], u: 4, l: [1, 1.15, 0.9] },
      { a: [90, 125, 100, 135, 90], u: 2, l: [1.2, 1, 1] },
      { a: [110, 120, 130, 100, 140, 120], u: 5, l: [1, 1, 1, 1] },
      { a: [125, 115, 140, 95, 130, 115], u: 3, l: [1, 1.1, 1, 0.9] },
      { a: [130, 120, 140, 125, 135, 110, 140], u: 6, l: [1, 1, 1, 1, 1] },
      { a: [80, 100, 95, 85], u: 3, l: [1.2, 1] }
    ];

    function d1(x) { var r = Math.round(x * 10) / 10; return String(r); }
    function jumlahDalam(n) { return (n - 2) * 180; }

    /* ---------- geometri ---------- */
    function sekata(n, cx, cy, R) {
      var P = [], k;
      for (k = 0; k < n; k++) { var a = (-90 + 360 * k / n) * D; P.push({ x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) }); }
      return P;
    }
    /* Tak sekata: sudut dan jejari diubah secara deterministik. */
    function takSekata(n, cx, cy, R) {
      var P = [], k;
      for (k = 0; k < n; k++) {
        var a = (-90 + 360 * k / n + 0.3 * (360 / n) * Math.sin(2.1 * k + 0.7)) * D;
        var r = R * (1 + 0.25 * Math.sin(1.7 * k + 0.3));
        P.push({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) });
      }
      return P;
    }
    /* Poligon daripada sudut pedalaman: lukisan dalam ruang matematik (y ke atas),
       n - 2 panjang bebas diberi, dua panjang terakhir diselesaikan supaya tertutup. */
    function daripadaSudut(a, bebas) {
      var n = a.length, th = [], t = 0, k;
      for (k = 0; k < n; k++) { if (k > 0) t += 180 - a[k]; th.push(t * D); }
      var sx = 0, sy = 0;
      for (k = 0; k < n - 2; k++) { sx += bebas[k] * Math.cos(th[k]); sy += bebas[k] * Math.sin(th[k]); }
      var c1 = Math.cos(th[n - 2]), s1 = Math.sin(th[n - 2]), c2 = Math.cos(th[n - 1]), s2 = Math.sin(th[n - 1]);
      var det = c1 * s2 - c2 * s1;
      var p = (-sx * s2 + sy * c2) / det, q = (-c1 * sy + s1 * sx) / det;
      var L = bebas.concat([p, q]), V = [{ x: 0, y: 0 }];
      for (k = 0; k < n - 1; k++) V.push({ x: V[k].x + L[k] * Math.cos(th[k]), y: V[k].y + L[k] * Math.sin(th[k]) });
      return { V: V, panjang: L, ok: p > 0.05 && q > 0.05 };
    }
    function muat(P, x0, y0, x1, y1) {
      var mnx = 1e9, mxx = -1e9, mny = 1e9, mxy = -1e9;
      P.forEach(function (p) { mnx = Math.min(mnx, p.x); mxx = Math.max(mxx, p.x); mny = Math.min(mny, p.y); mxy = Math.max(mxy, p.y); });
      var k = Math.min((x1 - x0) / (mxx - mnx), (y1 - y0) / (mxy - mny));
      var ox = (x0 + x1) / 2 - k * (mnx + mxx) / 2, oy = (y0 + y1) / 2 + k * (mny + mxy) / 2;
      return P.map(function (p) { return { x: ox + k * p.x, y: oy - k * p.y }; });
    }
    function sudutPada(V, X, Y) {
      var ax = X.x - V.x, ay = X.y - V.y, bx = Y.x - V.x, by = Y.y - V.y;
      var d = (ax * bx + ay * by) / (Math.hypot(ax, ay) * Math.hypot(bx, by));
      return Math.acos(Math.max(-1, Math.min(1, d))) / D;
    }
    function pusat(P) {
      var x = 0, y = 0; P.forEach(function (p) { x += p.x; y += p.y; });
      return { x: x / P.length, y: y / P.length };
    }

    /* ---------- pembantu lukisan ---------- */
    function titik(p) { return '<circle cx="' + b1(p.x) + '" cy="' + b1(p.y) + '" r="3" fill="' + h.w("tinta") + '" stroke="none"></circle>'; }
    function poligonLaluan(P, o) {
      var d = P.map(function (p, i) { return (i ? "L" : "M") + b1(p.x) + " " + b1(p.y); }).join(" ") + " Z";
      return laluan(d, o);
    }
    function huruf(p, c, t, jauh) {
      var dx = p.x - c.x, dy = p.y - c.y, n = Math.hypot(dx, dy) || 1;
      return teks(p.x + dx / n * jauh, p.y + dy / n * jauh + 4, t, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
    }
    /* Lengkok pendek (kurang 180 darjah) antara sinar V ke a1 dan V ke a2 (radian). */
    function lengkok(V, a1, a2, r, warna, isi) {
      var dl = a2 - a1;
      while (dl > Math.PI) dl -= 2 * Math.PI;
      while (dl < -Math.PI) dl += 2 * Math.PI;
      var x1 = V.x + r * Math.cos(a1), y1 = V.y + r * Math.sin(a1), x2 = V.x + r * Math.cos(a1 + dl), y2 = V.y + r * Math.sin(a1 + dl);
      var busur = "A" + r + " " + r + " 0 0 " + (dl > 0 ? 1 : 0) + " " + b1(x2) + " " + b1(y2);
      if (isi) return '<path d="M' + b1(V.x) + " " + b1(V.y) + " L" + b1(x1) + " " + b1(y1) + " " + busur + ' Z" fill="' + h.w(isi) + '" stroke="' + h.w(warna) + '" stroke-width="1.5" stroke-linejoin="round"></path>';
      return '<path d="M' + b1(x1) + " " + b1(y1) + " " + busur + '" fill="none" stroke="' + h.w(warna) + '" stroke-width="2"></path>';
    }
    function sudutKe(V, Q) { return Math.atan2(Q.y - V.y, Q.x - V.x); }
    var Y0 = 200, LANGKAH = 17;
    function baris(k, t, warna, hasil) { return teks(10, Y0 + LANGKAH * k, t, { saiz: 12, warna: warna || "tinta", tebal: true, hasil: !!hasil }); }
    function tinggiInfo(bil) { return Y0 + LANGKAH * (bil - 1) + 12; }
    var ns = function (c) { return c.ns || NS; };
    function indeksTeks(c) { return ns(c).map(function (n) { return n + " sisi"; }); }
    function patutPusat() { return { cx: 130, cy: 98, R: 72 }; }

    /* Penyusunan pilihan pengguna: nilai n daripada indeks */
    function nDaripada(c, s) { return ns(c)[Math.min(s.i, ns(c).length - 1)]; }

    W.t2poligon = {
      mula: function (c) {
        var s = { i: c.i == null ? 3 : c.i };
        if (c.mod === "sifat") s.j = c.j || 0;
        if (c.mod === "bina") s.l = c.l == null ? 3 : c.l;
        if (c.mod === "peluaran") s.k = c.k || 0;
        return s;
      },
      kawalan: function (c) {
        if (c.mod === "sifat") return [
          { k: "i", label: "sisi", min: 0, maks: ns(c).length - 1, teks: indeksTeks(c) },
          { k: "j", label: "jenis", min: 0, maks: 1, teks: ["sekata", "tak sekata"] }];
        if (c.mod === "bina") return [
          { k: "i", label: "sisi", min: 0, maks: ns(c).length - 1, teks: indeksTeks(c) },
          { k: "l", label: "langkah", min: 0, maks: 3, teks: ["0 bulatan", "1 sudut pusat", "2 tanda bucu", "3 sambung"] }];
        if (c.mod === "sudut") return [{ k: "i", label: "sisi", min: 0, maks: ns(c).length - 1, teks: indeksTeks(c) }];
        if (c.mod === "peluaran") {
          var tk = []; for (var q = 0; q <= 12; q++) tk.push(q + " sudut");
          return [{ k: "i", label: "sisi", min: 0, maks: ns(c).length - 1, teks: indeksTeks(c) },
            { k: "k", label: "kumpul", min: 0, maks: 12, teks: tk }];
        }
        if (c.mod === "cari") return [{ k: "i", label: "peluaran", min: 0, maks: PERALUAN.length - 1, teks: PERALUAN.map(function (e) { return e + "°"; }) }];
        if (c.mod === "hilang") return [{ k: "i", label: "poligon", min: 0, maks: HILANG.length - 1, teks: HILANG.map(function (q, i) { return "poligon " + (i + 1); }) }];
        throw new Error("mod t2poligon tidak dikenali: " + c.mod);
      },
      kira: function (c, s) {
        if (c.mod === "cari") {
          var e = PERALUAN[s.i], n = 360 / e;
          return { peluaran: e, n: n, pedalaman: 180 - e, jumlah: jumlahDalam(n) };
        }
        if (c.mod === "hilang") {
          var H = HILANG[s.i], n2 = H.a.length, jum = jumlahDalam(n2), tahu = 0;
          H.a.forEach(function (v, k) { if (k !== H.u) tahu += v; });
          return { n: n2, jumlah: jum, x: jum - tahu, tahu: tahu, sudut: H.a };
        }
        var nn = nDaripada(c, s), r = { n: nn, pedalaman: jumlahDalam(nn) / nn, peluaran: 360 / nn, jumlah: jumlahDalam(nn), segitiga: nn - 2, paksi: nn };
        if (c.mod === "bina") r.pusat = 360 / nn;
        if (c.mod === "peluaran") { r.kumpul = Math.min(s.k, nn); r.jumlahKumpul = r.kumpul * 360 / nn; }
        return r;
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), isi = "", P, C = patutPusat(), k;
        if (c.mod === "sifat") {
          var n = r.n, tak = s.j === 1;
          P = tak ? takSekata(n, C.cx, C.cy, C.R * 0.8) : sekata(n, C.cx, C.cy, C.R);
          if (!tak) for (k = 0; k < n; k++) {
            var f = (-90 + k * 180 / n) * D, ex = (C.R + 8) * Math.cos(f), ey = (C.R + 8) * Math.sin(f);
            isi += garis(C.cx - ex, C.cy - ey, C.cx + ex, C.cy + ey, { warna: "ungu", tebal: 1, putus: "3 3" });
          }
          isi += poligonLaluan(P, { isi: tak ? "kuningLembut" : "hijauLembut", warna: "tinta", tebal: 2.5 });
          var cp = pusat(P);
          P.forEach(function (p, i) { isi += titik(p) + huruf(p, cp, HURUF[i], 13); });
          isi += baris(0, (tak ? "Poligon tak sekata: " : "Poligon sekata: ") + NAMA[n], tak ? "merah" : "hijau");
          isi += baris(1, tak ? "Sisi dan sudut tidak semua sama" : "Semua sisi sama, sudut sama " + d1(r.pedalaman) + "°", "tinta");
          isi += baris(2, "Paksi simetri: " + (tak ? "tiada" : n), "ungu", true);
          return svg(tinggiInfo(3), isi, "Rajah " + NAMA[n] + (tak ? " tak sekata" : " sekata") + (tak ? " tanpa paksi simetri" : " dengan " + n + " paksi simetri dan setiap sudut " + d1(r.pedalaman) + " darjah"));
        }
        if (c.mod === "bina") {
          var nb = r.n, O = { x: C.cx, y: C.cy }, Rb = C.R;
          isi += '<circle cx="' + O.x + '" cy="' + O.y + '" r="' + Rb + '" fill="none" stroke="' + h.w("garis2") + '" stroke-width="1.5" stroke-dasharray="4 3"></circle>';
          isi += titik(O) + teks(O.x + 6, O.y + 16, "O", { saiz: 12, warna: "tinta", tebal: true });
          P = sekata(nb, C.cx, C.cy, Rb);
          if (s.l >= 1) {
            P.forEach(function (p) { isi += garis(O.x, O.y, p.x, p.y, { warna: "hijau", tebal: 1.5 }); });
            isi += lengkok(O, -90 * D, (-90 + 360 / nb) * D, 22, "merah", "merahLembut");
          }
          if (s.l >= 2) P.forEach(function (p, i) { isi += titik(p) + huruf(p, O, HURUF[i], 13); });
          if (s.l >= 3) isi += poligonLaluan(P, { warna: "tinta", tebal: 2.5 });
          var lang = [
            "Langkah 0: lukis bulatan (pusat O)",
            "Langkah 1: bahagi 360° sama rata",
            "Langkah 2: tanda bucu pada lilitan",
            "Langkah 3: sambung semua bucu"];
          isi += baris(0, lang[s.l], "tinta");
          isi += baris(1, "Sudut pusat = 360° ÷ " + nb + " = " + d1(r.pusat) + "°", "merah", true);
          isi += baris(2, "Jejari sama, maka semua sisi sama", "hijau");
          return svg(tinggiInfo(3), isi, "Rajah membina " + NAMA[nb] + " sekata daripada bulatan; sudut pusat " + d1(r.pusat) + " darjah; langkah " + s.l + " daripada 3");
        }
        if (c.mod === "sudut") {
          var ni = r.n;
          P = sekata(ni, C.cx, C.cy, C.R);
          var cs = pusat(P);
          for (k = 1; k <= ni - 2; k++) {
            var t = [P[0], P[k], P[k + 1]];
            isi += poligonLaluan(t, { isi: k % 2 ? "hijauLembut" : "kuningLembut", warna: "garis2", tebal: 1 });
          }
          for (k = 2; k <= ni - 2; k++) isi += garis(P[0].x, P[0].y, P[k].x, P[k].y, { warna: "hijau", tebal: 1.5 });
          isi += poligonLaluan(P, { warna: "tinta", tebal: 2.5 });
          /* sudut peluaran dan pedalaman di B (indeks 1) */
          var B = P[1], aE = sudutKe(P[0], B);
          var aAB = sudutKe(B, P[0]), aBC = sudutKe(B, P[2]);
          isi += garis(B.x, B.y, B.x + 22 * Math.cos(aE), B.y + 22 * Math.sin(aE), { warna: "merah", tebal: 1.5, putus: "3 2" });
          isi += lengkok(B, aE, aBC, 15, "merah", "merahLembut");
          isi += lengkok(B, aAB, aBC, 12, "hijau");
          P.forEach(function (p, i) { isi += titik(p) + huruf(p, cs, HURUF[i], 13); });
          isi += baris(0, NAMA[ni] + " = " + r.segitiga + " segi tiga", "tinta");
          isi += baris(1, "(" + ni + " − 2) × 180° = " + r.jumlah + "°", "hijau", true);
          isi += baris(2, "Dalam " + d1(r.pedalaman) + "°, luar " + d1(r.peluaran) + "°", "merah", true);
          return svg(tinggiInfo(3), isi, "Rajah " + NAMA[ni] + " sekata dibahagi kepada " + r.segitiga + " segi tiga oleh pepenjuru dari A; jumlah sudut pedalaman " + r.jumlah + " darjah, sudut pedalaman " + d1(r.pedalaman) + " darjah dan sudut peluaran " + d1(r.peluaran) + " darjah");
        }
        if (c.mod === "peluaran") {
          var np = r.n, kk = r.kumpul;
          P = sekata(np, C.cx, C.cy, 62);
          var cq = pusat(P);
          isi += poligonLaluan(P, { isi: "hijauLembut", warna: "tinta", tebal: 2.5 });
          P.forEach(function (p, i) {
            var pr = P[(i + np - 1) % np], nx = P[(i + 1) % np], aa = sudutKe(pr, p), ab = sudutKe(p, nx), on = i < kk;
            isi += garis(p.x, p.y, p.x + 20 * Math.cos(aa), p.y + 20 * Math.sin(aa), { warna: on ? "merah" : "garis2", tebal: 1.5, putus: "3 2" });
            isi += lengkok(p, aa, ab, 13, on ? "merah" : "garis2", on ? "merahLembut" : null);
            isi += titik(p);
          });
          /* palang: sudut peluaran yang dikumpul disusun membentuk satu pusingan (360) */
          var bx = 20, bl = 220, by = 168, bh = 14, wseg = bl / np;
          for (k = 0; k < np; k++) {
            isi += '<rect x="' + b1(bx + k * wseg) + '" y="' + by + '" width="' + b1(wseg) + '" height="' + bh + '" fill="' + (k < kk ? h.w(k % 2 ? "kuningLembut" : "merahLembut") : "none") + '" stroke="' + h.w(k < kk ? "merah" : "garis2") + '" stroke-width="1.2"></rect>';
          }
          isi += baris(0, "Sudut peluaran = 360° ÷ " + np + " = " + d1(r.peluaran) + "°", "tinta", true);
          isi += baris(1, kk + " × " + d1(r.peluaran) + "° = " + d1(r.jumlahKumpul) + "°", "merah", true);
          isi += baris(2, kk === np ? "Lengkap: satu pusingan penuh" : "Kumpul semua " + np + " sudut peluaran", "hijau", true);
          return svg(tinggiInfo(3), isi, "Rajah " + NAMA[np] + " sekata dengan sudut peluaran setiap bucu " + d1(r.peluaran) + " darjah; " + kk + " sudut dikumpul berjumlah " + d1(r.jumlahKumpul) + " darjah; semua " + np + " sudut berjumlah 360 darjah");
        }
        if (c.mod === "cari") {
          var nc = r.n;
          P = sekata(nc, C.cx, C.cy, C.R);
          var cc = pusat(P);
          isi += poligonLaluan(P, { isi: "hijauLembut", warna: "tinta", tebal: 2.5 });
          var Bc = P[1], aEc = sudutKe(P[0], Bc), aBCc = sudutKe(Bc, P[2]);
          isi += garis(Bc.x, Bc.y, Bc.x + 24 * Math.cos(aEc), Bc.y + 24 * Math.sin(aEc), { warna: "merah", tebal: 1.5, putus: "3 2" });
          isi += lengkok(Bc, aEc, aBCc, 16, "merah", "merahLembut");
          P.forEach(function (p) { isi += titik(p); });
          isi += teks(Bc.x + 30, Bc.y - 4, r.peluaran + "°", { saiz: 12, warna: "merah", tebal: true });
          isi += baris(0, "Sudut peluaran = " + r.peluaran + "°", "merah");
          isi += baris(1, "n = 360° ÷ " + r.peluaran + "° = " + r.n, "tinta", true);
          isi += baris(2, "Sudut dalam = 180° − " + r.peluaran + "° = " + r.pedalaman + "°", "hijau", true);
          return svg(tinggiInfo(3), isi, "Rajah poligon sekata dengan sudut peluaran " + r.peluaran + " darjah; bilangan sisi " + r.n + " dan sudut pedalaman " + r.pedalaman + " darjah");
        }
        /* hilang */
        var H = HILANG[s.i], sol = daripadaSudut(H.a, H.l);
        if (!sol.ok) throw new Error("poligon hilang " + s.i + " tidak tertutup dengan panjang positif");
        P = muat(sol.V, 46, 24, 214, 170);
        var ch = pusat(P), nh = H.a.length;
        isi += poligonLaluan(P, { isi: "kuningLembut", warna: "tinta", tebal: 2.5 });
        P.forEach(function (p, i) {
          isi += titik(p);
          var dx = ch.x - p.x, dy = ch.y - p.y, m = Math.hypot(dx, dy), lx = p.x + dx / m * 24, ly = p.y + dy / m * 24 + 4;
          if (i === H.u) isi += teks(lx, ly, "x", { tengah: true, saiz: 13, warna: "merah", tebal: true });
          else isi += teks(lx, ly, H.a[i] + "°", { tengah: true, saiz: 11, warna: "tinta", tebal: true });
        });
        isi += baris(0, NAMA[nh] + ": jumlah = " + r.jumlah + "°", "tinta", true);
        isi += baris(1, "Diketahui: " + r.tahu + "°", "tinta");
        isi += baris(2, "x = " + r.jumlah + "° − " + r.tahu + "° = " + r.x + "°", "merah", true);
        return svg(tinggiInfo(3), isi, "Rajah " + NAMA[nh] + " tak sekata dengan satu sudut pedalaman x yang hilang; jumlah sudut pedalaman " + r.jumlah + " darjah");
      }
    };
    W.t2poligon.HILANG = HILANG;
    W.t2poligon.daripadaSudut = daripadaSudut;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = daftar;
  else if (typeof window !== "undefined" && window.JMI) daftar(window.JMI);
})();
