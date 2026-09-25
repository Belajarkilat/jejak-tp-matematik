/* Bank soalan — Matematik Ting. 1 · Bab 6 Persamaan Linear.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m1b6.js
   kemudian jalankan: node bina.js m1b6

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m1b6"] =
{
 "id": "m1b6",
 "tingkatan": 1,
 "kod": "6.0 Persamaan Linear",
 "tajuk": "Neraca Ajaib",
 "subtajuk": "Matematik Ting. 1 · Bab 6 Persamaan Linear",
 "spi": [
  "Mempamerkan pengetahuan asas tentang persamaan linear.",
  "Mempamerkan kefahaman tentang persamaan linear dan persamaan linear serentak.",
  "Mengaplikasikan kefahaman tentang penyelesaian persamaan linear dan persamaan linear serentak.",
  "Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang persamaan linear dan persamaan linear serentak dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang persamaan linear dan persamaan linear serentak dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang persamaan linear dan persamaan linear serentak dalam konteks penyelesaian masalah bukan rutin."
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
  "1": "{n} dapat mengenal pasti persamaan linear dalam satu pemboleh ubah dan menerangkan cirinya, serta memahami maksud kedua-dua belah persamaan sebagai neraca yang seimbang. Langkah seterusnya ialah memahami dua pemboleh ubah.",
  "2": "{n} memahami persamaan linear dalam dua pemboleh ubah, penyelesaiannya sebagai titik pada graf, dan maksud persamaan serentak. Perlu lebih latihan menggantikan nilai sebelum bergerak ke TP3.",
  "3": "{n} boleh menyelesaikan persamaan linear satu pemboleh ubah dengan operasi songsang pada kedua-dua belah. Galakkan menyemak jawapan dengan menggantikannya ke dalam persamaan asal.",
  "4": "{n} mampu menyelesaikan persamaan linear serentak dengan kaedah graf dan mentafsirkan titik persilangan serta kes selari dan bertindih. Seterusnya latih kaedah algebra.",
  "5": "{n} dapat menyelesaikan persamaan linear serentak dengan kaedah penghapusan, termasuk menyamakan pekali. Sudah bersedia untuk masalah yang melibatkan situasi harian.",
  "6": "{n} berjaya membentuk dan menyelesaikan masalah persamaan linear serentak dengan penggantian, penghapusan atau graf. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Persamaan Linear. Cadangan: ulang hentian pertama dengan Rajah 1 sambil menerangkan mengapa kedua-dua belah neraca mesti sama."
 },
 "lampiran": {
  "neraca1": "<figure class=\"figure jmi\" data-w=\"t1neraca\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1neraca&quot;,&quot;mod&quot;:&quot;cuba&quot;,&quot;a&quot;:1,&quot;b&quot;:4,&quot;c&quot;:9,&quot;kapsyen&quot;:&quot;Rajah 1 · Beg x ialah nombor yang belum diketahui. Setiap petak kecil ialah 1 unit. Cuba nilai x sehingga neraca seimbang.&quot;,&quot;alt&quot;:&quot;Rajah interaktif neraca timbang bagi persamaan x + 4 = 9; gelongsor menukar andaian nilai x sehingga kedua-dua pan seimbang&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 246\" role=\"img\" aria-label=\"Rajah neraca timbang bagi persamaan x + 4 = 9. Beg mewakili x dan petak kecil mewakili 1 unit.\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"15\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">x + 4 = 9</text><text x=\"130\" y=\"36\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">Andaian: x = 0</text><line x1=\"130\" y1=\"66\" x2=\"130\" y2=\"184\" stroke=\"var(--ink3)\" stroke-width=\"3\"></line><line x1=\"96\" y1=\"184\" x2=\"164\" y2=\"184\" stroke=\"var(--ink3)\" stroke-width=\"4\"></line><line x1=\"44.7\" y1=\"54.8\" x2=\"215.3\" y2=\"77.2\" stroke=\"var(--ink)\" stroke-width=\"4\"></line><circle cx=\"130\" cy=\"66\" r=\"5\" fill=\"var(--vena)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><line x1=\"44.7\" y1=\"54.8\" x2=\"6.7\" y2=\"116.8\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"44.7\" y1=\"54.8\" x2=\"82.7\" y2=\"116.8\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"215.3\" y1=\"77.2\" x2=\"177.3\" y2=\"139.2\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"215.3\" y1=\"77.2\" x2=\"253.3\" y2=\"139.2\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"6.7\" y1=\"116.8\" x2=\"82.7\" y2=\"116.8\" stroke=\"var(--ink2)\" stroke-width=\"4\"></line><rect x=\"8.7\" y=\"95.8\" width=\"16\" height=\"18\" rx=\"3\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.4\"></rect><text x=\"16.7\" y=\"108.8\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">0</text><rect x=\"8.7\" y=\"84.8\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"16.7\" y=\"84.8\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"24.7\" y=\"84.8\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"32.7\" y=\"84.8\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><line x1=\"177.3\" y1=\"139.2\" x2=\"253.3\" y2=\"139.2\" stroke=\"var(--ink2)\" stroke-width=\"4\"></line><rect x=\"179.3\" y=\"129.2\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"187.3\" y=\"129.2\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"195.3\" y=\"129.2\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"203.3\" y=\"129.2\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"211.3\" y=\"129.2\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"219.3\" y=\"129.2\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"227.3\" y=\"129.2\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"235.3\" y=\"129.2\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"243.3\" y=\"129.2\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><text class=\"jmi-hasil\" x=\"8\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Kiri  = 1(0) + 4 = 4</text><text class=\"jmi-hasil\" x=\"8\" y=\"221\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Kanan = 9 = 9</text><text class=\"jmi-hasil\" x=\"8\" y=\"238\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Kanan berat: besarkan x</text></svg></div><figcaption>Rajah 1 · Beg x ialah nombor yang belum diketahui. Setiap petak kecil ialah 1 unit. Cuba nilai x sehingga neraca seimbang.</figcaption></figure>",
  "dua1": "<figure class=\"figure jmi\" data-w=\"t1dua\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1dua&quot;,&quot;a&quot;:2,&quot;b&quot;:1,&quot;c&quot;:6,&quot;t&quot;:[0,1,2,3,4,5,6],&quot;t0&quot;:1,&quot;kapsyen&quot;:&quot;Rajah 1 · Garis 2x + y = 6. Gerakkan gelongsor x dan lihat titik penyelesaian bergerak di sepanjang garis.&quot;,&quot;alt&quot;:&quot;Rajah interaktif satah Cartes dengan garis 2x + y = 6; gelongsor menukar nilai x dan titik penyelesaian bergerak di sepanjang garis&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 290\" role=\"img\" aria-label=\"Rajah satah Cartes dengan garis lurus 2x + y = 6. Titik penyelesaian bergerak di sepanjang garis apabila nilai berubah.\"><rect x=\"28\" y=\"16\" width=\"204\" height=\"204\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><line x1=\"45\" y1=\"16\" x2=\"45\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"203\" x2=\"232\" y2=\"203\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"62\" y1=\"16\" x2=\"62\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"186\" x2=\"232\" y2=\"186\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"79\" y1=\"16\" x2=\"79\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"169\" x2=\"232\" y2=\"169\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"96\" y1=\"16\" x2=\"96\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"152\" x2=\"232\" y2=\"152\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"113\" y1=\"16\" x2=\"113\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"135\" x2=\"232\" y2=\"135\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"147\" y1=\"16\" x2=\"147\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"101\" x2=\"232\" y2=\"101\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"164\" y1=\"16\" x2=\"164\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"84\" x2=\"232\" y2=\"84\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"181\" y1=\"16\" x2=\"181\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"67\" x2=\"232\" y2=\"67\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"198\" y1=\"16\" x2=\"198\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"50\" x2=\"232\" y2=\"50\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"215\" y1=\"16\" x2=\"215\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"33\" x2=\"232\" y2=\"33\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"118\" x2=\"232\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"16\" x2=\"130\" y2=\"220\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"28\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-6</text><text x=\"126\" y=\"224\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-6</text><text x=\"62\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"126\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"96\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"126\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"164\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"126\" y=\"88\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"198\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"126\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"232\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><text x=\"126\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><text x=\"235\" y=\"113\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"135\" y=\"12\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><line class=\"jmi-hasil\" x1=\"232\" y1=\"220\" x2=\"130\" y2=\"16\" stroke=\"var(--arteri)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><circle class=\"jmi-hasil\" cx=\"130\" cy=\"16\" r=\"3.2\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"147\" cy=\"50\" r=\"3.2\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"164\" cy=\"84\" r=\"3.2\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"181\" cy=\"118\" r=\"3.2\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"198\" cy=\"152\" r=\"3.2\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"215\" cy=\"186\" r=\"3.2\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"232\" cy=\"220\" r=\"3.2\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"147\" cy=\"50\" r=\"5.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">2x + y = 6</text><text class=\"jmi-hasil\" x=\"8\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x = 1,  y = 4</text><text class=\"jmi-hasil\" x=\"8\" y=\"278\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Semak: 2×1 + 1×4 = 6</text></svg></div><figcaption>Rajah 1 · Garis 2x + y = 6. Gerakkan gelongsor x dan lihat titik penyelesaian bergerak di sepanjang garis.</figcaption></figure>",
  "langkah1": "<figure class=\"figure jmi\" data-w=\"t1neraca\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1neraca&quot;,&quot;mod&quot;:&quot;langkah&quot;,&quot;a&quot;:4,&quot;b&quot;:3,&quot;d&quot;:1,&quot;c&quot;:18,&quot;kapsyen&quot;:&quot;Rajah 1 · Persamaan 4x + 3 = x + 18. Gerakkan gelongsor langkah dan lihat operasi yang sama pada kedua-dua belah neraca.&quot;,&quot;alt&quot;:&quot;Rajah interaktif neraca timbang bagi persamaan 4x + 3 = x + 18; gelongsor langkah menunjukkan operasi yang sama pada kedua-dua belah sehingga x diperoleh&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 246\" role=\"img\" aria-label=\"Rajah neraca timbang bagi persamaan 4x + 3 = x + 18. Beg mewakili x dan petak kecil mewakili 1 unit.\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"15\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4x + 3 = x + 18</text><text x=\"130\" y=\"36\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">Persamaan asal</text><line x1=\"130\" y1=\"66\" x2=\"130\" y2=\"184\" stroke=\"var(--ink3)\" stroke-width=\"3\"></line><line x1=\"96\" y1=\"184\" x2=\"164\" y2=\"184\" stroke=\"var(--ink3)\" stroke-width=\"4\"></line><line x1=\"44\" y1=\"66\" x2=\"216\" y2=\"66\" stroke=\"var(--ink)\" stroke-width=\"4\"></line><circle cx=\"130\" cy=\"66\" r=\"5\" fill=\"var(--vena)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><line x1=\"44\" y1=\"66\" x2=\"6\" y2=\"128\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"44\" y1=\"66\" x2=\"82\" y2=\"128\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"216\" y1=\"66\" x2=\"178\" y2=\"128\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"216\" y1=\"66\" x2=\"254\" y2=\"128\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"6\" y1=\"128\" x2=\"82\" y2=\"128\" stroke=\"var(--ink2)\" stroke-width=\"4\"></line><rect x=\"8\" y=\"107\" width=\"16\" height=\"18\" rx=\"3\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.4\"></rect><text x=\"16\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">x</text><rect x=\"26\" y=\"107\" width=\"16\" height=\"18\" rx=\"3\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.4\"></rect><text x=\"34\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">x</text><rect x=\"44\" y=\"107\" width=\"16\" height=\"18\" rx=\"3\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.4\"></rect><text x=\"52\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">x</text><rect x=\"62\" y=\"107\" width=\"16\" height=\"18\" rx=\"3\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.4\"></rect><text x=\"70\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">x</text><rect x=\"8\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"16\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"24\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><line x1=\"178\" y1=\"128\" x2=\"254\" y2=\"128\" stroke=\"var(--ink2)\" stroke-width=\"4\"></line><rect x=\"180\" y=\"107\" width=\"16\" height=\"18\" rx=\"3\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.4\"></rect><text x=\"188\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">x</text><rect x=\"180\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"188\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"196\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"204\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"212\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"220\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"228\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"236\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"244\" y=\"96\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"180\" y=\"88\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"188\" y=\"88\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"196\" y=\"88\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"204\" y=\"88\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"212\" y=\"88\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"220\" y=\"88\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"228\" y=\"88\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"236\" y=\"88\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><rect x=\"244\" y=\"88\" width=\"7\" height=\"7\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1\"></rect><text x=\"8\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Kedua-dua pan sentiasa seimbang.</text><text x=\"8\" y=\"238\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">Ringkaskan sehingga x tunggal.</text></svg></div><figcaption>Rajah 1 · Persamaan 4x + 3 = x + 18. Gerakkan gelongsor langkah dan lihat operasi yang sama pada kedua-dua belah neraca.</figcaption></figure>",
  "graf1": "<figure class=\"figure jmi cabar\" data-w=\"t1serentak\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1serentak&quot;,&quot;mod&quot;:&quot;graf&quot;,&quot;a1&quot;:1,&quot;b1&quot;:1,&quot;c1&quot;:6,&quot;a2&quot;:2,&quot;b2&quot;:1,&quot;c2&quot;:8,&quot;a2Nilai&quot;:[1,2],&quot;c2Nilai&quot;:[6,7,8,9,10],&quot;cabar&quot;:true,&quot;kapsyen&quot;:&quot;Rajah 1 · L1 ialah x + y = 6. Tukar L2 dengan gelongsor, kira titik persilangan dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif satah Cartes dengan dua garis lurus; gelongsor menukar pekali x dan pemalar bagi garis kedua untuk melihat garis bersilang, selari atau bertindih&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 290\" role=\"img\" aria-label=\"Rajah satah Cartes dengan dua garis lurus x + y = 6 dan 2x + y = 8. Bersilang di (2, 4)\"><rect x=\"28\" y=\"16\" width=\"204\" height=\"204\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><line x1=\"45\" y1=\"16\" x2=\"45\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"203\" x2=\"232\" y2=\"203\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"62\" y1=\"16\" x2=\"62\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"186\" x2=\"232\" y2=\"186\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"79\" y1=\"16\" x2=\"79\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"169\" x2=\"232\" y2=\"169\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"96\" y1=\"16\" x2=\"96\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"152\" x2=\"232\" y2=\"152\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"113\" y1=\"16\" x2=\"113\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"135\" x2=\"232\" y2=\"135\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"147\" y1=\"16\" x2=\"147\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"101\" x2=\"232\" y2=\"101\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"164\" y1=\"16\" x2=\"164\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"84\" x2=\"232\" y2=\"84\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"181\" y1=\"16\" x2=\"181\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"67\" x2=\"232\" y2=\"67\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"198\" y1=\"16\" x2=\"198\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"50\" x2=\"232\" y2=\"50\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"215\" y1=\"16\" x2=\"215\" y2=\"220\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"33\" x2=\"232\" y2=\"33\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"28\" y1=\"118\" x2=\"232\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"16\" x2=\"130\" y2=\"220\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"28\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-6</text><text x=\"126\" y=\"224\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-6</text><text x=\"62\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"126\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"96\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"126\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"164\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"126\" y=\"88\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"198\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"126\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"232\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><text x=\"126\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><text x=\"235\" y=\"113\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"135\" y=\"12\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><line x1=\"232\" y1=\"118\" x2=\"130\" y2=\"16\" stroke=\"var(--vena)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line x1=\"232\" y1=\"186\" x2=\"147\" y2=\"16\" stroke=\"var(--arteri)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><circle class=\"jmi-hasil\" cx=\"164\" cy=\"50\" r=\"6\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">L1: x + y = 6</text><text x=\"8\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">L2: 2x + y = 8</text><text class=\"jmi-hasil\" x=\"8\" y=\"278\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Bersilang di (2, 4)</text></svg></div><figcaption>Rajah 1 · L1 ialah x + y = 6. Tukar L2 dengan gelongsor, kira titik persilangan dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "hapus1": "<figure class=\"figure jmi cabar\" data-w=\"t1serentak\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1serentak&quot;,&quot;mod&quot;:&quot;hapus&quot;,&quot;a1&quot;:3,&quot;b1&quot;:2,&quot;c1&quot;:16,&quot;a2&quot;:2,&quot;b2&quot;:3,&quot;c2&quot;:14,&quot;cabar&quot;:true,&quot;kapsyen&quot;:&quot;Rajah 1 · 3x + 2y = 16 dan 2x + 3y = 14. Kira dahulu di kertas conteng, kemudian gerakkan langkah untuk semak.&quot;,&quot;alt&quot;:&quot;Rajah interaktif langkah penyelesaian persamaan linear serentak 3x + 2y = 16 dan 2x + 3y = 14 dengan kaedah penghapusan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 282\" role=\"img\" aria-label=\"Rajah langkah penyelesaian persamaan linear serentak 3x + 2y = 16 dan 2x + 3y = 14 dengan kaedah penghapusan\"><text x=\"8\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">Kaedah penghapusan</text><text x=\"8\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\">(1) 3x + 2y = 16</text><text x=\"8\" y=\"62\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\">(2) 2x + 3y = 14</text></svg></div><figcaption>Rajah 1 · 3x + 2y = 16 dan 2x + 3y = 14. Kira dahulu di kertas conteng, kemudian gerakkan langkah untuk semak.</figcaption></figure>",
  "ganti1": "<figure class=\"figure jmi\" data-w=\"t1serentak\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1serentak&quot;,&quot;mod&quot;:&quot;ganti&quot;,&quot;p&quot;:2,&quot;q&quot;:1,&quot;a1&quot;:0,&quot;b1&quot;:1,&quot;c1&quot;:0,&quot;a2&quot;:3,&quot;b2&quot;:2,&quot;c2&quot;:16,&quot;kapsyen&quot;:&quot;Rajah 1 · y = 2x + 1 dan 3x + 2y = 16. Gerakkan gelongsor langkah untuk melihat kaedah penggantian.&quot;,&quot;alt&quot;:&quot;Rajah interaktif langkah penyelesaian persamaan linear serentak y = 2x + 1 dan 3x + 2y = 16 dengan kaedah penggantian&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 264\" role=\"img\" aria-label=\"Rajah langkah penyelesaian persamaan linear serentak y = 0 dan 3x + 2y = 16 dengan kaedah penggantian\"><text x=\"8\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">Kaedah penggantian</text><text x=\"8\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\">(1) y = 2x + 1</text><text x=\"8\" y=\"62\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\">(2) 3x + 2y = 16</text></svg></div><figcaption>Rajah 1 · y = 2x + 1 dan 3x + 2y = 16. Gerakkan gelongsor langkah untuk melihat kaedah penggantian.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Neraca Pasar",
   "sk": "6.1.1 / 6.1.2 Mengenal dan membentuk persamaan linear",
   "lampiran": "neraca1",
   "kadNama": "Tanda Sama",
   "kadEm": "⚖️",
   "kadFakta": "Tanda sama dengan (=) diperkenalkan oleh Robert Recorde pada tahun 1557. Dia memilih dua garis selari kerana tiada apa yang lebih sama daripada itu.",
   "bosKadNama": "Pemboleh Ubah",
   "bosKadEm": "🔤",
   "bosKadFakta": "Pemboleh ubah ialah huruf yang mewakili nombor yang belum diketahui. Huruf x paling popular, tetapi huruf apa pun boleh digunakan.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Antara yang berikut, yang manakah persamaan linear dalam satu pemboleh ubah?",
     "p": [
      "x + 4 = 9",
      "x² + 4 = 9",
      "x + y = 9",
      "4 + 9 = 13"
     ],
     "b": 0,
     "u": "Persamaan linear satu pemboleh ubah hanya ada satu huruf, berkuasa satu, dan tanda sama dengan. x² berkuasa dua, x + y ada dua huruf, dan 4 + 9 = 13 tiada pemboleh ubah."
    },
    {
     "j": "pilih",
     "t": "Dalam persamaan 3x + 5 = 20, apakah pemboleh ubahnya?",
     "p": [
      "Nombor 3",
      "Huruf x",
      "Nombor 5",
      "Nombor 20"
     ],
     "b": 1,
     "u": "Pemboleh ubah ialah huruf yang mewakili nombor yang belum diketahui, iaitu x."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, beg x ialah nombor yang belum diketahui dan setiap petak kecil ialah 1 unit. Persamaan yang diwakili oleh neraca ialah:",
     "p": [
      "x + 9 = 4",
      "4x = 9",
      "x + 4 = 9",
      "x − 4 = 9"
     ],
     "b": 2,
     "u": "Pan kiri ada satu beg x dan 4 petak, iaitu x + 4. Pan kanan ada 9 petak, iaitu 9. Jadi x + 4 = 9."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 3. Berapakah nilai sebelah kiri, iaitu x + 4?",
     "b": 7,
     "tol": 0.01,
     "u": "x + 4 = 3 + 4 = 7. Nilai kiri 7 kurang daripada 9, jadi pan kanan lebih berat."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 5. Berapakah nilai sebelah kiri, iaitu x + 4?",
     "b": 9,
     "tol": 0.01,
     "u": "x + 4 = 5 + 4 = 9. Nilai ini sama dengan sebelah kanan, jadi neraca seimbang."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, neraca seimbang apabila x sama dengan:",
     "p": [
      "4",
      "6",
      "9",
      "5"
     ],
     "b": 3,
     "u": "Neraca seimbang apabila x + 4 = 9. Hanya x = 5 memberi 5 + 4 = 9."
    },
    {
     "j": "pilih",
     "t": "Persamaan linear dalam satu pemboleh ubah mempunyai ciri:",
     "p": [
      "Pemboleh ubah berkuasa satu sahaja",
      "Pemboleh ubah berkuasa dua sahaja",
      "Dua pemboleh ubah yang berlainan",
      "Ada tanda lebih besar daripada"
     ],
     "b": 0,
     "u": "Persamaan linear satu pemboleh ubah mempunyai satu huruf dengan kuasa satu dan tanda sama dengan."
    },
    {
     "j": "susun",
     "t": "Susun langkah mencari x bagi x + 4 = 9 dengan kaedah cuba jaya.",
     "p": [
      "Cuba satu nilai x, contohnya x = 3",
      "Kira nilai sebelah kiri dengan nilai itu",
      "Bandingkan dengan sebelah kanan, iaitu 9",
      "Ubah nilai x sehingga kedua-dua belah sama"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Cuba, kira, bandingkan, dan ubah nilai sehingga kedua-dua belah sama."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA persamaan linear dalam satu pemboleh ubah.",
    "p": [
     "2x + 1 = 7",
     "y − 5 = 3",
     "3(m + 2) = 15",
     "x² = 16",
     "a + b = 4",
     "5 + 3 = 8"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "2x + 1 = 7, y − 5 = 3 dan 3(m + 2) = 15 ada satu pemboleh ubah berkuasa satu. x² = 16 berkuasa dua, a + b = 4 ada dua pemboleh ubah, dan 5 + 3 = 8 tiada pemboleh ubah."
   }
  },
  {
   "n": 2,
   "tempat": "Kafe Kupon",
   "sk": "6.2.1 / 6.2.2 / 6.2.3 / 6.2.4 Persamaan linear dalam dua pemboleh ubah dan graf",
   "lampiran": "dua1",
   "kadNama": "Titik Pada Garis",
   "kadEm": "📍",
   "kadFakta": "Setiap titik pada graf persamaan linear ialah satu penyelesaian bagi persamaan itu. Ada banyak sekali penyelesaian, seperti banyak titik pada satu garis.",
   "bosKadNama": "Bentuk Umum",
   "bosKadEm": "📝",
   "bosKadFakta": "Bentuk umum persamaan linear dalam dua pemboleh ubah ialah ax + by = c. Huruf a, b dan c ialah nombor tetap.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Antara yang berikut, yang manakah persamaan linear dalam dua pemboleh ubah?",
     "p": [
      "2x + 6 = y²",
      "2x + y = 6",
      "x² + y = 6",
      "2x + 3 = 6"
     ],
     "b": 1,
     "u": "2x + y = 6 ada dua pemboleh ubah, x dan y, masing-masing berkuasa satu. Yang lain berkuasa dua atau hanya ada satu pemboleh ubah."
    },
    {
     "j": "pilih",
     "t": "Bentuk umum persamaan linear dalam dua pemboleh ubah ialah:",
     "p": [
      "ax² + b = c",
      "ax + b = 0",
      "ax + by = c",
      "axy = c"
     ],
     "b": 2,
     "u": "Bentuk umum ialah ax + by = c, dengan x dan y ialah pemboleh ubah."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 1. Berapakah nilai y?",
     "b": 4,
     "tol": 0.01,
     "u": "2x + y = 6. Apabila x = 1, 2(1) + y = 6, maka y = 4."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 4. Berapakah nilai y?",
     "b": -2,
     "tol": 0.01,
     "u": "2(4) + y = 6, maka 8 + y = 6 dan y = −2."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, setiap titik yang dilukis pada garis ialah:",
     "p": [
      "Satu titik yang bukan penyelesaian",
      "Penyelesaian bagi x sahaja",
      "Penyelesaian bagi y sahaja",
      "Satu penyelesaian bagi 2x + y = 6"
     ],
     "b": 3,
     "u": "Setiap titik pada garis memenuhi persamaan 2x + y = 6, jadi ia ialah satu penyelesaian."
    },
    {
     "j": "pilih",
     "t": "Pasangan (x, y) yang merupakan penyelesaian bagi 2x + y = 6 ialah:",
     "p": [
      "(2, 2)",
      "(2, 3)",
      "(3, 3)",
      "(1, 3)"
     ],
     "b": 0,
     "u": "Ganti (2, 2): 2(2) + 2 = 6. Pasangan lain memberi 7, 9 dan 5."
    },
    {
     "j": "pilih",
     "t": "Kopi RM2 secawan dan kek RM1 sekeping. Bayaran RM6 bagi x cawan kopi dan y keping kek. Persamaannya:",
     "p": [
      "x + 2y = 6",
      "2x + y = 6",
      "2x + y = 3",
      "2 + x + y = 6"
     ],
     "b": 1,
     "u": "Harga x cawan kopi ialah 2x dan harga y keping kek ialah y. Jumlah RM6, maka 2x + y = 6."
    },
    {
     "j": "nombor",
     "t": "Kopi RM2 secawan dan kek RM1 sekeping. Aina bayar RM6 untuk 2 keping kek dan beberapa cawan kopi. Berapa cawan kopi dibeli?",
     "b": 2,
     "tol": 0.01,
     "u": "2x + 2 = 6, maka 2x = 4 dan x = 2 cawan."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pasangan (x, y) yang merupakan penyelesaian bagi 2x + y = 6.",
    "p": [
     "(0, 6)",
     "(1, 4)",
     "(5, −4)",
     "(2, 3)",
     "(3, 2)",
     "(4, 1)"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "(0, 6): 0 + 6 = 6. (1, 4): 2 + 4 = 6. (5, −4): 10 − 4 = 6. (2, 3), (3, 2) dan (4, 1) memberi 7, 8 dan 9."
   }
  },
  {
   "n": 3,
   "tempat": "Kedai Runcit",
   "sk": "6.1.3 Menyelesaikan persamaan linear dalam satu pemboleh ubah",
   "lampiran": "langkah1",
   "kadNama": "Operasi Songsang",
   "kadEm": "🔁",
   "kadFakta": "Tambah dan tolak ialah operasi songsang. Darab dan bahagi juga. Menggunakan operasi songsang pada kedua-dua belah menyimpan neraca tetap seimbang.",
   "bosKadNama": "Semak Jawapan",
   "bosKadEm": "✅",
   "bosKadFakta": "Selepas dapat nilai x, ganti semula ke dalam persamaan asal. Jika kedua-dua belah sama, jawapan awak betul.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, langkah pertama memudahkan 4x + 3 = x + 18 ialah tolak x daripada kedua-dua belah. Selepas itu persamaan menjadi:",
     "p": [
      "5x + 3 = 18",
      "3x + 3 = 19",
      "3x + 3 = 18",
      "4x + 3 = 17"
     ],
     "b": 2,
     "u": "4x − x = 3x, dan x − x = 0 pada sebelah kanan. Persamaan ialah 3x + 3 = 18."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, selepas menolak 3 daripada kedua-dua belah, persamaan menjadi 3x = ?. Berapakah nilai di sebelah kanan?",
     "b": 15,
     "tol": 0.01,
     "u": "18 − 3 = 15, jadi 3x = 15."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah nilai x?",
     "b": 5,
     "tol": 0.01,
     "u": "3x = 15, bahagi kedua-dua belah dengan 3. x = 5."
    },
    {
     "j": "nombor",
     "t": "Selesaikan 2x + 5 = 17. Berapakah nilai x?",
     "b": 6,
     "tol": 0.01,
     "u": "2x = 17 − 5 = 12, maka x = 12 ÷ 2 = 6."
    },
    {
     "j": "nombor",
     "t": "Selesaikan 5x − 7 = 3x + 9. Berapakah nilai x?",
     "b": 8,
     "tol": 0.01,
     "u": "5x − 3x = 9 + 7, maka 2x = 16 dan x = 8."
    },
    {
     "j": "pilih",
     "t": "Untuk menyelesaikan x + 9 = 15, operasi songsang yang sesuai ialah:",
     "p": [
      "Tambah 9 pada kedua-dua belah",
      "Darab kedua-dua belah dengan 9",
      "Bahagi kedua-dua belah dengan 9",
      "Tolak 9 daripada kedua-dua belah"
     ],
     "b": 3,
     "u": "Operasi songsang bagi tambah 9 ialah tolak 9. x = 15 − 9 = 6."
    },
    {
     "j": "pilih",
     "t": "Kaedah pematahbalikan: fikir satu nombor, tolak 3, hasilnya 8. Nombor itu ialah:",
     "p": [
      "8 + 3 = 11",
      "8 − 3 = 5",
      "8 × 3 = 24",
      "8 ÷ 3 = 2.67"
     ],
     "b": 0,
     "u": "Untuk patah balik, gunakan operasi songsang. Tolak 3 dibalikkan dengan tambah 3, jadi 8 + 3 = 11."
    },
    {
     "j": "susun",
     "t": "Susun langkah menyelesaikan 4x + 3 = x + 18.",
     "p": [
      "Tolak x daripada kedua-dua belah",
      "Tolak 3 daripada kedua-dua belah",
      "Bahagi kedua-dua belah dengan 3",
      "Tulis jawapan x = 5"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Kumpul x di satu belah, asingkan pemalar, bahagi dengan pekali, kemudian tulis jawapan."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Selesaikan 5(x − 2) = 3x + 4. Berapakah nilai x?",
    "b": 7,
    "tol": 0.01,
    "u": "Kembangkan: 5x − 10 = 3x + 4. Maka 2x = 14 dan x = 7."
   }
  },
  {
   "n": 4,
   "tempat": "Lorong Graf",
   "sk": "6.3.1 / 6.3.2 Persamaan linear serentak dan kaedah graf",
   "lampiran": "graf1",
   "kadNama": "Titik Temu",
   "kadEm": "🤝",
   "kadFakta": "Penyelesaian persamaan linear serentak ialah titik temu dua garis. Titik itu memenuhi kedua-dua persamaan pada masa yang sama.",
   "bosKadNama": "Dua Garis Selari",
   "bosKadEm": "🛤️",
   "bosKadFakta": "Dua garis selari tidak akan bertemu, jadi persamaan serentak itu tiada penyelesaian. Dua garis yang bertindih pula ada penyelesaian tak terhingga.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, dua garis bersilang pada satu titik sahaja. Sistem persamaan itu mempunyai:",
     "p": [
      "Tiada penyelesaian",
      "Satu penyelesaian",
      "Dua penyelesaian",
      "Banyak penyelesaian"
     ],
     "b": 1,
     "u": "Satu titik persilangan bermaksud satu pasangan (x, y) yang memenuhi kedua-dua persamaan."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x dalam L2 = 2 dan c = 8. Berapakah nilai x pada titik persilangan?",
     "b": 2,
     "tol": 0.01,
     "u": "x + y = 6 dan 2x + y = 8. Tolak: x = 2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x dalam L2 = 2 dan c = 8. Berapakah nilai y pada titik persilangan?",
     "b": 4,
     "tol": 0.01,
     "u": "x = 2, maka y = 6 − 2 = 4. Semak: 2(2) + 4 = 8."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x dalam L2 = 2 dan c = 10. Berapakah nilai x pada titik persilangan?",
     "b": 4,
     "tol": 0.01,
     "u": "x + y = 6 dan 2x + y = 10. Tolak: x = 4."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan x dalam L2 = 1 dan c = 8, iaitu L2 ialah x + y = 8. Hubungan dua garis itu:",
     "p": [
      "Bersilang pada satu titik",
      "Bertindih sepenuhnya",
      "Selari, tiada penyelesaian",
      "Bersilang di paksi-y"
     ],
     "b": 2,
     "u": "x + y = 6 dan x + y = 8 mempunyai kecerunan sama tetapi pintasan berbeza, jadi selari dan tiada penyelesaian."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan x dalam L2 = 1 dan c = 6. Dua garis itu:",
     "p": [
      "Selari, tiada penyelesaian",
      "Bersilang pada satu titik",
      "Bersilang pada dua titik",
      "Bertindih, banyak penyelesaian"
     ],
     "b": 3,
     "u": "L2 ialah x + y = 6, sama dengan L1. Dua garis bertindih, jadi ada penyelesaian tak terhingga."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x dalam L2 = 2 dan c = 9. Berapakah nilai y pada titik persilangan?",
     "b": 3,
     "tol": 0.01,
     "u": "2x + y = 9 tolak x + y = 6 memberi x = 3. Maka y = 6 − 3 = 3."
    },
    {
     "j": "susun",
     "t": "Susun langkah menyelesaikan persamaan serentak dengan kaedah graf.",
     "p": [
      "Lukis garis bagi persamaan pertama",
      "Lukis garis bagi persamaan kedua pada satah yang sama",
      "Baca koordinat titik persilangan",
      "Semak dengan menggantikan ke dalam kedua-dua persamaan"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Lukis dua garis, baca titik temu, dan semak jawapan dalam kedua-dua persamaan."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Garis x + y = 6 dan garis 2x + y = c bersilang di titik yang x = 5. Berapakah nilai c?",
    "b": 11,
    "tol": 0.01,
    "u": "Apabila x = 5, y = 6 − 5 = 1. Maka c = 2(5) + 1 = 11."
   }
  },
  {
   "n": 5,
   "tempat": "Bengkel Hapus",
   "sk": "6.3.2 Persamaan linear serentak: kaedah penghapusan",
   "lampiran": "hapus1",
   "kadNama": "Samakan Pekali",
   "kadEm": "⚖️",
   "kadFakta": "Kunci kaedah penghapusan ialah menyamakan pekali satu pemboleh ubah. Kemudian tambah atau tolak dua persamaan supaya pemboleh ubah itu lenyap.",
   "bosKadNama": "Tambah atau Tolak",
   "bosKadEm": "➕",
   "bosKadFakta": "Jika pekali sama tanda, tolak dua persamaan. Jika berlawanan tanda, tambah dua persamaan.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, supaya pekali y sama, persamaan (1) didarab dengan 3. Persamaan (2) didarab dengan:",
     "p": [
      "2",
      "3",
      "4",
      "6"
     ],
     "b": 0,
     "u": "Pekali y ialah 2 dan 3. Gandaan sepunya terkecil ialah 6. (1) × 3 memberi 6y dan (2) × 2 memberi 6y."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, selepas (1) × 3 dan (2) × 2, berapakah pekali y dalam kedua-dua persamaan?",
     "b": 6,
     "tol": 0.01,
     "u": "2 × 3 = 6 dan 3 × 2 = 6, jadi pekali y ialah 6 dalam kedua-duanya."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, selepas menolak dua persamaan, kita dapat 5x = 20. Berapakah nilai x?",
     "b": 4,
     "tol": 0.01,
     "u": "9x − 4x = 5x dan 48 − 28 = 20. Maka x = 20 ÷ 5 = 4."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, ganti x = 4 dalam 3x + 2y = 16. Berapakah nilai y?",
     "b": 2,
     "tol": 0.01,
     "u": "12 + 2y = 16, maka 2y = 4 dan y = 2."
    },
    {
     "j": "nombor",
     "t": "Selesaikan x + y = 10 dan x − y = 4 dengan penghapusan. Berapakah nilai x?",
     "b": 7,
     "tol": 0.01,
     "u": "Tambah kedua-dua persamaan: 2x = 14, maka x = 7."
    },
    {
     "j": "nombor",
     "t": "Selesaikan 2x + y = 11 dan x + y = 7 dengan penghapusan. Berapakah nilai x?",
     "b": 4,
     "tol": 0.01,
     "u": "Tolak persamaan kedua daripada pertama: x = 11 − 7 = 4."
    },
    {
     "j": "pilih",
     "t": "Untuk menghapuskan y daripada x + y = 10 dan x − y = 4, kita perlu:",
     "p": [
      "Tolak kedua-dua persamaan",
      "Tambah kedua-dua persamaan",
      "Darabkan (2) dengan 2 sahaja",
      "Gantikan x = 0 dalam (1)"
     ],
     "b": 1,
     "u": "Pekali y ialah +1 dan −1 (berlawanan tanda), jadi tambah untuk menghapuskan y."
    },
    {
     "j": "susun",
     "t": "Susun langkah menyelesaikan persamaan serentak dengan kaedah penghapusan.",
     "p": [
      "Samakan pekali satu pemboleh ubah",
      "Tambah atau tolak dua persamaan",
      "Selesaikan pemboleh ubah yang tinggal",
      "Ganti nilai itu untuk cari pemboleh ubah satu lagi"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Samakan pekali, hapuskan, selesaikan, kemudian ganti balik."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Selesaikan 4x + 3y = 25 dan 3x + 2y = 17. Berapakah nilai x + y?",
    "b": 8,
    "tol": 0.01,
    "u": "(1) × 2: 8x + 6y = 50. (2) × 3: 9x + 6y = 51. Tolak: x = 1. Ganti: 4 + 3y = 25, y = 7. Maka x + y = 8."
   }
  },
  {
   "n": 6,
   "tempat": "Studio Reka",
   "sk": "6.3.3 Masalah persamaan linear serentak dan penggantian",
   "lampiran": "ganti1",
   "kadNama": "Ganti Balik",
   "kadEm": "🔄",
   "kadFakta": "Dalam kaedah penggantian, satu pemboleh ubah ditulis dalam sebutan yang lain dahulu. Kemudian ungkapan itu diganti ke dalam persamaan kedua.",
   "bosKadNama": "Reka Sendiri",
   "bosKadEm": "✏️",
   "bosKadFakta": "Masalah serentak yang baik boleh diwakili dua cara berbeza. Cuba graf, penghapusan dan penggantian, lalu bandingkan jawapannya.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, apabila y = 2x + 1 diganti dalam 3x + 2y = 16, kita dapat:",
     "p": [
      "3x + 2(2x) + 1 = 16",
      "3(2x + 1) + 2y = 16",
      "3x + 2(2x + 1) = 16",
      "2x + 1 + 2y = 16"
     ],
     "b": 2,
     "u": "Gantikan y dengan (2x + 1) dalam 3x + 2y = 16. Kurungan mesti dikekalkan supaya 2 mendarab kedua-dua sebutan."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, 3x + 2(2x + 1) = 16 dikembangkan menjadi 7x + 2 = 16. Berapakah nilai x?",
     "b": 2,
     "tol": 0.01,
     "u": "7x = 16 − 2 = 14, maka x = 2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah nilai y apabila x = 2?",
     "b": 5,
     "tol": 0.01,
     "u": "y = 2x + 1 = 2(2) + 1 = 5."
    },
    {
     "j": "nombor",
     "t": "Selesaikan y = x + 3 dan 2x + y = 12 dengan penggantian. Berapakah nilai x?",
     "b": 3,
     "tol": 0.01,
     "u": "2x + (x + 3) = 12, maka 3x = 9 dan x = 3."
    },
    {
     "j": "nombor",
     "t": "Harga 2 buku dan 1 pen ialah RM11. Harga 1 buku dan 1 pen ialah RM7. Berapakah harga sebuah buku (dalam RM)?",
     "b": 4,
     "tol": 0.01,
     "u": "Persamaan: 2b + p = 11 dan b + p = 7. Tolak: b = 4."
    },
    {
     "j": "nombor",
     "t": "Umur Aina tiga kali umur adiknya. Jumlah umur mereka ialah 16 tahun. Berapakah umur adik (tahun)?",
     "b": 4,
     "tol": 0.01,
     "suf": "tahun",
     "u": "a = 3d dan a + d = 16. Ganti: 3d + d = 16, maka 4d = 16 dan d = 4."
    },
    {
     "j": "pilih",
     "t": "Antara sistem berikut, yang paling sesuai diselesaikan dengan penggantian ialah:",
     "p": [
      "2x + 3y = 7 dan 3x + 2y = 8",
      "x + y = 5 dan x − y = 1",
      "2x + y = 4 dan 4x + 2y = 8",
      "y = 3x dan x + y = 20"
     ],
     "b": 3,
     "u": "Sistem pertama sudah ada y dalam sebutan x, jadi terus diganti. Yang lain lebih mudah dengan penghapusan atau graf."
    },
    {
     "j": "susun",
     "t": "Susun langkah menyelesaikan persamaan serentak dengan kaedah penggantian.",
     "p": [
      "Tulis satu pemboleh ubah dalam sebutan yang lain",
      "Ganti ungkapan itu dalam persamaan yang lain",
      "Selesaikan persamaan satu pemboleh ubah",
      "Ganti balik untuk cari pemboleh ubah kedua"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Asingkan, ganti, selesaikan, kemudian ganti balik."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu masalah harian yang boleh diwakili oleh dua persamaan linear serentak, contohnya harga dua jenis barang di kedai, dan selesaikannya.",
    "arahan": "Nyatakan situasi, tetapkan pemboleh ubah, bentuk dua persamaan, selesaikan dengan graf, penghapusan atau penggantian, dan semak jawapan awak dalam kedua-dua persamaan.",
    "u": "Jawapan TP6 yang kukuh membentuk dua persamaan yang betul daripada situasi yang munasabah, menyelesaikan dengan kaedah yang sesuai, menyemak jawapan dalam kedua-dua persamaan, dan menyatakan maksud jawapan dalam konteks masalah."
   }
  }
 ]
};
