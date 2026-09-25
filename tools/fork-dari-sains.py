"""Tukar salinan index.html Jejak TP Sains kepada Jejak TP Matematik.

Jalankan selepas menyalin cikgunani/index.html ke sini:
    python tools/fork-dari-sains.py
Setiap penggantian mesti berlaku sekurang-kurangnya sekali; jika tidak,
skrip gagal supaya perubahan dalam app Sains tidak terlepas secara senyap.
"""
import re, sys

p = "index.html"
s = open(p, encoding="utf-8").read()

def ganti(lama, baru, kali=None):
    global s
    n = s.count(lama)
    if n == 0 or (kali is not None and n != kali):
        sys.exit(f"GAGAL: {lama[:70]!r} dijumpai {n} kali")
    s = s.replace(lama, baru)

# --- bank soalan: buang semua bank Sains, muat bank Matematik ---
s, n = re.subn(r'<script src="bank-t\d+b\d+\.js\?v=\d+"></script>\n', "", s)
if n < 20: sys.exit(f"GAGAL: hanya {n} tag bank Sains dibuang")
ganti('<script src="konfig.js',
      '<script src="bank-m3b1.js?v=1"></script>\n<script src="bank-m3b2.js?v=1"></script>\n'
      '<script src="bank-m3b3.js?v=1"></script>\n<script src="interaktif.js?v=1"></script>\n'
      '<script src="konfig.js', 1)

# --- pendaftaran bab: m{tingkatan}b{bab}, pilot Ting. 3 Bab 1-3 ---
ganti('var JUMLAH_BAB={1:9,2:13,3:10,4:10,5:9};', 'var JUMLAH_BAB={3:3};', 1)
ganti('BAB_TERSEDIA.push("t"+t+"b"+i);', 'BAB_TERSEDIA.push("m"+t+"b"+i);', 1)
ganti('function tingkatanBab(id){ var m=/^t(\\d)b/.exec(id||""); return m?+m[1]:3; }',
      'function tingkatanBab(id){ var m=/^m(\\d)b/.exec(id||""); return m?+m[1]:3; }', 1)
ganti('if(BAB_TERSEDIA.indexOf(BAB_ID)<0) BAB_ID="t3b1";',
      'if(BAB_TERSEDIA.indexOf(BAB_ID)<0) BAB_ID="m3b1";', 1)
ganti('pasangBab("t"+tingkatanBab(BAB_ID)+"b1")', 'pasangBab("m"+tingkatanBab(BAB_ID)+"b1")', 1)
# Pilot: semua bab dibuka supaya Cikgu Syamil boleh cuba Bab 1-3 tanpa Premium.
ganti('function bebasBab(id){ var m=/b(\\d+)$/.exec(id||""); return !!m && +m[1]<=2; }',
      '/* PILOT Matematik: semua bab percuma sehingga harga ditetapkan. */\n'
      'function bebasBab(id){ return /^m\\db\\d+$/.test(id||""); }', 1)
ganti('try{ BAB_ID=localStorage.getItem("cn-bab"); }catch(e){}',
      'try{ BAB_ID=localStorage.getItem("jm-bab"); }catch(e){}', 1)
ganti('try{ localStorage.setItem("cn-bab",id); }catch(e){}',
      'try{ localStorage.setItem("jm-bab",id); }catch(e){}', 1)

# --- dunia: buang dunia Sains, letak dunia Matematik ---
m = re.search(r"var DUNIA=\{\n.*?\n\};\n", s, re.S)
if not m: sys.exit("GAGAL: blok DUNIA tidak dijumpai")
s = s[:m.start()] + '''var DUNIA={
  m3b1:{warna:"#6D3BFF",lembut:"#ECE5FF",gelap:"#4B22C9",ikon:"\U0001F522",
        hentian:["\U0001F9F1","\U0001F504","✖️","\U0001F9E9","\U0001F3D7️","\U0001F4DC"],
        misi:"Kuasai kuasa nombor, dari blok kecil hingga menara indeks."},
  m3b2:{warna:"#0B7285",lembut:"#D3F0F4",gelap:"#085261",ikon:"\U0001F52D",
        hentian:["\U0001F3AF","\U0001F4CF","\U0001F9EA","\U0001FA90","\U0001F9A0","\U0001F680"],
        misi:"Tulis nombor gergasi dan nombor halus dengan kemas dan tepat."},
  m3b3:{warna:"#2F9E44",lembut:"#DDF5E1",gelap:"#1F6E2F",ikon:"\U0001F4B0",
        hentian:["\U0001F3E6","\U0001F4C8","\U0001F4CA","\U0001F9FE","\U0001F4B3","\U0001F91D"],
        misi:"Urus wang dengan bijak: simpan, labur, dan elak jerat hutang."}
};
''' + s[m.end():]
ganti('ikon:"\U0001F52C",hentian:[],misi:"Lepasi enam hentian untuk menguasai bab ini."};',
      'ikon:"\U0001F522",hentian:[],misi:"Lepasi enam hentian untuk menguasai bab ini."};', 1)

# --- jenama dan teks ---
ganti("Jejak TP Sains: pentaksiran bilik darjah untuk Sains KSSM Tingkatan 1, 2 dan 3.",
      "Jejak TP Matematik: pentaksiran bilik darjah untuk Matematik KSSM Tingkatan 3.", 1)
ganti("<b>Jejak TP Sains</b>", "<b>Jejak TP Matematik</b>")
ganti("<span>Sains Menengah Rendah</span>", "<span>Matematik Menengah Rendah</span>", 1)
ganti('<p class="eyebrow" id="guruEyebrow">Sains</p>', '<p class="eyebrow" id="guruEyebrow">Matematik</p>', 1)
ganti('"Sains · Tingkatan "+BAB.tingkatan', '"Matematik · Tingkatan "+BAB.tingkatan')
ganti("Jom mula jejak Sains!", "Jom mula jejak Matematik!")
ganti("Pentaksiran bilik darjah · Sains KSSM", "Pentaksiran bilik darjah · Matematik KSSM", 1)
ganti("Rekod PBD Sains yang murid isi sendiri", "Rekod PBD Matematik yang murid isi sendiri", 1)
ganti('"51 bab Sains Tingkatan 1 hingga 5 (Bab 1-2 percuma, selebihnya Premium: harga perintis RM23/tahun hingga 31 Dis 2026)"',
      '"Matematik Tingkatan 3 Bab 1 hingga 3, percuma sepanjang pilot"', 1)
ganti('"Kelas Sains "+k.nama', '"Kelas Matematik "+k.nama', 1)
ganti("&middot; Sains</h1>", "&middot; Matematik</h1>", 1)
ganti("DSKP KSSM Sains Tingkatan 1 dan dihadkan", "DSKP KSSM Matematik Tingkatan 1 dan dihadkan", 1)
ganti("disalin kata demi kata daripada DSKP KSSM Sains Tingkatan", "disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan", 1)
ganti('k.nama,"Sains",BAB.kod', 'k.nama,"Matematik",BAB.kod', 1)
ganti("Jejak TP Sains", "Jejak TP Matematik")   # baki: tajuk, notis, e-mel, WhatsApp

open(p, "w", encoding="utf-8").write(s)
print("siap; baki perkataan Sains:", len(re.findall(r"Sains", s)))

# --- pilot: tiada harga, tiada kad Premium ---
s = open(p, encoding="utf-8").read()
ganti('dj.appendChild(el("p","note","Bab 1-2 setiap tingkatan percuma. Harga perintis RM23/tahun hingga 31 Dis 2026 untuk buka semua bab T1-3 atau T4-5. "+\n      \'<a href="landing.html#harga">Lihat harga penuh</a>\'));',
      'dj.appendChild(el("p","note","Versi pilot: semua bab Matematik Tingkatan 3 dibuka percuma."));', 1)
ganti('  ak.appendChild(kadPremium());', '  /* Pilot: kad Premium disembunyikan. */', 1)
open(p, "w", encoding="utf-8").write(s)
print("pilot: harga dibuang")
