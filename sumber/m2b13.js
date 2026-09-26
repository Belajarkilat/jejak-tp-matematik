/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 13 Kebarangkalian Mudah.
   Fail ini disunting tangan. Jalankan `node bina.js m2b13` untuk menyemaknya
   dan menghasilkan bank-m2b13.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 2,
   Bahagian Pembangunan Kurikulum, muka 84 (dskp/matematik-t2.pdf). DSKP menulis
   enam tahap penuh bagi bab ini, jadi tiada tahap yang ditambah.

   Semua nilai dikira dengan kod dalam medan `kira` (bebas daripada widget) dan
   dibandingkan oleh tools/semak-jawapan.js. Bagi Rajah 3 (eksperimen), penjana
   rawak berbenih (mulberry32) disalin di sini supaya bilangan kejadian yang
   ditanya boleh disemak tanpa memanggil widget. */

const gcd = (a, b) => b ? gcd(b, a % b) : a;
const frac = (n, N) => { if (n === 0) return "0"; if (n === N) return "1"; const g = gcd(n, N); return (n / g) + "/" + (N / g); };
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const DADU = [1, 2, 3, 4, 5, 6];
const perdana = x => { if (x < 2) return false; for (let d = 2; d * d <= x; d++) if (x % d === 0) return false; return true; };

/* penjana berbenih, salinan bebas bagi widget-m2b13.js */
const rng = a => () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const BENIH = [11, 22, 33];
const kejadianDadu = (larian, cubaan) => { const r = rng(BENIH[larian]); let k = 0; for (let i = 0; i < cubaan; i++) { const v = Math.floor(r() * 6); if (v % 2 === 1) k++; } return k; };   /* indeks 1,3,5 = nombor 2,4,6 */

const SPI = [
"Mempamerkan pengetahuan asas tentang ruang sampel dan peristiwa.",
"Mempamerkan kefahaman tentang hubungan antara ruang sampel dan peristiwa dengan kebarangkalian mudah.",
"Mengaplikasikan kefahaman tentang kebarangkalian mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kebarangkalian mudah dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kebarangkalian mudah dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kebarangkalian mudah dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: rajah kebarangkalian interaktif ---------- */

const keb = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t2keb", kapsyen, alt }, extra);
const R_KEB1 = keb("Rajah 1 · Ruang sampel bagi membaling sebiji dadu. Pilih peristiwa A dan lihat kesudahan yang terlibat.",
  "Rajah interaktif ruang sampel enam kesudahan dadu; gelongsor memilih peristiwa A dan menyerlahkan kesudahan dalam A",
  { mod: "ruang", tajuk: "baling sebiji dadu", S: ["1", "2", "3", "4", "5", "6"], acara: [
    { nama: "nombor genap", idx: [1, 3, 5] }, { nama: "nombor perdana", idx: [1, 2, 4] }, { nama: "lebih daripada 4", idx: [4, 5] },
    { nama: "gandaan 3", idx: [2, 5] }, { nama: "nombor 7", idx: [] }, { nama: "kurang daripada 7", idx: [0, 1, 2, 3, 4, 5] }] });
const R_KEB2 = keb("Rajah 1 · Gambar rajah pokok bagi sebiji syiling dan pemutar 1, 2, 3. Pilih peristiwa A.",
  "Rajah pokok interaktif bagi membaling syiling kemudian memutar pemutar bernombor 1, 2 dan 3, dengan enam kesudahan; gelongsor memilih peristiwa A",
  { mod: "pokok", tajuk: "syiling dan pemutar", peringkat: [["K", "E"], ["1", "2", "3"]], acara: [
    { nama: "kepala", idx: [0, 1, 2] }, { nama: "ekor dan ganjil", idx: [3, 5] }, { nama: "nombor 2", idx: [1, 4] },
    { nama: "kepala dan 3", idx: [2] }, { nama: "nombor ganjil", idx: [0, 2, 3, 5] }] });
const R_KEB3 = keb("Rajah 1 · Baling dadu berulang kali. Ubah bilangan cubaan dan larian, dan perhatikan kekerapan relatif.",
  "Rajah interaktif eksperimen membaling dadu untuk peristiwa nombor genap; gelongsor menukar bilangan cubaan dan larian, dan kekerapan relatif dibandingkan dengan kebarangkalian teori 0.5",
  { mod: "eksperimen", eks: "dadu", idx: [1, 3, 5], namaP: "nombor genap", langkah: [10, 20, 50, 100, 200, 500, 1000], benih: BENIH });
const R_KEB4 = keb("Rajah 1 · Pemutar 8 sektor sama besar. Bayangkan dahulu berapa sektor dalam A, kemudian semak dengan rajah.",
  "Rajah interaktif ruang sampel pemutar lapan sektor bernombor 1 hingga 8; gelongsor memilih peristiwa A",
  { mod: "ruang", cabar: true, tajuk: "putar pemutar 8 sektor", S: ["1", "2", "3", "4", "5", "6", "7", "8"], lajur: 8, acara: [
    { nama: "nombor perdana", idx: [1, 2, 4, 6] }, { nama: "gandaan 4", idx: [3, 7] }, { nama: "faktor bagi 12", idx: [0, 1, 2, 3, 5] },
    { nama: "lebih daripada 5", idx: [5, 6, 7] }, { nama: "genap dan lebih 3", idx: [3, 5, 7] }] });
const R_KEB5 = keb("Rajah 1 · Beg 10 guli: 5 merah, 3 hijau, 2 kuning. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif beg sepuluh guli berwarna merah, hijau dan kuning; gelongsor memilih peristiwa A dan menunjukkan peristiwa pelengkap A'",
  { mod: "pelengkap", cabar: true, beg: [{ n: 5, w: "merah" }, { n: 3, w: "hijau" }, { n: 2, w: "kuning" }], pilihan: [[0], [1], [2], [0, 1], [1, 2], [0, 2]] });
const R_KEB6 = keb("Rajah 1 · Skala kebarangkalian dari 0 hingga 1. Pilih peristiwa dan lihat kedudukan P(A).",
  "Rajah interaktif skala kebarangkalian dari mustahil ke pasti; gelongsor memilih peristiwa dan menunjukkan nilai P(A) pada skala",
  { mod: "skala", acara: [
    { nama: "dadu 7", t: "Mendapat nombor 7 apabila dadu dibaling", n: 0, N: 6 },
    { nama: "dadu genap", t: "Mendapat nombor genap apabila dadu dibaling", n: 3, N: 6 },
    { nama: "kurang 7", t: "Mendapat nombor kurang daripada 7 apabila dadu dibaling", n: 6, N: 6 },
    { nama: "As dalam 52 kad", t: "Memilih kad As daripada 52 keping kad", n: 4, N: 52 },
    { nama: "syiling kepala", t: "Mendapat kepala apabila syiling dibaling", n: 1, N: 2 },
    { nama: "merah 3 daripada 12", t: "Memilih guli merah daripada 12 guli (3 merah)", n: 3, N: 12 }] });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kedai Dadu", sk:"13.2.1 Ruang sampel dan peristiwa", lampiran:"keb1",
 kadNama:"Ruang Sampel", kadEm:"\u{1F3B2}", kadFakta:"Ruang sampel ialah senarai semua kesudahan yang mungkin. Bagi sebiji dadu, ia ada enam kesudahan, iaitu 1 hingga 6.",
 bosKadNama:"Peristiwa Mustahil", bosKadEm:"\u{1F6AB}", bosKadFakta:"Peristiwa yang tiada kesudahan langsung ialah set kosong. Contohnya mendapat nombor 7 apabila membaling sebiji dadu biasa.",
 soalan:[
 {j:"pilih",t:"Set semua kesudahan yang mungkin bagi suatu eksperimen dipanggil:",p:["Ruang sampel","Peristiwa","Pelengkap","Kekerapan relatif"],b:0,u:"Ruang sampel ialah set semua kesudahan yang mungkin, ditulis S."},
 {j:"pilih",t:"Sebiji dadu adil dibaling sekali. Ruang sampel S ialah:",p:["{1, 2, 3, 4, 5, 6}","{1, 2, 3, 4, 5, 6, 7, 8}","{1, 2, 3, 4, 5}","{2, 4, 6, 8, 10, 12}"],b:0,u:"Dadu ada enam muka bernombor 1 hingga 6, jadi S = {1, 2, 3, 4, 5, 6}."},
 {j:"pilih",t:"Sebiji syiling dibaling sekali. Dengan K = kepala dan E = ekor, ruang sampel ialah:",p:["{K, E}","{K, K, E}","{E, E, K}","{K, E, K, E}"],b:0,u:"Syiling hanya ada dua kesudahan, kepala atau ekor."},
 {j:"nombor",t:"Dalam Rajah 1, pilih peristiwa 'nombor genap'. Berapakah n(A), bilangan kesudahan dalam peristiwa A?",b:3,tol:0.01,u:"Nombor genap dalam ruang sampel ialah 2, 4 dan 6, jadi n(A) = 3.",kira:()=>DADU.filter(x=>x%2===0).length},
 {j:"nombor",t:"Dalam Rajah 1, pilih peristiwa 'nombor perdana'. Berapakah n(A)?",b:3,tol:0.01,u:"Nombor perdana dalam S ialah 2, 3 dan 5. Nombor 1 bukan perdana.",kira:()=>DADU.filter(perdana).length},
 {j:"pilih",t:"Dalam Rajah 1, pilih peristiwa 'nombor 7'. Peristiwa A ialah set kosong. Ini bermaksud peristiwa itu:",p:["Mustahil berlaku","Pasti berlaku","Sama mungkin berlaku atau tidak","Berlaku separuh daripada masa"],b:0,u:"Tiada nombor 7 pada dadu, jadi peristiwa itu tidak boleh berlaku."},
 {j:"pilih",t:"Peristiwa ialah:",p:["Sebahagian kesudahan dalam ruang sampel","Kesudahan yang mesti berlaku setiap kali","Bilangan kali eksperimen dijalankan","Nilai kebarangkalian yang dicatat"],b:0,u:"Peristiwa ialah subset kepada ruang sampel, iaitu kesudahan yang memenuhi satu syarat."},
 {j:"susun",t:"Susun langkah menentukan suatu peristiwa bagi eksperimen membaling dadu.",p:["Senaraikan semua kesudahan dalam ruang sampel","Baca syarat peristiwa yang diminta","Pilih kesudahan yang memenuhi syarat itu","Tulis peristiwa sebagai satu set"],b:[0,1,2,3],u:"Kenal ruang sampel dahulu, kemudian tapis mengikut syarat, dan akhir sekali tulis sebagai set."}],
 bos:{j:"banyak",t:"Sebiji dadu dibaling sekali. Pilih SEMUA pernyataan yang BENAR.",p:["Ruang sampel S mempunyai 6 kesudahan","Peristiwa 'lebih daripada 6' ialah set kosong","Peristiwa 'nombor perdana' = {2, 3, 5}","Peristiwa 'nombor genap' = {2, 4, 6, 8}","Nombor 1 ialah peristiwa dengan dua kesudahan","Ruang sampel S = {2, 4, 6}"],b:[0,1,2],u:"Dadu tiada nombor 8. Nombor 1 ialah satu kesudahan sahaja, dan ruang sampel mengandungi semua enam nombor."}},

{n:2, tempat:"Pokok Syiling", sk:"13.2.1 / 13.2.2 Gambar rajah pokok dan kebarangkalian teori", lampiran:"keb2",
 kadNama:"Pokok Kesudahan", kadEm:"\u{1F333}", kadFakta:"Gambar rajah pokok menyenaraikan setiap kesudahan eksperimen yang berperingkat. Setiap cabang ialah satu kemungkinan, dan setiap laluan hingga ke daun ialah satu kesudahan.",
 bosKadNama:"Tiga Syiling", bosKadEm:"\u{1FA99}", bosKadFakta:"Apabila tiga syiling dibaling, ada 2 × 2 × 2 = 8 kesudahan. Setiap syiling menggandakan bilangan kesudahan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, berapakah bilangan kesudahan dalam ruang sampel S, iaitu n(S)?",b:6,tol:0.01,u:"Syiling ada 2 kesudahan dan pemutar ada 3, jadi n(S) = 2 × 3 = 6.",kira:()=>2*3},
 {j:"pilih",t:"Dalam Rajah 1, pilih peristiwa 'kepala'. Peristiwa A ialah:",p:["{K1, K2, K3}","{K1, K2, K3, E1}","{K1, K2, K3, K4}","{K1, E1, K2, E2}"],b:0,u:"Kepala boleh berpasangan dengan pemutar 1, 2 atau 3, jadi A = {K1, K2, K3}."},
 {j:"nombor",t:"Dalam Rajah 1, pilih peristiwa 'ekor dan ganjil'. Berapakah n(A)?",b:2,tol:0.01,u:"Ekor dengan ganjil ialah E1 dan E3, jadi n(A) = 2.",kira:()=>["1","3"].length},
 {j:"pilih",t:"Dalam Rajah 1, pilih peristiwa 'nombor 2'. Kesudahan dalam A ialah:",p:["{K2, E2}","{K2}","{2, 2}","{K1, K2, K3}"],b:0,u:"Nombor 2 boleh keluar bersama kepala atau ekor, jadi K2 dan E2."},
 {j:"pilih",t:"Dalam Rajah 1, pilih peristiwa 'kepala'. Kebarangkalian P(A) ialah:",p:["1/2","1/3","1/6","2/3"],b:0,u:"n(A) = 3 dan n(S) = 6, jadi P(A) = 3/6 = 1/2.",kira:()=>frac(3,6)==="1/2"},
 {j:"pilih",t:"Dalam Rajah 1, pilih peristiwa 'kepala dan 3'. P(A) ialah:",p:["1/6","1/3","1/2","1/4"],b:0,u:"Hanya K3 memenuhi syarat, jadi n(A) = 1 dan P(A) = 1/6.",kira:()=>frac(1,6)==="1/6"},
 {j:"pilih",t:"Gambar rajah pokok berguna kerana ia:",p:["Menyenaraikan semua kesudahan dengan teratur","Mengira kebarangkalian tanpa perlu ruang sampel","Menunjukkan kesudahan yang paling kerap sahaja","Menggantikan keperluan memilih peristiwa"],b:0,u:"Setiap laluan dari akar ke daun ialah satu kesudahan, jadi tiada kesudahan yang tertinggal."},
 {j:"nombor",t:"Sebiji syiling dibaling, kemudian sebiji dadu dibaling. Berapakah n(S) bagi eksperimen ini?",b:12,tol:0.01,u:"2 kesudahan syiling darab 6 kesudahan dadu memberi 12.",kira:()=>2*6}],
 bos:{j:"nombor",t:"Tiga syiling dibaling serentak. Berapakah bilangan kesudahan dalam ruang sampel?",b:8,tol:0.01,u:"Setiap syiling ada 2 kesudahan, jadi 2 × 2 × 2 = 8.",kira:()=>Math.pow(2,3)}},

{n:3, tempat:"Makmal Percubaan", sk:"13.1.1 / 13.1.2 Eksperimen kebarangkalian dan kesimpulan", lampiran:"keb3",
 kadNama:"Kekerapan Relatif", kadEm:"\u{1F4CA}", kadFakta:"Kekerapan relatif ialah bilangan kejadian dibahagi bilangan cubaan. Apabila cubaan bertambah, ia menghampiri satu nilai tertentu.",
 bosKadNama:"Sampel Besar", bosKadEm:"\u{1F52C}", bosKadFakta:"Cubaan yang sedikit memberi keputusan yang berubah-ubah. Cubaan yang banyak memberi keputusan yang lebih stabil.",
 soalan:[
 {j:"pilih",t:"Kekerapan relatif suatu peristiwa dikira dengan:",p:["Bilangan kejadian ÷ bilangan cubaan","Bilangan cubaan ÷ bilangan kejadian","Bilangan kejadian × bilangan cubaan","Bilangan kejadian − bilangan cubaan"],b:0,u:"Kekerapan relatif = bilangan kejadian ÷ bilangan cubaan."},
 {j:"nombor",t:"Sebiji dadu dibaling 50 kali. Nombor genap muncul 22 kali. Berapakah kekerapan relatif nombor genap (perpuluhan)?",b:0.44,tol:0.001,u:"22 ÷ 50 = 0.44.",kira:()=>bunda(22/50,2)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan cubaan 1000 dan larian ke-1. Berapakah bilangan kejadian nombor genap?",b:kejadianDadu(0,1000),tol:0.01,u:"Pada 1000 cubaan larian ke-1, nombor genap muncul "+kejadianDadu(0,1000)+" kali.",kira:()=>kejadianDadu(0,1000)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan cubaan 1000 dan larian ke-3. Berapakah bilangan kejadian nombor genap?",b:kejadianDadu(2,1000),tol:0.01,u:"Larian ke-3 pada 1000 cubaan mencatat "+kejadianDadu(2,1000)+" kejadian.",kira:()=>kejadianDadu(2,1000)},
 {j:"pilih",t:"Dalam Rajah 1, apabila bilangan cubaan semakin besar, kekerapan relatif nombor genap menghampiri:",p:["Kebarangkalian teori 0.5","Sifar, kerana cubaan terlalu banyak","Satu, kerana semua cubaan berjaya","Bilangan cubaan yang dijalankan"],b:0,u:"Kebarangkalian teori nombor genap ialah 3/6 = 0.5, dan kekerapan relatif menuju nilai itu jika cubaan cukup besar."},
 {j:"pilih",t:"Pada 10 cubaan, kekerapan relatif dalam tiga larian berbeza-beza. Ini kerana:",p:["Cubaan sedikit, jadi keputusan kurang stabil","Dadu itu tidak adil apabila cubaan sedikit","Kebarangkalian teori berubah pada setiap larian","Kekerapan relatif sentiasa 0.5 pada 10 cubaan"],b:0,u:"Cubaan yang sedikit memberi nilai yang berubah-ubah. Nilai menjadi stabil apabila cubaan bertambah."},
 {j:"nombor",t:"Sebuah pemutar diputar 200 kali dan warna merah muncul 62 kali. Anggarkan kebarangkalian eksperimen mendapat merah (perpuluhan).",b:0.31,tol:0.001,u:"62 ÷ 200 = 0.31.",kira:()=>bunda(62/200,2)},
 {j:"susun",t:"Susun langkah menjalankan eksperimen kebarangkalian.",p:["Tentukan peristiwa yang diperhatikan","Ulang eksperimen dan catat setiap kesudahan","Kira bilangan kejadian peristiwa itu","Bahagi bilangan kejadian dengan bilangan cubaan"],b:[0,1,2,3],u:"Tetapkan peristiwa, kumpul data, kira kejadian, kemudian dapatkan kekerapan relatif."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, tetapkan cubaan 500 dan larian ke-2. Berapakah bilangan kejadian nombor genap?",b:kejadianDadu(1,500),tol:0.01,u:"Pada 500 cubaan larian ke-2, nombor genap muncul "+kejadianDadu(1,500)+" kali.",kira:()=>kejadianDadu(1,500)}},

{n:4, tempat:"Meja Pemutar", sk:"13.2.2 / 13.2.3 Model kebarangkalian P(A) = n(A) ÷ n(S)", lampiran:"keb4",
 kadNama:"Model Teori", kadEm:"\u{1F3AF}", kadFakta:"Bagi kesudahan yang sama mungkin, kebarangkalian teori ialah n(A) ÷ n(S). Ia dikira tanpa perlu menjalankan eksperimen.",
 bosKadNama:"Kesudahan Sama Mungkin", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Model P(A) = n(A) ÷ n(S) hanya betul apabila setiap kesudahan sama mungkin, seperti dadu yang adil atau pemutar yang sektornya sama besar.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih peristiwa 'nombor perdana'. Kira P(A) sebagai perpuluhan.",b:0.5,tol:0.001,u:"Nombor perdana dalam 1 hingga 8 ialah 2, 3, 5 dan 7. P(A) = 4/8 = 0.5.",kira:()=>[1,2,3,4,5,6,7,8].filter(perdana).length/8},
 {j:"pilih",t:"Dalam Rajah 1, pilih peristiwa 'gandaan 4'. P(A) ialah:",p:["1/4","1/2","1/8","3/8"],b:0,u:"Gandaan 4 ialah 4 dan 8, jadi P(A) = 2/8 = 1/4.",kira:()=>frac([1,2,3,4,5,6,7,8].filter(x=>x%4===0).length,8)==="1/4"},
 {j:"pilih",t:"Dalam Rajah 1, pilih peristiwa 'faktor bagi 12'. P(A) ialah:",p:["5/8","1/2","3/4","1/8"],b:0,u:"Faktor 12 dalam S ialah 1, 2, 3, 4 dan 6, jadi P(A) = 5/8.",kira:()=>frac([1,2,3,4,5,6,7,8].filter(x=>12%x===0).length,8)==="5/8"},
 {j:"nombor",t:"Dalam Rajah 1, pilih peristiwa 'lebih daripada 5'. Kira P(A) sebagai perpuluhan.",b:0.375,tol:0.001,u:"Nombor lebih daripada 5 ialah 6, 7 dan 8, jadi P(A) = 3/8 = 0.375.",kira:()=>bunda([1,2,3,4,5,6,7,8].filter(x=>x>5).length/8,3)},
 {j:"pilih",t:"Sebuah beg mengandungi 5 bola biru dan 3 bola putih. Sebiji bola dipilih secara rawak. P(biru) ialah:",p:["5/8","3/8","5/3","1/2"],b:0,u:"n(biru) = 5 dan n(S) = 8, jadi P(biru) = 5/8.",kira:()=>frac(5,8)==="5/8"},
 {j:"nombor",t:"Sebuah kotak berisi 20 batang pen, dan 6 daripadanya berwarna merah. Sebatang pen dipilih secara rawak. Kira P(merah) sebagai perpuluhan.",b:0.3,tol:0.001,u:"6 ÷ 20 = 0.3.",kira:()=>bunda(6/20,2)},
 {j:"pilih",t:"Kebarangkalian teori suatu peristiwa A bagi kesudahan yang sama mungkin dikira dengan rumus:",p:["P(A) = n(A) ÷ n(S)","P(A) = n(S) ÷ n(A)","P(A) = n(A) × n(S)","P(A) = n(S) − n(A)"],b:0,u:"Kebarangkalian ialah bilangan kesudahan dalam A dibahagi bilangan kesudahan dalam ruang sampel."},
 {j:"nombor",t:"Dalam sebuah kelas yang ada 40 orang murid, 14 orang datang ke sekolah dengan bas. Seorang murid dipilih secara rawak. Kira P(murid itu naik bas) sebagai perpuluhan.",b:0.35,tol:0.001,u:"14 ÷ 40 = 0.35.",kira:()=>bunda(14/40,2)}],
 bos:{j:"nombor",t:"Sebuah beg mengandungi 4 bola merah, 6 bola hijau dan x bola kuning. Jika P(kuning) = 1/3, berapakah nilai x?",b:5,tol:0.01,u:"x ÷ (10 + x) = 1/3, jadi 3x = 10 + x. Maka 2x = 10 dan x = 5. Semak: 5/15 = 1/3.",kira:()=>{for(let x=1;x<100;x++) if(3*x===10+x) return x;}}},

{n:5, tempat:"Beg Guli", sk:"13.3.1 / 13.3.2 Peristiwa pelengkap", lampiran:"keb5",
 kadNama:"Pelengkap", kadEm:"\u{1F517}", kadFakta:"Peristiwa pelengkap A' ialah semua kesudahan dalam ruang sampel yang tidak dalam A. A dan A' bersama-sama membentuk seluruh ruang sampel.",
 bosKadNama:"Jumlah Satu", bosKadEm:"\u{2795}", bosKadFakta:"P(A) + P(A') = 1 kerana sama ada A berlaku atau A tidak berlaku. Tiada kemungkinan ketiga.",
 soalan:[
 {j:"pilih",t:"Peristiwa pelengkap bagi peristiwa A, ditulis A', bermaksud:",p:["Peristiwa A tidak berlaku","Peristiwa A berlaku dua kali","A dan S berlaku serentak","Peristiwa yang mustahil berlaku"],b:0,u:"A' terdiri daripada semua kesudahan dalam ruang sampel yang bukan dalam A."},
 {j:"nombor",t:"Dalam Rajah 1, pilih peristiwa 'merah'. Kira P(A') sebagai perpuluhan.",b:0.5,tol:0.001,u:"n(A) = 5 daripada 10, jadi P(A) = 0.5 dan P(A') = 1 − 0.5 = 0.5.",kira:()=>bunda(1-5/10,2)},
 {j:"pilih",t:"Dalam Rajah 1, pilih peristiwa 'hijau'. P(A') ialah:",p:["7/10","3/10","1/10","3/7"],b:0,u:"P(hijau) = 3/10, jadi P(A') = 1 − 3/10 = 7/10.",kira:()=>frac(10-3,10)==="7/10"},
 {j:"nombor",t:"Dalam Rajah 1, pilih peristiwa 'merah atau hijau'. Berapakah n(A'), iaitu bilangan guli dalam A'?",b:2,tol:0.01,u:"A' ialah guli kuning sahaja, jadi n(A') = 10 − 5 − 3 = 2.",kira:()=>10-5-3},
 {j:"pilih",t:"Rumus yang betul bagi kebarangkalian peristiwa pelengkap ialah:",p:["P(A') = 1 − P(A)","P(A') = P(A) − 1","P(A') = 1 + P(A)","P(A') = P(A) ÷ 1"],b:0,u:"Oleh sebab P(A) + P(A') = 1, maka P(A') = 1 − P(A)."},
 {j:"nombor",t:"Kebarangkalian hujan esok ialah 0.35. Berapakah kebarangkalian tidak hujan?",b:0.65,tol:0.001,u:"P(tidak hujan) = 1 − 0.35 = 0.65.",kira:()=>bunda(1-0.35,2)},
 {j:"pilih",t:"Antara nilai berikut, yang manakah TIDAK mungkin menjadi nilai suatu kebarangkalian?",p:["1.2","0","0.5","1"],b:0,u:"Kebarangkalian sentiasa antara 0 dan 1, jadi 1.2 tidak mungkin.",kira:()=>1.2>1},
 {j:"nombor",t:"Dalam suatu jualan, kebarangkalian seorang pelanggan membeli ialah 3/8. Cari kebarangkalian pelanggan tidak membeli sebagai perpuluhan.",b:0.625,tol:0.001,u:"P(tidak membeli) = 1 − 3/8 = 5/8 = 0.625.",kira:()=>bunda(1-3/8,3)}],
 bos:{j:"banyak",t:"Bagi peristiwa A dengan P(A) = 2/5, pilih SEMUA pernyataan yang BENAR.",p:["P(A') = 3/5","P(A) + P(A') = 1","0 ≤ P(A) ≤ 1","P(A') = 2/5","P(A') lebih besar daripada 1","A dan A' boleh berlaku serentak"],b:[0,1,2],u:"P(A') = 1 − 2/5 = 3/5. Kebarangkalian tidak melebihi 1, dan A serta A' tidak boleh berlaku serentak."}},

{n:6, tempat:"Studio Reka", sk:"13.4.1 Masalah kebarangkalian bukan rutin", lampiran:"keb6",
 kadNama:"Skala Peluang", kadEm:"\u{1F4CF}", kadFakta:"Kebarangkalian berada antara 0 dan 1. Sifar bermaksud mustahil, satu bermaksud pasti, dan 0.5 bermaksud sama mungkin berlaku atau tidak.",
 bosKadNama:"Reka Permainan", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Permainan yang adil ialah permainan yang setiap pemain ada peluang menang yang sama. Kebarangkalian membantu kita mereka permainan yang adil.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih peristiwa 'dadu 7'. Penanda P(A) berada di:",p:["0, peristiwa mustahil","1, peristiwa yang pasti berlaku","0.5, sama mungkin berlaku","0.25, agak jarang berlaku"],b:0,u:"Tiada nombor 7 pada dadu, jadi P(A) = 0/6 = 0."},
 {j:"pilih",t:"Dalam Rajah 1, pilih peristiwa 'kurang 7'. Peristiwa ini:",p:["Pasti berlaku, P(A) = 1","Mustahil, P(A) = 0","Berlaku separuh masa","Berlaku 1 daripada 6 kali"],b:0,u:"Semua enam nombor dadu kurang daripada 7, jadi P(A) = 6/6 = 1."},
 {j:"nombor",t:"Dalam Rajah 1, pilih peristiwa 'As dalam 52 kad'. P(A) = 4/52. Cari P(A') sebagai perpuluhan, kepada 3 tempat perpuluhan.",b:bunda(48/52,3),tol:0.001,u:"P(A') = 1 − 4/52 = 48/52 = 12/13 = 0.923.",kira:()=>bunda(1-4/52,3)},
 {j:"pilih",t:"Peristiwa yang sama mungkin berlaku atau tidak berlaku mempunyai kebarangkalian:",p:["0.5","0.25","0.75","0.05"],b:0,u:"Peluang berlaku sama dengan peluang tidak berlaku, jadi kebarangkaliannya ialah 0.5."},
 {j:"nombor",t:"Sebuah pemutar mempunyai 8 sektor sama besar: 3 merah, 2 biru dan selebihnya hijau. Kira P(hijau) sebagai perpuluhan.",b:0.375,tol:0.001,u:"Sektor hijau = 8 − 3 − 2 = 3. P(hijau) = 3/8 = 0.375.",kira:()=>bunda((8-3-2)/8,3)},
 {j:"nombor",t:"Sekeping kad dipilih secara rawak daripada 40 keping kad bernombor 1 hingga 40. Kira P(gandaan 5) sebagai perpuluhan.",b:0.2,tol:0.001,u:"Gandaan 5 ada 8 (5, 10, ..., 40). P = 8/40 = 0.2.",kira:()=>bunda(Array.from({length:40},(_,i)=>i+1).filter(x=>x%5===0).length/40,2)},
 {j:"nombor",t:"Sebuah beg mengandungi 12 biji guli. P(biru) = 1/3 dan P(merah) = 1/4, manakala selebihnya kuning. Berapakah bilangan guli kuning?",b:5,tol:0.01,u:"Biru = 12 × 1/3 = 4 dan merah = 12 × 1/4 = 3. Kuning = 12 − 4 − 3 = 5.",kira:()=>12-12/3-12/4},
 {j:"susun",t:"Susun langkah menyelesaikan masalah kebarangkalian pelengkap.",p:["Tentukan n(S) daripada maklumat masalah","Tentukan n(A) bagi peristiwa yang diberi","Kira P(A) = n(A) ÷ n(S)","Kira P(A') = 1 − P(A)"],b:[0,1,2,3],u:"Cari ruang sampel dan peristiwa dahulu, kira P(A), kemudian tolak daripada 1 untuk pelengkap."}],
 bos:{j:"buka",
  t:"Reka satu permainan dadu atau syiling untuk dua pemain yang adil. Tunjukkan bahawa peluang menang setiap pemain sama.",
  arahan:"Nyatakan peraturan permainan, senaraikan ruang sampel, dan kira kebarangkalian menang bagi setiap pemain menggunakan P(A) = n(A) ÷ n(S). Terangkan mengapa permainan awak adil dan bagaimana awak boleh menyemaknya dengan eksperimen.",
  u:"Jawapan TP6 yang kukuh mempunyai peraturan yang jelas, ruang sampel yang lengkap, pengiraan kebarangkalian yang betul, dan pemerhatian bahawa eksperimen yang banyak akan menghampiri kebarangkalian teori."}}
];

module.exports = {
  id:"m2b13", tingkatan:2, kod:"13.0 Kebarangkalian Mudah",
  tajuk:"Dunia Peluang",
  subtajuk:"Matematik Ting. 2 · Bab 13 Kebarangkalian Mudah",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal ruang sampel dan peristiwa bagi eksperimen mudah seperti dadu dan syiling. Langkah seterusnya ialah menggunakan gambar rajah pokok dan menghubungkan peristiwa dengan kebarangkalian.",
   2:"{n} memahami hubungan antara ruang sampel, peristiwa dan kebarangkalian mudah, termasuk menggunakan gambar rajah pokok. Perlu lebih latihan mengira n(A) dan n(S) sebelum bergerak ke TP3.",
   3:"{n} boleh menjalankan eksperimen, mengira kekerapan relatif, dan membuat kesimpulan bahawa nilai itu menghampiri kebarangkalian teori apabila cubaan besar. Boleh mula menyelesaikan masalah yang lebih rumit.",
   4:"{n} mampu menggunakan P(A) = n(A) ÷ n(S) untuk menyelesaikan masalah rutin yang mudah dengan kesudahan yang sama mungkin. Seterusnya latih masalah pelengkap.",
   5:"{n} dapat menyelesaikan masalah rutin yang kompleks melibatkan peristiwa pelengkap, dengan P(A') = 1 − P(A). Sudah bersedia untuk masalah bukan rutin dan reka cipta.",
   6:"{n} berjaya mereka permainan yang adil dan menerangkan pilihannya dengan kebarangkalian, malah menyemaknya dengan eksperimen. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kebarangkalian Mudah. Cadangan: ulang hentian pertama menggunakan Rajah 1 dan senaraikan ruang sampel serta peristiwa dengan bimbingan rakan sebaya."
  },
  lampiran:{ keb1:R_KEB1, keb2:R_KEB2, keb3:R_KEB3, keb4:R_KEB4, keb5:R_KEB5, keb6:R_KEB6 },
  aras:ARAS
};
