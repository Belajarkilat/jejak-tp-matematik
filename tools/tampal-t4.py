"""Tampalan (9 Okt 2026): daftar Tingkatan 4 dalam app, service worker, CI dan skrip.
Boleh dijalankan berulang kali: bilangan bab T4 dikira daripada sumber/m4b*.js, dan
entri DUNIA hanya ditambah sekali."""
import sys, re, os

def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8').write(s)

BAB = sorted(int(f[3:-3]) for f in os.listdir('sumber') if re.fullmatch(r'm4b\d+\.js', f))
N = len(BAB)
if BAB != list(range(1, N + 1)): sys.exit('bab T4 tidak berturutan: %r' % BAB)

DUNIA = r'''
  m4b1:{warna:"#6F42C1",lembut:"#EFE7FB",gelap:"#4A2B85",ikon:"\u{26F2}",
        hentian:["\u{1F33F}","\u{1F309}","\u{1F527}","\u{1F33B}","\u{1F5FC}","\u{26BE}"],
        misi:"Bentuk parabola, cari puncanya, dan gunakan fungsi kuadratik untuk menyelesaikan masalah sebenar."},
  m4b2:{warna:"#0B7285",lembut:"#D3F0F4",gelap:"#084F5C",ikon:"\u{1F522}",
        hentian:["\u{1F9F1}","\u{1F3ED}","\u{1F504}","\u{2795}","\u{1F4BB}","\u{1F510}"],
        misi:"Kumpul blok dalam asas yang berlainan, tukar nombor antara asas, dan pecahkan kod rahsia."},
  m4b3:{warna:"#9C3D00",lembut:"#FBE8DA",gelap:"#6B2A00",ikon:"\u{2696}\u{FE0F}",
        hentian:["\u{1F4AC}","\u{274C}","\u{1F500}","\u{2696}\u{FE0F}","\u{1F575}\u{FE0F}","\u{1F4A1}"],
        misi:"Tentukan nilai kebenaran, bina implikasi, dan nilai hujah seperti seorang hakim."},
  m4b4:{warna:"#A61E4D",lembut:"#FCE4EC",gelap:"#741536",ikon:"\u{1F3AA}",
        hentian:["\u{1F39F}\u{FE0F}","\u{1F371}","\u{1F9E9}","\u{1F3AF}","\u{1F3AA}","\u{1F3A8}"],
        misi:"Lorek persilangan, kesatuan dan pelengkap set, kemudian selesaikan masalah tinjauan."},
  m4b5:{warna:"#237032",lembut:"#DDF2E1",gelap:"#164D22",ikon:"\u{1F578}\u{FE0F}",
        hentian:["\u{1F535}","\u{27A1}\u{FE0F}","\u{1F333}","\u{1F68C}","\u{1F5FA}\u{FE0F}","\u{1F9ED}"],
        misi:"Bina rangkaian bucu dan tepi, kira darjah, dan cari laluan dengan kos paling rendah."},
  m4b6:{warna:"#364FC7",lembut:"#E1E7FB",gelap:"#24358A",ikon:"\u{1F33E}",
        hentian:["\u{1F3F7}\u{FE0F}","\u{1F4CD}","\u{1F58D}\u{FE0F}","\u{1F9EE}","\u{1F33E}","\u{1F3D7}\u{FE0F}"],
        misi:"Lorek rantau ketaksamaan, uji titik, dan cari kombinasi terbaik bagi suatu sistem."},
  m4b7:{warna:"#A93A0C",lembut:"#FBE6DC",gelap:"#742808",ikon:"\u{1F3CE}\u{FE0F}",
        hentian:["\u{1F6B6}","\u{1F68C}","\u{1F697}","\u{1F4C8}","\u{1F3C1}","\u{1F680}"],
        misi:"Baca graf jarak-masa dan laju-masa, kira luas di bawah graf, dan huraikan setiap perjalanan."},
  m4b8:{warna:"#5F3DC4",lembut:"#EAE4FB",gelap:"#3F2885",ikon:"\u{1F4E6}",
        hentian:["\u{1F331}","\u{1F4CF}","\u{1F4E6}","\u{1F501}","\u{2696}\u{FE0F}","\u{1F52C}"],
        misi:"Ukur serakan data dengan julat, kuartil dan sisihan piawai, kemudian bandingkan dua kumpulan."},
  m4b9:{warna:"#087F5B",lembut:"#D5F2E8",gelap:"#055A40",ikon:"\u{1F3A1}",
        hentian:["\u{1F3B2}","\u{1F333}","\u{1F517}","\u{1F6A6}","\u{1F9EA}","\u{1F3AE}"],
        misi:"Gabungkan peristiwa dengan rajah pokok dan gambar rajah Venn, dan reka permainan yang adil."},
  m4b10:{warna:"#8F5B00",lembut:"#FBEFD5",gelap:"#5F3C00",ikon:"\u{1F4B0}",
        hentian:["\u{1F3AF}","\u{1F9FE}","\u{1F4D2}","\u{1F3E6}","\u{1F4CA}","\u{1F680}"],
        misi:"Tetapkan matlamat SMART, susun belanjawan, dan bina pelan kewangan yang boleh dilaksanakan."}'''

s = baca('index.html')
s, k = re.subn(r'var JUMLAH_BAB=\{1:13,2:13,3:9(?:,4:\d+)?\};', 'var JUMLAH_BAB={1:13,2:13,3:9,4:%d};' % N, s)
if k != 1: sys.exit('JUMLAH_BAB tidak dijumpai')
if 'm4b1:{' not in s:
    lama = '''        misi:"Baling, putar dan kira peluang, dari dadu sampailah permainan yang adil."}
};'''
    if s.count(lama) != 1: sys.exit('hujung DUNIA tidak dijumpai')
    s = s.replace(lama, lama[:-3] + ',' + DUNIA + '\n};')
tulis('index.html', s)

ids = ' '.join('m4b%d' % i for i in BAB)
for p in ('.github/workflows/semak.yml', 'package.json'):
    if not os.path.exists(p): continue
    c = baca(p)
    c2 = re.sub(r'( m3b9)(?: m4b\d+)*', r'\1 ' + ids, c)
    tulis(p, c2)
print('T4: %d bab didaftarkan' % N)
