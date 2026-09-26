"""Tampalan (26 Sep 2026): daftar Tingkatan 2 Bab 1-13 dalam app, service worker, CI dan skrip."""
import sys, re

def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8').write(s)
def g(s, a, b, kali=1):
    if s.count(a) != kali: sys.exit('GAGAL (%d kali): %r' % (s.count(a), a[:70]))
    return s.replace(a, b)

BAB = list(range(1, 14))

DUNIA = r'''
  m2b1:{warna:"#7B2CBF",lembut:"#F1E6FA",gelap:"#4F1B7C",ikon:"\u{1F9E9}",
        hentian:["\u{1F522}","\u{1F53A}","\u{1F525}","\u{1FA91}","\u{1F96B}","\u{1F3A8}"],
        misi:"Cari pola tersembunyi, tulis rumusnya, dan lanjutkan jujukan tanpa had."},
  m2b2:{warna:"#9A6700",lembut:"#FBEFD0",gelap:"#6B4600",ikon:"\u{1F523}",
        hentian:["\u{1F3EA}","\u{1F532}","\u{1F3DB}\u{FE0F}","\u{1F3A8}","\u{2615}","\u{270F}\u{FE0F}"],
        misi:"Kembangkan jubin, cari faktor tersembunyi dan mudahkan pecahan algebra."},
  m2b3:{warna:"#0B6E4F",lembut:"#D8F3E8",gelap:"#084C37",ikon:"\u{1F9EA}",
        hentian:["\u{1F695}","\u{1F321}\u{FE0F}","\u{1F527}","\u{1F33C}","\u{1F3CE}\u{FE0F}","\u{1F4A1}"],
        misi:"Bentuk rumus, gantikan nilai, dan tukar perkara rumus dari meter teksi sampailah trek laju."},
  m2b4:{warna:"#8A5A00",lembut:"#FBEFD5",gelap:"#5C3C00",ikon:"\u{1F536}",
        hentian:["\u{1F41D}","\u{270F}\u{FE0F}","\u{1F4D0}","\u{1F504}","\u{1F5FA}\u{FE0F}","\u{1F9F1}"],
        misi:"Bina poligon sekata, kira sudutnya, dan cari sudut yang hilang."},
  m2b5:{warna:"#1A5FB4",lembut:"#DCE9F8",gelap:"#103F78",ikon:"\u{1F3A1}",
        hentian:["\u{1F3A1}","\u{1F4D0}","\u{1F355}","\u{1F570}\u{FE0F}","\u{1F3C3}","\u{1F48D}"],
        misi:"Ukur lilitan, cari luas dan bongkar rahsia sektor dalam bulatan."},
  m2b6:{warna:"#7A4E2D",lembut:"#F1E6DC",gelap:"#4E301A",ikon:"\u{1F3FA}",
        hentian:["\u{1F3DB}\u{FE0F}","\u{1F528}","\u{1F4E6}","\u{1F3A8}","\u{1F4A7}","\u{1F5FC}"],
        misi:"Bina, bentang dan isi pepejal dengan tepat, dari kotak sampailah menara."},
  m2b7:{warna:"#2D6A4F",lembut:"#D8F3E4",gelap:"#1B4332",ikon:"\u{1F9ED}",
        hentian:["\u{1F5FA}\u{FE0F}","\u{1F309}","\u{1F9ED}","\u{1F3D8}\u{FE0F}","\u{1F53A}","\u{1F58A}\u{FE0F}"],
        misi:"Cari jarak dan titik tengah pada peta, dari harta karun sampailah reka bandar."},
  m2b8:{warna:"#B02A6B",lembut:"#FCE4F0",gelap:"#7E1E4C",ikon:"\u{2699}\u{FE0F}",
        hentian:["\u{2699}\u{FE0F}","\u{1F3F9}","\u{1F4CD}","\u{26BD}","\u{1F6A6}","\u{1F3A8}"],
        misi:"Masukkan nombor ke dalam mesin, palot titik, dan cari di mana dua graf bertemu."},
  m2b9:{warna:"#B8321F",lembut:"#FBE5E1",gelap:"#7F2214",ikon:"\u{1F680}",
        hentian:["\u{1F6B2}","\u{1F697}","\u{1F504}","\u{1F6E3}\u{FE0F}","\u{1F3CE}\u{FE0F}","\u{270F}\u{FE0F}"],
        misi:"Kira laju dan pecutan, dari basikal Aina sampailah kereta lumba."},
  m2b10:{warna:"#6B5B00",lembut:"#FBF3C9",gelap:"#4A3F00",ikon:"\u{1F4C9}",
        hentian:["\u{1F4D0}","\u{1F6F4}","\u{1F5FA}\u{FE0F}","\u{1F3E0}","\u{2702}\u{FE0F}","\u{270F}\u{FE0F}"],
        misi:"Ukur curam atau landai, dari tangga sampailah reka tanjakan sendiri."},
  m2b11:{warna:"#5C2D91",lembut:"#EEE6F7",gelap:"#3E1E63",ikon:"\u{1F504}",
        hentian:["\u{1F3A0}","\u{1F52E}","\u{1F3A1}","\u{1F5FA}\u{FE0F}","\u{1F9F1}","\u{1F3A8}"],
        misi:"Gerak, pantul dan putar objek, dan cari bentuk yang tak berubah saiz."},
  m2b12:{warna:"#3B5B00",lembut:"#E6F0CC",gelap:"#243800",ikon:"\u{1F3AF}",
        hentian:["\u{1F3DF}\u{FE0F}","\u{1F9EE}","\u{1F5C2}\u{FE0F}","\u{1F4F6}","\u{1F680}","\u{1F4AC}"],
        misi:"Cari nilai tengah data, dan pilih ukuran yang paling adil."},
  m2b13:{warna:"#1F4E79",lembut:"#DCE8F5",gelap:"#123556",ikon:"\u{1F3B2}",
        hentian:["\u{1F3B2}","\u{1F333}","\u{1F4CA}","\u{1F3AF}","\u{1F517}","\u{270F}\u{FE0F}"],
        misi:"Baling, putar dan kira peluang, dari dadu sampailah permainan yang adil."}
'''

s = baca('index.html')
s = g(s, '<script src="widget-m1b13.js?v=1"></script>',
      '<script src="widget-m1b13.js?v=1"></script>\n' + ''.join('<script src="bank-m2b%d.js?v=1"></script>\n' % i for i in BAB)
      + '\n'.join('<script src="widget-m2b%d.js?v=1"></script>' % i for i in BAB))
s = g(s, 'var JUMLAH_BAB={1:13,3:9};', 'var JUMLAH_BAB={1:13,2:13,3:9};')
s = g(s, '''        misi:"Cari sisi yang hilang dan semak sama ada sudut benar-benar tegak."}
};''', '''        misi:"Cari sisi yang hilang dan semak sama ada sudut benar-benar tegak."},''' + DUNIA.rstrip('\n') + '''
};''')
s = g(s, '"Matematik Tingkatan 1 (Bab 1 hingga 13) dan Tingkatan 3 (Bab 1 hingga 9), percuma sepanjang pilot"',
      '"Matematik Tingkatan 1, 2 (Bab 1 hingga 13) dan Tingkatan 3 (Bab 1 hingga 9), percuma sepanjang pilot"')
tulis('index.html', s)

w = baca('sw.js')
w = g(w, '"bank-m3b1.js", ', ''.join('"bank-m2b%d.js", "widget-m2b%d.js", ' % (i, i) for i in BAB) + '"bank-m3b1.js", ')
w = re.sub(r'const VERSI = "jm-[^"]+";', 'const VERSI = "jm-2026-09-26e";', w)
tulis('sw.js', w)

lama = 'm3b1 m3b2 m3b3 m3b4 m3b5 m3b6 m3b7 m3b8 m3b9'
baru = ' '.join('m2b%d' % i for i in BAB) + ' ' + lama
for p in ('.github/workflows/semak.yml', 'package.json'):
    c = baca(p)
    if c.count(lama) < 1: sys.exit('senarai bab tiada dalam ' + p)
    tulis(p, c.replace(lama, baru))
print('ok')
