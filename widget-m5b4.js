/* Widget Tingkatan 5 Bab 4 Matematik Pengguna: Percukaian. Widget `t5cukai`, enam mod:
   - jenis      : cip memilih jenis cukai; rajah menunjukkan pihak yang memungut dan asas pengiraan.
                  Spek: cukai [{t, pemungut, asas:[baris...]}].
   - pendapatan : jadual kadar cukai pendapatan berperingkat. Gelongsor pendapatan bercukai;
                  baris banjaran diserlahkan dan cukai = cukai atas banjaran bawah + kadar × lebihan.
                  Spek: banjaran [[had atas, kadar]...], ci [..].
   - pelepasan  : pendapatan tahunan − pelepasan = pendapatan bercukai → cukai → rebat → cukai kena bayar.
                  Gelongsor pendapatan dan bilangan anak. Spek: banjaran, pendapatan [..], individu,
                  kwspKadar, kwspHad, insurans, anak, rebat, hadRebat.
   - jalan      : cukai jalan kereta persendirian mengikut kapasiti enjin (cc). Spek: kadar [..], cc [..].
   - pintu      : cukai pintu = kadar × nilai tahunan (sewa bulanan × 12), dibayar dua kali setahun.
                  Gelongsor sewa; cip kadar. Spek: sewa [..], kadar [..].
   - bersama    : taksiran berasingan lawan taksiran bersama bagi pasangan suami isteri.
                  Spek: banjaran, individu, pasangan, rebat, hadRebat, gaji [..].
   Semua jadual ialah jadual contoh untuk pembelajaran. Unsur jawapan bertanda jmi-hasil. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;
    function rm(n) {
      var bulat = Math.abs(n - Math.round(n)) < 1e-9;
      var t = (bulat ? Math.round(n) : Math.round(n * 100) / 100).toFixed(bulat ? 0 : 2).split(".");
      return "RM" + t[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (t[1] ? "." + t[1] : "");
    }
    function bul2(n) { return Math.round(n * 100 + 1e-9) / 100; }
    function pc(r) { return String(Math.round(r * 10000) / 100) + "%"; }
    /* cukai berperingkat: banjaran [[hadAtas, kadar], ...] bermula dari 0 */
    function cukai(B, ci) {
      var t = 0, lo = 0, baris = -1, bawah = 0;
      B.forEach(function (b, i) { if (ci > lo) { t += (Math.min(ci, b[0]) - lo) * b[1]; if (ci <= b[0]) { baris = i; } } lo = b[0]; });
      if (baris < 0) baris = B.length - 1;
      lo = 0; for (var i = 0; i < baris; i++) { bawah += (B[i][0] - lo) * B[i][1]; lo = B[i][0]; }
      return { cukai: bul2(t), baris: baris, dari: baris ? B[baris - 1][0] : 0, bawah: bul2(bawah), kadar: B[baris][1] };
    }
    function jalan(K, cc) {
      for (var i = 0; i < K.length; i++) if (cc <= K[i].had) return { k: K[i], bayar: bul2(K[i].asas + (K[i].per ? K[i].per * (cc - K[i].dari) : 0)) };
      throw new Error("cc di luar jadual");
    }
    function lepas(c, gaji, anak) {
      var kwsp = Math.min(c.kwspHad, bul2(gaji * c.kwspKadar)), jum = c.individu + kwsp + c.insurans + anak * c.anak;
      var ci = Math.max(0, gaji - jum), t = cukai(c.banjaran, ci), rebat = ci <= c.hadRebat ? Math.min(c.rebat, t.cukai) : 0;
      return { kwsp: kwsp, jum: jum, ci: ci, t: t, rebat: rebat, bayar: bul2(t.cukai - rebat) };
    }
    function seorang(c, gaji) {
      var ci = Math.max(0, gaji - c.individu), t = cukai(c.banjaran, ci).cukai, rb = ci <= c.hadRebat ? Math.min(c.rebat, t) : 0;
      return { ci: ci, cukai: t, bayar: bul2(t - rb) };
    }

    var Wd = W.t5cukai = {
      mula: function (c) {
        if (c.mod === "pelepasan") return { g: c.gAwal || 0, a: 0 };
        if (c.mod === "pintu") return { s: c.sAwal || 0, k: 0 };
        if (c.mod === "bersama") return { s: c.sAwal || 0, i: c.iAwal || 0 };
        if (c.mod === "jenis") return { i: 0 };
        return { i: c.iAwal || 0 };
      },
      kawalan: function (c) {
        if (c.mod === "jenis") return [{ k: "i", label: "cukai", min: 0, maks: c.cukai.length - 1, teks: c.cukai.map(function (x) { return x.t; }), pilih: true }];
        if (c.mod === "pendapatan") return [{ k: "i", label: "pendapatan bercukai", min: 0, maks: c.ci.length - 1, teks: c.ci.map(rm) }];
        if (c.mod === "pelepasan") return [{ k: "g", label: "pendapatan tahunan", min: 0, maks: c.pendapatan.length - 1, teks: c.pendapatan.map(rm) }, { k: "a", label: "bilangan anak", min: 0, maks: 3, teks: ["0", "1", "2", "3"] }];
        if (c.mod === "jalan") return [{ k: "i", label: "kapasiti enjin", min: 0, maks: c.cc.length - 1, teks: c.cc.map(function (x) { return x + " cc"; }) }];
        if (c.mod === "pintu") return [{ k: "s", label: "sewa bulanan", min: 0, maks: c.sewa.length - 1, teks: c.sewa.map(rm) }, { k: "k", label: "kadar", min: 0, maks: c.kadar.length - 1, teks: c.kadar.map(function (x) { return x + "%"; }), pilih: true }];
        return [{ k: "s", label: "pendapatan suami", min: 0, maks: c.gaji.length - 1, teks: c.gaji.map(rm) }, { k: "i", label: "pendapatan isteri", min: 0, maks: c.gaji.length - 1, teks: c.gaji.map(rm) }];
      },
      kira: function (c, s) {
        if (c.mod === "jenis") return c.cukai[s.i];
        if (c.mod === "pendapatan") { var ci = c.ci[s.i]; var t = cukai(c.banjaran, ci); t.ci = ci; return t; }
        if (c.mod === "pelepasan") { var r = lepas(c, c.pendapatan[s.g], s.a); r.gaji = c.pendapatan[s.g]; r.anak = s.a; return r; }
        if (c.mod === "jalan") { var j = jalan(c.kadar, c.cc[s.i]); j.cc = c.cc[s.i]; return j; }
        if (c.mod === "pintu") { var sw = c.sewa[s.s], nt = sw * 12, kd = c.kadar[s.k], cp = bul2(nt * kd / 100); return { sewa: sw, nt: nt, kadar: kd, cukai: cp, separuh: bul2(cp / 2) }; }
        var gs = c.gaji[s.s], gi = c.gaji[s.i], A = seorang(c, gs), B = seorang(c, gi);
        var ciB = Math.max(0, gs + gi - c.individu - c.pasangan), tB = cukai(c.banjaran, ciB).cukai, rbB = ciB <= c.hadRebat ? Math.min(2 * c.rebat, tB) : 0;
        return { A: A, B: B, asing: bul2(A.bayar + B.bayar), ciB: ciB, cukaiB: tB, bersama: bul2(tB - rbB) };
      },
      lukis: function (c, s) {
        var r = Wd.kira(c, s), o = "";
        if (c.mod === "jenis") {
          o += teks(130, 18, r.t, { tengah: true, saiz: 13, warna: "tinta", tebal: true });
          o += teks(8, 44, "Dipungut oleh:", { saiz: 11, warna: "tinta3" });
          o += teks(8, 62, r.pemungut, { saiz: 12, warna: "merah", tebal: true, hasil: true });
          o += teks(8, 88, "Asas pengiraan:", { saiz: 11, warna: "tinta3" });
          r.asas.forEach(function (b, i) { o += teks(8, 106 + i * 17, b, { saiz: 11, warna: "tinta2", hasil: i === 0 }); });
          return h.svg(112 + r.asas.length * 17, o, r.t + " dipungut oleh " + r.pemungut + "; " + r.asas.join(" "));
        }
        if (c.mod === "pendapatan") {
          o += teks(130, 16, "Jadual kadar cukai (contoh)", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          var y0 = 38, lo = 0;
          o += teks(10, y0, "Banjaran (RM)", { saiz: 11, warna: "tinta3", tebal: true }) + teks(250, y0, "Kadar", { kanan: true, saiz: 11, warna: "tinta3", tebal: true });
          c.banjaran.forEach(function (b, i) {
            var yy = y0 + 18 + i * 17, on = i === r.baris;
            if (on) o += h.kotak(4, yy - 12, 252, 16, { isi: "kuningLembut", garis: "kuning", bulat: 4 });
            o += teks(10, yy, rm(lo + (lo ? 1 : 0)).replace("RM", "") + " – " + rm(b[0]).replace("RM", ""), { saiz: 11, warna: on ? "tinta" : "tinta2", tebal: on });
            o += teks(250, yy, pc(b[1]), { kanan: true, saiz: 11, warna: on ? "tinta" : "tinta2", tebal: on });
            lo = b[0];
          });
          var yb = y0 + 18 + c.banjaran.length * 17 + 10;
          o += teks(8, yb, "Pendapatan bercukai = " + rm(r.ci), { saiz: 12, warna: "tinta2" });
          o += teks(8, yb + 20, "Cukai atas " + rm(r.dari) + " pertama = " + rm(r.bawah), { saiz: 11, warna: "tinta2", hasil: true });
          o += teks(8, yb + 38, "Baki " + rm(r.ci - r.dari) + " × " + pc(r.kadar) + " = " + rm(bul2((r.ci - r.dari) * r.kadar)), { saiz: 11, warna: "tinta2", hasil: true });
          o += teks(8, yb + 60, "Cukai pendapatan = " + rm(r.cukai), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          return h.svg(yb + 70, o, "Jadual kadar cukai pendapatan; pendapatan bercukai " + rm(r.ci) + ", cukai " + rm(r.cukai));
        }
        if (c.mod === "pelepasan") {
          o += teks(8, 18, "Pendapatan tahunan", { saiz: 12, warna: "tinta2" }) + teks(252, 18, rm(r.gaji), { kanan: true, saiz: 12, warna: "tinta", tebal: true });
          var bar = [["Pelepasan individu", c.individu], ["KWSP (" + pc(c.kwspKadar) + ", had " + rm(c.kwspHad) + ")", r.kwsp], ["Insurans hayat", c.insurans], ["Anak × " + r.anak, r.anak * c.anak]];
          bar.forEach(function (b, i) { o += teks(8, 40 + i * 17, "− " + b[0], { saiz: 11, warna: "tinta3" }) + teks(252, 40 + i * 17, rm(b[1]), { kanan: true, saiz: 11, warna: "tinta2" }); });
          var y1 = 40 + 4 * 17 + 4;
          o += h.garis(8, y1 - 8, 252, y1 - 8, { warna: "garis2", tebal: 1 });
          o += teks(8, y1 + 8, "Pendapatan bercukai", { saiz: 12, warna: "ungu", tebal: true }) + teks(252, y1 + 8, rm(r.ci), { kanan: true, saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, y1 + 30, "Cukai = " + rm(r.t.bawah) + " + " + pc(r.t.kadar) + " × " + rm(r.ci - r.t.dari), { saiz: 11, warna: "tinta2" });
          o += teks(252, y1 + 48, rm(r.t.cukai), { kanan: true, saiz: 12, warna: "tinta2", hasil: true });
          o += teks(8, y1 + 66, "− Rebat" + (r.ci <= c.hadRebat ? " (bercukai ≤ " + rm(c.hadRebat) + ")" : " (tidak layak)"), { saiz: 11, warna: "tinta3" }) + teks(252, y1 + 66, rm(r.rebat), { kanan: true, saiz: 11, warna: "hijau", hasil: true });
          o += teks(8, y1 + 90, "Cukai kena bayar", { saiz: 13, warna: "merah", tebal: true }) + teks(252, y1 + 90, rm(r.bayar), { kanan: true, saiz: 13, warna: "merah", tebal: true, hasil: true });
          o += teks(8, y1 + 110, "PCB sebulan ≈ " + rm(bul2(r.bayar / 12)), { saiz: 11, warna: "tinta3", hasil: true });
          return h.svg(y1 + 120, o, "Pengiraan cukai pendapatan: pendapatan " + rm(r.gaji) + ", pelepasan " + rm(r.jum) + ", pendapatan bercukai " + rm(r.ci) + ", cukai kena bayar " + rm(r.bayar));
        }
        if (c.mod === "jalan") {
          o += teks(130, 16, "Cukai jalan kereta (jadual contoh)", { tengah: true, saiz: 11, warna: "tinta", tebal: true });
          c.kadar.forEach(function (k, i) {
            var yy = 38 + i * 17, on = k === r.k;
            if (on) o += h.kotak(4, yy - 12, 252, 16, { isi: "kuningLembut", garis: "kuning", bulat: 4 });
            o += teks(10, yy, k.label, { saiz: 11, warna: on ? "tinta" : "tinta2", tebal: on });
            o += teks(250, yy, k.per ? rm(k.asas) + " + " + (k.per * 100) + " sen/cc" : rm(k.asas), { kanan: true, saiz: 11, warna: on ? "tinta" : "tinta2", tebal: on });
          });
          var y2 = 38 + c.kadar.length * 17 + 12;
          o += teks(8, y2, "Kapasiti enjin = " + r.cc + " cc", { saiz: 12, warna: "tinta2" });
          if (r.k.per) o += teks(8, y2 + 20, rm(r.k.asas) + " + " + rm(r.k.per) + " × (" + r.cc + " − " + r.k.dari + ")", { saiz: 11, warna: "tinta2" });
          o += teks(8, y2 + 42, "Cukai jalan setahun = " + rm(r.bayar), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          return h.svg(y2 + 52, o, "Jadual cukai jalan; kereta " + r.cc + " cc, cukai jalan " + rm(r.bayar));
        }
        if (c.mod === "pintu") {
          o += teks(130, 16, "Cukai pintu (cukai taksiran)", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += teks(8, 42, "Sewa bulanan anggaran = " + rm(r.sewa), { saiz: 12, warna: "tinta2" });
          o += teks(8, 62, "Nilai tahunan = " + rm(r.sewa) + " × 12", { saiz: 12, warna: "tinta2" });
          o += teks(8, 80, "= " + rm(r.nt), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, 104, "Cukai pintu = " + r.kadar + "% × " + rm(r.nt), { saiz: 12, warna: "tinta2" });
          o += teks(8, 124, "= " + rm(r.cukai) + " setahun", { saiz: 13, warna: "merah", tebal: true, hasil: true });
          o += teks(8, 148, "Dibayar dua kali setahun:", { saiz: 11, warna: "tinta3" });
          o += teks(8, 166, rm(r.separuh) + " (Februari) + " + rm(r.separuh) + " (Ogos)", { saiz: 11, warna: "hijau", tebal: true, hasil: true });
          return h.svg(176, o, "Cukai pintu: sewa bulanan " + rm(r.sewa) + ", nilai tahunan " + rm(r.nt) + ", kadar " + r.kadar + " peratus, cukai " + rm(r.cukai) + " setahun");
        }
        o += teks(130, 16, "Berasingan atau bersama?", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        o += teks(8, 40, "Taksiran berasingan", { saiz: 12, warna: "ungu", tebal: true });
        o += teks(8, 58, "Suami: bercukai " + rm(r.A.ci) + " → " + rm(r.A.bayar), { saiz: 11, warna: "tinta2", hasil: true });
        o += teks(8, 74, "Isteri: bercukai " + rm(r.B.ci) + " → " + rm(r.B.bayar), { saiz: 11, warna: "tinta2", hasil: true });
        o += teks(8, 94, "Jumlah = " + rm(r.asing), { saiz: 13, warna: "ungu", tebal: true, hasil: true });
        o += teks(8, 124, "Taksiran bersama", { saiz: 12, warna: "hijau", tebal: true });
        o += teks(8, 142, "Gabungan − " + rm(c.individu) + " − " + rm(c.pasangan), { saiz: 11, warna: "tinta3" });
        o += teks(8, 158, "Bercukai " + rm(r.ciB) + " → cukai " + rm(r.cukaiB), { saiz: 11, warna: "tinta2", hasil: true });
        o += teks(8, 178, "Jumlah = " + rm(r.bersama), { saiz: 13, warna: "hijau", tebal: true, hasil: true });
        var lebih = r.asing < r.bersama ? "Berasingan" : r.bersama < r.asing ? "Bersama" : "Sama";
        o += teks(8, 206, lebih === "Sama" ? "Kedua-dua kaedah sama" : lebih + " lebih rendah " + rm(Math.abs(r.asing - r.bersama)), { saiz: 12, warna: "merah", tebal: true, hasil: true });
        return h.svg(216, o, "Perbandingan taksiran berasingan " + rm(r.asing) + " dan taksiran bersama " + rm(r.bersama));
      }
    };
    Wd.cukai = cukai;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
