/* Sumber kandungan — Matematik KSSM Tingkatan 3, Bab 4 Lukisan Berskala.
   Fail ini disunting tangan. Jalankan `node bina.js m3b4` untuk menyemaknya
   dan menghasilkan bank-m3b4.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum, muka 47 (dskp/matematik-t3.pdf).

   Tulis jawapan betul pada indeks 0. Medan `kira` ialah semakan bebas untuk
   audit (tidak dimasukkan ke bank): tools/semak-jawapan.js. */
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

const SPI = [
"Mempamerkan pengetahuan asas tentang lukisan berskala.",
"Mempamerkan kefahaman tentang lukisan berskala.",
"Mengaplikasikan kefahaman tentang lukisan berskala untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang lukisan berskala dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang lukisan berskala dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang lukisan berskala dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: rajah interaktif ---------- */

const R_BILIK = {
  jenis:"interaktif", w:"berskala", p:8, l:6, unit:"m", i:0, pilihan:[[1,50],[1,100],[1,200]],
  kapsyen:"Rajah 1 · Bilik darjah 8 m × 6 m. Gerakkan gelongsor untuk menukar skala lukisan.",
  alt:"Rajah interaktif bilik darjah 8 meter kali 6 meter dilukis pada skala yang boleh diubah"
};
const R_SEMUT = {
  jenis:"interaktif", w:"berskala", p:6, l:4, unit:"mm", i:0, pilihan:[[5,1],[10,1],[20,1]],
  kapsyen:"Rajah 1 · Seekor semut 6 mm × 4 mm dibesarkan. Skala 5 : 1 bermaksud lukisan lima kali lebih besar.",
  alt:"Rajah interaktif seekor semut 6 milimeter kali 4 milimeter dilukis dengan skala pembesaran"
};
const R_PADANG = {
  jenis:"interaktif", w:"berskala", p:12, l:9, unit:"m", i:0, pilihan:[[1,200],[1,300],[1,400],[1,600]],
  kapsyen:"Rajah 1 · Padang 12 m × 9 m. Setiap skala menghasilkan saiz lukisan yang berbeza.",
  alt:"Rajah interaktif padang 12 meter kali 9 meter dilukis pada empat skala yang berbeza"
};
const R_GRID = {
  jenis:"interaktif", w:"grid", bentuk:[[0,0],[4,0],[4,2],[2,2],[2,3],[0,3]], faktor:[[1,2],[1,1],[2,1],[3,1]], i:1, cabar:true,
  kapsyen:"Rajah 1 · Bentuk pada grid (garis putus ialah bentuk asal). Pilih skala untuk membesar atau mengecilkan.",
  alt:"Rajah interaktif bentuk L pada grid petak dibesarkan atau dikecilkan mengikut skala dipilih"
};
const R_TAMAN = {
  jenis:"interaktif", w:"berskala", p:20, l:12, unit:"m", i:0, pilihan:[[1,200],[1,400],[1,500],[1,1000]], cabar:true,
  kapsyen:"Rajah 1 · Taman 20 m × 12 m. Pilih skala, kira ukuran lukisan, kemudian semak dengan rajah.",
  alt:"Rajah interaktif taman 20 meter kali 12 meter dilukis pada empat skala, mod cabar"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Papan Peta", sk:"4.1.1 / 4.1.2 Lukisan berskala dan skala", lampiran:"bilik",
 kadNama:"Peta Kecil", kadEm:"\u{1F5FA}\u{FE0F}", kadFakta:"Peta dunia yang muat dalam buku juga ialah lukisan berskala: jarak yang beribu kilometer dikecilkan menjadi beberapa sentimeter.",
 bosKadNama:"Arkitek", bosKadEm:"\u{1F4D0}", bosKadFakta:"Arkitek melukis sebuah bangunan pada skala 1 : 100 sebelum sebatang batu pun disusun, supaya kesilapan ditemui atas kertas dahulu.",
 soalan:[
 {j:"pilih",t:"Lukisan berskala ialah lukisan yang:",p:["Mengekalkan nisbah ukuran sebenar objek","Sama besar dengan objek sebenar","Hanya boleh dibesarkan, tidak boleh dikecilkan","Tidak memerlukan sebarang skala"],b:0,u:"Semua ukuran dalam lukisan berskala diubah dengan nisbah yang sama, jadi bentuk objek tidak berubah."},
 {j:"pilih",t:"Skala 1 : 100 bermaksud:",p:["1 unit pada lukisan mewakili 100 unit sebenar","100 unit pada lukisan mewakili 1 unit sebenar","Lukisan lebih besar 100 kali daripada objek","Objek sebenar sama saiz dengan lukisan"],b:0,u:"Nombor pertama ialah ukuran lukisan dan nombor kedua ialah ukuran sebenar."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan skala 1 : 100. Berapakah panjang lukisan bilik darjah (cm)?",b:8,tol:0.05,suf:"cm",u:"Panjang sebenar 8 m = 800 cm. Pada skala 1 : 100, panjang lukisan = 800 ÷ 100 = 8 cm.",kira:()=>800/100},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan skala 1 : 200. Berapakah lebar lukisan bilik darjah (cm)?",b:3,tol:0.05,suf:"cm",u:"Lebar sebenar 6 m = 600 cm. Lukisan = 600 ÷ 200 = 3 cm.",kira:()=>600/200},
 {j:"pilih",t:"Pada sebuah peta berskala 1 : 50 000, 1 cm pada peta mewakili:",p:["500 m","50 m","5 km","50 000 m"],b:0,u:"1 cm × 50 000 = 50 000 cm = 500 m.",kira:()=>50000/100},
 {j:"pilih",t:"Skala manakah menghasilkan lukisan yang PALING KECIL bagi objek yang sama?",p:["1 : 500","1 : 50","1 : 100","1 : 200"],b:0,u:"Semakin besar nombor kedua, semakin banyak ukuran sebenar diwakili 1 cm, jadi lukisan semakin kecil."},
 {j:"pilih",t:"Skala 3 : 1 menunjukkan bahawa lukisan itu:",p:["Tiga kali lebih besar daripada objek sebenar","Tiga kali lebih kecil daripada objek sebenar","Sama saiz dengan objek sebenar","Satu pertiga daripada objek sebenar"],b:0,u:"Apabila nombor pertama lebih besar, lukisan dibesarkan berbanding objek sebenar."},
 {j:"susun",t:"Susun skala berikut daripada lukisan paling kecil kepada lukisan paling besar.",p:["1 : 200","1 : 20","1 : 2","2 : 1"],b:[0,1,2,3],u:"Nilai skala ialah 0.005, 0.05, 0.5 dan 2 (lukisan ÷ sebenar)."}],
 bos:{j:"banyak",t:"Pilih SEMUA skala yang menghasilkan lukisan lebih KECIL daripada objek sebenar.",p:["1 : 4","1 : 250","1 : 10 000","2 : 1","5 : 1","1 : 1"],b:[0,1,2],u:"Skala dengan nombor kedua lebih besar mengecilkan objek. 2 : 1 dan 5 : 1 membesarkan, manakala 1 : 1 sama saiz."}},

{n:2, tempat:"Kad Skala", sk:"4.1.1 / 4.1.2 Skala mengecil dan skala membesar", lampiran:"semut",
 kadNama:"Mikroskop", kadEm:"\u{1F52C}", kadFakta:"Gambar sel dalam buku sains selalunya dibesarkan ratusan kali. Skala pembesaran ditulis di sudut gambar supaya ukuran sebenar boleh dikira.",
 bosKadNama:"Nisbah Sama", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Skala 1 : 5, 2 : 10 dan 10 : 50 ialah nisbah yang sama, seperti pecahan setara. Kadaran ialah asas semua lukisan berskala.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan skala 10 : 1. Berapakah panjang lukisan semut (cm)?",b:6,tol:0.05,suf:"cm",u:"Panjang sebenar 6 mm × 10 = 60 mm = 6 cm.",kira:()=>6*10/10},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan skala 20 : 1. Berapakah lebar lukisan semut (cm)?",b:8,tol:0.05,suf:"cm",u:"Lebar sebenar 4 mm × 20 = 80 mm = 8 cm.",kira:()=>4*20/10},
 {j:"pilih",t:"Sebutir pasir sepanjang 2 mm dilukis sepanjang 6 cm. Skala lukisan itu ialah:",p:["30 : 1","1 : 30","3 : 1","60 : 1"],b:0,u:"6 cm = 60 mm. Skala = 60 : 2 = 30 : 1.",kira:()=>60/2,sama:true},
 {j:"pilih",t:"Sebuah peta berskala 1 : 200 000. Dua bandar berjarak 3 cm pada peta. Jarak sebenar ialah:",p:["6 km","60 km","0.6 km","600 km"],b:0,u:"3 cm × 200 000 = 600 000 cm = 6 000 m = 6 km.",kira:()=>3*200000/100000},
 {j:"pilih",t:"Pada skala 1 : 25, 1 cm pada lukisan mewakili berapa cm sebenar?",p:["25 cm","2.5 cm","0.04 cm","250 cm"],b:0,u:"Nombor kedua skala 1 : n ialah bilangan cm sebenar bagi setiap 1 cm lukisan."},
 {j:"pilih",t:"Sebuah lukisan berskala 1 : 40 dilukis semula pada skala 1 : 80. Lukisan baharu itu menjadi:",p:["Separuh saiz lukisan asal","Dua kali saiz lukisan asal","Sama saiz","Suku saiz lukisan asal"],b:0,u:"Skala 1 : 80 mengecilkan dua kali lebih banyak daripada 1 : 40, jadi ukuran lukisan menjadi separuh."},
 {j:"nombor",t:"Sebatang pensel 15 cm dilukis dengan panjang 3 cm. Skalanya ialah 1 : n. Cari n.",b:5,tol:0.05,u:"3 : 15 = 1 : 5, jadi n = 5.",kira:()=>15/3},
 {j:"pilih",t:"Manakah skala yang sama nilainya dengan 1 : 4?",p:["2 : 8","4 : 1","1 : 2","3 : 8"],b:0,u:"Darabkan kedua-dua nombor dengan 2: 1 : 4 = 2 : 8. 3 : 8 bersamaan 1 : 2.67 sahaja."}],
 bos:{j:"banyak",t:"Pilih SEMUA skala yang bersamaan dengan 1 : 5.",p:["2 : 10","3 : 15","10 : 50","5 : 1","1 : 50","4 : 25"],b:[0,1,2],u:"Bahagi nombor kedua dengan nombor pertama mesti 5. Skala 4 : 25 ialah 1 : 6.25."}},

{n:3, tempat:"Meja Arkitek", sk:"4.1.3 Menentukan skala, ukuran objek dan ukuran lukisan", lampiran:"padang",
 kadNama:"Tiga Pemboleh Ubah", kadEm:"\u{1F9EE}", kadFakta:"Dalam lukisan berskala ada tiga nilai: ukuran lukisan, ukuran sebenar dan skala. Jika dua diketahui, yang ketiga sentiasa boleh dikira.",
 bosKadNama:"Tinggi Menara", bosKadEm:"\u{1F3D7}\u{FE0F}", bosKadFakta:"Bangunan setinggi 300 m dilukis pada skala 1 : 1 000 hanyalah 30 cm, sekadar sepanjang pembaris besar.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan skala 1 : 400. Berapakah panjang lukisan padang (cm)?",b:3,tol:0.05,suf:"cm",u:"Panjang sebenar 12 m = 1 200 cm. Lukisan = 1 200 ÷ 400 = 3 cm.",kira:()=>1200/400},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan skala 1 : 600. Berapakah lebar lukisan padang (cm)?",b:1.5,tol:0.05,suf:"cm",u:"Lebar sebenar 9 m = 900 cm. Lukisan = 900 ÷ 600 = 1.5 cm.",kira:()=>900/600},
 {j:"pilih",t:"Sebuah kereta sepanjang 4.5 m dilukis sepanjang 9 cm. Skala lukisan ialah:",p:["1 : 50","50 : 1","1 : 5","1 : 500"],b:0,u:"4.5 m = 450 cm. Skala = 9 : 450 = 1 : 50.",kira:()=>450/9,sama:true},
 {j:"nombor",t:"Skala sebuah lukisan ialah 1 : 250. Bilik sebenar sepanjang 7.5 m. Berapakah panjang lukisan bilik itu (cm)?",b:3,tol:0.05,suf:"cm",u:"7.5 m = 750 cm. Lukisan = 750 ÷ 250 = 3 cm.",kira:()=>750/250},
 {j:"nombor",t:"Pada skala 1 : 500, sebatang jalan dilukis sepanjang 8.4 cm. Berapakah panjang sebenar jalan itu (m)?",b:42,tol:0.05,suf:"m",u:"8.4 cm × 500 = 4 200 cm = 42 m.",kira:()=>8.4*500/100},
 {j:"pilih",t:"Pada lukisan berskala 1 : 20, sebuah meja dilukis sepanjang 6 cm. Panjang meja sebenar ialah:",p:["120 cm","26 cm","0.3 cm","1 200 cm"],b:0,u:"6 cm × 20 = 120 cm.",kira:()=>6*20},
 {j:"nombor",t:"Ukuran sebenar 3.6 m dilukis sepanjang 12 cm. Skalanya ialah 1 : n. Cari n.",b:30,tol:0.05,u:"3.6 m = 360 cm. n = 360 ÷ 12 = 30.",kira:()=>360/12},
 {j:"pilih",t:"Berdasarkan Rajah 1, skala manakah menghasilkan lukisan padang yang PALING BESAR?",p:["1 : 200","1 : 300","1 : 400","1 : 600"],b:0,u:"Nombor kedua paling kecil (200) bermakna 1 cm mewakili ukuran sebenar paling sedikit, jadi lukisan paling besar."}],
 bos:{j:"nombor",t:"Sebuah bangunan setinggi 45 m dilukis dengan skala 1 : 300. Berapakah tinggi lukisan bangunan itu (cm)?",b:15,tol:0.05,suf:"cm",u:"45 m = 4 500 cm. Tinggi lukisan = 4 500 ÷ 300 = 15 cm.",kira:()=>4500/300}},

{n:4, tempat:"Papan Grid", sk:"4.1.4 Melukis lukisan berskala pada grid", lampiran:"grid",
 kadNama:"Grid Ajaib", kadEm:"\u{1F9E9}", kadFakta:"Pelukis kartun sering membesarkan lakaran kecil dengan melukis grid di atasnya, kemudian menyalin petak demi petak pada grid yang lebih besar.",
 bosKadNama:"Luas Berganda", bosKadEm:"\u{2795}", bosKadFakta:"Apabila sisi dibesarkan dua kali, luas menjadi empat kali. Sebab itu pizza 30 cm jauh lebih banyak daripada dua pizza 15 cm.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, bentuk asal mempunyai lebar 4 unit dan tinggi 3 unit. Pada skala 2 : 1, berapakah lebar bentuk baharu?",b:8,tol:0.05,u:"Setiap ukuran didarab 2: 4 × 2 = 8.",kira:()=>4*2},
 {j:"nombor",t:"Dalam Rajah 1, pada skala 3 : 1, berapakah tinggi bentuk baharu?",b:9,tol:0.05,u:"3 × 3 = 9.",kira:()=>3*3},
 {j:"pilih",t:"Bentuk asal dalam Rajah 1 berluas 10 unit persegi. Pada skala 2 : 1, luas bentuk baharu ialah:",p:["40 unit persegi","20 unit persegi","100 unit persegi","12 unit persegi"],b:0,u:"Luas didarab kuasa dua bagi faktor: 10 × 2² = 40.",kira:()=>10*4},
 {j:"pilih",t:"Apabila panjang setiap sisi dibesarkan 3 kali, luas menjadi:",p:["9 kali luas asal","3 kali luas asal","6 kali luas asal","27 kali luas asal"],b:0,u:"Luas bergantung pada dua ukuran (panjang dan lebar), jadi didarab 3 × 3 = 9.",kira:()=>3*3},
 {j:"nombor",t:"Segi empat tepat 3 × 5 unit dibesarkan pada skala 4 : 1. Berapakah luas segi empat tepat baharu (unit persegi)?",b:240,tol:0.5,u:"Sisi baharu 12 × 20 = 240. Atau 15 × 4² = 240.",kira:()=>12*20},
 {j:"pilih",t:"Pada skala 1 : 2, sebuah segi empat sama bersisi 8 unit menjadi segi empat sama bersisi:",p:["4 unit","16 unit","2 unit","6 unit"],b:0,u:"Skala 1 : 2 mengecilkan separuh: 8 ÷ 2 = 4."},
 {j:"pilih",t:"Untuk mengecilkan lukisan pada grid dengan skala 1 : 3, setiap ukuran:",p:["Dibahagi 3","Didarab 3","Ditambah 3","Ditolak 3"],b:0,u:"Skala 1 : 3 bermakna lukisan ialah satu pertiga ukuran asal."},
 {j:"nombor",t:"Dalam Rajah 1, pada skala 1 : 2, berapakah luas bentuk baharu (unit persegi)?",b:2.5,tol:0.05,u:"Luas didarab (1/2)² = 1/4: 10 ÷ 4 = 2.5.",kira:()=>10/4}],
 bos:{j:"nombor",t:"Segi tiga dengan tapak 6 unit dan tinggi 4 unit (luas 12 unit persegi) dibesarkan pada skala 5 : 1. Berapakah luas segi tiga baharu?",b:300,tol:0.5,u:"Luas baharu = 12 × 5² = 300 unit persegi. Atau tapak 30, tinggi 20, luas ½ × 30 × 20 = 300.",kira:()=>0.5*30*20}},

{n:5, tempat:"Pelan Taman", sk:"4.1.5 Menyelesaikan masalah lukisan berskala", lampiran:"taman",
 kadNama:"Pelan Rumah", kadEm:"\u{1F3E1}", kadFakta:"Pelan rumah biasanya berskala 1 : 100. Setiap 1 cm pada pelan ialah 1 m di tapak bina.",
 bosKadNama:"Skala Bar", bosKadEm:"\u{1F4CF}", bosKadFakta:"Peta sering ada skala bar (garisan bertanda) selain 1 : n. Skala bar kekal betul walaupun peta difotostat dengan saiz berbeza.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan skala 1 : 500. Berapakah luas lukisan taman itu (cm²)?",b:9.6,tol:0.05,suf:"cm²",u:"Lukisan: 2 000 ÷ 500 = 4 cm dan 1 200 ÷ 500 = 2.4 cm. Luas = 4 × 2.4 = 9.6 cm².",kira:()=>(2000/500)*(1200/500)},
 {j:"nombor",t:"Skala 1 : 200. Lukisan sebuah kebun berukuran 6 cm × 4 cm. Berapakah luas sebenar kebun itu (m²)?",b:96,tol:0.5,suf:"m²",u:"Ukuran sebenar 6 × 200 = 1 200 cm = 12 m dan 4 × 200 = 800 cm = 8 m. Luas = 12 × 8 = 96 m².",kira:()=>12*8},
 {j:"pilih",t:"Luas sebuah lukisan ialah 12 cm² pada skala 1 : 50. Luas sebenar ialah:",p:["3 m²","0.6 m²","6 m²","30 m²"],b:0,u:"Luas sebenar = 12 × 50² = 30 000 cm² = 3 m² (1 m² = 10 000 cm²).",kira:()=>12*2500/10000},
 {j:"pilih",t:"Pelan rumah berskala 1 : 100 menunjukkan sebuah bilik 4 cm × 3 cm. Lantai bilik itu ditutup jubin persegi bersisi 50 cm. Berapakah bilangan jubin yang diperlukan?",p:["48","96","24","120"],b:0,u:"Bilik sebenar 4 m × 3 m = 12 m² = 120 000 cm². Satu jubin 2 500 cm². Bilangan = 120 000 ÷ 2 500 = 48.",kira:()=>(400*300)/(50*50)},
 {j:"nombor",t:"Jarak sebenar dua kampung ialah 12 km. Pada peta berskala 1 : 50 000, berapakah jarak antara kampung itu (cm)?",b:24,tol:0.5,suf:"cm",u:"12 km = 1 200 000 cm. Jarak pada peta = 1 200 000 ÷ 50 000 = 24 cm.",kira:()=>1200000/50000},
 {j:"pilih",t:"Pada sebuah peta, jarak 5 cm mewakili jarak sebenar 2.5 km. Skala peta itu ialah:",p:["1 : 50 000","1 : 5 000","1 : 500 000","1 : 12 500"],b:0,u:"2.5 km = 250 000 cm. Skala = 5 : 250 000 = 1 : 50 000.",kira:()=>250000/5},
 {j:"pilih",t:"Seorang jurutera menggunakan skala 1 : 250. Sebuah lukisan menara setinggi 40 cm. Tinggi sebenar menara ialah:",p:["100 m","10 m","1 000 m","16 m"],b:0,u:"40 cm × 250 = 10 000 cm = 100 m.",kira:()=>40*250/100},
 {j:"pilih",t:"Lukisan A berskala 1 : 100 dan lukisan B berskala 1 : 250 bagi objek yang sama. Berbanding lukisan B, lukisan A ialah:",p:["2.5 kali lebih besar","2.5 kali lebih kecil","Sama besar","10 kali lebih besar"],b:0,u:"250 ÷ 100 = 2.5. Skala 1 : 100 menghasilkan lukisan yang lebih besar.",kira:()=>250/100,sama:true}],
 bos:{j:"pilih",t:"Ali kata skala 1 : 10 menghasilkan lukisan lebih BESAR daripada skala 1 : 5 kerana 10 lebih besar daripada 5. Adakah Ali betul?",p:["Salah, 1 : 10 menghasilkan lukisan lebih kecil kerana 1 cm mewakili 10 cm sebenar","Betul, kerana 10 lebih besar daripada 5","Betul, kerana nombor kedua yang besar menghasilkan lukisan besar","Salah, kedua-dua skala menghasilkan lukisan sama besar"],b:0,u:"Pada 1 : 5, 1 cm mewakili 5 cm sebenar. Pada 1 : 10, 1 cm mewakili 10 cm sebenar, jadi objek dikecilkan lebih banyak."}},

{n:6, tempat:"Studio Reka", sk:"4.1.5 Masalah lukisan berskala bukan rutin",
 kadNama:"Model Kereta", kadEm:"\u{1F697}", kadFakta:"Kereta mainan koleksi kebiasaannya berskala 1 : 24 atau 1 : 18. Pembuat model mesti mengecilkan setiap bahagian dengan nisbah yang sama.",
 bosKadNama:"Reka Sendiri", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Memilih skala ialah keputusan reka bentuk: terlalu kecil dan butiran hilang, terlalu besar dan kertas tidak muat.",
 soalan:[
 {j:"pilih",t:"Seorang murid mahu melukis pelan bilik 5 m × 4 m pada kertas A4 berukuran 21 cm × 29.7 cm dengan skala 1 : 20. Adakah pelan itu muat?",p:["Muat jika kertas diletakkan melintang","Tidak muat pada mana-mana kedudukan kertas","Muat jika kertas diletakkan menegak sahaja","Muat hanya pada skala 1 : 10"],b:0,u:"Lukisan 25 cm × 20 cm. Kertas melintang 29.7 cm × 21 cm boleh memuatkannya. Kertas menegak (21 cm lebar) tidak boleh memuatkan 25 cm.",kira:()=>500/20<=29.7&&400/20<=21&&!(500/20<=21)},
 {j:"pilih",t:"Sebuah padang 100 m × 60 m mahu dilukis pada kertas 30 cm × 20 cm. Antara skala berikut, yang manakah paling besar tetapi masih muat?",p:["1 : 400","1 : 300","1 : 200","1 : 100"],b:0,u:"Pada 1 : 400 lukisan 25 cm × 15 cm (muat). Pada 1 : 300 lukisan 33.3 cm (tidak muat).",kira:()=>10000/400<=30&&6000/400<=20&&10000/300>30},
 {j:"nombor",t:"Dua peta bagi tempat yang sama berskala 1 : 20 000 dan 1 : 50 000. Jarak antara dua tempat ialah 10 cm pada peta pertama. Berapakah jarak pada peta kedua (cm)?",b:4,tol:0.05,suf:"cm",u:"Jarak sebenar = 10 × 20 000 = 200 000 cm. Pada peta kedua = 200 000 ÷ 50 000 = 4 cm.",kira:()=>10*20000/50000},
 {j:"pilih",t:"Sebuah kereta sebenar sepanjang 4.8 m dibuat model berskala 1 : 24. Panjang model itu ialah:",p:["20 cm","2 cm","115.2 cm","0.2 cm"],b:0,u:"4.8 m = 480 cm. Model = 480 ÷ 24 = 20 cm.",kira:()=>480/24},
 {j:"pilih",t:"Sebuah model tugu berskala 1 : 200 tingginya 15 cm. Jika model baharu dibuat pada skala 1 : 100, tingginya ialah:",p:["30 cm","7.5 cm","15 cm","60 cm"],b:0,u:"Tinggi sebenar = 15 × 200 = 3 000 cm. Model baharu = 3 000 ÷ 100 = 30 cm.",kira:()=>15*200/100},
 {j:"pilih",t:"Pada peta berskala 1 : 10 000, luas sebuah taman ialah 8 cm². Luas sebenar taman itu ialah:",p:["8 hektar","80 hektar","0.8 hektar","800 hektar"],b:0,u:"Luas sebenar = 8 × 10 000² cm² = 800 000 000 cm² = 80 000 m². 1 hektar = 10 000 m², jadi 8 hektar.",kira:()=>8*1e8/1e4/1e4},
 {j:"pilih",t:"Mengapakah pelan jurutera sering mempunyai skala bar (garisan bertanda) selain skala 1 : n?",p:["Skala bar tetap betul walaupun pelan disalin dengan saiz lain","Skala bar menjadikan pelan kelihatan lebih cantik dan kemas","Skala 1 : n tidak boleh dipercayai dalam apa-apa keadaan","Skala bar menggantikan keperluan untuk mengukur langsung"],b:0,u:"Apabila pelan disalin dengan saiz berbeza, 1 : n menjadi salah tetapi garisan skala turut mengecil atau membesar bersamanya."},
 {j:"pilih",t:"Pelan berskala 1 : 100 disalin dengan mesin fotostat pada 50% daripada saiz asal. Skala pelan yang disalin ialah:",p:["1 : 200","1 : 50","1 : 100","1 : 150"],b:0,u:"Lukisan menjadi separuh, jadi 1 cm sekarang mewakili dua kali ukuran sebenar: 1 : 200.",kira:()=>100/0.5}],
 bos:{j:"buka",
  t:"Pilih bilik tidur atau bilik darjah awak. Reka pelan berskala bilik itu pada kertas A4.",
  arahan:"Nyatakan ukuran sebenar bilik dan perabot, pilih skala dan terangkan mengapa skala itu sesuai (muat pada kertas dan butiran masih jelas). Tunjukkan pengiraan ukuran lukisan bagi sekurang-kurangnya tiga objek.",
  u:"Jawapan TP6 yang kukuh memilih skala dengan justifikasi, mengira ukuran lukisan dengan betul, dan memastikan semua objek muat serta kelihatan jelas."}}
];

module.exports = {
  id:"m3b4", tingkatan:3, kod:"4.0 Lukisan Berskala",
  tajuk:"Arkitek Cilik",
  subtajuk:"Matematik Ting. 3 · Bab 4 Lukisan Berskala",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali maksud lukisan berskala dan membaca skala seperti 1 : 100 dan 3 : 1. Langkah seterusnya ialah memahami cara skala menukar ukuran lukisan menjadi ukuran sebenar dan sebaliknya.",
   2:"{n} memahami skala pengecilan dan pembesaran serta hubungan nisbah yang setara. Perlu lebih latihan menukar unit dan membezakan lukisan yang lebih besar daripada yang lebih kecil sebelum bergerak ke TP3.",
   3:"{n} boleh menentukan skala, ukuran lukisan dan ukuran sebenar dengan betul, termasuk menukar unit. Galakkan menyemak jawapan dengan bertanya sama ada lukisan patut lebih kecil atau lebih besar daripada objek.",
   4:"{n} mampu melukis atau menghitung lukisan berskala pada grid dan memahami bahawa luas berubah dengan kuasa dua faktor skala. Seterusnya latih masalah yang melibatkan luas dan isi padu.",
   5:"{n} dapat menyelesaikan masalah lukisan berskala yang kompleks, termasuk luas, peta dan perbandingan dua skala. Sudah bersedia untuk masalah bukan rutin dan tugasan mereka cipta.",
   6:"{n} berjaya mereka pelan berskala dengan skala yang sesuai dan pengiraan yang betul, disertai justifikasi. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Lukisan Berskala. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut apa yang 1 cm pada lukisan mewakili, dengan bimbingan rakan sebaya."
  },
  lampiran:{ bilik:R_BILIK, semut:R_SEMUT, padang:R_PADANG, grid:R_GRID, taman:R_TAMAN },
  aras:ARAS
};
