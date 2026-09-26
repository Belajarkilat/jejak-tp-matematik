/* Widget Tingkatan 2 Bab 12 Sukatan Kecenderungan Memusat: satu widget `t2pusat` dengan enam mod (spec.mod).
   - asas    : mod, median dan min bagi data tak terkumpul pada plot titik. Gelongsor memilih ukuran.
   - ubah    : kesan perubahan seragam (tambah semua, darab semua) dan tidak seragam (tambah satu nilai)
               terhadap mod, median dan min.
   - jadual  : jadual kekerapan data terkumpul (selang kelas boleh ditukar), kelas mod dan min anggaran.
   - wakil   : data yang sama dalam jadual, carta palang dan batang-dan-daun; tentukan mod, median dan min.
   - ekstrem : satu nilai ekstrem yang boleh ditukar; lihat mod, median dan min bergerak (atau tidak).
   - banding : dua set data; kesan nilai ekstrem dan kepentingan julat.
   Semua nombor dikira daripada data dalam spec, bukan ditulis tangan. Unsur jawapan diberi kelas
   jmi-hasil supaya tersembunyi dalam mod cabar.
   Fail ini didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js; pelayar: tag <script>). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;

    function bul(n, d) { var p = Math.pow(10, d == null ? 1 : d), r = Math.round(n * p) / p; return r === 0 ? 0 : r; }
    function fmt(n, d) { return String(bul(n, d)); }
    function hs(o) { return o ? ' class="jmi-hasil"' : ""; }
    function R(x, y, w, ht, isi, gar, sw, hasil, rx) {
      return "<rect" + hs(hasil) + ' x="' + h.b1(x) + '" y="' + h.b1(y) + '" width="' + h.b1(w) + '" height="' + h.b1(ht) + '" rx="' + (rx == null ? 3 : rx) +
        '" fill="' + (isi ? h.w(isi) : "none") + '" stroke="' + (gar ? h.w(gar) : "none") + '" stroke-width="' + (sw || 1.2) + '"></rect>';
    }
    function L(x1, y1, x2, y2, warna, tebal, hasil, putus) {
      return "<line" + hs(hasil) + ' x1="' + h.b1(x1) + '" y1="' + h.b1(y1) + '" x2="' + h.b1(x2) + '" y2="' + h.b1(y2) + '" stroke="' + h.w(warna || "garis2") +
        '" stroke-width="' + (tebal || 1.5) + '" stroke-linecap="round"' + (putus ? ' stroke-dasharray="' + putus + '"' : "") + "></line>";
    }
    function C(cx, cy, r, isi, gar, hasil, sw) {
      return "<circle" + hs(hasil) + ' cx="' + h.b1(cx) + '" cy="' + h.b1(cy) + '" r="' + r + '" fill="' + (isi ? h.w(isi) : "none") +
        '" stroke="' + (gar ? h.w(gar) : "none") + '" stroke-width="' + (sw || 1.5) + '"></circle>';
    }
    function T(x, y, t, o) { o = o || {}; return teks(x, y, t, { saiz: o.saiz || 12, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil, tengah: o.tengah, kanan: o.kanan }); }
    function sedar(v, n) { v = +v; return v < 0 ? 0 : v > n - 1 ? n - 1 : v; }

    /* ---------- statistik ---------- */
    function urut(d) { return d.slice().sort(function (a, b) { return a - b; }); }
    function stat(d) {
      var s = urut(d), n = s.length, jum = 0, i, f = {}, mx = 0, mod = [], k;
      for (i = 0; i < n; i++) jum += s[i];
      s.forEach(function (v) { f[v] = (f[v] || 0) + 1; if (f[v] > mx) mx = f[v]; });
      Object.keys(f).forEach(function (q) { if (f[q] === mx) mod.push(+q); });
      mod.sort(function (a, b) { return a - b; });
      k = Object.keys(f).length;
      if (mx === 1 || mod.length === k) mod = [];
      return {
        n: n, jum: jum, min: jum / n, s: s, f: f, mx: mx, mod: mod,
        median: n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2,
        julat: s[n - 1] - s[0], lo: s[0], hi: s[n - 1]
      };
    }
    function teksMod(st) { return st.mod.length ? st.mod.join(" dan ") : "tiada"; }
    function teksMedian(st) {
      if (st.n % 2) return "nilai ke-" + ((st.n + 1) / 2);
      return "purata nilai ke-" + (st.n / 2) + " dan ke-" + (st.n / 2 + 1);
    }

    /* ---------- lukisan bersama ---------- */
    /* Plot titik pada garis nombor. Titik disusun ke atas apabila terlalu rapat. */
    function plotTitik(y0, data, lo, hi, langkah, cincin, r) {
      var x0 = 20, x1 = 240, sx = (x1 - x0) / (hi - lo), out = "", v, i, dot = [], jejari = r || 4;
      out += L(x0 - 8, y0, x1 + 8, y0, "tinta3", 1.5);
      for (v = lo; v <= hi; v += langkah) {
        out += L(x0 + (v - lo) * sx, y0, x0 + (v - lo) * sx, y0 + 4, "tinta3", 1.2);
        out += T(x0 + (v - lo) * sx, y0 + 16, String(v), { tengah: true, saiz: 11, warna: "tinta2" });
      }
      urut(data).forEach(function (d) {
        var x = x0 + (d - lo) * sx, k = 0;
        dot.forEach(function (p) { if (Math.abs(p.x - x) < jejari * 2 + 0.5 && p.k >= k) k = p.k + 1; });
        dot.push({ x: x, k: k, v: d });
        out += C(x, y0 - 6 - k * (jejari * 2 + 1), jejari, "hijau", "kertas", false, 1);
      });
      if (cincin) dot.forEach(function (p) {
        if (cincin(p.v)) out += C(p.x, y0 - 6 - p.k * (jejari * 2 + 1), jejari + 3, null, "merah", true, 2);
      });
      return out;
    }
    /* Baris kotak nombor. */
    function kotakNombor(y, nilai, x0, lebar, sorot, hasilSorot) {
      var out = "", i;
      for (i = 0; i < nilai.length; i++) {
        var on = sorot && sorot(i);
        out += R(x0 + i * lebar, y, lebar - 2, 22, on ? "kuningLembut" : "kertas2", on ? "kuning" : "garis2", on ? 1.8 : 1, on && hasilSorot, 4);
        out += T(x0 + i * lebar + (lebar - 2) / 2, y + 16, fmt(nilai[i], 2), { tengah: true, saiz: 12, tebal: on });
      }
      return out;
    }

    W.t2pusat = {
      mula: function (c) {
        switch (c.mod) {
          case "ubah": return { op: c.op || 0, k: c.k || 0 };
          case "jadual": return { l: c.l || 0, p: c.p || 0 };
          case "wakil": return { j: c.j || 0, u: c.u || 0 };
          case "ekstrem": return { e: c.e || 0 };
          case "banding": return { e: c.e || 0, u: c.u || 0 };
          default: return { u: c.u || 0 };
        }
      },
      kawalan: function (c) {
        var i, kelasMaks, ts = [];
        switch (c.mod) {
          case "asas": return [{ k: "u", label: "ukuran", min: 0, maks: 2, teks: ["Mod", "Median", "Min"] }];
          case "ubah": return [
            { k: "op", label: "ubah", min: 0, maks: 2, teks: ["Tambah semua", "Darab semua", "Tambah satu nilai"] },
            { k: "k", label: "nilai", min: 0, maks: 5, teks: ["1", "2", "3", "4", "5", "6"] }];
          case "jadual":
            kelasMaks = 0;
            c.lebar.forEach(function (w) { kelasMaks = Math.max(kelasMaks, Math.floor((Math.max.apply(null, c.data) - c.mula) / w) + 1); });
            for (i = 1; i <= kelasMaks; i++) ts.push("Kelas " + i);
            return [
              { k: "l", label: "selang", min: 0, maks: c.lebar.length - 1, teks: c.lebar.map(function (w) { return String(w); }) },
              { k: "p", label: "baris", min: 0, maks: kelasMaks - 1, teks: ts }];
          case "wakil": return [
            { k: "j", label: "paparan", min: 0, maks: 2, teks: ["Jadual", "Carta palang", "Batang-daun"] },
            { k: "u", label: "ukuran", min: 0, maks: 2, teks: ["Mod", "Median", "Min"] }];
          case "ekstrem": return [{ k: "e", label: "nilai terakhir", min: 0, maks: c.pilihan.length - 1, teks: c.pilihan.map(String) }];
          case "banding": return [
            { k: "e", label: "Kelas B", min: 0, maks: 1, teks: ["biasa", "ada ekstrem"] },
            { k: "u", label: "ukuran", min: 0, maks: 2, teks: ["Min", "Median", "Julat"] }];
        }
        return [];
      },
      kira: function (c, s) {
        var d, st, i;
        switch (c.mod) {
          case "asas": st = stat(c.data); return { mod: st.mod, median: st.median, min: bul(st.min, 2), n: st.n, jum: st.jum };
          case "ubah":
            d = W.t2pusat.dataBaru(c, s); return { lama: bul(stat(c.data).min, 2), baru: stat(d).min, median: stat(d).median, mod: stat(d).mod, data: d };
          case "jadual": return W.t2pusat.jadual(c, s);
          case "wakil": st = stat(c.data); return { mod: st.mod, median: st.median, min: bul(st.min, 2), n: st.n };
          case "ekstrem": d = c.base.concat([c.pilihan[sedar(s.e, c.pilihan.length)]]); st = stat(d); return { mod: st.mod, median: st.median, min: bul(st.min, 2), julat: st.julat, data: d };
          case "banding":
            var b = s.e ? c.b.slice(0, c.b.length - 1).concat([c.ekstrem]) : c.b;
            return { a: stat(c.a), b: stat(b), dataB: b };
        }
        return {};
      },
      /* Data selepas perubahan (mod ubah). */
      dataBaru: function (c, s) {
        var v = sedar(s.k, 6) + 1, op = sedar(s.op, 3), idx = c.satu == null ? c.data.length - 1 : c.satu;
        return c.data.map(function (x, i) { return op === 0 ? x + v : op === 1 ? x * v : (i === idx ? x + v : x); });
      },
      /* Data terkumpul (mod jadual). */
      jadual: function (c, s) {
        var w = c.lebar[sedar(s.l, c.lebar.length)], mx = Math.max.apply(null, c.data), k = Math.floor((mx - c.mula) / w) + 1, kelas = [], i, jf = 0, jfx = 0, mf = -1, mi = 0;
        for (i = 0; i < k; i++) kelas.push({ lo: c.mula + i * w, hi: c.mula + (i + 1) * w - 1, f: 0 });
        c.data.forEach(function (v) { kelas[Math.floor((v - c.mula) / w)].f++; });
        kelas.forEach(function (q, j) {
          q.x = (q.lo + q.hi) / 2; q.fx = q.f * q.x; jf += q.f; jfx += q.fx;
          if (q.f > mf) { mf = q.f; mi = j; }
        });
        return { w: w, kelas: kelas, jf: jf, jfx: jfx, min: jfx / jf, modal: mi };
      },
      lukis: function (c, s) {
        var out = "", H = 200, st, d, i, y, hasil;
        switch (c.mod) {
          case "asas":
            st = stat(c.data); var u = sedar(s.u, 3);
            out += T(130, 16, c.tajuk, { tengah: true, tebal: true, saiz: 12 });
            var lo = st.lo - (c.lo == null ? 1 : 0), hi = st.hi + (c.hi == null ? 1 : 0);
            if (c.lo != null) lo = c.lo; if (c.hi != null) hi = c.hi;
            y = 36 + st.mx * 9 + 14;
            out += plotTitik(y, c.data, lo, hi, 1, u === 0 ? function (v) { return st.mod.indexOf(v) >= 0; } : null);
            y += 30;
            if (u === 0) {
              out += T(130, y + 8, "Mod ialah nilai paling kerap muncul.", { tengah: true, saiz: 11, warna: "tinta2" });
              out += T(130, y + 28, "Mod = " + teksMod(st) + (st.mod.length ? " (muncul " + st.mx + " kali)" : ""), { tengah: true, tebal: true, hasil: true });
              H = y + 42;
            } else if (u === 1) {
              var lebar = Math.min(24, Math.floor(240 / st.n)), xm = (260 - lebar * st.n) / 2;
              out += T(130, y + 8, "Susun dari kecil ke besar:", { tengah: true, saiz: 11, warna: "tinta2" });
              out += kotakNombor(y + 16, st.s, xm, lebar, function (q) { return st.n % 2 ? q === (st.n - 1) / 2 : (q === st.n / 2 - 1 || q === st.n / 2); }, true);
              out += T(130, y + 56, "Median = " + fmt(st.median, 2), { tengah: true, tebal: true, hasil: true, saiz: 12 });
              out += T(130, y + 71, "(" + teksMedian(st) + ")", { tengah: true, saiz: 11, warna: "tinta2", hasil: true });
              H = y + 82;
            } else {
              out += T(130, y + 8, "Min = jumlah nilai ÷ bilangan data", { tengah: true, saiz: 11, warna: "tinta2" });
              out += T(130, y + 28, "Jumlah = " + st.jum + ", bilangan = " + st.n, { tengah: true, saiz: 12 });
              out += T(130, y + 48, "Min = " + st.jum + " ÷ " + st.n + " = " + fmt(st.min, 1), { tengah: true, tebal: true, hasil: true });
              H = y + 62;
            }
            return h.svg(H, out, "Rajah plot titik " + c.tajuk + " dengan " + st.n + " data; gelongsor memilih mod, median atau min");
          case "ubah":
            d = W.t2pusat.dataBaru(c, s);
            var lama = stat(c.data), baru = stat(d), op = sedar(s.op, 3), v = sedar(s.k, 6) + 1, idx = c.satu == null ? c.data.length - 1 : c.satu;
            var cw = Math.min(28, Math.floor(196 / c.data.length));
            out += T(130, 16, c.tajuk, { tengah: true, tebal: true, saiz: 12 });
            out += T(8, 44, "Asal", { saiz: 12, warna: "tinta2" });
            out += kotakNombor(30, c.data, 56, cw, null);
            out += T(8, 74, "Baru", { saiz: 12, warna: "hijau", tebal: true });
            out += kotakNombor(60, d, 56, cw, function (q) { return op === 2 && q === idx; }, false);
            out += T(130, 100, (op === 0 ? "Tambah " + v + " kepada setiap nilai" : op === 1 ? "Darab setiap nilai dengan " + v : "Tambah " + v + " kepada satu nilai sahaja"), { tengah: true, saiz: 12, warna: "tinta2" });
            var baris = [["Mod", teksMod(lama), teksMod(baru)], ["Median", fmt(lama.median, 2), fmt(baru.median, 2)], ["Min", fmt(lama.min, 2), fmt(baru.min, 2)]];
            for (i = 0; i < 3; i++) {
              out += T(8, 128 + i * 20, baris[i][0], { saiz: 12, tebal: true });
              out += T(84, 128 + i * 20, baris[i][1], { saiz: 12 });
              out += T(128, 128 + i * 20, "→", { saiz: 12, warna: "tinta3" });
              out += T(150, 128 + i * 20, baris[i][2], { saiz: 12, tebal: true, warna: "hijau", hasil: true });
            }
            return h.svg(190, out, "Rajah kesan perubahan data terhadap mod, median dan min; gelongsor memilih operasi dan nilai");
          case "jadual":
            var j = W.t2pusat.jadual(c, s), pilih = sedar(s.p, j.kelas.length);
            out += T(130, 16, c.tajuk, { tengah: true, tebal: true, saiz: 12 });
            out += T(8, 38, "Kelas", { saiz: 11, warna: "tinta2", tebal: true }) + T(112, 38, "f", { saiz: 11, warna: "tinta2", tebal: true, kanan: true }) +
              T(152, 38, "x", { saiz: 11, warna: "tinta2", tebal: true, kanan: true, hasil: true }) + T(228, 38, "fx", { saiz: 11, warna: "tinta2", tebal: true, kanan: true, hasil: true });
            out += L(8, 43, 250, 43, "garis2", 1);
            for (i = 0; i < j.kelas.length; i++) {
              var q = j.kelas[i], yy = 58 + i * 18, on = i === pilih;
              if (on) out += R(4, yy - 14, 250, 18, "lembayungLembut", "lembayung", 1.4, false, 4);
              out += T(8, yy, q.lo + " - " + q.hi, { saiz: 12, tebal: on });
              out += T(112, yy, String(q.f), { saiz: 12, tebal: on, kanan: true });
              out += T(152, yy, fmt(q.x, 1), { saiz: 12, tebal: on, kanan: true, hasil: true });
              out += T(228, yy, fmt(q.fx, 1), { saiz: 12, tebal: on, kanan: true, hasil: true });
            }
            var ye = 58 + j.kelas.length * 18;
            out += L(8, ye - 12, 250, ye - 12, "garis2", 1);
            out += T(8, ye + 4, "Jumlah", { saiz: 12, tebal: true }) + T(112, ye + 4, String(j.jf), { saiz: 12, tebal: true, kanan: true }) +
              T(228, ye + 4, fmt(j.jfx, 1), { saiz: 12, tebal: true, kanan: true, hasil: true });
            out += T(8, ye + 26, "Kelas mod = " + j.kelas[j.modal].lo + " - " + j.kelas[j.modal].hi, { saiz: 12, tebal: true, hasil: true });
            out += T(8, ye + 46, "Min anggaran = " + fmt(j.jfx, 1) + " ÷ " + j.jf + " = " + fmt(j.min, 2), { saiz: 12, tebal: true, hasil: true, warna: "hijau" });
            return h.svg(ye + 58, out, "Rajah jadual kekerapan data terkumpul dengan selang kelas " + j.w + " dan min anggaran");
          case "wakil":
            st = stat(c.data); var jen = sedar(s.j, 3), ukur = sedar(s.u, 3), nilai = Object.keys(st.f).map(Number).sort(function (a, b) { return a - b; });
            out += T(130, 16, c.tajuk, { tengah: true, tebal: true, saiz: 12 });
            if (jen === 0) {
              out += T(8, 38, "Nilai", { saiz: 11, tebal: true, warna: "tinta2" }) + T(112, 38, "f", { saiz: 11, tebal: true, warna: "tinta2", kanan: true }) + T(176, 38, "Σf", { saiz: 11, tebal: true, warna: "tinta2", kanan: true });
              out += L(8, 43, 190, 43, "garis2", 1);
              var kum = 0;
              nilai.forEach(function (v, n) {
                kum += st.f[v]; var yy2 = 58 + n * 15;
                out += T(8, yy2, String(v), { saiz: 12 }) + T(112, yy2, String(st.f[v]), { saiz: 12, kanan: true }) + T(176, yy2, String(kum), { saiz: 12, kanan: true, warna: "tinta2" });
              });
              y = 58 + nilai.length * 15 + 8;
            } else if (jen === 1) {
              var bw = Math.min(22, Math.floor(220 / nilai.length) - 4), gap = 220 / nilai.length, base = 34 + st.mx * 12 + 14;
              out += L(16, base, 244, base, "tinta3", 1.5);
              nilai.forEach(function (v, n) {
                var bx = 20 + n * gap + (gap - bw) / 2, bh = st.f[v] * 12;
                out += R(bx, base - bh, bw, bh, "hijauLembut", "hijau", 1.4, false, 2);
                out += T(bx + bw / 2, base - bh - 4, String(st.f[v]), { tengah: true, saiz: 11, warna: "tinta2" });
                out += T(bx + bw / 2, base + 14, String(v), { tengah: true, saiz: 11, warna: "tinta2" });
              });
              y = base + 22;
            } else {
              var b0 = Math.floor(st.lo / 10), b1 = Math.floor(st.hi / 10), t;
              for (t = b0; t <= b1; t++) {
                var daun = st.s.filter(function (q) { return Math.floor(q / 10) === t; }).map(function (q) { return q % 10; }).join(" ");
                var yr = 44 + (t - b0) * 18;
                out += T(40, yr, String(t), { saiz: 13, tebal: true, kanan: true });
                out += L(46, yr - 12, 46, yr + 4, "tinta3", 1.5);
                out += T(54, yr, daun, { saiz: 12 });
              }
              out += T(130, 44 + (b1 - b0 + 1) * 18 + 4, "Kekunci: " + b0 + " | " + (st.s[0] % 10) + " bermaksud " + (b0 * 10 + st.s[0] % 10), { tengah: true, saiz: 11, warna: "tinta2" });
              y = 44 + (b1 - b0 + 1) * 18 + 16;
            }
            var jaw = ukur === 0 ? "Mod = " + teksMod(st) + (st.mod.length ? " (f = " + st.mx + ")" : "") : ukur === 1 ? "Median = " + fmt(st.median, 2) : "Min = " + st.jum + " ÷ " + st.n + " = " + fmt(st.min, 1);
            out += T(130, y + 16, jaw, { tengah: true, tebal: true, hasil: true, saiz: 12 });
            if (ukur === 1) out += T(130, y + 31, "(" + teksMedian(st) + ")", { tengah: true, saiz: 11, warna: "tinta2", hasil: true });
            return h.svg(y + (ukur === 1 ? 44 : 30), out, "Rajah data " + c.tajuk + " dalam jadual, carta palang atau batang-dan-daun; gelongsor memilih paparan dan ukuran");
          case "ekstrem":
            var pv = c.pilihan[sedar(s.e, c.pilihan.length)], dd = c.base.concat([pv]); st = stat(dd);
            var cw2 = Math.min(26, Math.floor(240 / dd.length)), x00 = (260 - cw2 * dd.length) / 2;
            out += T(130, 16, c.tajuk, { tengah: true, tebal: true, saiz: 12 });
            out += kotakNombor(26, dd, x00, cw2, function (q) { return q === dd.length - 1; }, false);
            var mx2 = Math.max.apply(null, c.pilihan.concat(c.base)), xa = 60, xb = 232, sk = (xb - xa) / mx2;
            var rows = [["Mod", st.mod.length ? st.mod[0] : null, "kuning"], ["Median", st.median, "hijau"], ["Min", st.min, "merah"]];
            for (i = 0; i < 3; i++) {
              var yr2 = 84 + i * 30, nilaiR = rows[i][1];
              out += T(8, yr2 + 4, rows[i][0], { saiz: 12, tebal: true });
              out += L(xa, yr2, xb, yr2, "garis2", 2);
              if (nilaiR === null) { out += T(xa + 4, yr2 - 6, "tiada mod", { saiz: 11, warna: "tinta2", hasil: true }); continue; }
              var px = xa + nilaiR * sk;
              out += C(px, yr2, 6, rows[i][2], "tinta", true, 1.4);
              out += T(px > 160 ? px - 10 : px + 10, yr2 - 8, fmt(nilaiR, 1), { saiz: 12, tebal: true, hasil: true, kanan: px > 160 });
            }
            out += T(xa, 84 + 3 * 30 - 2, "0", { saiz: 11, warna: "tinta2" }) + T(xb, 84 + 3 * 30 - 2, String(mx2), { saiz: 11, warna: "tinta2", kanan: true });
            out += T(130, 84 + 3 * 30 + 18, "Julat = " + st.hi + " − " + st.lo + " = " + st.julat, { tengah: true, saiz: 12, tebal: true, hasil: true });
            return h.svg(84 + 3 * 30 + 30, out, "Rajah data dengan satu nilai ekstrem; gelongsor menukar nilai terakhir dan menunjukkan mod, median dan min");
          case "banding":
            var eks = sedar(s.e, 2), uk = sedar(s.u, 3), B = eks ? c.b.slice(0, c.b.length - 1).concat([c.ekstrem]) : c.b, sa = stat(c.a), sb = stat(B);
            var hiA = Math.max(c.hi, sb.hi);
            out += T(130, 16, c.tajuk, { tengah: true, tebal: true, saiz: 12 });
            var strips = [["Kelas A", sa, c.a, "hijau"], ["Kelas B", sb, B, "merah"]];
            for (i = 0; i < 2; i++) {
              var ys = 74 + i * 70, stx = strips[i][1], xa2 = 20, sc = 220 / (c.hi - c.lo);
              out += T(8, ys - 40, strips[i][0], { saiz: 12, tebal: true, warna: strips[i][3] });
              out += plotTitik(ys, strips[i][2], c.lo, c.hi, c.langkah, null, 3.5);
              var mark = uk === 0 ? stx.min : uk === 1 ? stx.median : null;
              if (mark !== null) out += L(xa2 + (mark - c.lo) * sc, ys - 34, xa2 + (mark - c.lo) * sc, ys + 3, strips[i][3], 2, true, "4 3");
              else out += L(xa2 + (stx.lo - c.lo) * sc, ys - 32, xa2 + (stx.hi - c.lo) * sc, ys - 32, strips[i][3], 3, true);
            }
            var nama = ["Min", "Median", "Julat"][uk];
            var va = uk === 0 ? sa.min : uk === 1 ? sa.median : sa.julat, vb = uk === 0 ? sb.min : uk === 1 ? sb.median : sb.julat;
            out += T(8, 74 + 70 + 34, nama + " A = " + fmt(va, 1), { saiz: 12, tebal: true, warna: "hijau", hasil: true });
            out += T(130, 74 + 70 + 34, nama + " B = " + fmt(vb, 1), { saiz: 12, tebal: true, warna: "merah", hasil: true });
            return h.svg(74 + 70 + 46, out, "Rajah perbandingan dua set data pada garis nombor; gelongsor menukar nilai terakhir kelas B dan ukuran yang dipaparkan");
        }
        return h.svg(H, out, "Rajah");
      }
    };
  }
  if (typeof module !== "undefined") module.exports = pasang; else pasang(window.JMI);
})();
