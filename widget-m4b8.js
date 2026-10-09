/* Widget Tingkatan 4 Bab 8 Sukatan Serakan Data Tak Terkumpul. Widget `t4serak`, lima mod:
   - plot    : dua set data A dan B sebagai plot titik atau plot batang-dan-daun (cip).
               Spek: A, B (senarai nilai), namaA, namaB, unit.
   - sukatan : satu set data tersusun; cip memilih sukatan (julat, kuartil dan JAK, varians dan
               sisihan piawai). Kedudukan Q1, median dan Q3 diserlahkan. Spek: data, unit.
   - kotak   : plot kotak dibina langkah demi langkah (gelongsor 1 hingga 5). Spek: data, unit.
   - ubah    : kesan perubahan data: cip memilih operasi (asal, tambah k, darab k, tambah pencilan,
               buang nilai terbesar). Plot titik dan min, julat, sisihan piawai dikira semula.
               Spek: data, ops [{nama, jenis:"asal"|"tambah"|"darab"|"masuk"|"buang", k}].
   - banding : dua set data dengan plot kotak selari, min dan sisihan piawai. Spek: A, B, namaA, namaB.
   - cari    : satu nilai data k tidak diketahui (gelongsor); min dan sisihan piawai dikira.
               Spek: data (tanpa k), kMin, kMaks.
   Kuartil: Q1 = nilai ke-¼(n + 1), Q3 = nilai ke-¾(n + 1); spek mesti menggunakan n supaya
   kedudukan itu integer (n = 7, 11, 15, ...), jadi kaedah separuh data memberi nilai yang sama.
   Varians σ² = Σx²/n − x̄² (rumus DSKP). Unsur jawapan bertanda jmi-hasil. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    function bul(n, d) { var p = Math.pow(10, d == null ? 2 : d), r = Math.round(n * p) / p; return r === 0 ? 0 : r; }
    function fmt(n, d) { return String(bul(n, d)).replace("-", "−"); }
    function susun(d) { return d.slice().sort(function (a, b) { return a - b; }); }
    function statistik(d) {
      var x = susun(d), n = x.length, jum = 0, jum2 = 0;
      x.forEach(function (v) { jum += v; jum2 += v * v; });
      var min = jum / n, varians = jum2 / n - min * min;
      var r = { n: n, x: x, min: x[0], maks: x[n - 1], julat: x[n - 1] - x[0], purata: min, jum: jum, jum2: jum2, varians: varians, sp: Math.sqrt(Math.max(0, varians)) };
      if ((n + 1) % 4 === 0) { r.iQ1 = (n + 1) / 4 - 1; r.iQ3 = 3 * (n + 1) / 4 - 1; r.Q1 = x[r.iQ1]; r.Q3 = x[r.iQ3]; r.JAK = r.Q3 - r.Q1; }
      r.iMed = n % 2 ? (n - 1) / 2 : null; r.median = n % 2 ? x[(n - 1) / 2] : (x[n / 2 - 1] + x[n / 2]) / 2;
      return r;
    }
    function ubahData(d, op) {
      if (op.jenis === "asal") return d.slice();
      if (op.jenis === "tambah") return d.map(function (v) { return v + op.k; });
      if (op.jenis === "darab") return d.map(function (v) { return v * op.k; });
      if (op.jenis === "masuk") return d.concat([op.k]);
      if (op.jenis === "buang") { var x = susun(d); x.pop(); return x; }
      throw new Error("operasi tidak dikenali: " + op.jenis);
    }
    function skala(a, b) {
      var lebar = b - a, s = [1, 2, 5, 10, 20, 25, 50], i, st = 1;
      for (i = 0; i < s.length; i++) if (lebar / s[i] <= 8) { st = s[i]; break; }
      var lo = Math.floor(a / st) * st, hi = Math.ceil(b / st) * st; if (hi === lo) hi = lo + st;
      return { lo: lo, hi: hi, st: st, px: function (v) { return 20 + (v - lo) / (hi - lo) * 220; } };
    }
    function paksi(S, y, unit) {
      var o = h.garis(20, y, 240, y, { warna: "tinta3", tebal: 1.5 });
      for (var v = S.lo; v <= S.hi + 1e-9; v += S.st) {
        o += h.garis(S.px(v), y - 3, S.px(v), y + 3, { warna: "tinta3", tebal: 1.2 });
        o += teks(S.px(v), y + 15, fmt(v), { tengah: true, saiz: 11, warna: "tinta3" });
      }
      if (unit) o += teks(240, y + 29, unit, { kanan: true, saiz: 11, warna: "tinta3" });
      return o;
    }
    function bulat(cx, cy, r, isi, tepi, kelas) {
      return '<circle' + (kelas ? ' class="' + kelas + '"' : "") + ' cx="' + b1(cx) + '" cy="' + b1(cy) + '" r="' + r + '" fill="' + h.w(isi) + '" stroke="' + h.w(tepi) + '" stroke-width="1.2"></circle>';
    }
    function plotTitik(S, data, yBase, warna) {
      var o = "", kira = {}, uni = susun(data).filter(function (v, i, a) { return !i || v !== a[i - 1]; }), jarak = Infinity;
      for (var i = 1; i < uni.length; i++) jarak = Math.min(jarak, S.px(uni[i]) - S.px(uni[i - 1]));
      /* jejari titik menyesuaikan jarak terdekat antara dua nilai supaya titik tidak bertindih */
      var r = Math.max(2.4, Math.min(4.2, jarak / 2 - 0.4)), langkah = Math.max(2 * r + 1.5, 7);
      susun(data).forEach(function (v) { var k = kira[v] = (kira[v] || 0) + 1; o += bulat(S.px(v), yBase - r - 3 - (k - 1) * langkah, r, warna, "kertas"); });
      return o;
    }
    function plotKotak(S, st, y, warna, langkah, kelas) {
      var o = "", L = langkah == null ? 5 : langkah, g = function (s) { return kelas ? '<g class="' + kelas + '">' + s + "</g>" : s; };
      if (L >= 2) o += g(h.garis(S.px(st.min), y - 8, S.px(st.min), y + 8, { warna: warna, tebal: 2 }) + h.garis(S.px(st.maks), y - 8, S.px(st.maks), y + 8, { warna: warna, tebal: 2 }));
      if (L >= 4) o += g(h.kotak(S.px(st.Q1), y - 12, S.px(st.Q3) - S.px(st.Q1), 24, { isi: "lembayungLembut", garis: warna, bulat: 2, tebal: 2 }));
      if (L >= 3) o += g(h.garis(S.px(st.median), y - 12, S.px(st.median), y + 12, { warna: "merah", tebal: 2.5 }));
      if (L >= 5) o += g(h.garis(S.px(st.min), y, S.px(st.Q1), y, { warna: warna, tebal: 2 }) + h.garis(S.px(st.Q3), y, S.px(st.maks), y, { warna: warna, tebal: 2 }));
      return o;
    }
    function jalurData(st, y, sorot) {
      /* nilai tersusun dalam kotak kecil; Q1, median dan Q3 diserlahkan */
      var o = "", n = st.n, lb = Math.min(22, 240 / n), x0 = (260 - lb * n) / 2;
      st.x.forEach(function (v, i) {
        var tanda = sorot && (i === st.iQ1 || i === st.iMed || i === st.iQ3);
        o += (tanda ? '<g class="jmi-hasil">' : "") + h.kotak(x0 + i * lb + 1, y, lb - 2, 22, { isi: tanda ? (i === st.iMed ? "merahLembut" : "kuningLembut") : "kertas", garis: tanda ? (i === st.iMed ? "merah" : "kuning") : "garis2", bulat: 3, tebal: 1 }) + (tanda ? "</g>" : "");
        o += teks(x0 + i * lb + lb / 2, y + 15, String(v), { tengah: true, saiz: 11, warna: "tinta", tebal: tanda });
      });
      return o;
    }
    function batangDaun(data, x0, y0, tajuk, warna) {
      var x = susun(data), batang = {}, o = teks(x0, y0, tajuk, { saiz: 12, warna: warna, tebal: true }), i = 0;
      x.forEach(function (v) { var b = Math.floor(v / 10); (batang[b] = batang[b] || []).push(v % 10); });
      Object.keys(batang).map(Number).sort(function (a, b) { return a - b; }).forEach(function (b) {
        var y = y0 + 20 + i * 18; i++;
        o += teks(x0 + 10, y, String(b), { kanan: true, saiz: 12, warna: "tinta2", tebal: true });
        o += h.garis(x0 + 16, y - 12, x0 + 16, y + 5, { warna: "tinta3", tebal: 1.2 });
        o += teks(x0 + 22, y, batang[b].join(" "), { saiz: 11, warna: "tinta" });
      });
      return { svg: o, y: y0 + 20 + i * 18 };
    }

    W.t4serak = {
      mula: function (c) {
        if (c.mod === "kotak") return { L: 1 };
        if (c.mod === "cari") return { k: c.kAwal != null ? c.kAwal : c.kMin };
        return { i: 0 };
      },
      kawalan: function (c) {
        var cip = function (arr, label) { return [{ k: "i", label: label, min: 0, maks: arr.length - 1, teks: arr, pilih: true }]; };
        if (c.mod === "plot") return cip(["Plot titik", "Batang-dan-daun"], "perwakilan");
        if (c.mod === "sukatan") return cip(["Julat", "Kuartil dan JAK", "Varians dan σ"], "sukatan");
        if (c.mod === "kotak") return [{ k: "L", label: "langkah", min: 1, maks: 5, teks: ["1 data", "2 min/maks", "3 median", "4 kotak Q1–Q3", "5 misai"] }];
        if (c.mod === "ubah") return cip(c.ops.map(function (o) { return o.nama; }), "perubahan");
        if (c.mod === "banding") return cip(["Plot kotak", "Plot titik"], "paparan");
        return [{ k: "k", label: "nilai k", min: c.kMin, maks: c.kMaks }];
      },
      kira: function (c, s) {
        if (c.mod === "plot" || c.mod === "banding") { var A = statistik(c.A), B = statistik(c.B); return { A: A, B: B }; }
        if (c.mod === "ubah") return statistik(ubahData(c.data, c.ops[s.i]));
        if (c.mod === "cari") return statistik(c.data.concat([s.k]));
        return statistik(c.data);
      },
      lukis: function (c, s) {
        var r = W.t4serak.kira(c, s), o = "", u = c.unit || "";
        if (c.mod === "plot") {
          o += teks(130, 16, c.tajuk || "Dua set data", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          if (s.i === 0) {
            var S = skala(Math.min(r.A.min, r.B.min), Math.max(r.A.maks, r.B.maks));
            o += teks(8, 36, c.namaA, { saiz: 12, warna: "ungu", tebal: true }) + plotTitik(S, c.A, 92, "ungu") + paksi(S, 92, "");
            o += teks(8, 140, c.namaB, { saiz: 12, warna: "hijau", tebal: true }) + plotTitik(S, c.B, 196, "hijau") + paksi(S, 196, u);
            var y = 248;
            o += teks(8, y, "Julat " + c.namaA + " = " + r.A.maks + " − " + r.A.min + " = " + r.A.julat, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
            o += teks(8, y + 18, "Julat " + c.namaB + " = " + r.B.maks + " − " + r.B.min + " = " + r.B.julat, { saiz: 12, warna: "hijau", tebal: true, hasil: true });
            return h.svg(y + 28, o, "Rajah plot titik dua set data " + c.namaA + " dan " + c.namaB);
          }
          var P = batangDaun(c.A, 14, 40, c.namaA, "ungu"), Q = batangDaun(c.B, 14, P.y + 14, c.namaB, "hijau");
          o += P.svg + Q.svg;
          var yy = Q.y + 10;
          o += teks(8, yy, "Kekunci: 1 | 2 bermaksud 12", { saiz: 11, warna: "tinta3" });
          o += teks(8, yy + 22, "Julat " + c.namaA + " = " + r.A.julat, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, yy + 40, "Julat " + c.namaB + " = " + r.B.julat, { saiz: 12, warna: "hijau", tebal: true, hasil: true });
          return h.svg(yy + 50, o, "Rajah plot batang-dan-daun dua set data " + c.namaA + " dan " + c.namaB);
        }
        if (c.mod === "sukatan") {
          o += teks(130, 16, (c.tajuk || "Data tersusun") + " (n = " + r.n + ")", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += jalurData(r, 28, s.i === 1);
          var y2 = 76;
          if (s.i === 0) {
            o += teks(8, y2, "Nilai terkecil = " + r.min, { saiz: 12, warna: "tinta2" });
            o += teks(8, y2 + 20, "Nilai terbesar = " + r.maks, { saiz: 12, warna: "tinta2" });
            o += teks(8, y2 + 44, "Julat = " + r.maks + " − " + r.min + " = " + r.julat, { saiz: 13, warna: "merah", tebal: true, hasil: true });
          } else if (s.i === 1) {
            o += teks(8, y2, "Q1 = nilai ke-" + (r.iQ1 + 1) + " = " + r.Q1, { saiz: 12, warna: "kuning", tebal: true, hasil: true });
            o += teks(8, y2 + 20, "Median = nilai ke-" + (r.iMed + 1) + " = " + r.median, { saiz: 12, warna: "merah", tebal: true, hasil: true });
            o += teks(8, y2 + 40, "Q3 = nilai ke-" + (r.iQ3 + 1) + " = " + r.Q3, { saiz: 12, warna: "kuning", tebal: true, hasil: true });
            o += teks(8, y2 + 64, "JAK = Q3 − Q1 = " + r.Q3 + " − " + r.Q1 + " = " + r.JAK, { saiz: 13, warna: "merah", tebal: true, hasil: true });
          } else {
            o += teks(8, y2, "Σx = " + r.jum + ", Σx² = " + r.jum2, { saiz: 12, warna: "tinta2" });
            o += teks(8, y2 + 20, "x̄ = " + r.jum + " ÷ " + r.n + " = " + fmt(r.purata, 3), { saiz: 12, warna: "tinta2", hasil: true });
            o += teks(8, y2 + 40, "σ² = Σx²/n − x̄² = " + fmt(r.varians, 3), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
            o += teks(8, y2 + 64, "σ = √σ² = " + fmt(r.sp, 3), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          }
          return h.svg(y2 + 74, o, "Rajah data tersusun dengan " + r.n + " nilai dan sukatan serakan " + ["julat", "kuartil dan julat antara kuartil", "varians dan sisihan piawai"][s.i]);
        }
        if (c.mod === "kotak") {
          var S2 = skala(r.min, r.maks);
          o += teks(130, 16, c.tajuk || "Membina plot kotak", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += jalurData(r, 28, s.L >= 3);
          o += plotTitik(S2, c.data, 104, "garis2");
          o += plotKotak(S2, r, 136, "ungu", s.L);
          o += paksi(S2, 166, u);
          var y3 = 210, ket = ["Plot data pada garis nombor.", "Tandakan nilai minimum dan maksimum.", "Tandakan median (garis merah).", "Lukis kotak dari Q1 hingga Q3.", "Lukis misai ke minimum dan maksimum."];
          o += teks(8, y3, "Langkah " + s.L + " daripada 5", { saiz: 11, warna: "tinta3", tebal: true });
          o += teks(8, y3 + 16, ket[s.L - 1], { saiz: 11, warna: "tinta2" });
          o += teks(8, y3 + 38, "Minimum " + r.min + ", Q1 " + r.Q1 + ", median " + r.median, { saiz: 11, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, y3 + 54, "Q3 " + r.Q3 + ", maksimum " + r.maks, { saiz: 11, warna: "ungu", tebal: true, hasil: true });
          return h.svg(y3 + 64, o, "Rajah plot kotak dibina langkah demi langkah daripada " + r.n + " nilai data; langkah " + s.L);
        }
        if (c.mod === "ubah") {
          var S3 = skala(c.skala[0], c.skala[1]);
          o += teks(130, 16, c.ops[s.i].nama, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += plotTitik(S3, ubahData(c.data, c.ops[s.i]), 92, "ungu") + paksi(S3, 92, u);
          var y4 = 144;
          o += teks(8, y4, "Data: " + r.x.join(", "), { saiz: 11, warna: "tinta2" });
          o += teks(8, y4 + 22, "Min x̄ = " + fmt(r.purata, 2), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
          o += teks(8, y4 + 42, "Julat = " + r.julat, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, y4 + 62, "Sisihan piawai σ = " + fmt(r.sp, 2), { saiz: 12, warna: "merah", tebal: true, hasil: true });
          return h.svg(y4 + 72, o, "Rajah plot titik data selepas " + c.ops[s.i].nama + " dengan min, julat dan sisihan piawai");
        }
        if (c.mod === "banding") {
          var S4 = skala(Math.min(r.A.min, r.B.min), Math.max(r.A.maks, r.B.maks));
          o += teks(130, 16, c.tajuk || "Bandingkan dua set data", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          if (s.i === 0) { o += teks(8, 40, c.namaA, { saiz: 12, warna: "ungu", tebal: true }) + plotKotak(S4, r.A, 64, "ungu", 5); o += teks(8, 100, c.namaB, { saiz: 12, warna: "hijau", tebal: true }) + plotKotak(S4, r.B, 124, "hijau", 5); }
          else { o += teks(8, 40, c.namaA, { saiz: 12, warna: "ungu", tebal: true }) + plotTitik(S4, c.A, 86, "ungu"); o += teks(8, 100, c.namaB, { saiz: 12, warna: "hijau", tebal: true }) + plotTitik(S4, c.B, 146, "hijau"); }
          o += paksi(S4, 156, u);
          var y5 = 202;
          o += teks(8, y5, c.namaA + ": x̄ = " + fmt(r.A.purata, 2) + ", σ = " + fmt(r.A.sp, 2), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, y5 + 18, "   JAK = " + r.A.JAK + ", julat = " + r.A.julat, { saiz: 11, warna: "ungu", hasil: true });
          o += teks(8, y5 + 40, c.namaB + ": x̄ = " + fmt(r.B.purata, 2) + ", σ = " + fmt(r.B.sp, 2), { saiz: 12, warna: "hijau", tebal: true, hasil: true });
          o += teks(8, y5 + 58, "   JAK = " + r.B.JAK + ", julat = " + r.B.julat, { saiz: 11, warna: "hijau", hasil: true });
          return h.svg(y5 + 68, o, "Rajah perbandingan dua set data " + c.namaA + " dan " + c.namaB + " dengan plot kotak atau plot titik");
        }
        var S5 = skala(c.kMin, c.kMaks);
        o += teks(130, 16, "Data: " + c.data.join(", ") + ", k", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        o += plotTitik(S5, c.data, 84, "ungu") + bulat(S5.px(s.k), 77, 5.5, "merah", "tinta") + paksi(S5, 84, u);
        o += teks(S5.px(s.k), 62, "k", { tengah: true, saiz: 12, warna: "merah", tebal: true });
        var y6 = 136;
        o += teks(8, y6, "k = " + s.k, { saiz: 13, warna: "merah", tebal: true });
        o += teks(8, y6 + 22, "Min x̄ = (" + c.data.reduce(function (a, b) { return a + b; }, 0) + " + k) ÷ " + r.n + " = " + fmt(r.purata, 2), { saiz: 12, warna: "tinta", hasil: true });
        o += teks(8, y6 + 42, "Sisihan piawai σ = " + fmt(r.sp, 2), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
        o += teks(8, y6 + 62, "Julat = " + r.julat, { saiz: 12, warna: "tinta2", hasil: true });
        return h.svg(y6 + 72, o, "Rajah data dengan satu nilai k = " + s.k + " yang boleh diubah, min dan sisihan piawai dikira semula");
      }
    };
    W.t4serak.statistik = statistik;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
