/* Bank soalan — Matematik Ting. 2 · Bab 8 Graf Fungsi.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m2b8.js
   kemudian jalankan: node bina.js m2b8

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m2b8"] =
{
 "id": "m2b8",
 "tingkatan": 2,
 "kod": "8.0 Graf Fungsi",
 "tajuk": "Kilang Graf",
 "subtajuk": "Matematik Ting. 2 · Bab 8 Graf Fungsi",
 "spi": [
  "Mempamerkan pengetahuan asas tentang fungsi.",
  "Mempamerkan kefahaman tentang graf fungsi.",
  "Mengaplikasikan kefahaman tentang graf fungsi untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang graf fungsi dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang graf fungsi dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang graf fungsi dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat menerangkan maksud fungsi sebagai hubungan yang memberi tepat satu output bagi setiap input, serta menulis pasangan tertib. Langkah seterusnya ialah mengenal pasti fungsi daripada pelbagai perwakilan.",
  "2": "{n} memahami fungsi dan bukan fungsi melalui gambar rajah pemetaan, serta perbezaan satu kepada satu dan banyak kepada satu. Perlu lebih latihan menghubungkan jadual, graf dan persamaan sebelum bergerak ke TP3.",
  "3": "{n} boleh membina jadual nilai bagi fungsi linear dan bukan linear dan melukis graf menggunakan skala yang diberi. Galakkan menyemak setiap titik dipalot pada koordinat yang betul.",
  "4": "{n} mampu mentafsir graf fungsi dalam situasi harian, termasuk mencari nilai, puncak dan trend. Seterusnya latih masalah yang melibatkan dua graf.",
  "5": "{n} dapat menyelesaikan masalah yang melibatkan titik persilangan dua graf fungsi, termasuk kes dua titik, satu titik dan tiada titik. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya mereka dan menerangkan graf fungsi y = ax^n dalam situasi sebenar dengan penaakulan yang betul. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Graf Fungsi. Cadangan: ulang hentian pertama dengan Rajah 1 sambil menyebut apakah input dan apakah output bagi setiap pasangan tertib."
 },
 "lampiran": {
  "mesin1": "<figure class=\"figure jmi\" data-w=\"t2mesin\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2mesin&quot;,&quot;mod&quot;:&quot;mesin&quot;,&quot;a&quot;:2,&quot;n&quot;:1,&quot;b&quot;:1,&quot;x&quot;:[-2,-1,0,1,2,3,4],&quot;xAwal&quot;:3,&quot;kapsyen&quot;:&quot;Rajah 1 · Mesin fungsi f(x) = 2x + 1. Gerakkan gelongsor input x dan lihat output f(x).&quot;,&quot;alt&quot;:&quot;Rajah interaktif mesin fungsi f(x) = 2x + 1; gelongsor menukar input x dan mesin mengeluarkan output f(x), dengan jadual pasangan tertib&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 176\" role=\"img\" aria-label=\"Rajah mesin fungsi f(x) = 2x + 1. Input x 3 menghasilkan output 7, dan jadual pasangan tertib dipaparkan\"><text x=\"75.4\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" font-weight=\"700\">f(x) = 2x</text><text x=\"151\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" font-weight=\"700\"> + 1</text><rect x=\"92\" y=\"40\" width=\"76\" height=\"56\" rx=\"10\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"2\"></rect><text x=\"130\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">MESIN</text><text x=\"130\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"20\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">f</text><line x1=\"30\" y1=\"68\" x2=\"90\" y2=\"68\" stroke=\"var(--teal)\" stroke-width=\"1.6\"></line><path d=\"M90 68 L85.5 70.2 L85.5 65.8 Z\" fill=\"var(--teal)\" stroke=\"var(--teal)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><line x1=\"170\" y1=\"68\" x2=\"230\" y2=\"68\" stroke=\"var(--arteri)\" stroke-width=\"1.6\"></line><path d=\"M230 68 L225.5 70.2 L225.5 65.8 Z\" fill=\"var(--arteri)\" stroke=\"var(--arteri)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><text x=\"60\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">x = 3</text><text x=\"200\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">f(3) =</text><text class=\"jmi-hasil\" x=\"200\" y=\"92\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">7</text><text x=\"22.5\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">x</text><text x=\"22.5\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">f(x)</text><text x=\"51.5\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">-2</text><text class=\"jmi-hasil\" x=\"51.5\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">-3</text><text x=\"80.5\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">-1</text><text class=\"jmi-hasil\" x=\"80.5\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">-1</text><text x=\"109.5\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">0</text><text class=\"jmi-hasil\" x=\"109.5\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">1</text><text x=\"138.5\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">1</text><text class=\"jmi-hasil\" x=\"138.5\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">3</text><text x=\"167.5\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">2</text><text class=\"jmi-hasil\" x=\"167.5\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">5</text><rect x=\"183\" y=\"109\" width=\"27\" height=\"36\" rx=\"4\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.2\"></rect><text x=\"196.5\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text class=\"jmi-hasil\" x=\"196.5\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">7</text><text x=\"225.5\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">4</text><text class=\"jmi-hasil\" x=\"225.5\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">9</text><text class=\"jmi-hasil\" x=\"130\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Pasangan tertib: (3, 7)</text></svg></div><figcaption>Rajah 1 · Mesin fungsi f(x) = 2x + 1. Gerakkan gelongsor input x dan lihat output f(x).</figcaption></figure>",
  "pem1": "<figure class=\"figure jmi\" data-w=\"t2mesin\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2mesin&quot;,&quot;mod&quot;:&quot;pemetaan&quot;,&quot;i0&quot;:0,&quot;hubungan&quot;:[{&quot;kod&quot;:&quot;A&quot;,&quot;nama&quot;:&quot;Hubungan A&quot;,&quot;a&quot;:[1,2,3],&quot;b&quot;:[2,4,6],&quot;p&quot;:[[1,2],[2,4],[3,6]]},{&quot;kod&quot;:&quot;B&quot;,&quot;nama&quot;:&quot;Hubungan B&quot;,&quot;a&quot;:[-2,-1,1,2],&quot;b&quot;:[1,4],&quot;p&quot;:[[-2,4],[-1,1],[1,1],[2,4]]},{&quot;kod&quot;:&quot;C&quot;,&quot;nama&quot;:&quot;Hubungan C&quot;,&quot;a&quot;:[1,2,3],&quot;b&quot;:[4,5,6,7],&quot;p&quot;:[[1,4],[1,5],[2,6],[3,7]]},{&quot;kod&quot;:&quot;D&quot;,&quot;nama&quot;:&quot;Hubungan D&quot;,&quot;a&quot;:[1,2,3],&quot;b&quot;:[5,6,7],&quot;p&quot;:[[1,5],[2,6]]},{&quot;kod&quot;:&quot;E&quot;,&quot;nama&quot;:&quot;Hubungan E&quot;,&quot;a&quot;:[1,2,3],&quot;b&quot;:[4],&quot;p&quot;:[[1,4],[2,4],[3,4]]}],&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih hubungan A hingga E dengan gelongsor. Anak panah menunjukkan input dipetakan kepada output.&quot;,&quot;alt&quot;:&quot;Rajah interaktif gambar rajah pemetaan lima hubungan dengan input di kiri dan output di kanan; gelongsor memilih hubungan dan jenisnya dipaparkan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 162\" role=\"img\" aria-label=\"Rajah pemetaan Hubungan A: input di kiri, output di kanan. Fungsi satu kepada satu\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Hubungan A</text><text x=\"66\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">Input</text><text x=\"194\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">Output</text><rect x=\"40\" y=\"44\" width=\"52\" height=\"88\" rx=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><rect x=\"168\" y=\"44\" width=\"52\" height=\"88\" rx=\"14\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.4\"></rect><line x1=\"80\" y1=\"56\" x2=\"180\" y2=\"56\" stroke=\"var(--arteri)\" stroke-width=\"1.6\"></line><path d=\"M180 56 L175.5 58.2 L175.5 53.8 Z\" fill=\"var(--arteri)\" stroke=\"var(--arteri)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><line x1=\"80\" y1=\"84\" x2=\"180\" y2=\"84\" stroke=\"var(--arteri)\" stroke-width=\"1.6\"></line><path d=\"M180 84 L175.5 86.2 L175.5 81.8 Z\" fill=\"var(--arteri)\" stroke=\"var(--arteri)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><line x1=\"80\" y1=\"112\" x2=\"180\" y2=\"112\" stroke=\"var(--arteri)\" stroke-width=\"1.6\"></line><path d=\"M180 112 L175.5 114.2 L175.5 109.8 Z\" fill=\"var(--arteri)\" stroke=\"var(--arteri)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><text x=\"66\" y=\"60\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"66\" y=\"88\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"66\" y=\"116\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"194\" y=\"60\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"194\" y=\"88\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"194\" y=\"116\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">6</text><text x=\"130\" y=\"150\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">Fungsi satu kepada satu</text></svg></div><figcaption>Rajah 1 · Pilih hubungan A hingga E dengan gelongsor. Anak panah menunjukkan input dipetakan kepada output.</figcaption></figure>",
  "plot1": "<figure class=\"figure jmi\" data-w=\"t2graf\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2graf&quot;,&quot;mod&quot;:&quot;plot&quot;,&quot;a&quot;:1,&quot;n&quot;:2,&quot;x&quot;:[-3,-2,-1,0,1,2,3],&quot;xa&quot;:-4,&quot;xb&quot;:4,&quot;ya&quot;:-2,&quot;yb&quot;:10,&quot;i0&quot;:0,&quot;kapsyen&quot;:&quot;Rajah 1 · Jadual nilai bagi y = x². Gerakkan gelongsor untuk memalot titik satu demi satu, dan lihat lengkung terbentuk.&quot;,&quot;alt&quot;:&quot;Rajah interaktif jadual nilai dan graf y = x kuasa dua; gelongsor memalot titik pada satah Cartes satu demi satu sehingga lengkung licin terbentuk&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 256\" role=\"img\" aria-label=\"Rajah graf y = x^2: jadual nilai dan 0 daripada 7 titik telah dipalot pada satah Cartes\"><text x=\"105.7\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" font-weight=\"700\">y = x</text><text x=\"147.7\" y=\"10\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><rect x=\"38\" y=\"30\" width=\"210\" height=\"140\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"38\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><line x1=\"64.3\" y1=\"30\" x2=\"64.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"64.3\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-3</text><line x1=\"90.5\" y1=\"30\" x2=\"90.5\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"90.5\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><line x1=\"116.8\" y1=\"30\" x2=\"116.8\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"116.8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><text x=\"143\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"169.3\" y1=\"30\" x2=\"169.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"169.3\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"195.5\" y1=\"30\" x2=\"195.5\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"195.5\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"221.8\" y1=\"30\" x2=\"221.8\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"221.8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"248\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"34\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"34\" y=\"150.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"38\" y1=\"123.3\" x2=\"248\" y2=\"123.3\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"127.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"38\" y1=\"100\" x2=\"248\" y2=\"100\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"104\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"38\" y1=\"76.7\" x2=\"248\" y2=\"76.7\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"80.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><line x1=\"38\" y1=\"53.3\" x2=\"248\" y2=\"53.3\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"57.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">8</text><text x=\"34\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"38\" y1=\"146.7\" x2=\"248\" y2=\"146.7\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"143\" y1=\"30\" x2=\"143\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"22.5\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">x</text><text x=\"22.5\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">y</text><text x=\"51.5\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">-3</text><text x=\"51.5\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"middle\">9</text><text x=\"80.5\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">-2</text><text x=\"80.5\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"109.5\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">-1</text><text x=\"109.5\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"138.5\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">0</text><text x=\"138.5\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"167.5\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">1</text><text x=\"167.5\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"196.5\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">2</text><text x=\"196.5\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"225.5\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">3</text><text x=\"225.5\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"middle\">9</text><text x=\"130\" y=\"246\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">Belum ada titik dipalot.</text></svg></div><figcaption>Rajah 1 · Jadual nilai bagi y = x². Gerakkan gelongsor untuk memalot titik satu demi satu, dan lihat lengkung terbentuk.</figcaption></figure>",
  "sit1": "<figure class=\"figure jmi cabar\" data-w=\"t2graf\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2graf&quot;,&quot;mod&quot;:&quot;situasi&quot;,&quot;s&quot;:&quot;bola&quot;,&quot;i0&quot;:2,&quot;cabar&quot;:true,&quot;kapsyen&quot;:&quot;Rajah 1 · Bola dilambung ke atas, h = 20t − 5t². Kira dahulu di kertas conteng, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf tinggi bola melawan masa bagi h = 20t tolak 5t kuasa dua; gelongsor menukar masa dan tinggi bola dipaparkan selepas semakan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 242\" role=\"img\" aria-label=\"Rajah graf situasi Bola dilambung: h melawan t; pada t = 1 nilai h ialah 15\"><text x=\"79.9\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">h = 20t - 5t</text><text x=\"173.5\" y=\"8\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><text x=\"34\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"end\" font-weight=\"700\">h (m)</text><rect x=\"38\" y=\"30\" width=\"210\" height=\"140\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"38\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"84.7\" y1=\"30\" x2=\"84.7\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"84.7\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"131.3\" y1=\"30\" x2=\"131.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"131.3\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"178\" y1=\"30\" x2=\"178\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"178\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><line x1=\"224.7\" y1=\"30\" x2=\"224.7\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"224.7\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"34\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"38\" y1=\"142\" x2=\"248\" y2=\"142\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"146\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><line x1=\"38\" y1=\"114\" x2=\"248\" y2=\"114\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"38\" y1=\"86\" x2=\"248\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">15</text><line x1=\"38\" y1=\"58\" x2=\"248\" y2=\"58\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"62\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">20</text><text x=\"34\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">25</text><line x1=\"38\" y1=\"170\" x2=\"248\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"38\" y1=\"30\" x2=\"38\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><path d=\"M38 170 L38.4 169 L38.8 168 L39.3 167 L39.7 166 L40.1 165 L40.5 164 L40.9 163.1 L41.4 162.1 L41.8 161.1 L42.2 160.1 L42.6 159.2 L43 158.2 L43.5 157.3 L43.9 156.3 L44.3 155.4 L44.7 154.5 L45.1 153.5 L45.6 152.6 L46 151.7 L46.4 150.7 L46.8 149.8 L47.2 148.9 L47.7 148 L48.1 147.1 L48.5 146.2 L48.9 145.3 L49.3 144.4 L49.8 143.6 L50.2 142.7 L50.6 141.8 L51 140.9 L51.4 140.1 L51.9 139.2 L52.3 138.3 L52.7 137.5 L53.1 136.7 L53.5 135.8 L54 135 L54.4 134.1 L54.8 133.3 L55.2 132.5 L55.6 131.7 L56.1 130.8 L56.5 130 L56.9 129.2 L57.3 128.4 L57.7 127.6 L58.2 126.8 L58.6 126.1 L59 125.3 L59.4 124.5 L59.8 123.7 L60.3 122.9 L60.7 122.2 L61.1 121.4 L61.5 120.7 L61.9 119.9 L62.4 119.2 L62.8 118.4 L63.2 117.7 L63.6 117 L64 116.2 L64.5 115.5 L64.9 114.8 L65.3 114.1 L65.7 113.4 L66.1 112.6 L66.6 111.9 L67 111.2 L67.4 110.6 L67.8 109.9 L68.2 109.2 L68.7 108.5 L69.1 107.8 L69.5 107.2 L69.9 106.5 L70.3 105.8 L70.8 105.2 L71.2 104.5 L71.6 103.9 L72 103.2 L72.4 102.6 L72.9 102 L73.3 101.3 L73.7 100.7 L74.1 100.1 L74.5 99.5 L75 98.9 L75.4 98.3 L75.8 97.7 L76.2 97.1 L76.6 96.5 L77.1 95.9 L77.5 95.3 L77.9 94.7 L78.3 94.1 L78.7 93.6 L79.2 93 L79.6 92.4 L80 91.9 L80.4 91.3 L80.8 90.8 L81.3 90.2 L81.7 89.7 L82.1 89.2 L82.5 88.6 L82.9 88.1 L83.4 87.6 L83.8 87.1 L84.2 86.6 L84.6 86.1 L85 85.6 L85.5 85.1 L85.9 84.6 L86.3 84.1 L86.7 83.6 L87.1 83.1 L87.6 82.6 L88 82.2 L88.4 81.7 L88.8 81.2 L89.2 80.8 L89.7 80.3 L90.1 79.9 L90.5 79.4 L90.9 79 L91.3 78.6 L91.8 78.1 L92.2 77.7 L92.6 77.3 L93 76.9 L93.4 76.5 L93.9 76.1 L94.3 75.7 L94.7 75.3 L95.1 74.9 L95.5 74.5 L96 74.1 L96.4 73.7 L96.8 73.3 L97.2 73 L97.6 72.6 L98.1 72.2 L98.5 71.9 L98.9 71.5 L99.3 71.2 L99.7 70.8 L100.2 70.5 L100.6 70.2 L101 69.8 L101.4 69.5 L101.8 69.2 L102.3 68.9 L102.7 68.6 L103.1 68.2 L103.5 67.9 L103.9 67.6 L104.4 67.4 L104.8 67.1 L105.2 66.8 L105.6 66.5 L106 66.2 L106.5 66 L106.9 65.7 L107.3 65.4 L107.7 65.2 L108.1 64.9 L108.6 64.7 L109 64.4 L109.4 64.2 L109.8 64 L110.2 63.7 L110.7 63.5 L111.1 63.3 L111.5 63.1 L111.9 62.8 L112.3 62.6 L112.8 62.4 L113.2 62.2 L113.6 62 L114 61.9 L114.4 61.7 L114.9 61.5 L115.3 61.3 L115.7 61.1 L116.1 61 L116.5 60.8 L117 60.7 L117.4 60.5 L117.8 60.4 L118.2 60.2 L118.6 60.1 L119.1 59.9 L119.5 59.8 L119.9 59.7 L120.3 59.6 L120.7 59.4 L121.2 59.3 L121.6 59.2 L122 59.1 L122.4 59 L122.8 58.9 L123.3 58.8 L123.7 58.8 L124.1 58.7 L124.5 58.6 L124.9 58.5 L125.4 58.5 L125.8 58.4 L126.2 58.3 L126.6 58.3 L127 58.2 L127.5 58.2 L127.9 58.2 L128.3 58.1 L128.7 58.1 L129.1 58.1 L129.6 58 L130 58 L130.4 58 L130.8 58 L131.2 58 L131.7 58 L132.1 58 L132.5 58 L132.9 58 L133.3 58.1 L133.8 58.1 L134.2 58.1 L134.6 58.1 L135 58.2 L135.4 58.2 L135.9 58.3 L136.3 58.3 L136.7 58.4 L137.1 58.4 L137.5 58.5 L138 58.6 L138.4 58.6 L138.8 58.7 L139.2 58.8 L139.6 58.9 L140.1 59 L140.5 59.1 L140.9 59.2 L141.3 59.3 L141.7 59.4 L142.2 59.5 L142.6 59.6 L143 59.8 L143.4 59.9 L143.8 60 L144.3 60.1 L144.7 60.3 L145.1 60.4 L145.5 60.6 L145.9 60.7 L146.4 60.9 L146.8 61.1 L147.2 61.2 L147.6 61.4 L148 61.6 L148.5 61.8 L148.9 62 L149.3 62.2 L149.7 62.3 L150.1 62.5 L150.6 62.8 L151 63 L151.4 63.2 L151.8 63.4 L152.2 63.6 L152.7 63.8 L153.1 64.1 L153.5 64.3 L153.9 64.6 L154.3 64.8 L154.8 65.1 L155.2 65.3 L155.6 65.6 L156 65.8 L156.4 66.1 L156.9 66.4 L157.3 66.7 L157.7 66.9 L158.1 67.2 L158.5 67.5 L159 67.8 L159.4 68.1 L159.8 68.4 L160.2 68.7 L160.6 69 L161.1 69.4 L161.5 69.7 L161.9 70 L162.3 70.3 L162.7 70.7 L163.2 71 L163.6 71.4 L164 71.7 L164.4 72.1 L164.8 72.4 L165.3 72.8 L165.7 73.2 L166.1 73.5 L166.5 73.9 L166.9 74.3 L167.4 74.7 L167.8 75.1 L168.2 75.5 L168.6 75.9 L169 76.3 L169.5 76.7 L169.9 77.1 L170.3 77.5 L170.7 77.9 L171.1 78.4 L171.6 78.8 L172 79.2 L172.4 79.7 L172.8 80.1 L173.2 80.6 L173.7 81 L174.1 81.5 L174.5 82 L174.9 82.4 L175.3 82.9 L175.8 83.4 L176.2 83.9 L176.6 84.3 L177 84.8 L177.4 85.3 L177.9 85.8 L178.3 86.3 L178.7 86.8 L179.1 87.4 L179.5 87.9 L180 88.4 L180.4 88.9 L180.8 89.5 L181.2 90 L181.6 90.5 L182.1 91.1 L182.5 91.6 L182.9 92.2 L183.3 92.7 L183.7 93.3 L184.2 93.9 L184.6 94.5 L185 95 L185.4 95.6 L185.8 96.2 L186.3 96.8 L186.7 97.4 L187.1 98 L187.5 98.6 L187.9 99.2 L188.4 99.8 L188.8 100.4 L189.2 101.1 L189.6 101.7 L190 102.3 L190.5 102.9 L190.9 103.6 L191.3 104.2 L191.7 104.9 L192.1 105.5 L192.6 106.2 L193 106.9 L193.4 107.5 L193.8 108.2 L194.2 108.9 L194.7 109.6 L195.1 110.2 L195.5 110.9 L195.9 111.6 L196.3 112.3 L196.8 113 L197.2 113.7 L197.6 114.5 L198 115.2 L198.4 115.9 L198.9 116.6 L199.3 117.4 L199.7 118.1 L200.1 118.8 L200.5 119.6 L201 120.3 L201.4 121.1 L201.8 121.8 L202.2 122.6 L202.6 123.4 L203.1 124.1 L203.5 124.9 L203.9 125.7 L204.3 126.5 L204.7 127.3 L205.2 128.1 L205.6 128.9 L206 129.7 L206.4 130.5 L206.8 131.3 L207.3 132.1 L207.7 132.9 L208.1 133.8 L208.5 134.6 L208.9 135.4 L209.4 136.3 L209.8 137.1 L210.2 138 L210.6 138.8 L211 139.7 L211.5 140.5 L211.9 141.4 L212.3 142.3 L212.7 143.2 L213.1 144 L213.6 144.9 L214 145.8 L214.4 146.7 L214.8 147.6 L215.2 148.5 L215.7 149.4 L216.1 150.3 L216.5 151.3 L216.9 152.2 L217.3 153.1 L217.8 154 L218.2 155 L218.6 155.9 L219 156.9 L219.4 157.8 L219.9 158.8 L220.3 159.7 L220.7 160.7 L221.1 161.6 L221.5 162.6 L222 163.6 L222.4 164.6 L222.8 165.6 L223.2 166.6 L223.6 167.5 L224.1 168.5 L224.5 169.6 L224.7 170\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><circle cx=\"38\" cy=\"170\" r=\"3\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"61.3\" cy=\"121\" r=\"3\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"108\" cy=\"65\" r=\"3\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"131.3\" cy=\"58\" r=\"3\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"154.7\" cy=\"65\" r=\"3\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"178\" cy=\"86\" r=\"3\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"201.3\" cy=\"121\" r=\"3\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"224.7\" cy=\"170\" r=\"3\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"84.7\" cy=\"86\" r=\"5.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"143\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">t (saat)</text><text x=\"130\" y=\"216\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Bola dilambung: t = 1 s</text><text class=\"jmi-hasil\" x=\"130\" y=\"232\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">h = 15 m</text></svg></div><figcaption>Rajah 1 · Bola dilambung ke atas, h = 20t − 5t². Kira dahulu di kertas conteng, kemudian semak dengan rajah.</figcaption></figure>",
  "sil1": "<figure class=\"figure jmi cabar\" data-w=\"t2graf\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2graf&quot;,&quot;mod&quot;:&quot;silang&quot;,&quot;a&quot;:1,&quot;n&quot;:2,&quot;xa&quot;:-4,&quot;xb&quot;:4,&quot;ya&quot;:-2,&quot;yb&quot;:12,&quot;g0&quot;:0,&quot;cabar&quot;:true,&quot;garis&quot;:[[1,2],[2,3],[0,4],[-1,6],[0,0],[0,-1]],&quot;kapsyen&quot;:&quot;Rajah 1 · Lengkung y = x² dan satu garis lurus. Pilih garis, kira titik persilangan dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif lengkung y = x kuasa dua dan enam pilihan garis lurus; gelongsor memilih garis dan titik persilangan dipaparkan selepas semakan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 232\" role=\"img\" aria-label=\"Rajah lengkung y = x^2 dan garis lurus y = x + 2: bersilang pada x = -1 dan 2\"><text x=\"107.2\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">y = x</text><text x=\"146.2\" y=\"10\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" font-weight=\"700\">2</text><rect x=\"38\" y=\"30\" width=\"210\" height=\"140\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"38\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><line x1=\"64.3\" y1=\"30\" x2=\"64.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"64.3\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-3</text><line x1=\"90.5\" y1=\"30\" x2=\"90.5\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"90.5\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><line x1=\"116.8\" y1=\"30\" x2=\"116.8\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"116.8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><text x=\"143\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"169.3\" y1=\"30\" x2=\"169.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"169.3\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"195.5\" y1=\"30\" x2=\"195.5\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"195.5\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"221.8\" y1=\"30\" x2=\"221.8\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"221.8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"248\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"34\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"34\" y=\"154\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"38\" y1=\"130\" x2=\"248\" y2=\"130\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"38\" y1=\"110\" x2=\"248\" y2=\"110\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"114\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"38\" y1=\"90\" x2=\"248\" y2=\"90\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><line x1=\"38\" y1=\"70\" x2=\"248\" y2=\"70\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">8</text><line x1=\"38\" y1=\"50\" x2=\"248\" y2=\"50\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><text x=\"34\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">12</text><line x1=\"38\" y1=\"150\" x2=\"248\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"143\" y1=\"30\" x2=\"143\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><path d=\"M52.1 30 L52.3 30.6 L52.7 31.7 L53.1 32.8 L53.5 33.9 L54 34.9 L54.4 36 L54.8 37.1 L55.2 38.2 L55.6 39.2 L56.1 40.3 L56.5 41.4 L56.9 42.4 L57.3 43.5 L57.7 44.5 L58.2 45.5 L58.6 46.6 L59 47.6 L59.4 48.6 L59.8 49.6 L60.3 50.6 L60.7 51.7 L61.1 52.7 L61.5 53.7 L61.9 54.6 L62.4 55.6 L62.8 56.6 L63.2 57.6 L63.6 58.6 L64 59.5 L64.5 60.5 L64.9 61.4 L65.3 62.4 L65.7 63.3 L66.1 64.3 L66.6 65.2 L67 66.1 L67.4 67.1 L67.8 68 L68.2 68.9 L68.7 69.8 L69.1 70.7 L69.5 71.6 L69.9 72.5 L70.3 73.4 L70.8 74.3 L71.2 75.1 L71.6 76 L72 76.9 L72.4 77.7 L72.9 78.6 L73.3 79.5 L73.7 80.3 L74.1 81.1 L74.5 82 L75 82.8 L75.4 83.6 L75.8 84.5 L76.2 85.3 L76.6 86.1 L77.1 86.9 L77.5 87.7 L77.9 88.5 L78.3 89.3 L78.7 90.1 L79.2 90.9 L79.6 91.6 L80 92.4 L80.4 93.2 L80.8 93.9 L81.3 94.7 L81.7 95.4 L82.1 96.2 L82.5 96.9 L82.9 97.7 L83.4 98.4 L83.8 99.1 L84.2 99.8 L84.6 100.5 L85 101.2 L85.5 102 L85.9 102.7 L86.3 103.3 L86.7 104 L87.1 104.7 L87.6 105.4 L88 106.1 L88.4 106.7 L88.8 107.4 L89.2 108.1 L89.7 108.7 L90.1 109.4 L90.5 110 L90.9 110.6 L91.3 111.3 L91.8 111.9 L92.2 112.5 L92.6 113.1 L93 113.7 L93.4 114.4 L93.9 115 L94.3 115.6 L94.7 116.1 L95.1 116.7 L95.5 117.3 L96 117.9 L96.4 118.5 L96.8 119 L97.2 119.6 L97.6 120.1 L98.1 120.7 L98.5 121.2 L98.9 121.8 L99.3 122.3 L99.7 122.8 L100.2 123.4 L100.6 123.9 L101 124.4 L101.4 124.9 L101.8 125.4 L102.3 125.9 L102.7 126.4 L103.1 126.9 L103.5 127.4 L103.9 127.9 L104.4 128.3 L104.8 128.8 L105.2 129.3 L105.6 129.7 L106 130.2 L106.5 130.6 L106.9 131.1 L107.3 131.5 L107.7 131.9 L108.1 132.4 L108.6 132.8 L109 133.2 L109.4 133.6 L109.8 134 L110.2 134.4 L110.7 134.8 L111.1 135.2 L111.5 135.6 L111.9 136 L112.3 136.4 L112.8 136.7 L113.2 137.1 L113.6 137.5 L114 137.8 L114.4 138.2 L114.9 138.5 L115.3 138.8 L115.7 139.2 L116.1 139.5 L116.5 139.8 L117 140.2 L117.4 140.5 L117.8 140.8 L118.2 141.1 L118.6 141.4 L119.1 141.7 L119.5 142 L119.9 142.3 L120.3 142.5 L120.7 142.8 L121.2 143.1 L121.6 143.3 L122 143.6 L122.4 143.9 L122.8 144.1 L123.3 144.3 L123.7 144.6 L124.1 144.8 L124.5 145 L124.9 145.3 L125.4 145.5 L125.8 145.7 L126.2 145.9 L126.6 146.1 L127 146.3 L127.5 146.5 L127.9 146.7 L128.3 146.9 L128.7 147 L129.1 147.2 L129.6 147.4 L130 147.5 L130.4 147.7 L130.8 147.8 L131.2 148 L131.7 148.1 L132.1 148.3 L132.5 148.4 L132.9 148.5 L133.3 148.6 L133.8 148.8 L134.2 148.9 L134.6 149 L135 149.1 L135.4 149.2 L135.9 149.3 L136.3 149.3 L136.7 149.4 L137.1 149.5 L137.5 149.6 L138 149.6 L138.4 149.7 L138.8 149.7 L139.2 149.8 L139.6 149.8 L140.1 149.9 L140.5 149.9 L140.9 149.9 L141.3 150 L141.7 150 L142.2 150 L142.6 150 L143 150 L143.4 150 L143.8 150 L144.3 150 L144.7 150 L145.1 149.9 L145.5 149.9 L145.9 149.9 L146.4 149.8 L146.8 149.8 L147.2 149.7 L147.6 149.7 L148 149.6 L148.5 149.6 L148.9 149.5 L149.3 149.4 L149.7 149.3 L150.1 149.3 L150.6 149.2 L151 149.1 L151.4 149 L151.8 148.9 L152.2 148.8 L152.7 148.6 L153.1 148.5 L153.5 148.4 L153.9 148.3 L154.3 148.1 L154.8 148 L155.2 147.8 L155.6 147.7 L156 147.5 L156.4 147.4 L156.9 147.2 L157.3 147 L157.7 146.9 L158.1 146.7 L158.5 146.5 L159 146.3 L159.4 146.1 L159.8 145.9 L160.2 145.7 L160.6 145.5 L161.1 145.3 L161.5 145 L161.9 144.8 L162.3 144.6 L162.7 144.3 L163.2 144.1 L163.6 143.9 L164 143.6 L164.4 143.3 L164.8 143.1 L165.3 142.8 L165.7 142.5 L166.1 142.3 L166.5 142 L166.9 141.7 L167.4 141.4 L167.8 141.1 L168.2 140.8 L168.6 140.5 L169 140.2 L169.5 139.8 L169.9 139.5 L170.3 139.2 L170.7 138.8 L171.1 138.5 L171.6 138.2 L172 137.8 L172.4 137.5 L172.8 137.1 L173.2 136.7 L173.7 136.4 L174.1 136 L174.5 135.6 L174.9 135.2 L175.3 134.8 L175.8 134.4 L176.2 134 L176.6 133.6 L177 133.2 L177.4 132.8 L177.9 132.4 L178.3 131.9 L178.7 131.5 L179.1 131.1 L179.5 130.6 L180 130.2 L180.4 129.7 L180.8 129.3 L181.2 128.8 L181.6 128.3 L182.1 127.9 L182.5 127.4 L182.9 126.9 L183.3 126.4 L183.7 125.9 L184.2 125.4 L184.6 124.9 L185 124.4 L185.4 123.9 L185.8 123.4 L186.3 122.8 L186.7 122.3 L187.1 121.8 L187.5 121.2 L187.9 120.7 L188.4 120.1 L188.8 119.6 L189.2 119 L189.6 118.5 L190 117.9 L190.5 117.3 L190.9 116.7 L191.3 116.1 L191.7 115.6 L192.1 115 L192.6 114.4 L193 113.7 L193.4 113.1 L193.8 112.5 L194.2 111.9 L194.7 111.3 L195.1 110.6 L195.5 110 L195.9 109.4 L196.3 108.7 L196.8 108.1 L197.2 107.4 L197.6 106.7 L198 106.1 L198.4 105.4 L198.9 104.7 L199.3 104 L199.7 103.3 L200.1 102.7 L200.5 102 L201 101.2 L201.4 100.5 L201.8 99.8 L202.2 99.1 L202.6 98.4 L203.1 97.7 L203.5 96.9 L203.9 96.2 L204.3 95.4 L204.7 94.7 L205.2 93.9 L205.6 93.2 L206 92.4 L206.4 91.6 L206.8 90.9 L207.3 90.1 L207.7 89.3 L208.1 88.5 L208.5 87.7 L208.9 86.9 L209.4 86.1 L209.8 85.3 L210.2 84.5 L210.6 83.6 L211 82.8 L211.5 82 L211.9 81.1 L212.3 80.3 L212.7 79.5 L213.1 78.6 L213.6 77.7 L214 76.9 L214.4 76 L214.8 75.1 L215.2 74.3 L215.7 73.4 L216.1 72.5 L216.5 71.6 L216.9 70.7 L217.3 69.8 L217.8 68.9 L218.2 68 L218.6 67.1 L219 66.1 L219.4 65.2 L219.9 64.3 L220.3 63.3 L220.7 62.4 L221.1 61.4 L221.5 60.5 L222 59.5 L222.4 58.6 L222.8 57.6 L223.2 56.6 L223.6 55.6 L224.1 54.6 L224.5 53.7 L224.9 52.7 L225.3 51.7 L225.7 50.6 L226.2 49.6 L226.6 48.6 L227 47.6 L227.4 46.6 L227.8 45.5 L228.3 44.5 L228.7 43.5 L229.1 42.4 L229.5 41.4 L229.9 40.3 L230.4 39.2 L230.8 38.2 L231.2 37.1 L231.6 36 L232 34.9 L232.5 33.9 L232.9 32.8 L233.3 31.7 L233.7 30.6 L233.9 30\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><path d=\"M38 170 L38.4 169.8 L38.8 169.7 L39.3 169.5 L39.7 169.4 L40.1 169.2 L40.5 169 L40.9 168.9 L41.4 168.7 L41.8 168.6 L42.2 168.4 L42.6 168.2 L43 168.1 L43.5 167.9 L43.9 167.8 L44.3 167.6 L44.7 167.4 L45.1 167.3 L45.6 167.1 L46 167 L46.4 166.8 L46.8 166.6 L47.2 166.5 L47.7 166.3 L48.1 166.2 L48.5 166 L48.9 165.8 L49.3 165.7 L49.8 165.5 L50.2 165.4 L50.6 165.2 L51 165 L51.4 164.9 L51.9 164.7 L52.3 164.6 L52.7 164.4 L53.1 164.2 L53.5 164.1 L54 163.9 L54.4 163.8 L54.8 163.6 L55.2 163.4 L55.6 163.3 L56.1 163.1 L56.5 163 L56.9 162.8 L57.3 162.6 L57.7 162.5 L58.2 162.3 L58.6 162.2 L59 162 L59.4 161.8 L59.8 161.7 L60.3 161.5 L60.7 161.4 L61.1 161.2 L61.5 161 L61.9 160.9 L62.4 160.7 L62.8 160.6 L63.2 160.4 L63.6 160.2 L64 160.1 L64.5 159.9 L64.9 159.8 L65.3 159.6 L65.7 159.4 L66.1 159.3 L66.6 159.1 L67 159 L67.4 158.8 L67.8 158.6 L68.2 158.5 L68.7 158.3 L69.1 158.2 L69.5 158 L69.9 157.8 L70.3 157.7 L70.8 157.5 L71.2 157.4 L71.6 157.2 L72 157 L72.4 156.9 L72.9 156.7 L73.3 156.6 L73.7 156.4 L74.1 156.2 L74.5 156.1 L75 155.9 L75.4 155.8 L75.8 155.6 L76.2 155.4 L76.6 155.3 L77.1 155.1 L77.5 155 L77.9 154.8 L78.3 154.6 L78.7 154.5 L79.2 154.3 L79.6 154.2 L80 154 L80.4 153.8 L80.8 153.7 L81.3 153.5 L81.7 153.4 L82.1 153.2 L82.5 153 L82.9 152.9 L83.4 152.7 L83.8 152.6 L84.2 152.4 L84.6 152.2 L85 152.1 L85.5 151.9 L85.9 151.8 L86.3 151.6 L86.7 151.4 L87.1 151.3 L87.6 151.1 L88 151 L88.4 150.8 L88.8 150.6 L89.2 150.5 L89.7 150.3 L90.1 150.2 L90.5 150 L90.9 149.8 L91.3 149.7 L91.8 149.5 L92.2 149.4 L92.6 149.2 L93 149 L93.4 148.9 L93.9 148.7 L94.3 148.6 L94.7 148.4 L95.1 148.2 L95.5 148.1 L96 147.9 L96.4 147.8 L96.8 147.6 L97.2 147.4 L97.6 147.3 L98.1 147.1 L98.5 147 L98.9 146.8 L99.3 146.6 L99.7 146.5 L100.2 146.3 L100.6 146.2 L101 146 L101.4 145.8 L101.8 145.7 L102.3 145.5 L102.7 145.4 L103.1 145.2 L103.5 145 L103.9 144.9 L104.4 144.7 L104.8 144.6 L105.2 144.4 L105.6 144.2 L106 144.1 L106.5 143.9 L106.9 143.8 L107.3 143.6 L107.7 143.4 L108.1 143.3 L108.6 143.1 L109 143 L109.4 142.8 L109.8 142.6 L110.2 142.5 L110.7 142.3 L111.1 142.2 L111.5 142 L111.9 141.8 L112.3 141.7 L112.8 141.5 L113.2 141.4 L113.6 141.2 L114 141 L114.4 140.9 L114.9 140.7 L115.3 140.6 L115.7 140.4 L116.1 140.2 L116.5 140.1 L117 139.9 L117.4 139.8 L117.8 139.6 L118.2 139.4 L118.6 139.3 L119.1 139.1 L119.5 139 L119.9 138.8 L120.3 138.6 L120.7 138.5 L121.2 138.3 L121.6 138.2 L122 138 L122.4 137.8 L122.8 137.7 L123.3 137.5 L123.7 137.4 L124.1 137.2 L124.5 137 L124.9 136.9 L125.4 136.7 L125.8 136.6 L126.2 136.4 L126.6 136.2 L127 136.1 L127.5 135.9 L127.9 135.8 L128.3 135.6 L128.7 135.4 L129.1 135.3 L129.6 135.1 L130 135 L130.4 134.8 L130.8 134.6 L131.2 134.5 L131.7 134.3 L132.1 134.2 L132.5 134 L132.9 133.8 L133.3 133.7 L133.8 133.5 L134.2 133.4 L134.6 133.2 L135 133 L135.4 132.9 L135.9 132.7 L136.3 132.6 L136.7 132.4 L137.1 132.2 L137.5 132.1 L138 131.9 L138.4 131.8 L138.8 131.6 L139.2 131.4 L139.6 131.3 L140.1 131.1 L140.5 131 L140.9 130.8 L141.3 130.6 L141.7 130.5 L142.2 130.3 L142.6 130.2 L143 130 L143.4 129.8 L143.8 129.7 L144.3 129.5 L144.7 129.4 L145.1 129.2 L145.5 129 L145.9 128.9 L146.4 128.7 L146.8 128.6 L147.2 128.4 L147.6 128.2 L148 128.1 L148.5 127.9 L148.9 127.8 L149.3 127.6 L149.7 127.4 L150.1 127.3 L150.6 127.1 L151 127 L151.4 126.8 L151.8 126.6 L152.2 126.5 L152.7 126.3 L153.1 126.2 L153.5 126 L153.9 125.8 L154.3 125.7 L154.8 125.5 L155.2 125.4 L155.6 125.2 L156 125 L156.4 124.9 L156.9 124.7 L157.3 124.6 L157.7 124.4 L158.1 124.2 L158.5 124.1 L159 123.9 L159.4 123.8 L159.8 123.6 L160.2 123.4 L160.6 123.3 L161.1 123.1 L161.5 123 L161.9 122.8 L162.3 122.6 L162.7 122.5 L163.2 122.3 L163.6 122.2 L164 122 L164.4 121.8 L164.8 121.7 L165.3 121.5 L165.7 121.4 L166.1 121.2 L166.5 121 L166.9 120.9 L167.4 120.7 L167.8 120.6 L168.2 120.4 L168.6 120.2 L169 120.1 L169.5 119.9 L169.9 119.8 L170.3 119.6 L170.7 119.4 L171.1 119.3 L171.6 119.1 L172 119 L172.4 118.8 L172.8 118.6 L173.2 118.5 L173.7 118.3 L174.1 118.2 L174.5 118 L174.9 117.8 L175.3 117.7 L175.8 117.5 L176.2 117.4 L176.6 117.2 L177 117 L177.4 116.9 L177.9 116.7 L178.3 116.6 L178.7 116.4 L179.1 116.2 L179.5 116.1 L180 115.9 L180.4 115.8 L180.8 115.6 L181.2 115.4 L181.6 115.3 L182.1 115.1 L182.5 115 L182.9 114.8 L183.3 114.6 L183.7 114.5 L184.2 114.3 L184.6 114.2 L185 114 L185.4 113.8 L185.8 113.7 L186.3 113.5 L186.7 113.4 L187.1 113.2 L187.5 113 L187.9 112.9 L188.4 112.7 L188.8 112.6 L189.2 112.4 L189.6 112.2 L190 112.1 L190.5 111.9 L190.9 111.8 L191.3 111.6 L191.7 111.4 L192.1 111.3 L192.6 111.1 L193 111 L193.4 110.8 L193.8 110.6 L194.2 110.5 L194.7 110.3 L195.1 110.2 L195.5 110 L195.9 109.8 L196.3 109.7 L196.8 109.5 L197.2 109.4 L197.6 109.2 L198 109 L198.4 108.9 L198.9 108.7 L199.3 108.6 L199.7 108.4 L200.1 108.2 L200.5 108.1 L201 107.9 L201.4 107.8 L201.8 107.6 L202.2 107.4 L202.6 107.3 L203.1 107.1 L203.5 107 L203.9 106.8 L204.3 106.6 L204.7 106.5 L205.2 106.3 L205.6 106.2 L206 106 L206.4 105.8 L206.8 105.7 L207.3 105.5 L207.7 105.4 L208.1 105.2 L208.5 105 L208.9 104.9 L209.4 104.7 L209.8 104.6 L210.2 104.4 L210.6 104.2 L211 104.1 L211.5 103.9 L211.9 103.8 L212.3 103.6 L212.7 103.4 L213.1 103.3 L213.6 103.1 L214 103 L214.4 102.8 L214.8 102.6 L215.2 102.5 L215.7 102.3 L216.1 102.2 L216.5 102 L216.9 101.8 L217.3 101.7 L217.8 101.5 L218.2 101.4 L218.6 101.2 L219 101 L219.4 100.9 L219.9 100.7 L220.3 100.6 L220.7 100.4 L221.1 100.2 L221.5 100.1 L222 99.9 L222.4 99.8 L222.8 99.6 L223.2 99.4 L223.6 99.3 L224.1 99.1 L224.5 99 L224.9 98.8 L225.3 98.6 L225.7 98.5 L226.2 98.3 L226.6 98.2 L227 98 L227.4 97.8 L227.8 97.7 L228.3 97.5 L228.7 97.4 L229.1 97.2 L229.5 97 L229.9 96.9 L230.4 96.7 L230.8 96.6 L231.2 96.4 L231.6 96.2 L232 96.1 L232.5 95.9 L232.9 95.8 L233.3 95.6 L233.7 95.4 L234.1 95.3 L234.6 95.1 L235 95 L235.4 94.8 L235.8 94.6 L236.2 94.5 L236.7 94.3 L237.1 94.2 L237.5 94 L237.9 93.8 L238.3 93.7 L238.8 93.5 L239.2 93.4 L239.6 93.2 L240 93 L240.4 92.9 L240.9 92.7 L241.3 92.6 L241.7 92.4 L242.1 92.2 L242.5 92.1 L243 91.9 L243.4 91.8 L243.8 91.6 L244.2 91.4 L244.6 91.3 L245.1 91.1 L245.5 91 L245.9 90.8 L246.3 90.6 L246.7 90.5 L247.2 90.3 L247.6 90.2 L248 90\" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><circle class=\"jmi-hasil\" cx=\"116.8\" cy=\"140\" r=\"5.5\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"195.5\" cy=\"110\" r=\"5.5\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"130\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">y = x + 2</text><text class=\"jmi-hasil\" x=\"130\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">x = -1 atau x = 2</text></svg></div><figcaption>Rajah 1 · Lengkung y = x² dan satu garis lurus. Pilih garis, kira titik persilangan dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "bent1": "<figure class=\"figure jmi\" data-w=\"t2graf\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2graf&quot;,&quot;mod&quot;:&quot;bentuk&quot;,&quot;ns&quot;:[1,2,3,-1,-2],&quot;as&quot;:[-2,-1,1,2],&quot;xs&quot;:[-3,-2,-1,0,1,2,3],&quot;n0&quot;:2,&quot;a0&quot;:1,&quot;xAwal&quot;:2,&quot;xa&quot;:-4,&quot;xb&quot;:4,&quot;ya&quot;:-8,&quot;yb&quot;:8,&quot;kapsyen&quot;:&quot;Rajah 1 · Graf y = ax^n. Tukar kuasa n, pekali a dan nilai x untuk melihat bentuk graf berubah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf y = a x kuasa n; tiga gelongsor menukar kuasa n, pekali a dan nilai x, dan titik pada graf dipaparkan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 232\" role=\"img\" aria-label=\"Rajah graf y = x^2 dengan bentuk parabola terbuka ke atas; titik pada x = 2 dipaparkan\"><text x=\"105.7\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" font-weight=\"700\">y = x</text><text x=\"147.7\" y=\"10\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><rect x=\"38\" y=\"30\" width=\"210\" height=\"140\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"38\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><line x1=\"64.3\" y1=\"30\" x2=\"64.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"64.3\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-3</text><line x1=\"90.5\" y1=\"30\" x2=\"90.5\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"90.5\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><line x1=\"116.8\" y1=\"30\" x2=\"116.8\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"116.8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><text x=\"143\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"169.3\" y1=\"30\" x2=\"169.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"169.3\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"195.5\" y1=\"30\" x2=\"195.5\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"195.5\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"221.8\" y1=\"30\" x2=\"221.8\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"221.8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"248\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"34\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-8</text><line x1=\"38\" y1=\"152.5\" x2=\"248\" y2=\"152.5\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"156.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-6</text><line x1=\"38\" y1=\"135\" x2=\"248\" y2=\"135\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"139\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><line x1=\"38\" y1=\"117.5\" x2=\"248\" y2=\"117.5\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"121.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"34\" y=\"104\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"38\" y1=\"82.5\" x2=\"248\" y2=\"82.5\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"86.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"38\" y1=\"65\" x2=\"248\" y2=\"65\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"69\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"38\" y1=\"47.5\" x2=\"248\" y2=\"47.5\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"34\" y=\"51.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><text x=\"34\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">8</text><line x1=\"38\" y1=\"100\" x2=\"248\" y2=\"100\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"143\" y1=\"30\" x2=\"143\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><path d=\"M68.8 30 L69.1 30.6 L69.5 31.4 L69.9 32.2 L70.3 33 L70.8 33.7 L71.2 34.5 L71.6 35.3 L72 36 L72.4 36.8 L72.9 37.5 L73.3 38.3 L73.7 39 L74.1 39.8 L74.5 40.5 L75 41.2 L75.4 41.9 L75.8 42.7 L76.2 43.4 L76.6 44.1 L77.1 44.8 L77.5 45.5 L77.9 46.2 L78.3 46.9 L78.7 47.6 L79.2 48.2 L79.6 48.9 L80 49.6 L80.4 50.3 L80.8 50.9 L81.3 51.6 L81.7 52.3 L82.1 52.9 L82.5 53.6 L82.9 54.2 L83.4 54.8 L83.8 55.5 L84.2 56.1 L84.6 56.7 L85 57.3 L85.5 58 L85.9 58.6 L86.3 59.2 L86.7 59.8 L87.1 60.4 L87.6 61 L88 61.6 L88.4 62.1 L88.8 62.7 L89.2 63.3 L89.7 63.9 L90.1 64.4 L90.5 65 L90.9 65.6 L91.3 66.1 L91.8 66.7 L92.2 67.2 L92.6 67.7 L93 68.3 L93.4 68.8 L93.9 69.3 L94.3 69.9 L94.7 70.4 L95.1 70.9 L95.5 71.4 L96 71.9 L96.4 72.4 L96.8 72.9 L97.2 73.4 L97.6 73.9 L98.1 74.4 L98.5 74.8 L98.9 75.3 L99.3 75.8 L99.7 76.2 L100.2 76.7 L100.6 77.1 L101 77.6 L101.4 78 L101.8 78.5 L102.3 78.9 L102.7 79.4 L103.1 79.8 L103.5 80.2 L103.9 80.6 L104.4 81 L104.8 81.5 L105.2 81.9 L105.6 82.3 L106 82.7 L106.5 83 L106.9 83.4 L107.3 83.8 L107.7 84.2 L108.1 84.6 L108.6 84.9 L109 85.3 L109.4 85.7 L109.8 86 L110.2 86.4 L110.7 86.7 L111.1 87.1 L111.5 87.4 L111.9 87.7 L112.3 88.1 L112.8 88.4 L113.2 88.7 L113.6 89 L114 89.3 L114.4 89.6 L114.9 89.9 L115.3 90.2 L115.7 90.5 L116.1 90.8 L116.5 91.1 L117 91.4 L117.4 91.7 L117.8 91.9 L118.2 92.2 L118.6 92.5 L119.1 92.7 L119.5 93 L119.9 93.2 L120.3 93.5 L120.7 93.7 L121.2 93.9 L121.6 94.2 L122 94.4 L122.4 94.6 L122.8 94.8 L123.3 95.1 L123.7 95.3 L124.1 95.5 L124.5 95.7 L124.9 95.9 L125.4 96 L125.8 96.2 L126.2 96.4 L126.6 96.6 L127 96.8 L127.5 96.9 L127.9 97.1 L128.3 97.3 L128.7 97.4 L129.1 97.6 L129.6 97.7 L130 97.8 L130.4 98 L130.8 98.1 L131.2 98.2 L131.7 98.4 L132.1 98.5 L132.5 98.6 L132.9 98.7 L133.3 98.8 L133.8 98.9 L134.2 99 L134.6 99.1 L135 99.2 L135.4 99.3 L135.9 99.4 L136.3 99.4 L136.7 99.5 L137.1 99.6 L137.5 99.6 L138 99.7 L138.4 99.7 L138.8 99.8 L139.2 99.8 L139.6 99.9 L140.1 99.9 L140.5 99.9 L140.9 99.9 L141.3 100 L141.7 100 L142.2 100 L142.6 100 L143 100 L143.4 100 L143.8 100 L144.3 100 L144.7 100 L145.1 99.9 L145.5 99.9 L145.9 99.9 L146.4 99.9 L146.8 99.8 L147.2 99.8 L147.6 99.7 L148 99.7 L148.5 99.6 L148.9 99.6 L149.3 99.5 L149.7 99.4 L150.1 99.4 L150.6 99.3 L151 99.2 L151.4 99.1 L151.8 99 L152.2 98.9 L152.7 98.8 L153.1 98.7 L153.5 98.6 L153.9 98.5 L154.3 98.4 L154.8 98.2 L155.2 98.1 L155.6 98 L156 97.8 L156.4 97.7 L156.9 97.6 L157.3 97.4 L157.7 97.3 L158.1 97.1 L158.5 96.9 L159 96.8 L159.4 96.6 L159.8 96.4 L160.2 96.2 L160.6 96 L161.1 95.9 L161.5 95.7 L161.9 95.5 L162.3 95.3 L162.7 95.1 L163.2 94.8 L163.6 94.6 L164 94.4 L164.4 94.2 L164.8 93.9 L165.3 93.7 L165.7 93.5 L166.1 93.2 L166.5 93 L166.9 92.7 L167.4 92.5 L167.8 92.2 L168.2 91.9 L168.6 91.7 L169 91.4 L169.5 91.1 L169.9 90.8 L170.3 90.5 L170.7 90.2 L171.1 89.9 L171.6 89.6 L172 89.3 L172.4 89 L172.8 88.7 L173.2 88.4 L173.7 88.1 L174.1 87.7 L174.5 87.4 L174.9 87.1 L175.3 86.7 L175.8 86.4 L176.2 86 L176.6 85.7 L177 85.3 L177.4 84.9 L177.9 84.6 L178.3 84.2 L178.7 83.8 L179.1 83.4 L179.5 83 L180 82.7 L180.4 82.3 L180.8 81.9 L181.2 81.5 L181.6 81 L182.1 80.6 L182.5 80.2 L182.9 79.8 L183.3 79.4 L183.7 78.9 L184.2 78.5 L184.6 78 L185 77.6 L185.4 77.1 L185.8 76.7 L186.3 76.2 L186.7 75.8 L187.1 75.3 L187.5 74.8 L187.9 74.4 L188.4 73.9 L188.8 73.4 L189.2 72.9 L189.6 72.4 L190 71.9 L190.5 71.4 L190.9 70.9 L191.3 70.4 L191.7 69.9 L192.1 69.3 L192.6 68.8 L193 68.3 L193.4 67.7 L193.8 67.2 L194.2 66.7 L194.7 66.1 L195.1 65.6 L195.5 65 L195.9 64.4 L196.3 63.9 L196.8 63.3 L197.2 62.7 L197.6 62.1 L198 61.6 L198.4 61 L198.9 60.4 L199.3 59.8 L199.7 59.2 L200.1 58.6 L200.5 58 L201 57.3 L201.4 56.7 L201.8 56.1 L202.2 55.5 L202.6 54.8 L203.1 54.2 L203.5 53.6 L203.9 52.9 L204.3 52.3 L204.7 51.6 L205.2 50.9 L205.6 50.3 L206 49.6 L206.4 48.9 L206.8 48.2 L207.3 47.6 L207.7 46.9 L208.1 46.2 L208.5 45.5 L208.9 44.8 L209.4 44.1 L209.8 43.4 L210.2 42.7 L210.6 41.9 L211 41.2 L211.5 40.5 L211.9 39.8 L212.3 39 L212.7 38.3 L213.1 37.5 L213.6 36.8 L214 36 L214.4 35.3 L214.8 34.5 L215.2 33.7 L215.7 33 L216.1 32.2 L216.5 31.4 L216.9 30.6 L217.2 30\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><circle class=\"jmi-hasil\" cx=\"195.5\" cy=\"65\" r=\"5.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"130\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">Bentuk: parabola terbuka ke atas</text><text class=\"jmi-hasil\" x=\"130\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">x = 2,  y = 4</text></svg></div><figcaption>Rajah 1 · Graf y = ax^n. Tukar kuasa n, pekali a dan nilai x untuk melihat bentuk graf berubah.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Mesin Ajaib",
   "sk": "8.1.1 / 8.1.2 Maksud fungsi dan pasangan tertib",
   "lampiran": "mesin1",
   "kadNama": "Mesin Fungsi",
   "kadEm": "⚙️",
   "kadFakta": "Fungsi ibarat mesin: masukkan satu nombor, dan mesin memberi tepat satu nombor keluar. Masukkan nombor yang sama dua kali, dan keluarannya sentiasa sama.",
   "bosKadNama": "Tatatanda f(x)",
   "bosKadEm": "🔤",
   "bosKadFakta": "Tatatanda f(x) dibaca 'f bagi x'. Ia bukan f darab x. f(3) bermaksud nilai output fungsi f apabila inputnya 3.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Apakah maksud fungsi?",
     "p": [
      "Hubungan yang memberi tepat satu output bagi setiap input",
      "Hubungan yang memberi dua output bagi setiap input",
      "Hubungan yang hanya menggunakan nombor bulat positif",
      "Hubungan yang sentiasa membentuk satu garis lurus"
     ],
     "b": 0,
     "u": "Fungsi ialah hubungan yang memberi tepat satu output bagi setiap input. Ia tidak semestinya garis lurus."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan input x = 3. Berapakah output f(x)?",
     "b": 7,
     "tol": 0.01,
     "u": "f(3) = 2(3) + 1 = 7."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan input x = −2. Berapakah output f(x)?",
     "b": -3,
     "tol": 0.01,
     "u": "f(−2) = 2(−2) + 1 = −4 + 1 = −3."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan x = 4. Pasangan tertib (x, f(x)) ialah:",
     "p": [
      "(9, 4)",
      "(4, 9)",
      "(4, 8)",
      "(4, 10)"
     ],
     "b": 1,
     "u": "f(4) = 2(4) + 1 = 9, jadi pasangan tertibnya (4, 9). Input ditulis dahulu, kemudian output."
    },
    {
     "j": "nombor",
     "t": "Diberi f(x) = 3x − 2. Cari nilai f(5).",
     "b": 13,
     "tol": 0.01,
     "u": "f(5) = 3(5) − 2 = 15 − 2 = 13."
    },
    {
     "j": "nombor",
     "t": "Diberi f(x) = x<sup>2</sup> + 1. Cari nilai f(−3).",
     "b": 10,
     "tol": 0.01,
     "u": "f(−3) = (−3)² + 1 = 9 + 1 = 10. Kuasa dua nombor negatif ialah positif."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, input x yang manakah menghasilkan output f(x) = 5?",
     "b": 2,
     "tol": 0.01,
     "u": "2x + 1 = 5, maka 2x = 4 dan x = 2. Semak dalam jadual Rajah 1: f(2) = 5."
    },
    {
     "j": "susun",
     "t": "Susun langkah mencari f(4) bagi f(x) = 2x + 1 menggunakan mesin fungsi.",
     "p": [
      "Masukkan input x = 4 ke dalam mesin",
      "Darabkan input dengan 2 untuk mendapat 8",
      "Tambah 1 untuk mendapat 9",
      "Baca output: f(4) = 9"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Mesin menjalankan operasi mengikut susunan dalam rumus: darab dahulu, kemudian tambah."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang fungsi f(x) = 2x + 1.",
    "p": [
     "f(0) = 1",
     "f(2) = 5",
     "Setiap input mempunyai tepat satu output",
     "f(1) = 4",
     "(3, 8) ialah pasangan tertib bagi f",
     "f(−1) = 1"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "f(0) = 1 dan f(2) = 5 benar, dan fungsi memberi tepat satu output bagi setiap input. f(1) = 3 (bukan 4), f(3) = 7 (jadi (3, 8) bukan pasangan tertib) dan f(−1) = −1 (bukan 1)."
   }
  },
  {
   "n": 2,
   "tempat": "Peta Pemetaan",
   "sk": "8.1.2 Fungsi satu kepada satu dan banyak kepada satu",
   "lampiran": "pem1",
   "kadNama": "Anak Panah",
   "kadEm": "🏹",
   "kadFakta": "Dalam gambar rajah pemetaan, setiap input mesti ada tepat satu anak panah keluar. Dua input boleh berkongsi satu output, tetapi satu input tidak boleh mempunyai dua output.",
   "bosKadNama": "Banyak Kepada Satu",
   "bosKadEm": "🔀",
   "bosKadFakta": "Fungsi y = x² ialah banyak kepada satu: input −3 dan 3 kedua-duanya memberi output 9. Tetapi ia tetap fungsi, kerana setiap input hanya ada satu output.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan hubungan A. Hubungan itu ialah:",
     "p": [
      "Fungsi banyak kepada satu",
      "Bukan fungsi kerana ada input tiada output",
      "Fungsi satu kepada satu",
      "Bukan fungsi kerana satu input mempunyai dua output"
     ],
     "b": 2,
     "u": "Hubungan A: 1→2, 2→4, 3→6. Setiap input ada satu output dan semua output berbeza, jadi ia fungsi satu kepada satu."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan hubungan B. Hubungan itu ialah:",
     "p": [
      "Fungsi satu kepada satu",
      "Bukan fungsi kerana ada input tiada output",
      "Bukan fungsi kerana satu input mempunyai dua output",
      "Fungsi banyak kepada satu"
     ],
     "b": 3,
     "u": "Hubungan B: −2 dan 2 kedua-duanya ke 4, manakala −1 dan 1 kedua-duanya ke 1. Setiap input hanya satu output, tetapi output berkongsi, jadi banyak kepada satu."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, hubungan C bukan fungsi kerana:",
     "p": [
      "Input 1 mempunyai dua output, iaitu 4 dan 5",
      "Input 1 tidak mempunyai output",
      "Semua input dipetakan kepada satu output yang sama",
      "Output lebih banyak daripada input"
     ],
     "b": 0,
     "u": "Fungsi mesti memberi tepat satu output bagi setiap input. Input 1 ada dua anak panah, jadi hubungan C bukan fungsi."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, hubungan D bukan fungsi kerana:",
     "p": [
      "Input 1 mempunyai dua output",
      "Input 3 tidak mempunyai output",
      "Output 5 dan 6 terlalu kecil",
      "Input lebih banyak daripada output"
     ],
     "b": 1,
     "u": "Setiap input mesti ada satu output. Input 3 tiada anak panah, jadi hubungan D bukan fungsi."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1 (hubungan A hingga E), berapakah bilangan hubungan yang ialah fungsi?",
     "b": 3,
     "tol": 0.01,
     "u": "A (satu kepada satu), B (banyak kepada satu) dan E (semua ke 4) ialah fungsi. C dan D bukan fungsi."
    },
    {
     "j": "pilih",
     "t": "Antara pasangan berikut, yang manakah TIDAK boleh menjadi sebahagian daripada satu fungsi yang sama?",
     "p": [
      "(2, 5) dan (3, 5)",
      "(1, 4) dan (2, 6)",
      "(2, 5) dan (2, 7)",
      "(0, 0) dan (1, 1)"
     ],
     "b": 2,
     "u": "Input 2 dipetakan kepada dua output berbeza, 5 dan 7. Fungsi hanya membenarkan satu output bagi setiap input."
    },
    {
     "j": "pilih",
     "t": "Fungsi y = x<sup>2</sup> memberi output 4 bagi input 2 dan juga input −2. Jenis fungsinya ialah:",
     "p": [
      "Satu kepada satu",
      "Satu kepada banyak",
      "Bukan fungsi",
      "Banyak kepada satu"
     ],
     "b": 3,
     "u": "Dua input berbeza berkongsi satu output, jadi banyak kepada satu. Ia tetap fungsi kerana setiap input hanya satu output."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, hubungan A memetakan setiap input kepada dua kali ganda nilainya. Berapakah output bagi input 3?",
     "b": 6,
     "tol": 0.01,
     "u": "Output = 2 × 3 = 6, seperti anak panah 3→6 dalam hubungan A."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA hubungan dalam Rajah 1 yang ialah fungsi.",
    "p": [
     "Hubungan A",
     "Hubungan B",
     "Hubungan E",
     "Hubungan C",
     "Hubungan D",
     "Tiada satu pun"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "A (satu kepada satu), B dan E (banyak kepada satu) ialah fungsi. C ada satu input dengan dua output dan D ada satu input tanpa output."
   }
  },
  {
   "n": 3,
   "tempat": "Meja Jadual",
   "sk": "8.2.1 Jadual nilai dan melukis graf",
   "lampiran": "plot1",
   "kadNama": "Titik Demi Titik",
   "kadEm": "📍",
   "kadFakta": "Graf ialah gambar bagi semua pasangan tertib sesuatu fungsi. Untuk melukisnya, bina jadual nilai, palot titik, kemudian sambung dengan garis atau lengkung yang licin.",
   "bosKadNama": "Lengkung Licin",
   "bosKadEm": "📈",
   "bosKadFakta": "Graf kuasa dua dilukis sebagai lengkung licin, bukan dengan garis-garis patah. Semakin banyak titik dipalot, semakin tepat bentuk lengkung itu.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, apabila x = −3, berapakah nilai y dalam jadual?",
     "b": 9,
     "tol": 0.01,
     "u": "y = (−3)² = 9."
    },
    {
     "j": "nombor",
     "t": "Jika y = x<sup>2</sup>, berapakah nilai y apabila x = 2.5?",
     "b": 6.25,
     "tol": 0.01,
     "u": "y = 2.5 × 2.5 = 6.25."
    },
    {
     "j": "pilih",
     "t": "Bentuk graf y = x<sup>2</sup> ialah:",
     "p": [
      "Lengkung berbentuk U",
      "Garis lurus",
      "Lengkung berbentuk S",
      "Dua cabang yang berasingan"
     ],
     "b": 0,
     "u": "Graf y = x² ialah lengkung berbentuk U yang dipanggil parabola."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, mengapakah graf y = x<sup>2</sup> tidak pernah berada di bawah paksi-x?",
     "p": [
      "Kerana x sentiasa positif",
      "Kuasa dua sebarang nombor tidak pernah negatif",
      "Kerana graf melalui titik (0, 9)",
      "Kerana kecerunan graf sentiasa sifar"
     ],
     "b": 1,
     "u": "Nombor positif dan negatif apabila dikuasa duakan memberi hasil positif atau sifar, jadi y ≥ 0."
    },
    {
     "j": "nombor",
     "t": "Lengkapkan jadual bagi y = 2x − 3. Berapakah y apabila x = 4?",
     "b": 5,
     "tol": 0.01,
     "u": "y = 2(4) − 3 = 8 − 3 = 5."
    },
    {
     "j": "nombor",
     "t": "Lengkapkan jadual bagi y = x<sup>3</sup>. Berapakah y apabila x = −2?",
     "b": -8,
     "tol": 0.01,
     "u": "y = (−2)³ = (−2) × (−2) × (−2) = −8."
    },
    {
     "j": "pilih",
     "t": "Selepas memalot semua titik daripada jadual nilai, langkah seterusnya ialah:",
     "p": [
      "Padamkan titik dan mulakan semula",
      "Sambungkan titik dengan garis putus-putus sahaja",
      "Sambungkan titik dengan garis atau lengkung yang licin",
      "Tambah titik baharu di luar skala graf"
     ],
     "b": 2,
     "u": "Selepas titik dipalot, ia disambung dengan garis lurus atau lengkung yang licin untuk membentuk graf."
    },
    {
     "j": "susun",
     "t": "Susun langkah melukis graf y = x² menggunakan skala yang diberi.",
     "p": [
      "Pilih nilai x dan bina jadual nilai",
      "Kira nilai y bagi setiap nilai x",
      "Palot titik (x, y) pada satah Cartes",
      "Sambung semua titik dengan lengkung licin"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Bina jadual dahulu, kira y, palot titik, dan akhir sekali sambungkan titik."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Titik (a, 16) terletak pada graf y = x<sup>2</sup> dengan a positif. Berapakah nilai a?",
    "b": 4,
    "tol": 0.01,
    "u": "a² = 16, maka a = 4 (nilai positif). Nilai −4 juga memberi 16, tetapi soalan meminta a positif."
   }
  },
  {
   "n": 4,
   "tempat": "Padang Bola",
   "sk": "8.2.2 Mentafsir graf fungsi",
   "lampiran": "sit1",
   "kadNama": "Bola Melambung",
   "kadEm": "⚽",
   "kadFakta": "Apabila bola dilambung ke atas, tingginya naik ke puncak kemudian turun semula. Graf tinggi melawan masa ialah lengkung berbentuk ∩, iaitu parabola.",
   "bosKadNama": "Simetri Lengkung",
   "bosKadEm": "🪞",
   "bosKadFakta": "Lengkung parabola bersimetri pada paksi yang melalui puncaknya. Bola berada pada tinggi yang sama semasa naik dan semasa turun, pada selang masa yang sama dari puncak.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah tinggi bola (m) pada masa t = 1 saat?",
     "b": 15,
     "tol": 0.01,
     "suf": "m",
     "u": "h = 20(1) − 5(1)² = 20 − 5 = 15 m."
    },
    {
     "j": "nombor",
     "t": "Tambang teksi J = 3 + 2d (RM), dengan d ialah jarak dalam km. Berapakah tambang bagi perjalanan 8 km (dalam RM)?",
     "b": 19,
     "tol": 0.01,
     "u": "J = 3 + 2(8) = 3 + 16 = RM19."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pada masa berapakah (saat) bola mencapai tinggi maksimum?",
     "b": 2,
     "tol": 0.01,
     "suf": "saat",
     "u": "Puncak lengkung berada di tengah antara t = 0 dan t = 4, iaitu t = 2 saat."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah tinggi maksimum bola (m)?",
     "b": 20,
     "tol": 0.01,
     "suf": "m",
     "u": "Pada t = 2, h = 20(2) − 5(2)² = 40 − 20 = 20 m."
    },
    {
     "j": "pilih",
     "t": "Mengapakah graf tinggi bola melawan masa berbentuk lengkung dan bukan garis lurus?",
     "p": [
      "Kerana bola sentiasa bergerak dengan laju seragam",
      "Kerana masa sentiasa berkurang apabila bola naik",
      "Kerana tinggi bola sama pada setiap saat",
      "Kerana h bergantung pada t dan t kuasa dua"
     ],
     "b": 3,
     "u": "Rumus h = 20t − 5t² mengandungi t², jadi graf ialah lengkung. Garis lurus hanya untuk fungsi linear."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pada masa berapakah (saat) bola menyentuh tanah semula selepas dilambung?",
     "b": 4,
     "tol": 0.01,
     "suf": "saat",
     "u": "h = 0 apabila 20t − 5t² = 0, iaitu 5t(4 − t) = 0. Selain t = 0, t = 4 saat."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, apabila t bertambah daripada 2 saat kepada 4 saat, bola:",
     "p": [
      "Bergerak turun ke arah tanah",
      "Bergerak naik ke arah puncak",
      "Berhenti pada tinggi yang tetap",
      "Menjadi semakin laju ke atas"
     ],
     "b": 0,
     "u": "Selepas puncak pada t = 2, tinggi berkurang. Graf menurun daripada 20 m kepada 0 m."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah tinggi bola (m) pada t = 3.5 saat, kepada 2 tempat perpuluhan?",
     "b": 8.75,
     "tol": 0.01,
     "suf": "m",
     "u": "h = 20(3.5) − 5(3.5)² = 70 − 61.25 = 8.75 m."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dalam Rajah 1, bola berada pada tinggi 15 m pada t = 1 saat. Pada masa berapakah (saat) bola berada pada tinggi 15 m sekali lagi?",
    "b": 3,
    "tol": 0.01,
    "suf": "saat",
    "u": "Lengkung bersimetri pada t = 2. Masa 1 saat sebelum puncak ialah t = 1, jadi 1 saat selepas puncak ialah t = 3. Semak: 20(3) − 5(9) = 15."
   }
  },
  {
   "n": 5,
   "tempat": "Simpang Persilangan",
   "sk": "8.2.3 Titik persilangan dua graf fungsi",
   "lampiran": "sil1",
   "kadNama": "Titik Temu",
   "kadEm": "🚦",
   "kadFakta": "Titik persilangan dua graf ialah pasangan tertib yang memenuhi kedua-dua fungsi serentak. Koordinat x titik itu ialah penyelesaian bagi persamaan apabila dua fungsi disamakan.",
   "bosKadNama": "Dua Persamaan",
   "bosKadEm": "✌️",
   "bosKadFakta": "Apabila garis dan lengkung bersilang di dua titik, persamaannya mempunyai dua penyelesaian. Jika tiada persilangan, persamaan tiada penyelesaian nyata.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih garis y = 4 dan lengkung y = x<sup>2</sup>. Berapakah nilai x positif pada titik persilangan?",
     "b": 2,
     "tol": 0.01,
     "u": "x² = 4, maka x = 2 atau x = −2. Nilai positif ialah 2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih garis y = x + 2. Berapakah nilai x positif pada titik persilangan?",
     "b": 2,
     "tol": 0.01,
     "u": "x² = x + 2, maka x² − x − 2 = 0, iaitu (x − 2)(x + 1) = 0. Nilai positif ialah x = 2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih garis y = x + 2. Berapakah nilai x negatif pada titik persilangan?",
     "b": -1,
     "tol": 0.01,
     "u": "Daripada (x − 2)(x + 1) = 0, nilai negatif ialah x = −1."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih garis y = 2x + 3. Berapakah nilai y pada titik persilangan yang mempunyai x positif?",
     "b": 9,
     "tol": 0.01,
     "u": "x² = 2x + 3, maka (x − 3)(x + 1) = 0. Nilai positif x = 3, jadi y = 3² = 9."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih garis y = −1. Bilangan titik persilangan dengan lengkung y = x<sup>2</sup> ialah:",
     "p": [
      "Satu titik persilangan",
      "Tiada titik persilangan",
      "Dua titik persilangan",
      "Tiga titik persilangan"
     ],
     "b": 1,
     "u": "x² tidak pernah negatif, jadi lengkung tidak pernah mencapai y = −1. Tiada titik persilangan."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, garis y = 0 hanya menyentuh lengkung y = x<sup>2</sup> pada satu titik. Titik itu ialah:",
     "p": [
      "(1, 1)",
      "(0, 1)",
      "(0, 0)",
      "(1, 0)"
     ],
     "b": 2,
     "u": "x² = 0 memberi x = 0 sahaja, dan y = 0. Titik sentuhan ialah (0, 0)."
    },
    {
     "j": "pilih",
     "t": "Titik persilangan graf y = x<sup>2</sup> dan y = x + 2 menyelesaikan persamaan:",
     "p": [
      "x<sup>2</sup> = 2x",
      "x + 2 = 0",
      "x<sup>2</sup> + 2 = x",
      "x<sup>2</sup> = x + 2"
     ],
     "b": 3,
     "u": "Pada titik persilangan, nilai y bagi kedua-dua fungsi sama, jadi x² = x + 2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih garis y = −x + 6. Berapakah hasil tambah kedua-dua nilai x pada titik persilangan?",
     "b": -1,
     "tol": 0.01,
     "u": "x² = −x + 6, maka (x − 2)(x + 3) = 0, jadi x = 2 dan x = −3. Hasil tambah = 2 + (−3) = −1."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Garis y = k bersilang dengan lengkung y = x<sup>2</sup> pada dua titik yang berjarak 6 unit secara mengufuk. Berapakah nilai k?",
    "b": 9,
    "tol": 0.01,
    "u": "Dua titik itu bersimetri di sekitar paksi-y, jadi x = 3 dan x = −3. Maka k = 3² = 9."
   }
  },
  {
   "n": 6,
   "tempat": "Studio Reka",
   "sk": "8.1.2 / 8.2.1 / 8.2.2 Fungsi y = ax^n dengan n = −2, −1, 1, 2, 3",
   "lampiran": "bent1",
   "kadNama": "Keluarga Fungsi",
   "kadEm": "👨‍👩‍👧",
   "kadFakta": "Fungsi y = ax^n ialah satu keluarga. Kuasa n menentukan bentuk graf, manakala pekali a menentukan sama ada graf terbuka ke atas atau ke bawah dan seberapa curam ia.",
   "bosKadNama": "Sifar Terlarang",
   "bosKadEm": "🚫",
   "bosKadFakta": "Bagi fungsi seperti y = 2/x, nilai x = 0 tidak dibenarkan kerana pembahagian dengan sifar tidak tertakrif. Graf itu terputus pada x = 0.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan n = 2 dan a = −1. Graf y = −x² terbuka ke:",
     "p": [
      "Bawah",
      "Atas",
      "Kiri",
      "Kanan"
     ],
     "b": 0,
     "u": "Apabila a negatif dan n = 2, lengkung ∩ terbuka ke bawah."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan n = −1 dan a = 2. Kedua-dua cabang graf berada di sukuan:",
     "p": [
      "2 dan 4",
      "1 dan 3",
      "1 dan 2",
      "3 dan 4"
     ],
     "b": 1,
     "u": "Bagi y = 2/x, x dan y sentiasa sama tanda, jadi cabang berada dalam sukuan 1 dan 3."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan n = 3 dan a = 1. Berapakah nilai y apabila x = −2?",
     "b": -8,
     "tol": 0.01,
     "u": "y = (−2)³ = −8."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan n = −1 dan a = 2. Berapakah nilai y apabila x = 2?",
     "b": 1,
     "tol": 0.01,
     "u": "y = 2/x = 2/2 = 1."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan n = −1. Mengapakah graf tiada titik pada x = 0?",
     "p": [
      "Kerana y sentiasa sama dengan sifar",
      "Kerana graf berhenti pada x = 0",
      "Pembahagian dengan sifar tidak tertakrif",
      "Kerana x negatif tidak dibenarkan"
     ],
     "b": 2,
     "u": "y = a/x. Apabila x = 0, pembahagian dengan sifar tidak tertakrif, jadi tiada titik dan graf terputus."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan n = 2 dan a = 2. Berapakah nilai y apabila x = −3?",
     "b": 18,
     "tol": 0.01,
     "u": "y = 2(−3)² = 2 × 9 = 18."
    },
    {
     "j": "pilih",
     "t": "Fungsi manakah yang grafnya melalui (0, 0) dan (1, 2), dan ialah garis lurus?",
     "p": [
      "y = 2x²",
      "y = 2/x",
      "y = x³ + 1",
      "y = 2x"
     ],
     "b": 3,
     "u": "y = 2x melalui (0, 0) dan (1, 2) dan ialah garis lurus. y = 2x² juga melalui kedua-dua titik tetapi melengkung. y = 2/x tidak tertakrif pada x = 0, dan y = x³ + 1 tidak melalui (0, 0)."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan n = 3 dan a = −2. Berapakah nilai y apabila x = 2?",
     "b": -16,
     "tol": 0.01,
     "u": "y = −2(2)³ = −2 × 8 = −16."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu situasi harian yang boleh diwakili oleh fungsi berbentuk y = ax^n, contohnya luas petak, isi padu kubus atau kos berkadar, dan terangkan graf fungsi itu.",
    "arahan": "Nyatakan situasi, tulis fungsinya, bina jadual nilai sekurang-kurangnya lima titik, terangkan bentuk graf dan tafsirkan satu titik pada graf dalam konteks situasi awak.",
    "u": "Jawapan TP6 yang kukuh memilih situasi yang munasabah, menulis fungsi yang betul, membina jadual nilai dengan pengiraan tepat, menerangkan bentuk graf mengikut kuasa n dan pekali a, serta mentafsir titik pada graf dalam konteks."
   }
  }
 ]
};
