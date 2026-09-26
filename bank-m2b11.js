/* Bank soalan — Matematik Ting. 2 · Bab 11 Transformasi Isometri.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m2b11.js
   kemudian jalankan: node bina.js m2b11

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m2b11"] =
{
 "id": "m2b11",
 "tingkatan": 2,
 "kod": "11.0 Transformasi Isometri",
 "tajuk": "Kilang Ubin Ajaib",
 "subtajuk": "Matematik Ting. 2 · Bab 11 Transformasi Isometri",
 "spi": [
  "Mempamerkan pengetahuan asas tentang translasi, pantulan dan putaran.",
  "Mempamerkan kefahaman tentang translasi, pantulan dan putaran.",
  "Mengaplikasikan kefahaman tentang translasi, pantulan dan putaran untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang translasi, pantulan dan putaran dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang translasi, pantulan dan putaran dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang translasi, pantulan dan putaran dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat mengenal pasti translasi, pantulan dan putaran dalam situasi harian serta menyebut maksud kongruen. Langkah seterusnya ialah menerangkan bagaimana setiap transformasi mengubah kedudukan objek pada satah.",
  "2": "{n} memahami bahawa translasi menggerakkan objek, pantulan menghasilkan imej songsang dan putaran memusingkan objek pada pusat tetap. Perlu lebih latihan menentukan imej pada grid sebelum bergerak ke TP3.",
  "3": "{n} boleh menentukan imej bagi titik dan objek di bawah translasi, pantulan dan putaran yang mudah, termasuk memakai vektor translasi dan kedudukan paksi atau pusat. Galakkan menyemak jawapan dengan melukis pada grid.",
  "4": "{n} mampu menyelesaikan masalah rutin yang mudah melibatkan translasi, seperti mencari vektor daripada objek dan imej serta menggabungkan dua translasi. Seterusnya latih masalah yang melibatkan isometri dan kekongruenan.",
  "5": "{n} dapat menerangkan isometri sebagai transformasi yang mengekalkan jarak, membezakannya daripada pembesaran dan pengecilan, serta menghubungkan isometri dengan kekongruenan. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya menggunakan simetri putaran dan menentukan peringkatnya, serta menggabungkan translasi, pantulan dan putaran untuk mereka corak dengan alasan yang jelas. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Transformasi Isometri. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menamakan jenis transformasi bagi setiap perubahan, dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "trf1": "<figure class=\"figure jmi\" data-w=\"t2iso\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2iso&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Objek L hijau digerakkan oleh vektor translasi. Gerakkan gelongsor a dan b, kemudian perhatikan imej merah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif translasi pada grid: objek berbentuk L digerakkan oleh vektor (a, b); gelongsor a dan b menukar vektor&quot;,&quot;mod&quot;:&quot;translasi&quot;,&quot;a&quot;:6,&quot;b&quot;:5}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 332\" role=\"img\" aria-label=\"Rajah translasi pada grid: objek berbentuk L digerakkan oleh vektor (2, 2); gelongsor a dan b menukar vektor\"><line x1=\"30\" y1=\"26\" x2=\"30\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"226\" x2=\"230\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"30\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−5</text><line x1=\"50\" y1=\"26\" x2=\"50\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"206\" x2=\"230\" y2=\"206\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"50\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><text x=\"26\" y=\"210\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−4</text><line x1=\"70\" y1=\"26\" x2=\"70\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"186\" x2=\"230\" y2=\"186\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"70\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−3</text><text x=\"26\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−3</text><line x1=\"90\" y1=\"26\" x2=\"90\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"166\" x2=\"230\" y2=\"166\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"90\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><text x=\"26\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−2</text><line x1=\"110\" y1=\"26\" x2=\"110\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"146\" x2=\"230\" y2=\"146\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"110\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−1</text><text x=\"26\" y=\"150\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−1</text><line x1=\"130\" y1=\"26\" x2=\"130\" y2=\"226\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><line x1=\"30\" y1=\"126\" x2=\"230\" y2=\"126\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><text x=\"130\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"26\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"150\" y1=\"26\" x2=\"150\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"106\" x2=\"230\" y2=\"106\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"150\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"26\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"170\" y1=\"26\" x2=\"170\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"86\" x2=\"230\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"170\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"26\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"190\" y1=\"26\" x2=\"190\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"66\" x2=\"230\" y2=\"66\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"190\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"26\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"210\" y1=\"26\" x2=\"210\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"46\" x2=\"230\" y2=\"46\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"210\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"26\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"230\" y1=\"26\" x2=\"230\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"26\" x2=\"230\" y2=\"26\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"230\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"26\" y=\"30\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"234\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"135\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><polygon points=\"110,146 170,146 170,126 130,126 130,106 110,106\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><g class=\"jmi-hasil\"><polygon points=\"150,106 210,106 210,86 170,86 170,66 150,66\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><line x1=\"110\" y1=\"146\" x2=\"144.3\" y2=\"111.7\" stroke=\"var(--vena)\" stroke-width=\"2\"></line><polygon points=\"150,106 141.5,108.8 147.2,114.5\" fill=\"var(--vena)\"></polygon></g><circle cx=\"110\" cy=\"146\" r=\"3\" fill=\"var(--teal)\"></circle><text x=\"117\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">A</text><text class=\"jmi-hasil\" x=\"157\" y=\"100\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A′</text><g class=\"jmi-hasil\"><circle cx=\"150\" cy=\"106\" r=\"3\" fill=\"var(--arteri)\"></circle></g><text x=\"8\" y=\"270\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Vektor translasi</text><text x=\"133\" y=\"270\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">=</text><text x=\"165\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"165\" y=\"280\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><path d=\"M149 252 L145 252 L145 285 L149 285\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\" stroke-linejoin=\"round\"></path><path d=\"M181 252 L185 252 L185 285 L181 285\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\" stroke-linejoin=\"round\"></path><text class=\"jmi-hasil\" x=\"8\" y=\"306\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A(−1, −1) → A′(1, 1)</text><text class=\"jmi-hasil\" x=\"8\" y=\"322\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Jarak AA′ = 2.83 unit</text></svg></div><figcaption>Rajah 1 · Objek L hijau digerakkan oleh vektor translasi. Gerakkan gelongsor a dan b, kemudian perhatikan imej merah.</figcaption></figure>",
  "pan2": "<figure class=\"figure jmi\" data-w=\"t2iso\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2iso&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Objek L hijau dipantul pada garis putus-putus ungu. Pilih paksi pantulan dan bandingkan jarak A dan A′ ke paksi.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pantulan pada grid: objek berbentuk L dipantul pada paksi yang dipilih; gelongsor menukar paksi pantulan&quot;,&quot;mod&quot;:&quot;pantulan&quot;,&quot;p&quot;:0}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 308\" role=\"img\" aria-label=\"Rajah pantulan pada grid: objek berbentuk L dipantul pada paksi x = 0; gelongsor memilih paksi pantulan\"><line x1=\"30\" y1=\"26\" x2=\"30\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"226\" x2=\"230\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"30\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−5</text><line x1=\"50\" y1=\"26\" x2=\"50\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"206\" x2=\"230\" y2=\"206\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"50\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><text x=\"26\" y=\"210\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−4</text><line x1=\"70\" y1=\"26\" x2=\"70\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"186\" x2=\"230\" y2=\"186\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"70\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−3</text><text x=\"26\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−3</text><line x1=\"90\" y1=\"26\" x2=\"90\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"166\" x2=\"230\" y2=\"166\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"90\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><text x=\"26\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−2</text><line x1=\"110\" y1=\"26\" x2=\"110\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"146\" x2=\"230\" y2=\"146\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"110\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−1</text><text x=\"26\" y=\"150\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−1</text><line x1=\"130\" y1=\"26\" x2=\"130\" y2=\"226\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><line x1=\"30\" y1=\"126\" x2=\"230\" y2=\"126\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><text x=\"130\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"26\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"150\" y1=\"26\" x2=\"150\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"106\" x2=\"230\" y2=\"106\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"150\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"26\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"170\" y1=\"26\" x2=\"170\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"86\" x2=\"230\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"170\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"26\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"190\" y1=\"26\" x2=\"190\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"66\" x2=\"230\" y2=\"66\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"190\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"26\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"210\" y1=\"26\" x2=\"210\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"46\" x2=\"230\" y2=\"46\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"210\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"26\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"230\" y1=\"26\" x2=\"230\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"26\" x2=\"230\" y2=\"26\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"230\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"26\" y=\"30\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"234\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"135\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><line x1=\"130\" y1=\"26\" x2=\"130\" y2=\"226\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-dasharray=\"6 4\"></line><polygon points=\"150,106 190,106 190,86 170,86 170,46 150,46\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><g class=\"jmi-hasil\"><polygon points=\"110,106 70,106 70,86 90,86 90,46 110,46\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><line x1=\"150\" y1=\"106\" x2=\"110\" y2=\"106\" stroke=\"var(--vena)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"></line></g><circle cx=\"150\" cy=\"106\" r=\"3\" fill=\"var(--teal)\"></circle><text x=\"157\" y=\"100\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">A</text><text class=\"jmi-hasil\" x=\"117\" y=\"100\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A′</text><text x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Paksi pantulan: x = 0</text><text class=\"jmi-hasil\" x=\"8\" y=\"282\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A(1, 1) → A′(−1, 1)</text><text class=\"jmi-hasil\" x=\"8\" y=\"298\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Jarak ke paksi: A = 1, A′ = 1</text></svg></div><figcaption>Rajah 1 · Objek L hijau dipantul pada garis putus-putus ungu. Pilih paksi pantulan dan bandingkan jarak A dan A′ ke paksi.</figcaption></figure>",
  "put3": "<figure class=\"figure jmi\" data-w=\"t2iso\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2iso&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Objek L hijau diputar pada pusat P. +90° ialah lawan jam dan −90° ialah ikut jam. Perhatikan jarak PA dan PA′.&quot;,&quot;alt&quot;:&quot;Rajah interaktif putaran pada grid: objek berbentuk L diputar pada pusat P; gelongsor memilih pusat dan jenis putaran&quot;,&quot;mod&quot;:&quot;putaran&quot;,&quot;c&quot;:0,&quot;u&quot;:0}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 308\" role=\"img\" aria-label=\"Rajah putaran pada grid: objek berbentuk L diputar 90° lawan jam pada pusat P(0, 0); gelongsor memilih pusat dan putaran\"><line x1=\"30\" y1=\"26\" x2=\"30\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"226\" x2=\"230\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"30\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−5</text><line x1=\"50\" y1=\"26\" x2=\"50\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"206\" x2=\"230\" y2=\"206\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"50\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><text x=\"26\" y=\"210\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−4</text><line x1=\"70\" y1=\"26\" x2=\"70\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"186\" x2=\"230\" y2=\"186\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"70\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−3</text><text x=\"26\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−3</text><line x1=\"90\" y1=\"26\" x2=\"90\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"166\" x2=\"230\" y2=\"166\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"90\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><text x=\"26\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−2</text><line x1=\"110\" y1=\"26\" x2=\"110\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"146\" x2=\"230\" y2=\"146\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"110\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−1</text><text x=\"26\" y=\"150\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−1</text><line x1=\"130\" y1=\"26\" x2=\"130\" y2=\"226\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><line x1=\"30\" y1=\"126\" x2=\"230\" y2=\"126\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><text x=\"130\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"26\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"150\" y1=\"26\" x2=\"150\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"106\" x2=\"230\" y2=\"106\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"150\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"26\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"170\" y1=\"26\" x2=\"170\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"86\" x2=\"230\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"170\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"26\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"190\" y1=\"26\" x2=\"190\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"66\" x2=\"230\" y2=\"66\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"190\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"26\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"210\" y1=\"26\" x2=\"210\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"46\" x2=\"230\" y2=\"46\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"210\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"26\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"230\" y1=\"26\" x2=\"230\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"26\" x2=\"230\" y2=\"26\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"230\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"26\" y=\"30\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"234\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"135\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><polygon points=\"150,106 190,106 190,86 170,86 170,46 150,46\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><g class=\"jmi-hasil\"><polygon points=\"110,106 110,66 90,66 90,86 50,86 50,106\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><line x1=\"130\" y1=\"126\" x2=\"150\" y2=\"106\" stroke=\"var(--vena)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"></line><line x1=\"130\" y1=\"126\" x2=\"110\" y2=\"106\" stroke=\"var(--vena)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"></line></g><circle cx=\"150\" cy=\"106\" r=\"3\" fill=\"var(--teal)\"></circle><circle cx=\"130\" cy=\"126\" r=\"4\" fill=\"var(--ink)\"></circle><text x=\"137\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">P</text><text x=\"157\" y=\"100\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">A</text><text class=\"jmi-hasil\" x=\"117\" y=\"100\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A′</text><text x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">P(0, 0) · 90° lawan jam</text><text class=\"jmi-hasil\" x=\"8\" y=\"282\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A(1, 1) → A′(−1, 1)</text><text class=\"jmi-hasil\" x=\"8\" y=\"298\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">PA = PA′ = 1.41</text></svg></div><figcaption>Rajah 1 · Objek L hijau diputar pada pusat P. +90° ialah lawan jam dan −90° ialah ikut jam. Perhatikan jarak PA dan PA′.</figcaption></figure>",
  "trf4": "<figure class=\"figure jmi cabar\" data-w=\"t2iso\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2iso&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Peta harta karun. Kira dahulu imej A′ di kertas conteng, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif translasi pada grid dalam mod cabar: objek berbentuk L digerakkan oleh vektor (a, b); imej disembunyikan sehingga murid menyemak&quot;,&quot;mod&quot;:&quot;translasi&quot;,&quot;a&quot;:7,&quot;b&quot;:4,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 332\" role=\"img\" aria-label=\"Rajah translasi pada grid: objek berbentuk L digerakkan oleh vektor (3, 1); gelongsor a dan b menukar vektor\"><line x1=\"30\" y1=\"26\" x2=\"30\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"226\" x2=\"230\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"30\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−5</text><line x1=\"50\" y1=\"26\" x2=\"50\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"206\" x2=\"230\" y2=\"206\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"50\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><text x=\"26\" y=\"210\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−4</text><line x1=\"70\" y1=\"26\" x2=\"70\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"186\" x2=\"230\" y2=\"186\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"70\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−3</text><text x=\"26\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−3</text><line x1=\"90\" y1=\"26\" x2=\"90\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"166\" x2=\"230\" y2=\"166\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"90\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><text x=\"26\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−2</text><line x1=\"110\" y1=\"26\" x2=\"110\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"146\" x2=\"230\" y2=\"146\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"110\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−1</text><text x=\"26\" y=\"150\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−1</text><line x1=\"130\" y1=\"26\" x2=\"130\" y2=\"226\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><line x1=\"30\" y1=\"126\" x2=\"230\" y2=\"126\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><text x=\"130\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"26\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"150\" y1=\"26\" x2=\"150\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"106\" x2=\"230\" y2=\"106\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"150\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"26\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"170\" y1=\"26\" x2=\"170\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"86\" x2=\"230\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"170\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"26\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"190\" y1=\"26\" x2=\"190\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"66\" x2=\"230\" y2=\"66\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"190\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"26\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"210\" y1=\"26\" x2=\"210\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"46\" x2=\"230\" y2=\"46\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"210\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"26\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"230\" y1=\"26\" x2=\"230\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"26\" x2=\"230\" y2=\"26\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"230\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"26\" y=\"30\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"234\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"135\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><polygon points=\"110,146 170,146 170,126 130,126 130,106 110,106\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><g class=\"jmi-hasil\"><polygon points=\"170,126 230,126 230,106 190,106 190,86 170,86\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><line x1=\"110\" y1=\"146\" x2=\"162.4\" y2=\"128.5\" stroke=\"var(--vena)\" stroke-width=\"2\"></line><polygon points=\"170,126 161.1,124.7 163.7,132.3\" fill=\"var(--vena)\"></polygon></g><circle cx=\"110\" cy=\"146\" r=\"3\" fill=\"var(--teal)\"></circle><text x=\"117\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">A</text><text class=\"jmi-hasil\" x=\"177\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A′</text><g class=\"jmi-hasil\"><circle cx=\"170\" cy=\"126\" r=\"3\" fill=\"var(--arteri)\"></circle></g><text x=\"8\" y=\"270\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Vektor translasi</text><text x=\"133\" y=\"270\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">=</text><text x=\"165\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"165\" y=\"280\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><path d=\"M149 252 L145 252 L145 285 L149 285\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\" stroke-linejoin=\"round\"></path><path d=\"M181 252 L185 252 L185 285 L181 285\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\" stroke-linejoin=\"round\"></path><text class=\"jmi-hasil\" x=\"8\" y=\"306\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A(−1, −1) → A′(2, 0)</text><text class=\"jmi-hasil\" x=\"8\" y=\"322\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Jarak AA′ = 3.16 unit</text></svg></div><figcaption>Rajah 1 · Peta harta karun. Kira dahulu imej A′ di kertas conteng, kemudian semak dengan rajah.</figcaption></figure>",
  "iso5": "<figure class=\"figure jmi cabar\" data-w=\"t2iso\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2iso&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Segi tiga ABC diubah oleh enam jenis transformasi. Kira dahulu panjang B′C′, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif segi tiga ABC dan imejnya di bawah enam transformasi; gelongsor memilih transformasi dan panjang B'C' dibandingkan dengan BC&quot;,&quot;mod&quot;:&quot;isometri&quot;,&quot;j&quot;:0,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 330\" role=\"img\" aria-label=\"Rajah transformasi translasi pada segi tiga ABC; jarak BC dan B'C' dibandingkan untuk menentukan sama ada isometri\"><line x1=\"30\" y1=\"26\" x2=\"30\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"226\" x2=\"230\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"30\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−5</text><line x1=\"50\" y1=\"26\" x2=\"50\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"206\" x2=\"230\" y2=\"206\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"50\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><text x=\"26\" y=\"210\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−4</text><line x1=\"70\" y1=\"26\" x2=\"70\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"186\" x2=\"230\" y2=\"186\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"70\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−3</text><text x=\"26\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−3</text><line x1=\"90\" y1=\"26\" x2=\"90\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"166\" x2=\"230\" y2=\"166\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"90\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><text x=\"26\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−2</text><line x1=\"110\" y1=\"26\" x2=\"110\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"146\" x2=\"230\" y2=\"146\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"110\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−1</text><text x=\"26\" y=\"150\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−1</text><line x1=\"130\" y1=\"26\" x2=\"130\" y2=\"226\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><line x1=\"30\" y1=\"126\" x2=\"230\" y2=\"126\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><text x=\"130\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"26\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"150\" y1=\"26\" x2=\"150\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"106\" x2=\"230\" y2=\"106\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"150\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"26\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"170\" y1=\"26\" x2=\"170\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"86\" x2=\"230\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"170\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"26\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"190\" y1=\"26\" x2=\"190\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"66\" x2=\"230\" y2=\"66\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"190\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"26\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"210\" y1=\"26\" x2=\"210\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"46\" x2=\"230\" y2=\"46\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"210\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"26\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"230\" y1=\"26\" x2=\"230\" y2=\"226\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><line x1=\"30\" y1=\"26\" x2=\"230\" y2=\"26\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"230\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"26\" y=\"30\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"234\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"135\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><polygon points=\"50,106 90,106 50,86\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><g class=\"jmi-hasil\"><polygon points=\"150,166 190,166 150,146\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon></g><text x=\"97\" y=\"100\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">B</text><text x=\"57\" y=\"80\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">C</text><text class=\"jmi-hasil\" x=\"197\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">B′</text><text class=\"jmi-hasil\" x=\"157\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">C′</text><text x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Ubah: translasi</text><text class=\"jmi-hasil\" x=\"8\" y=\"282\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">BC = 2.24 · B′C′ = 2.24</text><text class=\"jmi-hasil\" x=\"8\" y=\"300\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Isometri? Ya</text><text class=\"jmi-hasil\" x=\"8\" y=\"318\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Kongruen (bentuk, saiz sama)</text></svg></div><figcaption>Rajah 1 · Segi tiga ABC diubah oleh enam jenis transformasi. Kira dahulu panjang B′C′, kemudian semak dengan rajah.</figcaption></figure>",
  "sim6": "<figure class=\"figure jmi\" data-w=\"t2iso\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2iso&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih bentuk dan putarkannya. Bentuk bergaris putus-putus ialah kedudukan asal; perhatikan bila bentuk itu padan semula.&quot;,&quot;alt&quot;:&quot;Rajah interaktif simetri putaran: bentuk yang dipilih diputar mengelilingi pusat dan dibandingkan dengan kedudukan asalnya&quot;,&quot;mod&quot;:&quot;simetri&quot;,&quot;i&quot;:0,&quot;s&quot;:0}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 264\" role=\"img\" aria-label=\"Rajah simetri putaran: segi tiga sama sisi diputar 0 darjah mengelilingi pusat; gelongsor menukar bentuk dan sudut putaran\"><polygon points=\"130,34 69.4,139 190.6,139\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><polygon points=\"130,34 69.4,139 190.6,139\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" stroke-dasharray=\"5 3\"></polygon><g class=\"jmi-hasil\"><polygon points=\"130,34 69.4,139 190.6,139\" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"4\" stroke-linejoin=\"round\"></polygon></g><circle cx=\"130\" cy=\"34\" r=\"4.5\" fill=\"var(--teal)\"></circle><circle cx=\"130\" cy=\"34\" r=\"3\" fill=\"var(--arteri)\"></circle><circle cx=\"130\" cy=\"104\" r=\"2.5\" fill=\"var(--ink)\"></circle><text x=\"8\" y=\"202\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Bentuk: segi tiga sama sisi</text><text x=\"8\" y=\"220\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Diputar 0° lawan jam</text><text class=\"jmi-hasil\" x=\"8\" y=\"238\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Padan dengan asal? Ya</text><text class=\"jmi-hasil\" x=\"8\" y=\"254\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Peringkat simetri putaran = 3</text></svg></div><figcaption>Rajah 1 · Pilih bentuk dan putarkannya. Bentuk bergaris putus-putus ialah kedudukan asal; perhatikan bila bentuk itu padan semula.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Taman Permainan",
   "sk": "11.1.1 / 11.1.2 Transformasi dan kekongruenan",
   "lampiran": "trf1",
   "kadNama": "Padanan Titik",
   "kadEm": "🎠",
   "kadFakta": "Dalam transformasi, setiap titik pada objek dipadankan dengan tepat satu titik pada imej. Itulah sebabnya imej tidak ada titik lebih atau titik kurang berbanding objek.",
   "bosKadNama": "Kongruen",
   "bosKadEm": "🔵",
   "bosKadFakta": "Dua bentuk kongruen boleh ditindihkan dan sepadan tepat. Kembar seiras ialah contoh yang mudah diingat: bentuk sama, saiz sama.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Sebuah gelongsor di taman permainan meluncur lurus tanpa berpusing. Perubahan kedudukan ini ialah:",
     "p": [
      "Translasi",
      "Pantulan",
      "Putaran",
      "Pembesaran"
     ],
     "b": 0,
     "u": "Translasi menggerakkan objek ke arah tertentu tanpa memusingkannya."
    },
    {
     "j": "pilih",
     "t": "Bayangan awak dalam cermin ialah contoh transformasi jenis:",
     "p": [
      "Translasi",
      "Pantulan",
      "Putaran",
      "Pengecilan"
     ],
     "b": 1,
     "u": "Cermin menghasilkan imej songsang di sebelah bertentangan, iaitu pantulan."
    },
    {
     "j": "pilih",
     "t": "Kincir angin berpusing pada satu titik tetap. Transformasi ini ialah:",
     "p": [
      "Translasi",
      "Pantulan",
      "Putaran",
      "Pembesaran"
     ],
     "b": 2,
     "u": "Putaran memusingkan objek pada satu titik tetap yang dipanggil pusat putaran."
    },
    {
     "j": "pilih",
     "t": "Dalam transformasi, setiap titik pada objek dipadankan dengan tepat satu titik pada imej. Idea ini dipanggil:",
     "p": [
      "Padanan banyak-dengan-satu",
      "Padanan satu-dengan-banyak",
      "Padanan tanpa titik",
      "Padanan satu-dengan-satu"
     ],
     "b": 3,
     "u": "Satu titik objek, satu titik imej: itulah padanan satu-dengan-satu."
    },
    {
     "j": "pilih",
     "t": "Dua bentuk yang kongruen mempunyai:",
     "p": [
      "Bentuk dan saiz yang sama",
      "Bentuk sama, saiz berbeza",
      "Saiz sama, bentuk berbeza",
      "Bentuk dan saiz berbeza"
     ],
     "b": 0,
     "u": "Kongruen bermaksud sama bentuk dan sama saiz. Sama bentuk tetapi saiz berbeza dipanggil serupa."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan a = 3 dan b = 2. Objek L hijau digerakkan ke imej merah. Apakah yang berubah?",
     "p": [
      "Kedudukan dan saiz",
      "Kedudukan sahaja",
      "Kedudukan dan orientasi",
      "Bentuk dan saiz"
     ],
     "b": 1,
     "u": "Dalam translasi, hanya kedudukan berubah. Bentuk, saiz dan orientasi kekal sama."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 3 dan b = 2. Berapakah koordinat-x titik A′, imej bagi A(−1, −1)?",
     "b": 2,
     "tol": 0.01,
     "u": "Koordinat-x imej = −1 + 3 = 2."
    },
    {
     "j": "susun",
     "t": "Susun langkah menentukan imej bagi objek yang ditranslasikan.",
     "p": [
      "Baca vektor translasi (a, b)",
      "Ambil satu titik pada objek",
      "Tambah a pada koordinat-x dan b pada koordinat-y",
      "Tanda titik imej, kemudian sambung semua titik imej"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Baca vektor dahulu, gerakkan satu titik, kemudian buat yang sama untuk semua titik."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang transformasi.",
    "p": [
     "Translasi menggerakkan objek tanpa memusingkannya",
     "Pantulan menghasilkan imej songsang seperti dalam cermin",
     "Putaran memusingkan objek pada satu titik tetap",
     "Translasi mengubah saiz objek kepada dua kali ganda",
     "Dalam putaran, semua titik objek kekal di tempat asal",
     "Kongruen bermaksud bentuk sama tetapi saiz berbeza"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Translasi tidak mengubah saiz. Dalam putaran, hanya pusat putaran yang kekal. Bentuk sama tetapi saiz berbeza ialah serupa, bukan kongruen."
   }
  },
  {
   "n": 2,
   "tempat": "Cermin Ajaib",
   "sk": "11.3.1 - 11.3.4 Pantulan",
   "lampiran": "pan2",
   "kadNama": "Paksi Pantulan",
   "kadEm": "🔮",
   "kadFakta": "Paksi pantulan ialah garis yang bertindak sebagai cermin. Titik yang berada tepat pada paksi tidak bergerak. Imejnya ialah titik itu sendiri.",
   "bosKadNama": "Serenjang",
   "bosKadEm": "📐",
   "bosKadFakta": "Garis yang menyambung sebarang titik dengan imejnya dalam pantulan sentiasa serenjang dengan paksi dan dipotong dua sama panjang oleh paksi itu.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam pantulan, garis yang bertindak sebagai cermin dipanggil:",
     "p": [
      "Pusat putaran",
      "Vektor translasi",
      "Paksi pantulan",
      "Garis binaan"
     ],
     "b": 2,
     "u": "Garis cermin dalam pantulan dipanggil paksi pantulan."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan paksi x = 2. Berapakah koordinat-x titik A′, imej bagi A(1, 1)?",
     "b": 3,
     "tol": 0.01,
     "u": "A berada 1 unit di kiri x = 2, jadi A′ berada 1 unit di kanan: 2 + 1 = 3."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan paksi x = 0. Berapakah koordinat-x titik A′, imej bagi A(1, 1)?",
     "b": -1,
     "tol": 0.01,
     "u": "Pantulan pada paksi-y menukar tanda koordinat-x: 1 menjadi −1."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan paksi y = 0. Berapakah koordinat-y titik A′, imej bagi A(1, 1)?",
     "b": -1,
     "tol": 0.01,
     "u": "Pantulan pada paksi-x menukar tanda koordinat-y: 1 menjadi −1."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan paksi y = x. Titik A(1, 1) terletak pada paksi itu. Imej A′ ialah:",
     "p": [
      "A′ = (−1, −1)",
      "A′ = (1, −1) di bawah",
      "A′ = (−1, 1) di kiri",
      "A′ = A = (1, 1)"
     ],
     "b": 3,
     "u": "Titik yang terletak pada paksi pantulan tidak berubah kedudukan."
    },
    {
     "j": "pilih",
     "t": "Dalam pantulan, jarak sebuah titik objek ke paksi berbanding jarak imej ke paksi ialah:",
     "p": [
      "Sama, di sisi bertentangan",
      "Dua kali ganda daripada jarak objek",
      "Separuh daripada jarak objek",
      "Bergantung pada saiz objek yang dipantul"
     ],
     "b": 0,
     "u": "Paksi pantulan sentiasa berada di tengah-tengah antara titik dan imejnya."
    },
    {
     "j": "pilih",
     "t": "Garis yang menyambung titik dengan imejnya dalam pantulan ialah ___ kepada paksi pantulan.",
     "p": [
      "Selari",
      "Serenjang",
      "Bersudut 45°",
      "Bertindih"
     ],
     "b": 1,
     "u": "Garis AA′ serenjang dengan paksi dan dibahagi dua sama panjang oleh paksi."
    },
    {
     "j": "susun",
     "t": "Susun langkah memantulkan sebuah titik pada paksi menegak x = k.",
     "p": [
      "Ukur jarak titik itu ke garis x = k",
      "Lukis garis serenjang dari titik ke paksi",
      "Teruskan garis itu ke sebelah paksi yang satu lagi",
      "Tanda imej pada jarak yang sama dari paksi"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Jarak dari paksi ke imej sama dengan jarak dari paksi ke titik asal."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang pantulan pada satu paksi.",
    "p": [
     "Objek dan imej mempunyai bentuk dan saiz yang sama",
     "Imej terletak di sebelah bertentangan paksi pantulan",
     "Titik pada paksi pantulan mempunyai imej yang sama dengan titik itu",
     "Imej menjadi lebih besar daripada objek",
     "Imej ialah objek yang digerakkan tanpa terbalik",
     "Paksi pantulan mesti sentiasa garis mengufuk"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Pantulan mengekalkan saiz, dan mengubah orientasi (imej songsang). Paksi boleh menegak, mengufuk atau condong."
   }
  },
  {
   "n": 3,
   "tempat": "Roda Ferris",
   "sk": "11.4.1 - 11.4.4 Putaran",
   "lampiran": "put3",
   "kadNama": "Pusat Putaran",
   "kadEm": "🎡",
   "kadFakta": "Roda ferris berputar mengelilingi satu titik tetap di tengah rodanya. Titik itu ialah pusat putaran dan ia tidak berpindah walaupun semua tempat duduk bergerak.",
   "bosKadNama": "Jejari Sama",
   "bosKadEm": "📏",
   "bosKadFakta": "Dalam putaran, jarak sebuah titik ke pusat putaran kekal sama dengan jarak imejnya ke pusat itu. Sebab itulah titik bergerak mengikut lingkaran.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Tiga butiran diperlukan untuk menerangkan satu putaran. Apakah ketiga-tiganya?",
     "p": [
      "Paksi, jarak dan vektor translasi",
      "Pusat, vektor dan skala",
      "Pusat, sudut dan arah putaran",
      "Sudut, skala dan paksi"
     ],
     "b": 2,
     "u": "Putaran perlu pusat putaran, sudut putaran dan arah putaran (ikut jam atau lawan jam)."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan pusat P(0, 0) dan putaran +90° (lawan jam). Berapakah koordinat-x titik A′, imej bagi A(1, 1)?",
     "b": -1,
     "tol": 0.01,
     "u": "Putaran 90° lawan jam pada asalan menukar (1, 1) kepada (−1, 1). Koordinat-x ialah −1."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan pusat P(0, 0) dan putaran 180°. Berapakah koordinat-y titik A′, imej bagi A(1, 1)?",
     "b": -1,
     "tol": 0.01,
     "u": "Putaran 180° pada asalan menukar tanda kedua-dua koordinat: (1, 1) menjadi (−1, −1)."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan pusat P(2, 2) dan putaran 180°. Berapakah koordinat-x titik A′, imej bagi A(1, 1)?",
     "b": 3,
     "tol": 0.01,
     "u": "A ialah 1 unit di kiri dan 1 unit di bawah P. Putaran 180° meletakkan A′ 1 unit di kanan dan di atas P, iaitu (3, 3)."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan pusat P(0, 0) dan putaran −90° (ikut jam). Imej A′ bagi A(1, 1) ialah:",
     "p": [
      "(−1, 1)",
      "(−1, −1)",
      "(1, 1)",
      "(1, −1)"
     ],
     "b": 3,
     "u": "Putaran 90° ikut jam pada asalan menukar (x, y) kepada (y, −x), jadi (1, 1) menjadi (1, −1)."
    },
    {
     "j": "pilih",
     "t": "Dalam putaran, jarak sebuah titik objek ke pusat putaran berbanding jarak imejnya ke pusat itu ialah:",
     "p": [
      "Sama, pada sebarang sudut",
      "Dua kali ganda, pada 180°",
      "Separuh, pada 90°",
      "Berbeza mengikut arah putaran"
     ],
     "b": 0,
     "u": "Putaran mengekalkan jarak ke pusat. Titik hanya bergerak pada lingkaran."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan pusat P(0, 0). Berapakah panjang PA, kepada 2 tempat perpuluhan?",
     "b": 1.41,
     "tol": 0.01,
     "u": "PA = √(1² + 1²) = √2 = 1.41. PA′ juga 1.41."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan pusat P(1, 1). Titik A(1, 1) ialah pusat putaran itu. Imej A′ ialah:",
     "p": [
      "A′ = (−1, 1), bergerak",
      "A′ = A = (1, 1)",
      "A′ = (1, −1), bergerak",
      "A′ = (3, 3), bergerak"
     ],
     "b": 1,
     "u": "Pusat putaran tidak bergerak. Imej pusat putaran ialah pusat itu sendiri."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dalam Rajah 1, tetapkan pusat P(2, 2) dan putaran −90° (ikut jam). Berapakah jumlah koordinat-x dan koordinat-y bagi A′, imej bagi A(1, 1)?",
    "b": 4,
    "tol": 0.01,
    "u": "A berada di (−1, −1) daripada P. Putaran 90° ikut jam menukar (x, y) kepada (y, −x): (−1, 1). Maka A′ = (2 − 1, 2 + 1) = (1, 3). Jumlah = 1 + 3 = 4."
   }
  },
  {
   "n": 4,
   "tempat": "Peta Harta Karun",
   "sk": "11.2.3 / 11.2.4 Imej dan objek bagi translasi; masalah translasi",
   "lampiran": "trf4",
   "kadNama": "Vektor Translasi",
   "kadEm": "🗺️",
   "kadFakta": "Vektor translasi ditulis sebagai dua nombor dalam kurungan lajur. Nombor atas ialah gerakan mendatar, nombor bawah ialah gerakan menegak. Nombor negatif bermaksud ke kiri atau ke bawah.",
   "bosKadNama": "Dua Langkah",
   "bosKadEm": "🧭",
   "bosKadFakta": "Dua translasi berturutan sama dengan satu translasi tunggal yang vektornya ialah hasil tambah kedua-dua vektor. Peta harta karun sering menggunakan idea ini.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 3 dan b = 1. Kira koordinat-x imej A′ bagi A(−1, −1), kemudian semak dengan rajah.",
     "b": 2,
     "tol": 0.01,
     "u": "Koordinat-x = −1 + 3 = 2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 3 dan b = 1. Kira koordinat-y imej A′ bagi A(−1, −1), kemudian semak dengan rajah.",
     "b": 0,
     "tol": 0.01,
     "u": "Koordinat-y = −1 + 1 = 0."
    },
    {
     "j": "nombor",
     "t": "Pada peta harta karun, sebuah kapal berada di titik (2, 3). Ia ditranslasikan oleh vektor (−4, 5). Berapakah koordinat-y kedudukan baharu kapal?",
     "b": 8,
     "tol": 0.01,
     "u": "Koordinat-y = 3 + 5 = 8. Kedudukan baharu ialah (−2, 8)."
    },
    {
     "j": "nombor",
     "t": "Titik P(−3, 2) ditranslasikan kepada P′(1, −1). Berapakah nilai a bagi vektor translasi (a, b)?",
     "b": 4,
     "tol": 0.01,
     "u": "a = 1 − (−3) = 4."
    },
    {
     "j": "nombor",
     "t": "Titik P(−3, 2) ditranslasikan kepada P′(1, −1). Berapakah nilai b bagi vektor translasi (a, b)?",
     "b": -3,
     "tol": 0.01,
     "u": "b = −1 − 2 = −3."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 3 dan b = −3. Berapakah jarak AA′ dalam unit, kepada 2 tempat perpuluhan?",
     "b": 4.24,
     "tol": 0.01,
     "u": "Jarak = √(3² + (−3)²) = √18 = 4.24 unit."
    },
    {
     "j": "pilih",
     "t": "Translasi (2, −3) diikuti oleh translasi (−2, 3) menghasilkan:",
     "p": [
      "Imej dua kali lebih jauh dari objek",
      "Imej yang dipantulkan pada paksi",
      "Objek kembali ke kedudukan asal",
      "Imej yang diputar 90° pada pusat"
     ],
     "b": 2,
     "u": "Hasil tambah dua vektor ialah (0, 0), jadi objek kembali ke tempat asalnya."
    },
    {
     "j": "pilih",
     "t": "Sebuah bot bergerak 5 unit ke timur dan 2 unit ke selatan. Ambil timur sebagai arah +x dan utara sebagai +y. Vektor translasi bot ialah:",
     "p": [
      "(−5, 2)",
      "(2, −5)",
      "(−2, 5)",
      "(5, −2)"
     ],
     "b": 3,
     "u": "Timur 5 ialah a = 5. Selatan 2 ialah b = −2."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Titik A(−1, −1) ditranslasikan oleh (a, b) kepada A′(3, 2). Kemudian A′ ditranslasikan oleh (−1, −3). Berapakah jumlah koordinat-x dan koordinat-y bagi imej akhir?",
    "b": 1,
    "tol": 0.01,
    "u": "Imej akhir = (3 − 1, 2 − 3) = (2, −1). Jumlah = 2 + (−1) = 1."
   }
  },
  {
   "n": 5,
   "tempat": "Bengkel Ubin",
   "sk": "11.5.1 - 11.5.3 Isometri dan kekongruenan",
   "lampiran": "iso5",
   "kadNama": "Isometri",
   "kadEm": "🧱",
   "kadFakta": "Isometri ialah transformasi yang mengekalkan jarak antara sebarang dua titik. Translasi, pantulan dan putaran ialah isometri, jadi ubin yang digerakkan dengan cara itu tetap muat tepat di lantai.",
   "bosKadNama": "Bukan Isometri",
   "bosKadEm": "🔍",
   "bosKadFakta": "Pembesaran dan pengecilan mengubah jarak antara titik, jadi keduanya bukan isometri. Imejnya serupa dengan objek tetapi tidak kongruen.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Isometri ialah transformasi yang mengekalkan:",
     "p": [
      "Jarak antara sebarang dua titik",
      "Kedudukan setiap titik pada objek",
      "Orientasi objek sahaja",
      "Saiz dan kedudukan objek"
     ],
     "b": 0,
     "u": "Isometri mengekalkan jarak antara sebarang dua titik, jadi bentuk dan saiz tidak berubah."
    },
    {
     "j": "pilih",
     "t": "Antara transformasi berikut, yang manakah BUKAN isometri?",
     "p": [
      "Translasi mengikut vektor",
      "Pembesaran dengan skala 2",
      "Pantulan pada satu paksi",
      "Putaran pada satu pusat"
     ],
     "b": 1,
     "u": "Pembesaran mengubah saiz dan jarak antara titik. Tiga yang lain mengekalkan jarak."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih translasi. Berapakah panjang BC bagi segi tiga ABC, kepada 2 tempat perpuluhan?",
     "b": 2.24,
     "tol": 0.01,
     "u": "B(−2, 1) dan C(−4, 2). BC = √(2² + 1²) = √5 = 2.24."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih besar ×2 (pembesaran). Kira panjang B′C′, kepada 2 tempat perpuluhan, kemudian semak dengan rajah.",
     "b": 4.47,
     "tol": 0.01,
     "u": "Pembesaran ×2 menggandakan semua panjang: B′C′ = 2 × 2.24 = 4.47."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih kecil ×½ (pengecilan). Kira panjang B′C′, kepada 2 tempat perpuluhan, kemudian semak dengan rajah.",
     "b": 1.12,
     "tol": 0.01,
     "u": "Pengecilan ×½ menjadikan semua panjang separuh: B′C′ = 2.24 ÷ 2 = 1.12."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih kecil ×½ (pengecilan). Adakah segi tiga imej kongruen dengan ABC?",
     "p": [
      "Ya, kerana bentuknya sama",
      "Ya, kerana sudutnya sama",
      "Tidak, sisinya lebih pendek",
      "Tidak, kerana sudutnya berubah"
     ],
     "b": 2,
     "u": "Kongruen memerlukan bentuk dan saiz yang sama. Sudut sama, tetapi sisi lebih pendek, jadi imej hanya serupa."
    },
    {
     "j": "pilih",
     "t": "Jika dua bentuk kongruen, satu bentuk boleh menjadi imej kepada satu lagi melalui:",
     "p": [
      "Satu pembesaran yang sesuai",
      "Satu regangan yang sesuai",
      "Satu pengecilan yang sesuai",
      "Satu atau lebih isometri"
     ],
     "b": 3,
     "u": "Bentuk kongruen dihubungkan oleh isometri, iaitu translasi, pantulan, putaran atau gabungannya."
    },
    {
     "j": "pilih",
     "t": "Segi tiga ABC dipantulkan, kemudian imejnya ditranslasikan. Imej akhir ialah:",
     "p": [
      "Kongruen dengan ABC",
      "Serupa tetapi lebih besar",
      "Serupa tetapi lebih kecil",
      "Tidak serupa dengan ABC"
     ],
     "b": 0,
     "u": "Kedua-dua pantulan dan translasi ialah isometri, jadi gabungannya juga mengekalkan bentuk dan saiz."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Dalam Rajah 1, pilih setiap transformasi dan lihat imej merah. Pilih SEMUA transformasi yang menghasilkan imej kongruen dengan ABC.",
    "p": [
     "Translasi",
     "Pantulan",
     "Putaran",
     "Pembesaran ×2",
     "Pengecilan ×½",
     "Regangan tegak"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Hanya translasi, pantulan dan putaran ialah isometri. Pembesaran, pengecilan dan regangan mengubah jarak antara titik."
   }
  },
  {
   "n": 6,
   "tempat": "Studio Corak Batik",
   "sk": "11.6.1 / 11.6.2 Simetri putaran dan peringkat simetri putaran",
   "lampiran": "sim6",
   "kadNama": "Simetri Putaran",
   "kadEm": "🎨",
   "kadFakta": "Sesuatu bentuk ada simetri putaran jika ia kelihatan sama semula selepas diputar kurang daripada satu pusingan penuh. Corak batik dan kain songket sering menggunakan idea ini.",
   "bosKadNama": "Peringkat",
   "bosKadEm": "🔢",
   "bosKadFakta": "Peringkat simetri putaran ialah berapa kali bentuk itu padan dengan dirinya dalam satu pusingan penuh 360°. Sudut putaran terkecil ialah 360° dibahagi peringkat.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Sesuatu bentuk mempunyai simetri putaran jika, apabila diputar kurang daripada 360°, bentuk itu:",
     "p": [
      "Bertukar menjadi lebih kecil",
      "Kelihatan sama seperti asalnya",
      "Bergerak ke tempat lain yang jauh",
      "Mengubah warnanya secara beransur"
     ],
     "b": 1,
     "u": "Simetri putaran bermaksud bentuk padan semula dengan kedudukan asalnya sebelum satu pusingan penuh."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih segi tiga (sama sisi). Berapakah peringkat simetri putarannya?",
     "b": 3,
     "tol": 0.01,
     "u": "Segi tiga sama sisi padan dengan dirinya pada 120°, 240° dan 360°, jadi peringkatnya 3."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih petak (segi empat sama). Berapakah peringkat simetri putarannya?",
     "b": 4,
     "tol": 0.01,
     "u": "Segi empat sama padan pada 90°, 180°, 270° dan 360°, jadi peringkatnya 4."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih bintang (lima penjuru). Berapakah peringkat simetri putarannya?",
     "b": 5,
     "tol": 0.01,
     "u": "Bintang lima penjuru padan lima kali dalam satu pusingan (setiap 72°)."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih selari (segi empat selari). Berapakah peringkat simetri putarannya?",
     "b": 2,
     "tol": 0.01,
     "u": "Segi empat selari hanya padan selepas diputar 180° dan 360°, jadi peringkatnya 2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih trapezium (sama kaki). Berapakah peringkat simetri putarannya?",
     "b": 1,
     "tol": 0.01,
     "u": "Trapezium sama kaki hanya padan selepas satu pusingan penuh, jadi peringkatnya 1. Ini bermaksud ia tiada simetri putaran."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih segi tepat (segi empat tepat). Sudut putaran terkecil (lebih besar daripada 0°) yang memadankannya dengan dirinya ialah:",
     "p": [
      "90°",
      "120°",
      "180°",
      "60°"
     ],
     "b": 2,
     "u": "Peringkat segi empat tepat ialah 2, jadi sudut terkecil ialah 360° ÷ 2 = 180°."
    },
    {
     "j": "pilih",
     "t": "Sebuah bentuk mempunyai simetri putaran peringkat 6. Sudut putaran terkecil yang memadankannya dengan dirinya ialah:",
     "p": [
      "90°",
      "36°",
      "120°",
      "60°"
     ],
     "b": 3,
     "u": "360° ÷ 6 = 60°."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu corak batik sendiri menggunakan satu bentuk asas dan simetri putaran.",
    "arahan": "Nyatakan bentuk asas yang awak pilih dan peringkat simetri putarannya, serta sudut putaran terkecil yang memadankannya. Terangkan bagaimana translasi atau pantulan boleh digunakan untuk menyambung corak itu menjadi sehelai kain, dan sama ada imej setiap bentuk kongruen dengan bentuk asas.",
    "u": "Jawapan TP6 yang kukuh memilih bentuk yang sesuai, menyatakan peringkat dan sudut putaran terkecil dengan betul (360° dibahagi peringkat), menerangkan penggunaan translasi atau pantulan untuk menyambung corak, dan menyatakan bahawa semua imej ialah isometri jadi kongruen dengan bentuk asas."
   }
  }
 ]
};
