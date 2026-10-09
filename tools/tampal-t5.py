"""Tampalan (9 Okt 2026): daftar Tingkatan 5 dalam app, CI dan skrip.
Boleh dijalankan berulang kali selepas setiap bab baharu: bilangan bab T5 dikira
daripada sumber/m5b*.js, dan setiap entri DUNIA hanya ditambah sekali."""
import sys, re, os

def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8').write(s)

BAB = sorted(int(f[3:-3]) for f in os.listdir('sumber') if re.fullmatch(r'm5b\d+\.js', f))
N = len(BAB)
if BAB != list(range(1, N + 1)): sys.exit('bab T5 tidak berturutan: %r' % BAB)

DUNIA = {
 1: r'''  m5b1:{warna:"#5C3BC4",lembut:"#ECE6FB",gelap:"#3E2789",ikon:"\u{1F4C8}",
        hentian:["\u{1F33E}","\u{1F4C8}","\u{1F697}","\u{1F6D1}","\u{1F58C}\u{FE0F}","\u{1F52C}"],
        misi:"Cari pemalar ubahan, temui garis lurus yang tersembunyi dalam graf, dan ramal nilai dalam situasi sebenar."}''',
 2: r'''  m5b2:{warna:"#0B6E8C",lembut:"#D6EEF5",gelap:"#084D62",ikon:"\u{1F9EE}",
        hentian:["\u{1F4CB}","\u{2795}","\u{2716}\u{FE0F}","\u{1F511}","\u{1F6D2}","\u{1F510}"],
        misi:"Susun data dalam matriks, darab baris dengan lajur, dan selesaikan persamaan serentak dengan matriks songsang."}''',
 3: r'''  m5b3:{warna:"#2B7A3E",lembut:"#DDF1E2",gelap:"#1C5229",ikon:"\u{1F6E1}\u{FE0F}",
        hentian:["\u{2602}\u{FE0F}","\u{1F697}","\u{1F3E5}","\u{1F3E0}","\u{1F9EE}","\u{1F4DD}"],
        misi:"Fahami risiko dan perlindungan, kira premium dan pampasan, dan pilih polisi yang sesuai."}''',
 4: r'''  m5b4:{warna:"#9C4A00",lembut:"#FBE9D8",gelap:"#6B3300",ikon:"\u{1F9FE}",
        hentian:["\u{1F3DB}\u{FE0F}","\u{1F4B5}","\u{1F4CA}","\u{1F3E1}","\u{1F6D2}","\u{1F4A1}"],
        misi:"Kenal pasti jenis cukai, kira cukai pendapatan, cukai jalan dan cukai pintu, dan rancang kewangan yang bijak."}''',
 5: r'''  m5b5:{warna:"#A3195B",lembut:"#FBE3EE",gelap:"#721040",ikon:"\u{1F537}",
        hentian:["\u{1F9E9}","\u{1F50D}","\u{1F4D0}","\u{1F504}","\u{1F5FA}\u{FE0F}","\u{1F3A8}"],
        misi:"Kenal pasti bentuk kongruen, besarkan dan kecilkan rajah, dan gabungkan transformasi untuk mereka corak."}''',
 6: r'''  m5b6:{warna:"#1F5FBF",lembut:"#DFE8FA",gelap:"#154285",ikon:"\u{1F30A}",
        hentian:["\u{2B55}","\u{1F4D0}","\u{1F30A}","\u{1F39A}\u{FE0F}","\u{1F3A1}","\u{1F3B5}"],
        misi:"Gerakkan titik pada bulatan unit, lukis graf sinus dan kosinus, dan ubah amplitud serta tempohnya."}''',
 7: r'''  m5b7:{warna:"#6B4BB0",lembut:"#EBE5F8",gelap:"#4A337A",ikon:"\u{1F4CA}",
        hentian:["\u{1F4CB}","\u{1F4CA}","\u{1F4C8}","\u{1F4CF}","\u{2696}\u{FE0F}","\u{1F52C}"],
        misi:"Bina histogram dan ogif, anggar kuartil daripada graf, dan bandingkan dua kumpulan data terkumpul."}''',
 8: r'''  m5b8:{warna:"#00796B",lembut:"#D4F0EC",gelap:"#00544A",ikon:"\u{1F9E0}",
        hentian:["\u{2753}","\u{1F4DD}","\u{1F4C9}","\u{1F9EA}","\u{1F504}","\u{1F680}"],
        misi:"Kenal pasti masalah, buat andaian, pilih model, uji dan perhalusinya seperti seorang ahli matematik."}''',
}

s = baca('index.html')
s, k = re.subn(r'var JUMLAH_BAB=\{1:13,2:13,3:9,4:10(?:,5:\d+)?\};', 'var JUMLAH_BAB={1:13,2:13,3:9,4:10,5:%d};' % N, s)
if k != 1: sys.exit('JUMLAH_BAB tidak dijumpai')
for i in BAB:
    if 'm5b%d:{' % i in s: continue
    if i not in DUNIA: sys.exit('DUNIA m5b%d belum ditulis' % i)
    hujung = re.search(r'(misi:"[^"]*"\})\n\};', s)
    if not hujung: sys.exit('hujung DUNIA tidak dijumpai')
    s = s[:hujung.end(1)] + ',\n' + DUNIA[i] + s[hujung.end(1):]
tulis('index.html', s)

ids = ' '.join('m5b%d' % i for i in BAB)
for p in ('.github/workflows/semak.yml', 'package.json'):
    if not os.path.exists(p): continue
    c = baca(p)
    c2 = re.sub(r'( m4b10)(?: m5b\d+)*', r'\1 ' + ids, c)
    tulis(p, c2)
print('T5: %d bab didaftarkan' % N)
