"""Tampalan (26 Sep 2026): daftar Tingkatan 1 Bab 1-13 dalam app, service worker, CI dan skrip."""
import sys, re

def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8').write(s)
def g(s, a, b, kali=1):
    if s.count(a) != kali: sys.exit('GAGAL (%d kali): %r' % (s.count(a), a[:70]))
    return s.replace(a, b)

BAB = list(range(1, 14))

DUNIA = r'''
  m1b1:{warna:"#1864AB",lembut:"#DCEBFA",gelap:"#0F3F6E",ikon:"\u{1F9EE}",
        hentian:["\u{1F3E2}","\u{1F321}\u{FE0F}","\u{1F3C3}","\u{1F956}","\u{1F4B5}","\u{1F527}"],
        misi:"Main dengan garis nombor: cari nombor negatif, pecahan dan perpuluhan."},
  m1b2:{warna:"#862E9C",lembut:"#F3E5F6",gelap:"#5F1E6E",ikon:"\u{1F522}",
        hentian:["\u{1F36B}","\u{1F333}","\u{1F6A6}","\u{1F371}","\u{1F3EE}","\u{1F3A8}"],
        misi:"Pecahkan nombor kepada faktor dan cari bila dua kitaran bertemu semula."},
  m1b3:{warna:"#087F5B",lembut:"#DDF5EC",gelap:"#055A41",ikon:"\u{1F9CA}",
        hentian:["\u{2B1C}","\u{1F9E9}","\u{1F9EE}","\u{1F3E0}","\u{1F4A7}","\u{1F3AF}"],
        misi:"Bina petak dan kubus, cari sisinya, dan anggar punca yang tak sempurna."},
  m1b4:{warna:"#B45309",lembut:"#FDE8C8",gelap:"#7C3A06",ikon:"\u{2696}\u{FE0F}",
        hentian:["\u{1F370}","\u{1F4B0}","\u{1F697}","\u{1F6D2}","\u{1F9C3}","\u{1F4AF}"],
        misi:"Bahagi adil, kira laju dan jimat belanja dengan nisbah dan peratus."},
  m1b5:{warna:"#C92A2A",lembut:"#FFE3E3",gelap:"#8C1D1D",ikon:"\u{1F9EE}",
        hentian:["\u{1F6CD}\u{FE0F}","\u{1F3AB}","\u{1F3A8}","\u{1F9E9}","\u{1F5FC}","\u{270F}\u{FE0F}"],
        misi:"Jubin algebra: cari nilai, kumpul sebutan serupa dan mudahkan ungkapan."},
  m1b6:{warna:"#364FC7",lembut:"#E7EBFB",gelap:"#263A94",ikon:"\u{2696}\u{FE0F}",
        hentian:["\u{2696}\u{FE0F}","\u{2615}","\u{1F6D2}","\u{1F6E4}\u{FE0F}","\u{1F527}","\u{1F3A8}"],
        misi:"Seimbangkan neraca, cari x, dan selesaikan dua persamaan sekali gus."},
  m1b7:{warna:"#0F766E",lembut:"#D5F5F0",gelap:"#0A5A54",ikon:"\u{1F6A6}",
        hentian:["\u{2744}\u{FE0F}","\u{2696}\u{FE0F}","\u{1F6A6}","\u{1F527}","\u{1F6D2}","\u{1F6E1}\u{FE0F}"],
        misi:"Tentukan siapa yang layak, dari suhu peti sejuk sampailah zon selamat."},
  m1b8:{warna:"#A61E4D",lembut:"#FFE3EC",gelap:"#7A1538",ikon:"\u{1F4D0}",
        hentian:["\u{1F9ED}","\u{1F91D}","\u{1F527}","\u{1F500}","\u{1F686}","\u{1F52D}"],
        misi:"Ukur, bina dan kira sudut dari padang protraktor sampailah menara pandang."},
  m1b9:{warna:"#4D7C0F",lembut:"#ECF8D9",gelap:"#365314",ikon:"\u{1F537}",
        hentian:["\u{1F3D8}\u{FE0F}","\u{26FA}","\u{1F3ED}","\u{1F6E0}\u{FE0F}","\u{1F5FA}\u{FE0F}","\u{1F3A8}"],
        misi:"Kenal semua bentuk berbucu, kira sudutnya, dan reka corak batik sendiri."},
  m1b10:{warna:"#B03A2E",lembut:"#FBE5E1",gelap:"#8A2A20",ikon:"\u{1F4CF}",
        hentian:["\u{1F3DF}\u{FE0F}","\u{1F9EE}","\u{2702}\u{FE0F}","\u{1F33B}","\u{1F3E0}","\u{1F414}"],
        misi:"Ukur sekeliling, kira ruang di dalam, dan reka reban paling luas."},
  m1b11:{warna:"#6741D9",lembut:"#ECE6FB",gelap:"#3F2699",ikon:"\u{1F5C2}\u{FE0F}",
        hentian:["\u{1F465}","\u{1F6D2}","\u{1F46F}","\u{1F30C}","\u{1F381}","\u{1F3A8}"],
        misi:"Kumpulkan objek ke dalam set, cari pelengkap dan subset, dan lukis gambar rajah Venn."},
  m1b12:{warna:"#0E7490",lembut:"#D8F1F7",gelap:"#0A5568",ikon:"\u{1F4CA}",
        hentian:["\u{1F4CB}","\u{1F522}","\u{26BD}","\u{1F343}","\u{1F3C3}","\u{1F4C8}"],
        misi:"Kumpul data, lukis carta, dan cari graf yang jujur."},
  m1b13:{warna:"#495057",lembut:"#E9ECEF",gelap:"#212529",ikon:"\u{1F4D0}",
        hentian:["\u{26FA}","\u{1F7EA}","\u{1FA9C}","\u{1F692}","\u{1F3E0}","\u{1F4CF}"],
        misi:"Cari sisi yang hilang dan semak sama ada sudut benar-benar tegak."}
'''

s = baca('index.html')
s = g(s, '<script src="bank-m3b1.js?v=1"></script>',
      ''.join('<script src="bank-m1b%d.js?v=1"></script>\n' % i for i in BAB) + '<script src="bank-m3b1.js?v=1"></script>')
s = g(s, '<script src="widget-m3b9.js?v=1"></script>',
      '<script src="widget-m3b9.js?v=1"></script>\n' + '\n'.join('<script src="widget-m1b%d.js?v=1"></script>' % i for i in BAB))
s = g(s, 'var JUMLAH_BAB={3:9};', 'var JUMLAH_BAB={1:13,3:9};')
s = g(s, '''        misi:"Lukis garis lurus, cari titik temu, dan reka laluan sendiri di atas peta."}
};''', '''        misi:"Lukis garis lurus, cari titik temu, dan reka laluan sendiri di atas peta."},''' + DUNIA.rstrip('\n') + '''
};''')
s = g(s, '"Matematik Tingkatan 3 Bab 1 hingga 9, percuma sepanjang pilot"', '"Matematik Tingkatan 1 (Bab 1 hingga 13) dan Tingkatan 3 (Bab 1 hingga 9), percuma sepanjang pilot"')
a = '''"Standard Prestasi "+BAB.kod+", "+(BAB.tingkatan===1
    ? "diambil daripada Standard Prestasi tema dalam DSKP KSSM Matematik Tingkatan 1 dan dihadkan kepada bab ini."
    : "disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan "+BAB.tingkatan+".")+" Setiap hentian menyasarkan satu tahap sahaja."'''
b = '''"Standard Prestasi "+BAB.kod+", disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan "+BAB.tingkatan+". Setiap hentian menyasarkan satu tahap sahaja."'''
s = g(s, a, b)
tulis('index.html', s)

w = baca('sw.js')
w = g(w, '"bank-m3b1.js", ', ''.join('"bank-m1b%d.js", "widget-m1b%d.js", ' % (i, i) for i in BAB) + '"bank-m3b1.js", ')
w = re.sub(r'const VERSI = "jm-[^"]+";', 'const VERSI = "jm-2026-09-26d";', w)
tulis('sw.js', w)

semua_lama = 'm3b1 m3b2 m3b3 m3b4 m3b5 m3b6 m3b7 m3b8 m3b9'
semua_baru = ' '.join('m1b%d' % i for i in BAB) + ' ' + semua_lama
for p in ('.github/workflows/semak.yml', 'package.json'):
    c = baca(p)
    if semua_lama not in c: sys.exit('senarai bab tiada dalam ' + p)
    tulis(p, c.replace(semua_lama, semua_baru))
print('ok')
