/* Bank soalan — Matematik Ting. 1 · Bab 8 Garis dan Sudut.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m1b8.js
   kemudian jalankan: node bina.js m1b8

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m1b8"] =
{
 "id": "m1b8",
 "tingkatan": 1,
 "kod": "8.0 Garis dan Sudut",
 "tajuk": "Pusat Sudut",
 "subtajuk": "Matematik Ting. 1 · Bab 8 Garis dan Sudut",
 "spi": [
  "Mempamerkan pengetahuan asas tentang garis dan sudut.",
  "Mempamerkan kefahaman tentang garis dan sudut.",
  "Mengaplikasikan kefahaman tentang garis dan sudut untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang garis dan sudut dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang garis dan sudut dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang garis dan sudut dalam konteks penyelesaian masalah bukan rutin."
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
  "1": "{n} dapat mengenal jenis sudut, sudut refleks dan putaran lengkap serta kekongruenan tembereng garis. Langkah seterusnya ialah memahami hubungan antara pasangan sudut.",
  "2": "{n} memahami sudut pelengkap, penggenap dan konjugat serta dapat menerangkan sifatnya. Perlu lebih latihan mencari nilai sudut sebelum bergerak ke TP3.",
  "3": "{n} boleh membina garis dan sudut menggunakan jangka lukis serta menerangkan langkah pembinaannya untuk tugasan mudah. Galakkan menerangkan sebab setiap langkah dilakukan.",
  "4": "{n} mampu menyelesaikan masalah rutin yang mudah tentang sudut pada garis bersilang, termasuk sudut bertentang bucu dan bersebelahan. Seterusnya latih penggunaan persamaan algebra pada sudut.",
  "5": "{n} dapat menyelesaikan masalah kompleks yang melibatkan garis selari dan garis rentas lintang serta menentukan sama ada dua garis selari. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya mereka dan menyelesaikan masalah bukan rutin yang melibatkan sudut dongak, sudut tunduk dan garis selari. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Garis dan Sudut. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menamakan jenis sudut dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "sud1": "<figure class=\"figure jmi\" data-w=\"t1sudut\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1sudut&quot;,&quot;mod&quot;:&quot;protraktor&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan gelongsor untuk menukar sudut θ. Lihat jenis sudut dan sudut konjugatnya.&quot;,&quot;alt&quot;:&quot;Rajah interaktif protraktor; gelongsor menukar sudut dari 0 hingga 360 darjah dan menunjukkan jenis sudut&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 232\" role=\"img\" aria-label=\"Rajah protraktor interaktif dengan sudut 60 darjah, jenis tirus\"><circle cx=\"100\" cy=\"92\" r=\"74\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></circle><line x1=\"174\" y1=\"92\" x2=\"165\" y2=\"92\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-linecap=\"round\"></line><line x1=\"164.1\" y1=\"55\" x2=\"159.8\" y2=\"57.5\" stroke=\"var(--ink3)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><line x1=\"137\" y1=\"27.9\" x2=\"134.5\" y2=\"32.2\" stroke=\"var(--ink3)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><line x1=\"100\" y1=\"18\" x2=\"100\" y2=\"27\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-linecap=\"round\"></line><line x1=\"63\" y1=\"27.9\" x2=\"65.5\" y2=\"32.2\" stroke=\"var(--ink3)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><line x1=\"35.9\" y1=\"55\" x2=\"40.2\" y2=\"57.5\" stroke=\"var(--ink3)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><line x1=\"26\" y1=\"92\" x2=\"35\" y2=\"92\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-linecap=\"round\"></line><line x1=\"35.9\" y1=\"129\" x2=\"40.2\" y2=\"126.5\" stroke=\"var(--ink3)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><line x1=\"63\" y1=\"156.1\" x2=\"65.5\" y2=\"151.8\" stroke=\"var(--ink3)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><line x1=\"100\" y1=\"166\" x2=\"100\" y2=\"157\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-linecap=\"round\"></line><line x1=\"137\" y1=\"156.1\" x2=\"134.5\" y2=\"151.8\" stroke=\"var(--ink3)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><line x1=\"164.1\" y1=\"129\" x2=\"159.8\" y2=\"126.5\" stroke=\"var(--ink3)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><path d=\"M100 92 L134 92 A34 34 0 0 0 117 62.6 Z\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><line x1=\"100\" y1=\"92\" x2=\"188\" y2=\"92\" stroke=\"var(--teal)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line x1=\"100\" y1=\"92\" x2=\"144\" y2=\"15.8\" stroke=\"var(--vena)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><circle cx=\"100\" cy=\"92\" r=\"3.5\" fill=\"var(--ink)\" stroke=\"none\" stroke-width=\"1.5\"></circle><text x=\"143.3\" y=\"71\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">θ</text><text x=\"8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">Sudut θ = 60°</text><text class=\"jmi-hasil\" x=\"8\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Jenis: tirus</text><text class=\"jmi-hasil\" x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Sudut konjugat = 300°</text></svg></div><figcaption>Rajah 1 · Gerakkan gelongsor untuk menukar sudut θ. Lihat jenis sudut dan sudut konjugatnya.</figcaption></figure>",
  "sud2": "<figure class=\"figure jmi\" data-w=\"t1sudut\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1sudut&quot;,&quot;mod&quot;:&quot;pasangan&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih jenis pasangan sudut, kemudian gerakkan sudut a. Perhatikan sudut b.&quot;,&quot;alt&quot;:&quot;Rajah interaktif sudut pelengkap, penggenap dan konjugat; gelongsor menukar sudut a dan sudut b dikira&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 234\" role=\"img\" aria-label=\"Rajah sudut penggenap a dan b dengan a = 30 darjah dan a tambah b sama dengan 180 darjah\"><path d=\"M130 140 L180 140 A50 50 0 0 0 173.3 115 Z\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><path d=\"M130 140 L173.3 115 A50 50 0 0 0 80 140 Z\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><line x1=\"18\" y1=\"140\" x2=\"242\" y2=\"140\" stroke=\"var(--ink2)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line x1=\"130\" y1=\"140\" x2=\"220.1\" y2=\"88\" stroke=\"var(--vena)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><text x=\"195.7\" y=\"126.4\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">a</text><text class=\"jmi-hasil\" x=\"112.4\" y=\"78.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">b</text><circle cx=\"130\" cy=\"140\" r=\"3.5\" fill=\"var(--ink)\" stroke=\"none\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"188\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">a = 30°</text><text class=\"jmi-hasil\" x=\"8\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">b = 180° − 30° = 150°</text><text x=\"8\" y=\"224\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Sudut penggenap: a + b = 180°</text></svg></div><figcaption>Rajah 1 · Pilih jenis pasangan sudut, kemudian gerakkan sudut a. Perhatikan sudut b.</figcaption></figure>",
  "sud3": "<figure class=\"figure jmi\" data-w=\"t1sudut\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1sudut&quot;,&quot;mod&quot;:&quot;bina&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan gelongsor langkah untuk melihat pembinaan dengan jangka lukis. AB = 8 cm dan sudut AOB = 70°.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pembinaan jangka lukis bagi pembahagi dua sama serenjang dan pembahagi dua sama sudut, langkah demi langkah&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 222\" role=\"img\" aria-label=\"Rajah pembinaan jangka lukis: pembahagi dua sama serenjang, awal\"><line x1=\"45\" y1=\"92\" x2=\"215\" y2=\"92\" stroke=\"var(--ink2)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><circle cx=\"45\" cy=\"92\" r=\"3.5\" fill=\"var(--ink)\" stroke=\"none\" stroke-width=\"1.5\"></circle><circle cx=\"215\" cy=\"92\" r=\"3.5\" fill=\"var(--ink)\" stroke=\"none\" stroke-width=\"1.5\"></circle><text x=\"41\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">A</text><text x=\"211\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">B</text><text x=\"4\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Diberi tembereng garis AB.</text><text x=\"4\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Panjang AB = 8 cm</text></svg></div><figcaption>Rajah 1 · Gerakkan gelongsor langkah untuk melihat pembinaan dengan jangka lukis. AB = 8 cm dan sudut AOB = 70°.</figcaption></figure>",
  "sud4": "<figure class=\"figure jmi cabar\" data-w=\"t1sudut\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1sudut&quot;,&quot;mod&quot;:&quot;bersilang&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Dua garis bersilang. Kira sudut lain dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif dua garis bersilang dengan empat sudut a, b, c dan d&quot;,&quot;i&quot;:3,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 248\" role=\"img\" aria-label=\"Rajah dua garis bersilang dengan sudut a 60 darjah; sudut bertentang bucu sama dan sudut bersebelahan berjumlah 180 darjah\"><path d=\"M130 88 L162 88 A32 32 0 0 0 146 60.3 Z\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><path d=\"M130 88 L146 60.3 A32 32 0 0 0 98 88 Z\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><path d=\"M130 88 L98 88 A32 32 0 0 0 114 115.7 Z\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><path d=\"M130 88 L114 115.7 A32 32 0 0 0 162 88 Z\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><line x1=\"235\" y1=\"88\" x2=\"25\" y2=\"88\" stroke=\"var(--ink2)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line x1=\"169\" y1=\"20.5\" x2=\"91\" y2=\"155.5\" stroke=\"var(--vena)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><text x=\"173.3\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">a</text><text class=\"jmi-hasil\" x=\"105\" y=\"48.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">b</text><text class=\"jmi-hasil\" x=\"86.7\" y=\"117\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">c</text><text class=\"jmi-hasil\" x=\"155\" y=\"135.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">d</text><circle cx=\"130\" cy=\"88\" r=\"3.5\" fill=\"var(--ink)\" stroke=\"none\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">a = 60° (diberi)</text><text class=\"jmi-hasil\" x=\"8\" y=\"202\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">c = a = 60° (bertentang bucu)</text><text class=\"jmi-hasil\" x=\"8\" y=\"220\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">b = d = 180° − 60° = 120°</text><text x=\"8\" y=\"238\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">a + b = 180° (sudut bersebelahan)</text></svg></div><figcaption>Rajah 1 · Dua garis bersilang. Kira sudut lain dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "sud5": "<figure class=\"figure jmi cabar\" data-w=\"t1sudut\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1sudut&quot;,&quot;mod&quot;:&quot;selari&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Garis selari dipotong garis rentas lintang. Kira sudut hijau dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif dua garis dipotong garis rentas lintang dengan sudut sepadan, selang-seli atau pedalaman&quot;,&quot;condong&quot;:true,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 250\" role=\"img\" aria-label=\"Rajah dua garis dipotong garis rentas lintang; sudut sepadan bernilai 60 dan 60 darjah\"><path d=\"M150.8 52 L174.8 52 A24 24 0 0 0 162.8 31.2 Z\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><path d=\"M109.2 124 L133.2 124 A24 24 0 0 0 121.2 103.2 Z\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><line x1=\"18\" y1=\"52\" x2=\"242\" y2=\"52\" stroke=\"var(--ink2)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line x1=\"18\" y1=\"124\" x2=\"242\" y2=\"124\" stroke=\"var(--ink2)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line x1=\"168\" y1=\"22.2\" x2=\"92\" y2=\"153.8\" stroke=\"var(--vena)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><path d=\"M227 47 L232 52 L227 57\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><path d=\"M227 119 L232 124 L227 129\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><circle cx=\"150.8\" cy=\"52\" r=\"3.5\" fill=\"var(--ink)\" stroke=\"none\" stroke-width=\"1.5\"></circle><circle cx=\"109.2\" cy=\"124\" r=\"3.5\" fill=\"var(--ink)\" stroke=\"none\" stroke-width=\"1.5\"></circle><text x=\"178.5\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">60°</text><text class=\"jmi-hasil\" x=\"136.9\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">60°</text><text x=\"8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">Sudut sepadan</text><text x=\"8\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Sudut merah = 60°</text><text class=\"jmi-hasil\" x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Sudut hijau = 60°</text><text class=\"jmi-hasil\" x=\"8\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">Sama, jadi garis selari</text></svg></div><figcaption>Rajah 1 · Garis selari dipotong garis rentas lintang. Kira sudut hijau dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "sud6": "<figure class=\"figure jmi\" data-w=\"t1sudut\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1sudut&quot;,&quot;mod&quot;:&quot;dongak&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · P ialah pemerhati dan T ialah puncak menara. Gerakkan sudut dongak dan lihat sudut tunduk dari T.&quot;,&quot;alt&quot;:&quot;Rajah interaktif sudut dongak dari pemerhati P ke puncak T dan sudut tunduk yang sama dari T ke P&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 262\" role=\"img\" aria-label=\"Rajah sudut dongak 30 darjah dari P ke puncak T dan sudut tunduk yang sama dari T ke P\"><line x1=\"8\" y1=\"184\" x2=\"252\" y2=\"184\" stroke=\"var(--ink3)\" stroke-width=\"2\" stroke-linecap=\"round\"></line><rect x=\"144\" y=\"85.3\" width=\"16\" height=\"98.7\" rx=\"0\" fill=\"var(--surface2)\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></rect><path d=\"M32 150 L74 150 A42 42 0 0 0 68.4 129 Z\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><path class=\"jmi-hasil\" d=\"M144 85.3 L102 85.3 A42 42 0 0 0 107.6 106.3 Z\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><line x1=\"32\" y1=\"150\" x2=\"196\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-dasharray=\"5 4\"></line><line x1=\"32\" y1=\"85.3\" x2=\"144\" y2=\"85.3\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-dasharray=\"5 4\"></line><line x1=\"32\" y1=\"150\" x2=\"144\" y2=\"85.3\" stroke=\"var(--vena)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><circle cx=\"32\" cy=\"151\" r=\"6\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.6\"></circle><line x1=\"32\" y1=\"157\" x2=\"32\" y2=\"172\" stroke=\"var(--ink)\" stroke-width=\"2\" stroke-linecap=\"round\"></line><line x1=\"32\" y1=\"172\" x2=\"26\" y2=\"184\" stroke=\"var(--ink)\" stroke-width=\"2\" stroke-linecap=\"round\"></line><line x1=\"32\" y1=\"172\" x2=\"38\" y2=\"184\" stroke=\"var(--ink)\" stroke-width=\"2\" stroke-linecap=\"round\"></line><circle cx=\"144\" cy=\"85.3\" r=\"4\" fill=\"var(--vena)\" stroke=\"none\" stroke-width=\"1.5\"></circle><text x=\"29\" y=\"200\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">P</text><text x=\"147\" y=\"200\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">T</text><text x=\"8\" y=\"216\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Sudut dongak dari P = 30°</text><text class=\"jmi-hasil\" x=\"8\" y=\"234\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Sudut tunduk dari T = 30°</text><text class=\"jmi-hasil\" x=\"8\" y=\"252\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Sama kerana sudut selang-seli</text></svg></div><figcaption>Rajah 1 · P ialah pemerhati dan T ialah puncak menara. Gerakkan sudut dongak dan lihat sudut tunduk dari T.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Padang Protraktor",
   "sk": "8.1.1 / 8.1.2 / 8.1.3 Kekongruenan, jenis sudut, sudut refleks dan putaran lengkap",
   "lampiran": "sud1",
   "kadNama": "Protraktor",
   "kadEm": "📐",
   "kadFakta": "Protraktor separuh bulatan mengukur sehingga 180°. Untuk sudut refleks, ukur sudut yang tinggal daripada 360° dan tolak.",
   "bosKadNama": "Putaran Penuh",
   "bosKadEm": "🔄",
   "bosKadFakta": "Satu putaran lengkap ialah 360°. Angka 360 dipilih sebab ia boleh dibahagi dengan banyak nombor, jadi senang dibahagi sama rata.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dua tembereng garis yang mempunyai panjang yang sama dikatakan:",
     "p": [
      "Kongruen",
      "Selari",
      "Serenjang",
      "Bersilang"
     ],
     "b": 0,
     "u": "Kongruen bermaksud sama saiz. Dua tembereng garis kongruen jika panjangnya sama."
    },
    {
     "j": "pilih",
     "t": "Sudut yang tepat 90° dipanggil sudut:",
     "p": [
      "Tirus",
      "Tegak",
      "Cakah",
      "Refleks"
     ],
     "b": 1,
     "u": "Sudut tegak ialah 90°, seperti bucu buku."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan sudut 210°. Berapakah sudut konjugatnya?",
     "b": 150,
     "tol": 0.01,
     "suf": "°",
     "u": "Sudut konjugat = 360° − 210° = 150°."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan sudut 135°. Jenis sudut itu ialah:",
     "p": [
      "Tirus",
      "Tegak",
      "Cakah",
      "Refleks"
     ],
     "b": 2,
     "u": "135° lebih daripada 90° tetapi kurang daripada 180°, jadi ia sudut cakah."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan sudut 300°. Jenis sudut itu ialah:",
     "p": [
      "Cakah",
      "Lurus",
      "Tirus",
      "Refleks"
     ],
     "b": 3,
     "u": "Sudut lebih daripada 180° tetapi kurang daripada 360° ialah sudut refleks."
    },
    {
     "j": "pilih",
     "t": "Satu putaran lengkap di sekeliling satu titik ialah:",
     "p": [
      "360°",
      "180°",
      "90°",
      "270°"
     ],
     "b": 0,
     "u": "Putaran lengkap = 360°."
    },
    {
     "j": "pilih",
     "t": "Sudut pada satu garis lurus berjumlah:",
     "p": [
      "90°",
      "180°",
      "360°",
      "270°"
     ],
     "b": 1,
     "u": "Garis lurus ialah separuh putaran, iaitu 180°."
    },
    {
     "j": "susun",
     "t": "Susun sudut berikut dari yang paling kecil kepada yang paling besar.",
     "p": [
      "30° (sudut tirus)",
      "90° (sudut tegak)",
      "120° (sudut cakah)",
      "250° (sudut refleks)"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Tirus < tegak < cakah < lurus < refleks < putaran lengkap."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang jenis sudut.",
    "p": [
     "Sudut refleks lebih besar daripada 180°",
     "Sudut cakah terletak antara 90° dan 180°",
     "Sudut tirus kurang daripada 90°",
     "Sudut lurus bernilai 90°",
     "Sudut tegak lebih besar daripada sudut cakah",
     "Sudut putaran lengkap bernilai 180°"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Sudut lurus ialah 180°, sudut tegak lebih kecil daripada sudut cakah, dan putaran lengkap ialah 360°."
   }
  },
  {
   "n": 2,
   "tempat": "Kedai Pasangan",
   "sk": "8.1.4 / 8.1.5 Sudut pelengkap, penggenap dan konjugat",
   "lampiran": "sud2",
   "kadNama": "Sudut Pelengkap",
   "kadEm": "🤝",
   "kadFakta": "Dua sudut pelengkap bergabung menjadi sudut tegak, macam dua kepingan yang melengkapkan sudut bucu buku.",
   "bosKadNama": "Sudut Konjugat",
   "bosKadEm": "🔗",
   "bosKadFakta": "Sudut konjugat ialah dua sudut yang bergabung menjadi satu putaran penuh 360°. Satu daripadanya biasanya sudut refleks.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dua sudut yang berjumlah 90° dipanggil sudut:",
     "p": [
      "Penggenap",
      "Konjugat",
      "Pelengkap",
      "Bertentang bucu"
     ],
     "b": 2,
     "u": "Pelengkap: jumlah 90°."
    },
    {
     "j": "pilih",
     "t": "Dua sudut yang berjumlah 180° dipanggil sudut:",
     "p": [
      "Pelengkap",
      "Konjugat",
      "Bertentang bucu",
      "Penggenap"
     ],
     "b": 3,
     "u": "Penggenap: jumlah 180°."
    },
    {
     "j": "pilih",
     "t": "Dua sudut yang berjumlah 360° dipanggil sudut:",
     "p": [
      "Konjugat",
      "Pelengkap",
      "Penggenap",
      "Bersebelahan"
     ],
     "b": 0,
     "u": "Konjugat: jumlah 360°."
    },
    {
     "j": "nombor",
     "t": "Berapakah sudut pelengkap bagi 35°?",
     "b": 55,
     "tol": 0.01,
     "suf": "°",
     "u": "90° − 35° = 55°."
    },
    {
     "j": "nombor",
     "t": "Berapakah sudut penggenap bagi 128°?",
     "b": 52,
     "tol": 0.01,
     "suf": "°",
     "u": "180° − 128° = 52°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih sudut konjugat dan tetapkan a = 80°. Berapakah sudut b?",
     "b": 280,
     "tol": 0.01,
     "suf": "°",
     "u": "b = 360° − 80° = 280°."
    },
    {
     "j": "nombor",
     "t": "Berapakah sudut konjugat bagi 250°?",
     "b": 110,
     "tol": 0.01,
     "suf": "°",
     "u": "360° − 250° = 110°."
    },
    {
     "j": "pilih",
     "t": "Sudut 40° dan 50° ialah pasangan sudut:",
     "p": [
      "Penggenap",
      "Pelengkap",
      "Konjugat",
      "Bukan pasangan istimewa"
     ],
     "b": 1,
     "u": "40° + 50° = 90°, jadi keduanya sudut pelengkap."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dua sudut pelengkap. Satu sudut ialah dua kali ganda sudut yang lain. Berapakah sudut yang lebih besar?",
    "b": 60,
    "tol": 0.01,
    "suf": "°",
    "u": "Katakan sudut kecil x. x + 2x = 90°, maka x = 30° dan sudut besar = 60°."
   }
  },
  {
   "n": 3,
   "tempat": "Bengkel Jangka Lukis",
   "sk": "8.1.6 / 8.1.7 Pembinaan garis dan sudut dengan rasional langkah",
   "lampiran": "sud3",
   "kadNama": "Jangka Lukis",
   "kadEm": "🧭",
   "kadFakta": "Jangka lukis dan pembaris tanpa skala sudah cukup untuk membina banyak bentuk geometri. Ahli matematik Yunani purba melakukannya beribu tahun lalu.",
   "bosKadNama": "Sudut 60°",
   "bosKadEm": "🔺",
   "bosKadFakta": "Sudut 60° dibina dengan jangka lukis dan pembaris sahaja kerana ia sudut dalam segi tiga sama sisi.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Semasa membina pembahagi dua sama serenjang bagi AB, jejari lengkok yang digunakan mesti:",
     "p": [
      "Kurang daripada separuh panjang AB",
      "Sama dengan panjang AB sahaja",
      "Lebih daripada separuh panjang AB",
      "Sama dengan separuh panjang AB"
     ],
     "b": 2,
     "u": "Jika jejari kurang daripada separuh AB, dua lengkok tidak akan bersilang."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih pembahagi dua sama serenjang dan langkah 3. Sudut antara AB dengan garis binaan di M ialah:",
     "p": [
      "45°",
      "60°",
      "180°",
      "90°"
     ],
     "b": 3,
     "u": "Garis itu serenjang dengan AB, jadi sudutnya 90°."
    },
    {
     "j": "pilih",
     "t": "Alat yang cukup untuk membina pembahagi dua sama sudut ialah:",
     "p": [
      "Jangka lukis dan alat tepi lurus",
      "Protraktor sahaja",
      "Pembaris bergraf sahaja",
      "Set segi tiga sahaja"
     ],
     "b": 0,
     "u": "Pembinaan geometri hanya memerlukan jangka lukis dan alat tepi lurus."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih pembahagi dua sama serenjang dan langkah 3. AB = 8 cm. Berapakah panjang AM (cm)?",
     "b": 4,
     "tol": 0.01,
     "suf": "cm",
     "u": "M ialah titik tengah AB, jadi AM = 8 ÷ 2 = 4 cm."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih pembahagi dua sama sudut dan langkah 3. Sudut AOB = 70°. Berapakah setiap sudut yang terbentuk (darjah)?",
     "b": 35,
     "tol": 0.01,
     "suf": "°",
     "u": "70° ÷ 2 = 35°."
    },
    {
     "j": "susun",
     "t": "Susun langkah membina pembahagi dua sama sudut AOB.",
     "p": [
      "Lukis sudut AOB",
      "Dari O, lukis lengkok yang memotong OA di P dan OB di Q",
      "Dari P dan Q dengan jejari sama, lukis lengkok yang bersilang di R",
      "Sambung O ke R"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Sudut dahulu, kemudian lengkok dari O, lengkok dari P dan Q, dan akhir sekali sambung O ke R."
    },
    {
     "j": "pilih",
     "t": "Sudut 60° dibina dengan jangka lukis dan alat tepi lurus sahaja kerana ia berkait dengan:",
     "p": [
      "Segi tiga bersudut tegak",
      "Segi tiga sama sisi",
      "Segi tiga tak sama sisi",
      "Sisi empat sama sisi"
     ],
     "b": 1,
     "u": "Semua sudut segi tiga sama sisi ialah 60°."
    },
    {
     "j": "pilih",
     "t": "Mengapakah titik pada garis pembahagi dua sama serenjang AB sama jauh dari A dan B?",
     "p": [
      "Ia dilukis dengan protraktor pada 90°",
      "Ia sentiasa lebih pendek daripada AB",
      "Ia dilukis daripada dua lengkok berjejari sama dari A dan B",
      "Ia dilukis daripada satu lengkok dari A sahaja"
     ],
     "b": 2,
     "u": "Setiap titik silang lengkok berjarak sama dari A dan B, jadi garis yang menyambungnya membahagi dua sama serenjang."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sudut tegak 90° dibahagi dua sama. Salah satu sudut yang terhasil dibahagi dua sama sekali lagi. Berapakah sudut terkecil itu?",
    "b": 22.5,
    "tol": 0.01,
    "suf": "°",
    "u": "90° ÷ 2 = 45°, kemudian 45° ÷ 2 = 22.5°."
   }
  },
  {
   "n": 4,
   "tempat": "Simpang Empat",
   "sk": "8.2.1 / 8.2.2 / 8.2.3 Sudut pada garis bersilang",
   "lampiran": "sud4",
   "kadNama": "Bertentang Bucu",
   "kadEm": "🔀",
   "kadFakta": "Bila dua jalan bersilang di simpang, sudut yang bertentangan sentiasa sama, macam dua pasang bilah gunting yang sama besar.",
   "bosKadNama": "Simpang Serenjang",
   "bosKadEm": "➕",
   "bosKadFakta": "Bila dua garis bersilang serenjang, keempat-empat sudut ialah 90°. Bentuk tanda tambah ialah contohnya.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, a = 70°. Berapakah sudut b?",
     "b": 110,
     "tol": 0.01,
     "suf": "°",
     "u": "Sudut a dan b bersebelahan pada garis lurus, jadi b = 180° − 70° = 110°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, a = 130°. Berapakah sudut c?",
     "b": 130,
     "tol": 0.01,
     "suf": "°",
     "u": "Sudut c bertentang bucu dengan a, jadi c = a = 130°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, a = 50°. Berapakah sudut d?",
     "b": 130,
     "tol": 0.01,
     "suf": "°",
     "u": "d bertentang bucu dengan b. b = 180° − 50° = 130°, jadi d = 130°."
    },
    {
     "j": "pilih",
     "t": "Sudut bertentang bucu pada dua garis bersilang sentiasa:",
     "p": [
      "Berjumlah 180°",
      "Berjumlah 90°",
      "Berjumlah 360°",
      "Sama besar"
     ],
     "b": 3,
     "u": "Sudut bertentang bucu sama besar."
    },
    {
     "j": "nombor",
     "t": "Dua garis bersilang. Sudut bertentang bucu ialah (2x + 20)° dan (x + 50)°. Cari x.",
     "b": 30,
     "tol": 0.01,
     "u": "2x + 20 = x + 50, maka x = 30."
    },
    {
     "j": "nombor",
     "t": "Dua sudut bersebelahan pada garis lurus ialah 2y° dan 3y°. Cari y.",
     "b": 36,
     "tol": 0.01,
     "u": "2y + 3y = 180, maka y = 36."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, jika a = 90°, sudut b, c dan d ialah:",
     "p": [
      "Semuanya 90°",
      "b = 90°, c = 180°, d = 90°",
      "b = 45°, c = 90°, d = 45°",
      "b = 0°, c = 90°, d = 0°"
     ],
     "b": 0,
     "u": "Garis serenjang: keempat-empat sudut ialah 90°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, a = 150°. Berapakah sudut b?",
     "b": 30,
     "tol": 0.01,
     "suf": "°",
     "u": "b = 180° − 150° = 30°."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dua garis bersilang. Satu sudut ialah (5p − 10)° dan sudut bertentang bucunya ialah (3p + 20)°. Berapakah sudut bersebelahan dengan sudut itu?",
    "b": 115,
    "tol": 0.01,
    "suf": "°",
    "u": "5p − 10 = 3p + 20, maka p = 15. Sudut = 5(15) − 10 = 65°. Sudut bersebelahan = 180° − 65° = 115°."
   }
  },
  {
   "n": 5,
   "tempat": "Landasan Selari",
   "sk": "8.3.1 hingga 8.3.5 Garis selari dan garis rentas lintang",
   "lampiran": "sud5",
   "kadNama": "Landasan Kereta Api",
   "kadEm": "🚆",
   "kadFakta": "Dua landasan kereta api selari kerana jaraknya sentiasa sama. Kayu palang yang memotongnya ialah garis rentas lintang.",
   "bosKadNama": "Tanda Selari",
   "bosKadEm": "▶️",
   "bosKadFakta": "Dalam rajah, garis selari ditandakan dengan anak panah yang sama. Anak panah dua kali bermakna pasangan selari yang lain.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih pasangan sepadan dan condong 0°, dengan sudut 110°. Berapakah sudut hijau?",
     "b": 110,
     "tol": 0.01,
     "suf": "°",
     "u": "Sudut sepadan pada garis selari adalah sama, jadi sudut hijau = 110°."
    },
    {
     "j": "nombor",
     "t": "Dua garis selari dipotong garis rentas lintang. Satu sudut pedalaman ialah 110°. Berapakah sudut pedalaman satu lagi di sebelah yang sama?",
     "b": 70,
     "tol": 0.01,
     "suf": "°",
     "u": "Sudut pedalaman berjumlah 180°, maka 180° − 110° = 70°."
    },
    {
     "j": "nombor",
     "t": "Dua garis selari dipotong garis rentas lintang. Satu sudut selang-seli ialah 125°. Berapakah sudut selang-seli yang satu lagi?",
     "b": 125,
     "tol": 0.01,
     "suf": "°",
     "u": "Sudut selang-seli adalah sama, jadi sudutnya 125°."
    },
    {
     "j": "pilih",
     "t": "Dalam rajah, dua garis dinyatakan selari dengan menandakan:",
     "p": [
      "Sudut tegak pada satu garis",
      "Anak panah yang sama pada kedua-dua garis",
      "Garis putus-putus pada satu garis",
      "Huruf besar di hujung garis"
     ],
     "b": 1,
     "u": "Tanda anak panah yang sama menunjukkan garis itu selari."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih pasangan sepadan dan condong 5°. Apakah kesimpulan yang betul?",
     "p": [
      "Garis selari kerana sudut sepadan sama",
      "Garis selari kerana sudut berjumlah 180°",
      "Garis tidak selari kerana sudut sepadan tidak sama",
      "Garis serenjang kerana sudutnya berbeza"
     ],
     "b": 2,
     "u": "Jika garis selari, sudut sepadan mesti sama. Apabila tidak sama, garis tidak selari."
    },
    {
     "j": "nombor",
     "t": "PQ selari dengan RS. Dua sudut pedalaman ialah (3x + 10)° dan (2x + 20)°. Cari x.",
     "b": 30,
     "tol": 0.01,
     "u": "Sudut pedalaman berjumlah 180°. 5x + 30 = 180, maka x = 30."
    },
    {
     "j": "nombor",
     "t": "PQ selari dengan RS. Dua sudut selang-seli ialah (4y − 15)° dan (y + 60)°. Cari y.",
     "b": 25,
     "tol": 0.01,
     "u": "Sudut selang-seli adalah sama. 4y − 15 = y + 60, maka y = 25."
    },
    {
     "j": "pilih",
     "t": "Dua garis dipotong garis rentas lintang. Sudut sepadan ialah 75° dan 80°. Apakah kesimpulannya?",
     "p": [
      "Garis selari",
      "Garis serenjang",
      "Garis bersilang tegak",
      "Garis tidak selari"
     ],
     "b": 3,
     "u": "Sudut sepadan tidak sama, jadi kedua-dua garis tidak selari."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "PQ selari dengan RS. Dua sudut sepadan ialah (5m − 20)° dan (3m + 30)°. Berapakah nilai sudut sepadan itu?",
    "b": 105,
    "tol": 0.01,
    "suf": "°",
    "u": "Sudut sepadan sama: 5m − 20 = 3m + 30, maka m = 25. Sudut = 5(25) − 20 = 105°."
   }
  },
  {
   "n": 6,
   "tempat": "Menara Pandang",
   "sk": "8.3.5 / 8.3.6 Sudut dongak dan sudut tunduk, masalah bukan rutin",
   "lampiran": "sud6",
   "kadNama": "Sudut Dongak",
   "kadEm": "🔭",
   "kadFakta": "Sudut dongak diukur dari garis mengufuk ke atas, ke arah objek yang kita pandang. Klinometer ialah alat mudah untuk mengukurnya.",
   "bosKadNama": "Sudut Tunduk",
   "bosKadEm": "👁️",
   "bosKadFakta": "Sudut tunduk diukur dari garis mengufuk ke bawah. Sudut tunduk dari puncak sama dengan sudut dongak dari bawah kerana garis mengufuk selari.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan sudut dongak 40°. Berapakah sudut tunduk dari T?",
     "b": 40,
     "tol": 0.01,
     "suf": "°",
     "u": "Sudut tunduk sama dengan sudut dongak, iaitu 40°."
    },
    {
     "j": "pilih",
     "t": "Sudut dongak diukur dari:",
     "p": [
      "Garis mengufuk ke atas",
      "Garis menegak ke bawah",
      "Garis mengufuk ke bawah",
      "Garis menegak ke atas"
     ],
     "b": 0,
     "u": "Sudut dongak bermula daripada garis mengufuk dan naik ke arah objek."
    },
    {
     "j": "nombor",
     "t": "Dari puncak menara, sudut tunduk ke sebuah bot ialah 28°. Berapakah sudut dongak dari bot ke puncak menara?",
     "b": 28,
     "tol": 0.01,
     "suf": "°",
     "u": "Sudut tunduk sama dengan sudut dongak (sudut selang-seli), iaitu 28°."
    },
    {
     "j": "nombor",
     "t": "Sudut dongak ke sebuah layang-layang ialah 35°. Berapakah sudut antara garis pandangan dengan garis menegak ke atas?",
     "b": 55,
     "tol": 0.01,
     "suf": "°",
     "u": "Garis mengufuk dan garis menegak berbeza 90°. 90° − 35° = 55°."
    },
    {
     "j": "nombor",
     "t": "Dari puncak bangunan, sudut tunduk ke kereta P ialah 32° dan ke kereta Q ialah 58°. Berapakah sudut PTQ antara dua garis pandangan?",
     "b": 26,
     "tol": 0.01,
     "suf": "°",
     "u": "Kedua-dua sudut diukur dari garis mengufuk yang sama. 58° − 32° = 26°."
    },
    {
     "j": "pilih",
     "t": "Mengapakah sudut tunduk dari T sama dengan sudut dongak dari P?",
     "p": [
      "Kerana T dan P sentiasa sama tinggi dari tanah",
      "Garis mengufuk di T dan P selari, jadi sudut selang-seli sama",
      "Kerana kedua-dua sudut itu ialah sudut tegak",
      "Kerana jumlah kedua-dua sudut ialah 180°"
     ],
     "b": 1,
     "u": "Garis mengufuk di T selari dengan garis mengufuk di P. Sudut selang-seli antara garis selari adalah sama."
    },
    {
     "j": "nombor",
     "t": "Sudut tunduk dari sebuah kapal terbang ke landasan ialah 24°. Berapakah sudut antara garis pandangan dengan garis menegak ke bawah?",
     "b": 66,
     "tol": 0.01,
     "suf": "°",
     "u": "90° − 24° = 66°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan sudut dongak 50°. Berapakah jumlah sudut dongak dan sudut tunduk?",
     "b": 100,
     "tol": 0.01,
     "suf": "°",
     "u": "Sudut tunduk = 50°, jadi jumlahnya 50° + 50° = 100°."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Pilih satu tempat tinggi di sekolah awak (tingkap tingkat atas, tangga atau bumbung). Reka satu masalah yang melibatkan sudut tunduk atau sudut dongak dan garis selari.",
    "arahan": "Lukis rajah yang menunjukkan garis mengufuk, garis pandangan, dan sudut yang diberi. Tunjukkan bagaimana awak mencari satu sudut lain dengan menyatakan sifat sudut yang digunakan.",
    "u": "Jawapan TP6 yang kukuh mereka masalah yang jelas, melukis rajah dengan garis mengufuk selari, dan menggunakan sifat sudut selang-seli atau sudut pelengkap dengan betul."
   }
  }
 ]
};
