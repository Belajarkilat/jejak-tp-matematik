"""Tampalan (26 Sep 2026): widget berskala, grid dan segitiga untuk Bab 4 dan 5.
Sekali guna; disimpan sebagai rekod perubahan."""
import sys
p = 'interaktif.js'
s = open(p, encoding='utf-8').read()

MARKA = '  /* ================= bina & hidupkan ================= */'
if s.count(MARKA) != 1: sys.exit('penanda tidak dijumpai')

WIDGET = r'''  /* 9. berskala: hubungan ukuran sebenar dan lukisan berskala (lukisan : sebenar) */
  var KE_CM = { km: 100000, m: 100, cm: 1, mm: 0.1 };
  function sebutSkala(pr) { return pr[0] + " : " + pr[1]; }
  function nomK(n) { return String(Math.round(n * 100) / 100); }
  W.berskala = {
    mula: function (c) { return { i: c.i || 0 }; },
    kawalan: function (c) { return [{ k: "i", label: "skala", min: 0, maks: c.pilihan.length - 1, teks: c.pilihan.map(sebutSkala) }]; },
    kira: function (c, s) {
      var pr = c.pilihan[s.i], f = KE_CM[c.unit || "m"], a = pr[0] / pr[1];
      return { skala: sebutSkala(pr), lukisP: Math.round(c.p * f * a * 100) / 100, lukisL: Math.round(c.l * f * a * 100) / 100, seCm: Math.round(pr[1] / pr[0] * 1000) / 1000 };
    },
    lukis: function (c, s) {
      var r = this.kira(c, s), unit = c.unit || "m", isi = "";
      isi += teks(LEBAR / 2, 18, "Skala " + r.skala + "  (lukisan : sebenar)", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      var nisbah = c.l / c.p, w = 150, h = w * nisbah;
      if (h > 92) { h = 92; w = h / nisbah; }
      var x0 = (LEBAR - w) / 2 - 18, y0 = 50;
      isi += kotak(x0, y0, w, h, { isi: "lembayungLembut", garis: "ungu", bulat: 3, tebal: 2 });
      isi += teks(x0 + w / 2, y0 - 8, "Lukisan " + nomK(r.lukisP) + " cm", { tengah: true, saiz: 11, warna: "ungu", tebal: true, hasil: true });
      isi += teks(x0 + w + 6, y0 + h / 2 + 4, nomK(r.lukisL) + " cm", { saiz: 11, warna: "ungu", tebal: true, hasil: true });
      var by = y0 + h + 24;
      isi += teks(LEBAR / 2, by, "Sebenar: " + nomK(c.p) + " " + unit + " × " + nomK(c.l) + " " + unit, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      isi += teks(LEBAR / 2, by + 20, "1 cm pada lukisan = " + nomK(r.seCm) + " cm sebenar", { tengah: true, saiz: 11, warna: "tinta2", hasil: true });
      return svg(by + 32, isi, "Rajah segi empat tepat " + nomK(c.p) + " kali " + nomK(c.l) + " " + unit + " dilukis pada skala " + r.skala);
    }
  };

  /* 10. grid: membesarkan atau mengecilkan bentuk pada grid petak */
  function luasPoligon(pt) {
    var a = 0;
    for (var i = 0; i < pt.length; i++) { var j = (i + 1) % pt.length; a += pt[i][0] * pt[j][1] - pt[j][0] * pt[i][1]; }
    return Math.abs(a) / 2;
  }
  W.grid = {
    mula: function (c) { return { i: c.i == null ? 1 : c.i }; },
    kawalan: function (c) { return [{ k: "i", label: "skala", min: 0, maks: c.faktor.length - 1, teks: c.faktor.map(function (f) { return "" + f[0] + " : " + f[1]; }) }]; },
    kira: function (c, s) {
      var f = c.faktor[s.i], k = f[0] / f[1], mx = 0, my = 0;
      c.bentuk.forEach(function (q) { mx = Math.max(mx, q[0]); my = Math.max(my, q[1]); });
      var a0 = luasPoligon(c.bentuk);
      return { k: k, lebar: mx * k, tinggi: my * k, luas: Math.round(a0 * k * k * 100) / 100, luas0: a0, lebar0: mx, tinggi0: my };
    },
    lukis: function (c, s) {
      var r = this.kira(c, s), isi = "", kM = 0;
      c.faktor.forEach(function (f) { kM = Math.max(kM, f[0] / f[1]); });
      var gw = Math.ceil(r.lebar0 * kM), gh = Math.ceil(r.tinggi0 * kM);
      var sel = Math.min(18, Math.floor(232 / gw), Math.floor(130 / gh));
      var gx = (LEBAR - gw * sel) / 2, gy = 14;
      for (var i = 0; i <= gw; i++) isi += garis(gx + i * sel, gy, gx + i * sel, gy + gh * sel, { warna: "garis", tebal: 1 });
      for (var j = 0; j <= gh; j++) isi += garis(gx, gy + j * sel, gx + gw * sel, gy + j * sel, { warna: "garis", tebal: 1 });
      var lukisPoli = function (k) {
        return c.bentuk.map(function (q, n) { return (n ? "L" : "M") + b1(gx + q[0] * k * sel) + " " + b1(gy + gh * sel - q[1] * k * sel); }).join(" ") + " Z";
      };
      isi += laluan(lukisPoli(r.k), { isi: "lembayungLembut", warna: "ungu", tebal: 2 });
      isi += laluan(lukisPoli(1), { warna: "tinta3", tebal: 1.5, putus: "4 3" });
      var by = gy + gh * sel + 22;
      isi += teks(8, by, "Asal:   lebar " + nomK(r.lebar0) + ", tinggi " + nomK(r.tinggi0) + ", luas " + nomK(r.luas0), { saiz: 11, warna: "tinta2" });
      isi += teks(8, by + 18, "Baharu: lebar " + nomK(r.lebar) + ", tinggi " + nomK(r.tinggi) + ", luas " + nomK(r.luas), { saiz: 11, warna: "ungu", tebal: true, hasil: true });
      return svg(by + 28, isi, "Rajah bentuk pada grid petak dibesarkan atau dikecilkan dengan faktor " + nomK(r.k) + ", garis putus ialah bentuk asal");
    }
  };

  /* 11. segitiga: segi tiga bersudut tegak, sudut tirus dan nisbah trigonometri */
  W.segitiga = {
    mula: function (c) { return { i: c.i == null ? 3 : c.i }; },
    kawalan: function (c) { return [{ k: "i", label: "sudut", min: 0, maks: c.sudut.length - 1, teks: c.sudut.map(function (x) { return x + "°"; }) }]; },
    kira: function (c, s) {
      var th = c.sudut[s.i], r = th * Math.PI / 180, h = c.sisi || 10;
      return {
        sudut: th, hipotenus: h,
        bertentangan: Math.round(h * Math.sin(r) * 100) / 100,
        bersebelahan: Math.round(h * Math.cos(r) * 100) / 100,
        sin: Math.round(Math.sin(r) * 1000) / 1000,
        kos: Math.round(Math.cos(r) * 1000) / 1000,
        tan: th === 90 ? null : Math.round(Math.tan(r) * 1000) / 1000
      };
    },
    lukis: function (c, s) {
      var r = this.kira(c, s), isi = "", H = 150, rad = r.sudut * Math.PI / 180;
      var ax = 40, ay = 160, cx = ax + H * Math.cos(rad), by = ay - H * Math.sin(rad);
      isi += garis(ax, ay, cx, ay, { warna: "hijau", tebal: 3 });
      if (r.sudut > 0) isi += garis(cx, ay, cx, by, { warna: "merah", tebal: 3 });
      isi += garis(ax, ay, cx, by, { warna: "ungu", tebal: 3 });
      if (r.sudut > 0 && r.sudut < 90) isi += kotak(cx - 9, ay - 9, 9, 9, { garis: "tinta3", tebal: 1.2, bulat: 0 });
      isi += teks(ax + 26, ay - 6, "θ", { saiz: 13, warna: "tinta", tebal: true });
      isi += teks(8, 194, "Bersebelahan " + nomK(r.bersebelahan), { saiz: 11, warna: "hijau", tebal: true });
      isi += teks(8, 210, "Bertentangan " + nomK(r.bertentangan), { saiz: 11, warna: "merah", tebal: true });
      isi += teks(8, 226, "Hipotenus    " + nomK(r.hipotenus), { saiz: 11, warna: "ungu", tebal: true });
      isi += teks(140, 194, "sin θ = " + nomK(r.sin), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
      isi += teks(140, 210, "kos θ = " + nomK(r.kos), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
      isi += teks(140, 226, "tan θ = " + (r.tan === null ? "tak tertakrif" : nomK(r.tan)), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
      return svg(238, isi, "Rajah segi tiga bersudut tegak dengan sudut tirus " + r.sudut + " darjah, hipotenus " + r.hipotenus + ", dan nilai sin, kos, tan");
    }
  };

'''
s = s.replace(MARKA, WIDGET + MARKA)

# label gelongsor boleh menunjuk teks (contoh "1 : 100") dan bukan indeks sahaja
LAMA = 'function tulisLabel() { lbl.innerHTML = esc(k.label) + " = <b>" + s[k.k] + "</b>"; }'
if s.count(LAMA) != 1: sys.exit('tulisLabel tidak dijumpai')
s = s.replace(LAMA, 'function tulisLabel() { lbl.innerHTML = esc(k.label) + " = <b>" + esc(k.teks ? k.teks[s[k.k]] : s[k.k]) + "</b>"; }')

open(p, 'w', encoding='utf-8').write(s)
print('ok')
