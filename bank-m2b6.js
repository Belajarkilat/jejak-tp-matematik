/* Bank soalan — Matematik Ting. 2 · Bab 6 Bentuk Geometri Tiga Dimensi.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m2b6.js
   kemudian jalankan: node bina.js m2b6

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m2b6"] =
{
 "id": "m2b6",
 "tingkatan": 2,
 "kod": "6.0 Bentuk Geometri Tiga Dimensi",
 "tajuk": "Kilang Pepejal",
 "subtajuk": "Matematik Ting. 2 · Bab 6 Bentuk Geometri Tiga Dimensi",
 "spi": [
  "Mempamerkan pengetahuan asas tentang bentuk tiga dimensi.",
  "Mempamerkan kefahaman tentang sifat geometri bentuk tiga dimensi.",
  "Mengaplikasikan kefahaman tentang bentangan, luas permukaan dan isi padu bentuk tiga dimensi untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bentuk tiga dimensi dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bentuk tiga dimensi dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bentuk tiga dimensi dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat mengenal bentuk tiga dimensi serta menyebut bilangan muka, tepi dan bucu bagi pepejal yang mudah. Langkah seterusnya ialah memahami sifat geometri prisma dan piramid.",
  "2": "{n} memahami sifat geometri prisma, piramid, silinder, kon dan sfera, termasuk keratan rentas dan bilangan muka, tepi dan bucu. Perlu lebih latihan sebelum bergerak ke bentangan dan pengiraan.",
  "3": "{n} boleh mengenal bentangan pepejal dan menggunakan rumus luas permukaan dan isi padu untuk tugasan mudah. Galakkan menyebut bentuk muka bagi setiap bentangan sebelum mengira.",
  "4": "{n} mampu menyelesaikan masalah rutin yang mudah tentang luas permukaan kubus, kuboid, prisma, piramid, silinder, kon dan sfera. Seterusnya latih masalah isi padu.",
  "5": "{n} dapat menyelesaikan masalah kompleks tentang isi padu prisma, piramid, silinder, kon dan sfera, termasuk penukaran unit kepada liter. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya menyelesaikan masalah pepejal gabungan dan masalah bukan rutin, menukar unit dengan betul dan mereka objek sendiri dengan justifikasi yang jelas. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Bentuk Geometri Tiga Dimensi. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut nama pepejal serta bilangan muka, tepi dan bucunya, dan pegang benda sebenar seperti kotak dan tin."
 },
 "lampiran": {
  "pej1": "<figure class=\"figure jmi\" data-w=\"t2pepejal\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pepejal&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan gelongsor pepejal. Perhatikan bilangan muka, tepi dan bucu.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pepejal tiga dimensi; gelongsor memilih kubus, kuboid, prisma, piramid, silinder, kon atau sfera dan menunjukkan bilangan muka, tepi dan bucu&quot;,&quot;mod&quot;:&quot;jenis&quot;,&quot;i&quot;:0}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 230\" role=\"img\" aria-label=\"Rajah Kubus dengan 6 muka, 12 tepi dan 8 bucu. prisma\"><path d=\"M59 148L159 148L159 48L59 48Z\" fill=\"var(--teal-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M159 148L159 48L201 6L201 106Z\" fill=\"var(--gen-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M59 48L159 48L201 6L101 6Z\" fill=\"var(--amber-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M101 106L201 106M101 106L101 6M59 148L101 106\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" stroke-linejoin=\"round\"></path><path d=\"M59 148L159 148M159 148L159 48M159 48L59 48M59 148L59 48M201 106L201 6M201 6L101 6M59 48L101 6M159 48L201 6M159 148L201 106\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.8\" stroke-linejoin=\"round\"></path><text x=\"130\" y=\"166\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Kubus</text><text class=\"jmi-hasil\" x=\"130\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">Muka 6  Tepi 12  Bucu 8</text><text class=\"jmi-hasil\" x=\"130\" y=\"202\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">Kumpulan: prisma</text><text class=\"jmi-hasil\" x=\"130\" y=\"220\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\">Keratan rentas: segi empat sama</text></svg></div><figcaption>Rajah 1 · Gerakkan gelongsor pepejal. Perhatikan bilangan muka, tepi dan bucu.</figcaption></figure>",
  "pej2": "<figure class=\"figure jmi\" data-w=\"t2pepejal\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pepejal&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih pepejal dan bandingkan prisma dengan piramid. Garis sempang ialah tepi yang terlindung.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pepejal tiga dimensi dengan garis padu untuk tepi yang nampak dan garis sempang untuk tepi terlindung; menunjukkan muka, tepi, bucu dan kumpulan pepejal&quot;,&quot;mod&quot;:&quot;jenis&quot;,&quot;i&quot;:3}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 230\" role=\"img\" aria-label=\"Rajah Prisma heksagon dengan 8 muka, 18 tepi dan 12 bucu. prisma\"><path d=\"M155.7 103.1L129.8 58.2L182 6L207.9 50.9Z\" fill=\"var(--gen-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M129.8 58.2L78 58.2L130.2 6L182 6Z\" fill=\"var(--amber-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M129.8 148L155.7 103.1L207.9 50.9L182 95.8Z\" fill=\"var(--gen-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M155.7 103.1L129.8 58.2L78 58.2L52.1 103.1L78 148L129.8 148Z\" fill=\"var(--teal-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M52.1 103.1L104.3 50.9M130.2 6L104.3 50.9M78 148L130.2 95.8M104.3 50.9L130.2 95.8M130.2 95.8L182 95.8\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" stroke-linejoin=\"round\"></path><path d=\"M155.7 103.1L129.8 58.2M129.8 58.2L182 6M207.9 50.9L182 6M155.7 103.1L207.9 50.9M129.8 58.2L78 58.2M78 58.2L130.2 6M182 6L130.2 6M78 58.2L52.1 103.1M52.1 103.1L78 148M78 148L129.8 148M129.8 148L182 95.8M155.7 103.1L129.8 148M207.9 50.9L182 95.8\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.8\" stroke-linejoin=\"round\"></path><text x=\"130\" y=\"166\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Prisma heksagon</text><text class=\"jmi-hasil\" x=\"130\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">Muka 8  Tepi 18  Bucu 12</text><text class=\"jmi-hasil\" x=\"130\" y=\"202\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">Kumpulan: prisma</text><text class=\"jmi-hasil\" x=\"130\" y=\"220\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\">Keratan rentas: heksagon</text></svg></div><figcaption>Rajah 1 · Pilih pepejal dan bandingkan prisma dengan piramid. Garis sempang ialah tepi yang terlindung.</figcaption></figure>",
  "pej3": "<figure class=\"figure jmi\" data-w=\"t2pepejal\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pepejal&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih bentuk. Pepejal di atas dibuka menjadi bentangan di bawahnya.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pepejal dan bentangannya; gelongsor memilih kubus, kuboid, prisma segi tiga, piramid, silinder atau kon dan menunjukkan bentangan rata&quot;,&quot;mod&quot;:&quot;bentangan&quot;,&quot;i&quot;:3}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 254\" role=\"img\" aria-label=\"Rajah piramid dan bentangannya: 1 segi empat sama + 4 segi tiga. LP = tapak + 4 segi tiga\"><path d=\"M84.5 90L148.6 90L130 6Z\" fill=\"var(--teal-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M148.6 90L175.5 63.1L130 6Z\" fill=\"var(--gen-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M175.5 63.1L111.4 63.1M111.4 63.1L130 6M84.5 90L111.4 63.1\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" stroke-linejoin=\"round\"></path><path d=\"M84.5 90L148.6 90M148.6 90L130 6M84.5 90L130 6M148.6 90L175.5 63.1M175.5 63.1L130 6\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.8\" stroke-linejoin=\"round\"></path><rect x=\"115.9\" y=\"133.9\" width=\"28.2\" height=\"28.2\" rx=\"0\" fill=\"var(--teal-soft)\" stroke=\"var(--ink2)\" stroke-width=\"1.3\"></rect><path d=\"M115.9 133.9L144.1 133.9L130 100Z\" fill=\"var(--amber-soft)\" stroke=\"var(--ink2)\" stroke-width=\"1.3\" stroke-linejoin=\"round\"></path><path d=\"M115.9 162.1L144.1 162.1L130 196Z\" fill=\"var(--amber-soft)\" stroke=\"var(--ink2)\" stroke-width=\"1.3\" stroke-linejoin=\"round\"></path><path d=\"M115.9 133.9L115.9 162.1L82 148Z\" fill=\"var(--gen-soft)\" stroke=\"var(--ink2)\" stroke-width=\"1.3\" stroke-linejoin=\"round\"></path><path d=\"M144.1 133.9L144.1 162.1L178 148Z\" fill=\"var(--gen-soft)\" stroke=\"var(--ink2)\" stroke-width=\"1.3\" stroke-linejoin=\"round\"></path><text x=\"130\" y=\"214\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Bentangan piramid</text><text class=\"jmi-hasil\" x=\"130\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">1 segi empat sama + 4 segi tiga</text><text class=\"jmi-hasil\" x=\"130\" y=\"246\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\">LP = tapak + 4 segi tiga</text></svg></div><figcaption>Rajah 1 · Pilih bentuk. Pepejal di atas dibuka menjadi bentangan di bawahnya.</figcaption></figure>",
  "pej4": "<figure class=\"figure jmi cabar\" data-w=\"t2pepejal\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pepejal&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih bentuk dan saiz. Kira luas permukaan dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pepejal dengan ukuran; gelongsor bentuk dan saiz menukar dimensi, dan luas permukaan boleh disemak selepas awak mengira&quot;,&quot;mod&quot;:&quot;luas&quot;,&quot;i&quot;:0,&quot;j&quot;:0,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 188\" role=\"img\" aria-label=\"Rajah kubus (a = 2 cm), luas permukaan 24 sentimeter persegi dengan LP = 6 × a × a\"><path d=\"M80 106L150.4 106L150.4 35.6L80 35.6Z\" fill=\"var(--teal-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M150.4 106L150.4 35.6L180 6L180 76.4Z\" fill=\"var(--gen-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M80 35.6L150.4 35.6L180 6L109.6 6Z\" fill=\"var(--amber-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M109.6 76.4L180 76.4M109.6 76.4L109.6 6M80 106L109.6 76.4\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" stroke-linejoin=\"round\"></path><path d=\"M80 106L150.4 106M150.4 106L150.4 35.6M150.4 35.6L80 35.6M80 106L80 35.6M180 76.4L180 6M180 6L109.6 6M80 35.6L109.6 6M150.4 35.6L180 6M150.4 106L180 76.4\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.8\" stroke-linejoin=\"round\"></path><text x=\"130\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">a = 2 cm</text><text x=\"130\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">LP = 6 × a × a</text><text class=\"jmi-hasil\" x=\"130\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\">= 6 × 2 × 2</text><text class=\"jmi-hasil\" x=\"130\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">= 24 cm²</text></svg></div><figcaption>Rajah 1 · Pilih bentuk dan saiz. Kira luas permukaan dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "pej5": "<figure class=\"figure jmi cabar\" data-w=\"t2pepejal\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pepejal&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih bentuk dan saiz. Kira isi padu dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pepejal dengan ukuran; gelongsor bentuk dan saiz menukar dimensi, dan isi padu boleh disemak selepas awak mengira&quot;,&quot;mod&quot;:&quot;isipadu&quot;,&quot;i&quot;:3,&quot;j&quot;:0,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 208\" role=\"img\" aria-label=\"Rajah piramid (a = 6 cm, t = 5 cm (tinggi tegak)), isi padu 60 sentimeter padu iaitu 0.06 liter\"><path d=\"M61.9 106L157.8 106L130 6Z\" fill=\"var(--teal-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M157.8 106L198.1 65.7L130 6Z\" fill=\"var(--gen-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M198.1 65.7L102.2 65.7M102.2 65.7L130 6M61.9 106L102.2 65.7\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" stroke-linejoin=\"round\"></path><path d=\"M61.9 106L157.8 106M157.8 106L130 6M61.9 106L130 6M157.8 106L198.1 65.7M198.1 65.7L130 6\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.8\" stroke-linejoin=\"round\"></path><text x=\"130\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">a = 6 cm, t = 5 cm (tinggi tegak)</text><text x=\"130\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">V = 1/3 × a × a × t</text><text class=\"jmi-hasil\" x=\"130\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\">= 1/3 × 6 × 6 × 5</text><text class=\"jmi-hasil\" x=\"130\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">= 60 cm³</text><text class=\"jmi-hasil\" x=\"130\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\">= 0.06 liter</text></svg></div><figcaption>Rajah 1 · Pilih bentuk dan saiz. Kira isi padu dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "pej6": "<figure class=\"figure jmi\" data-w=\"t2pepejal\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pepejal&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih gabungan dan saiz. Isi padu setiap bahagian dan jumlahnya dipaparkan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pepejal gabungan silinder dengan kon, silinder dengan hemisfera atau kuboid dengan prisma; gelongsor menukar gabungan dan saiz dan menunjukkan isi padu jumlah dalam sentimeter padu dan liter&quot;,&quot;mod&quot;:&quot;gabung&quot;,&quot;i&quot;:0,&quot;j&quot;:0}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 208\" role=\"img\" aria-label=\"Rajah silinder + kon (r = 7, t1 = 10, t2 = 6 cm), isi padu gabungan 1848 sentimeter padu\"><path d=\"M91.3 39.1L91.3 94.4A38.7 11.6 0 0 0 168.7 94.4L168.7 39.1Z\" fill=\"var(--teal-soft)\" stroke=\"none\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M91.3 94.4A38.7 11.6 0 0 1 168.7 94.4\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" stroke-linejoin=\"round\"></path><path d=\"M91.3 94.4A38.7 11.6 0 0 0 168.7 94.4\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.8\" stroke-linejoin=\"round\"></path><line x1=\"91.3\" y1=\"39.1\" x2=\"91.3\" y2=\"94.4\" stroke=\"var(--ink)\" stroke-width=\"1.8\"></line><line x1=\"168.7\" y1=\"39.1\" x2=\"168.7\" y2=\"94.4\" stroke=\"var(--ink)\" stroke-width=\"1.8\"></line><ellipse cx=\"130\" cy=\"39.1\" rx=\"38.7\" ry=\"11.6\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.8\"></ellipse><path d=\"M130 6L91.3 39.1A38.7 11.6 0 0 0 168.7 39.1Z\" fill=\"var(--amber-soft)\" stroke=\"var(--ink)\" stroke-width=\"1.8\" stroke-linejoin=\"round\"></path><path d=\"M91.3 39.1A38.7 11.6 0 0 1 168.7 39.1\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" stroke-linejoin=\"round\"></path><text x=\"130\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">r = 7, t1 = 10, t2 = 6 cm</text><text class=\"jmi-hasil\" x=\"130\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\">Silinder = 1540 cm³</text><text class=\"jmi-hasil\" x=\"130\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\">Kon = 308 cm³</text><text class=\"jmi-hasil\" x=\"130\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">Jumlah = 1848 cm³</text><text class=\"jmi-hasil\" x=\"130\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\">= 1.848 liter</text></svg></div><figcaption>Rajah 1 · Pilih gabungan dan saiz. Isi padu setiap bahagian dan jumlahnya dipaparkan.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Muzium Pepejal",
   "sk": "6.1.1 Bentuk tiga dimensi dan konsep dimensi",
   "lampiran": "pej1",
   "kadNama": "Dimensi",
   "kadEm": "📦",
   "kadFakta": "Bentuk dua dimensi hanya ada panjang dan lebar, macam lukisan atas kertas. Bentuk tiga dimensi ada tinggi juga, jadi boleh dipegang dan diisi.",
   "bosKadNama": "Sfera Sempurna",
   "bosKadEm": "⚽",
   "bosKadFakta": "Sfera ialah satu-satunya pepejal yang tiada tepi dan tiada bucu. Bola sepak dan gelembung sabun hampir berbentuk sfera.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Yang manakah ialah bentuk tiga dimensi?",
     "p": [
      "Kubus",
      "Segi empat sama",
      "Bulatan",
      "Segi tiga"
     ],
     "b": 0,
     "u": "Kubus mempunyai panjang, lebar dan tinggi, jadi ia bentuk tiga dimensi. Segi empat sama, bulatan dan segi tiga hanya dua dimensi."
    },
    {
     "j": "pilih",
     "t": "Bentuk tiga dimensi mempunyai:",
     "p": [
      "Hanya panjang dan lebar",
      "Panjang, lebar dan tinggi",
      "Hanya panjang",
      "Hanya tinggi"
     ],
     "b": 1,
     "u": "Tiga dimensi bermaksud tiga ukuran: panjang, lebar dan tinggi."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih kubus. Berapakah bilangan muka kubus itu?",
     "b": 6,
     "tol": 0.01,
     "u": "Kubus mempunyai 6 muka yang sama: atas, bawah dan empat sisi."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih kubus. Berapakah bilangan tepi kubus itu?",
     "b": 12,
     "tol": 0.01,
     "u": "Kubus mempunyai 4 tepi di atas, 4 di bawah dan 4 tegak: 12 tepi."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih kubus. Berapakah bilangan bucu kubus itu?",
     "b": 8,
     "tol": 0.01,
     "u": "Kubus mempunyai 4 bucu di atas dan 4 bucu di bawah: 8 bucu."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih silinder. Silinder mempunyai:",
     "p": [
      "1 muka rata dan 2 muka melengkung",
      "3 muka rata sahaja",
      "2 muka rata dan 1 muka melengkung",
      "Tiada muka rata"
     ],
     "b": 2,
     "u": "Dua tapak bulatan ialah muka rata dan bahagian sisinya ialah satu muka melengkung."
    },
    {
     "j": "pilih",
     "t": "Pepejal manakah yang tiada tepi dan tiada bucu?",
     "p": [
      "Kon",
      "Silinder",
      "Piramid",
      "Sfera"
     ],
     "b": 3,
     "u": "Sfera hanya ada satu permukaan melengkung, tanpa tepi dan tanpa bucu."
    },
    {
     "j": "susun",
     "t": "Susun langkah mengenal pasti sebuah pepejal.",
     "p": [
      "Lihat sama ada ada muka melengkung",
      "Kira bilangan muka rata dan bucu",
      "Perhatikan bentuk tapak",
      "Namakan pepejal itu"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Semak muka melengkung dahulu, kira muka dan bucu, lihat tapak, kemudian namakan pepejal."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pepejal yang mempunyai sekurang-kurangnya satu muka melengkung.",
    "p": [
     "Silinder",
     "Kon",
     "Sfera",
     "Kubus",
     "Prisma segi tiga",
     "Piramid segi empat"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Silinder, kon dan sfera ada muka melengkung. Kubus, prisma dan piramid hanya ada muka rata."
   }
  },
  {
   "n": 2,
   "tempat": "Bengkel Prisma",
   "sk": "6.1.1 Sifat geometri prisma, piramid, silinder, kon dan sfera",
   "lampiran": "pej2",
   "kadNama": "Prisma",
   "kadEm": "📐",
   "kadFakta": "Prisma dinamakan ikut bentuk keratan rentasnya. Prisma segi tiga ada keratan rentas segi tiga yang sama sepanjang pepejal itu, dan muka lainnya berbentuk segi empat.",
   "bosKadNama": "Piramid",
   "bosKadEm": "🔺",
   "bosKadFakta": "Piramid mempunyai satu tapak dan semua muka sisinya berbentuk segi tiga yang bertemu di satu puncak.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih prisma heksagon. Berapakah bilangan muka prisma itu?",
     "b": 8,
     "tol": 0.01,
     "u": "Dua tapak heksagon dan enam muka sisi berbentuk segi empat: 2 + 6 = 8 muka."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih prisma heksagon. Berapakah bilangan tepi prisma itu?",
     "b": 18,
     "tol": 0.01,
     "u": "Setiap heksagon ada 6 tepi, jadi 12 tepi. Tambah 6 tepi tegak: 18 tepi."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih prisma heksagon. Berapakah bilangan bucu prisma itu?",
     "b": 12,
     "tol": 0.01,
     "u": "Setiap heksagon ada 6 bucu: 6 + 6 = 12 bucu."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih piramid segi empat. Piramid itu mempunyai:",
     "p": [
      "Tapak segi empat sama dan 4 muka segi tiga",
      "Tapak segi tiga dan 4 muka segi tiga",
      "Tapak segi empat sama dan 4 muka segi empat",
      "Tapak bulatan dan 1 muka melengkung"
     ],
     "b": 0,
     "u": "Piramid segi empat mempunyai satu tapak segi empat sama dan empat muka sisi berbentuk segi tiga yang bertemu di puncak."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih piramid segi empat. Berapakah bilangan bucunya?",
     "b": 5,
     "tol": 0.01,
     "u": "Empat bucu di tapak dan satu bucu di puncak: 5 bucu."
    },
    {
     "j": "pilih",
     "t": "Apakah keratan rentas seragam bagi prisma segi tiga?",
     "p": [
      "Segi empat sama",
      "Segi tiga",
      "Bulatan penuh",
      "Heksagon sekata"
     ],
     "b": 1,
     "u": "Keratan rentas prisma sentiasa sama seperti bentuk tapaknya. Prisma segi tiga ada keratan rentas segi tiga."
    },
    {
     "j": "pilih",
     "t": "Apakah perbezaan utama antara prisma dengan piramid?",
     "p": [
      "Prisma ada satu tapak, piramid ada dua tapak",
      "Prisma ada muka melengkung, piramid tiada",
      "Prisma ada dua tapak sama, piramid ada satu puncak",
      "Tiada perbezaan antara kedua-duanya"
     ],
     "b": 2,
     "u": "Prisma mempunyai dua tapak yang sama dan sisi berbentuk segi empat. Piramid mempunyai satu tapak dan muka sisi segi tiga yang bertemu di puncak."
    },
    {
     "j": "nombor",
     "t": "Sebuah prisma tegak mempunyai tapak oktagon (8 sisi). Berapakah bilangan muka prisma itu?",
     "b": 10,
     "tol": 0.01,
     "u": "Dua tapak oktagon dan 8 muka sisi segi empat: 2 + 8 = 10 muka."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah piramid mempunyai tapak heksagon. Berapakah bilangan tepi piramid itu?",
    "b": 12,
    "tol": 0.01,
    "u": "Tapak heksagon ada 6 tepi. Ada 6 tepi lagi dari puncak ke setiap bucu tapak: 6 + 6 = 12 tepi."
   }
  },
  {
   "n": 3,
   "tempat": "Kilang Kotak",
   "sk": "6.2.1 / 6.3.1 Bentangan dan rumus luas permukaan",
   "lampiran": "pej3",
   "kadNama": "Bentangan",
   "kadEm": "📦",
   "kadFakta": "Bentangan ialah pepejal yang dibuka dan dibentang rata. Kotak kadbod yang awak buka sebelum dibuang ialah bentangan kuboid.",
   "bosKadNama": "Lilitan",
   "bosKadEm": "🥫",
   "bosKadFakta": "Kertas label yang dibuka daripada tin ialah segi empat tepat. Lebarnya sama dengan lilitan tapak tin itu.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih bentangan kubus. Berapakah bilangan segi empat sama dalam bentangan itu?",
     "b": 6,
     "tol": 0.01,
     "u": "Kubus mempunyai 6 muka yang sama, jadi bentangannya mempunyai 6 segi empat sama."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih bentangan piramid. Bentangan piramid segi empat sama terdiri daripada:",
     "p": [
      "4 segi empat sama dan 1 segi tiga",
      "6 segi empat sama",
      "2 segi tiga dan 3 segi empat tepat",
      "1 segi empat sama dan 4 segi tiga"
     ],
     "b": 3,
     "u": "Tapak ialah satu segi empat sama dan setiap muka sisi ialah segi tiga: 1 + 4 muka."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih bentangan silinder. Bentangan silinder terdiri daripada:",
     "p": [
      "1 segi empat tepat dan 2 bulatan",
      "2 segi empat tepat dan 1 bulatan",
      "1 sektor dan 1 bulatan",
      "3 segi empat sama"
     ],
     "b": 0,
     "u": "Dua tapak ialah dua bulatan dan permukaan melengkung dibuka menjadi satu segi empat tepat."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih bentangan kon. Bentangan kon terdiri daripada:",
     "p": [
      "1 segi empat tepat dan 2 bulatan",
      "1 sektor dan 1 bulatan",
      "2 sektor dan 1 bulatan",
      "1 segi tiga dan 1 bulatan"
     ],
     "b": 1,
     "u": "Tapak ialah satu bulatan dan permukaan melengkung dibuka menjadi satu sektor."
    },
    {
     "j": "nombor",
     "t": "Sebuah kubus bersisi 4 cm. Berapakah luas permukaannya (cm²)?",
     "b": 96,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas permukaan = 6 × 4 × 4 = 96 cm². Bentangan kubus terdiri daripada 6 petak yang sama."
    },
    {
     "j": "nombor",
     "t": "Sebuah kuboid berukuran 5 cm × 4 cm × 3 cm. Berapakah luas permukaannya (cm²)?",
     "b": 94,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 2(5×4 + 5×3 + 4×3) = 2(20 + 15 + 12) = 94 cm²."
    },
    {
     "j": "pilih",
     "t": "Dalam bentangan silinder, lebar segi empat tepat itu sama dengan:",
     "p": [
      "Jejari tapak bulatan",
      "Tinggi silinder itu",
      "Lilitan tapak, iaitu 2πr",
      "Diameter tapak bulat"
     ],
     "b": 2,
     "u": "Permukaan melengkung dibuka menjadi segi empat tepat. Satu sisinya sama dengan lilitan tapak bulatan, 2πr."
    },
    {
     "j": "nombor",
     "t": "Sebuah kuboid berukuran 6 cm × 5 cm × 4 cm. Berapakah isi padunya (cm³)?",
     "b": 120,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Isi padu = panjang × lebar × tinggi = 6 × 5 × 4 = 120 cm³."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah kotak hadiah berbentuk kuboid berukuran 12 cm × 8 cm × 5 cm. Berapakah luas kertas hias yang diperlukan untuk menutup seluruh permukaannya (cm²)?",
    "b": 392,
    "tol": 0.01,
    "suf": "cm²",
    "u": "Luas = 2(12×8 + 12×5 + 8×5) = 2(96 + 60 + 40) = 392 cm²."
   }
  },
  {
   "n": 4,
   "tempat": "Kedai Cat",
   "sk": "6.3.1 / 6.3.2 / 6.3.3 Luas permukaan dan masalah mudah",
   "lampiran": "pej4",
   "kadNama": "Luas Permukaan",
   "kadEm": "🎨",
   "kadFakta": "Luas permukaan ialah jumlah luas semua muka pepejal. Ia menentukan berapa banyak cat atau kertas pembalut yang diperlukan.",
   "bosKadNama": "Tanpa Penutup",
   "bosKadEm": "📦",
   "bosKadFakta": "Bila kotak tiada penutup, tolak luas penutup itu daripada jumlah luas permukaan kotak.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih kubus, saiz besar (a = 5 cm). Berapakah luas permukaannya (cm²)?",
     "b": 150,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 6 × 5 × 5 = 150 cm²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih kuboid, saiz kecil (5 cm × 4 cm × 3 cm). Berapakah luas permukaannya (cm²)?",
     "b": 94,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 2(20 + 15 + 12) = 94 cm²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih silinder, saiz kecil (r = 7 cm, t = 10 cm). Guna π = 22/7. Berapakah luas permukaannya (cm²)?",
     "b": 748,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 2πr(r + t) = 2 × 22/7 × 7 × 17 = 748 cm²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih kon, saiz kecil (r = 7 cm, tinggi condong s = 25 cm). Guna π = 22/7. Berapakah luas permukaannya (cm²)?",
     "b": 704,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = πr(r + s) = 22/7 × 7 × 32 = 704 cm²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih sfera, saiz kecil (r = 7 cm). Guna π = 22/7. Berapakah luas permukaannya (cm²)?",
     "b": 616,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 4πr² = 4 × 22/7 × 49 = 616 cm²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih prisma segi tiga, saiz kecil (tapak 3, 4, 5 cm; panjang 10 cm). Berapakah luas permukaannya (cm²)?",
     "b": 132,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 2 × (1/2 × 3 × 4) + (3 + 4 + 5) × 10 = 12 + 120 = 132 cm²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih piramid, saiz kecil (tapak 6 cm × 6 cm, tinggi condong s = 5 cm). Berapakah luas permukaannya (cm²)?",
     "b": 96,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas = 6 × 6 + 4 × (1/2 × 6 × 5) = 36 + 60 = 96 cm²."
    },
    {
     "j": "nombor",
     "t": "Sebuah kotak kuboid tanpa penutup berukuran 20 cm × 10 cm × 8 cm (tapak 20 × 10). Berapakah luas permukaan kotak itu (cm²)?",
     "b": 680,
     "tol": 0.01,
     "suf": "cm²",
     "u": "Luas kuboid penuh = 2(200 + 160 + 80) = 880 cm². Tolak penutup 20 × 10 = 200 cm²: 680 cm²."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah bilik berbentuk kubus bersisi 3 m. Dinding dan siling akan dicat (lantai tidak dicat). Kos cat ialah RM12 semeter persegi. Berapakah jumlah kos mengecat bilik itu (RM)?",
    "b": 540,
    "tol": 0.01,
    "u": "Ada 5 permukaan dicat: 5 × 3 × 3 = 45 m². Kos = 45 × 12 = RM540."
   }
  },
  {
   "n": 5,
   "tempat": "Loji Air",
   "sk": "6.4.1 / 6.4.2 / 6.4.3 Rumus isi padu dan masalah kompleks",
   "lampiran": "pej5",
   "kadNama": "Isi Padu",
   "kadEm": "💧",
   "kadFakta": "Isi padu ialah ruang yang diisi oleh sesuatu pepejal. 1 000 cm³ sama dengan 1 liter.",
   "bosKadNama": "Satu Pertiga",
   "bosKadEm": "🧪",
   "bosKadFakta": "Kon dan piramid menyimpan tepat satu pertiga daripada isi padu silinder atau prisma yang sama tapak dan sama tinggi.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih piramid, saiz kecil (tapak 6 cm × 6 cm, tinggi tegak 5 cm). Berapakah isi padunya (cm³)?",
     "b": 60,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Isi padu = 1/3 × 6 × 6 × 5 = 60 cm³."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih silinder, saiz kecil (r = 7 cm, t = 10 cm). Guna π = 22/7. Berapakah isi padunya (cm³)?",
     "b": 1540,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Isi padu = πr²t = 22/7 × 7 × 7 × 10 = 1 540 cm³."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih kon, saiz kecil (r = 7 cm, tinggi tegak 6 cm). Guna π = 22/7. Berapakah isi padunya (cm³)?",
     "b": 308,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Isi padu = 1/3 × 22/7 × 7 × 7 × 6 = 308 cm³."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih sfera, saiz kecil (r = 7 cm). Guna π = 22/7. Berapakah isi padunya kepada 2 tempat perpuluhan (cm³)?",
     "b": 1437.33,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Isi padu = 4/3 × 22/7 × 7 × 7 × 7 = 1 437.33 cm³."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih prisma segi tiga, saiz kecil (tapak segi tiga bersudut tegak 3 cm dan 4 cm; panjang 10 cm). Berapakah isi padunya (cm³)?",
     "b": 60,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Isi padu = luas tapak × panjang = 1/2 × 3 × 4 × 10 = 60 cm³."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih silinder, saiz sederhana (r = 14 cm, t = 5 cm). Guna π = 22/7. Berapakah isi padunya dalam liter?",
     "b": 3.08,
     "tol": 0.01,
     "suf": "liter",
     "u": "Isi padu = 22/7 × 14 × 14 × 5 = 3 080 cm³. Bahagi dengan 1 000: 3.08 liter."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih kon, saiz besar (r = 3.5 cm, tinggi tegak 6 cm). Guna π = 22/7. Berapakah isi padunya (cm³)?",
     "b": 77,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Isi padu = 1/3 × 22/7 × 3.5 × 3.5 × 6 = 77 cm³."
    },
    {
     "j": "pilih",
     "t": "Sebuah kon dan sebuah silinder mempunyai tapak dan tinggi yang sama. Isi padu kon ialah:",
     "p": [
      "Satu perdua isi padu silinder",
      "Dua pertiga isi padu silinder",
      "Sama dengan isi padu silinder",
      "Satu pertiga isi padu silinder"
     ],
     "b": 3,
     "u": "Air dalam kon yang penuh perlu dituang tiga kali untuk memenuhkan silinder yang sama tapak dan tinggi."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah tangki air berbentuk silinder mempunyai jejari 14 cm dan tinggi 50 cm. Guna π = 22/7. Berapakah isi padu air (liter) apabila tangki itu penuh?",
    "b": 30.8,
    "tol": 0.01,
    "suf": "liter",
    "u": "Isi padu = 22/7 × 14 × 14 × 50 = 30 800 cm³. Bahagi dengan 1 000: 30.8 liter."
   }
  },
  {
   "n": 6,
   "tempat": "Reka Menara",
   "sk": "6.3.3 / 6.4.3 Gabungan bentuk, penukaran unit dan masalah bukan rutin",
   "lampiran": "pej6",
   "kadNama": "Gabungan",
   "kadEm": "🏗️",
   "kadFakta": "Banyak objek harian ialah pepejal gabungan, contohnya tangki air (silinder dengan hemisfera) dan kon aiskrim dengan bebola aiskrim di atasnya.",
   "bosKadNama": "Reka Sendiri",
   "bosKadEm": "✏️",
   "bosKadFakta": "Jurureka menggabungkan pepejal ringkas untuk mencipta bekas dan bangunan. Isi padu gabungan ialah jumlah isi padu setiap bahagian.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih silinder + kon, saiz A (r = 7 cm, silinder t = 10 cm, kon t = 6 cm). Guna π = 22/7. Berapakah jumlah isi padunya (cm³)?",
     "b": 1848,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Silinder = 1 540 cm³ dan kon = 308 cm³. Jumlah = 1 848 cm³."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih silinder + kon, saiz C (r = 3.5 cm, silinder t = 12 cm, kon t = 6 cm). Guna π = 22/7. Berapakah jumlah isi padunya (cm³)?",
     "b": 539,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Silinder = 462 cm³ dan kon = 77 cm³. Jumlah = 539 cm³."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih kuboid + prisma, saiz A (p = 6 cm, l = 10 cm, kuboid t = 4 cm, prisma t = 3 cm). Berapakah jumlah isi padunya (cm³)?",
     "b": 330,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Kuboid = 6 × 10 × 4 = 240 cm³. Prisma = 1/2 × 6 × 3 × 10 = 90 cm³. Jumlah = 330 cm³."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih silinder + hemisfera, saiz B (r = 3.5 cm, silinder t = 8 cm). Guna π = 22/7. Berapakah jumlah isi padunya kepada 2 tempat perpuluhan (cm³)?",
     "b": 397.83,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Silinder = 308 cm³. Hemisfera = 2/3 × 22/7 × 3.5³ = 89.83 cm³. Jumlah = 397.83 cm³."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih silinder + kon, saiz A. Tukarkan jumlah isi padunya kepada liter.",
     "b": 1.848,
     "tol": 0.001,
     "suf": "liter",
     "u": "Jumlah = 1 848 cm³. Bahagi dengan 1 000: 1.848 liter."
    },
    {
     "j": "pilih",
     "t": "Air dalam sebuah kon penuh dituang ke dalam silinder yang sama tapak dan tinggi. Berapa kali tuangan diperlukan untuk memenuhkan silinder?",
     "p": [
      "3 kali",
      "Dua kali",
      "Empat kali",
      "Enam kali"
     ],
     "b": 0,
     "u": "Isi padu kon ialah satu pertiga isi padu silinder, jadi perlu 3 kali tuangan."
    },
    {
     "j": "nombor",
     "t": "Sebiji bola sfera berjejari 3.5 cm ditenggelamkan dalam bikar silinder berjejari 7 cm yang berisi air. Guna π = 22/7. Berapakah kenaikan paras air kepada 2 tempat perpuluhan (cm)?",
     "b": 1.17,
     "tol": 0.01,
     "suf": "cm",
     "u": "Isi padu bola = 4/3 × 22/7 × 3.5³ = 179.67 cm³. Luas tapak bikar = 22/7 × 7² = 154 cm². Kenaikan = 179.67 ÷ 154 = 1.17 cm."
    },
    {
     "j": "nombor",
     "t": "Sebuah kon aiskrim berjejari 3.5 cm dan tinggi tegak 12 cm diisi penuh dengan aiskrim. Satu hemisfera aiskrim berjejari 3.5 cm diletakkan di atasnya. Guna π = 22/7. Berapakah jumlah isi padu aiskrim kepada 2 tempat perpuluhan (cm³)?",
     "b": 243.83,
     "tol": 0.01,
     "suf": "cm³",
     "u": "Kon = 1/3 × 22/7 × 3.5² × 12 = 154 cm³. Hemisfera = 89.83 cm³. Jumlah = 243.83 cm³."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka sebuah objek harian (contohnya menara air, silo atau bekas minuman) daripada sekurang-kurangnya dua pepejal berbeza yang awak pelajari dalam bab ini.",
    "arahan": "Lukis atau huraikan objek itu, nyatakan dimensi setiap pepejal, kira isi padu gabungan menggunakan rumus yang betul dan tukar kepada liter. Terangkan mengapa gabungan itu sesuai untuk kegunaannya.",
    "u": "Jawapan TP6 yang kukuh memilih gabungan pepejal yang munasabah, menggunakan rumus isi padu yang betul untuk setiap bahagian, menukar unit dengan betul dan memberi justifikasi yang jelas."
   }
  }
 ]
};
