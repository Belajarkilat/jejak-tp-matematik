/* Widget Tingkatan 4 Bab 10 Matematik Pengguna: Pengurusan Kewangan. Widget `t4wang`, lima mod:
   - proses : kitaran lima langkah proses pengurusan kewangan (DSKP 10.1.1). Cip memilih langkah.
   - smart  : kad matlamat kewangan dinilai mengikut kriteria SMART. Cip memilih matlamat.
              Spek: senarai [{t, smart:[S, M, A, R, T] (1/0), jangka}].
   - bajet  : belanjawan bulanan. Gelongsor kehendak dan simpanan (RM, langkah spec.langkah).
              Lebihan atau defisit dan tempoh mencapai matlamat simpanan dikira.
              Spek: pendapatan, keperluan [{n, rm}], kehendakMaks, simpananMaks, matlamat {nama, rm}.
   - pelan  : matlamat jangka pendek/panjang: cip matlamat, gelongsor tempoh (bulan).
              Simpanan bulanan diperlukan = (harga − simpanan sedia ada) ÷ tempoh, dibandingkan
              dengan kemampuan menyimpan. Spek: matlamat [{nama, rm}], sedia, mampu, tMin, tMaks.
   - aliran : aliran tunai 12 bulan (pendapatan berubah, perbelanjaan tetap). Gelongsor bulan;
              baki terkumpul dikira. Spek: pendapatan [12], belanja, bakiAwal.
   Unsur jawapan bertanda jmi-hasil. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    function rm(n) {
      var neg = n < 0; n = Math.abs(n);
      var bulat = Math.abs(n - Math.round(n)) < 1e-9, t = (bulat ? Math.round(n) : Math.round(n * 100) / 100).toFixed(bulat ? 0 : 2).split(".");
      return (neg ? "−" : "") + "RM" + t[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (t[1] ? "." + t[1] : "");
    }
    function bungkus(t, mak) {
      var kata = String(t).split(" "), baris = [], cur = "";
      kata.forEach(function (k) { if (cur && (cur + " " + k).length > mak) { baris.push(cur); cur = k; } else cur = cur ? cur + " " + k : k; });
      if (cur) baris.push(cur);
      return baris;
    }
    var LANGKAH = [
      { n: "Menetapkan matlamat", d: "Tentukan matlamat kewangan jangka pendek dan jangka panjang mengikut konsep SMART." },
      { n: "Menilai kedudukan", d: "Senaraikan pendapatan, perbelanjaan, aset dan hutang untuk mengetahui kedudukan kewangan semasa." },
      { n: "Mewujudkan pelan", d: "Bina belanjawan yang membahagikan pendapatan kepada keperluan, kehendak dan simpanan." },
      { n: "Melaksanakan pelan", d: "Patuhi belanjawan setiap bulan dan catat perbelanjaan sebenar." },
      { n: "Mengkaji semula", d: "Bandingkan perbelanjaan sebenar dengan pelan, kemudian semak kemajuan ke arah matlamat." }];
    var SMART = [["S", "Specific", "khusus"], ["M", "Measurable", "boleh diukur"], ["A", "Attainable", "boleh dicapai"], ["R", "Realistic", "realistik"], ["T", "Time-bound", "tempoh masa"]];

    W.t4wang = {
      mula: function (c) {
        if (c.mod === "bajet") return { k: c.kehendakAwal || 0, s: c.simpananAwal || 0 };
        if (c.mod === "pelan") return { m: 0, t: c.tAwal || c.tMin };
        if (c.mod === "aliran") return { b: 1 };
        return { i: 0 };
      },
      kawalan: function (c) {
        var cip = function (k, label, arr) { return { k: k, label: label, min: 0, maks: arr.length - 1, teks: arr, pilih: true }; };
        if (c.mod === "proses") return [cip("i", "langkah", LANGKAH.map(function (l, i) { return String(i + 1); }))];
        if (c.mod === "smart") return [cip("i", "matlamat", c.senarai.map(function (x, i) { return "Matlamat " + (i + 1); }))];
        if (c.mod === "bajet") {
          var L = c.langkah || 50, tk = [], ts = [], v;
          for (v = 0; v <= c.kehendakMaks; v += L) tk.push(rm(v));
          for (v = 0; v <= c.simpananMaks; v += L) ts.push(rm(v));
          return [{ k: "k", label: "kehendak", min: 0, maks: tk.length - 1, teks: tk }, { k: "s", label: "simpanan", min: 0, maks: ts.length - 1, teks: ts }];
        }
        if (c.mod === "pelan") return [cip("m", "matlamat", c.matlamat.map(function (x) { return x.nama; })), { k: "t", label: "tempoh (bulan)", min: c.tMin, maks: c.tMaks }];
        return [{ k: "b", label: "bulan", min: 1, maks: c.pendapatan.length }];
      },
      kira: function (c, s) {
        if (c.mod === "proses") return { langkah: s.i + 1, nama: LANGKAH[s.i].n };
        if (c.mod === "smart") { var g = c.senarai[s.i]; return { smart: g.smart.every(Boolean), gagal: SMART.filter(function (x, i) { return !g.smart[i]; }).map(function (x) { return x[0]; }) }; }
        if (c.mod === "bajet") {
          var L = c.langkah || 50, kehendak = s.k * L, simpan = s.s * L, perlu = c.keperluan.reduce(function (j, x) { return j + x.rm; }, 0);
          var baki = c.pendapatan - perlu - kehendak - simpan;
          return { keperluan: perlu, kehendak: kehendak, simpanan: simpan, baki: baki, defisit: baki < 0, peratusSimpan: Math.round(simpan / c.pendapatan * 1000) / 10, bulan: simpan > 0 ? Math.ceil(c.matlamat.rm / simpan) : null };
        }
        if (c.mod === "pelan") {
          var m = c.matlamat[s.m], perlu2 = Math.round((m.rm - c.sedia) / s.t * 100) / 100;
          return { nama: m.nama, harga: m.rm, bulanan: perlu2, boleh: perlu2 <= c.mampu + 1e-9, jangka: s.t < 12 ? "kurang daripada setahun" : "setahun atau lebih", tMin: Math.ceil((m.rm - c.sedia) / c.mampu) };
        }
        var bakiK = c.bakiAwal || 0, kum = [];
        c.pendapatan.forEach(function (p) { bakiK += p - c.belanja; kum.push(bakiK); });
        var n = s.b, defisit = c.pendapatan.slice(0, n).filter(function (p) { return p < c.belanja; }).length;
        return { bulan: n, pendapatan: c.pendapatan[n - 1], bersih: c.pendapatan[n - 1] - c.belanja, kumulatif: kum[n - 1], semua: kum, bulanDefisit: defisit };
      },
      lukis: function (c, s) {
        var r = W.t4wang.kira(c, s), o = "";
        if (c.mod === "proses") {
          o += teks(130, 16, "Proses pengurusan kewangan", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          var pos = [[130, 46], [218, 94], [186, 168], [74, 168], [42, 94]];
          for (var i = 0; i < 5; i++) {
            var a = pos[i], b = pos[(i + 1) % 5], dx = b[0] - a[0], dy = b[1] - a[1], L = Math.sqrt(dx * dx + dy * dy);
            var x1 = a[0] + dx / L * 30, y1 = a[1] + dy / L * 22, x2 = b[0] - dx / L * 34, y2 = b[1] - dy / L * 24;
            o += h.garis(x1, y1, x2, y2, { warna: "tinta3", tebal: 1.8 });
            var sd = Math.atan2(y2 - y1, x2 - x1);
            o += h.laluan("M" + b1(x2) + " " + b1(y2) + " L" + b1(x2 - 7 * Math.cos(sd - 0.45)) + " " + b1(y2 - 7 * Math.sin(sd - 0.45)) + " L" + b1(x2 - 7 * Math.cos(sd + 0.45)) + " " + b1(y2 - 7 * Math.sin(sd + 0.45)) + " Z", { isi: "tinta3", warna: "tinta3", tebal: 1 });
          }
          pos.forEach(function (p, j) {
            var on = j === s.i;
            o += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="20" fill="' + h.w(on ? "lembayungLembut" : "kertas") + '" stroke="' + h.w(on ? "ungu" : "tinta3") + '" stroke-width="' + (on ? 3 : 1.5) + '"></circle>';
            o += teks(p[0], p[1] + 5, String(j + 1), { tengah: true, saiz: 14, warna: on ? "ungu" : "tinta2", tebal: true });
          });
          var y = 216;
          o += teks(8, y, "Langkah " + (s.i + 1) + ": " + LANGKAH[s.i].n, { saiz: 13, warna: "ungu", tebal: true, hasil: true });
          bungkus(LANGKAH[s.i].d, 36).forEach(function (l, j) { o += teks(8, y + 20 + j * 16, l, { saiz: 11, warna: "tinta2", hasil: true }); });
          return h.svg(y + 20 + 3 * 16 + 6, o, "Rajah kitaran lima langkah proses pengurusan kewangan; langkah " + (s.i + 1) + " " + LANGKAH[s.i].n + " dipilih");
        }
        if (c.mod === "smart") {
          var g = c.senarai[s.i], bs = bungkus("“" + g.t + "”", 32);
          o += h.kotak(6, 8, 248, 20 + bs.length * 17, { isi: "kuningLembut", garis: "kuning", bulat: 10 });
          bs.forEach(function (l, j) { o += teks(16, 30 + j * 17, l, { saiz: 12, warna: "tinta", tebal: true }); });
          var y2 = 30 + bs.length * 17 + 24;
          SMART.forEach(function (x, j) {
            var yy = y2 + j * 22;
            o += teks(12, yy, x[0], { saiz: 14, warna: "ungu", tebal: true });
            o += teks(32, yy, x[1] + " (" + x[2] + ")", { saiz: 11, warna: "tinta2" });
            o += teks(248, yy, g.smart[j] ? "✓" : "✗", { kanan: true, saiz: 14, warna: g.smart[j] ? "hijau" : "merah", tebal: true, hasil: true });
          });
          var yk = y2 + 5 * 22 + 8;
          o += teks(8, yk, r.smart ? "Matlamat SMART ✓" : "Belum SMART ✗", { saiz: 13, warna: r.smart ? "hijau" : "merah", tebal: true, hasil: true });
          if (!r.smart) o += teks(8, yk + 18, "Perlu diperbaiki: " + r.gagal.join(", "), { saiz: 11, warna: "tinta2", hasil: true });
          return h.svg(yk + 28, o, "Rajah kad matlamat kewangan dinilai mengikut lima kriteria SMART");
        }
        if (c.mod === "bajet") {
          var P = c.pendapatan, x0 = 10, lb = 240, skala = lb / P;
          o += teks(130, 16, "Pendapatan bersih " + rm(P) + " sebulan", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          var seg = [["keperluan", r.keperluan, "lembayungLembut", "ungu"], ["kehendak", r.kehendak, "merahLembut", "merah"], ["simpanan", r.simpanan, "hijauLembut", "hijau"]];
          var x = x0;
          seg.forEach(function (z) {
            var w = Math.min(z[1] * skala, x0 + lb - x);
            if (w > 0) o += h.kotak(x, 30, w, 30, { isi: z[2], garis: z[3], bulat: 0, tebal: 1.2 });
            x += z[1] * skala;
          });
          if (!r.defisit && r.baki > 0) o += h.kotak(x, 30, r.baki * skala, 30, { isi: "kuningLembut", garis: "kuning", bulat: 0, tebal: 1.2 });
          o += h.kotak(x0, 30, lb, 30, { garis: "tinta2", bulat: 4, tebal: 1.5 });
          var y3 = 84;
          c.keperluan.forEach(function (k, j) {
            o += teks(14, y3 + j * 15, k.n, { saiz: 11, warna: "tinta2" });
            o += teks(246, y3 + j * 15, rm(k.rm), { kanan: true, saiz: 11, warna: "tinta2" });
          });
          var y4 = y3 + c.keperluan.length * 15 + 8;
          var baris = [["Jumlah keperluan", rm(r.keperluan), "ungu"], ["Kehendak", rm(r.kehendak), "merah"], ["Simpanan", rm(r.simpanan) + " (" + r.peratusSimpan + "%)", "hijau"]];
          baris.forEach(function (z, j) { o += teks(8, y4 + j * 18, z[0], { saiz: 12, warna: z[2], tebal: true }); o += teks(250, y4 + j * 18, z[1], { kanan: true, saiz: 12, warna: z[2], tebal: true }); });
          var y5 = y4 + 3 * 18 + 6;
          o += teks(8, y5, r.defisit ? "Defisit" : "Lebihan", { saiz: 13, warna: r.defisit ? "merah" : "kuning", tebal: true, hasil: true });
          o += teks(250, y5, rm(Math.abs(r.baki)), { kanan: true, saiz: 13, warna: r.defisit ? "merah" : "kuning", tebal: true, hasil: true });
          o += teks(8, y5 + 22, c.matlamat.nama + " " + rm(c.matlamat.rm) + ":", { saiz: 11, warna: "tinta2" });
          o += teks(8, y5 + 38, r.bulan ? "dicapai dalam " + r.bulan + " bulan" : "tiada simpanan, tidak dicapai", { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          return h.svg(y5 + 48, o, "Rajah belanjawan bulanan dengan keperluan " + rm(r.keperluan) + ", kehendak " + rm(r.kehendak) + " dan simpanan " + rm(r.simpanan));
        }
        if (c.mod === "pelan") {
          var m2 = c.matlamat[s.m];
          o += teks(130, 16, m2.nama + ": " + rm(m2.rm), { tengah: true, saiz: 13, warna: "tinta", tebal: true });
          var sk = 240 / m2.rm, ws = c.sedia * sk;
          o += h.kotak(10, 30, 240, 26, { isi: "kertas2", garis: "tinta2", bulat: 6 });
          o += h.kotak(10, 30, ws, 26, { isi: "hijauLembut", garis: "hijau", bulat: 6 });
          o += teks(14, 48, "sedia " + rm(c.sedia), { saiz: 11, warna: "tinta", tebal: true });
          /* tanda setiap bulan simpanan */
          var langkahB = (m2.rm - c.sedia) / s.t * sk;
          for (var b = 1; b < s.t; b++) { var xb = 10 + ws + b * langkahB; if (s.t <= 24) o += h.garis(xb, 56, xb, 62, { warna: "tinta3", tebal: 1 }); }
          o += teks(250, 76, s.t + " bulan", { kanan: true, saiz: 11, warna: "tinta3" });
          var y6 = 104;
          o += teks(8, y6, "Baki yang diperlukan = " + rm(m2.rm) + " − " + rm(c.sedia), { saiz: 11, warna: "tinta2" });
          o += teks(8, y6 + 18, "= " + rm(m2.rm - c.sedia), { saiz: 12, warna: "tinta2" });
          o += teks(8, y6 + 40, "Simpanan sebulan = " + rm(r.bulanan), { saiz: 13, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, y6 + 60, "Kemampuan menyimpan: " + rm(c.mampu) + " sebulan", { saiz: 11, warna: "tinta2" });
          o += teks(8, y6 + 80, r.boleh ? "Boleh dilaksanakan ✓" : "Tidak boleh dilaksanakan ✗", { saiz: 13, warna: r.boleh ? "hijau" : "merah", tebal: true, hasil: true });
          o += teks(8, y6 + 100, "Tempoh: " + s.t + " bulan", { saiz: 11, warna: "tinta2" });
          return h.svg(y6 + 110, o, "Rajah pelan simpanan bagi " + m2.nama + " dalam " + s.t + " bulan dengan simpanan sedia ada " + rm(c.sedia));
        }
        /* aliran */
        var n = c.pendapatan.length, maks = Math.max.apply(null, r.semua.concat([c.belanja, 0]).map(Math.abs)), K = { x: 40, y: 34, w: 206, h: 130 };
        var bersihS = c.pendapatan.map(function (p) { return p - c.belanja; });
        var minK = Math.min.apply(null, r.semua.concat(bersihS, [0])), maksK = Math.max.apply(null, r.semua.concat(bersihS, [0]));
        var pad = Math.max(500, Math.ceil((maksK - minK) / 4 / 500) * 500), atas = Math.ceil(maksK / pad) * pad, bawah = Math.floor(minK / pad) * pad;
        if (atas === bawah) atas = bawah + pad;
        var py = function (v) { return K.y + K.h - (v - bawah) / (atas - bawah) * K.h; }, lbB = K.w / n;
        o += teks(130, 16, "Baki terkumpul dan bersih bulanan", { tengah: true, saiz: 11, warna: "tinta", tebal: true });
        for (var v = bawah; v <= atas + 1e-9; v += pad) {
          o += h.garis(K.x, py(v), K.x + K.w, py(v), { warna: v === 0 ? "tinta3" : "garis", tebal: v === 0 ? 1.5 : 0.6 });
          o += teks(K.x - 4, py(v) + 4, (v === 0 ? "0" : String(v / 1000).replace("-", "−") + "k"), { kanan: true, saiz: 11, warna: "tinta3" });
        }
        c.pendapatan.forEach(function (p, j) {
          var bersih = p - c.belanja, x1 = K.x + j * lbB + 3, y0 = py(0), y1 = py(bersih);
          o += h.kotak(x1, Math.min(y0, y1), lbB - 6, Math.max(1, Math.abs(y1 - y0)), { isi: bersih >= 0 ? "hijauLembut" : "merahLembut", garis: bersih >= 0 ? "hijau" : "merah", bulat: 1, tebal: j + 1 === s.b ? 2.2 : 1 });
          if ((j + 1) % 2 === 1) o += teks(K.x + j * lbB + lbB / 2, K.y + K.h + 14, String(j + 1), { tengah: true, saiz: 11, warna: "tinta3" });
        });
        var d = r.semua.map(function (v, j) { return (j ? "L" : "M") + b1(K.x + j * lbB + lbB / 2) + " " + b1(py(v)); }).join(" ");
        o += '<path d="' + d + '" fill="none" stroke="' + h.w("ungu") + '" stroke-width="2.4"></path>';
        o += '<circle cx="' + b1(K.x + (s.b - 1) * lbB + lbB / 2) + '" cy="' + b1(py(r.kumulatif)) + '" r="5" fill="' + h.w("merah") + '" stroke="' + h.w("kertas") + '" stroke-width="1.5"></circle>';
        o += teks(K.x + K.w, K.y + K.h + 28, "bulan", { kanan: true, saiz: 11, warna: "tinta3" });
        var y7 = 222;
        o += teks(8, y7, "Bulan " + r.bulan + ": pendapatan " + rm(r.pendapatan), { saiz: 12, warna: "tinta", tebal: true });
        o += teks(8, y7 + 18, "Perbelanjaan tetap " + rm(c.belanja), { saiz: 11, warna: "tinta2" });
        o += teks(8, y7 + 38, (r.bersih >= 0 ? "Lebihan " : "Defisit ") + rm(Math.abs(r.bersih)), { saiz: 12, warna: r.bersih >= 0 ? "hijau" : "merah", tebal: true, hasil: true });
        o += teks(8, y7 + 58, "Baki terkumpul = " + rm(r.kumulatif), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
        return h.svg(y7 + 68, o, "Rajah aliran tunai dua belas bulan; bulan " + r.bulan + " dipilih dengan baki terkumpul " + rm(r.kumulatif));
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
