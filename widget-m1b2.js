/* Widget Tingkatan 1 Bab 2 Faktor dan Gandaan: `t1faktor`, empat mod (spec.mod):
   - faktor   : N kotak disusun dalam kumpulan sama banyak; gelongsor saiz kumpulan.
                Jika ada baki, saiz itu bukan faktor. Faktor ditemui dikumpul satu-satu.
   - perdana  : pembahagian berulang dengan nombor perdana, gelongsor langkah.
   - fstb     : faktor dua nombor (gelongsor A dan B), faktor sepunya dan FSTB.
   - gandaan  : grid 1..maks dengan gandaan A dan B diwarnakan; gandaan sepunya dan GSTK.
   Semua nombor dikira daripada formula. Unsur jawapan bertanda `jmi-hasil` supaya
   tersembunyi dalam mod cabar. Untuk mod faktor, pilih N dengan tidak lebih 10 faktor;
   untuk mod perdana, tidak lebih 5 faktor perdana. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;

    function gcd(a, b) { while (b) { var t = a % b; a = b; b = t; } return a; }
    function lcm(a, b) { return a / gcd(a, b) * b; }
    function faktor(n) { var o = []; for (var i = 1; i <= n; i++) if (n % i === 0) o.push(i); return o; }
    function perdana(n) { var o = [], p = 2; while (n > 1) { while (n % p === 0) { o.push(p); n /= p; } p++; } return o; }
    function sepunya(a, b) { return faktor(a).filter(function (x) { return b % x === 0; }); }
    function jum(a) { return a.reduce(function (x, y) { return x * y; }, 1); }
    function di(a, i) { return a[Math.max(0, Math.min(a.length - 1, i))]; }
    function tengah(a, v) { var n = a.indexOf(v); return n < 0 ? 0 : n; }
    function rk(x, y, w, t, isi, gar, tb, hasil) {
      return '<rect' + (hasil ? ' class="jmi-hasil"' : "") + ' x="' + h.b1(x) + '" y="' + h.b1(y) + '" width="' + h.b1(w) + '" height="' + h.b1(t) +
        '" rx="3" fill="' + (isi ? h.w(isi) : "none") + '" stroke="' + h.w(gar) + '" stroke-width="' + tb + '"></rect>';
    }
    /* Pecahkan senarai nombor kepada baris tidak melebihi maks aksara. */
    function bungkus(arr, maks) {
      var baris = [], kini = "";
      arr.forEach(function (x, i) {
        var t = String(x) + (i < arr.length - 1 ? ", " : "");
        if ((kini + t).length > maks && kini) { baris.push(kini.replace(/\s+$/, "")); kini = ""; }
        kini += t;
      });
      if (kini) baris.push(kini.replace(/\s+$/, ""));
      return baris;
    }
    function kumpulUngkap(ps) {
      var segs = [], i = 0;
      while (i < ps.length) {
        var j = i; while (j < ps.length && ps[j] === ps[i]) j++;
        if (segs.length) segs.push(" × ");
        segs.push(String(ps[i]));
        if (j - i > 1) segs.push({ p: String(j - i) });
        i = j;
      }
      return segs;
    }
    /* Sambung segmen rentetan bersebelahan supaya ungkap() tidak keliru. */
    function rapat(segs) {
      var o = [];
      segs.forEach(function (x) {
        if (typeof x === "string" && o.length && typeof o[o.length - 1] === "string") o[o.length - 1] += x; else o.push(x);
      });
      return o;
    }

    var A_LALAI = [12, 18, 24, 30, 36], B_LALAI = [8, 9, 15, 16, 20];

    W.t1faktor = {
      mula: function (c) {
        if (c.mod === "faktor") return { d: c.d == null ? 2 : c.d };
        if (c.mod === "perdana") return { k: c.k == null ? 0 : c.k };
        var aN = c.aNilai || A_LALAI, bN = c.bNilai || B_LALAI;
        return { a: c.a == null ? 0 : c.a, b: c.b == null ? 0 : c.b, _a: aN.length, _b: bN.length };
      },
      kawalan: function (c) {
        if (c.mod === "faktor") return [{ k: "d", label: "kotak dalam satu kumpulan", min: 1, maks: c.n }];
        if (c.mod === "perdana") return [{ k: "k", label: "langkah bahagi", min: 0, maks: perdana(c.n).length }];
        var aN = c.aNilai || A_LALAI, bN = c.bNilai || B_LALAI;
        return [{ k: "a", label: "A", min: 0, maks: aN.length - 1, teks: aN.map(String) },
                { k: "b", label: "B", min: 0, maks: bN.length - 1, teks: bN.map(String) }];
      },
      kira: function (c, s) {
        var r = {};
        if (c.mod === "faktor") {
          var n = c.n, d = Math.max(1, Math.min(n, s.d));
          r.n = n; r.d = d; r.kumpulan = Math.floor(n / d); r.baki = n % d; r.faktorD = n % d === 0;
          r.ditemui = faktor(n).filter(function (x) { return x <= d; });
          return r;
        }
        if (c.mod === "perdana") {
          var ps = perdana(c.n), k = Math.max(0, Math.min(ps.length, s.k));
          r.n = c.n; r.semua = ps; r.langkah = k; r.pembahagi = ps.slice(0, k);
          r.tinggal = c.n / jum(ps.slice(0, k)); r.siap = k === ps.length;
          r.distinct = ps.filter(function (x, i) { return ps.indexOf(x) === i; });
          return r;
        }
        var aN = c.aNilai || A_LALAI, bN = c.bNilai || B_LALAI, a = di(aN, s.a), b = di(bN, s.b);
        r.a = a; r.b = b; r.fstb = gcd(a, b); r.gstk = lcm(a, b);
        r.fa = faktor(a); r.fb = faktor(b); r.sepunyaF = sepunya(a, b);
        var mk = c.maks || 72; r.maks = mk; r.ada = r.gstk <= mk;
        r.sepunyaG = []; for (var i = r.gstk; i <= mk; i += r.gstk) r.sepunyaG.push(i);
        return r;
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", i, y;
        if (c.mod === "faktor") {
          var n = r.n, d = r.d, cols = 12, cw = 20, ch = 18, x0 = 10, y0 = 26, rows = Math.ceil(n / cols);
          o += teks(8, 16, n + " kotak", { saiz: 13, warna: "tinta", tebal: true });
          o += teks(252, 16, "setiap kumpulan " + d, { kanan: true, saiz: 12, warna: "ungu", tebal: true });
          for (i = 0; i < n; i++) {
            var g = Math.floor(i / d), sisa = i >= r.kumpulan * d;
            o += rk(x0 + (i % cols) * cw, y0 + Math.floor(i / cols) * ch, cw - 2, ch - 2,
              sisa ? "merahLembut" : (g % 2 ? "lembayungLembut" : "hijauLembut"),
              sisa ? "merah" : (g % 2 ? "lembayung" : "hijau"), 1.2, false);
          }
          y = y0 + rows * ch + 14;
          o += teks(8, y, r.kumpulan + " kumpulan × " + d + " = " + (r.kumpulan * d) + (r.baki ? ", baki " + r.baki : ""), { saiz: 12, warna: "tinta" });
          y += 18;
          o += teks(8, y, r.faktorD ? d + " ialah faktor bagi " + n : d + " bukan faktor bagi " + n, { saiz: 12, warna: r.faktorD ? "hijau" : "merah", tebal: true });
          y += 18;
          o += teks(8, y, "Faktor ditemui setakat ini:", { saiz: 11, warna: "tinta2", hasil: true });
          bungkus(r.ditemui, 30).forEach(function (t) { y += 16; o += teks(8, y, t, { saiz: 12, warna: "tinta", tebal: true, hasil: true }); });
          return h.svg(y + 12, o, "Rajah " + n + " kotak disusun dalam kumpulan sebanyak " + d + " kotak, " + r.kumpulan + " kumpulan penuh dan baki " + r.baki);
        }
        if (c.mod === "perdana") {
          var ps = r.semua, k = r.langkah, tinggiSusun = 22, ya = 44, xd = 44, xg = 52, xn = 60, nilai = c.n;
          o += teks(8, 16, "Bahagi dengan nombor perdana", { saiz: 11, warna: "tinta2" });
          o += h.garis(xg, ya - 16, xg, ya - 16 + (ps.length + 1) * tinggiSusun - 4, { warna: "tinta3", tebal: 1.5 });
          for (i = 0; i <= k; i++) {
            var yy = ya + i * tinggiSusun;
            if (i < k) o += teks(xd, yy, String(ps[i]), { kanan: true, saiz: 14, warna: "ungu", tebal: true });
            o += teks(xn, yy, String(nilai), { saiz: 14, warna: "tinta", tebal: true });
            if (i < k) o += h.garis(xg, yy + 5, xg + 46, yy + 5, { warna: "tinta3", tebal: 1.2 });
            if (i < k) nilai = nilai / ps[i];
          }
          var so = r.pembahagi.length ? r.pembahagi.join(" × ") : "belum ada";
          var sz = so.length * 7.2 <= 128 ? 12 : 11;
          o += teks(124, 36, "Sudah bahagi:", { saiz: 11, warna: "tinta2" });
          o += teks(124, 54, so, { saiz: sz, warna: "ungu", tebal: true });
          o += teks(124, 82, "Tinggal:", { saiz: 11, warna: "tinta2" });
          o += teks(124, 100, r.tinggal + (r.siap ? " (siap)" : ""), { saiz: 13, warna: r.siap ? "hijau" : "tinta", tebal: true });
          y = ya + (ps.length + 1) * tinggiSusun + 10;
          if (r.siap) {
            o += teks(8, y, "Faktor perdana: " + r.distinct.join(", "), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
            y += 22;
            o += h.ungkap(130, y, rapat([String(c.n) + " = "].concat(kumpulUngkap(ps))), { saiz: 13, warna: "hijau", tebal: true, hasil: true });
          } else {
            o += teks(8, y, "Teruskan bahagi sehingga hasilnya 1", { saiz: 11, warna: "tinta2" });
            y += 22;
          }
          return h.svg(y + 12, o, "Rajah pembahagian berulang bagi " + c.n + " dengan nombor perdana; langkah " + k + " daripada " + ps.length);
        }
        var sembunyi = !!c.cabar;
        if (c.mod === "fstb") {
          y = 16;
          function baris(nilaiF, lain, tajuk) {
            var out = teks(8, y, tajuk, { saiz: 12, warna: "tinta", tebal: true }), yc = y + 8;
            nilaiF.forEach(function (f, idx) {
              var baris1 = Math.floor(idx / 8), lajur = idx % 8, sama = lain % f === 0;
              out += rk(8 + lajur * 30, yc + baris1 * 22, 28, 18, sama ? "hijauLembut" : "kertas2", sama ? "hijau" : "garis2", sama ? 2 : 1.2, sembunyi);
              out += teks(8 + lajur * 30 + 14, yc + baris1 * 22 + 13, String(f), { tengah: true, saiz: 12, warna: "tinta", tebal: sama, hasil: sembunyi });
            });
            y = yc + Math.ceil(nilaiF.length / 8) * 22 + 10;
            return out;
          }
          o += baris(r.fa, r.b, "Faktor bagi " + r.a);
          o += baris(r.fb, r.a, "Faktor bagi " + r.b);
          o += teks(8, y, "Faktor sepunya:", { saiz: 11, warna: "tinta2", hasil: true });
          bungkus(r.sepunyaF, 30).forEach(function (t) { y += 16; o += teks(8, y, t, { saiz: 12, warna: "tinta", tebal: true, hasil: true }); });
          y += 20;
          o += teks(8, y, "FSTB = " + r.fstb, { saiz: 13, warna: "hijau", tebal: true, hasil: true });
          return h.svg(y + 12, o, "Rajah faktor bagi " + r.a + " dan " + r.b + " dengan faktor sepunya diserlahkan; FSTB ialah " + r.fstb);
        }
        /* gandaan */
        var mk = r.maks, cols2 = 12, cw2 = 20, ch2 = 18, xx = 10, yy0 = 24, rows2 = Math.ceil(mk / cols2);
        o += rk(8, 4, 12, 12, "lembayungLembut", "lembayung", 1.2, false) + teks(24, 14, "gandaan " + r.a, { saiz: 11, warna: "tinta" });
        o += rk(104, 4, 12, 12, "kuningLembut", "kuning", 1.2, false) + teks(120, 14, "gandaan " + r.b, { saiz: 11, warna: "tinta" });
        o += rk(196, 4, 12, 12, "hijauLembut", "hijau", 2, true) + teks(212, 14, "sepunya", { saiz: 11, warna: "tinta", hasil: true });
        for (i = 1; i <= mk; i++) {
          var cx = xx + ((i - 1) % cols2) * cw2, cy = yy0 + Math.floor((i - 1) / cols2) * ch2, ma = i % r.a === 0, mb = i % r.b === 0;
          if (ma && mb) {
            o += rk(cx, cy, cw2 - 2, (ch2 - 2) / 2, "lembayungLembut", "lembayungLembut", 0.5, false);
            o += rk(cx, cy + (ch2 - 2) / 2, cw2 - 2, (ch2 - 2) / 2, "kuningLembut", "kuningLembut", 0.5, false);
            o += rk(cx, cy, cw2 - 2, ch2 - 2, null, "hijau", 2, true);
          } else if (ma) o += rk(cx, cy, cw2 - 2, ch2 - 2, "lembayungLembut", "lembayung", 1, false);
          else if (mb) o += rk(cx, cy, cw2 - 2, ch2 - 2, "kuningLembut", "kuning", 1, false);
          else o += rk(cx, cy, cw2 - 2, ch2 - 2, "kertas2", "garis", 0.8, false);
          o += teks(cx + (cw2 - 2) / 2, cy + 13, String(i), { tengah: true, saiz: 11, warna: (ma || mb) ? "tinta" : "tinta3", tebal: ma && mb });
        }
        y = yy0 + rows2 * ch2 + 14;
        var tunjuk = r.sepunyaG.slice(0, 6), lebih = r.sepunyaG.length > 6;
        o += teks(8, y, "Gandaan sepunya:", { saiz: 11, warna: "tinta2", hasil: true });
        y += 16;
        o += teks(8, y, r.ada ? tunjuk.join(", ") + (lebih ? ", ..." : "") : "tiada dalam grid", { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        y += 20;
        o += teks(8, y, "GSTK = " + r.gstk, { saiz: 13, warna: "hijau", tebal: true, hasil: true });
        return h.svg(y + 12, o, "Rajah grid 1 hingga " + mk + " dengan gandaan " + r.a + " dan gandaan " + r.b + " diwarnakan; GSTK ialah " + r.gstk);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
