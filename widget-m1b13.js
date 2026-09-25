/* Widget Tingkatan 1 Bab 13 Teorem Pythagoras: segi tiga bersudut tegak interaktif.
   Satu widget `t1pyth` dengan lima mod (spec.mod):
   - petak  : segi tiga dengan petak pada setiap sisi; gelongsor sisi a dan sisi b, luas a2 + b2 = c2
   - cari   : cari sisi yang tidak diketahui (hipotenus, sisi b atau sisi a) daripada tiga serangkai
   - tangga : tangga bersandar pada dinding, gelongsor jarak kaki tangga, cari tinggi
   - rumah  : gabungan segi empat tepat dan segi tiga (bumbung), cari panjang kasau dan perimeter
   - akas   : tiga sisi diberi, semak sama ada segi tiga bersudut tegak (akas Teorem Pythagoras)
   Semua nombor dikira daripada formula. Unsur jawapan bertanda hasil supaya tersembunyi
   dalam mod cabar. Fail ini didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js;
   pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;
    var A_LALAI = [2, 3, 4, 5, 6];
    var B_LALAI = [2, 3, 4, 5, 6, 8];
    var TIGA = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15], [7, 24, 25]];
    var AKAS = [[3, 4, 5], [4, 5, 6], [5, 12, 13], [6, 7, 9], [6, 8, 10], [7, 8, 10], [8, 15, 17], [9, 12, 16]];
    var RUMAH = [[6, 4], [8, 3], [10, 12], [12, 8], [16, 6]];
    var LEG = [3, 4, 5, 6, 7, 8, 9];

    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function fmt(n) { return String(bul(n)); }
    function nilai(c, k, lalai) { return (c[k] && c[k].length) ? c[k] : lalai; }
    function di(a, i) { return a[Math.max(0, Math.min(a.length - 1, i))]; }
    function bulat(n) { return Math.abs(n - Math.round(n)) < 1e-9; }
    function unit(c) { return c.unit || "cm"; }

    /* Ungkapan berindeks, rata kiri: lebar ikut formula ungkap() dalam interaktif.js. */
    function ung(x, y, segs, o) {
      o = o || {};
      var sz = o.saiz || 12, jum = 0, i;
      for (i = 0; i < segs.length; i++) jum += typeof segs[i] === "string" ? segs[i].length * sz * 0.6 : segs[i].p.length * 11 * 0.6;
      return h.ungkap(x + jum / 2, y, segs, o);
    }
    function poli(pts, isi, garis, hasil, tebal) {
      var d = "M" + pts.map(function (p) { return b1(p[0]) + " " + b1(p[1]); }).join(" L") + " Z";
      return '<path' + (hasil ? ' class="jmi-hasil"' : "") + ' d="' + d + '" fill="' + (isi ? h.w(isi) : "none") + '" stroke="' + h.w(garis) +
        '" stroke-width="' + (tebal || 1.5) + '" stroke-linejoin="round"></path>';
    }
    function tepi(x1, y1, x2, y2, warna, tebal, putus) {
      return h.garis(x1, y1, x2, y2, { warna: warna, tebal: tebal, putus: putus });
    }

    W.t1pyth = {
      mula: function (c) {
        var mod = c.mod || "petak";
        if (mod === "petak") return { ia: c.ia == null ? 1 : c.ia, ib: c.ib == null ? 2 : c.ib };
        if (mod === "cari") return { i: c.i == null ? 0 : c.i, x: c.x == null ? 0 : c.x };
        return { i: c.i == null ? 0 : c.i };
      },
      kawalan: function (c) {
        var mod = c.mod || "petak", u = unit(c);
        if (mod === "petak") {
          var A = nilai(c, "a", A_LALAI), B = nilai(c, "b", B_LALAI);
          return [{ k: "ia", label: "sisi a", min: 0, maks: A.length - 1, teks: A.map(function (v) { return v + " " + u; }) },
                  { k: "ib", label: "sisi b", min: 0, maks: B.length - 1, teks: B.map(function (v) { return v + " " + u; }) }];
        }
        if (mod === "cari") {
          var T = nilai(c, "set", TIGA);
          return [{ k: "i", label: "segi tiga", min: 0, maks: T.length - 1, teks: T.map(function (t) { return t.join("-"); }) },
                  { k: "x", label: "cari", min: 0, maks: 2, teks: ["hipotenus c", "sisi b", "sisi a"] }];
        }
        if (mod === "tangga") {
          var D = nilai(c, "d", [1, 2, 3, 4, 5, 6, 7, 8, 9]);
          return [{ k: "i", label: "jarak kaki", min: 0, maks: D.length - 1, teks: D.map(function (v) { return v + " m"; }) }];
        }
        if (mod === "rumah") {
          var R = nilai(c, "set", RUMAH);
          return [{ k: "i", label: "ukuran", min: 0, maks: R.length - 1, teks: R.map(function (r) { return r[0] + " × " + r[1] + " m"; }) }];
        }
        var S = nilai(c, "set", AKAS);
        return [{ k: "i", label: "sisi", min: 0, maks: S.length - 1, teks: S.map(function (t) { return t.join(", "); }) }];
      },
      kira: function (c, s) {
        var mod = c.mod || "petak", r = {};
        if (mod === "petak") {
          var a = di(nilai(c, "a", A_LALAI), s.ia), b = di(nilai(c, "b", B_LALAI), s.ib);
          r.a = a; r.b = b; r.a2 = a * a; r.b2 = b * b; r.c2 = a * a + b * b;
          r.c = bul(Math.sqrt(r.c2)); r.tepat = bulat(Math.sqrt(r.c2));
          return r;
        }
        if (mod === "cari") {
          var t = di(nilai(c, "set", TIGA), s.i);
          r.a = t[0]; r.b = t[1]; r.c = t[2]; r.x = s.x;
          r.hilang = s.x === 0 ? r.c : s.x === 1 ? r.b : r.a;
          return r;
        }
        if (mod === "tangga") {
          var d = di(nilai(c, "d", [1, 2, 3, 4, 5, 6, 7, 8, 9]), s.i), L = c.L || 10;
          r.L = L; r.d = d; r.tinggi = bul(Math.sqrt(L * L - d * d)); r.tepat = bulat(Math.sqrt(L * L - d * d));
          return r;
        }
        if (mod === "rumah") {
          var q = di(nilai(c, "set", RUMAH), s.i), t2 = c.t || 3, half = q[0] / 2;
          r.w = q[0]; r.r = q[1]; r.t = t2; r.setengah = half;
          r.s = bul(Math.sqrt(half * half + q[1] * q[1]));
          r.perimeter = bul(q[0] + 2 * t2 + 2 * Math.sqrt(half * half + q[1] * q[1]));
          return r;
        }
        var u = di(nilai(c, "set", AKAS), s.i).slice().sort(function (m, n) { return m - n; });
        r.a = u[0]; r.b = u[1]; r.c = u[2]; r.jumlah = u[0] * u[0] + u[1] * u[1]; r.c2 = u[2] * u[2]; r.tegak = r.jumlah === r.c2;
        return r;
      },
      lukis: function (c, s) {
        var mod = c.mod || "petak", r = this.kira(c, s), u = unit(c), o = "", i;

        /* ---------- petak pada setiap sisi ---------- */
        if (mod === "petak") {
          var A = nilai(c, "a", A_LALAI), B = nilai(c, "b", B_LALAI);
          var am = Math.max.apply(null, A), bm = Math.max.apply(null, B);
          var k = Math.min(232 / (am + 2 * bm), 168 / (2 * am + bm));
          var cx = 12 + bm * k, cy = 8 + (am + bm) * k;
          var a = r.a, b = r.b, cc = Math.sqrt(r.c2);
          var Ax = cx + a * k, Ay = cy, Bx = cx, By = cy - b * k;
          var nx = b * k, ny = -a * k;     /* vektor petak hipotenus: n * c * k */
          o += poli([[Ax, Ay], [Bx, By], [Bx + nx, By + ny], [Ax + nx, Ay + ny]], "lembayungLembut", "ungu", true, 1.6);
          o += poli([[cx, cy], [cx + a * k, cy], [cx + a * k, cy + a * k], [cx, cy + a * k]], "hijauLembut", "hijau", false, 1.6);
          o += poli([[cx - b * k, cy - b * k], [cx, cy - b * k], [cx, cy], [cx - b * k, cy]], "merahLembut", "merah", false, 1.6);
          for (i = 1; i < a; i++) {
            o += tepi(cx + i * k, cy, cx + i * k, cy + a * k, "hijau", 0.5);
            o += tepi(cx, cy + i * k, cx + a * k, cy + i * k, "hijau", 0.5);
          }
          for (i = 1; i < b; i++) {
            o += tepi(cx - i * k, cy - b * k, cx - i * k, cy, "merah", 0.5);
            o += tepi(cx - b * k, cy - i * k, cx, cy - i * k, "merah", 0.5);
          }
          o += poli([[cx, cy], [Ax, Ay], [Bx, By]], "kertas", "tinta", false, 2);
          o += h.kotak(cx + 0.5, cy - 9.5, 9, 9, { garis: "tinta3", tebal: 1.2, bulat: 0 });
          if (a * k >= 24) o += teks(cx + a * k / 2, cy + a * k / 2 + 4, String(r.a2), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          if (b * k >= 24) o += teks(cx - b * k / 2, cy - b * k / 2 + 4, String(r.b2), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          var hx = (Ax + Bx) / 2 + nx / 2, hy = (Ay + By) / 2 + ny / 2 + 4;
          o += teks(hx, hy, String(r.c2), { tengah: true, saiz: 12, warna: "tinta", tebal: true, hasil: true });
          var y0 = Math.ceil(cy + am * k + 22);
          o += teks(8, y0, "a = " + r.a + " " + u, { saiz: 12, warna: "hijau", tebal: true });
          o += teks(92, y0, "b = " + r.b + " " + u, { saiz: 12, warna: "merah", tebal: true });
          o += teks(176, y0, "c = " + fmt(r.c) + " " + u, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += ung(8, y0 + 17, ["a", { p: "2" }, " = " + r.a2], { saiz: 12, warna: "hijau", tebal: true });
          o += ung(92, y0 + 17, ["b", { p: "2" }, " = " + r.b2], { saiz: 12, warna: "merah", tebal: true });
          o += ung(176, y0 + 17, ["c", { p: "2" }, " = " + r.c2], { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += ung(8, y0 + 34, ["a", { p: "2" }, " + b", { p: "2" }, " = c", { p: "2" }, ":  " + r.a2 + " + " + r.b2 + " = " + r.c2], { saiz: 12, warna: "tinta", tebal: true, hasil: true });
          return h.svg(y0 + 46, o, "Rajah segi tiga bersudut tegak dengan sisi a " + r.a + ", sisi b " + r.b + " dan petak pada setiap sisi; luas petak ialah " + r.a2 + ", " + r.b2 + " dan " + r.c2);
        }

        /* ---------- cari sisi yang tidak diketahui ---------- */
        if (mod === "cari") {
          var k2 = Math.min(190 / r.a, 118 / r.b), x0 = 52, yb = 148;
          var px = x0 + r.a * k2, py = yb - r.b * k2;
          o += poli([[x0, yb], [px, yb], [x0, py]], "kuningLembut", "tinta", false, 2.4);
          o += tepi(x0, yb, px, yb, "hijau", 3);
          o += tepi(x0, yb, x0, py, "merah", 3);
          o += tepi(px, yb, x0, py, "ungu", 3);
          o += h.kotak(x0 + 0.5, yb - 9.5, 9, 9, { garis: "tinta3", tebal: 1.2, bulat: 0 });
          var ta = "a = " + (r.x === 2 ? "?" : r.a), tb = "b = " + (r.x === 1 ? "?" : r.b), tc = "c = " + (r.x === 0 ? "?" : r.c);
          o += teks(x0 + r.a * k2 / 2, yb + 16, ta, { tengah: true, saiz: 12, warna: "hijau", tebal: true });
          o += teks(x0 - 6, yb - r.b * k2 / 2 + 4, tb, { kanan: true, saiz: 12, warna: "merah", tebal: true });
          var mx = (x0 + px) / 2, my = (yb + py) / 2, len = Math.sqrt(r.a * r.a + r.b * r.b) * k2;
          var onx = r.b * k2 / len, ony = -r.a * k2 / len;
          o += teks(mx + onx * 8 + 4, my + ony * 8, tc, { saiz: 12, warna: "ungu", tebal: true });
          var y1 = yb + 38;
          if (r.x === 0) {
            o += ung(8, y1, ["c", { p: "2" }, " = a", { p: "2" }, " + b", { p: "2" }, " = " + r.a * r.a + " + " + r.b * r.b + " = " + r.c * r.c], { saiz: 12, tebal: true, hasil: true });
            o += teks(8, y1 + 17, "c = " + r.c + " " + u, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          } else if (r.x === 1) {
            o += ung(8, y1, ["b", { p: "2" }, " = c", { p: "2" }, " - a", { p: "2" }, " = " + r.c * r.c + " - " + r.a * r.a + " = " + r.b * r.b], { saiz: 12, tebal: true, hasil: true });
            o += teks(8, y1 + 17, "b = " + r.b + " " + u, { saiz: 12, warna: "merah", tebal: true, hasil: true });
          } else {
            o += ung(8, y1, ["a", { p: "2" }, " = c", { p: "2" }, " - b", { p: "2" }, " = " + r.c * r.c + " - " + r.b * r.b + " = " + r.a * r.a], { saiz: 12, tebal: true, hasil: true });
            o += teks(8, y1 + 17, "a = " + r.a + " " + u, { saiz: 12, warna: "hijau", tebal: true, hasil: true });
          }
          return h.svg(y1 + 30, o, "Rajah segi tiga bersudut tegak dengan sisi " + r.a + ", " + r.b + " dan hipotenus " + r.c + "; satu sisi disorok untuk dicari");
        }

        /* ---------- tangga bersandar pada dinding ---------- */
        if (mod === "tangga") {
          var L = r.L, dd = r.d, kk = 150 / L, gy = 176, wx = 190;
          var fx = wx - dd * kk, ty = gy - Math.sqrt(L * L - dd * dd) * kk;
          o += h.kotak(wx, 14, 14, gy - 14, { isi: "kertas2", garis: "garis2", bulat: 0, tebal: 1 });
          o += tepi(10, gy, 250, gy, "tinta3", 2);
          o += tepi(fx, gy, wx, ty, "kuning", 5);
          o += tepi(fx, gy, wx, ty, "tinta", 1.2);
          o += tepi(fx, gy, wx, gy, "ungu", 1.5, "4 3");
          o += tepi(wx, gy, wx, ty, "merah", 1.5, "4 3");
          o += h.kotak(wx - 9.5, gy - 9.5, 9, 9, { garis: "tinta3", tebal: 1.2, bulat: 0 });
          o += teks((fx + wx) / 2, gy + 16, "d = " + dd + " m", { tengah: true, saiz: 12, warna: "ungu", tebal: true });
          o += teks(wx + 18, (gy + ty) / 2 + 4, "h = ?", { saiz: 12, warna: "merah", tebal: true });
          o += teks((fx + wx) / 2 - 8, (gy + ty) / 2 - 2, "L = " + L + " m", { kanan: true, saiz: 12, warna: "tinta", tebal: true });
          var y2 = gy + 36;
          o += ung(8, y2, ["h", { p: "2" }, " = L", { p: "2" }, " - d", { p: "2" }, " = " + L * L + " - " + dd * dd + " = " + (L * L - dd * dd)], { saiz: 12, tebal: true, hasil: true });
          o += teks(8, y2 + 17, (r.tepat ? "h = " : "h ≈ ") + fmt(r.tinggi) + " m", { saiz: 12, warna: "merah", tebal: true, hasil: true });
          return h.svg(y2 + 28, o, "Rajah tangga sepanjang " + L + " m bersandar pada dinding, kaki tangga " + dd + " m dari dinding, tinggi tangga pada dinding " + fmt(r.tinggi) + " m");
        }

        /* ---------- rumah: segi empat tepat dan segi tiga ---------- */
        if (mod === "rumah") {
          var Rs = nilai(c, "set", RUMAH), wm = 0, rm = 0;
          Rs.forEach(function (q) { wm = Math.max(wm, q[0]); rm = Math.max(rm, q[1]); });
          var kr = Math.min(220 / wm, 130 / (r.t + rm)), gx = (260 - r.w * kr) / 2, gy2 = 20 + (r.t + rm) * kr;
          var ex = gx + r.w * kr, ey = gy2 - r.t * kr, ax = gx + r.w * kr / 2, ay = ey - r.r * kr;
          o += poli([[gx, gy2], [ex, gy2], [ex, ey], [gx, ey]], "kuningLembut", "tinta", false, 2.2);
          o += poli([[gx, ey], [ex, ey], [ax, ay]], "merahLembut", "merah", false, 2.2);
          o += tepi(ax, ey, ax, ay, "tinta3", 1.5, "4 3");
          o += h.kotak(ax + 0.5, ey - 9.5, 9, 9, { garis: "tinta3", tebal: 1.2, bulat: 0 });
          o += teks(ax + 6, (ey + ay) / 2 + 4, "r = " + r.r, { saiz: 12, warna: "tinta", tebal: true });
          o += teks(gx - 5, (gy2 + ey) / 2 + 4, "t = " + r.t, { kanan: true, saiz: 12, warna: "tinta", tebal: true });
          o += teks(gx + r.w * kr / 2, gy2 + 16, "w = " + r.w + " m", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += teks((gx + ax) / 2 - 6, (ey + ay) / 2 - 2, "s = ?", { kanan: true, saiz: 12, warna: "merah", tebal: true });
          var y3 = gy2 + 36;
          o += teks(8, y3, "separuh lebar = " + r.setengah + " m", { saiz: 12, warna: "tinta" });
          o += ung(8, y3 + 17, ["s", { p: "2" }, " = " + r.setengah + "", { p: "2" }, " + " + r.r + "", { p: "2" }, " = " + (r.setengah * r.setengah + r.r * r.r)], { saiz: 12, tebal: true, hasil: true });
          o += teks(8, y3 + 34, "s = " + fmt(r.s) + " m", { saiz: 12, warna: "merah", tebal: true, hasil: true });
          o += teks(8, y3 + 51, "perimeter = " + fmt(r.perimeter) + " m", { saiz: 12, warna: "tinta", tebal: true, hasil: true });
          return h.svg(y3 + 63, o, "Rajah rumah lebar " + r.w + " m, dinding " + r.t + " m dan bumbung setinggi " + r.r + " m; kasau bumbung " + fmt(r.s) + " m");
        }

        /* ---------- akas Teorem Pythagoras ---------- */
        var S = nilai(c, "set", AKAS), sisi = di(S, s.i).slice().sort(function (m, n) { return m - n; });
        var sa = sisi[0], sb = sisi[1], sc = sisi[2];
        var rx = (sb * sb + sc * sc - sa * sa) / (2 * sc), ry = Math.sqrt(Math.max(0, sb * sb - rx * rx));
        var ks = Math.min(200 / sc, 120 / ry), bx = 30, by = 140;
        var Px = bx, Py = by, Qx = bx + sc * ks, Qy = by, Rx = bx + rx * ks, Ry = by - ry * ks;
        o += poli([[Px, Py], [Qx, Qy], [Rx, Ry]], r.tegak ? "hijauLembut" : "kuningLembut", "tinta", false, 2.4);
        if (r.tegak) {
          var ux = (Px - Rx), uy = (Py - Ry), vx = (Qx - Rx), vy = (Qy - Ry), lu = Math.sqrt(ux * ux + uy * uy), lv = Math.sqrt(vx * vx + vy * vy);
          ux = ux / lu * 9; uy = uy / lu * 9; vx = vx / lv * 9; vy = vy / lv * 9;
          o += '<path class="jmi-hasil" d="M' + b1(Rx + ux) + " " + b1(Ry + uy) + " L" + b1(Rx + ux + vx) + " " + b1(Ry + uy + vy) + " L" + b1(Rx + vx) + " " + b1(Ry + vy) +
            '" fill="none" stroke="' + h.w("hijau") + '" stroke-width="2"></path>';
        }
        o += teks((Px + Qx) / 2, Py + 16, String(sc), { tengah: true, saiz: 12, warna: "ungu", tebal: true });
        var lx = (Px + Rx) / 2, ly = (Py + Ry) / 2, dx = Rx - Px, dy = Ry - Py, l1 = Math.sqrt(dx * dx + dy * dy);
        o += teks(lx + dy / l1 * 9 - 2, ly - dx / l1 * 9 + 4, String(sb), { kanan: true, saiz: 12, warna: "merah", tebal: true });
        var mx2 = (Qx + Rx) / 2, my2 = (Qy + Ry) / 2;
        o += teks(mx2 + 8, my2 - 2, String(sa), { saiz: 12, warna: "hijau", tebal: true });
        var y4 = by + 38;
        o += teks(8, y4, "sisi: " + sa + ", " + sb + ", " + sc + "  (terpanjang " + sc + ")", { saiz: 12, warna: "tinta" });
        o += ung(8, y4 + 17, ["a", { p: "2" }, " + b", { p: "2" }, " = " + sa * sa + " + " + sb * sb + " = " + r.jumlah], { saiz: 12, tebal: true, hasil: true });
        o += ung(8, y4 + 34, ["c", { p: "2" }, " = " + sc + "", { p: "2" }, " = " + r.c2], { saiz: 12, tebal: true, hasil: true });
        o += teks(8, y4 + 51, r.tegak ? "Sama: bersudut tegak" : "Tidak sama: bukan bersudut tegak", { saiz: 12, warna: r.tegak ? "hijau" : "merah", tebal: true, hasil: true });
        return h.svg(y4 + 62, o, "Rajah segi tiga dengan sisi " + sa + ", " + sb + " dan " + sc + "; " + (r.tegak ? "ia bersudut tegak" : "ia bukan segi tiga bersudut tegak"));
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
