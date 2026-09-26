"""Tampalan (27 Sep 2026): Math kini berharga macam Jejak TP Sains.
Bab 1-2 setiap tingkatan percuma; Bab 3 ke atas Premium menengah rendah (T1-3),
harga perintis RM23/tahun hingga 31 Dis 2026 (RM33 mulai 1 Jan 2027).
Menengah atas (T4-5) akan datang."""
import sys, re

def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8').write(s)
def g(s, a, b, kali=1):
    if s.count(a) != kali: sys.exit('GAGAL (%d kali): %r' % (s.count(a), a[:70]))
    return s.replace(a, b)

s = baca('index.html')
s = g(s, '/* PILOT Matematik: semua bab percuma sehingga harga ditetapkan. */\nfunction bebasBab(id){ return /^m\\db\\d+$/.test(id||""); }',
      '/* Bab 1 dan 2 setiap tingkatan percuma; Bab 3 ke atas Premium. */\nfunction bebasBab(id){ var m=/b(\\d+)$/.exec(id||""); return !!m && +m[1]<=2; }')
s = g(s, '"Matematik Tingkatan 1, 2 (Bab 1 hingga 13) dan Tingkatan 3 (Bab 1 hingga 9), percuma sepanjang pilot"',
      '"35 bab Matematik Tingkatan 1, 2 dan 3 (Bab 1-2 percuma, selebihnya Premium: harga perintis RM23/tahun hingga 31 Dis 2026)"')
s = g(s, '''  bd.appendChild(barisPremium("Menengah atas · Tingkatan 4–5","Menengah Atas",PROFIL.premiumAtas,PROFIL.premiumAtasTamat));''',
      '''  var ba=el("div","baris-premium"), ka=el("div","grow");
  ka.appendChild(el("b",null,"Menengah atas · Tingkatan 4–5"));
  ka.appendChild(el("span","status","\\u{1F552} Akan datang"));
  ba.appendChild(ka); bd.appendChild(ba);''')
s = g(s, '''"Harga perintis RM23/tahun hingga 31 Dis 2026, kekal setiap tahun untuk cikgu perintis. Mulai 1 Jan 2027: RM33. T1-3 dan T4-5 dijual berasingan."''',
      '''"Harga perintis RM23/tahun hingga 31 Dis 2026, kekal setiap tahun untuk cikgu perintis. Mulai 1 Jan 2027: RM33. Menengah rendah (T1-3) dahulu, menengah atas (T4-5) akan datang."''')
s = g(s, '''    dj.appendChild(el("p","note","Versi pilot: semua bab Matematik Tingkatan 1, 2 dan 3 dibuka percuma."));''',
      '''    dj.appendChild(el("p","note","Bab 1-2 setiap tingkatan percuma. Harga perintis RM23/tahun hingga 31 Dis 2026 untuk buka semua bab T1-3 (menengah atas akan datang). "+
      '<a href="landing.html#harga">Lihat harga penuh</a>'));''')
tulis('index.html', s)

w = baca('sw.js')
w = re.sub(r'const VERSI = "jm-[^"]+";', 'const VERSI = "jm-2026-09-27a";', w)
tulis('sw.js', w)
print('ok')
