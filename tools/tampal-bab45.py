"""Tampalan (26 Sep 2026): daftar Bab 4 dan Bab 5 dalam app, service worker, CI dan skrip."""
import sys, re

def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8').write(s)
def g(s, a, b, kali=1):
    if s.count(a) != kali: sys.exit('GAGAL (%d kali): %r' % (s.count(a), a[:70]))
    return s.replace(a, b)

# ---- index.html ----
s = baca('index.html')
s = g(s, '<script src="bank-m3b3.js?v=1"></script>',
      '<script src="bank-m3b3.js?v=1"></script>\n<script src="bank-m3b4.js?v=1"></script>\n<script src="bank-m3b5.js?v=1"></script>')
s = g(s, 'var JUMLAH_BAB={3:3};', 'var JUMLAH_BAB={3:5};')
s = g(s, '''        misi:"Urus wang dengan bijak: simpan, labur, dan elak jerat hutang."}
};''', '''        misi:"Urus wang dengan bijak: simpan, labur, dan elak jerat hutang."},
  m3b4:{warna:"#E8590C",lembut:"#FFE8D9",gelap:"#A63E06",ikon:"\U0001F4D0",
        hentian:["\U0001F5FA️","\U0001F52C","\U0001F9EE","\U0001F9E9","\U0001F3E1","\U0001F3A8"],
        misi:"Kecilkan atau besarkan dunia dengan skala yang tepat."},
  m3b5:{warna:"#1971C2",lembut:"#DCEBFA",gelap:"#11508A",ikon:"\U0001F4CF",
        hentian:["\U0001F4D0","\U0001F4C8","\U0001F5A9️","\U0001F6A9","\U0001F5FC","\U0001F333"],
        misi:"Ukur tinggi dan jarak yang tak boleh dicapai, dengan satu sudut dan satu sisi."}
};''')
s = g(s, '"Matematik Tingkatan 3 Bab 1 hingga 3, percuma sepanjang pilot"', '"Matematik Tingkatan 3 Bab 1 hingga 5, percuma sepanjang pilot"')
tulis('index.html', s)

# ---- sw.js: senarai fail dan versi cache ----
w = baca('sw.js')
w = g(w, '"bank-m3b3.js", ', '"bank-m3b3.js", "bank-m3b4.js", "bank-m3b5.js", ')
w = re.sub(r'const VERSI = "jm-[^"]+";', 'const VERSI = "jm-2026-09-26a";', w)
tulis('sw.js', w)

# ---- CI dan package.json ----
c = baca('.github/workflows/semak.yml')
c = c.replace('m3b1 m3b2 m3b3', 'm3b1 m3b2 m3b3 m3b4 m3b5')
tulis('.github/workflows/semak.yml', c)
k = baca('package.json')
k = k.replace('m3b1 m3b2 m3b3', 'm3b1 m3b2 m3b3 m3b4 m3b5')
tulis('package.json', k)
print('ok')
