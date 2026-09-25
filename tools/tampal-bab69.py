"""Tampalan (26 Sep 2026): daftar Bab 6 hingga 9 dalam app, service worker, CI dan skrip."""
import sys, re

def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8').write(s)
def g(s, a, b, kali=1):
    if s.count(a) != kali: sys.exit('GAGAL (%d kali): %r' % (s.count(a), a[:70]))
    return s.replace(a, b)

s = baca('index.html')
s = g(s, '<script src="bank-m3b5.js?v=1"></script>',
      '<script src="bank-m3b5.js?v=1"></script>\n<script src="bank-m3b6.js?v=1"></script>\n<script src="bank-m3b7.js?v=1"></script>\n<script src="bank-m3b8.js?v=1"></script>\n<script src="bank-m3b9.js?v=1"></script>')
s = g(s, '<script src="interaktif.js?v=1"></script>',
      '<script src="interaktif.js?v=2"></script>\n<script src="widget-m3b6.js?v=1"></script>\n<script src="widget-m3b7.js?v=1"></script>\n<script src="widget-m3b8.js?v=1"></script>\n<script src="widget-m3b9.js?v=1"></script>')
s = g(s, 'var JUMLAH_BAB={3:5};', 'var JUMLAH_BAB={3:9};')
s = g(s, '''        misi:"Ukur tinggi dan jarak yang tak boleh dicapai, dengan satu sudut dan satu sisi."}
};''', '''        misi:"Ukur tinggi dan jarak yang tak boleh dicapai, dengan satu sudut dan satu sisi."},
  m3b6:{warna:"#0B7285",lembut:"#D5F1F5",gelap:"#075463",ikon:"\\u{1F535}",
        hentian:["\\u{1F3A1}","\\u{1F570}\\u{FE0F}","\\u{1F6B2}","\\u{1F6E4}\\u{FE0F}","\\u{1F517}","\\u{1F3C5}"],
        misi:"Cari sudut tersembunyi dalam bulatan, dari roda ferris sampailah lencana."},
  m3b7:{warna:"#5F3DC4",lembut:"#EDE7FA",gelap:"#432B99",ikon:"\\u{1F3D7}\\u{FE0F}",
        hentian:["\\u270F\\u{FE0F}","\\u{1F3E0}","\\u{1F6CB}\\u{FE0F}","\\u{1F9F1}","\\u{1F3D7}\\u{FE0F}","\\u{1F52C}"],
        misi:"Lukis rumah kayu dari tiga arah, dan bina semula daripada lakaran."},
  m3b8:{warna:"#2F7D32",lembut:"#DDF3E1",gelap:"#1E5C24",ikon:"\\u{1F4CD}",
        hentian:["\\u{1F6DD}","\\u{1F4F6}","\\u{1F6E3}\\u{FE0F}","\\u{1F500}","\\u{1F5FA}\\u{FE0F}","\\u{1F4E1}"],
        misi:"Cari semua tempat yang betul, ikut syarat jarak yang diberi."},
  m3b9:{warna:"#C2255C",lembut:"#FFE3EC",gelap:"#8F1B43",ikon:"\\u{1F4C8}",
        hentian:["\\u{1F3A2}","\\u{1F695}","\\u{1F5FA}\\u{FE0F}","\\u{1F686}","\\u{1F6A6}","\\u{1F9ED}"],
        misi:"Lukis garis lurus, cari titik temu, dan reka laluan sendiri di atas peta."}
};''')
s = g(s, '"Matematik Tingkatan 3 Bab 1 hingga 5, percuma sepanjang pilot"', '"Matematik Tingkatan 3 Bab 1 hingga 9, percuma sepanjang pilot"')
tulis('index.html', s)

w = baca('sw.js')
w = g(w, '"bank-m3b5.js", ', '"bank-m3b5.js", "bank-m3b6.js", "bank-m3b7.js", "bank-m3b8.js", "bank-m3b9.js", "widget-m3b6.js", "widget-m3b7.js", "widget-m3b8.js", "widget-m3b9.js", ')
w = re.sub(r'const VERSI = "jm-[^"]+";', 'const VERSI = "jm-2026-09-26c";', w)
tulis('sw.js', w)

for p in ('.github/workflows/semak.yml', 'package.json'):
    c = baca(p)
    c = c.replace('m3b1 m3b2 m3b3 m3b4 m3b5', 'm3b1 m3b2 m3b3 m3b4 m3b5 m3b6 m3b7 m3b8 m3b9')
    tulis(p, c)
print('ok')
