/* Bank soalan — Matematik Ting. 2 · Bab 5 Bulatan.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m2b5.js
   kemudian jalankan: node bina.js m2b5

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m2b5"] =
{
 "id": "m2b5",
 "tingkatan": 2,
 "kod": "5.0 Bulatan",
 "tajuk": "Kilang Roda dan Pizza",
 "subtajuk": "Matematik Ting. 2 · Bab 5 Bulatan",
 "spi": [
  "Mempamerkan pengetahuan asas tentang bulatan.",
  "Mempamerkan kefahaman tentang bulatan.",
  "Mengaplikasikan kefahaman tentang bulatan untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bulatan dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bulatan dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bulatan dalam konteks penyelesaian masalah bukan rutin secara kreatif."
 ],
 "kko": [
  "Mengingat",
  "Memahami",
  "Mengaplikasi",
  "Menganalisis",
  "Menilai",
  "Mereka cipta"
 ],
 "ulasan": {
  "1": "{n} dapat mengenal jejari, diameter, perentas, lengkok, sektor dan tembereng, serta menyatakan hubungan diameter dengan jejari. Langkah seterusnya ialah memahami sifat simetri perentas.",
  "2": "{n} memahami bahawa jejari yang berserenjang dengan perentas membahagi dua sama perentas itu, dan bahawa perentas yang sama panjang sama jarak dari pusat. Perlu lebih latihan sebelum bergerak ke TP3.",
  "3": "{n} boleh menggunakan rumus lilitan dan luas bulatan untuk melaksanakan tugasan mudah, termasuk mencari diameter daripada lilitan. Galakkan menyatakan nilai π yang digunakan.",
  "4": "{n} mampu menyelesaikan masalah rutin yang mudah tentang panjang lengkok, luas dan perimeter sektor menggunakan pecahan sudut pusat. Seterusnya latih bentuk gabungan.",
  "5": "{n} dapat menyelesaikan masalah kompleks yang melibatkan bulatan dan bentuk gabungan seperti trek, roda dan kawasan berumput. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya mereka bentuk dan menyelesaikan masalah bukan rutin yang melibatkan cincin dan luas bulatan dengan ukuran yang munasabah dan langkah kerja yang jelas. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Bulatan. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut nama setiap bahagian bulatan dan mengukur jejari serta diameter benda bulat di rumah."
 },
 "lampiran": {
  "bul1": "<figure class=\"figure jmi\" data-w=\"t2bulat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2bulat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan gelongsor untuk memilih bahagian bulatan. Bahagian itu diserlahkan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif bulatan; gelongsor memilih jejari, diameter, perentas, lilitan, lengkok, sektor atau tembereng dan menyerlahkannya&quot;,&quot;mod&quot;:&quot;bahagian&quot;,&quot;i&quot;:0}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 216\" role=\"img\" aria-label=\"Rajah bulatan dengan bahagian jejari diserlahkan\"><circle cx=\"130\" cy=\"88\" r=\"64\" fill=\"var(--surface2)\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></circle><line x1=\"130\" y1=\"88\" x2=\"162\" y2=\"32.6\" stroke=\"var(--arteri)\" stroke-width=\"3.2\"></line><circle cx=\"130\" cy=\"88\" r=\"2.8\" fill=\"var(--ink)\" stroke=\"var(--ink)\" stroke-width=\"1\"></circle><text x=\"137\" y=\"104\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">O</text><text x=\"130\" y=\"182\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Jejari</text><text x=\"130\" y=\"202\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Garis dari pusat ke lilitan</text></svg></div><figcaption>Rajah 1 · Gerakkan gelongsor untuk memilih bahagian bulatan. Bahagian itu diserlahkan.</figcaption></figure>",
  "bul2": "<figure class=\"figure jmi\" data-w=\"t2bulat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2bulat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Jejari 5 cm. Gerakkan gelongsor d untuk menukar jarak perentas AB dari pusat O.&quot;,&quot;alt&quot;:&quot;Rajah interaktif bulatan berjejari 5 cm dengan perentas AB; gelongsor menukar jarak perentas dari pusat dan menunjukkan panjang AM dan AB&quot;,&quot;mod&quot;:&quot;simetri&quot;,&quot;r&quot;:5,&quot;dlist&quot;:[0,1,2,3,4],&quot;unit&quot;:&quot;cm&quot;,&quot;i&quot;:3}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 250\" role=\"img\" aria-label=\"Rajah bulatan berjejari 5 cm dengan perentas AB berjarak 3 cm dari pusat, separuh perentas 4 cm\"><circle cx=\"130\" cy=\"96\" r=\"70\" fill=\"var(--surface2)\" stroke=\"var(--ink3)\" stroke-width=\"1.8\"></circle><line x1=\"74\" y1=\"138\" x2=\"186\" y2=\"138\" stroke=\"var(--vena)\" stroke-width=\"2.2\" stroke-dasharray=\"5 3\"></line><line x1=\"130\" y1=\"96\" x2=\"130\" y2=\"138\" stroke=\"var(--vena)\" stroke-width=\"1.4\" stroke-dasharray=\"3 3\"></line><line x1=\"130\" y1=\"96\" x2=\"130\" y2=\"54\" stroke=\"var(--teal)\" stroke-width=\"2.4\"></line><rect x=\"130\" y=\"54\" width=\"7\" height=\"7\" rx=\"0\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1\"></rect><line x1=\"130\" y1=\"96\" x2=\"74\" y2=\"54\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"></line><line x1=\"74\" y1=\"54\" x2=\"186\" y2=\"54\" stroke=\"var(--arteri)\" stroke-width=\"2.8\"></line><circle cx=\"74\" cy=\"54\" r=\"2.8\" fill=\"var(--arteri)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></circle><circle cx=\"186\" cy=\"54\" r=\"2.8\" fill=\"var(--arteri)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></circle><circle cx=\"130\" cy=\"96\" r=\"2.8\" fill=\"var(--ink)\" stroke=\"var(--ink)\" stroke-width=\"1\"></circle><text x=\"60\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A</text><text x=\"192\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">B</text><text x=\"135\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">M</text><text x=\"138\" y=\"100\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">O</text><text x=\"116\" y=\"79\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">d</text><text x=\"130\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">j = 5 cm    d = 3 cm</text><text class=\"jmi-hasil\" x=\"130\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">AM = √(25 − 9) = 4 cm</text><text class=\"jmi-hasil\" x=\"130\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">AB = 2 × AM = 8 cm</text><text class=\"jmi-hasil\" x=\"130\" y=\"238\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Perentas ungu sama jarak, sama panjang</text></svg></div><figcaption>Rajah 1 · Jejari 5 cm. Gerakkan gelongsor d untuk menukar jarak perentas AB dari pusat O.</figcaption></figure>",
  "bul3": "<figure class=\"figure jmi\" data-w=\"t2bulat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2bulat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan gelongsor jejari. Lihat berapa kali diameter dan petak jejari memenuhi lilitan dan luas.&quot;,&quot;alt&quot;:&quot;Rajah interaktif bulatan; gelongsor jejari menukar lilitan dan luas, dengan perbandingan tiga diameter dan tiga petak jejari&quot;,&quot;mod&quot;:&quot;lilluas&quot;,&quot;nilai&quot;:[3.5,7,10.5,14,21],&quot;i&quot;:1}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 250\" role=\"img\" aria-label=\"Rajah bulatan berjejari 7 cm, lilitan dibandingkan dengan tiga diameter dan luas dibandingkan dengan tiga petak jejari kali jejari\"><circle cx=\"130\" cy=\"40\" r=\"30\" fill=\"var(--surface2)\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></circle><line x1=\"100\" y1=\"40\" x2=\"160\" y2=\"40\" stroke=\"var(--vena)\" stroke-width=\"2.6\"></line><text x=\"130\" y=\"35\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">d</text><rect x=\"35.7\" y=\"86\" width=\"60\" height=\"14\" rx=\"0\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text x=\"65.7\" y=\"97\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">d</text><rect x=\"95.7\" y=\"86\" width=\"60\" height=\"14\" rx=\"0\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text x=\"125.7\" y=\"97\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">d</text><rect x=\"155.7\" y=\"86\" width=\"60\" height=\"14\" rx=\"0\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text x=\"185.7\" y=\"97\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">d</text><rect x=\"215.7\" y=\"86\" width=\"8.6\" height=\"14\" rx=\"0\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.4\"></rect><text x=\"130\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">3 diameter + sedikit = π × diameter</text><rect x=\"82.9\" y=\"134\" width=\"30\" height=\"30\" rx=\"0\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.4\"></rect><text x=\"97.9\" y=\"153\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">j×j</text><rect x=\"112.9\" y=\"134\" width=\"30\" height=\"30\" rx=\"0\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.4\"></rect><text x=\"127.9\" y=\"153\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">j×j</text><rect x=\"142.9\" y=\"134\" width=\"30\" height=\"30\" rx=\"0\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.4\"></rect><text x=\"157.9\" y=\"153\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">j×j</text><rect x=\"172.9\" y=\"134\" width=\"4.3\" height=\"30\" rx=\"0\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.4\"></rect><text x=\"130\" y=\"182\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">3 petak + sedikit = π × j × j</text><text x=\"130\" y=\"202\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">j = 7 cm    d = 14 cm</text><text class=\"jmi-hasil\" x=\"130\" y=\"220\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">Lilitan = πd = 44 cm</text><text class=\"jmi-hasil\" x=\"58.6\" y=\"238\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Luas = πj</text><text class=\"jmi-hasil\" x=\"123.4\" y=\"232\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">2</text><text class=\"jmi-hasil\" x=\"130\" y=\"238\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\"> = 154 cm</text><text class=\"jmi-hasil\" x=\"194.8\" y=\"232\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">2</text></svg></div><figcaption>Rajah 1 · Gerakkan gelongsor jejari. Lihat berapa kali diameter dan petak jejari memenuhi lilitan dan luas.</figcaption></figure>",
  "bul4": "<figure class=\"figure jmi cabar\" data-w=\"t2bulat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2bulat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Tetapkan sudut dan jejari sektor. Kira dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif sektor bulatan; gelongsor sudut dan jejari menukar panjang lengkok, luas dan perimeter sektor&quot;,&quot;mod&quot;:&quot;sektor&quot;,&quot;rlist&quot;:[7,14,21],&quot;r&quot;:7,&quot;i&quot;:4,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 252\" role=\"img\" aria-label=\"Rajah sektor bulatan berjejari 7 cm dengan sudut 90 darjah, panjang lengkok 11 cm dan luas sektor 38.5\"><circle cx=\"130\" cy=\"92\" r=\"58\" fill=\"var(--surface2)\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></circle><path d=\"M130 92L188 92A58 58 0 0 0 130 34Z\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"></path><path d=\"M188 92A58 58 0 0 0 130 34\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"3.6\" stroke-linejoin=\"round\"></path><path d=\"M146 92A16 16 0 0 0 130 76\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.4\" stroke-linejoin=\"round\"></path><text x=\"182.3\" y=\"43.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">90°</text><circle cx=\"130\" cy=\"92\" r=\"2.6\" fill=\"var(--ink)\" stroke=\"var(--ink)\" stroke-width=\"1\"></circle><text x=\"130\" y=\"176\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">j = 7 cm    θ = 90°</text><text class=\"jmi-hasil\" x=\"130\" y=\"192\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">Pecahan = 90/360 = 1/4</text><text class=\"jmi-hasil\" x=\"130\" y=\"208\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">Lengkok = 1/4 × 2πj = 11 cm</text><text class=\"jmi-hasil\" x=\"33.4\" y=\"224\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Luas = 1/4 × πj</text><text class=\"jmi-hasil\" x=\"141.4\" y=\"218\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">2</text><text class=\"jmi-hasil\" x=\"148\" y=\"224\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\"> = 38.5 cm</text><text class=\"jmi-hasil\" x=\"220\" y=\"218\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">2</text><text class=\"jmi-hasil\" x=\"130\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Perimeter = 11 + 14 = 25 cm</text></svg></div><figcaption>Rajah 1 · Tetapkan sudut dan jejari sektor. Kira dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "bul5": "<figure class=\"figure jmi cabar\" data-w=\"t2bulat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2bulat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Trek dibina daripada dua separuh bulatan dan bahagian lurus L. Kira dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif trek dengan dua separuh bulatan berjejari 7 meter dan bahagian lurus L; gelongsor L menukar perimeter dan luas&quot;,&quot;mod&quot;:&quot;trek&quot;,&quot;r&quot;:7,&quot;L&quot;:[0,7,14,21,28],&quot;unit&quot;:&quot;m&quot;,&quot;i&quot;:2,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 190\" role=\"img\" aria-label=\"Rajah trek berbentuk dua separuh bulatan berjejari 7 m dengan bahagian lurus 14 m, perimeter 72 m\"><path d=\"M96.7 30L163.3 30A33.3 33.3 0 0 1 163.3 96.7L96.7 96.7A33.3 33.3 0 0 1 96.7 30Z\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"></path><line x1=\"96.7\" y1=\"22\" x2=\"163.3\" y2=\"22\" stroke=\"var(--arteri)\" stroke-width=\"2\"></line><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">L</text><line x1=\"163.3\" y1=\"63.3\" x2=\"196.7\" y2=\"63.3\" stroke=\"var(--vena)\" stroke-width=\"2.4\"></line><circle cx=\"163.3\" cy=\"63.3\" r=\"2.6\" fill=\"var(--ink)\" stroke=\"var(--ink)\" stroke-width=\"1\"></circle><text x=\"180\" y=\"58.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">j</text><text x=\"130\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">j = 7 m    L = 14 m</text><text class=\"jmi-hasil\" x=\"130\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">Perimeter = 2πj + 2L = 72 m</text><text class=\"jmi-hasil\" x=\"40.6\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Luas = πj</text><text class=\"jmi-hasil\" x=\"105.4\" y=\"152\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">2</text><text class=\"jmi-hasil\" x=\"112\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\"> + 2jL = 350 m</text><text class=\"jmi-hasil\" x=\"212.8\" y=\"152\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">2</text><text x=\"130\" y=\"176\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">dua separuh bulatan + segi empat tepat</text></svg></div><figcaption>Rajah 1 · Trek dibina daripada dua separuh bulatan dan bahagian lurus L. Kira dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "bul6": "<figure class=\"figure jmi\" data-w=\"t2bulat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2bulat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan gelongsor R dan r. Luas cincin ialah luas bulatan besar tolak bulatan kecil.&quot;,&quot;alt&quot;:&quot;Rajah interaktif cincin di antara dua bulatan sepusat; gelongsor jejari luar dan dalam menukar luas cincin&quot;,&quot;mod&quot;:&quot;cincin&quot;,&quot;R&quot;:[10.5,14,21],&quot;rk&quot;:[3.5,7],&quot;b&quot;:1,&quot;k&quot;:1}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 226\" role=\"img\" aria-label=\"Rajah cincin antara bulatan berjejari 14 cm dan 7 cm, luas cincin 462 cm persegi\"><path d=\"M83.3 88A46.7 46.7 0 1 0 176.7 88A46.7 46.7 0 1 0 83.3 88ZM106.7 88A23.3 23.3 0 1 0 153.3 88A23.3 23.3 0 1 0 106.7 88Z\" fill=\"var(--amber-soft)\" fill-rule=\"evenodd\" stroke=\"none\"></path><circle cx=\"130\" cy=\"88\" r=\"46.7\" fill=\"none\" stroke=\"var(--amber)\" stroke-width=\"2.4\"></circle><circle cx=\"130\" cy=\"88\" r=\"23.3\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.2\"></circle><line x1=\"130\" y1=\"88\" x2=\"168.2\" y2=\"61.2\" stroke=\"var(--arteri)\" stroke-width=\"2.4\"></line><line x1=\"130\" y1=\"88\" x2=\"147.9\" y2=\"103\" stroke=\"var(--vena)\" stroke-width=\"2.4\"></line><circle cx=\"130\" cy=\"88\" r=\"2.6\" fill=\"var(--ink)\" stroke=\"var(--ink)\" stroke-width=\"1\"></circle><text x=\"52\" y=\"176\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">R = 14 cm</text><text x=\"148\" y=\"176\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">r = 7 cm</text><text class=\"jmi-hasil\" x=\"69.4\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Luas = π(R</text><text class=\"jmi-hasil\" x=\"141.4\" y=\"188\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">2</text><text class=\"jmi-hasil\" x=\"148\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\"> − r</text><text class=\"jmi-hasil\" x=\"176.8\" y=\"188\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">2</text><text class=\"jmi-hasil\" x=\"183.4\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">)</text><text class=\"jmi-hasil\" x=\"36.7\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">= π × (196 − 49) = 462 cm</text><text class=\"jmi-hasil\" x=\"216.7\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" font-weight=\"700\">2</text></svg></div><figcaption>Rajah 1 · Gerakkan gelongsor R dan r. Luas cincin ialah luas bulatan besar tolak bulatan kecil.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Padang Roda",
   "sk": "5.1.1 / 5.1.2 Bahagian bulatan dan pembinaan",
   "lampiran": "bul1",
   "kadNama": "Jejari dan Diameter",
   "kadEm": "🎡",
   "kadFakta": "Diameter sentiasa dua kali panjang jejari. Sebab itu roda basikal berdiameter 70 cm mempunyai jejari 35 cm.",
   "bosKadNama": "Perentas Terpanjang",
   "bosKadEm": "📏",
   "bosKadFakta": "Diameter ialah perentas yang paling panjang dalam sesebuah bulatan kerana ia melalui pusat.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Jejari. Garis yang diserlahkan menyambung pusat O dengan:",
     "p": [
      "Satu titik pada lilitan",
      "Dua titik pada lilitan",
      "Pusat bulatan yang lain",
      "Satu titik di luar bulatan"
     ],
     "b": 0,
     "u": "Jejari ialah garis dari pusat ke satu titik pada lilitan."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Diameter. Apakah yang istimewa tentang garis ini?",
     "p": [
      "Ia tidak menyentuh lilitan",
      "Ia melalui pusat bulatan",
      "Ia lebih pendek daripada jejari",
      "Ia melengkung mengikut lilitan"
     ],
     "b": 1,
     "u": "Diameter ialah perentas yang melalui pusat, dengan kedua-dua hujung pada lilitan."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Perentas. Perentas sentiasa menyambung:",
     "p": [
      "Pusat dengan lilitan",
      "Dua jejari yang bersebelahan",
      "Dua titik pada lilitan",
      "Dua titik di luar bulatan"
     ],
     "b": 2,
     "u": "Perentas ialah garis lurus yang menyambung dua titik pada lilitan. Ia tidak semestinya melalui pusat."
    },
    {
     "j": "nombor",
     "t": "Jejari sebuah bulatan ialah 6 cm. Berapakah diameternya (cm)?",
     "b": 12,
     "tol": 0.01,
     "suf": "cm",
     "u": "Diameter = 2 × jejari = 2 × 6 = 12 cm."
    },
    {
     "j": "nombor",
     "t": "Diameter sebuah roda ialah 70 cm. Berapakah jejarinya (cm)?",
     "b": 35,
     "tol": 0.01,
     "suf": "cm",
     "u": "Jejari = diameter ÷ 2 = 70 ÷ 2 = 35 cm."
    },
    {
     "j": "pilih",
     "t": "Tembereng ialah kawasan bulatan yang terletak di antara:",
     "p": [
      "Dua jejari dengan lengkok",
      "Diameter dengan pusat",
      "Lilitan dengan pusat",
      "Perentas dengan lengkok"
     ],
     "b": 3,
     "u": "Tembereng dibatasi oleh satu perentas dan satu lengkok. Kawasan antara dua jejari dan lengkok ialah sektor."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Sektor. Sektor dibatasi oleh:",
     "p": [
      "Dua jejari dan satu lengkok",
      "Satu perentas dan satu lengkok",
      "Satu diameter sahaja",
      "Dua perentas dan satu jejari"
     ],
     "b": 0,
     "u": "Sektor ialah kawasan antara dua jejari dan lengkok di antara hujung kedua-dua jejari itu."
    },
    {
     "j": "susun",
     "t": "Susun langkah membina bulatan berjejari 3 cm dengan jangka lukis.",
     "p": [
      "Buka jangka lukis sehingga jarak antara hujung tajam dengan mata pensel ialah 3 cm",
      "Letakkan hujung tajam pada titik yang dipilih sebagai pusat",
      "Putar jangka lukis satu pusingan penuh",
      "Tanda pusat dengan huruf O dan tulis jejari 3 cm"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Laraskan jejari dahulu, letakkan pusat, lukis bulatan, kemudian label."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang bulatan.",
    "p": [
     "Diameter ialah perentas yang paling panjang",
     "Semua jejari dalam satu bulatan sama panjang",
     "Diameter sentiasa dua kali jejari",
     "Setiap perentas melalui pusat bulatan",
     "Lengkok ialah garis lurus antara dua titik pada lilitan",
     "Sektor dibatasi oleh dua perentas"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Perentas tidak semestinya melalui pusat; hanya diameter yang melaluinya. Lengkok melengkung mengikut lilitan, bukan garis lurus, dan sektor dibatasi oleh dua jejari."
   }
  },
  {
   "n": 2,
   "tempat": "Cermin Simetri",
   "sk": "5.2.1 / 5.2.2 Sifat simetri perentas",
   "lampiran": "bul2",
   "kadNama": "Paksi Simetri",
   "kadEm": "📐",
   "kadFakta": "Bulatan mempunyai paksi simetri tanpa had. Setiap diameter ialah satu paksi simetri, jadi awak boleh lipat bulatan melalui mana-mana diameter dan kedua-dua separuh bertindih tepat.",
   "bosKadNama": "Cari Pusat",
   "bosKadEm": "🔍",
   "bosKadFakta": "Untuk mencari pusat bulatan yang hilang, lukis dua perentas dan pembahagi dua sama serenjang setiap satu. Kedua-dua garis bertemu di pusat.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, jejari berserenjang dengan perentas AB dan memotongnya di M. Apakah hubungan AM dengan MB?",
     "p": [
      "AM dua kali MB",
      "AM sama dengan MB",
      "AM separuh daripada MB",
      "AM tiada kaitan dengan MB"
     ],
     "b": 1,
     "u": "Jejari yang berserenjang dengan perentas membahagi dua sama perentas itu, jadi AM = MB."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan d = 3 cm. Berapakah panjang AM (cm)?",
     "b": 4,
     "tol": 0.01,
     "suf": "cm",
     "u": "Dalam segi tiga OAM bersudut tegak, AM = √(5² − 3²) = √16 = 4 cm."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan d = 3 cm. Berapakah panjang perentas AB (cm)?",
     "b": 8,
     "tol": 0.01,
     "suf": "cm",
     "u": "AB = 2 × AM = 2 × 4 = 8 cm."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan d = 4 cm. Berapakah panjang perentas AB (cm)?",
     "b": 6,
     "tol": 0.01,
     "suf": "cm",
     "u": "AM = √(5² − 4²) = 3 cm, jadi AB = 2 × 3 = 6 cm."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, apabila d = 0 cm, perentas AB menjadi:",
     "p": [
      "Jejari bulatan",
      "Tangen bulatan",
      "Diameter bulatan",
      "Satu titik pada lilitan"
     ],
     "b": 2,
     "u": "Apabila perentas berada di pusat, ia melalui pusat dan menjadi diameter, iaitu 2 × 5 = 10 cm."
    },
    {
     "j": "pilih",
     "t": "Dua perentas yang sama panjang dalam satu bulatan mempunyai:",
     "p": [
      "Jarak berbeza dari pusat",
      "Jarak sifar dari pusat",
      "Lengkok yang berbeza panjang",
      "Jarak yang sama dari pusat"
     ],
     "b": 3,
     "u": "Perentas yang sama panjang sama jarak dari pusat dan menghasilkan lengkok yang sama panjang."
    },
    {
     "j": "pilih",
     "t": "Pembahagi dua sama serenjang bagi dua perentas yang berlainan akan bertemu di:",
     "p": [
      "Pusat bulatan",
      "Lilitan bulatan",
      "Tengah salah satu perentas",
      "Luar bulatan"
     ],
     "b": 0,
     "u": "Pembahagi dua sama serenjang setiap perentas melalui pusat, jadi dua daripadanya bertemu di pusat."
    },
    {
     "j": "nombor",
     "t": "Sebuah perentas 16 cm berjarak 6 cm dari pusat bulatan. Berapakah jejari bulatan itu (cm)?",
     "b": 10,
     "tol": 0.01,
     "suf": "cm",
     "u": "Separuh perentas = 8 cm. Jejari = √(8² + 6²) = √100 = 10 cm."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Mengapakah setiap diameter ialah paksi simetri bagi bulatan?",
    "p": [
     "Diameter ialah garis yang paling panjang dalam bulatan",
     "Bulatan dilipat mengikut diameter, kedua-dua separuh bertindih tepat",
     "Diameter membahagi lilitan kepada tiga bahagian sama",
     "Diameter sentiasa berserenjang dengan semua perentas"
    ],
    "b": 1,
    "u": "Paksi simetri ialah garis yang membahagi bentuk kepada dua bahagian yang bertindih tepat apabila dilipat. Setiap diameter berbuat begitu pada bulatan."
   }
  },
  {
   "n": 3,
   "tempat": "Kilang Pizza",
   "sk": "5.3.1 / 5.3.2 / 5.3.3 Lilitan dan luas bulatan",
   "lampiran": "bul3",
   "kadNama": "Nombor Pi",
   "kadEm": "🍕",
   "kadFakta": "π ialah nisbah lilitan kepada diameter, kira-kira 3.14 atau 22/7. Nilainya sama untuk semua bulatan, sama ada sebesar duit syiling atau sebesar bumi.",
   "bosKadNama": "Pizza Besar",
   "bosKadEm": "🥧",
   "bosKadFakta": "Luas bulatan bergantung pada jejari kuasa dua, jadi pizza yang diameternya dua kali ganda memberi luas empat kali ganda.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan jejari 7 cm. Berapakah lilitan bulatan (cm)? Guna π = 22/7.",
     "b": 44,
     "tol": 0.01,
     "suf": "cm",
     "u": "Lilitan = 2πj = 2 × 22/7 × 7 = 44 cm."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan jejari 7 cm. Berapakah luas bulatan (cm²)? Guna π = 22/7.",
     "b": 154,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = πj² = 22/7 × 7 × 7 = 154 cm²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan jejari 14 cm. Berapakah lilitan bulatan (cm)? Guna π = 22/7.",
     "b": 88,
     "tol": 0.01,
     "suf": "cm",
     "u": "Lilitan = 2 × 22/7 × 14 = 88 cm."
    },
    {
     "j": "pilih",
     "t": "Rumus lilitan bulatan berdiameter d ialah:",
     "p": [
      "πd²",
      "π ÷ d",
      "πd",
      "d ÷ π"
     ],
     "b": 2,
     "u": "Lilitan = π × diameter = πd. Ia juga sama dengan 2πj."
    },
    {
     "j": "pilih",
     "t": "Rumus luas bulatan berjejari j ialah:",
     "p": [
      "2πj",
      "πj",
      "½πj",
      "πj²"
     ],
     "b": 3,
     "u": "Luas bulatan = π × jejari × jejari = πj²."
    },
    {
     "j": "nombor",
     "t": "Lilitan sebuah roda basikal ialah 176 cm. Berapakah diameternya (cm)? Guna π = 22/7.",
     "b": 56,
     "tol": 0.01,
     "suf": "cm",
     "u": "Diameter = lilitan ÷ π = 176 ÷ 22/7 = 56 cm."
    },
    {
     "j": "nombor",
     "t": "Berapakah luas bulatan berdiameter 28 cm (cm²)? Guna π = 22/7.",
     "b": 616,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Jejari = 14 cm. Luas = 22/7 × 14 × 14 = 616 cm²."
    },
    {
     "j": "pilih",
     "t": "Apabila jejari sebuah bulatan digandakan, luasnya menjadi:",
     "p": [
      "Empat kali ganda",
      "Dua kali ganda",
      "Tiga kali ganda",
      "Enam kali ganda"
     ],
     "b": 0,
     "u": "Luas = πj². Jika j menjadi 2j, luas = π(2j)² = 4πj², iaitu empat kali ganda."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah pizza bulat berdiameter 28 cm. Berapakah jumlah luas dua pizza yang sama saiz (cm²)? Guna π = 22/7.",
    "b": 1232,
    "tol": 0.01,
    "suf": "cm²",
    "u": "Luas satu pizza = 22/7 × 14 × 14 = 616 cm². Dua pizza = 2 × 616 = 1 232 cm²."
   }
  },
  {
   "n": 4,
   "tempat": "Jam Sektor",
   "sk": "5.3.3 Panjang lengkok dan luas sektor",
   "lampiran": "bul4",
   "kadNama": "Jam Dinding",
   "kadEm": "🕰️",
   "kadFakta": "Jam dinding ialah bulatan. Apabila jarum minit bergerak dari nombor 12 ke nombor 3, ia melalui sektor 90°, iaitu suku daripada bulatan.",
   "bosKadNama": "Pecahan Bulatan",
   "bosKadEm": "🍰",
   "bosKadFakta": "Sektor bersudut θ ialah θ/360 daripada bulatan penuh. Panjang lengkok dan luasnya mengikut pecahan yang sama.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan jejari 7 cm dan sudut 90°. Berapakah panjang lengkok (cm)? Guna π = 22/7.",
     "b": 11,
     "tol": 0.01,
     "suf": "cm",
     "u": "Lengkok = 90/360 × 2 × 22/7 × 7 = 1/4 × 44 = 11 cm."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan jejari 7 cm dan sudut 90°. Berapakah luas sektor (cm²)? Guna π = 22/7.",
     "b": 38.5,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 90/360 × 22/7 × 7 × 7 = 1/4 × 154 = 38.5 cm²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan jejari 14 cm dan sudut 60°. Berapakah panjang lengkok (cm) kepada 2 tempat perpuluhan? Guna π = 22/7.",
     "b": 14.67,
     "tol": 0.01,
     "suf": "cm",
     "u": "Lengkok = 60/360 × 2 × 22/7 × 14 = 1/6 × 88 = 14.67 cm."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan jejari 21 cm dan sudut 120°. Berapakah panjang lengkok (cm)? Guna π = 22/7.",
     "b": 44,
     "tol": 0.01,
     "suf": "cm",
     "u": "Lengkok = 120/360 × 2 × 22/7 × 21 = 1/3 × 132 = 44 cm."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan jejari 21 cm dan sudut 120°. Berapakah luas sektor (cm²)? Guna π = 22/7.",
     "b": 462,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 1/3 × 22/7 × 21 × 21 = 1/3 × 1 386 = 462 cm²."
    },
    {
     "j": "nombor",
     "t": "Sebuah sektor berjejari 7 cm mempunyai sudut pusat 240°. Berapakah perimeter sektor itu (cm) kepada 2 tempat perpuluhan? Guna π = 22/7.",
     "b": 43.33,
     "tol": 0.01,
     "suf": "cm",
     "u": "Lengkok = 2/3 × 44 = 29.33 cm. Perimeter = lengkok + dua jejari = 29.33 + 14 = 43.33 cm."
    },
    {
     "j": "pilih",
     "t": "Sudut pusat sebuah sektor ialah 90°. Sektor itu ialah ... daripada bulatan penuh.",
     "p": [
      "Separuh",
      "Suku",
      "Sepertiga",
      "Tiga suku"
     ],
     "b": 1,
     "u": "90/360 = 1/4, jadi sektor itu ialah suku bulatan."
    },
    {
     "j": "nombor",
     "t": "Panjang lengkok sebuah sektor ialah 22 cm dan jejarinya 21 cm. Berapakah sudut pusat sektor itu (°)? Guna π = 22/7.",
     "b": 60,
     "tol": 0.5,
     "suf": "°",
     "u": "Lilitan penuh = 2 × 22/7 × 21 = 132 cm. Sudut = 22/132 × 360 = 60°."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah jam dinding bulat berjejari 14 cm. Jarum minit bergerak dari nombor 12 ke nombor 4. Berapakah luas sektor yang dilalui jarum itu (cm²) kepada 2 tempat perpuluhan? Guna π = 22/7.",
    "b": 205.33,
    "tol": 0.01,
    "suf": "cm²",
    "u": "Dari 12 ke 4 ialah 4 daripada 12 bahagian, iaitu 120°. Luas = 1/3 × 22/7 × 14 × 14 = 1/3 × 616 = 205.33 cm²."
   }
  },
  {
   "n": 5,
   "tempat": "Trek Larian",
   "sk": "5.3.3 / 5.3.4 Perimeter dan luas bentuk gabungan",
   "lampiran": "bul5",
   "kadNama": "Trek Olahraga",
   "kadEm": "🏃",
   "kadFakta": "Trek olahraga biasa mempunyai dua bahagian lurus dan dua lengkok separuh bulatan di hujungnya, supaya pelari boleh berlari satu pusingan tanpa berhenti.",
   "bosKadNama": "Satu Pusingan",
   "bosKadEm": "🏁",
   "bosKadFakta": "Jarak satu pusingan trek ialah lilitan satu bulatan penuh ditambah dua kali panjang bahagian lurus.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan L = 14 m. Berapakah perimeter trek (m)? Guna π = 22/7.",
     "b": 72,
     "tol": 0.01,
     "suf": "m",
     "u": "Perimeter = 2πj + 2L = 44 + 28 = 72 m."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan L = 14 m. Berapakah luas trek (m²)? Guna π = 22/7.",
     "b": 350,
     "tol": 0.01,
     "suf": "m²",
     "u": "Luas = πj² + 2jL = 154 + 2 × 7 × 14 = 154 + 196 = 350 m²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan L = 28 m. Berapakah perimeter trek (m)? Guna π = 22/7.",
     "b": 100,
     "tol": 0.01,
     "suf": "m",
     "u": "Perimeter = 44 + 2 × 28 = 100 m."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan L = 21 m. Berapakah luas trek (m²)? Guna π = 22/7.",
     "b": 448,
     "tol": 0.01,
     "suf": "m²",
     "u": "Luas = 154 + 2 × 7 × 21 = 154 + 294 = 448 m²."
    },
    {
     "j": "nombor",
     "t": "Sebuah trek mempunyai dua separuh bulatan berjejari 35 m dan dua bahagian lurus, setiap satu 100 m. Berapakah jarak satu pusingan (m)? Guna π = 22/7.",
     "b": 420,
     "tol": 0.01,
     "suf": "m",
     "u": "Dua separuh bulatan = 2 × 22/7 × 35 = 220 m. Dua bahagian lurus = 200 m. Jumlah = 420 m."
    },
    {
     "j": "nombor",
     "t": "Sebuah taman segi empat tepat berukuran 20 m × 14 m mempunyai kolam bulat berjejari 7 m. Berapakah luas kawasan berumput (m²)? Guna π = 22/7.",
     "b": 126,
     "tol": 0.01,
     "suf": "m²",
     "u": "Luas taman = 20 × 14 = 280 m². Luas kolam = 154 m². Berumput = 280 − 154 = 126 m²."
    },
    {
     "j": "nombor",
     "t": "Roda sebuah lori berjejari 35 cm. Berapakah jarak (cm) yang dilalui lori selepas roda berputar 10 kali? Guna π = 22/7.",
     "b": 2200,
     "tol": 0.01,
     "suf": "cm",
     "u": "Lilitan roda = 2 × 22/7 × 35 = 220 cm. Sepuluh putaran = 2 200 cm."
    },
    {
     "j": "pilih",
     "t": "Jarak satu pusingan trek dengan dua separuh bulatan dan dua bahagian lurus dikira dengan:",
     "p": [
      "Luas bulatan penuh + dua bahagian lurus",
      "Diameter + satu bahagian lurus",
      "Lilitan bulatan penuh + dua bahagian lurus",
      "Lilitan satu separuh bulatan sahaja"
     ],
     "b": 2,
     "u": "Dua separuh bulatan bersama menjadi satu bulatan penuh, jadi jarak = lilitan + dua bahagian lurus."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah trek berjejari 14 m pada lengkok dan bahagian lurus 50 m. Ali berlari 5 pusingan penuh. Berapakah jarak yang dilarinya (m)? Guna π = 22/7.",
    "b": 940,
    "tol": 0.01,
    "suf": "m",
    "u": "Satu pusingan = 2 × 22/7 × 14 + 2 × 50 = 88 + 100 = 188 m. Lima pusingan = 5 × 188 = 940 m."
   }
  },
  {
   "n": 6,
   "tempat": "Studio Cincin",
   "sk": "5.3.4 Masalah bulatan dan cincin, bukan rutin",
   "lampiran": "bul6",
   "kadNama": "Cincin",
   "kadEm": "💍",
   "kadFakta": "Luas cincin ialah luas bulatan besar tolak luas bulatan kecil di tengah. Cakera padat (CD) ialah contoh cincin yang biasa kita jumpa.",
   "bosKadNama": "Reka Taman",
   "bosKadEm": "🌳",
   "bosKadFakta": "Arkitek landskap sering mengira luas laluan bulat di sekeliling kolam untuk menentukan bilangan jubin yang perlu dibeli.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan R = 14 cm dan r = 7 cm. Berapakah luas cincin (cm²)? Guna π = 22/7.",
     "b": 462,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 22/7 × (14² − 7²) = 22/7 × 147 = 462 cm²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan R = 21 cm dan r = 7 cm. Berapakah luas cincin (cm²)? Guna π = 22/7.",
     "b": 1232,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 22/7 × (441 − 49) = 22/7 × 392 = 1 232 cm²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan R = 10.5 cm dan r = 3.5 cm. Berapakah luas cincin (cm²)? Guna π = 22/7.",
     "b": 308,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 22/7 × (110.25 − 12.25) = 22/7 × 98 = 308 cm²."
    },
    {
     "j": "nombor",
     "t": "Sebuah CD mempunyai jejari luar 6 cm dan lubang tengah berjejari 1 cm. Berapakah luas permukaan CD itu (cm²)? Guna π = 22/7.",
     "b": 110,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 22/7 × (6² − 1²) = 22/7 × 35 = 110 cm²."
    },
    {
     "j": "nombor",
     "t": "Sebuah semibulatan berdiameter 14 cm. Berapakah perimeternya termasuk garis lurus (cm)? Guna π = 22/7.",
     "b": 36,
     "tol": 0.01,
     "suf": "cm",
     "u": "Lengkok = separuh lilitan = 1/2 × 22/7 × 14 = 22 cm. Perimeter = 22 + 14 = 36 cm."
    },
    {
     "j": "nombor",
     "t": "Lilitan sebuah bulatan ialah 88 cm. Berapakah luasnya (cm²)? Guna π = 22/7.",
     "b": 616,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Jejari = 88 ÷ (2 × 22/7) = 14 cm. Luas = 22/7 × 14 × 14 = 616 cm²."
    },
    {
     "j": "nombor",
     "t": "Luas sebuah bulatan ialah 154 cm². Berapakah lilitannya (cm)? Guna π = 22/7.",
     "b": 44,
     "tol": 0.01,
     "suf": "cm",
     "u": "j² = 154 ÷ 22/7 = 49, jadi j = 7 cm. Lilitan = 2 × 22/7 × 7 = 44 cm."
    },
    {
     "j": "pilih",
     "t": "Pizza A berdiameter 20 cm dan pizza B berdiameter 30 cm. Luas pizza B ialah ... kali luas pizza A.",
     "p": [
      "1.5",
      "3",
      "2",
      "2.25"
     ],
     "b": 3,
     "u": "Nisbah luas = (30 ÷ 20)² = 1.5² = 2.25. Luas bergantung pada kuasa dua diameter."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka sebuah taman kecil yang mempunyai satu kolam bulat dan satu laluan berbentuk cincin di sekeliling kolam itu.",
    "arahan": "Nyatakan jejari kolam dan lebar laluan yang awak pilih, kira luas kolam dan luas laluan (guna π = 22/7), dan terangkan bagaimana awak memastikan taman itu muat dalam kawasan segi empat tepat yang awak tentukan.",
    "u": "Jawapan TP6 yang kukuh memilih ukuran yang munasabah, mengira luas kolam πj² dan luas laluan π(R² − j²) dengan betul, menunjukkan langkah kerja, dan menyemak bahawa diameter luar cincin muat dalam ukuran taman."
   }
  }
 ]
};
