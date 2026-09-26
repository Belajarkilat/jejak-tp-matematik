/* Widget Tingkatan 2 Bab 5: Bulatan.
   Satu widget `t2bulat` dengan enam mod (spec.mod):
   - bahagian : gelongsor memilih bahagian bulatan (jejari, diameter, perentas, lilitan,
                lengkok, sektor, tembereng) dan bahagian itu diserlahkan
   - simetri  : gelongsor jarak perentas dari pusat. Jejari serenjang membahagi dua sama
                perentas, dan perentas kedua pada jarak sama mempunyai panjang sama
   - lilluas  : gelongsor jejari. Lilitan ialah 3 diameter + sedikit, luas ialah 3 petak
                j x j + sedikit, dan nilai lilitan dan luas dikira
   - sektor   : gelongsor sudut (dan jejari, jika spec.rlist ada), panjang lengkok,
                luas dan perimeter sektor dikira
   - trek     : gelongsor panjang lurus L, dua separuh bulatan pada hujung, perimeter dan luas
   - cincin   : gelongsor jejari luar R dan jejari dalam r, luas cincin = pi(R^2 - r^2)
   Nilai pi ialah 22/7 (spec.pi untuk nilai lain). Semua nombor dikira daripada formula.
   Fail ini didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js;
   pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, garis = h.garis, b1 = h.b1, nomK = h.nomK;
    var DEG = Math.PI / 180;

    function pt(cx, cy, R, a) { return [cx + R * Math.cos(a * DEG), cy - R * Math.sin(a * DEG)]; }
    function XY(p) { return b1(p[0]) + " " + b1(p[1]); }
    function bulat(cx, cy, r, o) {
      o = o || {};
      return '<circle cx="' + b1(cx) + '" cy="' + b1(cy) + '" r="' + b1(r) + '" fill="' + (o.isi ? h.w(o.isi) : "none") +
        '" stroke="' + h.w(o.garis || "garis2") + '" stroke-width="' + (o.tebal || 1.6) + '"' +
        (o.putus ? ' stroke-dasharray="' + o.putus + '"' : "") + "></circle>";
    }
    function hasilG(isi) { return '<g class="jmi-hasil">' + isi + "</g>"; }
    function gcd(a, b) { return b ? gcd(b, a % b) : a; }
    function idx(a, v, lalai) { var n = a.indexOf(v); return n < 0 ? lalai : n; }
    function senarai(c, kunci, lalai) { return (c[kunci] && c[kunci].length) ? c[kunci] : lalai; }
    function teksNilai(a, akhir) { return a.map(function (x) { return String(x) + (akhir || ""); }); }
    function baris(y, t, o) {
      o = o || {};
      return teks(o.x == null ? 130 : o.x, y, t, { saiz: o.saiz || 12, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil, tengah: o.x == null });
    }
    function ung(y, segs, o) {
      o = o || {};
      return h.ungkap(130, y, segs, { saiz: o.saiz || 12, warna: o.warna || "tinta", tebal: o.tebal !== false, hasil: o.hasil });
    }
    function piNilai(c) { return c.pi || 22 / 7; }

    var BAHAGIAN = [
      { n: "Jejari", d: "Garis dari pusat ke lilitan" },
      { n: "Diameter", d: "Melalui pusat, hujung di lilitan" },
      { n: "Perentas", d: "Menyambung dua titik pada lilitan" },
      { n: "Lilitan", d: "Panjang sekeliling bulatan" },
      { n: "Lengkok", d: "Sebahagian daripada lilitan" },
      { n: "Sektor", d: "Kawasan antara dua jejari" },
      { n: "Tembereng", d: "Kawasan antara perentas dan lengkok" }
    ];
    var TINGGI = { bahagian: 216, simetri: 250, lilluas: 250, sektor: 252, trek: 190, cincin: 226 };
    var SUDUT_LALAI = [30, 45, 60, 72, 90, 120, 135, 150, 180, 210, 240, 270, 300];

    W.t2bulat = {
      mula: function (c) {
        var m = c.mod, a;
        if (m === "bahagian") return { i: c.i == null ? 0 : c.i };
        if (m === "simetri") return { i: c.i == null ? idx(senarai(c, "dlist", [0, 1, 2, 3, 4]), 3, 0) : c.i };
        if (m === "lilluas") return { i: c.i == null ? idx(senarai(c, "nilai", [3.5, 7, 10.5, 14, 21]), 7, 0) : c.i };
        if (m === "sektor") {
          return {
            i: c.i == null ? idx(senarai(c, "sudut", SUDUT_LALAI), 90, 0) : c.i,
            j: c.j == null ? (c.rlist ? idx(c.rlist, c.r || c.rlist[0], 0) : 0) : c.j
          };
        }
        if (m === "trek") return { i: c.i == null ? idx(senarai(c, "L", [0, 7, 14, 21, 28]), 14, 0) : c.i };
        if (m === "cincin") return { b: c.b == null ? idx(senarai(c, "R", [10.5, 14, 21]), 14, 0) : c.b, k: c.k == null ? idx(senarai(c, "rk", [3.5, 7]), 7, 0) : c.k };
        throw new Error("mod t2bulat tidak dikenali: " + m);
      },
      kawalan: function (c) {
        var m = c.mod, a;
        if (m === "bahagian") return [{ k: "i", label: "bahagian", min: 0, maks: BAHAGIAN.length - 1, teks: BAHAGIAN.map(function (x) { return x.n; }) }];
        if (m === "simetri") { a = senarai(c, "dlist", [0, 1, 2, 3, 4]); return [{ k: "i", label: "jarak d", min: 0, maks: a.length - 1, teks: teksNilai(a, " " + (c.unit || "cm")) }]; }
        if (m === "lilluas") { a = senarai(c, "nilai", [3.5, 7, 10.5, 14, 21]); return [{ k: "i", label: "jejari", min: 0, maks: a.length - 1, teks: teksNilai(a, " " + (c.unit || "cm")) }]; }
        if (m === "sektor") {
          a = senarai(c, "sudut", SUDUT_LALAI);
          var kw = [{ k: "i", label: "sudut", min: 0, maks: a.length - 1, teks: teksNilai(a, "°") }];
          if (c.rlist) kw.push({ k: "j", label: "jejari", min: 0, maks: c.rlist.length - 1, teks: teksNilai(c.rlist, " " + (c.unit || "cm")) });
          return kw;
        }
        if (m === "trek") { a = senarai(c, "L", [0, 7, 14, 21, 28]); return [{ k: "i", label: "L", min: 0, maks: a.length - 1, teks: teksNilai(a, " " + (c.unit || "m")) }]; }
        var Rs = senarai(c, "R", [10.5, 14, 21]), rs = senarai(c, "rk", [3.5, 7]);
        return [
          { k: "b", label: "R", min: 0, maks: Rs.length - 1, teks: teksNilai(Rs, " " + (c.unit || "cm")) },
          { k: "k", label: "r", min: 0, maks: rs.length - 1, teks: teksNilai(rs, " " + (c.unit || "cm")) }
        ];
      },
      kira: function (c, s) {
        var m = c.mod, PI = piNilai(c), a, r;
        if (m === "bahagian") return { nama: BAHAGIAN[s.i].n };
        if (m === "simetri") {
          var rr = c.r || 5, d = senarai(c, "dlist", [0, 1, 2, 3, 4])[s.i], half = Math.sqrt(rr * rr - d * d);
          return { r: rr, d: d, separuh: half, perentas: 2 * half };
        }
        if (m === "lilluas") {
          r = senarai(c, "nilai", [3.5, 7, 10.5, 14, 21])[s.i];
          return { r: r, d: 2 * r, lilitan: 2 * PI * r, luas: PI * r * r };
        }
        if (m === "sektor") {
          var th = senarai(c, "sudut", SUDUT_LALAI)[s.i], rj = c.rlist ? c.rlist[s.j] : (c.r || 7), f = th / 360;
          var g = gcd(th, 360);
          return { th: th, r: rj, pn: th / g, pd: 360 / g, lengkok: f * 2 * PI * rj, luas: f * PI * rj * rj, perimeter: f * 2 * PI * rj + 2 * rj };
        }
        if (m === "trek") {
          r = c.r || 7; var L = senarai(c, "L", [0, 7, 14, 21, 28])[s.i];
          return { r: r, L: L, perimeter: 2 * PI * r + 2 * L, luas: PI * r * r + 2 * r * L };
        }
        var R = senarai(c, "R", [10.5, 14, 21])[s.b], rk = senarai(c, "rk", [3.5, 7])[s.k];
        return { R: R, r: rk, luas: PI * (R * R - rk * rk) };
      },
      lukis: function (c, s) {
        var m = c.mod, r = this.kira(c, s), o = "", u = c.unit || "cm", alt, i;
        var cx = 130, cy, R, PI = piNilai(c);

        /* ---------- bahagian ---------- */
        if (m === "bahagian") {
          cy = 88; R = 64;
          o += bulat(cx, cy, R, { isi: "kertas2", garis: "tinta3", tebal: 1.6 });
          var b = s.i;
          if (b === 0) { var p = pt(cx, cy, R, 60); o += garis(cx, cy, p[0], p[1], { warna: "merah", tebal: 3.2 }); }
          if (b === 1) { o += garis(cx - R, cy, cx + R, cy, { warna: "ungu", tebal: 3.2 }); }
          if (b === 2) { var a1 = pt(cx, cy, R, 140), a2 = pt(cx, cy, R, 40); o += garis(a1[0], a1[1], a2[0], a2[1], { warna: "hijau", tebal: 3.2 }); }
          if (b === 3) { o += bulat(cx, cy, R, { garis: "merah", tebal: 4.5 }); }
          if (b === 4) { o += h.laluan("M" + XY(pt(cx, cy, R, 20)) + "A" + R + " " + R + " 0 0 0 " + XY(pt(cx, cy, R, 110)), { warna: "ungu", tebal: 4.5 }); }
          if (b === 5) { o += h.laluan("M" + XY([cx, cy]) + "L" + XY(pt(cx, cy, R, 20)) + "A" + R + " " + R + " 0 0 0 " + XY(pt(cx, cy, R, 110)) + "Z", { isi: "kuningLembut", warna: "kuning", tebal: 2.6 }); }
          if (b === 6) { o += h.laluan("M" + XY(pt(cx, cy, R, 215)) + "A" + R + " " + R + " 0 0 0 " + XY(pt(cx, cy, R, 325)) + "Z", { isi: "hijauLembut", warna: "hijau", tebal: 2.6 }); }
          o += bulat(cx, cy, 2.8, { isi: "tinta", garis: "tinta", tebal: 1 });
          o += teks(cx + 7, cy + 16, "O", { saiz: 12, warna: "tinta", tebal: true });
          o += baris(182, BAHAGIAN[b].n, { saiz: 14, tebal: true });
          o += baris(202, BAHAGIAN[b].d, { saiz: 12, warna: "tinta2" });
          alt = "Rajah bulatan dengan bahagian " + BAHAGIAN[b].n.toLowerCase() + " diserlahkan";
          return h.svg(TINGGI.bahagian, o, alt);
        }

        /* ---------- simetri ---------- */
        if (m === "simetri") {
          cy = 96; R = 70;
          var k = R / r.r, dp = r.d * k, hx = Math.sqrt(R * R - dp * dp), yA = cy - dp;
          o += bulat(cx, cy, R, { isi: "kertas2", garis: "tinta3", tebal: 1.8 });
          if (r.d > 0) {
            o += garis(cx - hx, cy + dp, cx + hx, cy + dp, { warna: "ungu", tebal: 2.2, putus: "5 3" });
            o += garis(cx, cy, cx, cy + dp, { warna: "ungu", tebal: 1.4, putus: "3 3" });
            o += garis(cx, cy, cx, yA, { warna: "hijau", tebal: 2.4 });
            if (dp >= 10) o += h.kotak(cx, yA, 7, 7, { garis: "tinta", tebal: 1, bulat: 0 });
          }
          o += garis(cx, cy, cx - hx, yA, { warna: "tinta3", tebal: 1.4, putus: "4 3" });
          o += garis(cx - hx, yA, cx + hx, yA, { warna: "merah", tebal: 2.8 });
          o += bulat(cx - hx, yA, 2.8, { isi: "merah", garis: "merah", tebal: 1 }) + bulat(cx + hx, yA, 2.8, { isi: "merah", garis: "merah", tebal: 1 });
          o += bulat(cx, cy, 2.8, { isi: "tinta", garis: "tinta", tebal: 1 });
          o += teks(cx - hx - 14, yA + 4, "A", { saiz: 12, warna: "merah", tebal: true }) + teks(cx + hx + 6, yA + 4, "B", { saiz: 12, warna: "merah", tebal: true });
          if (r.d > 0) {
            o += dp >= 50 ? teks(cx + 10, yA + 15, "M", { saiz: 12, warna: "hijau", tebal: true }) : teks(cx + 5, yA - 6, "M", { saiz: 12, warna: "hijau", tebal: true });
            o += teks(cx + 8, cy + 4, "O", { saiz: 12, warna: "tinta", tebal: true });
            if (dp >= 22) o += teks(cx - 14, cy - dp / 2 + 4, "d", { saiz: 12, warna: "hijau", tebal: true });
          } else {
            o += teks(cx + 8, cy + 16, "O", { saiz: 12, warna: "tinta", tebal: true });
          }
          o += baris(190, "j = " + nomK(r.r) + " " + u + "    d = " + nomK(r.d) + " " + u);
          o += r.d === 0
            ? baris(206, "Diameter = 2 × j = " + nomK(2 * r.r) + " " + u, { warna: "merah", tebal: true, hasil: true })
            : baris(206, "AM = √(" + nomK(r.r * r.r) + " − " + nomK(r.d * r.d) + ") = " + nomK(r.separuh) + " " + u, { warna: "merah", tebal: true, hasil: true });
          o += r.d === 0
            ? baris(222, "Diameter ialah perentas terpanjang", { warna: "ungu", tebal: true, hasil: true })
            : baris(222, "AB = 2 × AM = " + nomK(r.perentas) + " " + u, { warna: "ungu", tebal: true, hasil: true });
          if (r.d > 0) o += baris(238, "Perentas ungu sama jarak, sama panjang", { saiz: 11, warna: "tinta2", hasil: true });
          alt = "Rajah bulatan berjejari " + nomK(r.r) + " " + u + " dengan perentas AB berjarak " + nomK(r.d) + " " + u + " dari pusat, separuh perentas " + nomK(r.separuh) + " " + u;
          return h.svg(TINGGI.simetri, o, alt);
        }

        /* ---------- lilluas ---------- */
        if (m === "lilluas") {
          var Rp = 30, ccy = 40, dpx = 2 * Rp;
          o += bulat(cx, ccy, Rp, { isi: "kertas2", garis: "tinta3", tebal: 1.6 });
          o += garis(cx - Rp, ccy, cx + Rp, ccy, { warna: "ungu", tebal: 2.6 });
          o += teks(cx, ccy - 5, "d", { tengah: true, saiz: 12, warna: "ungu", tebal: true });
          var pecah = (PI - 3), bw = 3 * dpx + pecah * dpx, x0 = (260 - bw) / 2, yb = 86;
          for (i = 0; i < 3; i++) {
            o += h.kotak(x0 + i * dpx, yb, dpx, 14, { isi: "hijauLembut", garis: "hijau", bulat: 0, tebal: 1.4 });
            o += teks(x0 + i * dpx + dpx / 2, yb + 11, "d", { tengah: true, saiz: 11, warna: "hijau", tebal: true });
          }
          o += h.kotak(x0 + 3 * dpx, yb, pecah * dpx, 14, { isi: "kuningLembut", garis: "kuning", bulat: 0, tebal: 1.4 });
          o += baris(118, "3 diameter + sedikit = π × diameter", { saiz: 11, warna: "tinta2" });
          var sq = Rp, bw2 = 3 * sq + pecah * sq, x2 = (260 - bw2) / 2, ys = 134;
          for (i = 0; i < 3; i++) {
            o += h.kotak(x2 + i * sq, ys, sq, sq, { isi: "lembayungLembut", garis: "ungu", bulat: 0, tebal: 1.4 });
            o += teks(x2 + i * sq + sq / 2, ys + 19, "j×j", { tengah: true, saiz: 11, warna: "ungu", tebal: true });
          }
          o += h.kotak(x2 + 3 * sq, ys, pecah * sq, sq, { isi: "kuningLembut", garis: "kuning", bulat: 0, tebal: 1.4 });
          o += baris(182, "3 petak + sedikit = π × j × j", { saiz: 11, warna: "tinta2" });
          o += baris(202, "j = " + nomK(r.r) + " " + u + "    d = " + nomK(r.d) + " " + u);
          o += baris(220, "Lilitan = πd = " + nomK(r.lilitan) + " " + u, { warna: "merah", tebal: true, hasil: true });
          o += ung(238, ["Luas = πj", { p: "2" }, " = " + nomK(r.luas) + " " + u, { p: "2" }], { warna: "ungu", hasil: true });
          alt = "Rajah bulatan berjejari " + nomK(r.r) + " " + u + ", lilitan dibandingkan dengan tiga diameter dan luas dibandingkan dengan tiga petak jejari kali jejari";
          return h.svg(TINGGI.lilluas, o, alt);
        }

        /* ---------- sektor ---------- */
        if (m === "sektor") {
          cy = 92; R = 58;
          var th = r.th, besar = th > 180 ? 1 : 0, p0 = pt(cx, cy, R, 0), p1 = pt(cx, cy, R, th);
          o += bulat(cx, cy, R, { isi: "kertas2", garis: "tinta3", tebal: 1.4 });
          o += h.laluan("M" + XY([cx, cy]) + "L" + XY(p0) + "A" + R + " " + R + " 0 " + besar + " 0 " + XY(p1) + "Z", { isi: "kuningLembut", warna: "kuning", tebal: 2.4 });
          o += h.laluan("M" + XY(p0) + "A" + R + " " + R + " 0 " + besar + " 0 " + XY(p1), { warna: "merah", tebal: 3.6 });
          o += h.laluan("M" + XY(pt(cx, cy, 16, 0)) + "A16 16 0 " + besar + " 0 " + XY(pt(cx, cy, 16, th)), { warna: "tinta", tebal: 1.4 });
          var pl = pt(cx, cy, R + 16, th / 2);
          o += teks(pl[0], pl[1] + 4, th + "°", { tengah: true, saiz: 12, warna: "ungu", tebal: true });
          o += bulat(cx, cy, 2.6, { isi: "tinta", garis: "tinta", tebal: 1 });
          var fr = r.pn + "/" + r.pd;
          o += baris(176, "j = " + nomK(r.r) + " " + u + "    θ = " + th + "°");
          o += baris(192, "Pecahan = " + th + "/360 = " + fr, { warna: "ungu", tebal: true, hasil: true });
          o += baris(208, "Lengkok = " + fr + " × 2πj = " + nomK(r.lengkok) + " " + u, { warna: "merah", tebal: true, hasil: true });
          o += ung(224, ["Luas = " + fr + " × πj", { p: "2" }, " = " + nomK(r.luas) + " " + u, { p: "2" }], { warna: "hijau", hasil: true });
          o += baris(240, "Perimeter = " + nomK(r.lengkok) + " + " + nomK(2 * r.r) + " = " + nomK(r.perimeter) + " " + u, { warna: "tinta", tebal: true, hasil: true });
          alt = "Rajah sektor bulatan berjejari " + nomK(r.r) + " " + u + " dengan sudut " + th + " darjah, panjang lengkok " + nomK(r.lengkok) + " " + u + " dan luas sektor " + nomK(r.luas);
          return h.svg(TINGGI.sektor, o, alt);
        }

        /* ---------- trek ---------- */
        if (m === "trek") {
          var Ls = senarai(c, "L", [0, 7, 14, 21, 28]), Lmaks = Math.max.apply(null, Ls), sk = 200 / (Lmaks + 2 * r.r);
          var L = r.L, rr2 = r.r * sk, tx0 = (260 - (L + 2 * r.r) * sk) / 2, ty0 = 30, Lp = L * sk;
          var dTrek = "M" + XY([tx0 + rr2, ty0]) + "L" + XY([tx0 + rr2 + Lp, ty0]) + "A" + b1(rr2) + " " + b1(rr2) + " 0 0 1 " + XY([tx0 + rr2 + Lp, ty0 + 2 * rr2]) +
            "L" + XY([tx0 + rr2, ty0 + 2 * rr2]) + "A" + b1(rr2) + " " + b1(rr2) + " 0 0 1 " + XY([tx0 + rr2, ty0]) + "Z";
          o += h.laluan(dTrek, { isi: "kuningLembut", warna: "kuning", tebal: 2.4 });
          if (L > 0) {
            o += garis(tx0 + rr2, ty0 - 8, tx0 + rr2 + Lp, ty0 - 8, { warna: "merah", tebal: 2 });
            o += teks(tx0 + rr2 + Lp / 2, ty0 - 12, "L", { tengah: true, saiz: 12, warna: "merah", tebal: true });
          }
          var rcx = tx0 + rr2 + Lp, rcy = ty0 + rr2;
          o += garis(rcx, rcy, rcx + rr2, rcy, { warna: "ungu", tebal: 2.4 });
          o += bulat(rcx, rcy, 2.6, { isi: "tinta", garis: "tinta", tebal: 1 });
          o += teks(rcx + rr2 / 2, rcy - 5, "j", { tengah: true, saiz: 12, warna: "ungu", tebal: true });
          o += baris(122, "j = " + nomK(r.r) + " " + u + "    L = " + nomK(L) + " " + u);
          o += baris(140, "Perimeter = 2πj + 2L = " + nomK(r.perimeter) + " " + u, { warna: "merah", tebal: true, hasil: true });
          o += ung(158, ["Luas = πj", { p: "2" }, " + 2jL = " + nomK(r.luas) + " " + u, { p: "2" }], { warna: "ungu", hasil: true });
          o += baris(176, "dua separuh bulatan + segi empat tepat", { saiz: 11, warna: "tinta2" });
          alt = "Rajah trek berbentuk dua separuh bulatan berjejari " + nomK(r.r) + " " + u + " dengan bahagian lurus " + nomK(L) + " " + u + ", perimeter " + nomK(r.perimeter) + " " + u;
          return h.svg(TINGGI.trek, o, alt);
        }

        /* ---------- cincin ---------- */
        var Rs2 = senarai(c, "R", [10.5, 14, 21]), rs2 = senarai(c, "rk", [3.5, 7]);
        if (Math.min.apply(null, Rs2) <= Math.max.apply(null, rs2)) throw new Error("t2bulat cincin: semua R mesti lebih besar daripada semua r");
        cy = 88;
        var sc = 70 / Math.max.apply(null, Rs2), Ro = r.R * sc, Ri = r.r * sc;
        function bulatanD(rad) { return "M" + b1(cx - rad) + " " + cy + "A" + b1(rad) + " " + b1(rad) + " 0 1 0 " + b1(cx + rad) + " " + cy + "A" + b1(rad) + " " + b1(rad) + " 0 1 0 " + b1(cx - rad) + " " + cy + "Z"; }
        o += '<path d="' + bulatanD(Ro) + bulatanD(Ri) + '" fill="' + h.w("kuningLembut") + '" fill-rule="evenodd" stroke="none"></path>';
        o += bulat(cx, cy, Ro, { garis: "kuning", tebal: 2.4 }) + bulat(cx, cy, Ri, { garis: "ungu", tebal: 2.2 });
        var pR = pt(cx, cy, Ro, 35), pr = pt(cx, cy, Ri, -40);
        o += garis(cx, cy, pR[0], pR[1], { warna: "merah", tebal: 2.4 });
        o += garis(cx, cy, pr[0], pr[1], { warna: "ungu", tebal: 2.4 });
        o += bulat(cx, cy, 2.6, { isi: "tinta", garis: "tinta", tebal: 1 });
        o += teks(52, 176, "R = " + nomK(r.R) + " " + u, { saiz: 12, warna: "merah", tebal: true });
        o += teks(148, 176, "r = " + nomK(r.r) + " " + u, { saiz: 12, warna: "ungu", tebal: true });
        o += ung(194, ["Luas = π(R", { p: "2" }, " − r", { p: "2" }, ")"], { warna: "ungu", hasil: true });
        o += ung(212, ["= π × (" + nomK(r.R * r.R) + " − " + nomK(r.r * r.r) + ") = " + nomK(r.luas) + " " + u, { p: "2" }], { warna: "merah", hasil: true });
        alt = "Rajah cincin antara bulatan berjejari " + nomK(r.R) + " " + u + " dan " + nomK(r.r) + " " + u + ", luas cincin " + nomK(r.luas) + " " + u + " persegi";
        return h.svg(TINGGI.cincin, o, alt);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
