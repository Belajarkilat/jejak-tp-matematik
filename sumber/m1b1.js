/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 1 Nombor Nisbah.
   Fail ini disunting tangan. Jalankan `node bina.js m1b1` untuk menyemaknya
   dan menghasilkan bank-m1b1.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 33 (dskp/matematik-t1.pdf).
   Standard Pembelajaran yang dirujuk: 1.1.1 hingga 1.5.3 (muka 29 hingga 32).

   Rajah interaktif ialah widget t1nombor (widget-m1b1.js): garis nombor yang
   digerakkan murid. Nombor disimpan sebagai integer dalam unit 1/d.
   Medan `kira` ialah semakan bebas; jawapan pecahan disemak sebagai teks. */
const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
const fr = (p, q) => { const g = gcd(p, q); p /= g; q /= g; if (q < 0) { p = -p; q = -q; } return q === 1 ? String(p) : p + "/" + q; };

const SPI = [
"Mempamerkan pengetahuan asas tentang integer, pecahan dan perpuluhan.",
"Mempamerkan kefahaman tentang nombor nisbah.",
"Mengaplikasikan kefahaman tentang nombor nisbah untuk melaksanakan operasi asas dan gabungan operasi asas aritmetik.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nombor nisbah dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nombor nisbah dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nombor nisbah dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- lampiran: garis nombor interaktif ---------- */

const R_NL1 = {
  jenis:"interaktif", w:"t1nombor", mod:"banding", fmt:"int", R:10, i:7, j:14,
  kapsyen:"Rajah 1 · Gerakkan A dan B pada garis nombor. Semakin ke kanan, semakin besar nilainya.",
  alt:"Rajah interaktif garis nombor -10 hingga 10; gelongsor A dan B menggerakkan dua titik dan menunjukkan tanda banding"
};
const R_NL2 = {
  jenis:"interaktif", w:"t1nombor", mod:"operasi", fmt:"int", d:1, n:5, i:8, j:9, o:0,
  kapsyen:"Rajah 1 · Gerakkan a dan b, kemudian pilih tambah atau tolak. Lompatan ke kanan menaikkan nilai.",
  alt:"Rajah interaktif garis nombor -10 hingga 10; a tambah atau tolak b dipaparkan sebagai lompatan"
};
const R_NL3 = {
  jenis:"interaktif", w:"t1nombor", mod:"darab", n:4, bMaks:4, i:7, j:2,
  kapsyen:"Rajah 1 · n lompatan berukuran b bermula dari 0. Jika n negatif, arah lompatan terbalik.",
  alt:"Rajah interaktif garis nombor; n lompatan berukuran b menunjukkan hasil darab dua integer"
};
const R_NL4 = {
  jenis:"interaktif", w:"t1nombor", mod:"operasi", fmt:"pec", d:4, n:4, i:5, j:6, cabar:true,
  kapsyen:"Rajah 1 · Garis nombor dibahagi kepada suku. Kira dahulu dengan pecahan, kemudian semak dengan rajah.",
  alt:"Rajah interaktif garis nombor -2 hingga 2 dibahagi suku; pecahan a tambah atau tolak b dengan mod cabar"
};
const R_NL5 = {
  jenis:"interaktif", w:"t1nombor", mod:"operasi", fmt:"per", d:10, n:15, i:27, j:8, cabar:true,
  kapsyen:"Rajah 1 · Garis nombor dibahagi kepada persepuluh. Kira dahulu, kemudian semak dengan rajah.",
  alt:"Rajah interaktif garis nombor -3 hingga 3 dibahagi persepuluh; perpuluhan a tambah atau tolak b dengan mod cabar"
};
const R_NL6 = {
  jenis:"interaktif", w:"t1nombor", mod:"tukar", d:8, R:1, i:11,
  kapsyen:"Rajah 1 · Penyebut ialah 8. Gerakkan pengangka dan lihat pecahan bertukar kepada perpuluhan.",
  alt:"Rajah interaktif garis nombor -1 hingga 1 dibahagi perlapan; pecahan ditukar kepada perpuluhan dan bentuk termudah"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Lif Bangunan", sk:"1.1.1 – 1.1.4 Integer, garis nombor, membanding dan menyusun", lampiran:"nl1",
 kadNama:"Integer", kadEm:"\u{1F3E2}", kadFakta:"Integer ialah nombor bulat positif, nombor bulat negatif dan sifar. Sifar bukan positif dan bukan negatif.",
 bosKadNama:"Garis Nombor", bosKadEm:"\u{1F9ED}", bosKadFakta:"Semakin ke kanan pada garis nombor, semakin besar nilainya. Jadi −1 lebih besar daripada −100.",
 soalan:[
 {j:"pilih",t:"Sebuah lif bergerak ke tingkat 3 di bawah aras tanah. Nombor manakah mewakili kedudukan lif itu?",p:["−3","3","−2","−4"],b:0,u:"Di bawah aras tanah ialah arah negatif, jadi 3 tingkat ke bawah ditulis −3.",kira:()=>-3},
 {j:"pilih",t:"Antara nombor berikut, yang manakah BUKAN integer?",p:["2.5","−14","20","−7"],b:0,u:"Integer ialah nombor bulat positif, nombor bulat negatif dan sifar. 2.5 ialah perpuluhan, bukan nombor bulat.",kira:()=>!Number.isInteger(2.5)},
 {j:"pilih",t:"Sifar (0) ialah integer yang:",p:["Bukan positif, bukan negatif","Negatif yang terkecil","Positif yang terkecil","Bukan integer"],b:0,u:"Sifar ialah integer, tetapi ia bukan positif dan bukan negatif. Ia memisahkan integer positif dan negatif pada garis nombor."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan A = −3 dan B = 4. Yang manakah betul?",p:["A &lt; B","A &gt; B","A = B","A = −B"],b:0,u:"A berada di sebelah kiri B pada garis nombor, jadi A lebih kecil daripada B.",kira:()=>-3<4},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan A = −7. Berapa langkah titik A dari sifar?",p:["7","−7","70","0.7"],b:0,u:"Dari 0 ke −7 ialah 7 langkah ke kiri. Bilangan langkah tidak boleh negatif.",kira:()=>Math.abs(-7)},
 {j:"pilih",t:"Antara integer berikut, yang manakah paling kecil?",p:["−9","−2","−5","5"],b:0,u:"Integer negatif berada di sebelah kiri 0. Antara −9 dan −2, −9 lebih ke kiri, jadi paling kecil.",kira:()=>Math.min(-9,-2,-5,5)},
 {j:"susun",t:"Susun integer ini daripada yang paling kecil kepada yang paling besar.",p:["−8","−3","0","2","6"],b:[0,1,2,3,4],u:"Ikut kedudukan pada garis nombor dari kiri ke kanan: −8, −3, 0, 2, 6."},
 {j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR.",p:["−5 &lt; −2","0 &gt; −1","Integer negatif berada di sebelah kiri 0","−10 &gt; 3","−4 ialah integer positif","Sifar ialah integer negatif"],b:[0,1,2],u:"−5 di kiri −2, dan 0 di kanan −1. Integer negatif memang di kiri 0. −10 lebih kecil daripada 3, −4 negatif dan sifar bukan negatif."}],
 bos:{j:"banyak",t:"Dalam Rajah 1, pilih SEMUA integer yang lebih besar daripada −3 dan lebih kecil daripada 2.",p:["−2","−1","0","1","−3","2"],b:[0,1,2,3],u:"Integer di antara −3 dan 2 (tidak termasuk hujungnya) ialah −2, −1, 0 dan 1. −3 dan 2 ialah sempadan sahaja."}},

{n:2, tempat:"Termometer Cameron", sk:"1.2.1 Tambah dan tolak integer; 1.5.1 Nombor nisbah", lampiran:"nl2",
 kadNama:"Suhu Beku", kadEm:"\u{1F321}\u{FE0F}", kadFakta:"Air membeku pada 0 °C. Suhu di bawah 0 °C ditulis dengan tanda negatif, contohnya −5 °C.",
 bosKadNama:"Nombor Nisbah", bosKadEm:"\u{1F4A1}", bosKadFakta:"Nombor nisbah ialah nombor yang boleh ditulis sebagai p/q dengan q bukan sifar. Integer 3 boleh ditulis sebagai 3/1.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 3, b = 4 dan pilih tambah. Berapakah hasilnya?",b:7,tol:0.01,u:"Bermula di 3, lompat 4 langkah ke kanan sampai 7.",kira:()=>3+4},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = −2, b = 5 dan pilih tambah. Berapakah hasilnya?",b:3,tol:0.01,u:"Bermula di −2, lompat 5 langkah ke kanan. −2 + 5 = 3.",kira:()=>-2+5},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 4, b = 6 dan pilih tolak. Berapakah hasilnya?",b:-2,tol:0.01,u:"Menolak 6 bermaksud lompat 6 langkah ke kiri dari 4. Hasilnya −2.",kira:()=>4-6},
 {j:"pilih",t:"Hitung (−3) + (−4).",p:["−7","−1","−12","7"],b:0,u:"Menambah integer negatif bermaksud bergerak ke kiri. −3 dan 4 langkah lagi ke kiri sampai −7.",kira:()=>-3+(-4)},
 {j:"pilih",t:"Menolak integer negatif sama seperti menambah integer positif. Maka 5 − (−3) = ?",p:["8","−8","−2","15"],b:0,u:"5 − (−3) = 5 + 3 = 8.",kira:()=>5-(-3)},
 {j:"pilih",t:"Antara berikut, yang manakah BUKAN nombor nisbah?",p:["5/0","−3/4","0.25","7"],b:0,u:"Nombor nisbah ialah p/q dengan q bukan sifar. 5/0 tidak tertakrif, jadi bukan nombor nisbah. Nombor lain boleh ditulis sebagai pecahan, contohnya 7 = 7/1."},
 {j:"pilih",t:"Suhu pagi ialah −4 °C. Tengah hari suhu naik 9 °C. Berapakah suhu tengah hari?",p:["5 °C","−5 °C","13 °C","−13 °C"],b:0,u:"−4 + 9 = 5, jadi suhu tengah hari 5 °C.",kira:()=>-4+9===5},
 {j:"banyak",t:"Pilih SEMUA pengiraan yang bernilai 3.",p:["8 + (−5)","−2 + 5","4 − (−1)","2 − 5","−1 − (−4)","−6 + 2"],b:[0,1,4],u:"8 + (−5) = 3, −2 + 5 = 3 dan −1 − (−4) = −1 + 4 = 3. Yang lain ialah 5, −3 dan −4.",kira:()=>(8+(-5))===3&&(-2+5)===3&&(-1-(-4))===3&&(4-(-1))!==3&&(2-5)!==3&&(-6+2)!==3}],
 bos:{j:"nombor",t:"Sebuah lif bermula di aras −2. Ia naik 7 aras, kemudian turun 9 aras. Di aras berapakah lif itu berhenti?",b:-4,tol:0.01,u:"−2 + 7 = 5, kemudian 5 − 9 = −4. Lif berhenti di aras −4.",kira:()=>-2+7-9}},

{n:3, tempat:"Padang Lompat", sk:"1.2.2 – 1.2.5 Darab, bahagi, tertib operasi dan hukum operasi; 1.3.3, 1.4.3 Gabungan operasi", lampiran:"nl3",
 kadNama:"Tertib Operasi", kadEm:"\u{1F9EE}", kadFakta:"Selesaikan kurungan dahulu, kemudian darab dan bahagi, kemudian tambah dan tolak. Kerjakan dari kiri ke kanan.",
 bosKadNama:"Kalis Agihan", bosKadEm:"\u{1F3AF}", bosKadFakta:"Hukum kalis agihan: a × (b + c) = a × b + a × c. Ia membantu mengira dengan cepat, contohnya 25 × 102 = 25 × 100 + 25 × 2.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = 3 dan b = −2. Berapakah n × b?",b:-6,tol:0.01,u:"3 lompatan berukuran −2 ke kiri: −2, −4, −6. Jadi 3 × (−2) = −6.",kira:()=>3*-2},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = −3 dan b = −2. Berapakah n × b?",b:6,tol:0.01,u:"Bila n negatif, arah lompatan terbalik. Tiga lompatan −2 dibalikkan menjadi 3 lompatan +2 ke kanan, sampai 6.",kira:()=>-3*-2},
 {j:"pilih",t:"Hasil darab dua integer negatif ialah:",p:["Positif","Negatif","Sifar","Tidak tentu"],b:0,u:"Negatif darab negatif memberikan positif, contohnya (−4) × (−5) = 20."},
 {j:"nombor",t:"Hitung (−24) ÷ 4 + 3 × (−2).",b:-12,tol:0.01,u:"Bahagi dan darab dahulu: −6 dan −6. Kemudian −6 + (−6) = −12.",kira:()=>(-24)/4+3*(-2)},
 {j:"pilih",t:"Hukum manakah ditunjukkan oleh 7 × 5 = 5 × 7?",p:["Kalis tukar tertib","Kalis sekutuan darab","Kalis agihan","Hukum identiti"],b:0,u:"Menukar tertib nombor yang didarab tidak mengubah hasil. Ini hukum kalis tukar tertib."},
 {j:"nombor",t:"Guna hukum kalis agihan untuk mengira 102 × 15, iaitu (100 + 2) × 15.",b:1530,tol:0.01,u:"100 × 15 = 1 500 dan 2 × 15 = 30. Jumlahnya 1 530.",kira:()=>(100+2)*15},
 {j:"pilih",t:"Hitung 1/2 + 1/4.",p:["3/4","2/6","1/4","3/8"],b:0,u:"Jadikan penyebut sama: 1/2 = 2/4. Kemudian 2/4 + 1/4 = 3/4.",kira:()=>fr(1*2+1,4)==="3/4"},
 {j:"susun",t:"Susun langkah untuk menghitung 3 + 4 × (2 − 5).",p:["Buat kurungan dahulu: 2 − 5 = −3","Darab: 4 × (−3) = −12","Tambah: 3 + (−12)","Jawapan ialah −9"],b:[0,1,2,3],u:"Kurungan dahulu, kemudian darab, kemudian tambah. 3 + (−12) = −9."}],
 bos:{j:"banyak",t:"Pilih SEMUA pengiraan yang BETUL.",p:["(−6) × (−2) = 12","(−15) ÷ 3 = −5","0.5 + 0.25 = 0.75","−4 × 3 = 12","8 − (−2) = 6","(−12) ÷ (−4) = −3"],b:[0,1,2],u:"(−6) × (−2) = 12, (−15) ÷ 3 = −5 dan 0.5 + 0.25 = 0.75. Yang salah: −4 × 3 = −12, 8 − (−2) = 10 dan (−12) ÷ (−4) = 3."}},

{n:4, tempat:"Kedai Roti", sk:"1.3.1 – 1.3.4 Pecahan positif dan negatif, masalah rutin mudah", lampiran:"nl4",
 kadNama:"Pecahan Negatif", kadEm:"\u{1F956}", kadFakta:"Pecahan negatif berada di sebelah kiri sifar. −1/2 ialah setengah langkah ke kiri dari 0.",
 bosKadNama:"Penyebut Sama", bosKadEm:"\u{1F370}", bosKadFakta:"Untuk tambah atau tolak pecahan, jadikan penyebut sama dahulu. Selepas itu tambah atau tolak pengangka sahaja.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, tetapkan a = 1/4, b = 2/4 dan pilih tambah. Hasilnya ialah:",p:["3/4","1/4","2/8","3/8"],b:0,u:"Penyebut sama, jadi tambah pengangka: 1 + 2 = 3. Hasilnya 3/4.",kira:()=>fr(1+2,4)==="3/4"},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan a = −1/4, b = 3/4 dan pilih tambah. Hasilnya ialah:",p:["1/2","−1/2","3/4","1/4"],b:0,u:"−1 + 3 = 2, jadi hasilnya 2/4 = 1/2.",kira:()=>fr(-1+3,4)==="1/2"},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan a = 1/4, b = 3/4 dan pilih tolak. Hasilnya ialah:",p:["−1/2","1/2","−1/4","−3/4"],b:0,u:"1 − 3 = −2, jadi hasilnya −2/4 = −1/2.",kira:()=>fr(1-3,4)==="-1/2"},
 {j:"pilih",t:"Antara pecahan berikut, yang manakah paling kecil?",p:["−3/4","−1/2","1/4","1/2"],b:0,u:"Pecahan negatif lebih kecil daripada pecahan positif. Antara −3/4 dan −1/2, −3/4 lebih jauh ke kiri.",kira:()=>Math.min(-3/4,-1/2,1/4,1/2)===-3/4},
 {j:"pilih",t:"Yang manakah pernyataan BENAR?",p:["−2/3 &lt; −1/2","−2/3 &gt; −1/2","−1/2 &lt; −3/4","−1/3 &lt; −1/2"],b:0,u:"−2/3 ≈ −0.67 dan −1/2 = −0.5. −0.67 berada di kiri −0.5, jadi −2/3 lebih kecil.",kira:()=>(-2/3<-1/2)&&!(-1/2<-3/4)&&!(-1/3<-1/2)},
 {j:"nombor",t:"Sebuah kedai roti ada 3/4 kg tepung. Ali guna 1/2 kg. Berapa kg tepung yang tinggal? (Jawab dalam perpuluhan)",b:0.25,tol:0.01,suf:"kg",u:"3/4 − 1/2 = 3/4 − 2/4 = 1/4 = 0.25 kg.",kira:()=>3/4-1/2},
 {j:"susun",t:"Susun pecahan ini daripada yang paling kecil kepada yang paling besar.",p:["−3/4","−1/2","0","1/4","2/3"],b:[0,1,2,3,4],u:"Nilai perpuluhan: −0.75, −0.5, 0, 0.25 dan 0.67. Susun dari kiri ke kanan pada garis nombor."},
 {j:"pilih",t:"Seutas tali sepanjang 3/4 m dipotong 1/8 m. Berapakah panjang yang tinggal?",p:["5/8 m","2/4 m","7/8 m","4/8 m"],b:0,u:"3/4 = 6/8. Kemudian 6/8 − 1/8 = 5/8.",kira:()=>fr(6-1,8)==="5/8"}],
 bos:{j:"nombor",t:"Seorang pembuat kek ada 5/2 kg gula (dua setengah kilogram). Dia guna 3/4 kg pada waktu pagi dan 5/4 kg pada waktu petang. Berapa kg gula yang tinggal? (Jawab dalam perpuluhan)",b:0.5,tol:0.01,suf:"kg",u:"Semua ke suku: 5/2 = 10/4. Gula digunakan 3/4 + 5/4 = 8/4. Baki 10/4 − 8/4 = 2/4 = 0.5 kg.",kira:()=>5/2-3/4-5/4}},

{n:5, tempat:"Duit Belanja", sk:"1.4.1 – 1.4.4 Perpuluhan positif dan negatif; 1.2.6, 1.5.3 Masalah kompleks", lampiran:"nl5",
 kadNama:"Perpuluhan Negatif", kadEm:"\u{1F4B5}", kadFakta:"Perpuluhan negatif seperti −0.7 berada di sebelah kiri sifar, lebih dekat kepada 0 daripada −1.2.",
 bosKadNama:"Baki Akaun", bosKadEm:"\u{1F3E6}", bosKadFakta:"Baki akaun negatif bermaksud terlebih guna. Contohnya −RM50 bermaksud awak berhutang RM50 dengan bank.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 1.2, b = −0.7 dan pilih tambah. Berapakah hasilnya?",b:0.5,tol:0.01,u:"1.2 + (−0.7) = 1.2 − 0.7 = 0.5.",kira:()=>1.2+(-0.7)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = −0.8, b = 1.3 dan pilih tolak. Berapakah hasilnya?",b:-2.1,tol:0.01,u:"−0.8 − 1.3 = −2.1.",kira:()=>-0.8-1.3},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = −1.5, b = −0.9 dan pilih tolak. Berapakah hasilnya?",b:-0.6,tol:0.01,u:"Menolak negatif sama seperti menambah positif. −1.5 − (−0.9) = −1.5 + 0.9 = −0.6.",kira:()=>-1.5-(-0.9)},
 {j:"pilih",t:"Antara perpuluhan berikut, yang manakah paling kecil?",p:["−1.25","−1.2","−1.15","−0.5"],b:0,u:"Antara perpuluhan negatif, yang paling jauh dari sifar ialah paling kecil. −1.25 lebih jauh daripada −1.2.",kira:()=>Math.min(-1.25,-1.2,-1.15,-0.5)},
 {j:"pilih",t:"Manakah susunan menaik (kecil ke besar) yang betul?",p:["−0.6, −0.06, 0.06, 0.6","−0.06, −0.6, 0.06, 0.6","−0.6, −0.06, 0.6, 0.06","0.6, 0.06, −0.06, −0.6"],b:0,u:"−0.6 lebih kecil daripada −0.06. Kemudian dua nombor positif: 0.06 lebih kecil daripada 0.6."},
 {j:"nombor",t:"Hitung 2.5 − 3.2 × 0.5 + (−1.4).",b:-0.5,tol:0.01,u:"Darab dahulu: 3.2 × 0.5 = 1.6. Kemudian 2.5 − 1.6 = 0.9, dan 0.9 + (−1.4) = −0.5.",kira:()=>2.5-3.2*0.5+(-1.4)},
 {j:"nombor",t:"Baki akaun Nora ialah −RM12.50 (terlebih guna). Dia menyimpan RM40.00 kemudian berbelanja RM18.75. Berapakah baki akhir dalam RM?",b:8.75,tol:0.01,suf:"RM",u:"−12.50 + 40.00 = 27.50. Kemudian 27.50 − 18.75 = 8.75.",kira:()=>-12.5+40-18.75},
 {j:"pilih",t:"Suhu −3.5 °C naik 6.2 °C kemudian turun 4.1 °C. Berapakah suhu akhir?",p:["−1.4 °C","1.4 °C","−0.4 °C","13.8 °C"],b:0,u:"−3.5 + 6.2 = 2.7. Kemudian 2.7 − 4.1 = −1.4.",kira:()=>Math.abs((-3.5+6.2-4.1)-(-1.4))<1e-9}],
 bos:{j:"nombor",t:"Untung/rugi sebuah kedai selama 5 hari ialah +RM32.50, −RM18.75, +RM45.00, −RM60.25 dan +RM12.00. Berapakah untung bersih dalam RM?",b:10.5,tol:0.01,suf:"RM",u:"32.50 − 18.75 = 13.75. Kemudian +45.00 = 58.75, −60.25 = −1.50, dan +12.00 = 10.50.",kira:()=>32.5-18.75+45-60.25+12}},

{n:6, tempat:"Bengkel Nombor", sk:"1.5.1 – 1.5.3 Nombor nisbah, masalah bukan rutin",lampiran:"nl6",
 kadNama:"Perpuluhan Berulang", kadEm:"\u{1F501}", kadFakta:"1/3 = 0.333... tidak berhenti. Tetapi ia tetap nombor nisbah kerana boleh ditulis sebagai pecahan 1/3.",
 bosKadNama:"Titik Tengah", bosKadEm:"\u{1F3AF}", bosKadFakta:"Antara mana-mana dua nombor nisbah sentiasa ada satu lagi nombor nisbah. Purata kedua-duanya ialah satu contoh.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1 (penyebut 8), pecahan 3/8 sama dengan perpuluhan:",p:["0.375","0.385","0.835","0.038"],b:0,u:"3 ÷ 8 = 0.375.",kira:()=>3/8},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pengangka −5. Tukar −5/8 kepada perpuluhan.",b:-0.625,tol:0.001,u:"5 ÷ 8 = 0.625, jadi −5/8 = −0.625.",kira:()=>-5/8},
 {j:"pilih",t:"Dalam Rajah 1 (penyebut 8), pengangka berapakah yang memberi perpuluhan 0.75?",p:["6","24","60","75"],b:0,u:"0.75 × 8 = 6, jadi 6/8 = 0.75.",kira:()=>0.75*8},
 {j:"pilih",t:"Antara 0.3 dan 1/3, yang manakah lebih besar?",p:["1/3","0.3","Sama","Tidak dapat dibandingkan"],b:0,u:"1/3 = 0.333... yang lebih besar sedikit daripada 0.3.",kira:()=>1/3>0.3},
 {j:"pilih",t:"Nombor manakah terletak di antara −1/2 dan −1/4?",p:["−3/8","−5/8","−7/8","−1/8"],b:0,u:"−3/8 = −0.375, iaitu di antara −0.5 dan −0.25. Nombor lain di luar selang itu.",kira:()=>(-3/8>-1/2&&-3/8<-1/4)&&!(-5/8>-1/2)&&!(-7/8>-1/2)&&!(-1/8<-1/4)},
 {j:"nombor",t:"Cari titik tengah (purata) bagi −0.7 dan 0.3.",b:-0.2,tol:0.001,u:"(−0.7 + 0.3) ÷ 2 = −0.4 ÷ 2 = −0.2.",kira:()=>(-0.7+0.3)/2},
 {j:"pilih",t:"Adakah 0.333... (angka 3 berulang) nombor nisbah?",p:["Ya, sebab sama dengan 1/3","Tidak, sebab tidak berhenti","Tidak, sebab bukan integer","Ya, sebab kurang daripada 1"],b:0,u:"Nombor nisbah ialah nombor yang boleh ditulis sebagai p/q. 0.333... = 1/3, jadi ia nombor nisbah."},
 {j:"banyak",t:"Pilih SEMUA nombor nisbah.",p:["−7","0.25","3/5","5/0","8/0"],b:[0,1,2],u:"−7 = −7/1, 0.25 = 1/4 dan 3/5 sudah dalam bentuk p/q. 5/0 dan 8/0 tidak tertakrif kerana penyebutnya sifar."}],
 bos:{j:"buka",
  t:"Reka satu masalah cerita yang memerlukan integer, pecahan dan perpuluhan dalam penyelesaiannya. Rujuk Rajah 1 untuk menukar pecahan kepada perpuluhan.",
  arahan:"Tulis masalah cerita awak, kemudian selesaikan langkah demi langkah dan tunjukkan tertib operasi. Semak jawapan dengan garis nombor atau kaedah kedua.",
  u:"Jawapan TP6 yang kukuh mencipta konteks yang munasabah, menggunakan integer, pecahan dan perpuluhan, mengikut tertib operasi dengan betul dan menyemak jawapan dengan kaedah lain."}}
];

module.exports = {
  id:"m1b1", tingkatan:1, kod:"1.0 Nombor Nisbah",
  tajuk:"Bengkel Nombor",
  subtajuk:"Matematik Ting. 1 · Bab 1 Nombor Nisbah",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal integer, pecahan dan perpuluhan serta meletakkannya pada garis nombor. Langkah seterusnya ialah memahami bahawa semua nombor ini ialah nombor nisbah dan boleh dibanding.",
   2:"{n} memahami nombor nisbah dan dapat menambah serta menolak integer menggunakan garis nombor. Perlu lebih latihan tanda negatif sebelum bergerak ke operasi gabungan.",
   3:"{n} boleh melaksanakan operasi asas dan gabungan operasi bagi integer, pecahan dan perpuluhan mengikut tertib operasi. Galakkan menggunakan hukum operasi untuk mengira dengan cepat.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah melibatkan pecahan positif dan negatif serta membanding dan menyusunnya. Seterusnya latih masalah yang melibatkan beberapa langkah.",
   5:"{n} dapat menyelesaikan masalah rutin yang kompleks melibatkan perpuluhan positif dan negatif, termasuk konteks wang dan suhu. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka masalah bukan rutin yang menggabungkan integer, pecahan dan perpuluhan dengan penyelesaian yang betul dan semakan kedua. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Nombor Nisbah. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut nombor mana lebih kiri dan lebih kanan pada garis nombor dengan bimbingan rakan sebaya."
  },
  lampiran:{ nl1:R_NL1, nl2:R_NL2, nl3:R_NL3, nl4:R_NL4, nl5:R_NL5, nl6:R_NL6 },
  aras:ARAS
};
