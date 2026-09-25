/* Widget Tingkatan 1 Bab 4 Nisbah, Kadar dan Kadaran.
   Empat widget interaktif (semua nombor dikira daripada formula):
   - t1nisbah  : mod setara (bar bahagi/darab nisbah 2-3 kuantiti),
                 mod jumlah (kongsi jumlah ikut nisbah),
                 mod gabung (dua nisbah dua kuantiti menjadi a : b : c)
   - t1kadar   : laju (graf jarak-masa dan pertukaran unit km/j kepada m/s)
   - t1kadaran : kadaran langsung a : b = c : x, kaedah unitari dan darab silang
   - t1peratus : grid 10 x 10, peratus, pecahan, perpuluhan dan nisbah
   Didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js; pelayar: tag
   <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, kotak = h.kotak, garis = h.garis;
    var WARNA = [["hijauLembut", "hijau"], ["kuningLembut", "kuning"], ["lembayungLembut", "lembayung"]];
    var HURUF = ["A", "B", "C"];

    function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
    function gcdList(l) { return l.reduce(function (x, y) { return gcd(x, y); }); }
    function lcm(a, b) { return a / gcd(a, b) * b; }
    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function fmt(n) { return String(bul(n)); }
    function rm2(n) { var r = bul(n); return (r === Math.round(r) ? String(r) : r.toFixed(2).replace(/0$/, "")); }
    function tulisF(f) { return f[1] === 1 ? (f[0] === 1 ? "asal" : "× " + f[0]) : "÷ " + f[1]; }
    function sambung(l, p) { return l.join(p || " : "); }

    /* ======================= t1nisbah ======================= */
    W.t1nisbah = {
      mula: function (c) { return { i: c.i == null ? 0 : c.i }; },
      kawalan: function (c) {
        if (c.mod === "gabung") return [{ k: "i", label: "langkah", min: 0, maks: 2, teks: ["1 Diberi", "2 Samakan B", "3 Gabung"] }];
        if (c.mod === "jumlah") return [{ k: "i", label: "jumlah", min: 0, maks: c.jumlah.length - 1, teks: c.jumlah.map(function (t) { return fmtV(c, t); }) }];
        return [{ k: "i", label: "ubah", min: 0, maks: c.faktor.length - 1, teks: c.faktor.map(tulisF) }];
      },
      kira: function (c, s) {
        if (c.mod === "gabung") {
          var p = c.p, q = c.q, L = lcm(p[1], q[0]);
          var ka = L / p[1], kc = L / q[0];
          var f = [p[0] * ka, L, q[1] * kc], g = gcdList(f);
          return { kaliAB: ka, kaliBC: kc, ab: [p[0] * ka, L], bc: [L, q[1] * kc], abc: f, mudah: f.map(function (v) { return v / g; }), pembahagi: g };
        }
        if (c.mod === "jumlah") {
          var S = c.a.reduce(function (x, y) { return x + y; }, 0), T = c.jumlah[s.i], bahagian = T / S;
          return { jumlah: T, bahagian: bahagian, nilai: c.a.map(function (v) { return v * bahagian; }), S: S };
        }
        var fk = c.faktor[s.i], nilai = c.a.map(function (v) { return v * fk[0] / fk[1]; });
        return { nilai: nilai, mudah: c.a.map(function (v) { return v / gcdList(c.a); }) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s);
        if (c.mod === "gabung") return lukisGabung(c, s, r);
        if (c.mod === "jumlah") return lukisJumlah(c, s, r);
        return lukisSetara(c, s, r);
      }
    };

    function fmtV(c, v) {
      return (c.awalan || "") + fmt(v) + (c.unit ? " " + c.unit : "");
    }

    function lukisSetara(c, s, r) {
      var n = c.a.length, maxA = Math.max.apply(null, c.a), L0 = 168, x0 = 62, o = "";
      o += teks(8, 16, "Nisbah asal = " + sambung(c.a), { saiz: 12, warna: "tinta", tebal: true });
      for (var j = 0; j < n; j++) {
        var y = 26 + j * 28, L = L0 * c.a[j] / maxA, v = r.nilai[j], col = WARNA[j];
        o += teks(8, y + 14, c.nama[j], { saiz: 11, warna: "tinta2" });
        o += kotak(x0, y, L, 20, { isi: col[0], garis: col[1], bulat: 3, tebal: 1.4 });
        if (v <= 40 && v > 1) {
          var cw = L / v;
          for (var k = 1; k < v; k++) o += garis(x0 + k * cw, y + 1, x0 + k * cw, y + 19, { warna: col[1], tebal: 0.8 });
        }
        o += teks(x0 + L0 + 8, y + 14, fmt(v), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
      }
      var yb = 26 + n * 28 + 12;
      o += teks(8, yb, "Nisbah setara = " + sambung(r.nilai.map(fmt)), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
      o += teks(8, yb + 18, "Nisbah termudah = " + sambung(r.mudah), { saiz: 12, warna: "hijau", tebal: true, hasil: true });
      return h.svg(yb + 28, o, "Rajah bar nisbah " + sambung(c.a) + ", nisbah setara " + sambung(r.nilai.map(fmt)) + ", nisbah termudah " + sambung(r.mudah));
    }

    function lukisJumlah(c, s, r) {
      var n = c.a.length, maxA = Math.max.apply(null, c.a), o = "", bw = 20, x0 = 62;
      o += teks(8, 16, "Nisbah = " + sambung(c.a) + "   Jumlah = " + fmtV(c, r.jumlah), { saiz: 12, warna: "tinta", tebal: true });
      for (var j = 0; j < n; j++) {
        var y = 26 + j * 28, col = WARNA[j];
        o += teks(8, y + 14, c.nama[j], { saiz: 11, warna: "tinta2" });
        for (var k = 0; k < c.a[j]; k++) o += kotak(x0 + k * bw, y, bw - 2, 20, { isi: col[0], garis: col[1], bulat: 3, tebal: 1.4 });
        o += teks(x0 + maxA * bw + 4, y + 14, fmtV(c, r.nilai[j]), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
      }
      var yb = 26 + n * 28 + 12;
      o += teks(8, yb, "1 bahagian = " + fmtV(c, r.bahagian), { saiz: 12, warna: "hijau", tebal: true, hasil: true });
      return h.svg(yb + 10, o, "Rajah kongsi " + fmtV(c, r.jumlah) + " mengikut nisbah " + sambung(c.a) + ", setiap bahagian bernilai " + fmtV(c, r.bahagian));
    }

    function segBar(x, y, lebar, nilai, warnaIdx, hasil, tinggi) {
      var jum = nilai.reduce(function (a, b) { return a + b; }, 0), cx = x, o = "";
      nilai.forEach(function (v, k) {
        var w = lebar * v / jum, col = WARNA[warnaIdx[k]];
        o += kotak(cx, y, w, tinggi, { isi: col[0], garis: col[1], bulat: 3, tebal: 1.4 });
        o += teks(cx + w / 2, y + tinggi / 2 + 4, String(v), { saiz: 12, warna: "tinta", tebal: true, tengah: true, hasil: hasil });
        cx += w;
      });
      return o;
    }

    function lukisGabung(c, s, r) {
      var i = s.i, o = "", tajuk = ["Diberi dua nisbah", "Samakan nilai B dahulu", "Gabung menjadi A : B : C"];
      o += teks(8, 16, tajuk[i], { saiz: 12, warna: "tinta", tebal: true });
      var ab = i === 0 ? c.p : r.ab, bc = i === 0 ? c.q : r.bc;
      o += teks(8, 52, i === 1 ? "A:B ×" + r.kaliAB : "A : B", { saiz: 11, warna: "tinta2", hasil: i === 1 });
      o += segBar(70, 34, 180, ab, [0, 1], false, 26);
      o += teks(8, 92, i === 1 ? "B:C ×" + r.kaliBC : "B : C", { saiz: 11, warna: "tinta2", hasil: i === 1 });
      o += segBar(70, 74, 180, bc, [1, 2], false, 26);
      if (i === 2) {
        o += teks(8, 132, "A:B:C", { saiz: 11, warna: "tinta2", hasil: true });
        o += segBar(70, 114, 180, r.abc, [0, 1, 2], true, 26);
        o += teks(8, 158, "A : B : C = " + sambung(r.abc), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        o += teks(8, 176, r.pembahagi > 1 ? "Termudah = " + sambung(r.mudah) : "Sudah dalam bentuk termudah", { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        return h.svg(184, o, "Rajah nisbah A : B : C = " + sambung(r.abc) + " selepas B disamakan");
      }
      o += teks(8, 132, "A : B : C", { saiz: 11, warna: "tinta2" });
      o += teks(92, 132, "? : ? : ?", { saiz: 12, warna: "tinta3", tebal: true });
      return h.svg(148, o, "Rajah dua nisbah A : B = " + sambung(ab) + " dan B : C = " + sambung(bc) + ", langkah " + (i + 1));
    }

    /* ======================= t1kadar ======================= */
    W.t1kadar = {
      mula: function (c) { return { i: c.i == null ? 1 : c.i, t: c.t == null ? 2 : c.t }; },
      kawalan: function (c) {
        return [
          { k: "i", label: "laju", min: 0, maks: c.v.length - 1, teks: c.v.map(function (v) { return v + " km/j"; }) },
          { k: "t", label: "masa", min: 1, maks: c.tMaks, teks: rentang(c.tMaks).map(function (t) { return t + " jam"; }) }
        ];
      },
      kira: function (c, s) {
        var v = c.v[s.i], t = s.t + 0;
        return { laju: v, masa: t, jarak: v * t, ms: bul(v * 1000 / 3600) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", gx = 46, gw = 198, gy = 22, gh = 80, base = gy + gh, tm = c.tMaks, ymax = r.laju * tm;
        var px = function (t) { return gx + gw * t / tm; }, py = function (d) { return base - gh * d / ymax; };
        o += teks(8, 12, "jarak (km)", { saiz: 11, warna: "tinta2" });
        o += garis(gx, gy, gx, base, { warna: "tinta3", tebal: 1.5 }) + garis(gx, base, gx + gw, base, { warna: "tinta3", tebal: 1.5 });
        for (var k = 1; k <= tm; k++) {
          o += garis(px(k), base, px(k), base + 4, { warna: "tinta3", tebal: 1 });
          o += teks(px(k), base + 15, String(k), { saiz: 11, warna: "tinta2", tengah: true });
        }
        o += teks(gx - 4, gy + 4, String(ymax), { saiz: 11, warna: "tinta2", kanan: true });
        o += teks(gx - 4, base + 4, "0", { saiz: 11, warna: "tinta2", kanan: true });
        o += garis(gx, base, px(tm), py(ymax), { warna: "hijau", tebal: 2.5 });
        o += '<g class="jmi-hasil">' + garis(px(r.masa), base, px(r.masa), py(r.jarak), { warna: "merah", tebal: 1.2, putus: "3 3" }) +
          garis(gx, py(r.jarak), px(r.masa), py(r.jarak), { warna: "merah", tebal: 1.2, putus: "3 3" }) +
          '<circle cx="' + h.b1(px(r.masa)) + '" cy="' + h.b1(py(r.jarak)) + '" r="5" fill="' + h.w("merah") + '" stroke="' + h.w("kertas") + '" stroke-width="1.5"></circle></g>';
        o += teks(gx + gw / 2, base + 30, "masa (jam)", { saiz: 11, warna: "tinta2", tengah: true });
        o += teks(8, 152, "Jarak = " + r.laju + " × " + r.masa + " = " + r.jarak + " km", { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        o += teks(8, 170, r.laju + " km/j = " + fmt(r.ms) + " m/s", { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        return h.svg(178, o, "Rajah graf jarak melawan masa bagi laju " + r.laju + " km/j, selepas " + r.masa + " jam jarak " + r.jarak + " km, laju " + fmt(r.ms) + " m/s");
      }
    };
    function rentang(n) { var a = []; for (var i = 1; i <= n; i++) a.push(i); return a; }

    /* ======================= t1kadaran ======================= */
    W.t1kadaran = {
      mula: function (c) { return { i: c.i == null ? 0 : c.i }; },
      kawalan: function (c) {
        return [{ k: "i", label: "kuantiti", min: 0, maks: c.cNilai.length - 1, teks: c.cNilai.map(function (v) { return v + " " + c.unitA; }) }];
      },
      kira: function (c, s) {
        var cc = c.cNilai[s.i], x = cc * c.b / c.a;
        return { c: cc, x: bul(x), seunit: bul(c.b / c.a) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", bw = 15, aw = c.awalan || "", ke = 176;
        o += teks(8, 14, c.a + " " + c.unitA + " : " + aw + fmt(c.b) + "   =   " + r.c + " " + c.unitA + " : x", { saiz: 12, warna: "tinta", tebal: true });
        for (var k = 0; k < c.a; k++) o += kotak(8 + k * bw, 24, bw - 2, 16, { isi: "hijauLembut", garis: "hijau", bulat: 2, tebal: 1.2 });
        o += teks(ke, 37, aw + fmt(c.b), { saiz: 12, warna: "tinta", tebal: true });
        for (var m = 0; m < r.c; m++) o += kotak(8 + m * bw, 48, bw - 2, 16, { isi: "kuningLembut", garis: "kuning", bulat: 2, tebal: 1.2 });
        o += teks(ke, 61, aw + fmt(r.x), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        o += teks(8, 88, "Unitari: 1 " + c.unitA + " = " + aw + fmt(r.seunit), { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        o += teks(8, 106, "x = " + fmt(c.b) + " × " + r.c + " ÷ " + c.a + " = " + aw + fmt(r.x), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        return h.svg(114, o, "Rajah kadaran " + c.a + " " + c.unitA + " kepada " + aw + fmt(c.b) + ", nilai bagi " + r.c + " " + c.unitA + " ialah " + aw + fmt(r.x));
      }
    };

    /* ======================= t1peratus ======================= */
    W.t1peratus = {
      mula: function (c) { return { i: c.i == null ? 0 : c.i }; },
      kawalan: function (c) {
        return [{ k: "i", label: "peratus", min: 0, maks: c.pilihan.length - 1, teks: c.pilihan.map(function (p) { return p + "%"; }) }];
      },
      kira: function (c, s) {
        var p = c.pilihan[s.i], g = gcd(p, 100), pd = (p / 100).toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
        return { p: p, pecahan: (p / g) + "/" + (100 / g), pecahanAsal: p + "/100", perpuluhan: pd, nisbah: (p / g) + " : " + (100 / g), nilai: c.Q == null ? null : bul(c.Q * p / 100) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", cs = 11, gx = 8, gy = 8;
        for (var k = 0; k < 100; k++) {
          var cx = gx + (k % 10) * cs, cy = gy + Math.floor(k / 10) * cs, on = k < r.p;
          o += kotak(cx, cy, cs - 1, cs - 1, { isi: on ? "kuningLembut" : "kertas2", garis: on ? "kuning" : "garis", bulat: 1, tebal: on ? 1 : 0.6 });
        }
        o += teks(130, 22, r.p + "%", { saiz: 16, warna: "tinta", tebal: true });
        o += teks(130, 44, "= " + r.pecahanAsal, { saiz: 12, warna: "tinta2", hasil: true });
        o += teks(130, 62, "= " + r.pecahan, { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        o += teks(130, 80, "= " + r.perpuluhan, { saiz: 12, warna: "lembayung", tebal: true, hasil: true });
        o += teks(130, 98, "Nisbah " + r.nisbah, { saiz: 12, warna: "tinta", hasil: true });
        var tinggi = gy + 10 * cs + 10;
        if (r.nilai != null) {
          o += teks(8, 140, r.p + "% daripada " + c.Q + (c.unit ? " " + c.unit : ""), { saiz: 12, warna: "tinta", tebal: true });
          o += teks(8, 158, "= " + fmt(r.nilai) + (c.unit ? " " + c.unit : ""), { saiz: 12, warna: "merah", tebal: true, hasil: true });
          tinggi = 166;
        }
        return h.svg(tinggi, o, "Rajah grid seratus petak dengan " + r.p + " petak berwarna, " + r.p + " peratus bersamaan pecahan " + r.pecahan + " dan perpuluhan " + r.perpuluhan);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
