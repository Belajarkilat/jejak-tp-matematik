/* Widget Tingkatan 2 Bab 9 Laju dan Pecutan.
   Empat widget interaktif (semua nombor dikira daripada formula):
   - t2lajujarak    : graf jarak-masa (laju seragam dan tak seragam). Gelongsor masa
                  menggerakkan kereta di jalan dan titik pada graf; papar jarak,
                  laju semasa dan laju purata.
   - t2lajumasa : graf laju-masa. Gelongsor masa menukar laju; papar perubahan laju
                  dan pecutan (atau nyahpecutan).
   - t2lajutukar    : penukaran unit laju km/j dan m/s langkah demi langkah.
   - t2lajupurata   : laju purata dua bahagian perjalanan (jumlah jarak / jumlah masa)
                  berbanding purata dua laju.
   Unsur jawapan bertanda hasil (tersembunyi dalam mod cabar).
   Didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js; pelayar: tag
   <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, garis = h.garis, kotak = h.kotak;

    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function fmt(n) {
      var s = String(bul(n)).split(".");
      s[0] = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return s.join(".");
    }
    function rentang(n) { var a = []; for (var i = 0; i <= n; i++) a.push(i); return a; }
    function hasilG(isi) { return '<g class="jmi-hasil">' + isi + "</g>"; }
    function bulatan(x, y, r, isi, garisW) {
      return '<circle cx="' + h.b1(x) + '" cy="' + h.b1(y) + '" r="' + r + '" fill="' + h.w(isi) + '" stroke="' + h.w(garisW || "kertas") + '" stroke-width="1.5"></circle>';
    }
    /* Kereta kecil (badan + dua roda) berpusat pada x, dengan tapak roda pada y. */
    function kereta(x, y) {
      return kotak(x - 10, y - 12, 20, 9, { isi: "kuningLembut", garis: "kuning", bulat: 3, tebal: 1.5 }) +
        kotak(x - 5, y - 17, 10, 6, { isi: "kuningLembut", garis: "kuning", bulat: 2, tebal: 1.5 }) +
        bulatan(x - 6, y - 2, 3, "tinta", "tinta") + bulatan(x + 6, y - 2, 3, "tinta", "tinta");
    }
    /* Paksi graf: grid mendatar, tanda pada paksi-x dan paksi-y. */
    function paksi(g, o) {
      var isi = "", k, v;
      for (v = 0; v <= o.ymax + 1e-9; v += o.langkahY) {
        var yy = g.base - g.gh * v / o.ymax;
        isi += garis(g.gx, yy, g.gx + g.gw, yy, { warna: "garis", tebal: 1 });
        isi += teks(g.gx - 4, yy + 4, fmt(v), { saiz: 11, warna: "tinta2", kanan: true });
      }
      isi += garis(g.gx, g.gy, g.gx, g.base, { warna: "tinta3", tebal: 1.5 }) + garis(g.gx, g.base, g.gx + g.gw, g.base, { warna: "tinta3", tebal: 1.5 });
      for (k = 0; k <= o.tmax + 1e-9; k += o.langkahX) {
        var xx = g.gx + g.gw * k / o.tmax;
        isi += garis(xx, g.base, xx, g.base + 4, { warna: "tinta3", tebal: 1 });
        isi += teks(xx, g.base + 15, fmt(k), { saiz: 11, warna: "tinta2", tengah: true });
      }
      isi += teks(8, g.gy - 8, o.labelY, { saiz: 11, warna: "tinta2" });
      isi += teks(g.gx + g.gw / 2, g.base + 30, o.labelX, { saiz: 11, warna: "tinta2", tengah: true });
      return isi;
    }

    /* ======================= t2lajujarak ======================= */
    function jarakPada(seg, t) {
      for (var k = 1; k < seg.length; k++) {
        if (t <= seg[k][0]) { var a = seg[k - 1], b = seg[k]; return a[1] + (b[1] - a[1]) * (t - a[0]) / (b[0] - a[0]); }
      }
      return seg[seg.length - 1][1];
    }
    function lajuPada(seg, t) {
      for (var k = 1; k < seg.length; k++) {
        if (t <= seg[k][0]) { var a = seg[k - 1], b = seg[k]; return (b[1] - a[1]) / (b[0] - a[0]); }
      }
      var e = seg[seg.length - 1], p = seg[seg.length - 2];
      return (e[1] - p[1]) / (e[0] - p[0]);
    }
    W.t2lajujarak = {
      mula: function (c) { return { i: c.i == null ? 0 : c.i }; },
      kawalan: function (c) {
        return [{ k: "i", label: "masa", min: 0, maks: c.masa.length - 1, teks: c.masa.map(function (t) { return fmt(t) + " " + c.unitM; }) }];
      },
      kira: function (c, s) {
        var t = c.masa[s.i], d = jarakPada(c.seg, t);
        return { masa: t, jarak: bul(d), laju: bul(lajuPada(c.seg, t)), purata: t > 0 ? bul(d / t) : null };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", e = c.seg[c.seg.length - 1], tmax = e[0], dmax = e[1];
        var rx0 = 24, rx1 = 236, ry = 32;
        o += teks(8, 13, c.tajuk, { saiz: 12, warna: "tinta", tebal: true });
        o += garis(rx0, ry + 12, rx1, ry + 12, { warna: "tinta3", tebal: 2 });
        o += garis(rx0, ry + 8, rx0, ry + 16, { warna: "tinta3", tebal: 2 }) + garis(rx1, ry + 8, rx1, ry + 16, { warna: "tinta3", tebal: 2 });
        o += hasilG(kereta(rx0 + (rx1 - rx0) * r.jarak / dmax, ry + 8));
        o += teks(rx0, ry + 29, "0", { saiz: 11, warna: "tinta2", tengah: true });
        o += teks(rx1, ry + 29, fmt(dmax) + " " + c.unitJ, { saiz: 11, warna: "tinta2", kanan: true });
        var g = { gx: 44, gw: 196, gy: 86, gh: 80 }; g.base = g.gy + g.gh;
        o += paksi(g, { ymax: dmax, tmax: tmax, langkahX: c.langkahX || 1, langkahY: c.langkahY, labelY: "jarak (" + c.unitJ + ")", labelX: "masa (" + c.unitM + ")" });
        var px = function (t) { return g.gx + g.gw * t / tmax; }, py = function (d) { return g.base - g.gh * d / dmax; };
        o += h.laluan("M" + c.seg.map(function (p) { return h.b1(px(p[0])) + "," + h.b1(py(p[1])); }).join(" L"), { warna: "hijau", tebal: 2.5 });
        o += hasilG(garis(px(r.masa), g.base, px(r.masa), py(r.jarak), { warna: "merah", tebal: 1.2, putus: "3 3" }) +
          garis(g.gx, py(r.jarak), px(r.masa), py(r.jarak), { warna: "merah", tebal: 1.2, putus: "3 3" }) + bulatan(px(r.masa), py(r.jarak), 5, "merah"));
        o += teks(8, 212, "Jarak = " + fmt(r.jarak) + " " + c.unitJ, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        o += teks(8, 228, "Laju semasa = " + fmt(r.laju) + " " + c.unitL, { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        o += teks(8, 244, r.purata === null ? "Laju purata: pilih masa > 0" :
          "Laju purata = " + fmt(r.jarak) + " ÷ " + fmt(r.masa) + " = " + fmt(r.purata) + " " + c.unitL, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        return h.svg(252, o, "Rajah graf jarak melawan masa untuk " + c.tajuk + ". Pada masa " + fmt(r.masa) + " " + c.unitM + ", jarak " + fmt(r.jarak) + " " + c.unitJ + " dan laju semasa " + fmt(r.laju) + " " + c.unitL);
      }
    };

    /* ======================= t2lajumasa ======================= */
    W.t2lajumasa = {
      mula: function (c) { return { i: c.i == null ? 0 : c.i }; },
      kawalan: function (c) {
        return [{ k: "i", label: "masa", min: 0, maks: c.masa.length - 1, teks: c.masa.map(function (t) { return fmt(t) + " " + c.unitM; }) }];
      },
      kira: function (c, s) {
        var t = c.masa[s.i], v = c.u + c.a * t;
        return { masa: t, laju: bul(v), ubah: bul(Math.abs(v - c.u)), pecutan: t > 0 ? bul(Math.abs(v - c.u) / t) : null, turun: c.a < 0 };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", tmax = c.masa[c.masa.length - 1], vmax = c.vMaks;
        var rx0 = 24, rx1 = 236, ry = 20;
        o += teks(8, 13, c.tajuk, { saiz: 12, warna: "tinta", tebal: true });
        o += kotak(rx0, ry + 4, rx1 - rx0, 12, { garis: "tinta3", bulat: 3, tebal: 1.2 });
        o += hasilG('<rect x="' + rx0 + '" y="' + (ry + 4) + '" width="' + h.b1((rx1 - rx0) * r.laju / vmax) + '" height="12" rx="3" fill="' + h.w("hijauLembut") + '" stroke="' + h.w("hijau") + '" stroke-width="1.2"></rect>');
        o += teks(rx0, ry + 30, "0", { saiz: 11, warna: "tinta2", tengah: true });
        o += teks(rx1, ry + 30, fmt(vmax) + " " + c.unitV, { saiz: 11, warna: "tinta2", kanan: true });
        var g = { gx: 44, gw: 196, gy: 78, gh: 84 }; g.base = g.gy + g.gh;
        o += paksi(g, { ymax: vmax, tmax: tmax, langkahX: c.langkahX || 1, langkahY: c.langkahY, labelY: "laju (" + c.unitV + ")", labelX: "masa (" + c.unitM + ")" });
        var px = function (t) { return g.gx + g.gw * t / tmax; }, py = function (v) { return g.base - g.gh * v / vmax; };
        o += garis(px(0), py(c.u), px(tmax), py(c.u + c.a * tmax), { warna: "hijau", tebal: 2.5 });
        o += hasilG(garis(px(r.masa), g.base, px(r.masa), py(r.laju), { warna: "merah", tebal: 1.2, putus: "3 3" }) +
          garis(g.gx, py(r.laju), px(r.masa), py(r.laju), { warna: "merah", tebal: 1.2, putus: "3 3" }) + bulatan(px(r.masa), py(r.laju), 5, "merah"));
        o += teks(8, 208, "Laju, v = " + fmt(r.laju) + " " + c.unitV, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        if (r.pecutan === null) {
          o += teks(8, 224, "Belum ada perubahan laju", { saiz: 12, warna: "tinta", tebal: true, hasil: true });
          o += teks(8, 240, "Pilih masa > 0", { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        } else {
          o += teks(8, 224, (r.turun ? "Laju berkurang = " + fmt(c.u) + " − " + fmt(r.laju) : "Laju bertambah = " + fmt(r.laju) + " − " + fmt(c.u)) + " = " + fmt(r.ubah) + " " + c.unitV,
            { saiz: 12, warna: "tinta", tebal: true, hasil: true });
          o += teks(8, 240, (r.turun ? "Nyahpecutan = " : "Pecutan = ") + fmt(r.ubah) + " ÷ " + fmt(r.masa) + " = " + fmt(r.pecutan) + " " + c.unitP,
            { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        }
        return h.svg(248, o, "Rajah graf laju melawan masa untuk " + c.tajuk + ". Pada masa " + fmt(r.masa) + " " + c.unitM + ", laju " + fmt(r.laju) + " " + c.unitV);
      }
    };

    /* ======================= t2lajutukar ======================= */
    W.t2lajutukar = {
      mula: function (c) { return { i: c.i == null ? 0 : c.i }; },
      kawalan: function (c) {
        var asal = c.arah === "kmj" ? " km/j" : " m/s";
        return [{ k: "i", label: "laju", min: 0, maks: c.pasang.length - 1, teks: c.pasang.map(function (p) { return fmt(c.arah === "kmj" ? p[0] : p[1]) + asal; }) }];
      },
      kira: function (c, s) {
        var p = c.pasang[s.i], kmj = p[0], ms = p[1];
        return { kmj: kmj, ms: ms, meter: kmj * 1000, saat: 3600, tepat: bul(kmj * 1000 / 3600) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", km = c.arah === "kmj";
        var asal = km ? fmt(r.kmj) + " km/j" : fmt(r.ms) + " m/s", sasar = km ? fmt(r.ms) + " m/s" : fmt(r.kmj) + " km/j";
        o += teks(8, 13, "Tukar unit laju", { saiz: 12, warna: "tinta", tebal: true });
        o += kotak(10, 22, 92, 34, { isi: "kertas2", garis: "hijau", bulat: 6, tebal: 2 });
        o += teks(56, 44, asal, { saiz: 14, warna: "tinta", tebal: true, tengah: true });
        o += garis(108, 39, 150, 39, { warna: "tinta3", tebal: 2 }) + h.laluan("M144,33 L152,39 L144,45", { warna: "tinta3", tebal: 2 });
        o += kotak(158, 22, 92, 34, { isi: "hijauLembut", garis: "hijau", bulat: 6, tebal: 2 });
        o += hasilG(teks(204, 44, sasar, { saiz: 14, warna: "tinta", tebal: true, tengah: true }));
        o += teks(129, 74, km ? "× 1 000 ÷ 3 600" : "× 3 600 ÷ 1 000", { saiz: 11, warna: "tinta2", tengah: true });
        if (km) {
          o += teks(8, 100, fmt(r.kmj) + " km = " + fmt(r.kmj) + " × 1 000 = " + fmt(r.meter) + " m", { saiz: 11, warna: "tinta", tebal: true, hasil: true });
          o += teks(8, 116, "1 jam = 60 × 60 = 3 600 s", { saiz: 11, warna: "tinta", tebal: true, hasil: true });
          o += teks(8, 132, fmt(r.meter) + " ÷ 3 600 = " + fmt(r.ms) + " m/s", { saiz: 11, warna: "hijau", tebal: true, hasil: true });
          o += teks(8, 148, "Cara pantas: km/j ÷ 3.6 = m/s", { saiz: 11, warna: "tinta2", tebal: true, hasil: true });
        } else {
          o += teks(8, 100, fmt(r.ms) + " m/s: " + fmt(r.ms) + " × 3 600 = " + fmt(r.ms * 3600) + " m/j", { saiz: 11, warna: "tinta", tebal: true, hasil: true });
          o += teks(8, 116, fmt(r.ms * 3600) + " m ÷ 1 000 = " + fmt(r.kmj) + " km", { saiz: 11, warna: "tinta", tebal: true, hasil: true });
          o += teks(8, 132, "Maka " + fmt(r.ms) + " m/s = " + fmt(r.kmj) + " km/j", { saiz: 11, warna: "hijau", tebal: true, hasil: true });
          o += teks(8, 148, "Cara pantas: m/s × 3.6 = km/j", { saiz: 11, warna: "tinta2", tebal: true, hasil: true });
        }
        o += teks(8, 172, "Ingat: 1 km = 1 000 m, 1 jam = 3 600 s", { saiz: 11, warna: "tinta2" });
        return h.svg(182, o, "Rajah menukar laju " + asal + " kepada unit lain; gelongsor menukar nilai laju dan menunjukkan langkah penukaran");
      }
    };

    /* ======================= t2lajupurata ======================= */
    W.t2lajupurata = {
      mula: function (c) { return { i: c.i == null ? 0 : c.i }; },
      kawalan: function (c) {
        return [{ k: "i", label: "laju B2", min: 0, maks: c.v2.length - 1, teks: c.v2.map(function (v) { return fmt(v) + " " + c.unitL; }) }];
      },
      kira: function (c, s) {
        var v2 = c.v2[s.i], t1 = c.d1 / c.v1, t2 = c.d2 / v2, D = c.d1 + c.d2, T = t1 + t2;
        return { v2: v2, t1: bul(t1), t2: bul(t2), jarak: D, masa: bul(T), purata: bul(D / T), naif: bul((c.v1 + v2) / 2), t1t: t1, t2t: t2 };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", sc = 200 / c.tMaks, x0 = 28;
        o += teks(8, 13, "Dua bahagian perjalanan", { saiz: 12, warna: "tinta", tebal: true });
        o += kotak(x0, 24, 200, 18, { garis: "tinta3", bulat: 2, tebal: 1.2 });
        o += hasilG('<rect x="' + x0 + '" y="24" width="' + h.b1(r.t1t * sc) + '" height="18" fill="' + h.w("hijauLembut") + '" stroke="' + h.w("hijau") + '" stroke-width="1.5"></rect>' +
          '<rect x="' + h.b1(x0 + r.t1t * sc) + '" y="24" width="' + h.b1(r.t2t * sc) + '" height="18" fill="' + h.w("kuningLembut") + '" stroke="' + h.w("kuning") + '" stroke-width="1.5"></rect>');
        o += teks(x0, 56, "masa dilalui (lebar bar)", { saiz: 11, warna: "tinta2" });
        o += kotak(8, 66, 9, 9, { isi: "hijauLembut", garis: "hijau", bulat: 2 }) + teks(22, 75, "B1: " + fmt(c.d1) + " " + c.unitJ + " pada " + fmt(c.v1) + " " + c.unitL, { saiz: 11, warna: "tinta", tebal: true });
        o += kotak(8, 82, 9, 9, { isi: "kuningLembut", garis: "kuning", bulat: 2 }) + teks(22, 91, "B2: " + fmt(c.d2) + " " + c.unitJ + " pada " + fmt(r.v2) + " " + c.unitL, { saiz: 11, warna: "tinta", tebal: true });
        o += teks(8, 112, "Masa B1 = " + fmt(c.d1) + " ÷ " + fmt(c.v1) + " = " + fmt(r.t1) + " " + c.unitM, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        o += teks(8, 128, "Masa B2 = " + fmt(c.d2) + " ÷ " + fmt(r.v2) + " = " + fmt(r.t2) + " " + c.unitM, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        o += teks(8, 144, "Jumlah: " + fmt(r.jarak) + " " + c.unitJ + " dalam " + fmt(r.masa) + " " + c.unitM, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        o += teks(8, 160, "Laju purata = " + fmt(r.jarak) + " ÷ " + fmt(r.masa) + " = " + fmt(r.purata) + " " + c.unitL, { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        o += teks(8, 176, "Bukan (" + fmt(c.v1) + " + " + fmt(r.v2) + ") ÷ 2 = " + fmt(r.naif), { saiz: 11, warna: "tinta2", tebal: true, hasil: true });
        return h.svg(184, o, "Rajah dua bahagian perjalanan: bahagian pertama " + fmt(c.d1) + " " + c.unitJ + " pada " + fmt(c.v1) + " " + c.unitL + " dan bahagian kedua " + fmt(c.d2) + " " + c.unitJ + " pada " + fmt(r.v2) + " " + c.unitL + "; laju purata " + fmt(r.purata) + " " + c.unitL);
      }
    };
  }
  if (typeof module !== "undefined") module.exports = pasang; else pasang(window.JMI);
})();
