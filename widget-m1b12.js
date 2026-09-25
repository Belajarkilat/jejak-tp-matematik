/* Widget Tingkatan 1 Bab 12 Pengendalian Data: satu widget `t1data` dengan enam mod (spec.mod).
   - jenis     : klasifikasi data (kategori, numerik diskret, numerik selanjar). Gelongsor memilih pemboleh ubah.
   - titik     : plot titik dan jadual kekerapan dibina data demi data.
   - palang    : carta palang atau carta pai bagi data yang sama; gelongsor memilih kategori (sudut sektor).
   - batang    : plot batang-dan-daun, susunan asal atau disusun.
   - histogram : histogram dengan selang kelas boleh diubah, dan poligon kekerapan.
   - garis     : graf garis dengan paksi-y yang boleh dipotong (etika perwakilan) dan ramalan.
   Semua nombor dikira daripada data dalam spec, bukan ditulis tangan. Unsur jawapan
   diberi kelas jmi-hasil supaya tersembunyi dalam mod cabar.
   Fail ini didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js; pelayar: tag <script>). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;
    var SIRI = ["hijau", "merah", "ungu", "kuning", "lembayung", "tinta3"];

    function bul(n, d) { var p = Math.pow(10, d == null ? 2 : d), r = Math.round(n * p) / p; return r === 0 ? 0 : r; }
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
      return "<circle" + hs(hasil) + ' cx="' + h.b1(cx) + '" cy="' + h.b1(cy) + '" r="' + r + '" fill="' + h.w(isi) + '" stroke="' + h.w(gar || "kertas") + '" stroke-width="' + (sw || 1.5) + '"></circle>';
    }
    function P(d, isi, gar, tebal, hasil) {
      return "<path" + hs(hasil) + ' d="' + d + '" fill="' + (isi ? h.w(isi) : "none") + '" stroke="' + (gar ? h.w(gar) : "none") + '" stroke-width="' + (tebal || 2) +
        '" stroke-linejoin="round" stroke-linecap="round"></path>';
    }
    function baris(y, t, o) { o = o || {}; return teks(o.x == null ? 8 : o.x, y, t, { saiz: o.saiz || 12, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil }); }
    function sedar(pilih, n) { pilih = +pilih; return pilih < 0 ? 0 : pilih > n - 1 ? n - 1 : pilih; }

    /* ---------- pengiraan (dieksport melalui kira) ---------- */
    function kekerapan(data, n, lo, hi) {
      var f = [], i; for (i = lo; i <= hi; i++) f.push(0);
      for (i = 0; i < n; i++) f[data[i] - lo]++;
      return f;
    }
    function julatData(c) {
      var lo = c.min != null ? c.min : Math.min.apply(null, c.data);
      var hi = c.max != null ? c.max : Math.max.apply(null, c.data);
      return [lo, hi];
    }
    function jumlahF(d) { var t = 0; d.forEach(function (x) { t += x[1]; }); return t; }
    function kelasHisto(c, w) {
      var mn = Math.min.apply(null, c.data), mx = Math.max.apply(null, c.data);
      var mula = Math.floor(mn / w) * w, k = Math.floor((mx - mula) / w) + 1, f = [], i;
      for (i = 0; i < k; i++) f.push(0);
      c.data.forEach(function (v) { f[Math.floor((v - mula) / w)]++; });
      return { mula: mula, w: w, k: k, f: f };
    }
    function pecahBatang(v) { return [Math.floor(v / 10), v % 10]; }

    W.t1data = {
      mula: function (c) {
        switch (c.mod) {
          case "titik": return { n: c.n == null ? 0 : c.n };
          case "palang": return { pilih: 0, wakil: c.wakil || 0 };
          case "batang": return { n: c.n == null ? c.data.length : c.n, urut: 0 };
          case "histogram": return { l: 0, p: 0 };
          case "garis": return { p: c.data.length - 1, a: 0 };
          default: return { i: c.i || 0 };
        }
      },
      kawalan: function (c) {
        switch (c.mod) {
          case "jenis": return [{ k: "i", label: "data", min: 0, maks: c.senarai.length - 1, teks: c.senarai.map(function (x) { return x[0]; }) }];
          case "titik": return [{ k: "n", label: "data", min: 0, maks: c.data.length }];
          case "palang": return [
            { k: "pilih", label: "kategori", min: 0, maks: c.data.length - 1, teks: c.data.map(function (x) { return x[0]; }) },
            { k: "wakil", label: "paparan", min: 0, maks: 1, teks: ["Palang", "Pai"] }];
          case "batang": return [
            { k: "n", label: "data", min: 0, maks: c.data.length },
            { k: "urut", label: "daun", min: 0, maks: 1, teks: ["Asal", "Disusun"] }];
          case "histogram": return [
            { k: "l", label: "selang", min: 0, maks: c.lebar.length - 1, teks: c.lebar.map(function (x) { return x + " " + (c.unit || ""); }) },
            { k: "p", label: "poligon", min: 0, maks: 1, teks: ["Tiada", "Ada"] }];
          case "garis": return [
            { k: "p", label: "bulan", min: 0, maks: c.data.length - 1, teks: c.data.map(function (x) { return x[0]; }) },
            { k: "a", label: "paksi-y mula", min: 0, maks: c.mula.length - 1, teks: c.mula.map(String) }];
        }
        return [];
      },
      kira: function (c, s) {
        var i, n, r;
        switch (c.mod) {
          case "jenis":
            i = c.senarai[sedar(s.i, c.senarai.length)];
            return { nama: i[1], jenis: i[2], kelas: i[2] === "k" ? "kategori" : i[2] === "d" ? "diskret" : "selanjar" };
          case "titik":
            r = julatData(c); n = Math.min(s.n, c.data.length);
            return { f: kekerapan(c.data, n, r[0], r[1]), n: n, lo: r[0], hi: r[1] };
          case "palang":
            i = sedar(s.pilih, c.data.length); n = jumlahF(c.data);
            return { nama: c.data[i][0], f: c.data[i][1], jumlah: n, sudut: bul(c.data[i][1] / n * 360, 1), peratus: bul(c.data[i][1] / n * 100, 1) };
          case "batang":
            n = Math.min(s.n, c.data.length);
            var ada = c.data.slice(0, n);
            return { n: n, terkecil: n ? Math.min.apply(null, ada) : null, terbesar: n ? Math.max.apply(null, ada) : null };
          case "histogram":
            r = kelasHisto(c, c.lebar[sedar(s.l, c.lebar.length)]);
            return { lebar: r.w, kelas: r.k, f: r.f, mula: r.mula, jumlah: c.data.length };
          case "garis":
            i = sedar(s.p, c.data.length); var d = c.data;
            var beza = i === 0 ? null : d[i][1] - d[i - 1][1];
            var purata = (d[d.length - 1][1] - d[0][1]) / (d.length - 1);
            return { label: d[i][0], nilai: d[i][1], beza: beza, ramalan: bul(d[d.length - 1][1] + purata, 1), mula: c.mula[sedar(s.a, c.mula.length)] };
        }
        return {};
      },
      lukis: function (c, s) {
        return LUKIS[c.mod](c, s, this.kira(c, s));
      }
    };

    var LUKIS = {};

    /* ---------- jenis: kategori / numerik diskret / numerik selanjar ---------- */
    LUKIS.jenis = function (c, s, r) {
      var it = c.senarai[sedar(s.i, c.senarai.length)];
      var o = teks(130, 18, it[1], { tengah: true, saiz: 13, warna: "tinta", tebal: true });
      o += teks(130, 36, it[3], { tengah: true, saiz: 11, warna: "tinta2" });
      var pilih = it[2];
      function kotakJenis(x, y, lb, ht, nama, benar) {
        var o2 = R(x, y, lb, ht, "kertas2", "garis2", 1.2, false, 6);
        if (benar) o2 += R(x, y, lb, ht, "kuningLembut", "kuning", 2.4, true, 6);
        return o2 + teks(x + lb / 2, y + ht / 2 + 4, nama, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      }
      /* penyambung */
      o += L(130, 46, 68, 62, "garis2", 1.5) + L(130, 46, 192, 62, "garis2", 1.5);
      o += kotakJenis(10, 62, 116, 26, "Kategori", pilih === "k");
      o += kotakJenis(134, 62, 116, 26, "Numerik", pilih !== "k");
      o += L(192, 88, 160, 112, "garis2", 1.5) + L(192, 88, 224, 112, "garis2", 1.5);
      o += kotakJenis(132, 112, 58, 26, "Diskret", pilih === "d");
      o += kotakJenis(196, 112, 58, 26, "Selanjar", pilih === "l");
      var sebab = pilih === "k" ? "Nama atau kelas, bukan nombor." : pilih === "d" ? "Nombor yang boleh dikira." : "Nombor yang diukur.";
      var contoh = pilih === "k" ? "Tiada nilai pertengahan." : pilih === "d" ? "Nilainya nombor bulat: 0, 1, 2 ..." : "Boleh ada pecahan atau perpuluhan.";
      o += teks(8, 166, "Jenis data:", { saiz: 12, warna: "tinta2" });
      o += teks(98, 166, r.kelas, { saiz: 12, warna: "merah", tebal: true, hasil: true });
      o += teks(8, 184, sebab, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
      o += teks(8, 200, contoh, { saiz: 11, warna: "tinta2", hasil: true });
      return h.svg(212, o, "Rajah pokok jenis data: kategori atau numerik, dan numerik terbahagi kepada diskret dan selanjar. Pemboleh ubah dipilih ialah " + it[1]);
    };

    /* ---------- titik: plot titik dan jadual kekerapan ---------- */
    LUKIS.titik = function (c, s, r) {
      var lo = r.lo, hi = r.hi, kol = hi - lo + 1, x0 = 40, x1 = 252, step = (x1 - x0) / kol;
      var penuh = kekerapan(c.data, c.data.length, lo, hi), mf = Math.max.apply(null, penuh);
      var ay = 32 + mf * 11 + 8, o = "", i;
      o += r.n === 0 ? teks(8, 16, "Belum ada data. Tolak gelongsor.", { saiz: 11, warna: "tinta2" })
        : teks(8, 16, "Data ke-" + r.n + ": " + c.data[r.n - 1], { saiz: 13, warna: "tinta", tebal: true });
      o += L(x0, ay, x1, ay, "tinta3", 1.8);
      var lihat = [];
      for (i = 0; i < kol; i++) {
        var cx = x0 + step * i + step / 2;
        o += L(cx, ay, cx, ay + 4, "tinta3", 1.2);
        o += teks(cx, ay + 17, String(lo + i), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        o += teks(cx, ay + 35, String(r.f[i]), { tengah: true, saiz: 12, warna: "merah", tebal: true, hasil: true });
        lihat.push(0);
      }
      for (i = 0; i < r.n; i++) {
        var v = c.data[i] - lo; lihat[v]++;
        o += C(x0 + step * v + step / 2, ay - 7 - (lihat[v] - 1) * 11, 4.5, i === r.n - 1 ? "merah" : "hijau", "kertas", false, 1);
      }
      o += teks(8, ay + 17, c.nama || "x", { saiz: 11, warna: "tinta2" });
      o += teks(8, ay + 35, "f", { saiz: 12, warna: "tinta2", tebal: true });
      o += teks(8, ay + 55, "Jumlah f = " + r.n, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
      return h.svg(ay + 64, o, "Rajah plot titik dan jadual kekerapan bagi " + r.n + " data pertama " + (c.tajuk || "") + ", nilai " + lo + " hingga " + hi);
    };

    /* ---------- palang / pai ---------- */
    function ticksNice(ymax, n) { var t = [], i; for (i = 0; i <= n; i++) t.push(ymax * i / n); return t; }
    LUKIS.palang = function (c, s, r) {
      var d = c.data, N = d.length, pilih = sedar(s.pilih, N), o = "", i;
      var x0 = 38, x1 = 252, yT = 34, yB = 150;
      if (!s.wakil) {
        var ym = c.ymaks, slot = (x1 - x0) / N, bw = Math.min(30, slot * 0.6);
        ticksNice(ym, 4).forEach(function (v) {
          var y = yB - (yB - yT) * v / ym;
          o += L(x0, y, x1, y, "garis", 0.8) + teks(x0 - 5, y + 4, String(v), { kanan: true, saiz: 11, warna: "tinta2" });
        });
        o += L(x0, yT, x0, yB, "tinta3", 1.6) + L(x0, yB, x1, yB, "tinta3", 1.6);
        for (i = 0; i < N; i++) {
          var cx = x0 + slot * i + slot / 2, tinggi = (yB - yT) * d[i][1] / ym, sel = i === pilih;
          o += R(cx - bw / 2, yB - tinggi, bw, tinggi, sel ? "kuning" : "hijauLembut", sel ? "tinta" : "hijau", sel ? 2 : 1.2, false, 2);
          o += teks(cx, yB + 15, d[i][0], { tengah: true, saiz: 11, warna: sel ? "tinta" : "tinta2", tebal: sel });
          if (sel) o += teks(cx, yB - tinggi - 5, String(d[i][1]), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        }
        o += teks(x0 - 30, yT - 12, "f", { saiz: 12, warna: "tinta2", tebal: true });
      } else {
        var cxp = 74, cyp = 90, rp = 56, tot = r.jumlah, a0 = -Math.PI / 2;
        for (i = 0; i < N; i++) {
          var da = d[i][1] / tot * 2 * Math.PI, a1 = a0 + da, am = (a0 + a1) / 2, ox = 0, oy = 0;
          if (i === pilih) { ox = 7 * Math.cos(am); oy = 7 * Math.sin(am); }
          var ax = cxp + ox + rp * Math.cos(a0), ay = cyp + oy + rp * Math.sin(a0), bx = cxp + ox + rp * Math.cos(a1), by = cyp + oy + rp * Math.sin(a1);
          o += P("M" + h.b1(cxp + ox) + "," + h.b1(cyp + oy) + " L" + h.b1(ax) + "," + h.b1(ay) + " A" + rp + "," + rp + " 0 " + (da > Math.PI ? 1 : 0) + " 1 " + h.b1(bx) + "," + h.b1(by) + " Z",
            SIRI[i % SIRI.length], "kertas", i === pilih ? 3 : 2, false);
          a0 = a1;
        }
        for (i = 0; i < N; i++) {
          var ly = 40 + i * 22, sel2 = i === pilih;
          o += R(148, ly - 9, 11, 11, SIRI[i % SIRI.length], sel2 ? "tinta" : "kertas", sel2 ? 2 : 1, false, 2);
          o += teks(166, ly, d[i][0] + " " + d[i][1], { saiz: 12, warna: "tinta", tebal: sel2 });
        }
      }
      o += baris(190, r.nama + ": f = " + r.f, { tebal: true });
      o += baris(206, "Jumlah f = " + r.jumlah, {});
      o += baris(222, "Sudut = " + r.f + "/" + r.jumlah + " × 360° = " + fmt(r.sudut, 1) + "°", { warna: "merah", tebal: true, hasil: true });
      o += baris(238, "Peratus = " + fmt(r.peratus, 1) + "%", { warna: "ungu", tebal: true, hasil: true });
      return h.svg(250, o, "Rajah data " + (c.tajuk || "") + " dipaparkan sebagai " + (s.wakil ? "carta pai" : "carta palang") + "; kategori dipilih ialah " + r.nama + " dengan kekerapan " + r.f + " daripada " + r.jumlah);
    };

    /* ---------- batang-dan-daun ---------- */
    LUKIS.batang = function (c, s, r) {
      var sm = Math.floor(Math.min.apply(null, c.data) / 10), sb = Math.floor(Math.max.apply(null, c.data) / 10);
      var ada = c.data.slice(0, r.n), o = "", y0 = 40, ht = 18, st, i, baki = sb - sm + 1;
      o += teks(52, 18, "Batang", { kanan: true, saiz: 11, warna: "tinta2", tebal: true });
      o += teks(68, 18, "Daun", { saiz: 11, warna: "tinta2", tebal: true });
      o += L(58, 6, 58, y0 + baki * ht - 8, "tinta3", 1.8);
      for (st = sm; st <= sb; st++) {
        var daun = [];
        for (i = 0; i < ada.length; i++) if (Math.floor(ada[i] / 10) === st) daun.push(ada[i] % 10);
        if (s.urut) daun.sort(function (a, b) { return a - b; });
        var y = y0 + (st - sm) * ht;
        o += teks(52, y, String(st), { kanan: true, saiz: 13, warna: "tinta", tebal: true });
        o += teks(68, y, daun.join(" "), { saiz: 13, warna: "hijau", tebal: true });
      }
      var ye = y0 + baki * ht, k = pecahBatang(c.data[0]);
      o += teks(8, ye + 8, "Kekunci: " + k[0] + " | " + k[1] + " bermaksud " + c.data[0], { saiz: 11, warna: "tinta2" });
      o += baris(ye + 28, "Bilangan data = " + r.n, { tebal: true, hasil: true });
      o += baris(ye + 46, r.n ? "Terkecil = " + r.terkecil + ", terbesar = " + r.terbesar : "Terkecil = -, terbesar = -", { warna: "merah", tebal: true, hasil: true });
      return h.svg(ye + 56, o, "Rajah plot batang-dan-daun bagi " + r.n + " data " + (c.tajuk || "") + ", daun " + (s.urut ? "disusun" : "mengikut susunan asal"));
    };

    /* ---------- histogram dan poligon kekerapan ---------- */
    LUKIS.histogram = function (c, s, r) {
      var k = r.kelas, x0 = 36, x1 = 254, sw = (x1 - x0) / (k + 2), yT = 34, yB = 150, o = "", i;
      var mf = 0; c.lebar.forEach(function (w) { mf = Math.max(mf, Math.max.apply(null, kelasHisto(c, w).f)); });
      var ym = Math.ceil(mf / 4) * 4;
      ticksNice(ym, 4).forEach(function (v) {
        var y = yB - (yB - yT) * v / ym;
        o += L(x0, y, x1, y, "garis", 0.8) + teks(x0 - 5, y + 4, String(v), { kanan: true, saiz: 11, warna: "tinta2" });
      });
      o += teks(8, yT - 12, "f", { saiz: 12, warna: "tinta2", tebal: true });
      for (i = 0; i < k; i++) {
        var f = r.f[i], t = (yB - yT) * f / ym, bx = x0 + sw * (i + 1);
        if (f > 0) o += R(bx, yB - t, sw, t, "hijauLembut", "hijau", 1.4, true, 0);
        if (f > 0) o += teks(bx + sw / 2, yB - t - 4, String(f), { tengah: true, saiz: 11, warna: "tinta", tebal: true, hasil: true });
      }
      o += L(x0, yT, x0, yB, "tinta3", 1.6) + L(x0, yB, x1, yB, "tinta3", 1.6);
      var langkah = sw < 24 ? 2 : 1;
      for (i = 0; i <= k; i += langkah) o += teks(x0 + sw * (i + 1), yB + 14, String(fmt(r.mula + i * r.lebar)), { tengah: true, saiz: 11, warna: "tinta" });
      if (s.p) {
        var pts = [], d = "";
        for (i = 0; i < k + 2; i++) {
          var fx = i === 0 || i === k + 1 ? 0 : r.f[i - 1], px = x0 + sw * i + sw / 2, py = yB - (yB - yT) * fx / ym;
          pts.push([px, py]); d += (i ? "L" : "M") + h.b1(px) + "," + h.b1(py) + " ";
        }
        o += P(d, null, "merah", 2.4, true);
        pts.forEach(function (p) { o += C(p[0], p[1], 3.6, "merah", "kertas", true, 1); });
      }
      o += teks((x0 + x1) / 2, yB + 28, c.paksi || "", { tengah: true, saiz: 11, warna: "tinta2" });
      o += baris(198, "Selang kelas = " + r.lebar + " " + (c.unit || ""), { tebal: true });
      o += baris(214, "Bilangan kelas = " + r.kelas, { warna: "merah", tebal: true, hasil: true });
      o += baris(230, "Jumlah f = " + r.jumlah, { warna: "ungu", tebal: true, hasil: true });
      return h.svg(242, o, "Rajah histogram " + (c.tajuk || "") + " dengan selang kelas " + r.lebar + (s.p ? " dan poligon kekerapan" : "") + ", " + r.kelas + " kelas");
    };

    /* ---------- graf garis dan etika paksi ---------- */
    LUKIS.garis = function (c, s, r) {
      var d = c.data, N = d.length, p = sedar(s.p, N), start = r.mula, ym = c.ymaks, o = "", i;
      var x0 = 38, x1 = 252, yT = 34, yB = 150, span = ym - start;
      function px(j) { return x0 + 10 + j * (x1 - x0 - 20) / (N - 1); }
      function py(v) { return yB - (yB - yT) * (v - start) / span; }
      ticksNice(span, 4).forEach(function (q) {
        var v = start + q, y = py(v);
        o += L(x0, y, x1, y, "garis", 0.8) + teks(x0 - 5, y + 4, fmt(v, 1), { kanan: true, saiz: 11, warna: "tinta2" });
      });
      o += L(x0, yT, x0, yB, "tinta3", 1.6) + L(x0, yB, x1, yB, "tinta3", 1.6);
      if (start > 0) o += P("M" + (x0 - 5) + "," + (yB - 12) + " L" + (x0 + 5) + "," + (yB - 18) + " L" + (x0 - 5) + "," + (yB - 24) + " L" + (x0 + 5) + "," + (yB - 30), null, "merah", 2.2, false);
      var dl = "";
      for (i = 0; i < N; i++) dl += (i ? "L" : "M") + h.b1(px(i)) + "," + h.b1(py(d[i][1])) + " ";
      o += P(dl, null, "hijau", 2.6, false);
      for (i = 0; i < N; i++) {
        var sel = i === p;
        o += C(px(i), py(d[i][1]), sel ? 6 : 3.6, sel ? "kuning" : "hijau", sel ? "tinta" : "kertas", false, sel ? 2 : 1);
        o += teks(px(i), yB + 15, d[i][0], { tengah: true, saiz: 11, warna: sel ? "tinta" : "tinta2", tebal: sel });
      }
      o += teks(px(p), py(d[p][1]) - 11, String(d[p][1]), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      o += teks(x0 - 30, yT - 12, c.unit || "", { saiz: 11, warna: "tinta2", tebal: true });
      o += baris(190, r.label + ": " + r.nilai, { tebal: true });
      o += baris(206, r.beza == null ? "Bulan pertama, tiada beza" : "Beza dari bulan lalu = " + (r.beza > 0 ? "+" : "") + fmt(r.beza, 1), { warna: "merah", tebal: true, hasil: true });
      o += baris(222, "Ramalan bulan depan = " + fmt(r.ramalan, 1), { warna: "ungu", tebal: true, hasil: true });
      o += baris(238, "Paksi-y bermula dari " + start + (start > 0 ? " (dipotong)" : ""), { saiz: 11, warna: start > 0 ? "merah" : "tinta2", tebal: start > 0 });
      return h.svg(250, o, "Rajah graf garis " + (c.tajuk || "") + " dengan paksi-y bermula dari " + start + "; bulan dipilih " + r.label + " bernilai " + r.nilai);
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
