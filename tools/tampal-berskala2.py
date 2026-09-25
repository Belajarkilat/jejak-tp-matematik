"""Tampalan (26 Sep 2026): rajah berskala kini melukis saiz sebenar relatif
merentas semua skala (bukan dinormalkan), supaya murid nampak lukisan
mengecil atau membesar. Juga: label sudut theta disembunyikan pada 0 dan 90."""
import sys
p = 'interaktif.js'
s = open(p, encoding='utf-8').read()

a = '''      var nisbah = c.l / c.p, w = 150, h = w * nisbah;
      if (h > 92) { h = 92; w = h / nisbah; }
      var x0 = (LEBAR - w) / 2 - 18, y0 = 50;'''
b = '''      /* Saiz relatif: semua skala dilukis pada satu ukuran piksel-per-cm yang sama
         (ditentukan oleh lukisan terbesar), jadi lukisan benar-benar mengecil
         atau membesar apabila skala berubah. */
      var self = this, mp = 0, ml = 0;
      c.pilihan.forEach(function (_, n) { var q = self.kira(c, { i: n }); mp = Math.max(mp, q.lukisP); ml = Math.max(ml, q.lukisL); });
      var k = Math.min(150 / mp, 92 / ml), w = r.lukisP * k, h = r.lukisL * k;
      var x0 = 40, y0 = 50;'''
if s.count(a) != 1: sys.exit('blok berskala tidak dijumpai')
s = s.replace(a, b)
a2 = '      var by = y0 + h + 24;'
if s.count(a2) != 1: sys.exit('by tidak dijumpai')
s = s.replace(a2, '      var by = y0 + ml * k + 24;')

t = '      isi += teks(ax + 26, ay - 6, "θ", { saiz: 13, warna: "tinta", tebal: true });'
if s.count(t) != 1: sys.exit('label theta tidak dijumpai')
s = s.replace(t, '      if (r.sudut > 0 && r.sudut < 90) isi += teks(ax + 26, ay - 6, "θ", { saiz: 13, warna: "tinta", tebal: true });')
open(p, 'w', encoding='utf-8').write(s)
print('ok')
