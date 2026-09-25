/* Bank soalan — Matematik Ting. 3 · Bab 6 Sudut dan Tangen bagi Bulatan.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m3b6.js
   kemudian jalankan: node bina.js m3b6

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m3b6"] =
{
 "id": "m3b6",
 "tingkatan": 3,
 "kod": "6.0 Sudut dan Tangen bagi Bulatan",
 "tajuk": "Taman Bulatan",
 "subtajuk": "Matematik Ting. 3 · Bab 6 Sudut dan Tangen bagi Bulatan",
 "spi": [
  "Mempamerkan pengetahuan asas tentang sudut dalam bulatan, sisi empat kitaran dan tangen kepada bulatan.",
  "Mempamerkan kefahaman tentang sudut dalam bulatan, sisi empat kitaran dan tangen kepada bulatan.",
  "Mengaplikasikan kefahaman tentang sudut dalam bulatan, sisi empat kitaran dan tangen kepada bulatan untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sudut dan tangen bagi bulatan dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sudut dan tangen bagi bulatan dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sudut dan tangen bagi bulatan dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat mengenal jejari, diameter, lengkok dan sudut pusat, serta tahu bahawa sudut pada lilitan ialah separuh sudut pusat. Langkah seterusnya ialah menggunakan hubungan ini untuk mencari sudut yang tidak diketahui.",
  "2": "{n} memahami sudut pada lilitan, sudut dalam semibulatan dan sudut yang dicangkum lengkok yang sama. Perlu lebih latihan menggunakan hubungan ini dalam segi tiga sebelum bergerak ke TP3.",
  "3": "{n} boleh menggunakan hubungan sisi empat kitaran, iaitu sudut bertentangan berjumlah 180°, untuk mencari sudut. Galakkan mengecam sisi empat kitaran dalam rajah yang lebih kompleks.",
  "4": "{n} mampu menyelesaikan masalah rutin yang melibatkan tangen, termasuk menggunakan sudut 90° antara jejari dengan tangen dan Teorem Pythagoras. Seterusnya latih masalah dengan dua tangen.",
  "5": "{n} dapat menyelesaikan masalah kompleks yang melibatkan dua tangen dari satu titik dan tangen sepunya. Sudah bersedia untuk masalah bukan rutin yang menggabungkan beberapa sifat bulatan.",
  "6": "{n} berjaya menggabungkan sudut dalam bulatan, sisi empat kitaran dan tangen dalam satu reka bentuk sendiri dengan pengiraan yang betul. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sudut dan Tangen bagi Bulatan. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menamakan lengkok, sudut pusat dan sudut pada lilitan dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "bul1": "<figure class=\"figure jmi\" data-w=\"bulatan\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;bulatan&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan P di sepanjang lengkok besar. Perhatikan ∠APB dan ∠AQB.&quot;,&quot;alt&quot;:&quot;Rajah interaktif bulatan berpusat O dengan lengkok AB; gelongsor menggerakkan titik P pada lilitan dan menunjukkan sudut pusat dan sudut pada lilitan&quot;,&quot;mod&quot;:&quot;lilitan&quot;,&quot;lengkok&quot;:80,&quot;pos&quot;:[30,70,110,150,250,260],&quot;q&quot;:210,&quot;i&quot;:1}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 240\" role=\"img\" aria-label=\"Rajah bulatan berpusat O dengan lengkok AB; sudut pusat AOB ialah 80 darjah dan sudut pada lilitan di P dan Q ialah 40 darjah\"><circle cx=\"130\" cy=\"100\" r=\"62\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.6\"></circle><line x1=\"90.1\" y1=\"147.5\" x2=\"169.9\" y2=\"147.5\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></line><line x1=\"130\" y1=\"100\" x2=\"90.1\" y2=\"147.5\" stroke=\"var(--vena)\" stroke-width=\"2\"></line><line x1=\"130\" y1=\"100\" x2=\"169.9\" y2=\"147.5\" stroke=\"var(--vena)\" stroke-width=\"2\"></line><line x1=\"188.3\" y1=\"78.8\" x2=\"90.1\" y2=\"147.5\" stroke=\"var(--teal)\" stroke-width=\"2\"></line><line x1=\"188.3\" y1=\"78.8\" x2=\"169.9\" y2=\"147.5\" stroke=\"var(--teal)\" stroke-width=\"2\"></line><line x1=\"71.7\" y1=\"78.8\" x2=\"90.1\" y2=\"147.5\" stroke=\"var(--arteri)\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"></line><line x1=\"71.7\" y1=\"78.8\" x2=\"169.9\" y2=\"147.5\" stroke=\"var(--arteri)\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"></line><path d=\"M120.4 111.5 A15 15 0 0 0 139.6 111.5\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><path d=\"M175.2 88 A16 16 0 0 0 184.1 94.2\" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><path d=\"M75.4 92.3 A14 14 0 0 0 83.2 86.8\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><circle cx=\"130\" cy=\"100\" r=\"3\" fill=\"var(--vena)\" stroke=\"none\"></circle><circle cx=\"90.1\" cy=\"147.5\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><circle cx=\"169.9\" cy=\"147.5\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><circle cx=\"188.3\" cy=\"78.8\" r=\"3\" fill=\"var(--teal)\" stroke=\"none\"></circle><circle cx=\"71.7\" cy=\"78.8\" r=\"3\" fill=\"var(--arteri)\" stroke=\"none\"></circle><text x=\"120\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">O</text><text x=\"83.1\" y=\"159.9\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">A</text><text x=\"176.9\" y=\"159.9\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">B</text><text x=\"198.6\" y=\"79\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">P</text><text x=\"61.4\" y=\"79\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Q</text><text class=\"jmi-hasil\" x=\"8\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">∠AOB (pusat) = 80°</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">∠APB (lilitan) = 40°</text><text class=\"jmi-hasil\" x=\"8\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">∠AQB (lilitan) = 40°</text></svg></div><figcaption>Rajah 1 · Gerakkan P di sepanjang lengkok besar. Perhatikan ∠APB dan ∠AQB.</figcaption></figure>",
  "bul2": "<figure class=\"figure jmi\" data-w=\"bulatan\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;bulatan&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · AB ialah diameter. Gerakkan P dan perhatikan ∠APB.&quot;,&quot;alt&quot;:&quot;Rajah interaktif bulatan dengan diameter AB; gelongsor menggerakkan titik P pada lilitan dan sudut APB dalam semibulatan sentiasa sama&quot;,&quot;mod&quot;:&quot;lilitan&quot;,&quot;lengkok&quot;:180,&quot;pos&quot;:[20,50,80,110,140,160],&quot;q&quot;:90,&quot;i&quot;:0}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 240\" role=\"img\" aria-label=\"Rajah bulatan berpusat O dengan lengkok AB; sudut pusat AOB ialah 180 darjah dan sudut pada lilitan di P dan Q ialah 90 darjah\"><circle cx=\"130\" cy=\"100\" r=\"62\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.6\"></circle><line x1=\"68\" y1=\"100\" x2=\"192\" y2=\"100\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></line><line x1=\"130\" y1=\"100\" x2=\"68\" y2=\"100\" stroke=\"var(--vena)\" stroke-width=\"2\"></line><line x1=\"130\" y1=\"100\" x2=\"192\" y2=\"100\" stroke=\"var(--vena)\" stroke-width=\"2\"></line><line x1=\"188.3\" y1=\"78.8\" x2=\"68\" y2=\"100\" stroke=\"var(--teal)\" stroke-width=\"2\"></line><line x1=\"188.3\" y1=\"78.8\" x2=\"192\" y2=\"100\" stroke=\"var(--teal)\" stroke-width=\"2\"></line><line x1=\"130\" y1=\"38\" x2=\"68\" y2=\"100\" stroke=\"var(--arteri)\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"></line><line x1=\"130\" y1=\"38\" x2=\"192\" y2=\"100\" stroke=\"var(--arteri)\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"></line><path d=\"M115 100 A15 15 0 0 0 145 100\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><path d=\"M179.4 80.4 L181 89.2 L189.8 87.7\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-linejoin=\"round\"></path><path d=\"M123.6 44.4 L130 50.7 L136.4 44.4\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-linejoin=\"round\"></path><circle cx=\"130\" cy=\"100\" r=\"3\" fill=\"var(--vena)\" stroke=\"none\"></circle><circle cx=\"68\" cy=\"100\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><circle cx=\"192\" cy=\"100\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><circle cx=\"188.3\" cy=\"78.8\" r=\"3\" fill=\"var(--teal)\" stroke=\"none\"></circle><circle cx=\"130\" cy=\"38\" r=\"3\" fill=\"var(--arteri)\" stroke=\"none\"></circle><text x=\"120\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">O</text><text x=\"57\" y=\"104\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">A</text><text x=\"203\" y=\"104\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">B</text><text x=\"198.6\" y=\"79\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">P</text><text x=\"130\" y=\"31\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Q</text><text class=\"jmi-hasil\" x=\"8\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">∠AOB (pusat) = 180°</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">∠APB (lilitan) = 90°</text><text class=\"jmi-hasil\" x=\"8\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">∠AQB (lilitan) = 90°</text></svg></div><figcaption>Rajah 1 · AB ialah diameter. Gerakkan P dan perhatikan ∠APB.</figcaption></figure>",
  "bul3": "<figure class=\"figure jmi\" data-w=\"bulatan\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;bulatan&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan D. Perhatikan jumlah setiap pasang sudut bertentangan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif sisi empat kitaran ABCD dalam bulatan; gelongsor menggerakkan titik D dan sudut bertentangan sentiasa berjumlah 180 darjah&quot;,&quot;mod&quot;:&quot;kitaran&quot;,&quot;a&quot;:200,&quot;b&quot;:300,&quot;c&quot;:360,&quot;pos&quot;:[380,410,440,470,495,520],&quot;i&quot;:1}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 240\" role=\"img\" aria-label=\"Rajah sisi empat kitaran ABCD dalam bulatan; sudut A dan C berjumlah 180 darjah, sudut B dan D berjumlah 180 darjah\"><circle cx=\"130\" cy=\"100\" r=\"62\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.6\"></circle><line x1=\"71.7\" y1=\"121.2\" x2=\"161\" y2=\"153.7\" stroke=\"var(--ink2)\" stroke-width=\"2\"></line><line x1=\"161\" y1=\"153.7\" x2=\"192\" y2=\"100\" stroke=\"var(--ink2)\" stroke-width=\"2\"></line><line x1=\"192\" y1=\"100\" x2=\"169.9\" y2=\"52.5\" stroke=\"var(--ink2)\" stroke-width=\"2\"></line><line x1=\"169.9\" y1=\"52.5\" x2=\"71.7\" y2=\"121.2\" stroke=\"var(--ink2)\" stroke-width=\"2\"></line><path d=\"M84 112.6 A15 15 0 0 1 85.8 126.3\" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><path d=\"M184.5 113 A15 15 0 0 1 185.7 86.4\" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><path d=\"M146.9 148.6 A15 15 0 0 1 168.5 140.7\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><path d=\"M176.2 66.1 A15 15 0 0 1 157.6 61.1\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><circle cx=\"71.7\" cy=\"121.2\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><text x=\"61.4\" y=\"129\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">A</text><circle cx=\"161\" cy=\"153.7\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><text x=\"166.5\" y=\"167.2\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">B</text><circle cx=\"192\" cy=\"100\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><text x=\"203\" y=\"104\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">C</text><circle cx=\"169.9\" cy=\"52.5\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><text x=\"176.9\" y=\"48.1\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">D</text><text class=\"jmi-hasil\" x=\"8\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">∠A + ∠C = 55° + 125° = 180°</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">∠B + ∠D = 100° + 80° = 180°</text></svg></div><figcaption>Rajah 1 · Gerakkan D. Perhatikan jumlah setiap pasang sudut bertentangan.</figcaption></figure>",
  "bul4": "<figure class=\"figure jmi cabar\" data-w=\"bulatan\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;bulatan&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan T. Kira dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif bulatan dengan tangen di titik T; gelongsor menggerakkan T mengelilingi bulatan dan jejari OT sentiasa serenjang dengan tangen&quot;,&quot;mod&quot;:&quot;tangen1&quot;,&quot;jejari&quot;:6,&quot;tl&quot;:8,&quot;pos&quot;:[0,45,90,135,180,225,270,315],&quot;i&quot;:2,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 240\" role=\"img\" aria-label=\"Rajah bulatan berpusat O dengan tangen di titik T; jejari OT serenjang dengan tangen TP, iaitu sudut 90 darjah, dan OP ialah 10 sentimeter\"><circle cx=\"130\" cy=\"100\" r=\"36\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.6\"></circle><line x1=\"162\" y1=\"64\" x2=\"74\" y2=\"64\" stroke=\"var(--teal)\" stroke-width=\"2.4\"></line><line x1=\"130\" y1=\"100\" x2=\"130\" y2=\"64\" stroke=\"var(--vena)\" stroke-width=\"2.2\"></line><line x1=\"130\" y1=\"100\" x2=\"82\" y2=\"64\" stroke=\"var(--line2)\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"></line><path d=\"M130 73 L121 73 L121 64\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-linejoin=\"round\"></path><path d=\"M130 84 A16 16 0 0 0 117.2 90.4\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><circle cx=\"130\" cy=\"100\" r=\"3\" fill=\"var(--vena)\" stroke=\"none\"></circle><circle cx=\"130\" cy=\"64\" r=\"3\" fill=\"var(--teal)\" stroke=\"none\"></circle><circle cx=\"82\" cy=\"64\" r=\"3\" fill=\"var(--teal)\" stroke=\"none\"></circle><text x=\"130\" y=\"116\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">O</text><text x=\"130\" y=\"57\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">T</text><text x=\"71\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">P</text><text x=\"8\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">OT = 6 cm (jejari)   TP = 8 cm</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">∠OTP = 90°   OP = 10 cm</text><text class=\"jmi-hasil\" x=\"8\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">∠TOP = 53.1°</text></svg></div><figcaption>Rajah 1 · Gerakkan T. Kira dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "bul5": "<figure class=\"figure jmi cabar\" data-w=\"bulatan\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;bulatan&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Ubah jarak OP. Kira dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif dua tangen PA dan PB dari titik P ke bulatan; gelongsor mengubah jarak OP dan PA sentiasa sama dengan PB&quot;,&quot;mod&quot;:&quot;tangen2&quot;,&quot;jejari&quot;:5,&quot;jarak&quot;:[7,9,13,15,17],&quot;i&quot;:2,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 240\" role=\"img\" aria-label=\"Rajah dua tangen PA dan PB dari titik P ke bulatan berpusat O; PA dan PB sama panjang, iaitu 12 sentimeter, dan sudut APB ialah 45.2 darjah\"><circle cx=\"70\" cy=\"100\" r=\"38.23529411764706\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.6\"></circle><line x1=\"169.4\" y1=\"100\" x2=\"84.7\" y2=\"64.7\" stroke=\"var(--teal)\" stroke-width=\"2.4\"></line><line x1=\"169.4\" y1=\"100\" x2=\"84.7\" y2=\"135.3\" stroke=\"var(--teal)\" stroke-width=\"2.4\"></line><line x1=\"70\" y1=\"100\" x2=\"84.7\" y2=\"64.7\" stroke=\"var(--vena)\" stroke-width=\"2\"></line><line x1=\"70\" y1=\"100\" x2=\"84.7\" y2=\"135.3\" stroke=\"var(--vena)\" stroke-width=\"2\"></line><line x1=\"70\" y1=\"100\" x2=\"169.4\" y2=\"100\" stroke=\"var(--line2)\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"></line><path d=\"M81.6 72.1 L89 75.2 L92.1 67.8\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-linejoin=\"round\"></path><path d=\"M81.6 127.9 L89 124.8 L92.1 132.2\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" stroke-linejoin=\"round\"></path><path d=\"M149.1 91.5 A22 22 0 0 0 149.1 108.5\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><path d=\"M75.4 87.1 A14 14 0 0 1 75.4 112.9\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><circle cx=\"70\" cy=\"100\" r=\"3\" fill=\"var(--vena)\" stroke=\"none\"></circle><circle cx=\"84.7\" cy=\"64.7\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><circle cx=\"84.7\" cy=\"135.3\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><circle cx=\"169.4\" cy=\"100\" r=\"3\" fill=\"var(--teal)\" stroke=\"none\"></circle><text x=\"60\" y=\"104\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">O</text><text x=\"88.9\" y=\"58.6\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">A</text><text x=\"88.9\" y=\"149.4\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">B</text><text x=\"175.4\" y=\"116\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">P</text><text x=\"8\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">OP = 13 cm   OA = 5 cm</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">PA = PB = 12 cm</text><text class=\"jmi-hasil\" x=\"8\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">∠APB = 45.2°   ∠AOB = 134.8°</text></svg></div><figcaption>Rajah 1 · Ubah jarak OP. Kira dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "bul6": "<figure class=\"figure jmi\" data-w=\"bulatan\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;bulatan&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan Q. Bandingkan sudut tangen–perentas dengan ∠TQA.&quot;,&quot;alt&quot;:&quot;Rajah interaktif tangen di titik T dan perentas TA; gelongsor menggerakkan titik Q pada lengkok besar dan sudut dalam tembereng selang-seli sentiasa sama dengan sudut tangen dan perentas&quot;,&quot;mod&quot;:&quot;selang&quot;,&quot;lengkok&quot;:80,&quot;pos&quot;:[30,70,110,150,190,230],&quot;i&quot;:1}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 240\" role=\"img\" aria-label=\"Rajah tangen di titik T dan perentas TA; sudut antara tangen dan perentas ialah 40 darjah, sama dengan sudut dalam tembereng selang-seli di Q\"><circle cx=\"130\" cy=\"100\" r=\"62\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.6\"></circle><line x1=\"70\" y1=\"162\" x2=\"200\" y2=\"162\" stroke=\"var(--ink2)\" stroke-width=\"2\"></line><line x1=\"130\" y1=\"162\" x2=\"191.1\" y2=\"110.8\" stroke=\"var(--teal)\" stroke-width=\"2.4\"></line><line x1=\"161\" y1=\"46.3\" x2=\"130\" y2=\"162\" stroke=\"var(--arteri)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"></line><line x1=\"161\" y1=\"46.3\" x2=\"191.1\" y2=\"110.8\" stroke=\"var(--arteri)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"></line><line x1=\"130\" y1=\"100\" x2=\"130\" y2=\"162\" stroke=\"var(--vena)\" stroke-width=\"1.4\" stroke-dasharray=\"2 3\"></line><line x1=\"130\" y1=\"100\" x2=\"191.1\" y2=\"110.8\" stroke=\"var(--vena)\" stroke-width=\"1.4\" stroke-dasharray=\"2 3\"></line><path d=\"M152 162 A22 22 0 0 0 146.9 147.9\" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><path d=\"M157.4 59.8 A14 14 0 0 0 166.9 59\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><path d=\"M130 114 A14 14 0 0 0 143.8 102.4\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.6\" stroke-linejoin=\"round\"></path><circle cx=\"130\" cy=\"100\" r=\"3\" fill=\"var(--vena)\" stroke=\"none\"></circle><circle cx=\"130\" cy=\"162\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><circle cx=\"191.1\" cy=\"110.8\" r=\"3\" fill=\"var(--ink)\" stroke=\"none\"></circle><circle cx=\"161\" cy=\"46.3\" r=\"3\" fill=\"var(--arteri)\" stroke=\"none\"></circle><text x=\"120\" y=\"96\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">O</text><text x=\"126\" y=\"180\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">T</text><text x=\"201.9\" y=\"116.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">A</text><text x=\"166.5\" y=\"40.8\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Q</text><text class=\"jmi-hasil\" x=\"8\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">∠tangen–perentas = 40°</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">∠TQA (selang-seli) = 40°</text><text class=\"jmi-hasil\" x=\"8\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">∠TOA (pusat) = 80°</text></svg></div><figcaption>Rajah 1 · Gerakkan Q. Bandingkan sudut tangen–perentas dengan ∠TQA.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Roda Ferris",
   "sk": "6.1.1 Bahagian bulatan, sudut pusat dan sudut pada lilitan",
   "lampiran": "bul1",
   "kadNama": "Roda Ferris",
   "kadEm": "🎡",
   "kadFakta": "Roda ferris pertama dibina oleh George Ferris untuk pameran di Chicago pada tahun 1893. Tingginya kira-kira 80 meter, dan setiap kereta kabin bergerak di sepanjang lilitan sebuah bulatan besar.",
   "bosKadNama": "Lengkok dan Sudut",
   "bosKadEm": "📐",
   "bosKadFakta": "Lengkok yang sama boleh dipandang dari pusat atau dari lilitan. Dari pusat, sudutnya besar. Dari lilitan, sudutnya tepat separuh daripada sudut pusat.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Garis lurus yang menyambung dua titik pada lilitan dan melalui pusat bulatan dipanggil:",
     "p": [
      "Diameter",
      "Jejari",
      "Lengkok",
      "Tangen"
     ],
     "b": 0,
     "u": "Diameter ialah perentas terpanjang dan melalui pusat. Panjangnya dua kali jejari."
    },
    {
     "j": "pilih",
     "t": "Bahagian lilitan yang terletak di antara dua titik pada bulatan dipanggil:",
     "p": [
      "Perentas",
      "Lengkok",
      "Tembereng",
      "Jejari"
     ],
     "b": 1,
     "u": "Lengkok ialah sebahagian daripada lilitan. Perentas pula ialah garis lurus antara dua titik pada lilitan."
    },
    {
     "j": "pilih",
     "t": "Sudut yang bucunya berada di pusat bulatan dipanggil:",
     "p": [
      "Sudut pada lilitan",
      "Sudut tirus",
      "Sudut pusat",
      "Sudut peluaran"
     ],
     "b": 2,
     "u": "Sudut pusat mempunyai bucu di pusat bulatan dan dicangkum oleh suatu lengkok."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, sudut pada lilitan yang dicangkum oleh lengkok AB dan bucunya di titik P ialah:",
     "p": [
      "∠AOB",
      "∠OAB",
      "∠OBP",
      "∠APB"
     ],
     "b": 3,
     "u": "Bucu di P pada lilitan, jadi ∠APB. ∠AOB ialah sudut pusat kerana bucunya di O."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, ∠AOB (sudut pusat) ialah 80°. Berapakah ∠APB (sudut pada lilitan) dalam darjah?",
     "b": 40,
     "tol": 0.1,
     "suf": "°",
     "u": "Sudut pada lilitan ialah separuh sudut pusat: 80° ÷ 2 = 40°."
    },
    {
     "j": "nombor",
     "t": "Sudut pusat yang dicangkum oleh sebuah lengkok ialah 130°. Berapakah sudut pada lilitan yang dicangkum oleh lengkok yang sama?",
     "b": 65,
     "tol": 0.1,
     "suf": "°",
     "u": "130° ÷ 2 = 65°."
    },
    {
     "j": "nombor",
     "t": "Sudut pada lilitan yang dicangkum oleh lengkok PQ ialah 35°. Berapakah sudut pusat yang dicangkum oleh lengkok PQ?",
     "b": 70,
     "tol": 0.1,
     "suf": "°",
     "u": "Sudut pusat ialah dua kali sudut pada lilitan: 35° × 2 = 70°."
    },
    {
     "j": "susun",
     "t": "Susun langkah mencari sudut pada lilitan apabila sudut pusat diketahui.",
     "p": [
      "Kenal pasti lengkok yang mencangkum kedua-dua sudut",
      "Baca nilai sudut pusat yang dicangkum lengkok itu",
      "Bahagikan nilai sudut pusat dengan 2",
      "Tulis jawapan sebagai sudut pada lilitan"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Kenal lengkok dahulu, kemudian baca sudut pusat, bahagi dua, dan tulis jawapan."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang Rajah 1.",
    "p": [
     "Sudut pusat ialah dua kali sudut pada lilitan yang dicangkum lengkok yang sama",
     "Menggerakkan P tidak mengubah nilai ∠APB",
     "∠APB dan ∠AQB sama besar kerana dicangkum oleh lengkok AB",
     "Sudut pada lilitan sentiasa lebih besar daripada sudut pusat",
     "∠APB menjadi 90° apabila P menghampiri titik A",
     "Perentas AB ialah diameter apabila ∠AOB = 80°"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Sudut pada lilitan yang dicangkum lengkok yang sama sentiasa sama, dan separuh sudut pusat. AB hanya diameter apabila ∠AOB = 180°."
   }
  },
  {
   "n": 2,
   "tempat": "Jam Dinding",
   "sk": "6.1.1 / 6.1.2 Sudut dalam semibulatan dan sudut lengkok yang sama",
   "lampiran": "bul2",
   "kadNama": "Muka Jam",
   "kadEm": "🕰️",
   "kadFakta": "Muka jam dibahagi kepada 12 bahagian yang sama. Setiap jam mewakili sudut pusat 30°, kerana 360° ÷ 12 = 30°.",
   "bosKadNama": "Thales",
   "bosKadEm": "🏛️",
   "bosKadFakta": "Ahli matematik Yunani, Thales, dikaitkan dengan teorem bahawa sudut dalam semibulatan ialah sudut tegak. Teorem ini sudah berumur lebih 2 500 tahun.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, AB ialah diameter. Berapakah ∠APB (sudut dalam semibulatan) dalam darjah?",
     "b": 90,
     "tol": 0.1,
     "suf": "°",
     "u": "Sudut pusat bagi diameter ialah 180°. Sudut pada lilitan ialah separuhnya: 90°."
    },
    {
     "j": "pilih",
     "t": "Sudut dalam semibulatan sentiasa bernilai:",
     "p": [
      "90°",
      "60°",
      "180°",
      "45°"
     ],
     "b": 0,
     "u": "Diameter mencangkum sudut pusat 180°, jadi sudut pada lilitan ialah 90°."
    },
    {
     "j": "pilih",
     "t": "Dua sudut pada lilitan yang dicangkum oleh lengkok yang sama adalah:",
     "p": [
      "Berjumlah 180°",
      "Sama besar",
      "Separuh antara satu sama lain",
      "Dua kali antara satu sama lain"
     ],
     "b": 1,
     "u": "Kedua-duanya separuh daripada sudut pusat yang sama, jadi nilainya sama."
    },
    {
     "j": "nombor",
     "t": "AC ialah diameter sebuah bulatan dan B terletak pada lilitan. Jika ∠BAC = 35°, berapakah ∠ACB dalam darjah?",
     "b": 55,
     "tol": 0.1,
     "suf": "°",
     "u": "∠ABC = 90° (sudut dalam semibulatan). ∠ACB = 180° − 90° − 35° = 55°."
    },
    {
     "j": "nombor",
     "t": "Pada muka jam berpusat O, setiap jam mewakili sudut pusat yang sama. Berapakah sudut pusat antara jam 12 dan jam 5 dalam darjah?",
     "b": 150,
     "tol": 0.1,
     "suf": "°",
     "u": "Setiap jam = 360° ÷ 12 = 30°. Dari jam 12 ke jam 5 ada 5 jam: 5 × 30° = 150°."
    },
    {
     "j": "nombor",
     "t": "Pada muka jam yang sama, P ialah titik pada lilitan di lengkok besar. Berapakah sudut pada lilitan yang dicangkum oleh lengkok jam 12 hingga jam 5 dalam darjah?",
     "b": 75,
     "tol": 0.1,
     "suf": "°",
     "u": "Sudut pusat lengkok itu ialah 150°. Sudut pada lilitan ialah 150° ÷ 2 = 75°."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, apabila P digerakkan di sepanjang lengkok, ∠APB:",
     "p": [
      "Berubah antara 0° dan 180°",
      "Menjadi 180° di tengah lengkok",
      "Kekal 90°",
      "Sentiasa sama dengan ∠AOB"
     ],
     "b": 2,
     "u": "P sentiasa berada pada semibulatan, jadi ∠APB tetap 90°. ∠AOB ialah 180°, bukan 90°."
    },
    {
     "j": "pilih",
     "t": "PR ialah diameter sebuah bulatan dan Q terletak pada lilitan. Segi tiga PQR ialah segi tiga:",
     "p": [
      "Sama sisi",
      "Bersudut cakah",
      "Bersudut tirus semua",
      "Bersudut tegak"
     ],
     "b": 3,
     "u": "∠PQR ialah sudut dalam semibulatan, iaitu 90°. Maka segi tiga PQR bersudut tegak di Q."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "AB ialah diameter sebuah bulatan berpusat O dan C terletak pada lilitan. ∠CAB = 2x dan ∠ABC = x + 15. Berapakah nilai x?",
    "b": 25,
    "tol": 0.1,
    "u": "∠ACB = 90° (dalam semibulatan). Jumlah sudut segi tiga: 90 + 2x + x + 15 = 180, jadi 3x = 75 dan x = 25."
   }
  },
  {
   "n": 3,
   "tempat": "Roda Basikal",
   "sk": "6.2.1 / 6.2.2 Sisi empat kitaran dan sudut bertentangan",
   "lampiran": "bul3",
   "kadNama": "Sisi Empat Kitaran",
   "kadEm": "🚲",
   "kadFakta": "Perkataan kitaran bermaksud bergerak dalam bulatan. Sisi empat kitaran mempunyai keempat-empat bucu pada satu bulatan yang sama.",
   "bosKadNama": "Empat Tepat dan Sama",
   "bosKadEm": "🟦",
   "bosKadFakta": "Segi empat tepat dan segi empat sama sentiasa sisi empat kitaran kerana setiap pasang sudut bertentangan ialah 90° + 90° = 180°.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Sisi empat kitaran ialah sisi empat yang:",
     "p": [
      "Semua bucunya terletak pada lilitan bulatan",
      "Semua sisinya menyentuh bulatan dari dalam",
      "Semua sisinya mempunyai panjang yang sama",
      "Sekurang-kurangnya satu sudutnya ialah 90°"
     ],
     "b": 0,
     "u": "Ciri sisi empat kitaran ialah keempat-empat bucunya pada satu bulatan. Bulatan itu dipanggil bulatan lilit."
    },
    {
     "j": "nombor",
     "t": "ABCD ialah sisi empat kitaran. Jika ∠ABC = 80°, berapakah ∠ADC dalam darjah?",
     "b": 100,
     "tol": 0.1,
     "suf": "°",
     "u": "Sudut bertentangan sisi empat kitaran berjumlah 180°. ∠ADC = 180° − 80° = 100°."
    },
    {
     "j": "nombor",
     "t": "ABCD ialah sisi empat kitaran dan ∠BAD = 112°. Berapakah ∠BCD dalam darjah?",
     "b": 68,
     "tol": 0.1,
     "suf": "°",
     "u": "∠BCD bertentangan dengan ∠BAD. 180° − 112° = 68°."
    },
    {
     "j": "nombor",
     "t": "ABCD ialah sisi empat kitaran. ∠ABC = 3x dan ∠ADC = 2x + 30°. Berapakah nilai x?",
     "b": 30,
     "tol": 0.1,
     "u": "Sudut bertentangan berjumlah 180°: 3x + 2x + 30 = 180. Maka 5x = 150 dan x = 30."
    },
    {
     "j": "pilih",
     "t": "Jumlah sepasang sudut bertentangan bagi sebuah sisi empat kitaran ialah:",
     "p": [
      "90°",
      "180°",
      "270°",
      "360°"
     ],
     "b": 1,
     "u": "Sudut bertentangan sisi empat kitaran sentiasa berjumlah 180°."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, A, B dan C tetap. Apabila D digerakkan di sepanjang lengkok, ∠ABC:",
     "p": [
      "Bertambah apabila D menghampiri C",
      "Berkurang apabila D menghampiri A",
      "Tidak berubah",
      "Sentiasa sama dengan ∠ADC"
     ],
     "b": 2,
     "u": "∠ABC bergantung pada A, B dan C sahaja. Yang berubah ialah ∠ADC, dan ∠ABC + ∠ADC tetap 180°."
    },
    {
     "j": "nombor",
     "t": "ABCD ialah sisi empat kitaran. Sisi BC dipanjangkan ke titik E. Jika ∠DAB = 72°, berapakah sudut peluaran ∠DCE dalam darjah?",
     "b": 72,
     "tol": 0.1,
     "suf": "°",
     "u": "∠BCD = 180° − 72° = 108°. ∠DCE terletak pada garis lurus BCE: 180° − 108° = 72°. Sudut peluaran sama dengan sudut pedalaman bertentangan."
    },
    {
     "j": "susun",
     "t": "Susun langkah mencari ∠ADC bagi sisi empat kitaran ABCD apabila ∠ABC diketahui.",
     "p": [
      "Sahkan bahawa ABCD ialah sisi empat kitaran",
      "Kenal pasti ∠ADC bertentangan dengan ∠ABC",
      "Guna hubungan: sudut bertentangan berjumlah 180°",
      "Tolak ∠ABC daripada 180°"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Sahkan bentuk, kenal sudut bertentangan, guna hubungan 180°, kemudian tolak."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA sisi empat yang PASTI merupakan sisi empat kitaran.",
    "p": [
     "Segi empat tepat",
     "Segi empat sama",
     "Trapezium sama kaki",
     "Segi empat selari yang bukan segi empat tepat",
     "Rombus yang bukan segi empat sama",
     "Layang-layang yang biasa"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Segi empat tepat, segi empat sama dan trapezium sama kaki mempunyai sudut bertentangan berjumlah 180°. Segi empat selari dan rombus biasa tidak."
   }
  },
  {
   "n": 4,
   "tempat": "Landasan Lengkung",
   "sk": "6.3.1 / 6.3.2(i) Tangen dan jejari pada titik ketangenan",
   "lampiran": "bul4",
   "kadNama": "Titik Ketangenan",
   "kadEm": "🛤️",
   "kadFakta": "Roda kereta api menyentuh landasan pada satu titik sahaja pada satu masa. Landasan lurus itu ialah tangen kepada roda, dan titik sentuhan dipanggil titik ketangenan.",
   "bosKadNama": "Tangere",
   "bosKadEm": "🤝",
   "bosKadFakta": "Perkataan tangen datang daripada bahasa Latin tangere, yang bermaksud menyentuh. Tangen menyentuh bulatan tepat pada satu titik.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Tangen kepada sebuah bulatan ialah garis lurus yang:",
     "p": [
      "Memotong bulatan pada dua titik",
      "Melalui pusat bulatan",
      "Menyambung dua titik pada lilitan",
      "Menyentuh bulatan pada satu titik sahaja"
     ],
     "b": 3,
     "u": "Tangen hanya menyentuh bulatan pada satu titik, iaitu titik ketangenan."
    },
    {
     "j": "pilih",
     "t": "Sudut antara tangen dengan jejari pada titik ketangenan ialah:",
     "p": [
      "90°",
      "45°",
      "60°",
      "180°"
     ],
     "b": 0,
     "u": "Jejari yang dilukis ke titik ketangenan sentiasa serenjang dengan tangen."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, jejari OT = 6 cm dan tangen TP = 8 cm. Kira panjang OP dalam cm.",
     "b": 10,
     "tol": 0.05,
     "suf": "cm",
     "u": "∠OTP = 90°, jadi OP² = 6² + 8² = 100. OP = 10 cm."
    },
    {
     "j": "nombor",
     "t": "Tangen PT menyentuh sebuah bulatan berpusat O di T. Jika OT = 8 cm dan OP = 17 cm, berapakah panjang PT dalam cm?",
     "b": 15,
     "tol": 0.05,
     "suf": "cm",
     "u": "PT² = OP² − OT² = 289 − 64 = 225. PT = 15 cm."
    },
    {
     "j": "nombor",
     "t": "Tangen PT menyentuh sebuah bulatan berpusat O di T. Jika ∠TOP = 62°, berapakah ∠TPO dalam darjah?",
     "b": 28,
     "tol": 0.1,
     "suf": "°",
     "u": "∠OTP = 90°. ∠TPO = 180° − 90° − 62° = 28°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, OT = 6 cm dan TP = 8 cm. Kira ∠TOP kepada 1 tempat perpuluhan (darjah).",
     "b": 53.1,
     "tol": 0.1,
     "suf": "°",
     "u": "tan ∠TOP = TP ÷ OT = 8 ÷ 6. ∠TOP = tan⁻¹(1.333) = 53.1°."
    },
    {
     "j": "pilih",
     "t": "Bulatan berpusat O mempunyai jejari OT = 5 cm dan OP = 13 cm. Garis PT ialah tangen di T jika:",
     "p": [
      "PT = OT",
      "∠OTP = 90°",
      "∠TOP = 90°",
      "PT selari dengan OT"
     ],
     "b": 1,
     "u": "Garis ialah tangen hanya jika serenjang dengan jejari pada titik sentuhan, iaitu ∠OTP = 90°."
    },
    {
     "j": "nombor",
     "t": "Sebuah landasan lurus menyentuh sebuah taman berbentuk bulatan berpusat O dan berjejari 20 m, di T. Titik P pada landasan berjarak 21 m dari T. Berapakah OP dalam m?",
     "b": 29,
     "tol": 0.05,
     "suf": "m",
     "u": "Landasan ialah tangen, jadi ∠OTP = 90°. OP² = 20² + 21² = 841. OP = 29 m."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Tangen PT menyentuh bulatan berpusat O di T. Jika ∠OPT = 30° dan OT = 7 cm, berapakah panjang OP dalam cm?",
    "b": 14,
    "tol": 0.05,
    "suf": "cm",
    "u": "∠OTP = 90°. OT bertentangan dengan ∠OPT, jadi sin 30° = 7 ÷ OP. OP = 7 ÷ 0.5 = 14 cm."
   }
  },
  {
   "n": 5,
   "tempat": "Takal dan Tali",
   "sk": "6.3.2(ii) / 6.3.3 Dua tangen dari satu titik dan tangen sepunya",
   "lampiran": "bul5",
   "kadNama": "Tali Sawat",
   "kadEm": "🔗",
   "kadFakta": "Tali sawat yang menghubungkan dua roda atau takal menyentuh kedua-dua roda secara lurus. Bahagian lurus itu ialah tangen sepunya bagi dua bulatan.",
   "bosKadNama": "Tangen Sepunya",
   "bosKadEm": "⚙️",
   "bosKadFakta": "Bagi dua bulatan berjejari r1 dan r2 dengan jarak pusat d, panjang tangen sepunya luar ialah punca kuasa dua bagi d² − (r1 − r2)².",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dua tangen yang dilukis dari satu titik di luar bulatan ke bulatan itu mempunyai panjang:",
     "p": [
      "Berbeza mengikut kedudukan",
      "Dua kali jejari",
      "Sama",
      "Separuh jejari"
     ],
     "b": 2,
     "u": "Kedua-dua tangen dari titik yang sama sentiasa sama panjang."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan OP = 13 cm dan jejari OA = 5 cm. Berapakah panjang PA dalam cm?",
     "b": 12,
     "tol": 0.05,
     "suf": "cm",
     "u": "∠OAP = 90°, jadi PA² = OP² − OA² = 169 − 25 = 144. PA = 12 cm."
    },
    {
     "j": "nombor",
     "t": "Dua tangen PA dan PB dilukis dari titik P ke sebuah bulatan. PA = 3x + 2 dan PB = 5x − 8. Berapakah nilai x?",
     "b": 5,
     "tol": 0.05,
     "u": "PA = PB, jadi 3x + 2 = 5x − 8. Maka 10 = 2x dan x = 5."
    },
    {
     "j": "nombor",
     "t": "Dua tangen PA dan PB dilukis dari titik P ke sebuah bulatan berpusat O. Jika ∠APB = 50°, berapakah ∠AOB dalam darjah?",
     "b": 130,
     "tol": 0.1,
     "suf": "°",
     "u": "∠OAP = ∠OBP = 90°. Jumlah sudut sisi empat OAPB ialah 360°: ∠AOB = 360° − 90° − 90° − 50° = 130°."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, sisi empat OAPB ialah:",
     "p": [
      "Segi empat selari",
      "Trapezium",
      "Rombus",
      "Layang-layang"
     ],
     "b": 3,
     "u": "OA = OB (jejari) dan PA = PB (dua tangen), jadi OAPB ialah layang-layang."
    },
    {
     "j": "nombor",
     "t": "Dua tangen PA dan PB dilukis dari titik P ke sebuah bulatan berpusat O. Jika ∠OPA = 25°, berapakah ∠APB dalam darjah?",
     "b": 50,
     "tol": 0.1,
     "suf": "°",
     "u": "PO membahagi dua ∠APB. ∠APB = 2 × 25° = 50°."
    },
    {
     "j": "nombor",
     "t": "Bulatan berpusat O berjejari 8 cm. Tangen PA menyentuh bulatan di A, dengan OP = 17 cm dan PA = 15 cm. Berapakah luas segi tiga OAP dalam cm²?",
     "b": 60,
     "tol": 0.1,
     "suf": "cm²",
     "u": "∠OAP = 90°. Luas = ½ × OA × PA = ½ × 8 × 15 = 60 cm²."
    },
    {
     "j": "susun",
     "t": "Susun langkah mencari panjang tangen PA dari titik P ke bulatan berpusat O.",
     "p": [
      "Lukis jejari OA ke titik ketangenan A",
      "Sedari bahawa ∠OAP = 90°",
      "Guna Teorem Pythagoras: PA² = OP² − OA²",
      "Ambil punca kuasa dua bagi PA²"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Bina segi tiga bersudut tegak OAP dahulu, kemudian guna Teorem Pythagoras."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dua bulatan berjejari 3 cm dan 8 cm mempunyai pusat berjarak 13 cm. Sebuah tali sawat menyentuh kedua-dua bulatan sebagai tangen sepunya luar. Berapakah panjang tangen sepunya itu dalam cm?",
    "b": 12,
    "tol": 0.05,
    "suf": "cm",
    "u": "Lukis garis dari pusat kecil selari dengan tangen. Segi tiga bersudut tegak terbentuk dengan hipotenus 13 dan sisi (8 − 3) = 5. Panjang tangen = √(13² − 5²) = 12 cm."
   }
  },
  {
   "n": 6,
   "tempat": "Reka Lencana",
   "sk": "6.3.2(iii) / 6.3.3 / 6.4.1 Sudut tembereng selang-seli dan masalah bukan rutin",
   "lampiran": "bul6",
   "kadNama": "Selang-seli",
   "kadEm": "🏅",
   "kadFakta": "Tembereng selang-seli ialah tembereng di seberang perentas berbanding sudut tangen dan perentas. Sudut dalam tembereng itu sentiasa sama dengan sudut antara tangen dan perentas.",
   "bosKadNama": "Reka Bentuk",
   "bosKadEm": "✏️",
   "bosKadFakta": "Pereka logo sering menggabungkan bulatan, tangen dan sisi empat kitaran. Setiap garisan mempunyai hubungan sudut yang boleh dikira.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Sudut antara tangen dengan perentas pada titik ketangenan sama dengan sudut:",
     "p": [
      "Dalam tembereng selang-seli",
      "Pusat yang dicangkum perentas itu",
      "Bertentangan pada sisi empat kitaran",
      "Antara dua jejari yang bersebelahan"
     ],
     "b": 0,
     "u": "Ini ialah teorem tembereng selang-seli. Sudut itu sama dengan sudut dalam tembereng di seberang perentas."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, ∠TOA (sudut pusat) ialah 80°. Berapakah sudut antara tangen dengan perentas TA dalam darjah?",
     "b": 40,
     "tol": 0.1,
     "suf": "°",
     "u": "Sudut dalam tembereng selang-seli ialah separuh sudut pusat, iaitu 40°. Sudut tangen–perentas juga 40°."
    },
    {
     "j": "nombor",
     "t": "Sudut antara sebuah tangen dengan sebuah perentas ialah 55°. Berapakah sudut dalam tembereng selang-seli dalam darjah?",
     "b": 55,
     "tol": 0.1,
     "suf": "°",
     "u": "Kedua-dua sudut itu sama besar mengikut teorem tembereng selang-seli."
    },
    {
     "j": "nombor",
     "t": "Tangen PQ menyentuh sebuah bulatan berpusat O di T. Jika sudut antara PQ dengan perentas TA ialah 68°, berapakah ∠TOA dalam darjah?",
     "b": 136,
     "tol": 0.1,
     "suf": "°",
     "u": "Sudut tembereng selang-seli ialah 68°. Sudut pusat dua kali ganda: 68° × 2 = 136°."
    },
    {
     "j": "nombor",
     "t": "Dua tangen PA dan PB dilukis dari titik P ke sebuah bulatan. Jika ∠APB = 40°, berapakah ∠PAB dalam darjah?",
     "b": 70,
     "tol": 0.1,
     "suf": "°",
     "u": "PA = PB, jadi segi tiga PAB sama kaki. ∠PAB = (180° − 40°) ÷ 2 = 70°."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, apabila Q digerakkan di sepanjang lengkok besar, ∠TQA:",
     "p": [
      "Bertambah apabila Q menjauhi T",
      "Kekal sama dengan sudut tangen–perentas",
      "Berkurang menjadi 0° di titik A",
      "Sentiasa bernilai 90°"
     ],
     "b": 1,
     "u": "Semua sudut pada lilitan yang dicangkum lengkok TA adalah sama, dan sama dengan sudut tangen–perentas."
    },
    {
     "j": "nombor",
     "t": "Garis lurus PQ ialah tangen kepada sebuah bulatan di T. Perentas TA dan TB dilukis dari T, kedua-duanya di sebelah bulatan. Sudut antara TA dengan TP ialah 50° dan sudut antara TB dengan TQ ialah 60°. Berapakah ∠ATB dalam darjah?",
     "b": 70,
     "tol": 0.1,
     "suf": "°",
     "u": "P, T dan Q terletak pada garis lurus, jadi tiga sudut di T berjumlah 180°: ∠ATB = 180° − 50° − 60° = 70°."
    },
    {
     "j": "pilih",
     "t": "Antara berikut, yang manakah TIDAK BENAR?",
     "p": [
      "Dua tangen dari satu titik luar sama panjang",
      "Jejari serenjang dengan tangen pada titik ketangenan",
      "Jejari dan tangen pada titik ketangenan adalah selari",
      "Sudut tangen–perentas sama dengan sudut selang-seli"
     ],
     "b": 2,
     "u": "Jejari serenjang dengan tangen, bukan selari. Tiga pernyataan lain adalah benar."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka sebuah lencana sekolah berbentuk bulatan. Dalam bulatan itu, lukis sebuah sisi empat kitaran dan dua tangen dari satu titik di luar bulatan.",
    "arahan": "Lukis lencana awak di kertas. Nyatakan sekurang-kurangnya tiga sudut yang boleh dikira, dan tunjukkan pengiraan setiap satu dengan menyatakan sifat bulatan yang awak guna.",
    "u": "Jawapan TP6 yang kukuh melukis lencana dengan betul, mengira sekurang-kurangnya tiga sudut dengan sifat yang tepat (contoh: sudut bertentangan berjumlah 180°, jejari serenjang dengan tangen, dua tangen sama panjang) dan menerangkan alasan setiap langkah."
   }
  }
 ]
};
