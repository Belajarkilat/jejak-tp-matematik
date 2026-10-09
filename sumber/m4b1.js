/* Sumber kandungan — Matematik KSSM Tingkatan 4, Bab 1 Fungsi dan Persamaan Kuadratik
   dalam Satu Pemboleh Ubah. Fail ini disunting tangan. Jalankan `node bina.js m4b1`
   untuk menyemaknya dan menghasilkan bank-m4b1.js.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, Bahagian Pembangunan Kurikulum, muka 36 (dskp/matematik-t4-t5.pdf).
   DSKP menulis enam tahap penuh bagi bab ini.

   Semua nilai berangka dikira dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. Rajah menggunakan widget t4kuad (widget-m4b1.js). */

const f = (a, b, c) => x => a * x * x + b * x + c;
/* punca nyata, menaik */
const punca = (a, b, c) => { const D = b * b - 4 * a * c; if (D < 0) return []; const r = [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)]; return r.sort((p, q) => p - q); };
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

const SPI = [
"Mempamerkan pengetahuan asas tentang ungkapan, fungsi dan persamaan kuadratik dalam satu pemboleh ubah.",
"Mempamerkan kefahaman tentang ungkapan, fungsi dan persamaan kuadratik dalam satu pemboleh ubah.",
"Mengaplikasikan kefahaman tentang fungsi dan persamaan kuadratik dalam satu pemboleh ubah untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang fungsi dan persamaan kuadratik dalam satu pemboleh ubah dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang fungsi dan persamaan kuadratik dalam satu pemboleh ubah dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang fungsi dan persamaan kuadratik dalam satu pemboleh ubah dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: rajah interaktif ---------- */
const NILAI = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const R_GRAF = { jenis: "interaktif", w: "t4kuad", mod: "graf", aSet: [-2, -1, 1, 2], bSet: NILAI, cSet: NILAI, awal: { a: 2, b: 4, c: 4 },
  kapsyen: "Rajah 1 · Graf f(x) = ax² + bx + c. Pilih nilai a, kemudian gerakkan b dan c.",
  alt: "Rajah interaktif graf fungsi kuadratik; cip memilih a dan gelongsor menukar b serta c, menunjukkan bentuk graf, titik pusingan, paksi simetri dan punca" };
const R_CANCANG = { jenis: "interaktif", w: "t4kuad", mod: "cancang", a: 1, b: -2, c: -3, x0: -3, x1: 5, y0: -6, y1: 10,
  xSet: [-2, -1, 0, 1, 2, 3, 4], kSet: [-6, -4, -3, 0, 5],
  kapsyen: "Rajah 1 · Graf f(x) = x² − 2x − 3. Gerakkan garis mencancang dan garis mengufuk.",
  alt: "Rajah interaktif graf f(x) = x kuasa dua tolak 2x tolak 3 dengan garis mencancang dan garis mengufuk yang boleh digerakkan untuk mengira titik persilangan" };
const R_PUNCA = { jenis: "interaktif", w: "t4kuad", mod: "punca", pMin: -5, pMaks: 5, awal: { p: 6, q: 8 },
  kapsyen: "Rajah 1 · Graf f(x) = (x − p)(x − q). Gerakkan p dan q, perhatikan punca.",
  alt: "Rajah interaktif graf f(x) = (x tolak p)(x tolak q); gelongsor p dan q, bentuk am dan punca ditunjukkan pada paksi-x" };
const R_SEGI = { jenis: "interaktif", w: "t4kuad", mod: "segi", P: 20, awal: { x: 2 },
  kapsyen: "Rajah 1 · Pagar 20 m mengelilingi kebun segi empat tepat. Ubah lebar x dan lihat luasnya.",
  alt: "Rajah interaktif kebun segi empat tepat berperimeter 20 meter; gelongsor lebar x menukar panjang, luas dan titik pada graf luas melawan lebar" };
const R_GRAF5 = Object.assign({}, R_GRAF, { cabar: true, awal: { a: 2, b: 0, c: 7 },
  kapsyen: "Rajah 1 · Lakar dahulu di kertas conteng, kemudian semak dengan graf f(x) = ax² + bx + c.",
  alt: "Rajah interaktif graf fungsi kuadratik dalam mod cabar; cip a dan gelongsor b serta c, titik pusingan dan punca tersembunyi sehingga disemak" });
const R_LONTAR = { jenis: "interaktif", w: "t4kuad", mod: "lontar", v: 20, h0: 0, tMaks: 8, awal: { t: 2 },
  kapsyen: "Rajah 1 · Bola dilambung tegak ke atas, h(t) = 20t − 5t². Gerakkan masa t.",
  alt: "Rajah interaktif graf tinggi bola melawan masa bagi h sama dengan 20t tolak 5t kuasa dua; gelongsor masa menggerakkan bola pada lengkung" };

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Taman Parabola", sk:"1.1.1 / 1.1.2 Ungkapan dan fungsi kuadratik", lampiran:"graf",
 kadNama:"Ungkapan Kuadratik", kadEm:"\u{1F33F}", kadFakta:"Ungkapan kuadratik dalam satu pemboleh ubah berbentuk ax² + bx + c, dengan a ≠ 0. Kuasa tertinggi pemboleh ubahnya ialah 2.",
 bosKadNama:"Bentuk ∪ dan ∩", bosKadEm:"\u{1F642}", bosKadFakta:"Jika a > 0, graf berbentuk ∪ dan ada titik minimum. Jika a < 0, graf berbentuk ∩ dan ada titik maksimum.",
 soalan:[
 {j:"pilih",t:"Antara berikut, yang manakah ungkapan kuadratik dalam satu pemboleh ubah?",p:["3x² − 5x + 2","3x³ − 5x + 2","x² + y² − 1","5x − 1"],b:0,u:"Ungkapan kuadratik mempunyai satu pemboleh ubah sahaja dan kuasa tertingginya 2. 3x³ berkuasa 3, x² + y² ada dua pemboleh ubah, dan 5x − 1 linear."},
 {j:"pilih",t:"Kuasa tertinggi pemboleh ubah dalam suatu ungkapan kuadratik ialah:",p:["2","1","3","0"],b:0,u:"Perkataan kuadratik berasal daripada kuasa dua. Sebutan x² mesti ada, dan tiada kuasa yang lebih tinggi."},
 {j:"pilih",t:"Dalam ungkapan 5x² − 3x + 8, nilai a, b dan c ialah:",p:["a = 5, b = −3, c = 8","a = 5, b = 3, c = 8","a = −3, b = 5, c = 8","a = 8, b = −3, c = 5"],b:0,u:"Bandingkan dengan ax² + bx + c. Pekali x² ialah 5, pekali x ialah −3 (termasuk tandanya), dan pemalar ialah 8."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan a = 1, b = 0 dan c = 0. Graf f(x) = x² berbentuk:",p:["∪ dengan titik minimum","∩ dengan titik maksimum","Garis lurus melalui asalan","∪ dengan titik maksimum"],b:0,u:"Apabila a &gt; 0, graf membuka ke atas (∪). Titik terendahnya ialah titik minimum, iaitu (0, 0)."},
 {j:"pilih",t:"Dalam Rajah 1, tukar a kepada −2 dengan b = 0 dan c = 0. Apakah yang berlaku pada graf?",p:["Graf menjadi ∩ dan ada titik maksimum","Graf kekal ∪ tetapi menjadi lebih sempit","Graf berubah menjadi garis lurus","Graf beralih 2 unit ke bawah"],b:0,u:"Tanda a menentukan arah bukaan graf. Apabila a &lt; 0, graf membuka ke bawah (∩) dan titik pusingannya ialah titik maksimum."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 1, b = 0 dan c = 3. Berapakah pintasan-y graf itu?",b:3,tol:0.01,u:"Pintasan-y ialah nilai f(0). Ganti x = 0: f(0) = 1(0)² + 0 + 3 = 3. Pintasan-y sentiasa sama dengan c.",kira:()=>f(1,0,3)(0)},
 {j:"pilih",t:"Ungkapan 2x² + 3x tidak mempunyai sebutan pemalar. Adakah ia ungkapan kuadratik?",p:["Ya, kerana c boleh sifar asalkan a ≠ 0","Tidak, kerana ungkapan kuadratik ada tiga sebutan","Tidak, kerana ungkapan itu tiada nombor pemalar","Ya, kerana nilai b ialah sifar dalam ungkapan ini"],b:0,u:"Syarat ungkapan kuadratik ialah a ≠ 0. Nilai b atau c boleh sifar, contohnya 2x² + 3x (c = 0) dan x² − 9 (b = 0)."},
 {j:"nombor",t:"Diberi f(x) = x² − 4x + 1. Cari nilai f(5).",b:6,tol:0.01,u:"Ganti x = 5: f(5) = 5² − 4(5) + 1 = 25 − 20 + 1 = 6.",kira:()=>f(1,-4,1)(5)}],
 bos:{j:"banyak",t:"Pilih SEMUA ungkapan kuadratik dalam satu pemboleh ubah.",p:["x² − 9","4 − 3x²","7x² + x","x³ + 2x²","2/x² + 3","5x − 1"],b:[0,1,2],u:"x² − 9, 4 − 3x² dan 7x² + x mempunyai kuasa tertinggi 2. x³ + 2x² berkuasa 3, 2/x² bermaksud kuasa −2 (bukan nombor bulat positif), dan 5x − 1 linear."}},

{n:2, tempat:"Jambatan Lengkung", sk:"1.1.2 / 1.1.3 Ciri-ciri fungsi kuadratik dan kesan a, b, c", lampiran:"cancang",
 kadNama:"Banyak kepada Satu", kadEm:"\u{1F309}", kadFakta:"Fungsi kuadratik ialah hubungan banyak kepada satu: dua nilai x yang berlainan boleh memberi nilai y yang sama, kecuali di titik pusingan.",
 bosKadNama:"Paksi Simetri", bosKadEm:"\u{1FA9E}", bosKadFakta:"Paksi simetri graf ax² + bx + c ialah garis x = −b ÷ 2a. Ia selari dengan paksi-y dan melalui titik pusingan.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, gerakkan garis mencancang ke kedudukan yang berlainan. Berapa titik garis itu menyilang graf?",p:["Satu titik pada setiap kedudukan","Dua titik pada setiap kedudukan","Tiada titik apabila x negatif","Bergantung pada nilai pintasan-y"],b:0,u:"Setiap nilai x memberi tepat satu nilai f(x). Inilah ujian garis mencancang yang membuktikan graf itu suatu fungsi."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan garis mengufuk y = 5. Berapakah bilangan titik persilangan garis itu dengan graf?",b:2,tol:0.01,u:"Selesaikan x² − 2x − 3 = 5, iaitu x² − 2x − 8 = 0, jadi (x − 4)(x + 2) = 0. Dua titik: x = −2 dan x = 4.",kira:()=>punca(1,-2,-8).length},
 {j:"pilih",t:"Dalam Rajah 1, y = 5 dicapai oleh x = −2 dan x = 4. Ini menunjukkan fungsi kuadratik ialah hubungan:",p:["banyak kepada satu","satu kepada satu","satu kepada banyak","banyak kepada banyak"],b:0,u:"Dua nilai x (objek) dipetakan kepada satu nilai y (imej) yang sama, jadi hubungannya banyak kepada satu.",kira:()=>f(1,-2,-3)(-2)===5&&f(1,-2,-3)(4)===5},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan y = −4. Mengapakah garis itu menyentuh graf pada satu titik sahaja?",p:["Titik (1, −4) ialah titik minimum graf","Garis y = −4 selari dengan paksi simetri","Nilai −4 ialah pintasan-y bagi graf ini","Graf terputus di bawah garis y = −4"],b:0,u:"Paksi simetri ialah x = 1 dan f(1) = 1 − 2 − 3 = −4. Titik minimum ialah titik terendah, jadi garis y = −4 hanya menyentuhnya di situ.",kira:()=>f(1,-2,-3)(1)===-4},
 {j:"nombor",t:"Persamaan paksi simetri bagi graf f(x) = x² − 2x − 3 ialah x = k. Cari nilai k.",b:1,tol:0.01,u:"Paksi simetri x = −b ÷ 2a. Ganti a = 1 dan b = −2: x = 2 ÷ 2 = 1.",kira:()=>-(-2)/(2*1)},
 {j:"pilih",t:"Bagi graf f(x) = x² + c, apabila c berubah daripada 0 kepada 3, graf itu:",p:["Beralih 3 unit ke atas","Beralih 3 unit ke kanan","Menjadi lebih sempit","Bertukar menjadi bentuk ∩"],b:0,u:"Nilai c ialah pintasan-y. Menambah 3 kepada setiap nilai f(x) mengalihkan seluruh graf 3 unit ke atas tanpa mengubah bentuknya."},
 {j:"pilih",t:"Bandingkan graf f(x) = x² dengan graf g(x) = 3x². Graf g ialah:",p:["Lebih sempit daripada graf f","Lebih lebar daripada graf f","Graf f yang dialih 3 unit ke atas","Graf yang mempunyai titik maksimum"],b:0,u:"Semakin besar nilai |a|, semakin cepat nilai y meningkat, jadi graf menjadi lebih sempit. Kedua-dua graf masih berbentuk ∪."},
 {j:"pilih",t:"Bagi f(x) = x² + bx, apabila b berubah daripada 0 kepada −4, paksi simetri beralih daripada x = 0 kepada:",p:["x = 2","x = −2","x = 4","x = −4"],b:0,u:"Paksi simetri x = −b ÷ 2a = −(−4) ÷ 2 = 2. Nilai b mengalihkan graf ke kiri atau ke kanan.",kira:()=>-(-4)/2===2}],
 bos:{j:"pilih",t:"Graf f(x) = ax² + bx + c mempunyai titik maksimum (2, 7) dan pintasan-y 3. Antara berikut, yang manakah benar?",p:["a &lt; 0 dan paksi simetri ialah x = 2","a &gt; 0 dan paksi simetri ialah x = 2","a &lt; 0 dan paksi simetri ialah x = 7","a &gt; 0 dan paksi simetri ialah x = 3"],b:0,u:"Titik maksimum bermaksud graf berbentuk ∩, jadi a &lt; 0. Paksi simetri melalui titik pusingan, iaitu x = 2 (koordinat-x titik itu, bukan koordinat-y)."}},

{n:3, tempat:"Bengkel Faktor", sk:"1.1.5 / 1.1.6 Punca persamaan kuadratik dan pemfaktoran", lampiran:"punca",
 kadNama:"Punca", kadEm:"\u{1F3AF}", kadFakta:"Punca persamaan kuadratik ialah nilai x yang menjadikan f(x) = 0. Pada graf, punca ialah titik persilangan graf dengan paksi-x.",
 bosKadNama:"Sifar Dahulu", bosKadEm:"0\u{FE0F}\u{20E3}", bosKadFakta:"Kaedah pemfaktoran hanya sah apabila satu belah persamaan ialah sifar, kerana jika pq = 0, maka p = 0 atau q = 0.",
 soalan:[
 {j:"pilih",t:"Punca suatu persamaan kuadratik ialah nilai x yang:",p:["Menjadikan f(x) = 0","Menjadikan x sama dengan sifar","Memberi nilai f(x) yang terbesar","Memberi pintasan-y bagi graf"],b:0,u:"Punca memenuhi persamaan ax² + bx + c = 0. Pada graf, ia ialah titik di mana graf memotong paksi-x."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan p = 1 dan q = 3. Graf memotong paksi-x pada:",p:["x = 1 dan x = 3","x = −1 dan x = −3","x = 0 dan x = 3","x = 1 dan x = −3"],b:0,u:"(x − 1)(x − 3) = 0 apabila x − 1 = 0 atau x − 3 = 0, iaitu x = 1 atau x = 3."},
 {j:"nombor",t:"Selesaikan x² − 5x + 6 = 0. Nyatakan punca yang lebih besar.",b:3,tol:0.01,u:"Faktorkan: (x − 2)(x − 3) = 0. Maka x = 2 atau x = 3. Punca yang lebih besar ialah 3.",kira:()=>punca(1,-5,6)[1]},
 {j:"nombor",t:"Selesaikan x² + 2x − 15 = 0. Nyatakan punca yang positif.",b:3,tol:0.01,u:"Cari dua nombor yang hasil darabnya −15 dan hasil tambahnya 2, iaitu 5 dan −3. (x + 5)(x − 3) = 0, jadi x = −5 atau x = 3.",kira:()=>punca(1,2,-15)[1]},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan p = 2 dan q = −3. Bentuk am bagi f(x) ialah:",p:["x² + x − 6","x² − x − 6","x² + x + 6","x² − 5x − 6"],b:0,u:"(x − 2)(x + 3) = x² + 3x − 2x − 6 = x² + x − 6.",kira:()=>[-3,-1,0,1,2].every(x=>(x-2)*(x+3)===x*x+x-6)},
 {j:"pilih",t:"Selesaikan 2x² − 7x + 3 = 0 dengan kaedah pemfaktoran.",p:["x = 1/2 atau x = 3","x = −1/2 atau x = −3","x = 2 atau x = 3","x = 1/2 atau x = −3"],b:0,u:"2x² − 7x + 3 = (2x − 1)(x − 3). Maka 2x − 1 = 0 memberi x = 1/2, dan x − 3 = 0 memberi x = 3.",kira:()=>{const r=punca(2,-7,3);return r[0]===0.5&&r[1]===3;}},
 {j:"nombor",t:"Selesaikan 3x² = 12x. Nyatakan punca yang bukan sifar.",b:4,tol:0.01,u:"Pindahkan semua sebutan ke kiri: 3x² − 12x = 0. Faktorkan: 3x(x − 4) = 0, jadi x = 0 atau x = 4. Jangan bahagi dengan x kerana punca x = 0 akan hilang.",kira:()=>punca(3,-12,0)[1]},
 {j:"susun",t:"Susun langkah menyelesaikan persamaan kuadratik dengan kaedah pemfaktoran.",p:["Susun persamaan dalam bentuk ax² + bx + c = 0","Faktorkan ungkapan di sebelah kiri","Samakan setiap faktor dengan sifar","Selesaikan setiap persamaan linear"],b:[0,1,2,3],u:"Persamaan mesti sama dengan sifar dahulu. Selepas difaktorkan, setiap faktor disamakan dengan sifar dan diselesaikan."}],
 bos:{j:"pilih",t:"Seorang murid menyelesaikan x² − 4x = 5 dengan menulis x(x − 4) = 5, maka x = 5 atau x − 4 = 5. Apakah kesilapannya?",p:["Sebelah kanan mesti sifar sebelum setiap faktor disamakan","Ungkapan x² − 4x tidak boleh difaktorkan sama sekali","Dia sepatutnya membahagi kedua-dua belah dengan x","Tiada kesilapan kerana x = 5 dan x = 9 adalah punca"],b:0,u:"Jika ab = 5, tidak semestinya a = 5 atau b = 5. Tulis x² − 4x − 5 = 0, faktorkan menjadi (x − 5)(x + 1) = 0, jadi x = 5 atau x = −1.",kira:()=>{const r=punca(1,-4,-5);return r[0]===-1&&r[1]===5;}}},

{n:4, tempat:"Kebun Pagar", sk:"1.1.4 / 1.1.8 Membentuk fungsi kuadratik daripada situasi", lampiran:"segi",
 kadNama:"Model Luas", kadEm:"\u{1F33B}", kadFakta:"Dengan pagar sepanjang 20 m, lebar x memberi panjang (10 − x). Luas A = x(10 − x) ialah fungsi kuadratik dalam x.",
 bosKadNama:"Punca yang Sah", bosKadEm:"\u{2705}", bosKadFakta:"Dalam masalah sebenar, semak setiap punca. Panjang, luas dan masa tidak boleh negatif, jadi punca negatif ditolak.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, jika lebar kebun ialah x m, maka panjangnya ialah:",p:["(10 − x) m","(20 − x) m","(20 − 2x) m","(10 − 2x) m"],b:0,u:"2(panjang + x) = 20, jadi panjang + x = 10 dan panjang = 10 − x."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 3. Berapakah luas kebun, dalam m²?",b:21,tol:0.01,u:"Panjang = 10 − 3 = 7 m. Luas = 3 × 7 = 21 m².",kira:()=>3*(10-3)},
 {j:"nombor",t:"Dalam Rajah 1, gerakkan x dari 1 hingga 9. Berapakah luas maksimum kebun, dalam m²?",b:25,tol:0.01,u:"Luas terbesar apabila x = 5 m, iaitu kebun berbentuk segi empat sama: 5 × 5 = 25 m². Graf A berbentuk ∩ dengan titik maksimum (5, 25).",kira:()=>Math.max(...[1,2,3,4,5,6,7,8,9].map(x=>x*(10-x)))},
 {j:"nombor",t:"Dalam Rajah 1, luas kebun ialah 24 m² dan lebarnya kurang daripada panjangnya. Cari lebar x, dalam m.",b:4,tol:0.01,u:"x(10 − x) = 24 memberi x² − 10x + 24 = 0, iaitu (x − 4)(x − 6) = 0. Lebar kurang daripada panjang, jadi x = 4 m (panjang 6 m).",kira:()=>punca(1,-10,24)[0]},
 {j:"pilih",t:"Fungsi luas A(x) = x(10 − x) dalam bentuk am ialah:",p:["A = −x² + 10x","A = x² − 10x","A = −x² − 10x","A = x² + 10x"],b:0,u:"Kembangkan: x × 10 − x × x = 10x − x², iaitu A = −x² + 10x. Nilai a = −1 &lt; 0, jadi graf berbentuk ∩."},
 {j:"nombor",t:"Hasil darab dua nombor bulat positif yang berturutan ialah 72. Cari nombor yang lebih kecil.",b:8,tol:0.01,u:"Biar nombor itu x dan x + 1. x(x + 1) = 72 memberi x² + x − 72 = 0, iaitu (x + 9)(x − 8) = 0. Nombor positif, jadi x = 8.",kira:()=>punca(1,1,-72)[1]},
 {j:"nombor",t:"Panjang sebuah segi empat tepat 3 cm lebih daripada lebarnya. Luasnya ialah 40 cm². Cari lebarnya, dalam cm.",b:5,tol:0.01,u:"Biar lebar x cm. x(x + 3) = 40 memberi x² + 3x − 40 = 0, iaitu (x + 8)(x − 5) = 0. Lebar mesti positif, jadi x = 5 cm.",kira:()=>punca(1,3,-40)[1]},
 {j:"pilih",t:"Persamaan x² − 10x + 24 = 0 memberi x = 4 atau x = 6. Mengapakah kedua-dua nilai sah bagi lebar kebun dalam Rajah 1?",p:["Kedua-duanya positif dan kurang daripada 10","Persamaan kuadratik selalu ada dua jawapan","Lebar dan panjang kebun mesti sama","Lebar kebun boleh mengambil apa-apa nilai"],b:0,u:"Lebar mesti positif dan panjang 10 − x juga mesti positif, jadi 0 &lt; x &lt; 10. Nilai 4 dan 6 memenuhi syarat itu (kebun 4 × 6 atau 6 × 4)."}],
 bos:{j:"nombor",t:"Sebuah segi tiga bersudut tegak mempunyai tapak x cm, tinggi (x + 2) cm dan luas 24 cm². Cari nilai x.",b:6,tol:0.01,u:"½ × x × (x + 2) = 24 memberi x² + 2x − 48 = 0, iaitu (x + 8)(x − 6) = 0. Tapak mesti positif, jadi x = 6.",kira:()=>punca(1,2,-48)[1]}},

{n:5, tempat:"Menara Lengkung", sk:"1.1.7 / 1.1.8 Melakar graf dan masalah kompleks", lampiran:"graf5",
 kadNama:"Lakar Graf", kadEm:"\u{270F}\u{FE0F}", kadFakta:"Untuk melakar graf kuadratik, tentukan bentuk (tanda a), pintasan-y (c), punca (jika ada) dan titik pusingan pada paksi simetri.",
 bosKadNama:"Bingkai Gambar", bosKadEm:"\u{1F5BC}\u{FE0F}", bosKadFakta:"Masalah luas berbingkai: luas bingkai = luas keseluruhan − luas gambar. Hasilnya sering persamaan kuadratik.",
 soalan:[
 {j:"pilih",t:"Lakar graf f(x) = x² − 4x + 3 di kertas conteng, kemudian semak dengan Rajah 1. Titik minimumnya ialah:",p:["(2, −1)","(−2, 15)","(2, 1)","(4, 3)"],b:0,u:"Paksi simetri x = −(−4) ÷ 2 = 2. f(2) = 4 − 8 + 3 = −1. Titik minimum ialah (2, −1).",kira:()=>f(1,-4,3)(2)===-1},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan a = −1, b = 2 dan c = 3. Bentuk graf dan puncanya ialah:",p:["∩, punca x = −1 dan x = 3","∪, punca x = −1 dan x = 3","∩, punca x = 1 dan x = −3","∪, punca x = 1 dan x = −3"],b:0,u:"a = −1 &lt; 0, jadi bentuk ∩. −x² + 2x + 3 = −(x² − 2x − 3) = −(x − 3)(x + 1), jadi punca x = −1 dan x = 3.",kira:()=>{const r=punca(-1,2,3);return r[0]===-1&&r[1]===3;}},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan a = 1, b = 0 dan c = 4. Graf ini tiada punca nyata. Titik minimumnya terletak di:",p:["(0, 4) pada paksi-y","(4, 0) pada paksi-x","(0, −4) pada paksi-y","(2, 0) pada paksi-x"],b:0,u:"Dengan b = 0, paksi simetri ialah paksi-y. f(0) = 4, jadi titik minimum (0, 4) berada di atas paksi-x dan graf tidak memotong paksi-x.",kira:()=>punca(1,0,4).length===0},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 2, b = −4 dan c = −2. Persamaan paksi simetri graf itu ialah x = k. Cari nilai k.",b:1,tol:0.01,u:"x = −b ÷ 2a = −(−4) ÷ (2 × 2) = 4 ÷ 4 = 1.",kira:()=>4/(2*2)},
 {j:"nombor",t:"Untung harian sebuah gerai ialah U(x) = −x² + 40x − 300 ringgit, dengan x ialah harga sepinggan (RM). Berapakah untung maksimum, dalam RM?",b:100,tol:0.01,u:"Paksi simetri x = −40 ÷ (2 × −1) = 20. U(20) = −400 + 800 − 300 = 100. Untung maksimum ialah RM100 apabila harga RM20.",kira:()=>f(-1,40,-300)(20)},
 {j:"nombor",t:"Bagi gerai yang sama, U(x) = −x² + 40x − 300. Pada harga terendah berapakah (RM) untung harian menjadi RM75?",b:15,tol:0.01,u:"−x² + 40x − 300 = 75 memberi x² − 40x + 375 = 0, iaitu (x − 15)(x − 25) = 0. Harga terendah ialah RM15.",kira:()=>punca(1,-40,375)[0]},
 {j:"pilih",t:"Antara berikut, yang manakah menghuraikan graf f(x) = −(x − 1)(x − 5) dengan betul?",p:["∩, memotong paksi-x di 1 dan 5, maksimum pada x = 3","∪, memotong paksi-x di 1 dan 5, minimum pada x = 3","∩, memotong paksi-x di −1 dan −5, maksimum pada x = −3","∪, memotong paksi-x di −1 dan −5, minimum pada x = −3"],b:0,u:"Tanda negatif di hadapan memberi a &lt; 0, jadi ∩. Punca ialah 1 dan 5, dan paksi simetri berada di tengah-tengah: (1 + 5) ÷ 2 = 3."},
 {j:"nombor",t:"Sebuah taman segi empat sama bersisi 10 m dikelilingi laluan selebar x m. Luas taman bersama laluan ialah 196 m². Cari x.",b:2,tol:0.01,u:"Sisi keseluruhan = 10 + 2x. (10 + 2x)² = 196, jadi 10 + 2x = 14 (sisi positif) dan x = 2.",kira:()=>punca(4,40,100-196)[1]}],
 bos:{j:"nombor",t:"Sekeping gambar berukuran 8 cm × 6 cm diletakkan dalam bingkai selebar x cm di sekelilingnya. Luas bingkai sahaja ialah 72 cm². Cari x.",b:2,tol:0.01,u:"(8 + 2x)(6 + 2x) − 48 = 72. Kembangkan: 4x² + 28x + 48 − 48 = 72, jadi 4x² + 28x − 72 = 0, iaitu x² + 7x − 18 = 0. (x + 9)(x − 2) = 0, jadi x = 2.",kira:()=>punca(1,7,-18)[1]}},

{n:6, tempat:"Padang Lontar", sk:"1.1.8 Masalah bukan rutin dan mereka situasi", lampiran:"lontar",
 kadNama:"Lontaran", kadEm:"\u{26BE}", kadFakta:"Tinggi objek yang dilambung boleh dimodelkan oleh h(t) = h₀ + vt − 5t². Graf berbentuk ∩ dan titik maksimumnya memberikan tinggi maksimum objek itu.",
 bosKadNama:"Reka Model", bosKadEm:"\u{1F4A1}", bosKadFakta:"Model matematik yang baik mempunyai pemboleh ubah yang jelas, domain yang munasabah, dan tafsiran bagi setiap nilai penting pada graf.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan t = 1.5 s. Berapakah tinggi bola, dalam m?",b:18.75,tol:0.01,u:"h(1.5) = 20(1.5) − 5(1.5)² = 30 − 11.25 = 18.75 m.",kira:()=>f(-5,20,0)(1.5)},
 {j:"nombor",t:"Dalam Rajah 1, gerakkan t. Berapakah tinggi maksimum bola, dalam m?",b:20,tol:0.01,u:"Paksi simetri t = −20 ÷ (2 × −5) = 2. h(2) = 40 − 20 = 20 m.",kira:()=>f(-5,20,0)(2)},
 {j:"nombor",t:"Dalam Rajah 1, pada masa berapakah (dalam saat) bola mendarat semula di tanah?",b:4,tol:0.01,u:"Selesaikan 20t − 5t² = 0, iaitu 5t(4 − t) = 0. Maka t = 0 (dilambung) atau t = 4 (mendarat).",kira:()=>punca(-5,20,0)[1]},
 {j:"pilih",t:"Dalam Rajah 1, bola berada pada ketinggian 15 m pada dua masa yang berlainan. Masa-masa itu ialah:",p:["t = 1 s dan t = 3 s","t = 1.5 s dan t = 2.5 s","t = 0.5 s dan t = 3.5 s","t = 2 s dan t = 4 s"],b:0,u:"20t − 5t² = 15 memberi t² − 4t + 3 = 0, iaitu (t − 1)(t − 3) = 0. Bola melalui 15 m semasa naik (t = 1) dan semasa turun (t = 3).",kira:()=>{const r=punca(1,-4,3);return r[0]===1&&r[1]===3;}},
 {j:"pilih",t:"Mengapakah persamaan 20t − 5t² = 25 tiada penyelesaian dalam situasi Rajah 1?",p:["Tinggi maksimum bola ialah 20 m, jadi 25 m tidak dicapai","Masa tidak boleh mempunyai nilai pecahan saat","Bola sudah mendarat sebelum t = 2.5 s","Persamaan kuadratik mesti mempunyai dua punca"],b:0,u:"Garis h = 25 berada di atas titik maksimum (2, 20), jadi ia tidak menyilang graf. Secara algebra, t² − 4t + 5 = 0 tiada punca nyata.",kira:()=>punca(5,-20,25).length===0},
 {j:"pilih",t:"Persamaan x(x + 5) = 84 boleh mewakili situasi yang manakah?",p:["Luas segi empat tepat yang panjangnya 5 m lebih daripada lebarnya ialah 84 m²","Perimeter segi empat tepat bersisi x dan 5 ialah 84 m","Hasil tambah dua nombor yang berbeza sebanyak 5 ialah 84","Isi padu kubus bersisi (x + 5) m ialah 84 m³"],b:0,u:"Lebar x dan panjang x + 5 memberi luas x(x + 5). Perimeter dan hasil tambah ialah ungkapan linear, manakala isi padu kubus ialah kuasa tiga."},
 {j:"nombor",t:"Jika bola itu dilambung dengan halaju 30 m/s, iaitu h(t) = 30t − 5t², berapakah tinggi maksimumnya, dalam m?",b:45,tol:0.01,u:"Paksi simetri t = −30 ÷ (2 × −5) = 3. h(3) = 90 − 45 = 45 m.",kira:()=>f(-5,30,0)(3)},
 {j:"pilih",t:"Seorang murid berkata, \"Jika halaju lambungan digandakan, tinggi maksimum turut digandakan.\" Gunakan h(t) = vt − 5t² untuk menilai pernyataan itu.",p:["Tidak benar; tinggi menjadi empat kali ganda kerana bergantung pada v²","Benar; tinggi berkadar terus dengan halaju lambungan","Tidak benar; tinggi kekal sama kerana graviti tidak berubah","Benar; masa bola di udara turut menjadi dua kali ganda"],b:0,u:"Tinggi maksimum = v² ÷ 20. Bagi v = 20, tinggi ialah 20 m. Bagi v = 40, tinggi ialah 1600 ÷ 20 = 80 m, iaitu empat kali ganda.",kira:()=>f(-5,40,0)(4)===4*f(-5,20,0)(2)}],
 bos:{j:"buka",
  t:"Reka satu situasi kehidupan sebenar yang boleh dimodelkan oleh fungsi kuadratik, contohnya lontaran bola, luas kebun atau untung jualan.",
  arahan:"Tulis fungsi kuadratik bagi situasi itu dan nyatakan maksud setiap pemboleh ubah. Lakar grafnya, kemudian cari titik maksimum atau minimum serta puncanya. Terangkan maksud setiap nilai itu dalam situasi awak, dan nyatakan nilai yang tidak munasabah serta sebabnya.",
  u:"Jawapan TP6 yang kukuh mempunyai fungsi yang sepadan dengan situasi, lakaran dengan bentuk, pintasan dan titik pusingan yang betul, tafsiran yang bermakna bagi titik maksimum atau minimum dan punca, serta penolakan nilai yang tidak munasabah (contohnya masa atau panjang negatif)."}}
];

module.exports = {
  id:"m4b1", tingkatan:4, kod:"1.0 Fungsi dan Persamaan Kuadratik",
  tajuk:"Taman Parabola",
  subtajuk:"Matematik Ting. 4 · Bab 1 Fungsi dan Persamaan Kuadratik dalam Satu Pemboleh Ubah",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal pasti ungkapan kuadratik dalam satu pemboleh ubah serta nilai a, b dan c, dan mengetahui bentuk graf ∪ atau ∩. Langkah seterusnya ialah memahami ciri-ciri fungsi kuadratik dan kesan perubahan nilai a, b dan c.",
   2:"{n} memahami fungsi kuadratik sebagai hubungan banyak kepada satu, dan dapat menerangkan kesan perubahan a, b dan c ke atas graf. Perlu lebih latihan mencari punca dengan kaedah pemfaktoran.",
   3:"{n} boleh menentukan punca persamaan kuadratik dengan kaedah pemfaktoran dan mengaitkannya dengan titik persilangan graf pada paksi-x. Sudah bersedia membentuk fungsi kuadratik daripada situasi.",
   4:"{n} mampu membentuk fungsi kuadratik daripada situasi mudah, menyelesaikannya, dan menolak punca yang tidak munasabah. Seterusnya, latih masalah yang memerlukan lakaran graf dan titik maksimum atau minimum.",
   5:"{n} dapat melakar graf fungsi kuadratik dan menyelesaikan masalah rutin yang kompleks seperti untung maksimum dan bingkai gambar. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka situasi sebenar yang dimodelkan oleh fungsi kuadratik, mentafsir titik maksimum dan punca dengan bermakna, serta menilai kemunasabahan jawapan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Fungsi dan Persamaan Kuadratik. Cadangan: ulang hentian pertama menggunakan Rajah 1 dan kenal pasti nilai a, b dan c bersama rakan sebaya."
  },
  lampiran:{ graf:R_GRAF, cancang:R_CANCANG, punca:R_PUNCA, segi:R_SEGI, graf5:R_GRAF5, lontar:R_LONTAR },
  aras:ARAS
};
