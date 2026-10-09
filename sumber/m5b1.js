/* Sumber kandungan — Matematik KSSM Tingkatan 5, Bab 1 Ubahan.
   Fail ini disunting tangan. Jalankan `node bina.js m5b1`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 82 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Kes yang diwajibkan DSKP 1.1.2 dan 1.2.2: y ∝ xⁿ dan y ∝ 1/xⁿ bagi n = 1, 2, 3, ½ dan ⅓,
   serta kaitan pemalar ubahan dengan kecerunan garis lurus (graf y lawan xⁿ).
   Ubahan tercantum (1.1.3) dan ubahan bergabung (1.3) ikut nota DSKP.

   Rajah: widget t5ubah (widget-m5b1.js). Semua nilai dalam rajah dikira daripada spek. */

const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

const SPI = [
"Mempamerkan pengetahuan asas tentang ubahan.",
"Mempamerkan kefahaman tentang ubahan.",
"Mengaplikasikan kefahaman tentang ubahan untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ubahan dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ubahan dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ubahan dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- model ---------- */
const HARGA = m => 3.2 * m;                 /* H ∝ m, k = 3.2 (RM sekilogram) */
const Y2 = (x, n) => 2 * Math.pow(x, n);    /* y = 2xⁿ */
const MASA = v => 120 / v;                  /* t ∝ 1/v, jarak 120 km */
const BREK = v => 0.006 * v * v;            /* d ∝ v², k = 0.006 */
const CAT = (A, P) => 0.15 * A / P;         /* T ∝ A/P, k = 0.15 */
const BL = [16, 25, 36, 49, 64], BT = BL.map(L => bunda(0.2 * Math.sqrt(L), 2));   /* T = 0.2√L */

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t5ubah", kapsyen, alt }, extra);
const R1 = iw("Rajah 1 · Harga beras H (RM) dan jisim m (kg) di sebuah kedai. Gerakkan m.",
  "Rajah interaktif graf harga beras lawan jisim, garis lurus melalui asalan dengan H = 3.2m; gelongsor memilih jisim 1 hingga 10 kg",
  { mod: "langsung", k: 3.2, n: 1, nt: "m", xs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], namaX: "m", namaY: "H", unitX: "kg", unitY: "RM", iAwal: 1 });
const R2 = iw("Rajah 1 · y = 2xⁿ. Pilih kuasa n dan paparan graf, kemudian gerakkan x.",
  "Rajah interaktif y = 2xⁿ bagi n = 1, 2, 3 dan punca kuasa dua; graf y lawan x berbentuk lengkung, graf y lawan xⁿ ialah garis lurus berkecerunan 2",
  { mod: "langsung", k: 2, ns: [{ n: 1, t: "x" }, { n: 2, t: "x²" }, { n: 3, t: "x³" }, { n: 0.5, t: "√x" }], xs: [1, 2, 3, 4, 5, 6, 7, 8, 9], namaX: "x", namaY: "y", iAwal: 1 });
const R3 = iw("Rajah 1 · Masa perjalanan t (jam) bagi jarak 120 km pada laju v (km/j). Gerakkan v.",
  "Rajah interaktif masa perjalanan lawan laju bagi jarak 120 km; graf t lawan v ialah lengkung menurun, graf t lawan 1/v ialah garis lurus berkecerunan 120",
  { mod: "songsang", k: 120, n: 1, nt: "v", xs: [20, 30, 40, 50, 60, 80, 100, 120], namaX: "v", namaY: "t", unitX: "km/j", unitY: "jam", iAwal: 2 });
const R4 = iw("Rajah 1 · Jarak brek d (m) sebuah kereta pada laju v (km/j), d ∝ v². Gerakkan v.",
  "Rajah interaktif jarak brek lawan laju dengan d = 0.006v²; graf d lawan v ialah lengkung menaik, graf d lawan v² ialah garis lurus",
  { mod: "langsung", k: 0.006, n: 2, nt: "v²", xs: [20, 40, 60, 80, 100, 120], namaX: "v", namaY: "d", unitX: "km/j", unitY: "m", iAwal: 1 });
const R5 = iw("Rajah 1 · Masa T (jam) mengecat dinding seluas A (m²) oleh P orang pekerja. Kira dahulu, kemudian semak.",
  "Rajah interaktif ubahan bergabung T = 0.15A/P dengan gelongsor luas dinding 20 hingga 120 meter persegi dan bilangan pekerja 1 hingga 6, dalam mod cabar",
  { mod: "gabung", cabar: true, k: 0.15, namaY: "T", unitY: "jam", rumus: "T ∝ A/P,  T = 0.15A/P",
    v: [{ nama: "A", p: 1, unit: "m²", nilai: [20, 40, 60, 80, 100, 120], awal: 1 }, { nama: "P", p: -1, unit: "orang", nilai: [1, 2, 3, 4, 5, 6], awal: 1 }] });
const R6 = iw("Rajah 1 · Panjang bandul L (cm) dan tempoh ayunan T (s) daripada satu eksperimen. Uji setiap model.",
  "Rajah interaktif jadual panjang bandul dan tempoh ayunan; cip memilih model T berubah secara langsung dengan L, L kuasa dua, punca kuasa dua L, atau secara songsang dengan L, dan lajur ketiga menunjukkan sama ada nisbahnya malar",
  { mod: "jadual", x: BL, y: BT, namaX: "L", namaY: "T",
    model: [{ t: "T ∝ L", n: 1, u: "L" }, { t: "T ∝ L²", n: 2, u: "L²" }, { t: "T ∝ √L", n: 0.5, u: "√L" }, { t: "T ∝ 1/L", n: -1, u: "L" }] });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kedai Beras", sk:"1.1.1 / 1.1.2 Maksud ubahan langsung", lampiran:"r1",
 kadNama:"Ubahan Langsung", kadEm:"\u{1F33E}", kadFakta:"y ∝ x bermaksud y = kx. Apabila x digandakan, y turut digandakan, dan graf y lawan x ialah garis lurus melalui asalan.",
 bosKadNama:"Pemalar k", bosKadEm:"\u{1F511}", bosKadFakta:"Pemalar ubahan k = y ÷ x. Cari k dengan satu pasangan nilai yang diketahui, kemudian gunakan k untuk meramal nilai lain.",
 soalan:[
 {j:"pilih",t:"Pernyataan H ∝ m dibaca sebagai:",p:["H berubah secara langsung dengan m","H berubah secara songsang dengan m","H sama dengan m","H bertambah satu apabila m bertambah satu"],b:0,u:"Simbol ∝ bermaksud 'berubah secara langsung dengan'. H ∝ m boleh ditulis sebagai H = km."},
 {j:"nombor",t:"Dalam Rajah 1, gerakkan m kepada 5 kg. Berapakah harga H, dalam RM?",tol:0.01,b:16,u:"H = 3.2 × 5 = RM16. Setiap kilogram berharga RM3.20.",kira:()=>HARGA(5)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah nilai pemalar ubahan k bagi H = km?",tol:0.01,b:3.2,u:"k = H ÷ m. Contohnya, apabila m = 2, H = 6.40, jadi k = 6.40 ÷ 2 = 3.2.",kira:()=>HARGA(2)/2},
 {j:"pilih",t:"Graf H lawan m dalam Rajah 1 ialah:",p:["Garis lurus yang melalui asalan","Garis lurus yang tidak melalui asalan","Lengkung yang menurun","Garis mengufuk"],b:0,u:"Bagi ubahan langsung H = km, apabila m = 0, H = 0. Graf ialah garis lurus melalui asalan dengan kecerunan k."},
 {j:"pilih",t:"Dalam Rajah 1, jika jisim beras digandakan dua kali, harganya akan:",p:["Digandakan dua kali","Berkurang separuh","Bertambah RM2","Kekal sama"],b:0,u:"H = 3.2m. Jika m menjadi 2m, H menjadi 3.2(2m) = 2 × 3.2m. Contoh: 4 kg berharga RM12.80, iaitu dua kali harga 2 kg (RM6.40).",kira:()=>Math.abs(HARGA(4)-2*HARGA(2))<1e-9},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jisim beras, dalam kg, yang berharga RM28.80?",tol:0.01,b:9,u:"m = H ÷ k = 28.80 ÷ 3.2 = 9 kg.",kira:()=>28.8/3.2},
 {j:"pilih",t:"Antara situasi berikut, yang manakah ialah ubahan langsung?",p:["Upah pekerja dan bilangan jam bekerja pada kadar tetap","Masa perjalanan dan laju kenderaan bagi jarak yang tetap","Umur seorang kanak-kanak dan tinggi badannya","Bilangan pekerja dan masa menyiapkan satu kerja"],b:0,u:"Upah = kadar × jam, jadi upah ∝ jam. Masa dan laju serta pekerja dan masa ialah ubahan songsang. Tinggi badan tidak bertambah pada kadar tetap mengikut umur."},
 {j:"pilih",t:"Persamaan bagi 'y berubah secara langsung dengan x' ialah:",p:["y = kx","y = k/x","y = x + k","y = kx + 1"],b:0,u:"Ubahan langsung: y ∝ x, jadi y = kx dengan k pemalar. Tiada sebutan tambahan kerana graf melalui asalan."}],
 bos:{j:"nombor",t:"Harga 3 kg beras ialah RM9.60 dan H ∝ m. Berapakah harga 7.5 kg beras, dalam RM?",tol:0.01,b:24,u:"Langkah 1: k = 9.60 ÷ 3 = 3.2. Langkah 2: H = 3.2 × 7.5 = RM24.",kira:()=>9.6/3*7.5}},

{n:2, tempat:"Makmal Kuasa", sk:"1.1.2 / 1.1.3 y ∝ xⁿ, pemalar dan kecerunan; ubahan tercantum", lampiran:"r2",
 kadNama:"Garis Tersembunyi", kadEm:"\u{1F4C8}", kadFakta:"Jika y ∝ xⁿ, graf y lawan xⁿ ialah garis lurus melalui asalan, dan kecerunannya ialah pemalar k.",
 bosKadNama:"Ubahan Tercantum", bosKadEm:"\u{1F517}", bosKadFakta:"Ubahan tercantum: satu pemboleh ubah berubah secara langsung dengan hasil darab dua atau lebih pemboleh ubah, contohnya V ∝ j²t.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih y ∝ x² dan gerakkan x kepada 3. Berapakah nilai y?",tol:0.01,b:18,u:"y = 2x² = 2 × 3² = 2 × 9 = 18.",kira:()=>Y2(3,2)},
 {j:"nombor",t:"Dalam Rajah 1, pilih y ∝ x³ dan gerakkan x kepada 2. Berapakah nilai y?",tol:0.01,b:16,u:"y = 2x³ = 2 × 2³ = 2 × 8 = 16.",kira:()=>Y2(2,3)},
 {j:"nombor",t:"Dalam Rajah 1, pilih y ∝ √x dan gerakkan x kepada 9. Berapakah nilai y?",tol:0.01,b:6,u:"y = 2√x = 2 × √9 = 2 × 3 = 6.",kira:()=>Y2(9,0.5)},
 {j:"pilih",t:"Dalam Rajah 1, pilih y ∝ x² dan paparan y lawan xⁿ. Kecerunan garis lurus itu sama dengan:",p:["Pemalar ubahan k","Kuasa n","Nilai x terbesar","Pintasan-y graf"],b:0,u:"Graf y lawan x² bagi y = 2x² ialah garis lurus melalui asalan. Kecerunannya = y ÷ x² = k = 2."},
 {j:"pilih",t:"Jika y ∝ x² dan x digandakan dua kali, y menjadi:",p:["Empat kali nilai asal","Dua kali nilai asal","Lapan kali nilai asal","Separuh nilai asal"],b:0,u:"y = k(2x)² = 4kx². Semak dalam Rajah 1: x = 2 memberi y = 8, x = 4 memberi y = 32, iaitu empat kali.",kira:()=>Y2(4,2)/Y2(2,2)===4},
 {j:"pilih",t:"Diberi y ∝ x³, dan y = 40 apabila x = 2. Persamaan yang menghubungkan y dan x ialah:",p:["y = 5x³","y = 20x³","y = 40x³","y = 10x³"],b:0,u:"y = kx³, jadi 40 = k × 2³ = 8k. Maka k = 40 ÷ 8 = 5 dan y = 5x³.",kira:()=>40/8===5},
 {j:"pilih",t:"Ubahan tercantum bermaksud satu pemboleh ubah:",p:["Berubah secara langsung dengan hasil darab dua atau lebih pemboleh ubah","Berubah secara songsang dengan hasil tambah dua pemboleh ubah","Bertambah dengan nilai yang sama seperti pemboleh ubah lain","Kekal malar apabila pemboleh ubah lain berubah"],b:0,u:"Contoh ubahan tercantum: P ∝ QR, iaitu P = kQR. P berubah secara langsung dengan hasil darab Q dan R."},
 {j:"nombor",t:"Diberi P ∝ QR, dan P = 24 apabila Q = 2 dan R = 3. Hitung P apabila Q = 5 dan R = 4.",tol:0.01,b:80,u:"Langkah 1: 24 = k × 2 × 3, jadi k = 4. Langkah 2: P = 4 × 5 × 4 = 80.",kira:()=>24/(2*3)*5*4}],
 bos:{j:"pilih",t:"Isi padu silinder V berubah secara langsung dengan j² dan t (V ∝ j²t). Jika jejari j digandakan dan tinggi t dikurangkan separuh, isi padu yang baharu ialah:",p:["Dua kali isi padu asal","Sama dengan isi padu asal","Empat kali isi padu asal","Separuh isi padu asal"],b:0,u:"V baharu = k(2j)²(½t) = k × 4j² × ½t = 2kj²t. Isi padu menjadi dua kali.",kira:()=>Math.pow(2,2)*0.5===2}},

{n:3, tempat:"Lebuh Raya", sk:"1.2.1 / 1.2.2 Ubahan songsang", lampiran:"r3",
 kadNama:"Ubahan Songsang", kadEm:"\u{1F697}", kadFakta:"y ∝ 1/x bermaksud y = k/x, iaitu xy = k. Apabila x digandakan, y menjadi separuh.",
 bosKadNama:"Punca Songsang", bosKadEm:"\u{1F9CA}", bosKadFakta:"Bagi y ∝ 1/∛x, y = k/∛x. Cari k dahulu, kemudian selesaikan untuk ∛x dan kuasa tigakan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, gerakkan v kepada 60 km/j. Berapakah masa t, dalam jam?",tol:0.01,b:2,u:"t = 120 ÷ v = 120 ÷ 60 = 2 jam.",kira:()=>MASA(60)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah masa t, dalam jam, apabila v = 80 km/j?",tol:0.01,b:1.5,u:"t = 120 ÷ 80 = 1.5 jam, iaitu 1 jam 30 minit.",kira:()=>MASA(80)},
 {j:"pilih",t:"Dalam Rajah 1, apabila laju v bertambah, masa t:",p:["Berkurang","Bertambah","Kekal sama","Bertambah kemudian berkurang"],b:0,u:"t = 120/v. Pembahagi yang lebih besar memberi hasil bahagi yang lebih kecil, jadi lengkung dalam Rajah 1 menurun.",kira:()=>MASA(30)>MASA(60)},
 {j:"pilih",t:"Dalam Rajah 1, pilih paparan t lawan 1/v. Graf itu ialah:",p:["Garis lurus melalui asalan dengan kecerunan 120","Lengkung yang menurun","Garis mengufuk pada t = 120","Garis lurus dengan kecerunan negatif"],b:0,u:"t = 120 × (1/v). Jika 1/v dijadikan paksi mengufuk, graf ialah garis lurus melalui asalan dengan kecerunan k = 120."},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung hasil darab t × v bagi sebarang titik pada graf.",tol:0.01,b:120,u:"Bagi ubahan songsang t = k/v, hasil darab tv = k = 120, iaitu jarak perjalanan dalam km.",kira:()=>MASA(40)*40},
 {j:"pilih",t:"Persamaan bagi 'y berubah secara songsang dengan punca kuasa dua x' ialah:",p:["y = k/√x","y = k√x","y = kx²","y = k/x²"],b:0,u:"Songsang bermaksud pemboleh ubah berada pada penyebut. Punca kuasa dua x ialah √x, jadi y = k/√x."},
 {j:"nombor",t:"Diberi y ∝ 1/x², dan y = 5 apabila x = 2. Hitung y apabila x = 5.",tol:0.01,b:0.8,u:"Langkah 1: 5 = k ÷ 2², jadi k = 20. Langkah 2: y = 20 ÷ 5² = 20 ÷ 25 = 0.8.",kira:()=>5*4/25},
 {j:"pilih",t:"Jika y ∝ 1/x dan x digandakan tiga kali, y menjadi:",p:["Satu pertiga daripada nilai asal","Tiga kali nilai asal","Sembilan kali nilai asal","Sama dengan nilai asal"],b:0,u:"y = k/(3x) = ⅓ × k/x. Contoh dalam Rajah 1: v = 40 memberi t = 3, v = 120 memberi t = 1.",kira:()=>Math.abs(MASA(120)-MASA(40)/3)<1e-9}],
 bos:{j:"nombor",t:"Diberi m berubah secara songsang dengan punca kuasa tiga n, dan m = 6 apabila n = 8. Hitung nilai n apabila m = 4.",tol:0.01,b:27,u:"Langkah 1: m = k/∛n, jadi 6 = k ÷ ∛8 = k ÷ 2 dan k = 12. Langkah 2: 4 = 12 ÷ ∛n, jadi ∛n = 3. Langkah 3: n = 3³ = 27.",kira:()=>Math.pow(6*2/4,3)}},

{n:4, tempat:"Jalan Selamat", sk:"1.1.4 / 1.2.3 Masalah ubahan langsung dan songsang", lampiran:"r4",
 kadNama:"Jarak Brek", kadEm:"\u{1F6D1}", kadFakta:"Jarak brek berubah secara langsung dengan kuasa dua laju. Laju dua kali ganda memerlukan jarak brek empat kali ganda.",
 bosKadNama:"Had Laju", bosKadEm:"\u{1F6A6}", bosKadFakta:"Untuk mencari x daripada y = kx², bahagikan dengan k dahulu, kemudian ambil punca kuasa dua.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, gerakkan v kepada 60 km/j. Berapakah jarak brek d, dalam meter?",tol:0.01,b:21.6,u:"d = 0.006 × 60² = 0.006 × 3600 = 21.6 m.",kira:()=>bunda(BREK(60),2)},
 {j:"pilih",t:"Berdasarkan Rajah 1, apabila laju bertambah daripada 40 km/j kepada 80 km/j, jarak brek:",p:["Didarab 4","Menjadi dua kali ganda","Bertambah sebanyak 40 m","Bertambah sebanyak 4 m"],b:0,u:"d ∝ v². Laju didarab 2, jadi d didarab 2² = 4: 9.6 m menjadi 38.4 m.",kira:()=>Math.abs(BREK(80)/BREK(40)-4)<1e-9},
 {j:"nombor",t:"Jarak brek sebuah kereta ialah 15 m. Berdasarkan Rajah 1, berapakah laju kereta itu, dalam km/j?",tol:0.01,b:50,u:"15 = 0.006v², jadi v² = 15 ÷ 0.006 = 2500. Maka v = √2500 = 50 km/j.",kira:()=>Math.sqrt(15/0.006)},
 {j:"pilih",t:"Seorang pemandu berkata, 'Memandu 20 km/j lebih laju hanya menambah sedikit jarak brek.' Berdasarkan Rajah 1, mengapakah dakwaan ini kurang tepat pada laju tinggi?",p:["Tambahan d semakin besar apabila v semakin tinggi kerana d ∝ v²","Tambahan d tetap sama kerana d ∝ v","Jarak brek berkurang apabila laju bertambah","Jarak brek bergantung pada jisim kereta, bukan laju"],b:0,u:"Daripada 20 ke 40 km/j, d bertambah 7.2 m. Daripada 100 ke 120 km/j, d bertambah 26.4 m. Lengkung d lawan v semakin curam.",kira:()=>BREK(120)-BREK(100)>BREK(40)-BREK(20)},
 {j:"nombor",t:"8 orang pekerja dapat menyiapkan sebuah rumah dalam 15 hari. Masa berubah secara songsang dengan bilangan pekerja. Berapa harikah yang diperlukan oleh 12 orang pekerja?",tol:0.01,b:10,u:"Masa × pekerja = k = 15 × 8 = 120. Masa = 120 ÷ 12 = 10 hari.",kira:()=>15*8/12},
 {j:"nombor",t:"Upah U (RM) berubah secara langsung dengan bilangan jam bekerja j. Upah bagi 6 jam ialah RM57. Hitung upah, dalam RM, bagi 14 jam.",tol:0.01,b:133,u:"k = 57 ÷ 6 = 9.5. U = 9.5 × 14 = RM133.",kira:()=>57/6*14},
 {j:"nombor",t:"Bekalan makanan cukup untuk 30 orang selama 12 hari. Jika 6 orang lagi menyertai kumpulan itu, berapa harikah bekalan itu akan cukup?",tol:0.01,b:10,u:"Bilangan hari berubah secara songsang dengan bilangan orang. k = 30 × 12 = 360. Hari = 360 ÷ 36 = 10.",kira:()=>30*12/36},
 {j:"pilih",t:"Tekanan gas P berubah secara songsang dengan isi padunya V. Jika isi padu dikurangkan menjadi ¼ daripada asal, tekanan:",p:["Didarab 4","Berkurang menjadi ¼ daripada asal","Bertambah sebanyak 4 unit","Kekal seperti asal"],b:0,u:"P = k/V. Jika V menjadi ¼V, P = k ÷ ¼V = 4k/V, iaitu empat kali ganda."}],
 bos:{j:"nombor",t:"Berdasarkan Rajah 1, sebuah kereta mesti dapat berhenti dalam jarak 40 m. Berapakah laju maksimumnya, dalam km/j? Berikan jawapan betul kepada satu tempat perpuluhan.",tol:0.05,b:bunda(Math.sqrt(40/0.006),1),u:"40 = 0.006v², jadi v² = 40 ÷ 0.006 = 6666.67. Maka v = √6666.67 = 81.6 km/j.",kira:()=>bunda(Math.sqrt(40/0.006),1)}},

{n:5, tempat:"Bengkel Cat", sk:"1.3.1 / 1.3.2 Ubahan bergabung", lampiran:"r5",
 kadNama:"Ubahan Bergabung", kadEm:"\u{1F58C}\u{FE0F}", kadFakta:"Ubahan bergabung menggabungkan ubahan langsung dan songsang, contohnya T ∝ A/P: T = kA/P.",
 bosKadNama:"Kos Cetakan", bosKadEm:"\u{1F5A8}\u{FE0F}", bosKadFakta:"Bagi masalah bergabung, cari k dengan set nilai pertama, kemudian gantikan set nilai kedua ke dalam persamaan yang sama.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan A = 60 m² dan P = 3 orang. Berapakah masa T, dalam jam? Kira dahulu, kemudian semak.",tol:0.01,b:3,u:"T = 0.15 × 60 ÷ 3 = 9 ÷ 3 = 3 jam.",kira:()=>CAT(60,3)},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung T, dalam jam, apabila A = 120 m² dan P = 4 orang.",tol:0.01,b:4.5,u:"T = 0.15 × 120 ÷ 4 = 18 ÷ 4 = 4.5 jam.",kira:()=>CAT(120,4)},
 {j:"pilih",t:"Dalam Rajah 1, jika luas A digandakan dan bilangan pekerja P juga digandakan, masa T:",p:["Tidak berubah","Menjadi dua kali ganda","Menjadi empat kali ganda","Berkurang menjadi separuh"],b:0,u:"T = k(2A)/(2P) = kA/P. Kesan menggandakan A dibatalkan oleh kesan menggandakan P. Semak: A = 40, P = 2 dan A = 80, P = 4 memberi T = 3.",kira:()=>Math.abs(CAT(40,2)-CAT(80,4))<1e-9},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapa orang pekerja diperlukan untuk mengecat dinding seluas 100 m² dalam masa 2.5 jam?",tol:0.01,b:6,u:"2.5 = 0.15 × 100 ÷ P, jadi P = 15 ÷ 2.5 = 6 orang.",kira:()=>0.15*100/2.5},
 {j:"pilih",t:"Diberi y berubah secara langsung dengan x dan secara songsang dengan z². Hubungan yang betul ialah:",p:["y = kx/z²","y = kxz²","y = kz²/x","y = k/(xz²)"],b:0,u:"Langsung dengan x: x pada pengangka. Songsang dengan z²: z² pada penyebut. Maka y = kx/z²."},
 {j:"nombor",t:"Diberi y ∝ x/z², dan y = 12 apabila x = 6 dan z = 2. Hitung y apabila x = 15 dan z = 5.",tol:0.01,b:4.8,u:"Langkah 1: 12 = k × 6 ÷ 2², jadi 12 = 1.5k dan k = 8. Langkah 2: y = 8 × 15 ÷ 5² = 120 ÷ 25 = 4.8.",kira:()=>12*4/6*15/25},
 {j:"nombor",t:"Diberi F ∝ m/j², dan F = 20 apabila m = 5 dan j = 2. Hitung j apabila F = 5 dan m = 20, dengan keadaan j ialah nombor positif.",tol:0.01,b:8,u:"Langkah 1: 20 = k × 5 ÷ 4, jadi k = 16. Langkah 2: 5 = 16 × 20 ÷ j², jadi j² = 320 ÷ 5 = 64. Maka j = 8.",kira:()=>Math.sqrt(20*4/5*20/5)},
 {j:"pilih",t:"Diberi w ∝ x²/y. Jika x digandakan dan y didarab tiga, w menjadi:",p:["4/3 daripada nilai asal","2/3 daripada nilai asal","6 kali nilai asal","12 kali nilai asal"],b:0,u:"w baharu = k(2x)² ÷ (3y) = 4kx² ÷ 3y = (4/3) × kx²/y.",kira:()=>Math.abs(Math.pow(2,2)/3-4/3)<1e-9}],
 bos:{j:"nombor",t:"Kos K (RM) mencetak buku berubah secara langsung dengan bilangan muka surat m dan bilangan naskhah n, dan secara songsang dengan bilangan mesin c yang digunakan. Kos ialah RM1 200 apabila m = 100, n = 200 dan c = 2. Hitung kos, dalam RM, apabila m = 150, n = 400 dan c = 3.",tol:0.01,b:2400,u:"Langkah 1: K = kmn/c, jadi 1200 = k × 100 × 200 ÷ 2 = 10 000k dan k = 0.12. Langkah 2: K = 0.12 × 150 × 400 ÷ 3 = RM2 400.",kira:()=>1200*2/(100*200)*150*400/3}},

{n:6, tempat:"Makmal Bandul", sk:"1.1–1.3 Masalah ubahan bukan rutin", lampiran:"r6",
 kadNama:"Penguji Model", kadEm:"\u{1F52C}", kadFakta:"Untuk menguji y ∝ xⁿ, kira y ÷ xⁿ bagi setiap pasangan data. Jika hasilnya malar, model itu sesuai dan nilai malar itu ialah k.",
 bosKadNama:"Pereka Model", bosKadEm:"\u{1F4A1}", bosKadFakta:"Model ubahan mempunyai had. Ia hanya tepat dalam julat data yang digunakan untuk membinanya.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, uji setiap model. Model manakah memberi lajur ketiga yang malar?",p:["T ∝ √L","T ∝ L","T ∝ L²","T ∝ 1/L"],b:0,u:"T ÷ √L = 0.8 ÷ 4 = 1.0 ÷ 5 = 1.2 ÷ 6 = 0.2 bagi setiap baris. Model lain memberi nilai yang berubah-ubah.",kira:()=>BL.every((L,i)=>Math.abs(BT[i]/Math.sqrt(L)-0.2)<1e-9)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah nilai pemalar k bagi model yang sesuai?",tol:0.01,b:0.2,u:"k = T ÷ √L = 0.8 ÷ √16 = 0.8 ÷ 4 = 0.2.",kira:()=>BT[0]/Math.sqrt(BL[0])},
 {j:"nombor",t:"Berdasarkan model dalam Rajah 1, hitung tempoh T, dalam saat, bagi bandul yang panjangnya 100 cm.",tol:0.01,b:2,u:"T = 0.2√L = 0.2 × √100 = 0.2 × 10 = 2 s.",kira:()=>0.2*Math.sqrt(100)},
 {j:"nombor",t:"Berdasarkan model dalam Rajah 1, berapakah panjang bandul, dalam cm, yang tempohnya 3 saat?",tol:0.01,b:225,u:"3 = 0.2√L, jadi √L = 15. Maka L = 15² = 225 cm.",kira:()=>Math.pow(3/0.2,2)},
 {j:"pilih",t:"Berdasarkan model dalam Rajah 1, untuk menggandakan tempoh ayunan sebuah bandul, panjangnya perlu:",p:["Didarab 4","Didarab 2","Ditambah 2 cm","Dibahagi 2"],b:0,u:"T ∝ √L. Supaya √L menjadi dua kali, L mesti menjadi 2² = 4 kali. Contoh: L = 16 memberi T = 0.8, L = 64 memberi T = 1.6.",kira:()=>Math.abs(0.2*Math.sqrt(64)-2*0.2*Math.sqrt(16))<1e-9},
 {j:"pilih",t:"Seorang murid mengira T ÷ L bagi data Rajah 1 dan mendapat 0.05, 0.04, 0.033 dan seterusnya. Apakah kesimpulan yang betul?",p:["T tidak berubah secara langsung dengan L","T berubah secara langsung dengan L","T berubah secara songsang dengan L","Data itu salah dan perlu dibuang"],b:0,u:"Jika T ∝ L, nilai T ÷ L mesti malar. Nilainya berubah, jadi model T ∝ L ditolak. Ini tidak bermaksud T ∝ 1/L; uji model itu secara berasingan.",kira:()=>BT[0]/BL[0]!==BT[1]/BL[1]},
 {j:"nombor",t:"Bagi data x = 2, 4, 5 dan y = 50, 12.5, 8, diberi y berubah secara songsang dengan xⁿ. Cari nilai n.",tol:0.01,b:2,u:"Uji n = 2: y × x² = 50 × 4 = 200, 12.5 × 16 = 200, 8 × 25 = 200. Hasil darab malar, jadi n = 2 dan y = 200/x².",kira:()=>[[2,50],[4,12.5],[5,8]].every(([x,y])=>Math.abs(y*x*x-200)<1e-9)?2:0},
 {j:"pilih",t:"Diberi y ∝ xⁿ. Apabila x didarab 3, y menjadi 27 kali nilai asal. Nilai n ialah:",p:["3","9","1/3","27"],b:0,u:"y baharu ÷ y asal = 3ⁿ = 27 = 3³, jadi n = 3.",kira:()=>Math.round(Math.log(27)/Math.log(3))}],
 bos:{j:"buka",
  t:"Reka satu masalah ubahan bergabung daripada kehidupan sebenar dan selesaikannya.",
  arahan:"Pilih satu situasi, contohnya kos membina pagar bergantung pada panjang pagar dan bilangan pekerja, atau masa memasak bergantung pada jisim makanan dan kuasa ketuhar. Tulis hubungan ubahan dengan simbol ∝ dan terangkan mengapa setiap pemboleh ubah berubah secara langsung atau songsang. Cari pemalar k daripada satu set data yang munasabah, kemudian gunakan persamaan itu untuk membuat satu ramalan. Nyatakan satu keadaan apabila model awak tidak lagi tepat.",
  u:"Jawapan TP6 yang kukuh mempunyai situasi yang munasabah, hubungan ubahan yang ditulis dengan betul beserta alasan bagi setiap pemboleh ubah, pengiraan k yang tepat, ramalan yang dikira dengan langkah yang jelas, dan kesedaran tentang had model."}}
];

module.exports = {
  id:"m5b1", tingkatan:5, kod:"1.0 Ubahan",
  tajuk:"Bengkel Ubahan",
  subtajuk:"Matematik Ting. 5 · Bab 1 Ubahan",
  spi:SPI,
  ulasan:{
   1:"{n} mengenal pasti ubahan langsung, menulisnya dengan simbol ∝ dan menentukan pemalar ubahan daripada graf. Langkah seterusnya ialah ubahan yang melibatkan kuasa.",
   2:"{n} memahami ubahan langsung y ∝ xⁿ, mengaitkan pemalar ubahan dengan kecerunan graf y lawan xⁿ, dan menyelesaikan ubahan tercantum. Perlu lebih latihan tentang ubahan songsang.",
   3:"{n} dapat menentukan hubungan ubahan songsang, termasuk yang melibatkan kuasa dan punca, dan menggunakannya untuk tugasan mudah.",
   4:"{n} mampu menyelesaikan masalah rutin mudah yang melibatkan ubahan langsung dan songsang dalam situasi sebenar seperti jarak brek dan bilangan pekerja. Seterusnya, latih ubahan bergabung.",
   5:"{n} dapat membentuk dan menyelesaikan masalah ubahan bergabung yang melibatkan tiga atau lebih pemboleh ubah. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya menguji model ubahan dengan data, membina model sendiri daripada situasi sebenar dan menilai hadnya. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Ubahan. Cadangan: ulang hentian pertama dengan Rajah 1 dan bina jadual harga barangan dapur sebagai contoh ubahan langsung."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
