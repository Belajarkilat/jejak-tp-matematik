/* Sumber kandungan — Matematik KSSM Tingkatan 3, Bab 6 Sudut dan Tangen bagi Bulatan.
   Fail ini disunting tangan. Jalankan `node bina.js m3b6` untuk menyemaknya
   dan menghasilkan bank-m3b6.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum, muka 56 (dskp/matematik-t3.pdf).

   Rajah interaktif ialah widget "bulatan" dalam widget-m3b6.js. Soalan berangka
   yang bergantung pada rajah dikira dengan kod dalam medan `kira` dan
   dibandingkan oleh tools/semak-jawapan.js. */
const rad = d => d * Math.PI / 180;
const sin = d => Math.sin(rad(d));
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const arctan = x => Math.atan(x) * 180 / Math.PI;

const SPI = [
"Mempamerkan pengetahuan asas tentang sudut dalam bulatan, sisi empat kitaran dan tangen kepada bulatan.",
"Mempamerkan kefahaman tentang sudut dalam bulatan, sisi empat kitaran dan tangen kepada bulatan.",
"Mengaplikasikan kefahaman tentang sudut dalam bulatan, sisi empat kitaran dan tangen kepada bulatan untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sudut dan tangen bagi bulatan dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sudut dan tangen bagi bulatan dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sudut dan tangen bagi bulatan dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: rajah bulatan interaktif ---------- */

const bul = (kapsyen, alt, c, extra) => Object.assign({ jenis:"interaktif", w:"bulatan", kapsyen, alt }, c, extra || {});
const R_BUL1 = bul("Rajah 1 · Gerakkan P di sepanjang lengkok besar. Perhatikan ∠APB dan ∠AQB.",
  "Rajah interaktif bulatan berpusat O dengan lengkok AB; gelongsor menggerakkan titik P pada lilitan dan menunjukkan sudut pusat dan sudut pada lilitan",
  { mod:"lilitan", lengkok:80, pos:[30,70,110,150,250,260], q:210, i:1 });
const R_BUL2 = bul("Rajah 1 · AB ialah diameter. Gerakkan P dan perhatikan ∠APB.",
  "Rajah interaktif bulatan dengan diameter AB; gelongsor menggerakkan titik P pada lilitan dan sudut APB dalam semibulatan sentiasa sama",
  { mod:"lilitan", lengkok:180, pos:[20,50,80,110,140,160], q:90, i:0 });
const R_BUL3 = bul("Rajah 1 · Gerakkan D. Perhatikan jumlah setiap pasang sudut bertentangan.",
  "Rajah interaktif sisi empat kitaran ABCD dalam bulatan; gelongsor menggerakkan titik D dan sudut bertentangan sentiasa berjumlah 180 darjah",
  { mod:"kitaran", a:200, b:300, c:360, pos:[380,410,440,470,495,520], i:1 });
const R_BUL4 = bul("Rajah 1 · Gerakkan T. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif bulatan dengan tangen di titik T; gelongsor menggerakkan T mengelilingi bulatan dan jejari OT sentiasa serenjang dengan tangen",
  { mod:"tangen1", jejari:6, tl:8, pos:[0,45,90,135,180,225,270,315], i:2, cabar:true });
const R_BUL5 = bul("Rajah 1 · Ubah jarak OP. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif dua tangen PA dan PB dari titik P ke bulatan; gelongsor mengubah jarak OP dan PA sentiasa sama dengan PB",
  { mod:"tangen2", jejari:5, jarak:[7,9,13,15,17], i:2, cabar:true });
const R_BUL6 = bul("Rajah 1 · Gerakkan Q. Bandingkan sudut tangen–perentas dengan ∠TQA.",
  "Rajah interaktif tangen di titik T dan perentas TA; gelongsor menggerakkan titik Q pada lengkok besar dan sudut dalam tembereng selang-seli sentiasa sama dengan sudut tangen dan perentas",
  { mod:"selang", lengkok:80, pos:[30,70,110,150,190,230], i:1 });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Roda Ferris", sk:"6.1.1 Bahagian bulatan, sudut pusat dan sudut pada lilitan", lampiran:"bul1",
 kadNama:"Roda Ferris", kadEm:"\u{1F3A1}", kadFakta:"Roda ferris pertama dibina oleh George Ferris untuk pameran di Chicago pada tahun 1893. Tingginya kira-kira 80 meter, dan setiap kereta kabin bergerak di sepanjang lilitan sebuah bulatan besar.",
 bosKadNama:"Lengkok dan Sudut", bosKadEm:"\u{1F4D0}", bosKadFakta:"Lengkok yang sama boleh dipandang dari pusat atau dari lilitan. Dari pusat, sudutnya besar. Dari lilitan, sudutnya tepat separuh daripada sudut pusat.",
 soalan:[
 {j:"pilih",t:"Garis lurus yang menyambung dua titik pada lilitan dan melalui pusat bulatan dipanggil:",p:["Diameter","Jejari","Lengkok","Tangen"],b:0,u:"Diameter ialah perentas terpanjang dan melalui pusat. Panjangnya dua kali jejari."},
 {j:"pilih",t:"Bahagian lilitan yang terletak di antara dua titik pada bulatan dipanggil:",p:["Lengkok","Perentas","Tembereng","Jejari"],b:0,u:"Lengkok ialah sebahagian daripada lilitan. Perentas pula ialah garis lurus antara dua titik pada lilitan."},
 {j:"pilih",t:"Sudut yang bucunya berada di pusat bulatan dipanggil:",p:["Sudut pusat","Sudut pada lilitan","Sudut tirus","Sudut peluaran"],b:0,u:"Sudut pusat mempunyai bucu di pusat bulatan dan dicangkum oleh suatu lengkok."},
 {j:"pilih",t:"Dalam Rajah 1, sudut pada lilitan yang dicangkum oleh lengkok AB dan bucunya di titik P ialah:",p:["∠APB","∠AOB","∠OAB","∠OBP"],b:0,u:"Bucu di P pada lilitan, jadi ∠APB. ∠AOB ialah sudut pusat kerana bucunya di O."},
 {j:"nombor",t:"Dalam Rajah 1, ∠AOB (sudut pusat) ialah 80°. Berapakah ∠APB (sudut pada lilitan) dalam darjah?",b:40,tol:0.1,suf:"°",u:"Sudut pada lilitan ialah separuh sudut pusat: 80° ÷ 2 = 40°.",kira:()=>80/2},
 {j:"nombor",t:"Sudut pusat yang dicangkum oleh sebuah lengkok ialah 130°. Berapakah sudut pada lilitan yang dicangkum oleh lengkok yang sama?",b:65,tol:0.1,suf:"°",u:"130° ÷ 2 = 65°.",kira:()=>130/2},
 {j:"nombor",t:"Sudut pada lilitan yang dicangkum oleh lengkok PQ ialah 35°. Berapakah sudut pusat yang dicangkum oleh lengkok PQ?",b:70,tol:0.1,suf:"°",u:"Sudut pusat ialah dua kali sudut pada lilitan: 35° × 2 = 70°.",kira:()=>35*2},
 {j:"susun",t:"Susun langkah mencari sudut pada lilitan apabila sudut pusat diketahui.",p:["Kenal pasti lengkok yang mencangkum kedua-dua sudut","Baca nilai sudut pusat yang dicangkum lengkok itu","Bahagikan nilai sudut pusat dengan 2","Tulis jawapan sebagai sudut pada lilitan"],b:[0,1,2,3],u:"Kenal lengkok dahulu, kemudian baca sudut pusat, bahagi dua, dan tulis jawapan."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang Rajah 1.",p:["Sudut pusat ialah dua kali sudut pada lilitan yang dicangkum lengkok yang sama","Menggerakkan P tidak mengubah nilai ∠APB","∠APB dan ∠AQB sama besar kerana dicangkum oleh lengkok AB","Sudut pada lilitan sentiasa lebih besar daripada sudut pusat","∠APB menjadi 90° apabila P menghampiri titik A","Perentas AB ialah diameter apabila ∠AOB = 80°"],b:[0,1,2],u:"Sudut pada lilitan yang dicangkum lengkok yang sama sentiasa sama, dan separuh sudut pusat. AB hanya diameter apabila ∠AOB = 180°."}},

{n:2, tempat:"Jam Dinding", sk:"6.1.1 / 6.1.2 Sudut dalam semibulatan dan sudut lengkok yang sama", lampiran:"bul2",
 kadNama:"Muka Jam", kadEm:"\u{1F570}\u{FE0F}", kadFakta:"Muka jam dibahagi kepada 12 bahagian yang sama. Setiap jam mewakili sudut pusat 30°, kerana 360° ÷ 12 = 30°.",
 bosKadNama:"Thales", bosKadEm:"\u{1F3DB}\u{FE0F}", bosKadFakta:"Ahli matematik Yunani, Thales, dikaitkan dengan teorem bahawa sudut dalam semibulatan ialah sudut tegak. Teorem ini sudah berumur lebih 2 500 tahun.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, AB ialah diameter. Berapakah ∠APB (sudut dalam semibulatan) dalam darjah?",b:90,tol:0.1,suf:"°",u:"Sudut pusat bagi diameter ialah 180°. Sudut pada lilitan ialah separuhnya: 90°.",kira:()=>180/2},
 {j:"pilih",t:"Sudut dalam semibulatan sentiasa bernilai:",p:["90°","60°","180°","45°"],b:0,u:"Diameter mencangkum sudut pusat 180°, jadi sudut pada lilitan ialah 90°.",kira:()=>180/2},
 {j:"pilih",t:"Dua sudut pada lilitan yang dicangkum oleh lengkok yang sama adalah:",p:["Sama besar","Berjumlah 180°","Separuh antara satu sama lain","Dua kali antara satu sama lain"],b:0,u:"Kedua-duanya separuh daripada sudut pusat yang sama, jadi nilainya sama."},
 {j:"nombor",t:"AC ialah diameter sebuah bulatan dan B terletak pada lilitan. Jika ∠BAC = 35°, berapakah ∠ACB dalam darjah?",b:55,tol:0.1,suf:"°",u:"∠ABC = 90° (sudut dalam semibulatan). ∠ACB = 180° − 90° − 35° = 55°.",kira:()=>180-90-35},
 {j:"nombor",t:"Pada muka jam berpusat O, setiap jam mewakili sudut pusat yang sama. Berapakah sudut pusat antara jam 12 dan jam 5 dalam darjah?",b:150,tol:0.1,suf:"°",u:"Setiap jam = 360° ÷ 12 = 30°. Dari jam 12 ke jam 5 ada 5 jam: 5 × 30° = 150°.",kira:()=>5*(360/12)},
 {j:"nombor",t:"Pada muka jam yang sama, P ialah titik pada lilitan di lengkok besar. Berapakah sudut pada lilitan yang dicangkum oleh lengkok jam 12 hingga jam 5 dalam darjah?",b:75,tol:0.1,suf:"°",u:"Sudut pusat lengkok itu ialah 150°. Sudut pada lilitan ialah 150° ÷ 2 = 75°.",kira:()=>5*(360/12)/2},
 {j:"pilih",t:"Dalam Rajah 1, apabila P digerakkan di sepanjang lengkok, ∠APB:",p:["Kekal 90°","Berubah antara 0° dan 180°","Menjadi 180° di tengah lengkok","Sentiasa sama dengan ∠AOB"],b:0,u:"P sentiasa berada pada semibulatan, jadi ∠APB tetap 90°. ∠AOB ialah 180°, bukan 90°."},
 {j:"pilih",t:"PR ialah diameter sebuah bulatan dan Q terletak pada lilitan. Segi tiga PQR ialah segi tiga:",p:["Bersudut tegak","Sama sisi","Bersudut cakah","Bersudut tirus semua"],b:0,u:"∠PQR ialah sudut dalam semibulatan, iaitu 90°. Maka segi tiga PQR bersudut tegak di Q."}],
 bos:{j:"nombor",t:"AB ialah diameter sebuah bulatan berpusat O dan C terletak pada lilitan. ∠CAB = 2x dan ∠ABC = x + 15. Berapakah nilai x?",b:25,tol:0.1,u:"∠ACB = 90° (dalam semibulatan). Jumlah sudut segi tiga: 90 + 2x + x + 15 = 180, jadi 3x = 75 dan x = 25.",kira:()=>(90-15)/3}},

{n:3, tempat:"Roda Basikal", sk:"6.2.1 / 6.2.2 Sisi empat kitaran dan sudut bertentangan", lampiran:"bul3",
 kadNama:"Sisi Empat Kitaran", kadEm:"\u{1F6B2}", kadFakta:"Perkataan kitaran bermaksud bergerak dalam bulatan. Sisi empat kitaran mempunyai keempat-empat bucu pada satu bulatan yang sama.",
 bosKadNama:"Empat Tepat dan Sama", bosKadEm:"\u{1F7E6}", bosKadFakta:"Segi empat tepat dan segi empat sama sentiasa sisi empat kitaran kerana setiap pasang sudut bertentangan ialah 90° + 90° = 180°.",
 soalan:[
 {j:"pilih",t:"Sisi empat kitaran ialah sisi empat yang:",p:["Semua bucunya terletak pada lilitan bulatan","Semua sisinya menyentuh bulatan dari dalam","Semua sisinya mempunyai panjang yang sama","Sekurang-kurangnya satu sudutnya ialah 90°"],b:0,u:"Ciri sisi empat kitaran ialah keempat-empat bucunya pada satu bulatan. Bulatan itu dipanggil bulatan lilit."},
 {j:"nombor",t:"ABCD ialah sisi empat kitaran. Jika ∠ABC = 80°, berapakah ∠ADC dalam darjah?",b:100,tol:0.1,suf:"°",u:"Sudut bertentangan sisi empat kitaran berjumlah 180°. ∠ADC = 180° − 80° = 100°.",kira:()=>180-80},
 {j:"nombor",t:"ABCD ialah sisi empat kitaran dan ∠BAD = 112°. Berapakah ∠BCD dalam darjah?",b:68,tol:0.1,suf:"°",u:"∠BCD bertentangan dengan ∠BAD. 180° − 112° = 68°.",kira:()=>180-112},
 {j:"nombor",t:"ABCD ialah sisi empat kitaran. ∠ABC = 3x dan ∠ADC = 2x + 30°. Berapakah nilai x?",b:30,tol:0.1,u:"Sudut bertentangan berjumlah 180°: 3x + 2x + 30 = 180. Maka 5x = 150 dan x = 30.",kira:()=>(180-30)/5},
 {j:"pilih",t:"Jumlah sepasang sudut bertentangan bagi sebuah sisi empat kitaran ialah:",p:["180°","90°","270°","360°"],b:0,u:"Sudut bertentangan sisi empat kitaran sentiasa berjumlah 180°.",kira:()=>180},
 {j:"pilih",t:"Dalam Rajah 1, A, B dan C tetap. Apabila D digerakkan di sepanjang lengkok, ∠ABC:",p:["Tidak berubah","Bertambah apabila D menghampiri C","Berkurang apabila D menghampiri A","Sentiasa sama dengan ∠ADC"],b:0,u:"∠ABC bergantung pada A, B dan C sahaja. Yang berubah ialah ∠ADC, dan ∠ABC + ∠ADC tetap 180°."},
 {j:"nombor",t:"ABCD ialah sisi empat kitaran. Sisi BC dipanjangkan ke titik E. Jika ∠DAB = 72°, berapakah sudut peluaran ∠DCE dalam darjah?",b:72,tol:0.1,suf:"°",u:"∠BCD = 180° − 72° = 108°. ∠DCE terletak pada garis lurus BCE: 180° − 108° = 72°. Sudut peluaran sama dengan sudut pedalaman bertentangan.",kira:()=>180-(180-72)},
 {j:"susun",t:"Susun langkah mencari ∠ADC bagi sisi empat kitaran ABCD apabila ∠ABC diketahui.",p:["Sahkan bahawa ABCD ialah sisi empat kitaran","Kenal pasti ∠ADC bertentangan dengan ∠ABC","Guna hubungan: sudut bertentangan berjumlah 180°","Tolak ∠ABC daripada 180°"],b:[0,1,2,3],u:"Sahkan bentuk, kenal sudut bertentangan, guna hubungan 180°, kemudian tolak."}],
 bos:{j:"banyak",t:"Pilih SEMUA sisi empat yang PASTI merupakan sisi empat kitaran.",p:["Segi empat tepat","Segi empat sama","Trapezium sama kaki","Segi empat selari yang bukan segi empat tepat","Rombus yang bukan segi empat sama","Layang-layang yang biasa"],b:[0,1,2],u:"Segi empat tepat, segi empat sama dan trapezium sama kaki mempunyai sudut bertentangan berjumlah 180°. Segi empat selari dan rombus biasa tidak."}},

{n:4, tempat:"Landasan Lengkung", sk:"6.3.1 / 6.3.2(i) Tangen dan jejari pada titik ketangenan", lampiran:"bul4",
 kadNama:"Titik Ketangenan", kadEm:"\u{1F6E4}\u{FE0F}", kadFakta:"Roda kereta api menyentuh landasan pada satu titik sahaja pada satu masa. Landasan lurus itu ialah tangen kepada roda, dan titik sentuhan dipanggil titik ketangenan.",
 bosKadNama:"Tangere", bosKadEm:"\u{1F91D}", bosKadFakta:"Perkataan tangen datang daripada bahasa Latin tangere, yang bermaksud menyentuh. Tangen menyentuh bulatan tepat pada satu titik.",
 soalan:[
 {j:"pilih",t:"Tangen kepada sebuah bulatan ialah garis lurus yang:",p:["Menyentuh bulatan pada satu titik sahaja","Memotong bulatan pada dua titik","Melalui pusat bulatan","Menyambung dua titik pada lilitan"],b:0,u:"Tangen hanya menyentuh bulatan pada satu titik, iaitu titik ketangenan."},
 {j:"pilih",t:"Sudut antara tangen dengan jejari pada titik ketangenan ialah:",p:["90°","45°","60°","180°"],b:0,u:"Jejari yang dilukis ke titik ketangenan sentiasa serenjang dengan tangen.",kira:()=>90},
 {j:"nombor",t:"Dalam Rajah 1, jejari OT = 6 cm dan tangen TP = 8 cm. Kira panjang OP dalam cm.",b:10,tol:0.05,suf:"cm",u:"∠OTP = 90°, jadi OP² = 6² + 8² = 100. OP = 10 cm.",kira:()=>Math.sqrt(6*6+8*8)},
 {j:"nombor",t:"Tangen PT menyentuh sebuah bulatan berpusat O di T. Jika OT = 8 cm dan OP = 17 cm, berapakah panjang PT dalam cm?",b:15,tol:0.05,suf:"cm",u:"PT² = OP² − OT² = 289 − 64 = 225. PT = 15 cm.",kira:()=>Math.sqrt(17*17-8*8)},
 {j:"nombor",t:"Tangen PT menyentuh sebuah bulatan berpusat O di T. Jika ∠TOP = 62°, berapakah ∠TPO dalam darjah?",b:28,tol:0.1,suf:"°",u:"∠OTP = 90°. ∠TPO = 180° − 90° − 62° = 28°.",kira:()=>180-90-62},
 {j:"nombor",t:"Dalam Rajah 1, OT = 6 cm dan TP = 8 cm. Kira ∠TOP kepada 1 tempat perpuluhan (darjah).",b:bunda(arctan(8/6),1),tol:0.1,suf:"°",u:"tan ∠TOP = TP ÷ OT = 8 ÷ 6. ∠TOP = tan⁻¹(1.333) = 53.1°.",kira:()=>bunda(arctan(8/6),1)},
 {j:"pilih",t:"Bulatan berpusat O mempunyai jejari OT = 5 cm dan OP = 13 cm. Garis PT ialah tangen di T jika:",p:["∠OTP = 90°","PT = OT","∠TOP = 90°","PT selari dengan OT"],b:0,u:"Garis ialah tangen hanya jika serenjang dengan jejari pada titik sentuhan, iaitu ∠OTP = 90°."},
 {j:"nombor",t:"Sebuah landasan lurus menyentuh sebuah taman berbentuk bulatan berpusat O dan berjejari 20 m, di T. Titik P pada landasan berjarak 21 m dari T. Berapakah OP dalam m?",b:29,tol:0.05,suf:"m",u:"Landasan ialah tangen, jadi ∠OTP = 90°. OP² = 20² + 21² = 841. OP = 29 m.",kira:()=>Math.sqrt(20*20+21*21)}],
 bos:{j:"nombor",t:"Tangen PT menyentuh bulatan berpusat O di T. Jika ∠OPT = 30° dan OT = 7 cm, berapakah panjang OP dalam cm?",b:14,tol:0.05,suf:"cm",u:"∠OTP = 90°. OT bertentangan dengan ∠OPT, jadi sin 30° = 7 ÷ OP. OP = 7 ÷ 0.5 = 14 cm.",kira:()=>bunda(7/sin(30),2)}},

{n:5, tempat:"Takal dan Tali", sk:"6.3.2(ii) / 6.3.3 Dua tangen dari satu titik dan tangen sepunya", lampiran:"bul5",
 kadNama:"Tali Sawat", kadEm:"\u{1F517}", kadFakta:"Tali sawat yang menghubungkan dua roda atau takal menyentuh kedua-dua roda secara lurus. Bahagian lurus itu ialah tangen sepunya bagi dua bulatan.",
 bosKadNama:"Tangen Sepunya", bosKadEm:"\u{2699}\u{FE0F}", bosKadFakta:"Bagi dua bulatan berjejari r1 dan r2 dengan jarak pusat d, panjang tangen sepunya luar ialah punca kuasa dua bagi d² − (r1 − r2)².",
 soalan:[
 {j:"pilih",t:"Dua tangen yang dilukis dari satu titik di luar bulatan ke bulatan itu mempunyai panjang:",p:["Sama","Berbeza mengikut kedudukan","Dua kali jejari","Separuh jejari"],b:0,u:"Kedua-dua tangen dari titik yang sama sentiasa sama panjang."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan OP = 13 cm dan jejari OA = 5 cm. Berapakah panjang PA dalam cm?",b:12,tol:0.05,suf:"cm",u:"∠OAP = 90°, jadi PA² = OP² − OA² = 169 − 25 = 144. PA = 12 cm.",kira:()=>Math.sqrt(13*13-5*5)},
 {j:"nombor",t:"Dua tangen PA dan PB dilukis dari titik P ke sebuah bulatan. PA = 3x + 2 dan PB = 5x − 8. Berapakah nilai x?",b:5,tol:0.05,u:"PA = PB, jadi 3x + 2 = 5x − 8. Maka 10 = 2x dan x = 5.",kira:()=>(2+8)/(5-3)},
 {j:"nombor",t:"Dua tangen PA dan PB dilukis dari titik P ke sebuah bulatan berpusat O. Jika ∠APB = 50°, berapakah ∠AOB dalam darjah?",b:130,tol:0.1,suf:"°",u:"∠OAP = ∠OBP = 90°. Jumlah sudut sisi empat OAPB ialah 360°: ∠AOB = 360° − 90° − 90° − 50° = 130°.",kira:()=>360-90-90-50},
 {j:"pilih",t:"Dalam Rajah 1, sisi empat OAPB ialah:",p:["Layang-layang","Segi empat selari","Trapezium","Rombus"],b:0,u:"OA = OB (jejari) dan PA = PB (dua tangen), jadi OAPB ialah layang-layang."},
 {j:"nombor",t:"Dua tangen PA dan PB dilukis dari titik P ke sebuah bulatan berpusat O. Jika ∠OPA = 25°, berapakah ∠APB dalam darjah?",b:50,tol:0.1,suf:"°",u:"PO membahagi dua ∠APB. ∠APB = 2 × 25° = 50°.",kira:()=>2*25},
 {j:"nombor",t:"Bulatan berpusat O berjejari 8 cm. Tangen PA menyentuh bulatan di A, dengan OP = 17 cm dan PA = 15 cm. Berapakah luas segi tiga OAP dalam cm²?",b:60,tol:0.1,suf:"cm²",u:"∠OAP = 90°. Luas = ½ × OA × PA = ½ × 8 × 15 = 60 cm².",kira:()=>0.5*8*15},
 {j:"susun",t:"Susun langkah mencari panjang tangen PA dari titik P ke bulatan berpusat O.",p:["Lukis jejari OA ke titik ketangenan A","Sedari bahawa ∠OAP = 90°","Guna Teorem Pythagoras: PA² = OP² − OA²","Ambil punca kuasa dua bagi PA²"],b:[0,1,2,3],u:"Bina segi tiga bersudut tegak OAP dahulu, kemudian guna Teorem Pythagoras."}],
 bos:{j:"nombor",t:"Dua bulatan berjejari 3 cm dan 8 cm mempunyai pusat berjarak 13 cm. Sebuah tali sawat menyentuh kedua-dua bulatan sebagai tangen sepunya luar. Berapakah panjang tangen sepunya itu dalam cm?",b:12,tol:0.05,suf:"cm",u:"Lukis garis dari pusat kecil selari dengan tangen. Segi tiga bersudut tegak terbentuk dengan hipotenus 13 dan sisi (8 − 3) = 5. Panjang tangen = √(13² − 5²) = 12 cm.",kira:()=>Math.sqrt(13*13-(8-3)*(8-3))}},

{n:6, tempat:"Reka Lencana", sk:"6.3.2(iii) / 6.3.3 / 6.4.1 Sudut tembereng selang-seli dan masalah bukan rutin", lampiran:"bul6",
 kadNama:"Selang-seli", kadEm:"\u{1F3C5}", kadFakta:"Tembereng selang-seli ialah tembereng di seberang perentas berbanding sudut tangen dan perentas. Sudut dalam tembereng itu sentiasa sama dengan sudut antara tangen dan perentas.",
 bosKadNama:"Reka Bentuk", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Pereka logo sering menggabungkan bulatan, tangen dan sisi empat kitaran. Setiap garisan mempunyai hubungan sudut yang boleh dikira.",
 soalan:[
 {j:"pilih",t:"Sudut antara tangen dengan perentas pada titik ketangenan sama dengan sudut:",p:["Dalam tembereng selang-seli","Pusat yang dicangkum perentas itu","Bertentangan pada sisi empat kitaran","Antara dua jejari yang bersebelahan"],b:0,u:"Ini ialah teorem tembereng selang-seli. Sudut itu sama dengan sudut dalam tembereng di seberang perentas."},
 {j:"nombor",t:"Dalam Rajah 1, ∠TOA (sudut pusat) ialah 80°. Berapakah sudut antara tangen dengan perentas TA dalam darjah?",b:40,tol:0.1,suf:"°",u:"Sudut dalam tembereng selang-seli ialah separuh sudut pusat, iaitu 40°. Sudut tangen–perentas juga 40°.",kira:()=>80/2},
 {j:"nombor",t:"Sudut antara sebuah tangen dengan sebuah perentas ialah 55°. Berapakah sudut dalam tembereng selang-seli dalam darjah?",b:55,tol:0.1,suf:"°",u:"Kedua-dua sudut itu sama besar mengikut teorem tembereng selang-seli.",kira:()=>55},
 {j:"nombor",t:"Tangen PQ menyentuh sebuah bulatan berpusat O di T. Jika sudut antara PQ dengan perentas TA ialah 68°, berapakah ∠TOA dalam darjah?",b:136,tol:0.1,suf:"°",u:"Sudut tembereng selang-seli ialah 68°. Sudut pusat dua kali ganda: 68° × 2 = 136°.",kira:()=>68*2},
 {j:"nombor",t:"Dua tangen PA dan PB dilukis dari titik P ke sebuah bulatan. Jika ∠APB = 40°, berapakah ∠PAB dalam darjah?",b:70,tol:0.1,suf:"°",u:"PA = PB, jadi segi tiga PAB sama kaki. ∠PAB = (180° − 40°) ÷ 2 = 70°.",kira:()=>(180-40)/2},
 {j:"pilih",t:"Dalam Rajah 1, apabila Q digerakkan di sepanjang lengkok besar, ∠TQA:",p:["Kekal sama dengan sudut tangen–perentas","Bertambah apabila Q menjauhi T","Berkurang menjadi 0° di titik A","Sentiasa bernilai 90°"],b:0,u:"Semua sudut pada lilitan yang dicangkum lengkok TA adalah sama, dan sama dengan sudut tangen–perentas."},
 {j:"nombor",t:"Garis lurus PQ ialah tangen kepada sebuah bulatan di T. Perentas TA dan TB dilukis dari T, kedua-duanya di sebelah bulatan. Sudut antara TA dengan TP ialah 50° dan sudut antara TB dengan TQ ialah 60°. Berapakah ∠ATB dalam darjah?",b:70,tol:0.1,suf:"°",u:"P, T dan Q terletak pada garis lurus, jadi tiga sudut di T berjumlah 180°: ∠ATB = 180° − 50° − 60° = 70°.",kira:()=>180-50-60},
 {j:"pilih",t:"Antara berikut, yang manakah TIDAK BENAR?",p:["Jejari dan tangen pada titik ketangenan adalah selari","Dua tangen dari satu titik luar sama panjang","Jejari serenjang dengan tangen pada titik ketangenan","Sudut tangen–perentas sama dengan sudut selang-seli"],b:0,u:"Jejari serenjang dengan tangen, bukan selari. Tiga pernyataan lain adalah benar."}],
 bos:{j:"buka",
  t:"Reka sebuah lencana sekolah berbentuk bulatan. Dalam bulatan itu, lukis sebuah sisi empat kitaran dan dua tangen dari satu titik di luar bulatan.",
  arahan:"Lukis lencana awak di kertas. Nyatakan sekurang-kurangnya tiga sudut yang boleh dikira, dan tunjukkan pengiraan setiap satu dengan menyatakan sifat bulatan yang awak guna.",
  u:"Jawapan TP6 yang kukuh melukis lencana dengan betul, mengira sekurang-kurangnya tiga sudut dengan sifat yang tepat (contoh: sudut bertentangan berjumlah 180°, jejari serenjang dengan tangen, dua tangen sama panjang) dan menerangkan alasan setiap langkah."}}
];

module.exports = {
  id:"m3b6", tingkatan:3, kod:"6.0 Sudut dan Tangen bagi Bulatan",
  tajuk:"Taman Bulatan",
  subtajuk:"Matematik Ting. 3 · Bab 6 Sudut dan Tangen bagi Bulatan",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal jejari, diameter, lengkok dan sudut pusat, serta tahu bahawa sudut pada lilitan ialah separuh sudut pusat. Langkah seterusnya ialah menggunakan hubungan ini untuk mencari sudut yang tidak diketahui.",
   2:"{n} memahami sudut pada lilitan, sudut dalam semibulatan dan sudut yang dicangkum lengkok yang sama. Perlu lebih latihan menggunakan hubungan ini dalam segi tiga sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan hubungan sisi empat kitaran, iaitu sudut bertentangan berjumlah 180°, untuk mencari sudut. Galakkan mengecam sisi empat kitaran dalam rajah yang lebih kompleks.",
   4:"{n} mampu menyelesaikan masalah rutin yang melibatkan tangen, termasuk menggunakan sudut 90° antara jejari dengan tangen dan Teorem Pythagoras. Seterusnya latih masalah dengan dua tangen.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan dua tangen dari satu titik dan tangen sepunya. Sudah bersedia untuk masalah bukan rutin yang menggabungkan beberapa sifat bulatan.",
   6:"{n} berjaya menggabungkan sudut dalam bulatan, sisi empat kitaran dan tangen dalam satu reka bentuk sendiri dengan pengiraan yang betul. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sudut dan Tangen bagi Bulatan. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menamakan lengkok, sudut pusat dan sudut pada lilitan dengan bimbingan rakan sebaya."
  },
  lampiran:{ bul1:R_BUL1, bul2:R_BUL2, bul3:R_BUL3, bul4:R_BUL4, bul5:R_BUL5, bul6:R_BUL6 },
  aras:ARAS
};
