/* Sumber kandungan — Matematik KSSM Tingkatan 3, Bab 5 Nisbah Trigonometri.
   Fail ini disunting tangan. Jalankan `node bina.js m3b5` untuk menyemaknya
   dan menghasilkan bank-m3b5.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum, muka 51 (dskp/matematik-t3.pdf).

   Semua jawapan trigonometri dikira dengan kod dalam medan `kira` (radian
   dari darjah) dan dibandingkan oleh tools/semak-jawapan.js. Soalan berangka
   yang memerlukan kalkulator menyatakan tempat perpuluhan yang diminta. */
const rad = d => d * Math.PI / 180;
const sin = d => Math.sin(rad(d)), kos = d => Math.cos(rad(d)), tan = d => Math.tan(rad(d));
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const arcsin = x => Math.asin(x) * 180 / Math.PI;
const arctan = x => Math.atan(x) * 180 / Math.PI;

const SPI = [
"Mempamerkan pengetahuan asas tentang sisi dalam segi tiga bersudut tegak berdasarkan suatu sudut tirus.",
"Mempamerkan kefahaman tentang sinus, kosinus dan tangen.",
"Mengaplikasikan kefahaman tentang sinus, kosinus dan tangen untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sinus, kosinus dan tangen dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sinus, kosinus dan tangen dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sinus, kosinus dan tangen dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: segi tiga bersudut tegak interaktif ---------- */

const SUDUT = [0, 10, 20, 30, 40, 45, 50, 60, 70, 80, 90];
const tri = (kapsyen, extra) => Object.assign({
  jenis:"interaktif", w:"segitiga", sudut:SUDUT, sisi:10, i:5, kapsyen,
  alt:"Rajah interaktif segi tiga bersudut tegak dengan hipotenus 10; gelongsor menukar sudut tirus dan menunjukkan sin, kos dan tan"
}, extra || {});
const R_TRI1 = tri("Rajah 1 · Hipotenus 10. Gerakkan gelongsor untuk menukar sudut θ dan lihat setiap sisi.");
const R_TRI2 = tri("Rajah 1 · Hipotenus 10. Perhatikan sin θ, kos θ dan tan θ apabila sudut θ berubah.");
const R_TRI3 = tri("Rajah 1 · Hipotenus 10. Bandingkan nilai sin, kos dan tan pada sudut yang berbeza.");
const R_TRI4 = tri("Rajah 1 · Hipotenus 10. Kira dahulu dengan sin, kos atau tan, kemudian semak dengan rajah.", { i:3, cabar:true });
const R_TRI5 = tri("Rajah 1 · Hipotenus 10. Kira sisi yang diminta, kemudian semak dengan rajah.", { i:7, cabar:true });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Padang Segi Tiga", sk:"5.1.1 Sisi bertentangan, bersebelahan dan hipotenus", lampiran:"tri1",
 kadNama:"Hipotenus", kadEm:"\u{1F4D0}", kadFakta:"Perkataan hipotenus datang daripada bahasa Yunani yang bermaksud 'terentang di bawah'. Ia sentiasa sisi terpanjang dalam segi tiga bersudut tegak.",
 bosKadNama:"Sudut Tirus", bosKadEm:"\u{1F4C8}", bosKadFakta:"Sudut tirus ialah sudut kurang daripada 90°. Dalam segi tiga bersudut tegak, dua sudut lain sentiasa tirus.",
 soalan:[
 {j:"pilih",t:"Dalam segi tiga bersudut tegak, sisi yang bertentangan dengan sudut tegak dipanggil:",p:["Hipotenus","Sisi bertentangan","Sisi bersebelahan","Sisi tirus"],b:0,u:"Hipotenus ialah sisi terpanjang, di hadapan sudut 90°."},
 {j:"pilih",t:"Sisi yang terletak di hadapan sudut tirus θ dipanggil:",p:["Sisi bertentangan","Sisi bersebelahan","Hipotenus","Sisi sepusat"],b:0,u:"Bertentangan bermaksud berhadapan dengan sudut θ, tidak menyentuhnya."},
 {j:"pilih",t:"Dalam Rajah 1, sisi berwarna hijau menyentuh sudut θ dan sudut tegak. Sisi itu ialah:",p:["Sisi bersebelahan","Sisi bertentangan","Hipotenus","Sisi sepusat"],b:0,u:"Sisi bersebelahan menyentuh sudut θ dan bukan hipotenus."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sudut 30°. Berapakah panjang sisi bertentangan dengan θ?",b:bunda(10*sin(30),2),tol:0.01,u:"Pada sudut 30°, sisi bertentangan ialah 5 (separuh hipotenus 10).",kira:()=>bunda(10*sin(30),2)},
 {j:"pilih",t:"Sinus sudut θ (sin θ) ditakrifkan sebagai:",p:["Sisi bertentangan ÷ hipotenus","Sisi bersebelahan ÷ hipotenus","Sisi bertentangan ÷ sisi bersebelahan","Hipotenus ÷ sisi bertentangan"],b:0,u:"sin θ = bertentangan ÷ hipotenus."},
 {j:"pilih",t:"Kosinus sudut θ (kos θ) ditakrifkan sebagai:",p:["Sisi bersebelahan ÷ hipotenus","Sisi bertentangan ÷ hipotenus","Sisi bertentangan ÷ sisi bersebelahan","Hipotenus ÷ sisi bersebelahan"],b:0,u:"kos θ = bersebelahan ÷ hipotenus."},
 {j:"pilih",t:"Tangen sudut θ (tan θ) ditakrifkan sebagai:",p:["Sisi bertentangan ÷ sisi bersebelahan","Sisi bersebelahan ÷ sisi bertentangan","Sisi bertentangan ÷ hipotenus","Sisi bersebelahan ÷ hipotenus"],b:0,u:"tan θ = bertentangan ÷ bersebelahan."},
 {j:"susun",t:"Susun langkah mengenal pasti sisi dalam segi tiga bersudut tegak berdasarkan sudut θ.",p:["Cari sudut tegak (90°)","Sisi di hadapan sudut tegak ialah hipotenus","Sisi di hadapan sudut θ ialah sisi bertentangan","Sisi yang tinggal ialah sisi bersebelahan"],b:[0,1,2,3],u:"Kenal hipotenus dahulu, kemudian bertentangan, dan yang tinggal ialah bersebelahan."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang segi tiga bersudut tegak.",p:["Hipotenus ialah sisi terpanjang","Sisi bertentangan bergantung pada θ yang dipilih","Sisi bersebelahan θ menjadi sisi bertentangan bagi sudut lain","Hipotenus bertentangan dengan sudut tirus","Segi tiga bersudut tegak ada dua sudut tegak","Nilai sin θ boleh melebihi 1 untuk sudut tirus"],b:[0,1,2],u:"Hipotenus bertentangan dengan sudut tegak. Hanya ada satu sudut tegak, dan sin θ tidak pernah melebihi 1 kerana bertentangan tidak boleh lebih panjang daripada hipotenus."}},

{n:2, tempat:"Cerun Sudut", sk:"5.1.2 / 5.1.3 Definisi dan kesan perubahan sudut", lampiran:"tri2",
 kadNama:"Nisbah Tetap", kadEm:"\u{1F3AF}", kadFakta:"Segi tiga besar dan kecil dengan sudut yang sama mempunyai nisbah sisi yang sama. Itulah sebabnya sin, kos dan tan hanya bergantung pada sudut.",
 bosKadNama:"Sin Naik Kos Turun", bosKadEm:"\u{1F504}", bosKadFakta:"Apabila sudut naik dari 0° ke 90°, sin naik dari 0 ke 1 manakala kos turun dari 1 ke 0. Dua-duanya bertukar tempat pada 45°.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sudut 30°. Berapakah nilai sin θ?",b:bunda(sin(30),3),tol:0.001,u:"sin 30° = 5 ÷ 10 = 0.5.",kira:()=>bunda(sin(30),3)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sudut 60°. Berapakah nilai kos θ?",b:bunda(kos(60),3),tol:0.001,u:"kos 60° = 5 ÷ 10 = 0.5.",kira:()=>bunda(kos(60),3)},
 {j:"pilih",t:"Apabila sudut θ bertambah daripada 0° kepada 90°, nilai sin θ:",p:["Bertambah daripada 0 kepada 1","Berkurang daripada 1 kepada 0","Kekal sama dengan 0.5","Bertambah tanpa had"],b:0,u:"Sisi bertentangan semakin panjang sehingga sama dengan hipotenus, jadi sin θ naik dari 0 ke 1."},
 {j:"pilih",t:"Apabila sudut θ bertambah daripada 0° kepada 90°, nilai kos θ:",p:["Berkurang daripada 1 kepada 0","Bertambah daripada 0 kepada 1","Kekal sama dengan 1","Bertambah tanpa had"],b:0,u:"Sisi bersebelahan semakin pendek sehingga menjadi 0, jadi kos θ turun dari 1 ke 0."},
 {j:"pilih",t:"Dalam Rajah 1, pada sudut manakah nilai tan θ sama dengan 1?",p:["45°","30°","60°","90°"],b:0,u:"Pada 45°, sisi bertentangan sama dengan sisi bersebelahan, jadi tan 45° = 1.",kira:()=>bunda(tan(45),3)===1},
 {j:"pilih",t:"Pada sudut 90°, nilai tan θ ialah:",p:["Tidak tertakrif","Sama dengan sifar","Sama dengan satu","Sama dengan 90"],b:0,u:"Pada 90°, sisi bersebelahan menjadi 0. Pembahagian dengan 0 tidak tertakrif."},
 {j:"pilih",t:"Bagaimanakah nilai sin 30° berbanding kos 60°?",p:["Sama nilai, iaitu 0.5","sin 30° lebih besar","kos 60° lebih besar","Kedua-duanya ialah 1"],b:0,u:"sin 30° = kos 60° = 0.5. Sudut yang berjumlah 90° saling bertukar sin dan kos.",kira:()=>bunda(sin(30),3)===bunda(kos(60),3)},
 {j:"pilih",t:"Antara nilai berikut, yang manakah TIDAK mungkin menjadi nilai sin θ bagi sudut tirus?",p:["1.5","0.5","0.75","0.25"],b:0,u:"Sisi bertentangan tidak boleh lebih panjang daripada hipotenus, jadi sin θ tidak pernah melebihi 1."}],
 bos:{j:"pilih",t:"Mengapakah nilai sin θ tidak bergantung pada saiz segi tiga bersudut tegak, asalkan sudut θ sama?",p:["Segi tiga dengan sudut sama adalah serupa, nisbah sisi kekal","Kerana hipotenus sentiasa 10 dalam semua segi tiga","Kerana sin θ ialah sudut, bukan satu nisbah sisi","Kerana bertentangan sentiasa sama dengan bersebelahan"],b:0,u:"Segi tiga serupa mempunyai sisi yang berkadar. Jadi bertentangan ÷ hipotenus tidak berubah apabila segi tiga dibesarkan."}},

{n:3, tempat:"Kalkulator Sudut", sk:"5.1.4 / 5.1.5 / 5.1.6 Nilai trigonometri dan sudut istimewa", lampiran:"tri3",
 kadNama:"Mod Darjah", kadEm:"\u{1F5A9}", kadFakta:"Sebelum mengira sin, kos atau tan, semak kalkulator berada dalam mod DEG (darjah). Mod RAD atau GRAD memberikan jawapan yang salah.",
 bosKadNama:"Tiga Empat Lima", bosKadEm:"\u{1F4CF}", bosKadFakta:"Segi tiga 3-4-5 ialah segi tiga bersudut tegak paling terkenal: sin 36.9° ialah 0.6 dan kos 36.9° ialah 0.8.",
 soalan:[
 {j:"nombor",t:"Guna kalkulator (mod darjah). Cari nilai sin 40° kepada 3 tempat perpuluhan.",b:bunda(sin(40),3),tol:0.001,u:"sin 40° = 0.6428..., iaitu 0.643.",kira:()=>bunda(sin(40),3)},
 {j:"nombor",t:"Guna kalkulator (mod darjah). Cari nilai kos 25° kepada 3 tempat perpuluhan.",b:bunda(kos(25),3),tol:0.001,u:"kos 25° = 0.9063..., iaitu 0.906.",kira:()=>bunda(kos(25),3)},
 {j:"nombor",t:"Guna kalkulator (mod darjah). Cari nilai tan 35° kepada 3 tempat perpuluhan.",b:bunda(tan(35),3),tol:0.001,u:"tan 35° = 0.7002..., iaitu 0.700.",kira:()=>bunda(tan(35),3)},
 {j:"pilih",t:"Nilai sin 45° dalam bentuk surd ialah:",p:["√2 / 2","1 / 2","√3 / 2","√3 / 3"],b:0,u:"Pada 45°, bertentangan sama dengan bersebelahan (1, 1, √2), jadi sin 45° = 1/√2 = √2/2.",kira:()=>bunda(Math.SQRT2/2,4)===bunda(sin(45),4)},
 {j:"pilih",t:"Nilai tan 60° dalam bentuk surd ialah:",p:["√3","1 / √3","√3 / 2","1 / 2"],b:0,u:"Segi tiga 30-60-90 bersisi 1, √3 dan 2. tan 60° = bertentangan ÷ bersebelahan = √3 ÷ 1.",kira:()=>bunda(Math.sqrt(3),4)===bunda(tan(60),4)},
 {j:"pilih",t:"Nilai kos 30° dalam bentuk surd ialah:",p:["√3 / 2","1 / 2","1 / √3","√2 / 2"],b:0,u:"Pada 30°, bersebelahan = √3, hipotenus = 2, jadi kos 30° = √3/2.",kira:()=>bunda(Math.sqrt(3)/2,4)===bunda(kos(30),4)},
 {j:"nombor",t:"Diberi sin θ = 0.5. Guna sin⁻¹ untuk mencari sudut tirus θ (darjah).",b:bunda(arcsin(0.5),1),tol:0.1,suf:"°",u:"θ = sin⁻¹(0.5) = 30°.",kira:()=>bunda(arcsin(0.5),1)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sudut 50°. Berapakah nilai tan θ kepada 3 tempat perpuluhan?",b:bunda(tan(50),3),tol:0.001,u:"tan 50° = 1.1917..., iaitu 1.192.",kira:()=>bunda(tan(50),3)}],
 bos:{j:"nombor",t:"Diberi sin θ = 3/5 bagi sudut tirus θ. Berapakah nilai kos θ dalam bentuk perpuluhan?",b:0.8,tol:0.001,u:"Bertentangan 3, hipotenus 5, maka bersebelahan = √(25 − 9) = 4. kos θ = 4/5 = 0.8.",kira:()=>Math.sqrt(25-9)/5}},

{n:4, tempat:"Tiang Bendera", sk:"5.1.6 / 5.1.7 Pengiraan sisi dan sudut, masalah mudah", lampiran:"tri4",
 kadNama:"Sudut Dongak", kadEm:"\u{1F6A9}", kadFakta:"Sudut dongak diukur dari garis mengufuk ke atas, ke arah puncak objek yang dipandang. Klinometer ialah alat mudah untuk mengukurnya.",
 bosKadNama:"Tinggi Mata", bosKadEm:"\u{1F441}\u{FE0F}", bosKadFakta:"Bila mengukur tinggi tiang dengan klinometer, jangan lupa tambah tinggi mata pengukur daripada tanah. Itu kesilapan paling biasa.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, hipotenus ialah 10. Kira panjang sisi bertentangan apabila θ = 30°.",b:bunda(10*sin(30),2),tol:0.01,u:"Bertentangan = hipotenus × sin θ = 10 × sin 30° = 5.",kira:()=>bunda(10*sin(30),2)},
 {j:"nombor",t:"Seorang murid berdiri 12 m dari tapak tiang bendera. Sudut dongak ke puncak tiang ialah 45°. Berapakah tinggi tiang bendera (m)?",b:12,tol:0.05,suf:"m",u:"tan 45° = tinggi ÷ 12. Oleh sebab tan 45° = 1, tinggi = 12 m.",kira:()=>bunda(12*tan(45),2)},
 {j:"nombor",t:"Sebatang tangga 5 m disandar pada dinding. Sudut antara tangga dengan tanah ialah 60°. Berapakah tinggi dinding yang dicapai tangga, kepada 2 tempat perpuluhan (m)?",b:bunda(5*sin(60),2),tol:0.01,suf:"m",u:"sin 60° = tinggi ÷ 5. Tinggi = 5 × 0.8660 = 4.33 m.",kira:()=>bunda(5*sin(60),2)},
 {j:"nombor",t:"Dalam sebuah segi tiga bersudut tegak, sisi bersebelahan θ ialah 8 cm dan sisi bertentangan ialah 6 cm. Berapakah nilai tan θ?",b:0.75,tol:0.001,u:"tan θ = bertentangan ÷ bersebelahan = 6 ÷ 8 = 0.75.",kira:()=>6/8},
 {j:"nombor",t:"Sisi bertentangan θ ialah 6 cm dan hipotenus ialah 10 cm. Cari sudut θ (darjah, 1 tempat perpuluhan).",b:bunda(arcsin(6/10),1),tol:0.1,suf:"°",u:"sin θ = 6 ÷ 10 = 0.6. θ = sin⁻¹(0.6) = 36.9°.",kira:()=>bunda(arcsin(0.6),1)},
 {j:"nombor",t:"Sudut dongak matahari ialah 30°. Sebatang tiang setinggi 3 m mempunyai bayang mendatar sepanjang x m. Cari x kepada 1 tempat perpuluhan.",b:bunda(3/tan(30),1),tol:0.05,suf:"m",u:"tan 30° = 3 ÷ x, jadi x = 3 ÷ 0.5774 = 5.2 m.",kira:()=>bunda(3/tan(30),1)},
 {j:"pilih",t:"Untuk mencari sisi bertentangan apabila hipotenus dan sudut θ diketahui, gunakan:",p:["sin θ","kos θ","tan θ","sin⁻¹ θ"],b:0,u:"sin θ = bertentangan ÷ hipotenus, jadi bertentangan = hipotenus × sin θ."},
 {j:"pilih",t:"Jika tan θ = bertentangan ÷ bersebelahan, maka sisi bertentangan sama dengan:",p:["tan θ × sisi bersebelahan","tan θ ÷ sisi bersebelahan","sisi bersebelahan ÷ tan θ","tan θ + sisi bersebelahan"],b:0,u:"Darabkan kedua-dua belah dengan sisi bersebelahan."}],
 bos:{j:"nombor",t:"Seorang murid berdiri 20 m dari sebatang tiang. Sudut dongak ke puncak tiang ialah 35° dan matanya 1.5 m dari tanah. Berapakah tinggi tiang dari tanah, kepada 1 tempat perpuluhan (m)?",b:bunda(20*tan(35)+1.5,1),tol:0.05,suf:"m",u:"Tinggi di atas paras mata = 20 × tan 35° = 14.0 m. Tambah tinggi mata 1.5 m: 15.5 m.",kira:()=>bunda(20*tan(35)+1.5,1)}},

{n:5, tempat:"Menara Pandang", sk:"5.1.7 Sudut dongak, sudut tunduk dan masalah kompleks", lampiran:"tri5",
 kadNama:"Sudut Tunduk", kadEm:"\u{1F5FC}", kadFakta:"Sudut tunduk diukur dari garis mengufuk ke bawah. Sudut tunduk dari puncak menara sama dengan sudut dongak dari kaki menara ke puncaknya.",
 bosKadNama:"Dua Sudut", bosKadEm:"\u{1F4A1}", bosKadFakta:"Bila diberi dua sudut ke dua titik pada satu objek, dua segi tiga bersudut tegak berkongsi satu garis mengufuk. Tolak dua tinggi untuk mendapatkan panjang objek itu.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, hipotenus ialah 10. Kira panjang sisi bersebelahan apabila θ = 60°.",b:bunda(10*kos(60),2),tol:0.01,u:"Bersebelahan = hipotenus × kos θ = 10 × kos 60° = 5.",kira:()=>bunda(10*kos(60),2)},
 {j:"nombor",t:"Dari puncak sebuah menara setinggi 40 m, sudut tunduk ke sebuah kereta di atas tanah ialah 30°. Berapakah jarak mendatar kereta dari kaki menara, kepada 1 tempat perpuluhan (m)?",b:bunda(40/tan(30),1),tol:0.1,suf:"m",u:"Sudut dongak dari kereta juga 30°. tan 30° = 40 ÷ jarak, jadi jarak = 40 ÷ 0.5774 = 69.3 m.",kira:()=>bunda(40/tan(30),1)},
 {j:"nombor",t:"Dari sebuah kapal yang berada 80 m dari kaki sebuah rumah api, sudut dongak ke puncak rumah api ialah 25°. Berapakah tinggi rumah api, kepada 1 tempat perpuluhan (m)?",b:bunda(80*tan(25),1),tol:0.1,suf:"m",u:"tan 25° = tinggi ÷ 80. Tinggi = 80 × 0.4663 = 37.3 m.",kira:()=>bunda(80*tan(25),1)},
 {j:"nombor",t:"Tali sebuah layang-layang sepanjang 50 m membentuk sudut 40° dengan tanah. Anggap tali tegang dan lurus. Berapakah ketinggian layang-layang dari tanah, kepada 1 tempat perpuluhan (m)?",b:bunda(50*sin(40),1),tol:0.1,suf:"m",u:"sin 40° = tinggi ÷ 50. Tinggi = 50 × 0.6428 = 32.1 m.",kira:()=>bunda(50*sin(40),1)},
 {j:"nombor",t:"Sebatang jalan menanjak sepanjang 15 m menaikkan ketinggian sebanyak 3 m. Berapakah sudut kecondongan jalan itu dengan garis mengufuk, kepada 1 tempat perpuluhan (darjah)?",b:bunda(arcsin(3/15),1),tol:0.1,suf:"°",u:"sin θ = 3 ÷ 15 = 0.2. θ = sin⁻¹(0.2) = 11.5°.",kira:()=>bunda(arcsin(3/15),1)},
 {j:"nombor",t:"Dari puncak bangunan A setinggi 30 m, sudut tunduk ke kaki bangunan B ialah 45° dan sudut tunduk ke puncak bangunan B ialah 30°. Berapakah tinggi bangunan B, kepada 1 tempat perpuluhan (m)?",b:bunda(30-30*tan(30),1),tol:0.1,suf:"m",u:"Jarak mendatar = 30 ÷ tan 45° = 30 m. Beza tinggi = 30 × tan 30° = 17.3 m. Tinggi B = 30 − 17.3 = 12.7 m.",kira:()=>bunda(30-(30/tan(45))*tan(30),1)},
 {j:"pilih",t:"Mengapakah sudut tunduk dari A ke B sama dengan sudut dongak dari B ke A?",p:["Garis mengufuk selari, jadi sudut selang-seli sama","Kerana A dan B sentiasa sama tinggi dari tanah","Kerana sin θ = kos θ pada semua sudut tirus","Kerana kedua-dua sudut itu ialah sudut tegak"],b:0,u:"Garis mengufuk di A dan di B selari. Sudut selang-seli antara dua garis selari adalah sama."},
 {j:"pilih",t:"Jika sin θ = kos θ bagi sudut tirus θ, maka θ ialah:",p:["45°","30°","60°","0°"],b:0,u:"Bertentangan sama dengan bersebelahan hanya pada 45°.",kira:()=>bunda(sin(45),4)===bunda(kos(45),4)}],
 bos:{j:"nombor",t:"Dari titik yang berjarak 30 m mendatar dari sebatang tiang di atas bumbung, sudut dongak ke hujung bawah tiang ialah 20° dan ke hujung atas tiang ialah 35°. Berapakah panjang tiang, kepada 1 tempat perpuluhan (m)?",b:bunda(30*tan(35)-30*tan(20),1),tol:0.1,suf:"m",u:"Tinggi hujung atas = 30 × tan 35° = 21.0 m. Tinggi hujung bawah = 30 × tan 20° = 10.9 m. Panjang tiang = 21.0 − 10.9 = 10.1 m.",kira:()=>bunda(30*tan(35)-30*tan(20),1)}},

{n:6, tempat:"Reka Ukur", sk:"5.1.7 Masalah trigonometri bukan rutin",
 kadNama:"Ukur Tinggi", kadEm:"\u{1F333}", kadFakta:"Jurukur tanah mengukur tinggi gunung dengan dua sudut dongak dari dua titik berbeza, tanpa perlu memanjatnya.",
 bosKadNama:"Reka Rancangan", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Pengukuran yang baik bukan sekadar pengiraan yang betul. Ia juga mengambil kira ralat alat dan cara mengurangkannya.",
 soalan:[
 {j:"pilih",t:"Awak mahu mengukur tinggi sebatang pokok tanpa memanjatnya. Alat dan ukuran yang paling sesuai ialah:",p:["Klinometer (sudut dongak) dan pita ukur (jarak mendatar)","Pita ukur yang dililit pada batang pokok sahaja","Jam tangan dan bayang pokok pada waktu malam","Jangka lukis untuk mengukur sudut tegak pokok"],b:0,u:"Tinggi = jarak mendatar × tan (sudut dongak), ditambah tinggi mata pengukur."},
 {j:"nombor",t:"Sebatang tangga 6 m selamat digunakan jika sudut dengan tanah ialah 75°. Berapakah jarak kaki tangga dari dinding, kepada 2 tempat perpuluhan (m)?",b:bunda(6*kos(75),2),tol:0.01,suf:"m",u:"Kaki tangga ialah sisi bersebelahan sudut 75°. Jarak = 6 × kos 75° = 1.55 m.",kira:()=>bunda(6*kos(75),2)},
 {j:"pilih",t:"Dalam sebuah segi tiga bersudut tegak, hipotenus 10 cm dan θ = 60°. Berapakah luas segi tiga itu?",p:["21.65 cm²","25 cm²","43.30 cm²","50 cm²"],b:0,u:"Bertentangan = 10 sin 60° = 8.660 dan bersebelahan = 10 kos 60° = 5. Luas = ½ × 5 × 8.660 = 21.65 cm².",kira:()=>bunda(0.5*(10*sin(60))*(10*kos(60)),2)},
 {j:"pilih",t:"Diberi sin θ = 0.6 dan kos θ = 0.8. Apakah nilai (sin θ)² + (kos θ)²?",p:["1","0.14","1.4","0.5"],b:0,u:"0.36 + 0.64 = 1. Ini benar untuk mana-mana sudut kerana bertentangan² + bersebelahan² = hipotenus².",kira:()=>bunda(0.6*0.6+0.8*0.8,4)===1},
 {j:"nombor",t:"Dari titik A, sudut dongak ke puncak bukit ialah 20°. Dari titik B yang 100 m lebih dekat ke bukit (dalam garis yang sama), sudut dongak ialah 40°. Berapakah tinggi bukit, kepada 1 tempat perpuluhan (m)?",b:bunda((100*tan(20)/(tan(40)-tan(20)))*tan(40),1),tol:0.2,suf:"m",u:"Katakan jarak B ke kaki bukit ialah d. tan 40° = h/d dan tan 20° = h/(d + 100). Selesaikan: d = 100 tan 20° ÷ (tan 40° − tan 20°) = 76.6 m, maka h = 76.6 × tan 40° = 64.3 m.",kira:()=>bunda((100*tan(20)/(tan(40)-tan(20)))*tan(40),1)},
 {j:"pilih",t:"Mengapakah kalkulator memaparkan 'Math ERROR' bagi tan 90°?",p:["Sisi bersebelahan menjadi 0, pembahagian dengan 0 tidak tertakrif","Kerana 90° bukan sudut tirus jadi tidak mempunyai nilai tan","Kerana bateri kalkulator lemah dan perlu dicas semula","Kerana tan 90° sentiasa sama dengan satu"],b:0,u:"tan θ = bertentangan ÷ bersebelahan. Pada 90°, bersebelahan = 0."},
 {j:"pilih",t:"Sebuah cerun naik 1 unit bagi setiap 2 unit mendatar. Sudut kecondongan cerun itu ialah:",p:["26.6°","30°","63.4°","45°"],b:0,u:"tan θ = 1 ÷ 2 = 0.5. θ = tan⁻¹(0.5) = 26.6°.",kira:()=>bunda(arctan(0.5),1)},
 {j:"pilih",t:"Seorang murid mengatakan sin 30° + sin 30° = sin 60°. Adakah dia betul?",p:["Salah, 0.5 + 0.5 = 1 tetapi sin 60° = 0.866","Betul, kerana 30 + 30 = 60 darjah","Betul, kerana nilai sin sentiasa boleh ditambah","Salah, kerana sin 30° sama dengan sifar"],b:0,u:"sin 30° + sin 30° = 1 sedangkan sin 60° = 0.866. Nilai sin tidak bertambah secara linear dengan sudut.",kira:()=>bunda(sin(30)+sin(30),3)!==bunda(sin(60),3)}],
 bos:{j:"buka",
  t:"Pilih satu objek tinggi di sekolah awak (tiang bendera, bangunan atau pokok). Reka rancangan untuk mengukur tingginya tanpa memanjat.",
  arahan:"Nyatakan alat yang digunakan, apa yang diukur dan berapa kali, dan tunjukkan pengiraan menggunakan sin, kos atau tan. Terangkan sekurang-kurangnya satu punca ralat dan bagaimana awak mengurangkannya.",
  u:"Jawapan TP6 yang kukuh memilih kaedah yang sesuai, mengira dengan betul, mengambil kira tinggi mata pengukur, dan mengenal pasti punca ralat serta cara mengurangkannya."}}
];

module.exports = {
  id:"m3b5", tingkatan:3, kod:"5.0 Nisbah Trigonometri",
  tajuk:"Menara Pandang",
  subtajuk:"Matematik Ting. 3 · Bab 5 Nisbah Trigonometri",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal pasti sisi bertentangan, bersebelahan dan hipotenus berdasarkan sudut tirus, serta menyebut takrif sin, kos dan tan. Langkah seterusnya ialah memahami bagaimana nilai nisbah berubah apabila sudut berubah.",
   2:"{n} memahami sin, kos dan tan serta kesan perubahan sudut terhadap nilainya. Perlu lebih latihan mengaitkan nilai dengan sisi segi tiga sebelum bergerak ke TP3.",
   3:"{n} boleh menentukan nilai sin, kos dan tan menggunakan kalkulator dan bagi sudut istimewa 30°, 45° dan 60°, serta menggunakan sin⁻¹, kos⁻¹ dan tan⁻¹. Galakkan menyemak kalkulator berada dalam mod darjah.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah menggunakan sin, kos dan tan untuk mencari sisi dan sudut, termasuk sudut dongak. Seterusnya latih masalah yang melibatkan dua segi tiga.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan sudut dongak dan sudut tunduk serta dua segi tiga bersudut tegak. Sudah bersedia untuk masalah bukan rutin dan tugasan mereka cipta.",
   6:"{n} berjaya mereka rancangan mengukur tinggi objek menggunakan trigonometri dengan pengiraan yang betul dan mengambil kira ralat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Nisbah Trigonometri. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menamakan sisi bertentangan, bersebelahan dan hipotenus dengan bimbingan rakan sebaya."
  },
  lampiran:{ tri1:R_TRI1, tri2:R_TRI2, tri3:R_TRI3, tri4:R_TRI4, tri5:R_TRI5 },
  aras:ARAS
};
