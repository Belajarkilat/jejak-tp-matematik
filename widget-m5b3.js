/* Widget Tingkatan 5 Bab 3 Matematik Pengguna: Insurans. Widget `t5insurans`, enam mod:
   - jenis    : cip memilih satu risiko; rajah menunjukkan jenis insurans yang sesuai, sama ada
                insurans hayat atau insurans am, dan siapa menanggung kerugian.
                Spek: risiko [{t, insurans, kelas:"hayat"|"am", nota}].
   - hayat    : jadual kadar premium tahunan bagi setiap RM1 000 nilai muka. Cip memilih kategori,
                gelongsor memilih umur dan nilai muka. Premium = nilai muka ÷ 1 000 × kadar.
                Spek: umur [..], kategori [..], kadar [kategori][umur], nilai [..].
   - motor    : premium polisi komprehensif: RM asas bagi RM1 000 pertama + kadar bagi setiap
                RM1 000 berikutnya, ditolak diskaun tanpa tuntutan (NCD).
                Spek: asas, tambahan, nilai [..], ncd [..] (peratus).
   - deduktibel : gelongsor kerugian; pampasan = kerugian − deduktibel (sifar jika kerugian ≤ deduktibel).
                Spek: D, rugi [..].
   - koinsurans : harta. Jumlah insurans yang harus dibeli = p% × nilai harta. Jika kurang,
                pampasan = (dibeli ÷ harus dibeli) × kerugian − deduktibel.
                Spek: nilai, p, D, beli [..], rugi [..].
   - banding  : dua polisi perubatan (deduktibel dan ko-insurans x/y). Gelongsor kos rawatan;
                bayaran sendiri = deduktibel + y% × (kos − deduktibel). Spek: polisi [{nama, D, s, premium}], kos [..].
   Semua nilai dikira daripada spek. Unsur jawapan bertanda jmi-hasil. */
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
    function bar(x, y, lebar, nisbah, warna) {
      return h.kotak(x, y, lebar, 14, { garis: "garis2", bulat: 7 }) + (nisbah > 0 ? h.kotak(x, y, Math.max(8, lebar * Math.min(1, nisbah)), 14, { isi: warna + "Lembut", garis: warna, bulat: 7 }) : "");
    }

    var Wd = W.t5insurans = {
      mula: function (c) {
        if (c.mod === "hayat") return { k: 0, u: c.uAwal || 0, v: c.vAwal || 0 };
        if (c.mod === "motor") return { v: c.vAwal || 0, n: 0 };
        if (c.mod === "koinsurans") return { b: c.bAwal || 0, r: c.rAwal || 0 };
        if (c.mod === "deduktibel" || c.mod === "banding") return { r: c.rAwal || 0 };
        return { i: 0 };
      },
      kawalan: function (c) {
        if (c.mod === "jenis") return [{ k: "i", label: "risiko", min: 0, maks: c.risiko.length - 1, teks: c.risiko.map(function (r) { return r.t; }), pilih: true }];
        if (c.mod === "hayat") return [
          { k: "k", label: "kategori", min: 0, maks: c.kategori.length - 1, teks: c.kategori, pilih: true },
          { k: "u", label: "umur", min: 0, maks: c.umur.length - 1, teks: c.umur.map(String) },
          { k: "v", label: "nilai muka", min: 0, maks: c.nilai.length - 1, teks: c.nilai.map(rm) }];
        if (c.mod === "motor") return [
          { k: "v", label: "nilai kereta", min: 0, maks: c.nilai.length - 1, teks: c.nilai.map(rm) },
          { k: "n", label: "NCD", min: 0, maks: c.ncd.length - 1, teks: c.ncd.map(function (p) { return p + "%"; }), pilih: true }];
        if (c.mod === "koinsurans") return [
          { k: "b", label: "insurans dibeli", min: 0, maks: c.beli.length - 1, teks: c.beli.map(rm) },
          { k: "r", label: "kerugian", min: 0, maks: c.rugi.length - 1, teks: c.rugi.map(rm) }];
        if (c.mod === "deduktibel") return [{ k: "r", label: "kerugian", min: 0, maks: c.rugi.length - 1, teks: c.rugi.map(rm) }];
        return [{ k: "r", label: "kos rawatan", min: 0, maks: c.kos.length - 1, teks: c.kos.map(rm) }];
      },
      kira: function (c, s) {
        if (c.mod === "jenis") return c.risiko[s.i];
        if (c.mod === "hayat") { var kd = c.kadar[s.k][s.u], nm = c.nilai[s.v]; return { kadar: kd, nilai: nm, premium: bul2(nm / 1000 * kd) }; }
        if (c.mod === "motor") {
          var nv = c.nilai[s.v], kasar = bul2(c.asas + c.tambahan * (nv - 1000) / 1000), p = c.ncd[s.n], diskaun = bul2(kasar * p / 100);
          return { nilai: nv, kasar: kasar, ncd: p, diskaun: diskaun, bersih: bul2(kasar - diskaun) };
        }
        if (c.mod === "deduktibel") { var rg = c.rugi[s.r]; return { rugi: rg, bayar: Math.max(0, rg - c.D), sendiri: Math.min(rg, c.D) }; }
        if (c.mod === "koinsurans") {
          var harus = c.nilai * c.p / 100, beli = c.beli[s.b], rugi = c.rugi[s.r], cukup = beli >= harus;
          var pampas = cukup ? Math.max(0, rugi - c.D) : Math.max(0, bul2(beli / harus * rugi - c.D));
          pampas = Math.min(pampas, beli);
          return { harus: harus, beli: beli, rugi: rugi, cukup: cukup, pampas: pampas, tanggung: bul2(rugi - pampas) };
        }
        var kos = c.kos[s.r];
        return { kos: kos, polisi: c.polisi.map(function (p) { var baki = Math.max(0, kos - p.D), sendiri = Math.min(kos, p.D) + bul2(baki * p.s / 100); return { sendiri: bul2(sendiri), syarikat: bul2(kos - sendiri), jumlah: bul2(sendiri + p.premium) }; }) };
      },
      lukis: function (c, s) {
        var r = Wd.kira(c, s), o = "";
        if (c.mod === "jenis") {
          o += teks(130, 18, "Risiko: " + r.t, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += h.kotak(20, 34, 100, 46, { isi: r.kelas === "hayat" ? "lembayungLembut" : "kertas2", garis: r.kelas === "hayat" ? "ungu" : "garis2", bulat: 10 });
          o += h.kotak(140, 34, 100, 46, { isi: r.kelas === "am" ? "hijauLembut" : "kertas2", garis: r.kelas === "am" ? "hijau" : "garis2", bulat: 10 });
          o += teks(70, 54, "Insurans", { tengah: true, saiz: 11, warna: r.kelas === "hayat" ? "ungu" : "tinta3", tebal: r.kelas === "hayat" });
          o += teks(70, 70, "hayat", { tengah: true, saiz: 12, warna: r.kelas === "hayat" ? "ungu" : "tinta3", tebal: r.kelas === "hayat" });
          o += teks(190, 54, "Insurans", { tengah: true, saiz: 11, warna: r.kelas === "am" ? "hijau" : "tinta3", tebal: r.kelas === "am" });
          o += teks(190, 70, "am", { tengah: true, saiz: 12, warna: r.kelas === "am" ? "hijau" : "tinta3", tebal: r.kelas === "am" });
          o += teks(8, 108, "Polisi yang sesuai:", { saiz: 11, warna: "tinta3" });
          o += teks(8, 128, r.insurans, { saiz: 13, warna: "merah", tebal: true, hasil: true });
          r.nota.forEach(function (b, i) { o += teks(8, 152 + i * 16, b, { saiz: 11, warna: "tinta2" }); });
          return h.svg(158 + r.nota.length * 16, o, "Risiko " + r.t + " dilindungi oleh " + r.insurans + ", iaitu insurans " + r.kelas);
        }
        if (c.mod === "hayat") {
          o += teks(130, 16, "Kadar premium tahunan / RM1 000", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += teks(130, 32, c.kategori[s.k], { tengah: true, saiz: 11, warna: "ungu", tebal: true });
          var y0 = 52, xs = [60, 150];
          o += teks(xs[0], y0, "Umur", { tengah: true, saiz: 11, warna: "tinta3", tebal: true }) + teks(xs[1], y0, "Kadar (RM)", { tengah: true, saiz: 11, warna: "tinta3", tebal: true });
          c.umur.forEach(function (u, i) {
            var yy = y0 + 20 + i * 19, on = i === s.u;
            if (on) o += h.kotak(24, yy - 13, 212, 18, { isi: "kuningLembut", garis: "kuning", bulat: 5 });
            o += teks(xs[0], yy, String(u), { tengah: true, saiz: 12, warna: on ? "tinta" : "tinta2", tebal: on });
            o += teks(xs[1], yy, c.kadar[s.k][i].toFixed(2), { tengah: true, saiz: 12, warna: on ? "tinta" : "tinta2", tebal: on });
          });
          var yb = y0 + 20 + c.umur.length * 19 + 14;
          o += teks(8, yb, "Nilai muka = " + rm(r.nilai), { saiz: 12, warna: "tinta2" });
          o += teks(8, yb + 20, "Premium = " + rm(r.nilai).replace("RM", "") + " ÷ 1 000 × " + r.kadar.toFixed(2), { saiz: 12, warna: "tinta2" });
          o += teks(8, yb + 42, "Premium tahunan = " + rm(r.premium), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          return h.svg(yb + 52, o, "Jadual kadar premium insurans hayat bagi " + c.kategori[s.k] + "; umur " + c.umur[s.u] + ", nilai muka " + rm(r.nilai) + ", premium tahunan " + rm(r.premium));
        }
        if (c.mod === "motor") {
          o += teks(130, 16, "Polisi komprehensif (jadual contoh)", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += teks(8, 40, "RM1 000 pertama: " + rm(c.asas), { saiz: 11, warna: "tinta3" });
          o += teks(8, 56, "Setiap RM1 000 berikutnya: " + rm(c.tambahan), { saiz: 11, warna: "tinta3" });
          o += teks(8, 82, "Nilai kereta = " + rm(r.nilai), { saiz: 12, warna: "tinta2" });
          o += teks(8, 102, rm(c.asas) + " + " + ((r.nilai - 1000) / 1000) + " × " + rm(c.tambahan), { saiz: 12, warna: "tinta2" });
          o += teks(8, 122, "Premium asas = " + rm(r.kasar), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, 146, "NCD " + r.ncd + "% = " + rm(r.diskaun), { saiz: 12, warna: "hijau", tebal: true, hasil: true });
          o += teks(8, 170, "Premium kena bayar = " + rm(r.bersih), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          o += bar(8, 184, 244, r.bersih / r.kasar, "merah");
          return h.svg(208, o, "Premium motor komprehensif bagi kereta bernilai " + rm(r.nilai) + " dengan NCD " + r.ncd + " peratus: premium asas " + rm(r.kasar) + ", premium kena bayar " + rm(r.bersih));
        }
        if (c.mod === "deduktibel") {
          o += teks(130, 16, "Deduktibel " + rm(c.D), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          var maks = Math.max.apply(null, c.rugi), L = 244;
          o += teks(8, 42, "Kerugian " + rm(r.rugi), { saiz: 12, warna: "tinta2" });
          o += h.kotak(8, 50, L * r.rugi / maks, 16, { isi: "kertas2", garis: "garis2", bulat: 4 });
          o += h.kotak(8, 50, L * r.sendiri / maks, 16, { isi: "kuningLembut", garis: "kuning", bulat: 4 });
          if (r.bayar > 0) o += h.kotak(8 + L * r.sendiri / maks, 50, L * r.bayar / maks, 16, { isi: "hijauLembut", garis: "hijau", bulat: 4 });
          o += teks(8, 92, "Ditanggung sendiri = " + rm(r.sendiri), { saiz: 12, warna: "kuning", tebal: true, hasil: true });
          o += teks(8, 112, "Pampasan syarikat = " + rm(r.bayar), { saiz: 13, warna: "hijau", tebal: true, hasil: true });
          o += teks(8, 134, r.bayar > 0 ? "= " + rm(r.rugi) + " − " + rm(c.D) : "Kerugian ≤ deduktibel: tiada tuntutan", { saiz: 11, warna: "tinta3" });
          return h.svg(144, o, "Deduktibel " + rm(c.D) + ", kerugian " + rm(r.rugi) + ", pampasan " + rm(r.bayar));
        }
        if (c.mod === "koinsurans") {
          o += teks(130, 16, "Harta " + rm(c.nilai) + ", ko-insurans " + c.p + "%", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += teks(8, 40, "Harus dibeli = " + c.p + "% × nilai harta", { saiz: 11, warna: "tinta3" });
          o += teks(8, 56, "= " + rm(r.harus), { saiz: 12, warna: "tinta2", tebal: true, hasil: true });
          o += teks(8, 78, "Dibeli = " + rm(r.beli) + (r.cukup ? "  (cukup)" : "  (kurang)"), { saiz: 12, warna: r.cukup ? "hijau" : "merah", tebal: true, hasil: true });
          o += bar(8, 86, 244, r.beli / r.harus, r.cukup ? "hijau" : "merah");
          o += teks(8, 118, "Kerugian = " + rm(r.rugi), { saiz: 11, warna: "tinta2" });
          o += teks(8, 134, "Deduktibel = " + rm(c.D), { saiz: 11, warna: "tinta2" });
          if (r.cukup) o += teks(8, 154, rm(r.rugi) + " − " + rm(c.D), { saiz: 12, warna: "tinta2" });
          else o += teks(8, 154, rm(r.beli).replace("RM", "") + "/" + rm(r.harus).replace("RM", "") + " × " + rm(r.rugi) + " − " + rm(c.D), { saiz: 11, warna: "tinta2" });
          o += teks(8, 176, "Pampasan = " + rm(r.pampas), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          o += teks(8, 196, "Ditanggung pemilik = " + rm(r.tanggung), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          return h.svg(206, o, "Ko-insurans harta: harus dibeli " + rm(r.harus) + ", dibeli " + rm(r.beli) + ", kerugian " + rm(r.rugi) + ", pampasan " + rm(r.pampas));
        }
        o += teks(130, 16, "Kos rawatan = " + rm(r.kos), { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        c.polisi.forEach(function (p, i) {
          var y = 40 + i * 90, q = r.polisi[i], war = i ? "hijau" : "ungu";
          o += teks(8, y, p.nama, { saiz: 12, warna: war, tebal: true });
          o += teks(8, y + 16, "Deduktibel " + rm(p.D) + ", ko-insurans " + (100 - p.s) + "/" + p.s, { saiz: 11, warna: "tinta3" });
          o += teks(8, y + 32, "Premium setahun " + rm(p.premium), { saiz: 11, warna: "tinta3" });
          o += teks(8, y + 50, "Bayaran sendiri = " + rm(q.sendiri), { saiz: 12, warna: "merah", tebal: true, hasil: true });
          o += teks(8, y + 66, "Syarikat bayar = " + rm(q.syarikat), { saiz: 11, warna: war, hasil: true });
        });
        return h.svg(40 + c.polisi.length * 90 - 14, o, "Perbandingan dua polisi perubatan bagi kos rawatan " + rm(r.kos) + ": bayaran sendiri " + r.polisi.map(function (q) { return rm(q.sendiri); }).join(" dan "));
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
