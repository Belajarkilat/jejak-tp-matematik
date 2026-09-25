"""Tampalan sekali guna: tulis semula pelukis widget interaktif dengan indeks berasingan.
Sudah dijalankan pada 25 Sep 2026; disimpan sebagai rekod perubahan sahaja."""
p = 'interaktif.js'
s = open(p, encoding='utf-8').read()

def antara(mula, akhir):
    return s[s.index(mula):s.index(akhir)]

# 1. rm() dan ungkap()
a = antara('  function rm(n) {', '  /* ---------- nombor perpuluhan tepat')
b = '''  function rm(n) {
    var bulat = Math.abs(n - Math.round(n)) < 1e-9;
    var t = (bulat ? Math.round(n) : Math.round(n * 100) / 100).toFixed(bulat ? 0 : 2).split(".");
    return "RM" + t[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, " ") + (t[1] ? "." + t[1] : "");
  }

  /* Ungkapan berpangkat: asas dan indeks dilukis sebagai dua teks berasingan
     (indeks 11px, dinaikkan 6px). Huruf superskrip Unicode dalam DM Mono jatuh
     kembali kepada fon lain dan menjadi terlalu kecil untuk dibaca pada telefon.
     Segmen: "teks" = teks biasa, {p:"m + n"} = indeks bagi segmen sebelumnya. */
  function ungkap(cx, y, segs, o) {
    o = o || {};
    var sz = o.saiz || 13, esz = 11, lb = function (t, z) { return String(t).length * z * 0.6; };
    var jum = 0, i;
    for (i = 0; i < segs.length; i++) jum += typeof segs[i] === "string" ? lb(segs[i], sz) : lb(segs[i].p, esz);
    var x = cx - jum / 2, out = "";
    for (i = 0; i < segs.length; i++) {
      if (typeof segs[i] === "string") { out += teks(x, y, segs[i], { saiz: sz, warna: o.warna || "tinta", tebal: o.tebal }); x += lb(segs[i], sz); }
      else { out += teks(x, y - 6, segs[i].p, { saiz: esz, warna: o.warna || "tinta", tebal: o.tebal }); x += lb(segs[i].p, esz); }
    }
    return out;
  }

'''
s = s.replace(a, b)

# 2. kuasa
a = antara('  W.kuasa = {', '  /* 2. lipat')
b = '''  W.kuasa = {
    mula: function (c) { return { n: c.n || 3 }; },
    kawalan: function (c) { return [{ k: "n", label: "n", min: c.nMin || 1, maks: c.nMaks || 6 }]; },
    kira: function (c, s) { return { nilai: Math.pow(c.asas, s.n) }; },
    lukis: function (c, s) {
      var a = c.asas, n = s.n, nilai = Math.pow(a, n);
      var isi = ungkap(LEBAR / 2, 24, [String(a), { p: String(n) }, n <= 4 ? " = " + Array(n).fill(a).join(" × ") : " = " + a + " × ... × " + a], { saiz: 14, tebal: true });
      isi += teks(LEBAR / 2, 46, "= " + nilai.toLocaleString("en-US").replace(/,/g, " ") + " blok", { tengah: true, saiz: 14, warna: "ungu", tebal: true });
      var tunjuk = Math.min(nilai, 81), lajur = Math.ceil(Math.sqrt(tunjuk * 1.6));
      var saiz = Math.min(16, Math.floor(220 / lajur)), baris = Math.ceil(tunjuk / lajur);
      var x0 = (LEBAR - lajur * saiz) / 2, y0 = 60;
      for (var k = 0; k < tunjuk; k++) {
        var kumpul = Math.floor(k / a) % 2 === 0;
        isi += kotak(x0 + (k % lajur) * saiz + 1, y0 + Math.floor(k / lajur) * saiz + 1, saiz - 2, saiz - 2,
          { isi: kumpul ? "lembayungLembut" : "hijauLembut", garis: kumpul ? "ungu" : "hijau", bulat: 2, tebal: 1 });
      }
      var bawah = y0 + baris * saiz;
      if (nilai > 81) isi += teks(LEBAR / 2, bawah + 16, "(81 blok pertama sahaja)", { tengah: true, saiz: 11 });
      return svg(bawah + (nilai > 81 ? 26 : 12), isi, "Rajah " + a + " kuasa " + n + " sebagai " + nilai + " blok, dengan pendaraban berulang");
    }
  };

'''
s = s.replace(a, b)

# 3. lipat
a = antara('  W.lipat = {', '  /* 3. hukum')
b = '''  W.lipat = {
    mula: function (c) { return { n: c.n || 0 }; },
    kawalan: function (c) { return [{ k: "n", label: "lipatan", min: 0, maks: c.nMaks || 6, butang: true }]; },
    kira: function (c, s) { var l = Math.pow(2, s.n); return { lapisan: l, tebal: +(l * c.tebal).toFixed(4) }; },
    lukis: function (c, s) {
      var r = this.kira(c, s), lap = r.lapisan;
      var isi = teks(LEBAR / 2, 18, "Lipatan: " + s.n, { tengah: true, saiz: 13, warna: "tinta", tebal: true });
      isi += ungkap(LEBAR / 2, 38, ["Lapisan: 2", { p: String(s.n) }, " = " + lap], { saiz: 13, warna: "ungu", tebal: true });
      var lebarK = Math.max(28, 200 / Math.pow(1.35, s.n)), x = (LEBAR - lebarK) / 2;
      var lukisLap = Math.min(lap, 32), tinggiL = Math.min(5, 100 / lukisLap);
      for (var i = 0; i < lukisLap; i++)
        isi += kotak(x, 156 - (i + 1) * tinggiL, lebarK, tinggiL, { isi: i % 2 ? "kuningLembut" : "kertas", garis: "kuning", bulat: 1, tebal: 0.8 });
      isi += garis(20, 156, 240, 156, { warna: "tinta3", tebal: 1.2 });
      isi += teks(LEBAR / 2, 176, "Tebal: " + lap + " × " + c.tebal + " mm = " + r.tebal + " mm", { tengah: true, saiz: 12, warna: "ungu", tebal: true });
      if (lap > 32) isi += teks(LEBAR / 2, 192, "(32 lapisan pertama dilukis)", { tengah: true, saiz: 11 });
      return svg(lap > 32 ? 200 : 186, isi, "Rajah kertas dilipat " + s.n + " kali menjadi " + lap + " lapisan setebal " + r.tebal + " milimeter");
    }
  };

'''
s = s.replace(a, b)

# 4. hukum
a = antara('  W.hukum = {', '  /* 4. piawai')
b = '''  W.hukum = {
    mula: function (c) { return { m: c.m || 4, n: c.n || 2 }; },
    kawalan: function (c) {
      return [{ k: "m", label: "m", min: 1, maks: c.mMaks || 6 }, { k: "n", label: "n", min: 1, maks: c.nMaks || (c.mod === "kuasa" ? 3 : 5) }];
    },
    kira: function (c, s) {
      var e = c.mod === "darab" ? s.m + s.n : c.mod === "bahagi" ? s.m - s.n : s.m * s.n;
      return { indeks: e };
    },
    lukis: function (c, s) {
      var a = c.asas || "a", r = this.kira(c, s), isi = "", t = 26, sz = 26, y;
      var jubin = function (x, y, lbl, gaya) {
        return kotak(x, y, sz, sz, { isi: gaya === "potong" ? "kertas2" : gaya === "b" ? "hijauLembut" : "lembayungLembut", garis: gaya === "potong" ? "tinta3" : gaya === "b" ? "hijau" : "ungu", bulat: 5 }) +
          teks(x + sz / 2, y + sz / 2 + 4, lbl, { tengah: true, saiz: 12, warna: gaya === "potong" ? "tinta3" : "tinta", tebal: true }) +
          (gaya === "potong" ? garis(x + 4, y + sz - 4, x + sz - 4, y + 4, { warna: "merah", tebal: 2 }) : "");
      };
      var baris = function (bil, y, gaya, potongDari) {
        var o = "", x0 = (LEBAR - bil * (sz + 4)) / 2;
        for (var i = 0; i < bil; i++) o += jubin(x0 + i * (sz + 4), y, a, potongDari != null && i >= potongDari ? "potong" : gaya);
        return o;
      };
      var K = function (x) { return { p: String(x) }; };
      if (c.mod === "darab") {
        isi += ungkap(LEBAR / 2, 20, [a, K(s.m), " × " + a, K(s.n)], { saiz: 14, tebal: true });
        isi += baris(s.m, t, "a") + baris(s.n, t + sz + 8, "b");
        y = t + 2 * sz + 34;
        isi += ungkap(LEBAR / 2, y, ["= " + a, K(s.m + " + " + s.n), " = " + a, K(r.indeks)], { saiz: 14, warna: "ungu", tebal: true });
      } else if (c.mod === "bahagi") {
        isi += ungkap(LEBAR / 2, 20, [a, K(s.m), " ÷ " + a, K(s.n)], { saiz: 14, tebal: true });
        var batal = Math.min(s.n, s.m);
        isi += baris(s.m, t, "a", s.m - batal) + garis(40, t + sz + 5, 220, t + sz + 5, { warna: "tinta2", tebal: 1.5 });
        isi += baris(s.n, t + sz + 10, "b", s.n - batal);
        y = t + 2 * sz + 36;
        var hasilB = ["= " + a, K(s.m + " − " + s.n), " = " + a, K(r.indeks)];
        if (r.indeks === 0) hasilB.push(" = 1");
        isi += ungkap(LEBAR / 2, y, hasilB, { saiz: 14, warna: r.indeks < 0 ? "merah" : "ungu", tebal: true });
      } else {
        isi += ungkap(LEBAR / 2, 20, ["(" + a, K(s.m), ")", K(s.n)], { saiz: 14, tebal: true });
        isi += teks(LEBAR / 2, 40, s.n + " kumpulan, setiap kumpulan " + s.m + " faktor " + a, { tengah: true, saiz: 11 });
        for (var g = 0; g < s.n; g++) isi += baris(s.m, 48 + g * (sz + 6), g % 2 ? "b" : "a");
        y = 48 + s.n * (sz + 6) + 22;
        isi += ungkap(LEBAR / 2, y, ["= " + a, K(s.m + " × " + s.n), " = " + a, K(r.indeks)], { saiz: 14, warna: "ungu", tebal: true });
      }
      return svg(y + 12, isi, "Rajah jubin faktor " + a + " bagi hukum indeks " + c.mod + " dengan m sama dengan " + s.m + " dan n sama dengan " + s.n);
    }
  };

'''
s = s.replace(a, b)

# 5. piawai
a = antara('  W.piawai = {', '  /* 5. ab')
b = '''  W.piawai = {
    mula: function (c) { return { k: 0 }; },
    kawalan: function (c) { var h = hurai(c.nombor), e = h.titik - 1; return [{ k: "k", label: "kuasa 10", min: Math.min(0, e) - 1, maks: Math.max(0, e) + 1 }]; },
    kira: function (c, s) {
      var h = hurai(c.nombor), pekali = tulisNombor(h.digit, h.titik - s.k);
      var p = parseFloat(pekali);
      return { pekali: pekali, k: s.k, piawai: p >= 1 && p < 10, eBetul: h.titik - 1 };
    },
    lukis: function (c, s) {
      var r = this.kira(c, s), isi = "";
      isi += teks(LEBAR / 2, 18, c.nombor + (c.unit ? " " + c.unit : ""), { tengah: true, saiz: 13, warna: "tinta", tebal: true });
      var ch = r.pekali.split(""), sz = 18, x0 = (LEBAR - ch.length * sz) / 2;
      ch.forEach(function (d, i) {
        var titik = d === ".";
        if (!titik) isi += kotak(x0 + i * sz + 1, 34, sz - 2, 24, { isi: "kertas2", garis: "garis2", bulat: 3, tebal: 1 });
        isi += teks(x0 + i * sz + sz / 2, 51, d, { tengah: true, saiz: titik ? 16 : 13, warna: titik ? "merah" : "tinta", tebal: true });
      });
      isi += ungkap(LEBAR / 2, 90, ["= " + r.pekali + " × 10", { p: String(s.k) }], { saiz: 14, warna: "ungu", tebal: true });
      isi += kotak(40, 102, 180, 26, { isi: r.piawai ? "hijauLembut" : "kuningLembut", garis: r.piawai ? "hijau" : "kuning", bulat: 13 });
      isi += teks(LEBAR / 2, 119, r.piawai ? "Bentuk piawai: 1 ≤ A < 10" : "Belum: A mesti 1 ≤ A < 10", { tengah: true, saiz: 11, warna: "tinta", tebal: true });
      return svg(136, isi, "Rajah nombor " + c.nombor + " ditulis sebagai " + r.pekali + " darab 10 kuasa " + s.k);
    }
  };

'''
s = s.replace(a, b)

# 6. tajuk kompaun
s = s.replace('teks(8, 14, "Tahun " + s.t + ":", { saiz: 11, warna: "tinta", tebal: true })', 'teks(8, 14, "Selepas tahun " + s.t, { saiz: 11, warna: "tinta", tebal: true })')
open(p, 'w', encoding='utf-8').write(s)
print('ok')
