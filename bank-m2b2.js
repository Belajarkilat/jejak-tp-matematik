/* Bank soalan — Matematik Ting. 2 · Bab 2 Pemfaktoran dan Pecahan Algebra.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m2b2.js
   kemudian jalankan: node bina.js m2b2

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m2b2"] =
{
 "id": "m2b2",
 "tingkatan": 2,
 "kod": "2.0 Pemfaktoran dan Pecahan Algebra",
 "tajuk": "Kilang Faktor",
 "subtajuk": "Matematik Ting. 2 · Bab 2 Pemfaktoran dan Pecahan Algebra",
 "spi": [
  "Mempamerkan pengetahuan asas tentang faktor.",
  "Mempamerkan kefahaman tentang konsep kembangan dan pemfaktoran.",
  "Mengaplikasikan kefahaman tentang kembangan dan pemfaktoran untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kembangan dan pemfaktoran dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kembangan dan pemfaktoran dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kembangan dan pemfaktoran dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat menyatakan maksud kembangan dan mengenal faktor, serta melihat jubin algebra sebagai luas segi empat. Langkah seterusnya ialah melaksanakan kembangan yang melibatkan sebutan negatif.",
  "2": "{n} memahami konsep kembangan dan pemfaktoran sebagai proses yang songsang antara satu sama lain, serta boleh mengembangkan dua ungkapan linear. Perlu lebih latihan sebelum bergerak ke TP3.",
  "3": "{n} boleh mengembangkan dan memfaktorkan ungkapan algebra mudah, termasuk mengeluarkan faktor sepunya dan memfaktorkan x² + bx + c. Galakkan menyemak jawapan dengan mengembangkan semula.",
  "4": "{n} mampu menyelesaikan masalah rutin yang mudah menggunakan kembangan dan pemfaktoran, termasuk beza dua kuasa dua. Seterusnya latih ungkapan algebra dalam bentuk pecahan.",
  "5": "{n} dapat menambah dan menolak pecahan algebra dengan penyebut sepunya, termasuk ungkapan dengan penyebut yang mengandungi pemboleh ubah. Sudah bersedia untuk pendaraban, pembahagian dan gabungan operasi.",
  "6": "{n} berjaya melaksanakan gabungan operasi pecahan algebra dengan pemfaktoran dan menyemaknya menggunakan nilai x, serta sedar akan nilai x yang tidak dibenarkan. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pemfaktoran dan Pecahan Algebra. Cadangan: ulang hentian pertama dengan Rajah 1 sambil mengaitkan setiap jalur dan petak dengan sebutan dalam hasil kembangan."
 },
 "lampiran": {
  "kem": "<figure class=\"figure jmi\" data-w=\"t2jubin\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2jubin&quot;,&quot;mod&quot;:&quot;kembang&quot;,&quot;a&quot;:2,&quot;b&quot;:3,&quot;maks&quot;:5,&quot;kapsyen&quot;:&quot;Rajah 1 · Jubin algebra bagi (x + a)(x + b). Gerakkan gelongsor a dan b dan lihat jubin serta hasil kembangan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif jubin algebra bagi (x + a)(x + b); gelongsor a dan b menukar bilangan jalur dan petak, dan hasil kembangan dipaparkan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 206\" role=\"img\" aria-label=\"Rajah jubin algebra bagi (x + 2)(x + 3): satu jubin x kuasa dua, 2 jalur x menegak, 3 jalur x mengufuk dan 6 petak unit. Kembangan ialah x^2 + 5x + 6\"><rect x=\"91\" y=\"30\" width=\"66\" height=\"66\" rx=\"2\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.6\"></rect><rect x=\"157\" y=\"30\" width=\"12\" height=\"66\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"169\" y=\"30\" width=\"12\" height=\"66\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"91\" y=\"96\" width=\"66\" height=\"12\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"91\" y=\"108\" width=\"66\" height=\"12\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"91\" y=\"120\" width=\"66\" height=\"12\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"157\" y=\"96\" width=\"12\" height=\"12\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"157\" y=\"108\" width=\"12\" height=\"12\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"157\" y=\"120\" width=\"12\" height=\"12\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"169\" y=\"96\" width=\"12\" height=\"12\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"169\" y=\"108\" width=\"12\" height=\"12\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"169\" y=\"120\" width=\"12\" height=\"12\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><text x=\"115.9\" y=\"69\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"16\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"125.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><text x=\"124\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">x</text><text x=\"169\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"83\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">x</text><text x=\"83\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">3</text><text x=\"130\" y=\"154\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">(x + 2)(x + 3)</text><text class=\"jmi-hasil\" x=\"72.7\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">x</text><text class=\"jmi-hasil\" x=\"79.9\" y=\"168\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\">2</text><text class=\"jmi-hasil\" x=\"86.5\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\"> + 2x + 3x + 6</text><text class=\"jmi-hasil\" x=\"79.9\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">= </text><text class=\"jmi-hasil\" x=\"95.5\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">x</text><text class=\"jmi-hasil\" x=\"103.3\" y=\"188\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">2</text><text class=\"jmi-hasil\" x=\"109.9\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\"> + 5x + 6</text></svg></div><figcaption>Rajah 1 · Jubin algebra bagi (x + a)(x + b). Gerakkan gelongsor a dan b dan lihat jubin serta hasil kembangan.</figcaption></figure>",
  "jad": "<figure class=\"figure jmi\" data-w=\"t2jadual\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2jadual&quot;,&quot;p&quot;:2,&quot;q&quot;:3,&quot;r&quot;:1,&quot;s&quot;:-4,&quot;nilai&quot;:[-3,-2,-1,0,1,2,3,4,5],&quot;i0&quot;:5,&quot;kapsyen&quot;:&quot;Rajah 1 · Kaedah jadual bagi (2x + 3)(x − 4). Gerakkan gelongsor x untuk menyemak kedua-dua bentuk.&quot;,&quot;alt&quot;:&quot;Rajah interaktif kaedah jadual bagi (2x + 3)(x − 4); gelongsor x menggantikan nilai x dalam bentuk kurungan dan bentuk kembangan untuk semakan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 234\" role=\"img\" aria-label=\"Rajah kaedah jadual bagi (2x + 3)(x − 4), kembangan 2x^2 − 5x − 12. Apabila x = 2 kedua-dua bentuk bernilai −14\"><text x=\"87.2\" y=\"32\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">2x</text><text x=\"189.2\" y=\"32\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">+3</text><text x=\"20.1\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">x</text><text x=\"16.2\" y=\"103\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">−4</text><rect x=\"44\" y=\"44\" width=\"102\" height=\"36\" rx=\"2\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.4\"></rect><text x=\"83.9\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">2x</text><text x=\"99.5\" y=\"61\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><rect x=\"146\" y=\"44\" width=\"102\" height=\"36\" rx=\"2\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text x=\"189.2\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">3x</text><rect x=\"44\" y=\"80\" width=\"102\" height=\"36\" rx=\"2\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text x=\"83.3\" y=\"103\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">−8x</text><rect x=\"146\" y=\"80\" width=\"102\" height=\"36\" rx=\"2\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.4\"></rect><text x=\"185.3\" y=\"103\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">−12</text><text x=\"130\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">(2x + 3)(x − 4)</text><text class=\"jmi-hasil\" x=\"72.1\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">= </text><text class=\"jmi-hasil\" x=\"87.7\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">2x</text><text class=\"jmi-hasil\" x=\"103.3\" y=\"154\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">2</text><text class=\"jmi-hasil\" x=\"109.9\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\"> − 5x − 12</text><text class=\"jmi-hasil\" x=\"130\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Kurungan: −14</text><text class=\"jmi-hasil\" x=\"130\" y=\"202\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Dikembang: −14</text><text class=\"jmi-hasil\" x=\"130\" y=\"220\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">Sama</text></svg></div><figcaption>Rajah 1 · Kaedah jadual bagi (2x + 3)(x − 4). Gerakkan gelongsor x untuk menyemak kedua-dua bentuk.</figcaption></figure>",
  "fak": "<figure class=\"figure jmi\" data-w=\"t2jubin\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2jubin&quot;,&quot;mod&quot;:&quot;faktor&quot;,&quot;p&quot;:7,&quot;q&quot;:12,&quot;pasang&quot;:[[1,12],[2,6],[3,4],[2,5],[4,4],[3,5]],&quot;i&quot;:0,&quot;kapsyen&quot;:&quot;Rajah 1 · Sasaran x² + 7x + 12. Pilih pasangan nombor dengan gelongsor dan lihat sama ada segi empat tepat padan dengan sasaran.&quot;,&quot;alt&quot;:&quot;Rajah interaktif jubin algebra untuk memfaktorkan x kuasa dua tambah 7x tambah 12; gelongsor memilih pasangan nombor dan menunjukkan sama ada jubin padan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 262\" role=\"img\" aria-label=\"Rajah jubin algebra mencuba faktor 1 dan 12 bagi x kuasa dua tambah 7x tambah 12. Belum padan.\"><rect x=\"101\" y=\"30\" width=\"66\" height=\"66\" rx=\"2\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.6\"></rect><rect x=\"167\" y=\"30\" width=\"5\" height=\"66\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"96\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"101\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"106\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"111\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"116\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"121\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"126\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"131\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"136\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"141\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"146\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"101\" y=\"151\" width=\"66\" height=\"5\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"96\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"101\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"106\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"111\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"116\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"121\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"126\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"131\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"136\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"141\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"146\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><rect x=\"167\" y=\"151\" width=\"5\" height=\"5\" rx=\"1\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1\"></rect><text x=\"125.9\" y=\"69\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"16\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"135.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><text x=\"134\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">x</text><text x=\"169.5\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"93\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">x</text><text x=\"93\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">12</text><text x=\"54.7\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Sasaran: x</text><text x=\"126.7\" y=\"172\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><text x=\"133.3\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\"> + 7x + 12</text><text class=\"jmi-hasil\" x=\"51.1\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Lukisan: </text><text class=\"jmi-hasil\" x=\"115.9\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">x</text><text class=\"jmi-hasil\" x=\"123.1\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\">2</text><text class=\"jmi-hasil\" x=\"129.7\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\"> + 13x + 12</text><text class=\"jmi-hasil\" x=\"130\" y=\"214\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Jumlah m + n = 13 (perlu 7)</text><text class=\"jmi-hasil\" x=\"130\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Darab m × n = 12 (perlu 12)</text><text class=\"jmi-hasil\" x=\"130\" y=\"250\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">Belum padan, cuba pasangan lain</text></svg></div><figcaption>Rajah 1 · Sasaran x² + 7x + 12. Pilih pasangan nombor dengan gelongsor dan lihat sama ada segi empat tepat padan dengan sasaran.</figcaption></figure>",
  "beza": "<figure class=\"figure jmi cabar\" data-w=\"t2jubin\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2jubin&quot;,&quot;mod&quot;:&quot;beza&quot;,&quot;x&quot;:10,&quot;a&quot;:3,&quot;aMaks&quot;:7,&quot;cabar&quot;:true,&quot;kapsyen&quot;:&quot;Rajah 1 · Petak sisi x = 10 unit ditolak petak sisi a dan disusun semula. Kira dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif beza dua kuasa dua; petak besar ditolak petak kecil disusun semula menjadi segi empat tepat&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 272\" role=\"img\" aria-label=\"Rajah beza dua kuasa dua: petak sisi 10 unit ditolak petak sisi 3 unit ditukar menjadi segi empat tepat 13 kali 7, luas 91\"><rect x=\"90\" y=\"54\" width=\"80\" height=\"56\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><rect x=\"90\" y=\"30\" width=\"56\" height=\"24\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.4\"></rect><line x1=\"146\" y1=\"30\" x2=\"170\" y2=\"30\" stroke=\"var(--arteri)\" stroke-width=\"1.4\" stroke-dasharray=\"3 3\"></line><line x1=\"170\" y1=\"30\" x2=\"170\" y2=\"54\" stroke=\"var(--arteri)\" stroke-width=\"1.4\" stroke-dasharray=\"3 3\"></line><line x1=\"146\" y1=\"30\" x2=\"146\" y2=\"54\" stroke=\"var(--arteri)\" stroke-width=\"1.4\" stroke-dasharray=\"3 3\"></line><line x1=\"146\" y1=\"54\" x2=\"170\" y2=\"54\" stroke=\"var(--arteri)\" stroke-width=\"1.4\" stroke-dasharray=\"3 3\"></line><text x=\"118\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">7</text><text x=\"158\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"84\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">x</text><text x=\"130\" y=\"126\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">x = 10 unit</text><g class=\"jmi-hasil\"><rect x=\"78\" y=\"144\" width=\"80\" height=\"56\" rx=\"1\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><rect x=\"158\" y=\"144\" width=\"24\" height=\"56\" rx=\"1\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.4\"></rect><text x=\"130\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">13</text><text x=\"188\" y=\"176\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">7</text></g><text x=\"107.2\" y=\"224\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"115\" y=\"218\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><text x=\"121.6\" y=\"224\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\"> − 9</text><text class=\"jmi-hasil\" x=\"130\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">= (x + 3)(x − 3)</text><text class=\"jmi-hasil\" x=\"130\" y=\"260\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">x = 10: 91 = 13 × 7</text></svg></div><figcaption>Rajah 1 · Petak sisi x = 10 unit ditolak petak sisi a dan disusun semula. Kira dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "tambah": "<figure class=\"figure jmi cabar\" data-w=\"t2pecahan\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pecahan&quot;,&quot;cabar&quot;:true,&quot;i0&quot;:10,&quot;nilai&quot;:[-3,-2,-1,0,1,2,3,4,5,6,7],&quot;kiri&quot;:[{&quot;n&quot;:&quot;x + 1&quot;,&quot;d&quot;:&quot;2&quot;,&quot;fn&quot;:[1,1],&quot;fd&quot;:[2]},{&quot;op&quot;:&quot;+&quot;},{&quot;n&quot;:&quot;x − 1&quot;,&quot;d&quot;:&quot;3&quot;,&quot;fn&quot;:[1,-1],&quot;fd&quot;:[3]}],&quot;kanan&quot;:{&quot;n&quot;:&quot;5x + 1&quot;,&quot;d&quot;:&quot;6&quot;,&quot;fn&quot;:[5,1],&quot;fd&quot;:[6]},&quot;alt2&quot;:&quot;(x + 1)/2 + (x − 1)/3 dan (5x + 1)/6&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Kira hasil tambah (x + 1)/2 + (x − 1)/3 dahulu, kemudian semak kesetaraan dengan menggantikan x.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pecahan algebra; hasil tambah dua pecahan disemak dengan menggantikan nilai x pada kedua-dua belah&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 136\" role=\"img\" aria-label=\"Rajah pecahan algebra: (x + 1)/2 + (x − 1)/3 dan (5x + 1)/6. Apabila x = 7, kiri 6 dan kanan 6\"><text x=\"31.6\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">x + 1</text><line x1=\"27.6\" y1=\"40\" x2=\"74.6\" y2=\"40\" stroke=\"var(--ink)\" stroke-width=\"1.6\"></line><text x=\"47.2\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">2</text><text x=\"88.6\" y=\"45\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"15\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">+</text><text x=\"106.6\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">x − 1</text><line x1=\"102.6\" y1=\"40\" x2=\"149.6\" y2=\"40\" stroke=\"var(--ink)\" stroke-width=\"1.6\"></line><text x=\"122.2\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">3</text><g class=\"jmi-hasil\"><text x=\"163.6\" y=\"45\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"15\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">=</text><text x=\"181.6\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">5x + 1</text><line x1=\"177.6\" y1=\"40\" x2=\"232.4\" y2=\"40\" stroke=\"var(--ink)\" stroke-width=\"1.6\"></line><text x=\"201.1\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">6</text></g><text class=\"jmi-hasil\" x=\"130\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Kiri  : 6</text><text class=\"jmi-hasil\" x=\"130\" y=\"102\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Kanan : 6</text><text class=\"jmi-hasil\" x=\"130\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">Sama</text></svg></div><figcaption>Rajah 1 · Kira hasil tambah (x + 1)/2 + (x − 1)/3 dahulu, kemudian semak kesetaraan dengan menggantikan x.</figcaption></figure>",
  "darab": "<figure class=\"figure jmi\" data-w=\"t2pecahan\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pecahan&quot;,&quot;i0&quot;:12,&quot;nilai&quot;:[-3,-2,-1,0,1,2,3,4,5,6,7,8,9],&quot;kiri&quot;:[{&quot;n&quot;:&quot;x^2 − 9&quot;,&quot;d&quot;:&quot;6&quot;,&quot;fn&quot;:[1,0,-9],&quot;fd&quot;:[6]},{&quot;op&quot;:&quot;x&quot;},{&quot;n&quot;:&quot;3&quot;,&quot;d&quot;:&quot;x + 3&quot;,&quot;fn&quot;:[3],&quot;fd&quot;:[1,3]}],&quot;kanan&quot;:{&quot;n&quot;:&quot;x − 3&quot;,&quot;d&quot;:&quot;2&quot;,&quot;fn&quot;:[1,-3],&quot;fd&quot;:[2]},&quot;alt2&quot;:&quot;(x kuasa dua tolak 9)/6 darab 3/(x + 3) dan (x tolak 3)/2&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Bandingkan hasil darab dengan bentuk termudah. Cuba x = −3 dan lihat apa yang berlaku.&quot;,&quot;alt&quot;:&quot;Rajah interaktif darab pecahan algebra; gelongsor x menyemak kesetaraan dan menunjukkan nilai x yang menjadikan penyebut sifar&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 136\" role=\"img\" aria-label=\"Rajah pecahan algebra: (x kuasa dua tolak 9)/6 darab 3/(x + 3) dan (x tolak 3)/2. Apabila x = 9, kiri 3 dan kanan 3\"><text x=\"32.2\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"40\" y=\"28\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><text x=\"46.6\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\"> − 9</text><line x1=\"28.2\" y1=\"40\" x2=\"81.8\" y2=\"40\" stroke=\"var(--ink)\" stroke-width=\"1.6\"></line><text x=\"51.1\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">6</text><text x=\"95.8\" y=\"45\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"15\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">×</text><text x=\"129.4\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">3</text><line x1=\"109.8\" y1=\"40\" x2=\"156.8\" y2=\"40\" stroke=\"var(--ink)\" stroke-width=\"1.6\"></line><text x=\"113.8\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">x + 3</text><text x=\"170.8\" y=\"45\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"15\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">=</text><text x=\"188.8\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">x − 3</text><line x1=\"184.8\" y1=\"40\" x2=\"231.8\" y2=\"40\" stroke=\"var(--ink)\" stroke-width=\"1.6\"></line><text x=\"204.4\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">2</text><text class=\"jmi-hasil\" x=\"130\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Kiri  : 3</text><text class=\"jmi-hasil\" x=\"130\" y=\"102\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Kanan : 3</text><text class=\"jmi-hasil\" x=\"130\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">Sama</text></svg></div><figcaption>Rajah 1 · Bandingkan hasil darab dengan bentuk termudah. Cuba x = −3 dan lihat apa yang berlaku.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Kedai Jubin",
   "sk": "2.1.1 / 2.1.2 Maksud dan pelaksanaan kembangan dua ungkapan",
   "lampiran": "kem",
   "kadNama": "Al-Jabr",
   "kadEm": "📜",
   "kadFakta": "Perkataan algebra datang daripada al-jabr, satu istilah dalam buku Al-Khwarizmi yang ditulis kira-kira tahun 820.",
   "bosKadNama": "Jubin Algebra",
   "bosKadEm": "🧩",
   "bosKadFakta": "Jubin algebra menukar pendaraban kepada luas. (x + 2)(x + 3) ialah luas segi empat tepat yang dipecahkan kepada empat bahagian.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Kembangan dua ungkapan algebra bermaksud:",
     "p": [
      "Mendarab setiap sebutan dalam satu kurungan dengan setiap sebutan dalam kurungan lain",
      "Menambah semua sebutan daripada kedua-dua kurungan tanpa mendarab",
      "Mencari faktor sepunya bagi semua sebutan dalam kedua-dua kurungan",
      "Menggantikan x dengan satu nombor tertentu dalam setiap kurungan"
     ],
     "b": 0,
     "u": "Kembangan ialah mendarab setiap sebutan dalam kurungan pertama dengan setiap sebutan dalam kurungan kedua, kemudian mengumpul sebutan serupa."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, jubin besar berwarna kuning mewakili:",
     "p": [
      "2x + 1",
      "x²",
      "x + 2",
      "x + 1"
     ],
     "b": 1,
     "u": "Jubin besar berbentuk petak dengan sisi x, jadi luasnya x kali x, iaitu x²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 2 dan b = 3. Berapakah bilangan petak unit merah?",
     "b": 6,
     "tol": 0.01,
     "u": "Petak unit membentuk segi empat tepat a kali b, iaitu 2 × 3 = 6 petak."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 4 dan b = 3. Berapakah jumlah jalur x berwarna hijau?",
     "b": 7,
     "tol": 0.01,
     "u": "Ada 4 jalur x menegak dan 3 jalur x mengufuk, jadi 4 + 3 = 7 jalur x. Itulah pekali x dalam hasil kembangan."
    },
    {
     "j": "pilih",
     "t": "Kembangkan (x + 1)(x + 4).",
     "p": [
      "x² + 4x + 5",
      "x² + 5x + 8",
      "x² + 5x + 4",
      "x² + 3x + 4"
     ],
     "b": 2,
     "u": "Darab x dengan (x + 4) untuk mendapat x² + 4x, kemudian 1 dengan (x + 4) untuk mendapat x + 4. Kumpul: x² + 5x + 4."
    },
    {
     "j": "pilih",
     "t": "Kembangkan (x + 3)(x + 5).",
     "p": [
      "x² + 8x + 8",
      "x² + 15x + 8",
      "x² + 2x + 15",
      "x² + 8x + 15"
     ],
     "b": 3,
     "u": "x² + 5x + 3x + 15 = x² + 8x + 15. Hasil tambah 3 dan 5 ialah pekali x, hasil darabnya ialah sebutan pemalar."
    },
    {
     "j": "pilih",
     "t": "Kembangkan (x + 6)(x + 2).",
     "p": [
      "x² + 8x + 12",
      "x² + 8x + 8",
      "x² + 12x + 8",
      "x² + 4x + 12"
     ],
     "b": 0,
     "u": "x² + 2x + 6x + 12 = x² + 8x + 12."
    },
    {
     "j": "susun",
     "t": "Susun langkah mengembangkan (x + 2)(x + 3).",
     "p": [
      "Darab x dengan (x + 3) untuk mendapat x² + 3x",
      "Darab 2 dengan (x + 3) untuk mendapat 2x + 6",
      "Tulis x² + 3x + 2x + 6",
      "Kumpul sebutan serupa untuk mendapat x² + 5x + 6"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Darab setiap sebutan dahulu, tulis semua hasil darab, kemudian kumpul sebutan serupa."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA ungkapan yang sama dengan x² + 7x + 12.",
    "p": [
     "(x + 3)(x + 4)",
     "(x + 4)(x + 3)",
     "x(x + 7) + 12",
     "(x + 2)(x + 6)",
     "(x + 1)(x + 12)",
     "x² + 7x − 12"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "(x + 3)(x + 4) dan (x + 4)(x + 3) memberi x² + 7x + 12, dan x(x + 7) + 12 = x² + 7x + 12. (x + 2)(x + 6) memberi x² + 8x + 12, (x + 1)(x + 12) memberi x² + 13x + 12, dan pilihan terakhir berbeza tanda pada 12."
   }
  },
  {
   "n": 2,
   "tempat": "Meja Grid",
   "sk": "2.1.3 / 2.1.4 Mempermudah ungkapan algebra dan menyelesaikan masalah",
   "lampiran": "jad",
   "kadNama": "Kaedah Jadual",
   "kadEm": "📋",
   "kadFakta": "Kaedah jadual memastikan tiada sebutan yang tertinggal. Setiap sebutan dalam satu kurungan didarab dengan setiap sebutan dalam kurungan lain.",
   "bosKadNama": "Semak Dengan Nilai",
   "bosKadEm": "✅",
   "bosKadFakta": "Ganti x dengan satu nombor pada kedua-dua bentuk. Jika hasilnya sama, kembangan awak besar kemungkinan betul.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, sel kiri atas ialah hasil darab 2x dan x. Nilainya ialah:",
     "p": [
      "2x",
      "2x²",
      "3x",
      "x²"
     ],
     "b": 1,
     "u": "2x kali x = 2x². Pekali 2 didarab dengan 1, dan x kali x ialah x²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, sel kanan bawah ialah hasil darab +3 dan −4. Berapakah nilainya?",
     "b": -12,
     "tol": 0.01,
     "u": "3 kali −4 = −12. Positif kali negatif memberi negatif."
    },
    {
     "j": "pilih",
     "t": "Kembangkan (2x + 3)(x − 4).",
     "p": [
      "2x² + 5x − 12",
      "2x² − 5x + 12",
      "2x² − 5x − 12",
      "2x² − 11x − 12"
     ],
     "b": 2,
     "u": "2x² − 8x + 3x − 12 = 2x² − 5x − 12. Sebutan x ialah −8x + 3x = −5x."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 2. Berapakah nilai (2x + 3)(x − 4)?",
     "b": -14,
     "tol": 0.01,
     "u": "(2 × 2 + 3)(2 − 4) = 7 × (−2) = −14. Bentuk dikembang 2x² − 5x − 12 juga memberi 8 − 10 − 12 = −14."
    },
    {
     "j": "pilih",
     "t": "Kembangkan (x − 2)(x − 5).",
     "p": [
      "x² + 7x + 10",
      "x² − 7x − 10",
      "x² − 3x + 10",
      "x² − 7x + 10"
     ],
     "b": 3,
     "u": "x² − 5x − 2x + 10 = x² − 7x + 10. Negatif kali negatif memberi +10."
    },
    {
     "j": "pilih",
     "t": "Permudahkan 3(x + 2) + (x + 1)(x + 3).",
     "p": [
      "x² + 7x + 9",
      "x² + 4x + 9",
      "x² + 7x + 6",
      "x² + 10x + 9"
     ],
     "b": 0,
     "u": "3(x + 2) = 3x + 6 dan (x + 1)(x + 3) = x² + 4x + 3. Tambah: x² + 7x + 9."
    },
    {
     "j": "nombor",
     "t": "Sebuah kebun segi empat tepat berukuran (x + 5) m panjang dan (x + 2) m lebar. Apabila x = 3, berapakah luas kebun dalam m²?",
     "b": 40,
     "tol": 0.01,
     "suf": "m²",
     "u": "Panjang 8 m dan lebar 5 m, jadi luas 40 m². Bentuk dikembang x² + 7x + 10 juga memberi 9 + 21 + 10 = 40."
    },
    {
     "j": "susun",
     "t": "Susun langkah mempermudah (x + 2)(x − 1) + 3x.",
     "p": [
      "Kembangkan (x + 2)(x − 1) untuk mendapat x² + x − 2",
      "Tulis semula dengan + 3x di hujungnya",
      "Kumpul sebutan serupa, iaitu x dan 3x",
      "Tulis jawapan x² + 4x − 2"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Kembangkan dahulu, kemudian tambah sebutan lain dan kumpul sebutan serupa."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah bingkai gambar berukuran (2x + 1) cm panjang dan (x + 3) cm lebar. Apabila x = 4, berapakah luas bingkai dalam cm²?",
    "b": 63,
    "tol": 0.01,
    "suf": "cm²",
    "u": "Panjang 9 cm dan lebar 7 cm, jadi luas 63 cm². Semakan: 2x² + 7x + 3 = 32 + 28 + 3 = 63."
   }
  },
  {
   "n": 3,
   "tempat": "Dewan Faktor",
   "sk": "2.2.1 / 2.2.2 Hubungan kembangan dengan pemfaktoran dan pelbagai kaedah",
   "lampiran": "fak",
   "kadNama": "Songsangan",
   "kadEm": "🔁",
   "kadFakta": "Kembangan dan pemfaktoran ialah songsangan antara satu sama lain, macam tambah dan tolak. Apa yang satu lakukan, satu lagi buat balik.",
   "bosKadNama": "Faktor Sepunya",
   "bosKadEm": "🔍",
   "bosKadFakta": "Sentiasa cari faktor sepunya dahulu, contohnya 6x + 9 = 3(2x + 3), sebelum mencuba kaedah lain.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Pemfaktoran ialah songsangan bagi:",
     "p": [
      "Penolakan sebutan serupa",
      "Kembangan",
      "Penggantian nilai x",
      "Pengiraan luas segi empat"
     ],
     "b": 1,
     "u": "Kembangan mendarabkan kurungan, pemfaktoran menulis semula sebagai hasil darab kurungan. Kedua-duanya songsang antara satu sama lain."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, sasaran ialah x² + 7x + 12. Dua nombor m dan n yang betul mesti mempunyai hasil darab m × n berapa?",
     "b": 12,
     "tol": 0.01,
     "u": "Sebutan pemalar 12 datang daripada petak unit, iaitu m × n, jadi m × n = 12."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, sasaran ialah x² + 7x + 12. Dua nombor m dan n yang betul mesti mempunyai hasil tambah m + n berapa?",
     "b": 7,
     "tol": 0.01,
     "u": "Pekali x ialah m + n, kerana m jalur menegak dan n jalur mengufuk, jadi m + n = 7."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pasangan yang membentuk segi empat tepat dan padan dengan sasaran ialah:",
     "p": [
      "2 dan 6",
      "2 dan 5",
      "3 dan 4",
      "4 dan 4"
     ],
     "b": 2,
     "u": "3 × 4 = 12 dan 3 + 4 = 7. Pasangan 2 dan 6 memberi jumlah 8, pasangan 2 dan 5 memberi darab 10, dan pasangan 4 dan 4 memberi jumlah 8."
    },
    {
     "j": "pilih",
     "t": "Faktorkan x² + 7x + 12.",
     "p": [
      "(x + 2)(x + 6)",
      "(x + 1)(x + 12)",
      "(x + 7)(x + 12)",
      "(x + 3)(x + 4)"
     ],
     "b": 3,
     "u": "Cari dua nombor yang darabnya 12 dan jumlahnya 7, iaitu 3 dan 4. Maka x² + 7x + 12 = (x + 3)(x + 4)."
    },
    {
     "j": "pilih",
     "t": "Faktorkan 6x + 9 dengan mengeluarkan faktor sepunya.",
     "p": [
      "3(2x + 3)",
      "6(x + 9)",
      "3(2x + 9)",
      "2(3x + 3)"
     ],
     "b": 0,
     "u": "Faktor sepunya terbesar bagi 6 dan 9 ialah 3. 6x + 9 = 3(2x + 3). Pilihan lain memberi 6x + 54, 6x + 27 dan 6x + 6."
    },
    {
     "j": "pilih",
     "t": "Faktorkan x² + 5x + 6.",
     "p": [
      "(x + 1)(x + 6)",
      "(x + 2)(x + 3)",
      "(x + 5)(x + 1)",
      "(x + 2)(x + 4)"
     ],
     "b": 1,
     "u": "Dua nombor dengan hasil darab 6 dan hasil tambah 5 ialah 2 dan 3. Maka x² + 5x + 6 = (x + 2)(x + 3)."
    },
    {
     "j": "pilih",
     "t": "Faktorkan x² − 5x + 6.",
     "p": [
      "(x + 2)(x + 3)",
      "(x − 1)(x − 6)",
      "(x − 2)(x − 3)",
      "(x + 2)(x − 3)"
     ],
     "b": 2,
     "u": "Hasil darab positif dan hasil tambah negatif bermakna kedua-dua nombor negatif: −2 dan −3. Maka x² − 5x + 6 = (x − 2)(x − 3)."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pemfaktoran yang betul bagi x² + 9x + 20.",
    "p": [
     "(x + 4)(x + 5)",
     "(x + 5)(x + 4)",
     "(5 + x)(4 + x)",
     "(x + 2)(x + 10)",
     "(x − 4)(x − 5)",
     "(x + 1)(x + 20)"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "4 × 5 = 20 dan 4 + 5 = 9. Tiga pilihan pertama sama nilai. (x + 2)(x + 10) memberi x² + 12x + 20, (x − 4)(x − 5) memberi x² − 9x + 20, dan (x + 1)(x + 20) memberi x² + 21x + 20."
   }
  },
  {
   "n": 4,
   "tempat": "Studio Beza",
   "sk": "2.2.2 / 2.2.3 Pemfaktoran beza dua kuasa dua dan penyelesaian masalah",
   "lampiran": "beza",
   "kadNama": "Dua Kuasa Dua",
   "kadEm": "➖",
   "kadFakta": "Beza dua kuasa dua hanya berlaku apabila kedua-dua sebutan ialah kuasa dua sempurna dan ada tanda tolak di antaranya.",
   "bosKadNama": "Kira Cepat",
   "bosKadEm": "⚡",
   "bosKadFakta": "51² − 49² = (51 + 49)(51 − 49) = 200. Beza dua kuasa dua boleh menjadi jalan pintas untuk mengira dalam kepala.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 3. Berapakah luas bentuk L (kuning dan hijau) dalam unit persegi?",
     "b": 91,
     "tol": 0.01,
     "u": "Luas petak besar 10 × 10 = 100. Tolak petak kecil 3 × 3 = 9. Luas bentuk L ialah 91."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 3. Apabila bentuk L disusun semula menjadi segi empat tepat, berapakah panjangnya dalam unit?",
     "b": 13,
     "tol": 0.01,
     "u": "Panjang ialah x + a = 10 + 3 = 13 unit."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 3. Berapakah lebar segi empat tepat itu dalam unit?",
     "b": 7,
     "tol": 0.01,
     "u": "Lebar ialah x − a = 10 − 3 = 7 unit. Semakan: 13 × 7 = 91."
    },
    {
     "j": "pilih",
     "t": "Faktorkan x² − 9.",
     "p": [
      "(x − 3)(x − 3)",
      "(x + 3)(x + 3)",
      "(x + 9)(x − 1)",
      "(x + 3)(x − 3)"
     ],
     "b": 3,
     "u": "x² − 9 = x² − 3² = (x + 3)(x − 3)."
    },
    {
     "j": "pilih",
     "t": "Faktorkan x² − 25.",
     "p": [
      "(x + 5)(x − 5)",
      "(x − 5)(x − 5)",
      "(x + 5)(x + 5)",
      "(x + 25)(x − 1)"
     ],
     "b": 0,
     "u": "x² − 25 = x² − 5² = (x + 5)(x − 5)."
    },
    {
     "j": "pilih",
     "t": "Faktorkan 4x² − 9.",
     "p": [
      "(4x + 3)(x − 3)",
      "(2x + 3)(2x − 3)",
      "(2x − 3)(2x − 3)",
      "(2x + 9)(2x − 1)"
     ],
     "b": 1,
     "u": "4x² − 9 = (2x)² − 3² = (2x + 3)(2x − 3)."
    },
    {
     "j": "nombor",
     "t": "Guna beza dua kuasa dua untuk mengira 51² − 49².",
     "b": 200,
     "tol": 0.01,
     "u": "51² − 49² = (51 + 49)(51 − 49) = 100 × 2 = 200."
    },
    {
     "j": "pilih",
     "t": "Antara ungkapan berikut, yang manakah boleh difaktorkan sebagai beza dua kuasa dua?",
     "p": [
      "x² + 36",
      "x² − 6x",
      "x² − 36",
      "x² − 35"
     ],
     "b": 2,
     "u": "x² − 36 = x² − 6². x² + 36 ada tanda tambah, x² − 6x tidak mempunyai kuasa dua sempurna kedua, dan 35 bukan kuasa dua sempurna."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah taman petak bersisi 12 m mempunyai kolam petak bersisi 5 m di satu sudut. Guna (12 + 5)(12 − 5) untuk mencari luas taman yang tinggal dalam m².",
    "b": 119,
    "tol": 0.01,
    "suf": "m²",
    "u": "12² − 5² = (12 + 5)(12 − 5) = 17 × 7 = 119 m². Semakan: 144 − 25 = 119."
   }
  },
  {
   "n": 5,
   "tempat": "Kafe Pecahan",
   "sk": "2.3.1 Penambahan dan penolakan ungkapan algebra termasuk pecahan algebra",
   "lampiran": "tambah",
   "kadNama": "Penyebut Sepunya",
   "kadEm": "🎯",
   "kadFakta": "Sebelum menambah pecahan algebra, samakan penyebutnya dahulu. Cara ini sama seperti menambah pecahan nombor biasa.",
   "bosKadNama": "Tanda Tolak",
   "bosKadEm": "⚠️",
   "bosKadFakta": "Apabila menolak pecahan, tanda tolak meliputi semua sebutan dalam pengangka kedua. Ini kesilapan paling biasa dalam bab ini.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Penyebut sepunya terkecil bagi 2 dan 3 ialah:",
     "p": [
      "12",
      "24",
      "36",
      "6"
     ],
     "b": 3,
     "u": "Gandaan sepunya terkecil bagi 2 dan 3 ialah 6. Nombor 12, 24 dan 36 ialah gandaan sepunya juga tetapi bukan yang terkecil."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 7. Berapakah nilai (x + 1)/2 + (x − 1)/3 di sebelah kiri?",
     "b": 6,
     "tol": 0.01,
     "u": "(7 + 1)/2 + (7 − 1)/3 = 4 + 2 = 6."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 7. Berapakah nilai (5x + 1)/6 di sebelah kanan?",
     "b": 6,
     "tol": 0.01,
     "u": "(5 × 7 + 1)/6 = 36/6 = 6. Nilai ini sama dengan sebelah kiri."
    },
    {
     "j": "pilih",
     "t": "Permudahkan (x + 1)/2 + (x − 1)/3.",
     "p": [
      "(5x + 1)/6",
      "2x/5",
      "(5x − 1)/6",
      "(x + 1)/6"
     ],
     "b": 0,
     "u": "Penyebut sepunya ialah 6. 3(x + 1)/6 + 2(x − 1)/6 = (3x + 3 + 2x − 2)/6 = (5x + 1)/6."
    },
    {
     "j": "pilih",
     "t": "Permudahkan 3/(2x) + 1/x.",
     "p": [
      "4/(3x)",
      "5/(2x)",
      "4/(2x)",
      "3/(2x²)"
     ],
     "b": 1,
     "u": "Tukar 1/x kepada 2/(2x). Kemudian 3/(2x) + 2/(2x) = 5/(2x). Penyebut tidak ditambah."
    },
    {
     "j": "pilih",
     "t": "Permudahkan (x + 2)/4 − (x − 1)/6.",
     "p": [
      "(x + 4)/12",
      "(x + 3)/2",
      "(x + 8)/12",
      "(5x + 8)/12"
     ],
     "b": 2,
     "u": "Penyebut sepunya 12. 3(x + 2)/12 − 2(x − 1)/12 = (3x + 6 − 2x + 2)/12 = (x + 8)/12."
    },
    {
     "j": "pilih",
     "t": "Permudahkan 2/x + 3/(x + 1).",
     "p": [
      "5/(2x + 1)",
      "(5x + 2)/(x + 1)",
      "(5x + 2)/x",
      "(5x + 2)/(x(x + 1))"
     ],
     "b": 3,
     "u": "Penyebut sepunya x(x + 1). 2(x + 1)/[x(x + 1)] + 3x/[x(x + 1)] = (2x + 2 + 3x)/[x(x + 1)] = (5x + 2)/[x(x + 1)]."
    },
    {
     "j": "susun",
     "t": "Susun langkah menambah (x + 1)/2 + (x − 1)/3.",
     "p": [
      "Cari penyebut sepunya, iaitu 6",
      "Tulis 3(x + 1)/6 + 2(x − 1)/6",
      "Tambah pengangka: (3x + 3 + 2x − 2)/6",
      "Kumpul sebutan serupa untuk mendapat (5x + 1)/6"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Samakan penyebut dahulu, tulis semula pengangka, tambah, kemudian kumpul sebutan serupa."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Permudahkan (2x + 1)/3 − (x − 2)/6.",
    "p": [
     "(3x + 4)/6",
     "3x/6",
     "(x + 3)/6",
     "(5x + 4)/6"
    ],
    "b": 0,
    "u": "Tukar kepada penyebut 6: 2(2x + 1)/6 − (x − 2)/6 = (4x + 2 − x + 2)/6 = (3x + 4)/6. Tanda tolak meliputi kedua-dua sebutan x − 2."
   }
  },
  {
   "n": 6,
   "tempat": "Reka Ungkapan",
   "sk": "2.3.2 / 2.3.3 Pendaraban, pembahagian dan gabungan operasi ungkapan algebra",
   "lampiran": "darab",
   "kadNama": "Gugur Faktor",
   "kadEm": "✂️",
   "kadFakta": "Faktor yang sama pada pengangka dan penyebut boleh digugurkan, tetapi faktor itu tidak boleh sama dengan sifar.",
   "bosKadNama": "Penyebut Sifar",
   "bosKadEm": "🚫",
   "bosKadFakta": "Pembahagian dengan sifar tidak tertakrif. Dalam Rajah 1, x = −3 menjadikan penyebut 3/(x + 3) sifar.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 9. Berapakah nilai (x² − 9)/6?",
     "b": 12,
     "tol": 0.01,
     "u": "(81 − 9)/6 = 72/6 = 12."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 9. Berapakah nilai 3/(x + 3)?",
     "b": 0.25,
     "tol": 0.001,
     "u": "3/(9 + 3) = 3/12 = 0.25."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 9. Berapakah nilai (x − 3)/2 di sebelah kanan?",
     "b": 3,
     "tol": 0.01,
     "u": "(9 − 3)/2 = 3. Hasil darab di sebelah kiri ialah 12 × 0.25 = 3, sama dengan sebelah kanan."
    },
    {
     "j": "pilih",
     "t": "Faktorkan x² − 9 sebelum menggugurkan faktor sepunya dalam Rajah 1. Hasilnya ialah:",
     "p": [
      "(x − 3)(x − 3)",
      "(x + 3)(x − 3)",
      "(x + 3)(x + 3)",
      "(x + 9)(x − 1)"
     ],
     "b": 1,
     "u": "x² − 9 = (x + 3)(x − 3). Faktor (x + 3) kemudian boleh digugurkan dengan penyebut x + 3."
    },
    {
     "j": "pilih",
     "t": "Permudahkan (x² − 9)/6 × 3/(x + 3).",
     "p": [
      "(x + 3)/2",
      "(x − 3)/6",
      "(x − 3)/2",
      "(x² − 9)/2"
     ],
     "b": 2,
     "u": "Faktorkan x² − 9 = (x + 3)(x − 3). Gugurkan (x + 3), dan 3/6 = 1/2. Hasilnya (x − 3)/2."
    },
    {
     "j": "pilih",
     "t": "Permudahkan (x + 2)/4 ÷ (x + 2)/8.",
     "p": [
      "1/2",
      "(x + 2)/2",
      "(x + 2)/8",
      "2"
     ],
     "b": 3,
     "u": "Bahagi dengan pecahan bermaksud darab dengan songsangnya: (x + 2)/4 × 8/(x + 2) = 8/4 = 2."
    },
    {
     "j": "pilih",
     "t": "Permudahkan (6x + 12)/9.",
     "p": [
      "(2x + 4)/3",
      "(2x + 12)/3",
      "(6x + 4)/3",
      "(x + 2)/3"
     ],
     "b": 0,
     "u": "Faktor sepunya 3 pada pengangka dan penyebut: (6x + 12)/9 = 3(2x + 4)/(3 × 3) = (2x + 4)/3. Bahagikan SEMUA sebutan pengangka."
    },
    {
     "j": "nombor",
     "t": "Permudahkan (2x + 4)/(x + 2). Berapakah nilainya apabila x = 5?",
     "b": 2,
     "tol": 0.01,
     "u": "2x + 4 = 2(x + 2), jadi (2x + 4)/(x + 2) = 2 untuk semua x selain −2. Apabila x = 5 nilainya ialah 14/7 = 2."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu ungkapan pecahan algebra yang boleh dipermudahkan menggunakan pemfaktoran, dan tunjukkan bahawa jawapan awak betul.",
    "arahan": "Tulis pecahan awak, faktorkan pengangka dan penyebut, gugurkan faktor sepunya, dan semak dengan menggantikan satu nilai x pada bentuk asal dan bentuk termudah. Nyatakan satu nilai x yang tidak dibenarkan dan sebabnya.",
    "u": "Jawapan TP6 yang kukuh membina ungkapan yang boleh difaktorkan, mempermudahkannya dengan betul, menyemak dengan menggantikan nilai x pada kedua-dua bentuk, dan mengenal pasti nilai x yang menjadikan penyebut sifar."
   }
  }
 ]
};
