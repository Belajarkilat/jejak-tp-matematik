/* Widget Bab 6 Sudut dan Tangen bagi Bulatan: satu widget "bulatan" dengan enam mod.

   lilitan  sudut pusat dan sudut pada lilitan yang dicangkum oleh lengkok AB (P bergerak, Q tetap)
   kitaran  sisi empat kitaran ABCD (D bergerak), sudut bertentangan berjumlah 180
   tangen1  jejari ialah serenjang dengan tangen pada titik ketangenan T (T bergerak)
   tangen2  dua tangen dari titik luar P (jarak OP berubah), PA = PB
   selang   sudut antara tangen dengan perentas = sudut dalam tembereng selang-seli (Q bergerak)

   Semua sudut dan panjang dikira daripada koordinat bulatan unit (bukan ditaip
   tangan). Fail ini didaftarkan oleh interaktif.js (Node dan pelayar). */
(function () {
  "use strict";
  function daftar(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, garis = h.garis, laluan = h.laluan, svg = h.svg, nomK = h.nomK, b1 = h.b1;
    var D = Math.PI / 180;

    function bulat1(x) { return Math.round(x * 10) / 10; }
    function unit(a) { return { x: Math.cos(a * D), y: Math.sin(a * D) }; }             /* bulatan unit, y ke atas */
    function sudutDi(V, X, Y) {
      var ax = X.x - V.x, ay = X.y - V.y, bx = Y.x - V.x, by = Y.y - V.y;
      var d = (ax * bx + ay * by) / (Math.hypot(ax, ay) * Math.hypot(bx, by));
      return bulat1(Math.acos(Math.max(-1, Math.min(1, d))) / D);
    }
    function skrin(cx, cy, R, p) { return { x: cx + R * p.x, y: cy - R * p.y }; }       /* unit -> piksel */

    /* ---------- pembantu lukisan ---------- */
    function bulatanSvg(cx, cy, r) {
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + h.w("garis2") + '" stroke-width="1.6"></circle>';
    }
    function titikSvg(p, warna) {
      return '<circle cx="' + b1(p.x) + '" cy="' + b1(p.y) + '" r="3" fill="' + h.w(warna || "tinta") + '" stroke="none"></circle>';
    }
    function label(p, pusat, t, jarak) {
      var dx = p.x - pusat.x, dy = p.y - pusat.y, n = Math.hypot(dx, dy) || 1;
      return teks(p.x + dx / n * jarak, p.y + dy / n * jarak + 4, t, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
    }
    function busur(V, X, Y, r, warna) {
      var a1 = Math.atan2(X.y - V.y, X.x - V.x), a2 = Math.atan2(Y.y - V.y, Y.x - V.x), dl = a2 - a1;
      while (dl > Math.PI) dl -= 2 * Math.PI;
      while (dl < -Math.PI) dl += 2 * Math.PI;
      var p1 = { x: V.x + r * Math.cos(a1), y: V.y + r * Math.sin(a1) }, p2 = { x: V.x + r * Math.cos(a2), y: V.y + r * Math.sin(a2) };
      return laluan("M" + b1(p1.x) + " " + b1(p1.y) + " A" + r + " " + r + " 0 0 " + (dl > 0 ? 1 : 0) + " " + b1(p2.x) + " " + b1(p2.y), { warna: warna, tebal: 2.6 });
    }
    function tegak(V, X, Y, s) {
      var ax = X.x - V.x, ay = X.y - V.y, an = Math.hypot(ax, ay), bx = Y.x - V.x, by = Y.y - V.y, bn = Math.hypot(bx, by);
      var u = { x: ax / an * s, y: ay / an * s }, v = { x: bx / bn * s, y: by / bn * s };
      return laluan("M" + b1(V.x + u.x) + " " + b1(V.y + u.y) + " L" + b1(V.x + u.x + v.x) + " " + b1(V.y + u.y + v.y) + " L" + b1(V.x + v.x) + " " + b1(V.y + v.y), { warna: "tinta3", tebal: 1.4 });
    }
    /* sudut: tegak jika 90, jika tidak busur berwarna */
    function tanda(V, X, Y, nilai, r, warna) {
      return Math.abs(nilai - 90) < 0.05 ? tegak(V, X, Y, 9) : busur(V, X, Y, r, warna);
    }
    function baris(y, t, warna, hasil) { return teks(8, y, t, { saiz: 12, warna: warna, tebal: true, hasil: hasil }); }

    var CX = 130, CY = 100, R = 62;

    W.bulatan = {
      mula: function (c) { return { i: c.i == null ? 0 : c.i }; },
      kawalan: function (c) {
        var mod = c.mod, n = (c.pos || c.jarak).length, nama =
          mod === "lilitan" ? "kedudukan P" : mod === "kitaran" ? "kedudukan D" : mod === "tangen1" ? "kedudukan T" :
          mod === "tangen2" ? "jarak OP" : "kedudukan Q";
        var t = [];
        for (var i = 0; i < n; i++) t.push(mod === "tangen2" ? nomK(c.jarak[i]) + " cm" : String(i + 1));
        return [{ k: "i", label: nama, min: 0, maks: n - 1, teks: t }];
      },

      /* Nilai dikira daripada koordinat bulatan unit. */
      kira: function (c, s) {
        var mod = c.mod, o = { x: 0, y: 0 }, i;
        if (mod === "lilitan" || mod === "selang") {
          var L = c.lengkok, t = c.pos[s.i], a0 = 270 - L / 2, b0 = 270 + L / 2;
          if (mod === "lilitan") {
            var A = unit(a0), B = unit(b0), P = unit(b0 + t), Q = unit(b0 + c.q);
            return { pusat: sudutDi(o, A, B), P: sudutDi(P, A, B), Q: sudutDi(Q, A, B) };
          }
          var T = unit(270), A2 = unit(270 + L), Q2 = unit(270 + L + t);
          return { pusat: sudutDi(o, T, A2), tangenPerentas: sudutDi(T, { x: T.x + 1, y: T.y }, A2), selang: sudutDi(Q2, T, A2) };
        }
        if (mod === "kitaran") {
          var pa = unit(c.a), pb = unit(c.b), pc = unit(c.c), pd = unit(c.pos[s.i]);
          var ka = sudutDi(pa, pd, pb), kb = sudutDi(pb, pa, pc), kc = sudutDi(pc, pb, pd), kd = sudutDi(pd, pc, pa);
          return { A: ka, B: kb, C: kc, D: kd, jumlahAC: bulat1(ka + kc), jumlahBD: bulat1(kb + kd) };
        }
        if (mod === "tangen1") {
          var r = c.jejari, tl = c.tl;
          return { OT: r, TP: tl, OP: bulat1(Math.hypot(r, tl) * 100) / 100, OTP: 90, TOP: bulat1(Math.atan2(tl, r) / D) };
        }
        /* tangen2 */
        var r2 = c.jejari, d = c.jarak[s.i], pa2 = Math.sqrt(d * d - r2 * r2), apb = 2 * Math.asin(r2 / d) / D;
        return { OP: d, PA: Math.round(pa2 * 100) / 100, APB: bulat1(apb), AOB: bulat1(180 - apb) };
      },

      lukis: function (c, s) {
        var mod = c.mod, r = this.kira(c, s), isi = "", alt;
        var O = { x: CX, y: CY };

        if (mod === "lilitan") {
          var L = c.lengkok, t = c.pos[s.i], a0 = 270 - L / 2, b0 = 270 + L / 2;
          var pA = skrin(CX, CY, R, unit(a0)), pB = skrin(CX, CY, R, unit(b0)), pP = skrin(CX, CY, R, unit(b0 + t)), pQ = skrin(CX, CY, R, unit(b0 + c.q));
          isi += bulatanSvg(CX, CY, R);
          isi += garis(pA.x, pA.y, pB.x, pB.y, { warna: "garis2", tebal: 1.2 });
          isi += garis(O.x, O.y, pA.x, pA.y, { warna: "ungu", tebal: 2 }) + garis(O.x, O.y, pB.x, pB.y, { warna: "ungu", tebal: 2 });
          isi += garis(pP.x, pP.y, pA.x, pA.y, { warna: "hijau", tebal: 2 }) + garis(pP.x, pP.y, pB.x, pB.y, { warna: "hijau", tebal: 2 });
          isi += garis(pQ.x, pQ.y, pA.x, pA.y, { warna: "merah", tebal: 1.4, putus: "4 3" }) + garis(pQ.x, pQ.y, pB.x, pB.y, { warna: "merah", tebal: 1.4, putus: "4 3" });
          isi += tanda(O, pA, pB, r.pusat, 15, "ungu") + tanda(pP, pA, pB, r.P, 16, "hijau") + tanda(pQ, pA, pB, r.Q, 14, "merah");
          isi += titikSvg(O, "ungu") + titikSvg(pA) + titikSvg(pB) + titikSvg(pP, "hijau") + titikSvg(pQ, "merah");
          isi += teks(O.x - 10, O.y - 6, "O", { tengah: true, saiz: 12, tebal: true, warna: "tinta" });
          isi += label(pA, O, "A", 11) + label(pB, O, "B", 11) + label(pP, O, "P", 11) + label(pQ, O, "Q", 11);
          isi += baris(196, "∠AOB (pusat) = " + nomK(r.pusat) + "°", "ungu", true);
          isi += baris(212, "∠APB (lilitan) = " + nomK(r.P) + "°", "hijau", true);
          isi += baris(228, "∠AQB (lilitan) = " + nomK(r.Q) + "°", "merah", true);
          alt = "Rajah bulatan berpusat O dengan lengkok AB; sudut pusat AOB ialah " + nomK(r.pusat) + " darjah dan sudut pada lilitan di P dan Q ialah " + nomK(r.P) + " darjah";
        }

        else if (mod === "kitaran") {
          var pts = { A: skrin(CX, CY, R, unit(c.a)), B: skrin(CX, CY, R, unit(c.b)), C: skrin(CX, CY, R, unit(c.c)), D: skrin(CX, CY, R, unit(c.pos[s.i])) };
          isi += bulatanSvg(CX, CY, R);
          [["A", "B"], ["B", "C"], ["C", "D"], ["D", "A"]].forEach(function (p) {
            isi += garis(pts[p[0]].x, pts[p[0]].y, pts[p[1]].x, pts[p[1]].y, { warna: "tinta2", tebal: 2 });
          });
          isi += tanda(pts.A, pts.D, pts.B, r.A, 15, "hijau") + tanda(pts.C, pts.B, pts.D, r.C, 15, "hijau");
          isi += tanda(pts.B, pts.A, pts.C, r.B, 15, "merah") + tanda(pts.D, pts.C, pts.A, r.D, 15, "merah");
          ["A", "B", "C", "D"].forEach(function (k) { isi += titikSvg(pts[k]); isi += label(pts[k], O, k, 11); });
          isi += baris(196, "∠A + ∠C = " + nomK(r.A) + "° + " + nomK(r.C) + "° = " + nomK(r.jumlahAC) + "°", "hijau", true);
          isi += baris(212, "∠B + ∠D = " + nomK(r.B) + "° + " + nomK(r.D) + "° = " + nomK(r.jumlahBD) + "°", "merah", true);
          alt = "Rajah sisi empat kitaran ABCD dalam bulatan; sudut A dan C berjumlah " + nomK(r.jumlahAC) + " darjah, sudut B dan D berjumlah " + nomK(r.jumlahBD) + " darjah";
        }

        else if (mod === "tangen1") {
          var rr = c.jejari, tl = c.tl, k = Math.min(45 / rr, 60 / Math.hypot(rr, tl)), Rp = rr * k, tlp = tl * k;
          var ang = c.pos[s.i], th = ang * D, pT = { x: CX + Rp * Math.cos(th), y: CY - Rp * Math.sin(th) };
          var dir = { x: -Math.sin(th), y: -Math.cos(th) };
          var pP1 = { x: pT.x + tlp * dir.x, y: pT.y + tlp * dir.y };
          var mula = { x: pT.x - 32 * dir.x, y: pT.y - 32 * dir.y }, tamat = { x: pP1.x + 8 * dir.x, y: pP1.y + 8 * dir.y };
          isi += bulatanSvg(CX, CY, Rp);
          isi += garis(mula.x, mula.y, tamat.x, tamat.y, { warna: "hijau", tebal: 2.4 });
          isi += garis(O.x, O.y, pT.x, pT.y, { warna: "ungu", tebal: 2.2 });
          isi += garis(O.x, O.y, pP1.x, pP1.y, { warna: "garis2", tebal: 1.4, putus: "4 3" });
          isi += tegak(pT, O, pP1, 9) + busur(O, pT, pP1, 16, "merah");
          isi += titikSvg(O, "ungu") + titikSvg(pT, "hijau") + titikSvg(pP1, "hijau");
          isi += label(O, pT, "O", 12) + label(pT, O, "T", 11);
          isi += label(pP1, { x: pT.x, y: pT.y }, "P", 11);
          isi += baris(196, "OT = " + nomK(r.OT) + " cm (jejari)   TP = " + nomK(r.TP) + " cm", "tinta", false);
          isi += baris(212, "∠OTP = " + r.OTP + "°   OP = " + nomK(r.OP) + " cm", "hijau", true);
          isi += baris(228, "∠TOP = " + nomK(r.TOP) + "°", "merah", true);
          alt = "Rajah bulatan berpusat O dengan tangen di titik T; jejari OT serenjang dengan tangen TP, iaitu sudut " + r.OTP + " darjah, dan OP ialah " + nomK(r.OP) + " sentimeter";
        }

        else if (mod === "tangen2") {
          var rj = c.jejari, dMaks = Math.max.apply(null, c.jarak), kk = Math.min(60 / rj, 130 / dMaks), Rj = rj * kk, ox = 70;
          var Oo = { x: ox, y: CY }, d = c.jarak[s.i], pP2 = { x: ox + d * kk, y: CY };
          var phi = Math.acos(rj / d), pA2 = { x: ox + Rj * Math.cos(phi), y: CY - Rj * Math.sin(phi) }, pB2 = { x: ox + Rj * Math.cos(phi), y: CY + Rj * Math.sin(phi) };
          isi += bulatanSvg(ox, CY, Rj);
          isi += garis(pP2.x, pP2.y, pA2.x, pA2.y, { warna: "hijau", tebal: 2.4 }) + garis(pP2.x, pP2.y, pB2.x, pB2.y, { warna: "hijau", tebal: 2.4 });
          isi += garis(Oo.x, Oo.y, pA2.x, pA2.y, { warna: "ungu", tebal: 2 }) + garis(Oo.x, Oo.y, pB2.x, pB2.y, { warna: "ungu", tebal: 2 });
          isi += garis(Oo.x, Oo.y, pP2.x, pP2.y, { warna: "garis2", tebal: 1.4, putus: "4 3" });
          isi += tegak(pA2, Oo, pP2, 8) + tegak(pB2, Oo, pP2, 8);
          isi += tanda(pP2, pA2, pB2, r.APB, 22, "merah");
          isi += tanda(Oo, pA2, pB2, r.AOB, 14, "ungu");
          isi += titikSvg(Oo, "ungu") + titikSvg(pA2) + titikSvg(pB2) + titikSvg(pP2, "hijau");
          isi += teks(Oo.x - 10, Oo.y + 4, "O", { tengah: true, saiz: 12, tebal: true, warna: "tinta" });
          isi += label(pA2, Oo, "A", 11) + label(pB2, Oo, "B", 11);
          isi += teks(pP2.x + 6, pP2.y + 16, "P", { saiz: 12, tebal: true, warna: "tinta" });
          isi += baris(196, "OP = " + nomK(r.OP) + " cm   OA = " + nomK(rj) + " cm", "tinta", false);
          isi += baris(212, "PA = PB = " + nomK(r.PA) + " cm", "hijau", true);
          isi += baris(228, "∠APB = " + nomK(r.APB) + "°   ∠AOB = " + nomK(r.AOB) + "°", "merah", true);
          alt = "Rajah dua tangen PA dan PB dari titik P ke bulatan berpusat O; PA dan PB sama panjang, iaitu " + nomK(r.PA) + " sentimeter, dan sudut APB ialah " + nomK(r.APB) + " darjah";
        }

        else { /* selang */
          var Ls = c.lengkok, ts = c.pos[s.i];
          var sT = skrin(CX, CY, R, unit(270)), sA = skrin(CX, CY, R, unit(270 + Ls)), sQ = skrin(CX, CY, R, unit(270 + Ls + ts));
          var kanan = { x: sT.x + 34, y: sT.y }, kiri = { x: sT.x - 60, y: sT.y };
          isi += bulatanSvg(CX, CY, R);
          isi += garis(kiri.x, kiri.y, sT.x + 70, sT.y, { warna: "tinta2", tebal: 2 });
          isi += garis(sT.x, sT.y, sA.x, sA.y, { warna: "hijau", tebal: 2.4 });
          isi += garis(sQ.x, sQ.y, sT.x, sT.y, { warna: "merah", tebal: 1.6, putus: "4 3" }) + garis(sQ.x, sQ.y, sA.x, sA.y, { warna: "merah", tebal: 1.6, putus: "4 3" });
          isi += garis(O.x, O.y, sT.x, sT.y, { warna: "ungu", tebal: 1.4, putus: "2 3" }) + garis(O.x, O.y, sA.x, sA.y, { warna: "ungu", tebal: 1.4, putus: "2 3" });
          isi += busur(sT, kanan, sA, 22, "hijau") + busur(sQ, sT, sA, 14, "merah") + busur(O, sT, sA, 14, "ungu");
          isi += titikSvg(O, "ungu") + titikSvg(sT) + titikSvg(sA) + titikSvg(sQ, "merah");
          isi += teks(O.x - 10, O.y - 4, "O", { tengah: true, saiz: 12, tebal: true, warna: "tinta" });
          isi += teks(sT.x - 4, sT.y + 18, "T", { tengah: true, saiz: 12, tebal: true, warna: "tinta" });
          isi += label(sA, O, "A", 11) + label(sQ, O, "Q", 11);
          isi += baris(196, "∠tangen–perentas = " + nomK(r.tangenPerentas) + "°", "hijau", true);
          isi += baris(212, "∠TQA (selang-seli) = " + nomK(r.selang) + "°", "merah", true);
          isi += baris(228, "∠TOA (pusat) = " + nomK(r.pusat) + "°", "ungu", true);
          alt = "Rajah tangen di titik T dan perentas TA; sudut antara tangen dan perentas ialah " + nomK(r.tangenPerentas) + " darjah, sama dengan sudut dalam tembereng selang-seli di Q";
        }
        return svg(240, isi, alt);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = daftar;
  else if (typeof window !== "undefined" && window.JMI) daftar(window.JMI);
})();
