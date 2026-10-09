/* Bank soalan — Matematik Ting. 5 · Bab 1 Ubahan.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m5b1.js
   kemudian jalankan: node bina.js m5b1

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 5, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m5b1"] =
{
 "id": "m5b1",
 "tingkatan": 5,
 "kod": "1.0 Ubahan",
 "tajuk": "Bengkel Ubahan",
 "subtajuk": "Matematik Ting. 5 · Bab 1 Ubahan",
 "spi": [
  "Mempamerkan pengetahuan asas tentang ubahan.",
  "Mempamerkan kefahaman tentang ubahan.",
  "Mengaplikasikan kefahaman tentang ubahan untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ubahan dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ubahan dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ubahan dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} mengenal pasti ubahan langsung, menulisnya dengan simbol ∝ dan menentukan pemalar ubahan daripada graf. Langkah seterusnya ialah ubahan yang melibatkan kuasa.",
  "2": "{n} memahami ubahan langsung y ∝ xⁿ, mengaitkan pemalar ubahan dengan kecerunan graf y lawan xⁿ, dan menyelesaikan ubahan tercantum. Perlu lebih latihan tentang ubahan songsang.",
  "3": "{n} dapat menentukan hubungan ubahan songsang, termasuk yang melibatkan kuasa dan punca, dan menggunakannya untuk tugasan mudah.",
  "4": "{n} mampu menyelesaikan masalah rutin mudah yang melibatkan ubahan langsung dan songsang dalam situasi sebenar seperti jarak brek dan bilangan pekerja. Seterusnya, latih ubahan bergabung.",
  "5": "{n} dapat membentuk dan menyelesaikan masalah ubahan bergabung yang melibatkan tiga atau lebih pemboleh ubah. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya menguji model ubahan dengan data, membina model sendiri daripada situasi sebenar dan menilai hadnya. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Ubahan. Cadangan: ulang hentian pertama dengan Rajah 1 dan bina jadual harga barangan dapur sebagai contoh ubahan langsung."
 },
 "lampiran": {
  "r1": "<figure class=\"figure jmi\" data-w=\"t5ubah\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5ubah&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Harga beras H (RM) dan jisim m (kg) di sebuah kedai. Gerakkan m.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf harga beras lawan jisim, garis lurus melalui asalan dengan H = 3.2m; gelongsor memilih jisim 1 hingga 10 kg&quot;,&quot;mod&quot;:&quot;langsung&quot;,&quot;k&quot;:3.2,&quot;n&quot;:1,&quot;nt&quot;:&quot;m&quot;,&quot;xs&quot;:[1,2,3,4,5,6,7,8,9,10],&quot;namaX&quot;:&quot;m&quot;,&quot;namaY&quot;:&quot;H&quot;,&quot;unitX&quot;:&quot;kg&quot;,&quot;unitY&quot;:&quot;RM&quot;,&quot;iAwal&quot;:1}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 262\" role=\"img\" aria-label=\"Graf H lawan m bagi H berubah secara langsung dengan m; titik pada m = 2, H = 6.4\"><text x=\"130\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">H ∝ m,  H = 3.2m</text><line x1=\"44\" y1=\"164\" x2=\"240\" y2=\"164\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"44\" y1=\"164\" x2=\"44\" y2=\"44\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"44\" y1=\"164\" x2=\"44\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"44\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"83.2\" y1=\"164\" x2=\"83.2\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"83.2\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"122.4\" y1=\"164\" x2=\"122.4\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"122.4\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><line x1=\"161.6\" y1=\"164\" x2=\"161.6\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"161.6\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"200.8\" y1=\"164\" x2=\"200.8\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"200.8\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">8</text><line x1=\"240\" y1=\"164\" x2=\"240\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"240\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">10</text><line x1=\"41\" y1=\"135.5\" x2=\"44\" y2=\"135.5\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"135.5\" x2=\"240\" y2=\"135.5\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"139.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"41\" y1=\"107\" x2=\"44\" y2=\"107\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"107\" x2=\"240\" y2=\"107\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"111\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">20</text><line x1=\"41\" y1=\"78.5\" x2=\"44\" y2=\"78.5\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"78.5\" x2=\"240\" y2=\"78.5\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"82.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">30</text><line x1=\"41\" y1=\"50\" x2=\"44\" y2=\"50\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"50\" x2=\"240\" y2=\"50\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">40</text><text x=\"240\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">m (kg)</text><text x=\"48\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">H (RM)</text><path d=\"M44 164L47.3 162.5L50.5 161L53.8 159.4L57.1 157.9L60.3 156.4L63.6 154.9L66.9 153.4L70.1 151.8L73.4 150.3L76.7 148.8L79.9 147.3L83.2 145.8L86.5 144.2L89.7 142.7L93 141.2L96.3 139.7L99.5 138.2L102.8 136.6L106.1 135.1L109.3 133.6L112.6 132.1L115.9 130.6L119.1 129L122.4 127.5L125.7 126L128.9 124.5L132.2 123L135.5 121.4L138.7 119.9L142 118.4L145.3 116.9L148.5 115.4L151.8 113.8L155.1 112.3L158.3 110.8L161.6 109.3L164.9 107.8L168.1 106.2L171.4 104.7L174.7 103.2L177.9 101.7L181.2 100.2L184.5 98.6L187.7 97.1L191 95.6L194.3 94.1L197.5 92.6L200.8 91L204.1 89.5L207.3 88L210.6 86.5L213.9 85L217.1 83.4L220.4 81.9L223.7 80.4L226.9 78.9L230.2 77.4L233.5 75.8L236.7 74.3L240 72.8\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><circle cx=\"83.2\" cy=\"145.8\" r=\"4.5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.4\"></circle><text x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">m = 2 kg</text><text class=\"jmi-hasil\" x=\"8\" y=\"232\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">H = 3.2 × 2 = RM6.40</text><text class=\"jmi-hasil\" x=\"8\" y=\"252\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">H ÷ m = k = 3.2</text></svg></div><figcaption>Rajah 1 · Harga beras H (RM) dan jisim m (kg) di sebuah kedai. Gerakkan m.</figcaption></figure>",
  "r2": "<figure class=\"figure jmi\" data-w=\"t5ubah\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5ubah&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · y = 2xⁿ. Pilih kuasa n dan paparan graf, kemudian gerakkan x.&quot;,&quot;alt&quot;:&quot;Rajah interaktif y = 2xⁿ bagi n = 1, 2, 3 dan punca kuasa dua; graf y lawan x berbentuk lengkung, graf y lawan xⁿ ialah garis lurus berkecerunan 2&quot;,&quot;mod&quot;:&quot;langsung&quot;,&quot;k&quot;:2,&quot;ns&quot;:[{&quot;n&quot;:1,&quot;t&quot;:&quot;x&quot;},{&quot;n&quot;:2,&quot;t&quot;:&quot;x²&quot;},{&quot;n&quot;:3,&quot;t&quot;:&quot;x³&quot;},{&quot;n&quot;:0.5,&quot;t&quot;:&quot;√x&quot;}],&quot;xs&quot;:[1,2,3,4,5,6,7,8,9],&quot;namaX&quot;:&quot;x&quot;,&quot;namaY&quot;:&quot;y&quot;,&quot;iAwal&quot;:1}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 262\" role=\"img\" aria-label=\"Graf y lawan x bagi y berubah secara langsung dengan x; titik pada x = 2, y = 4\"><text x=\"130\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">y ∝ x,  y = 2x</text><line x1=\"44\" y1=\"164\" x2=\"240\" y2=\"164\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"44\" y1=\"164\" x2=\"44\" y2=\"44\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"44\" y1=\"164\" x2=\"44\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"44\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"83.2\" y1=\"164\" x2=\"83.2\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"83.2\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"122.4\" y1=\"164\" x2=\"122.4\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"122.4\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><line x1=\"161.6\" y1=\"164\" x2=\"161.6\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"161.6\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"200.8\" y1=\"164\" x2=\"200.8\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"200.8\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">8</text><line x1=\"240\" y1=\"164\" x2=\"240\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"240\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">10</text><line x1=\"41\" y1=\"135.5\" x2=\"44\" y2=\"135.5\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"135.5\" x2=\"240\" y2=\"135.5\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"139.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><line x1=\"41\" y1=\"107\" x2=\"44\" y2=\"107\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"107\" x2=\"240\" y2=\"107\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"111\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"41\" y1=\"78.5\" x2=\"44\" y2=\"78.5\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"78.5\" x2=\"240\" y2=\"78.5\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"82.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">15</text><line x1=\"41\" y1=\"50\" x2=\"44\" y2=\"50\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"50\" x2=\"240\" y2=\"50\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">20</text><text x=\"240\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">x</text><text x=\"48\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">y</text><path d=\"M44 164L46.9 162.3L49.9 160.6L52.8 158.9L55.8 157.2L58.7 155.5L61.6 153.7L64.6 152L67.5 150.3L70.5 148.6L73.4 146.9L76.3 145.2L79.3 143.5L82.2 141.8L85.2 140.1L88.1 138.4L91 136.6L94 134.9L96.9 133.2L99.9 131.5L102.8 129.8L105.7 128.1L108.7 126.4L111.6 124.7L114.6 123L117.5 121.3L120.4 119.5L123.4 117.8L126.3 116.1L129.3 114.4L132.2 112.7L135.1 111L138.1 109.3L141 107.6L144 105.9L146.9 104.2L149.8 102.4L152.8 100.7L155.7 99L158.7 97.3L161.6 95.6L164.5 93.9L167.5 92.2L170.4 90.5L173.4 88.8L176.3 87.1L179.2 85.3L182.2 83.6L185.1 81.9L188.1 80.2L191 78.5L193.9 76.8L196.9 75.1L199.8 73.4L202.8 71.7L205.7 70L208.6 68.2L211.6 66.5L214.5 64.8L217.5 63.1L220.4 61.4\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><circle cx=\"83.2\" cy=\"141.2\" r=\"4.5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.4\"></circle><text x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">x = 2</text><text class=\"jmi-hasil\" x=\"8\" y=\"232\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">y = 2 × 2 = 4</text><text class=\"jmi-hasil\" x=\"8\" y=\"252\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">y ÷ x = k = 2</text></svg></div><figcaption>Rajah 1 · y = 2xⁿ. Pilih kuasa n dan paparan graf, kemudian gerakkan x.</figcaption></figure>",
  "r3": "<figure class=\"figure jmi\" data-w=\"t5ubah\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5ubah&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Masa perjalanan t (jam) bagi jarak 120 km pada laju v (km/j). Gerakkan v.&quot;,&quot;alt&quot;:&quot;Rajah interaktif masa perjalanan lawan laju bagi jarak 120 km; graf t lawan v ialah lengkung menurun, graf t lawan 1/v ialah garis lurus berkecerunan 120&quot;,&quot;mod&quot;:&quot;songsang&quot;,&quot;k&quot;:120,&quot;n&quot;:1,&quot;nt&quot;:&quot;v&quot;,&quot;xs&quot;:[20,30,40,50,60,80,100,120],&quot;namaX&quot;:&quot;v&quot;,&quot;namaY&quot;:&quot;t&quot;,&quot;unitX&quot;:&quot;km/j&quot;,&quot;unitY&quot;:&quot;jam&quot;,&quot;iAwal&quot;:2}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 262\" role=\"img\" aria-label=\"Graf t lawan v bagi t berubah secara songsang dengan v; titik pada v = 40, t = 3\"><text x=\"130\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">t ∝ 1/v,  t = 120/v</text><line x1=\"44\" y1=\"164\" x2=\"240\" y2=\"164\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"44\" y1=\"164\" x2=\"44\" y2=\"44\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"44\" y1=\"164\" x2=\"44\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"44\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"83.2\" y1=\"164\" x2=\"83.2\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"83.2\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">25</text><line x1=\"122.4\" y1=\"164\" x2=\"122.4\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"122.4\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">50</text><line x1=\"161.6\" y1=\"164\" x2=\"161.6\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"161.6\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">75</text><line x1=\"200.8\" y1=\"164\" x2=\"200.8\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"200.8\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">100</text><line x1=\"240\" y1=\"164\" x2=\"240\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"240\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">125</text><line x1=\"41\" y1=\"126\" x2=\"44\" y2=\"126\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"126\" x2=\"240\" y2=\"126\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"41\" y1=\"88\" x2=\"44\" y2=\"88\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"88\" x2=\"240\" y2=\"88\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"92\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"41\" y1=\"50\" x2=\"44\" y2=\"50\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"50\" x2=\"240\" y2=\"50\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><text x=\"240\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">v (km/j)</text><text x=\"48\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">t (jam)</text><path d=\"M75.4 50L78 58.8L80.6 66.3L83.2 72.8L85.8 78.5L88.4 83.5L91 88L93.7 92L96.3 95.6L98.9 98.9L101.5 101.8L104.1 104.5L106.7 107L109.3 109.3L111.9 111.4L114.6 113.3L117.2 115.1L119.8 116.8L122.4 118.4L125 119.9L127.6 121.3L130.2 122.5L132.9 123.8L135.5 124.9L138.1 126L140.7 127L143.3 128L145.9 128.9L148.5 129.8L151.1 130.6L153.8 131.4L156.4 132.2L159 132.9L161.6 133.6L164.2 134.3L166.8 134.9L169.4 135.5L172.1 136.1L174.7 136.6L177.3 137.2L179.9 137.7L182.5 138.2L185.1 138.7L187.7 139.1L190.3 139.6L193 140L195.6 140.4L198.2 140.8L200.8 141.2L203.4 141.6L206 141.9L208.6 142.3L211.3 142.6L213.9 143L216.5 143.3L219.1 143.6L221.7 143.9L224.3 144.2L226.9 144.5L229.5 144.7L232.2 145\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><circle cx=\"106.7\" cy=\"107\" r=\"4.5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.4\"></circle><text x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">v = 40 km/j</text><text class=\"jmi-hasil\" x=\"8\" y=\"232\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">t = 120 ÷ 40 = 3 jam</text><text class=\"jmi-hasil\" x=\"8\" y=\"252\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">t × v = k = 120</text></svg></div><figcaption>Rajah 1 · Masa perjalanan t (jam) bagi jarak 120 km pada laju v (km/j). Gerakkan v.</figcaption></figure>",
  "r4": "<figure class=\"figure jmi\" data-w=\"t5ubah\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5ubah&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Jarak brek d (m) sebuah kereta pada laju v (km/j), d ∝ v². Gerakkan v.&quot;,&quot;alt&quot;:&quot;Rajah interaktif jarak brek lawan laju dengan d = 0.006v²; graf d lawan v ialah lengkung menaik, graf d lawan v² ialah garis lurus&quot;,&quot;mod&quot;:&quot;langsung&quot;,&quot;k&quot;:0.006,&quot;n&quot;:2,&quot;nt&quot;:&quot;v²&quot;,&quot;xs&quot;:[20,40,60,80,100,120],&quot;namaX&quot;:&quot;v&quot;,&quot;namaY&quot;:&quot;d&quot;,&quot;unitX&quot;:&quot;km/j&quot;,&quot;unitY&quot;:&quot;m&quot;,&quot;iAwal&quot;:1}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 262\" role=\"img\" aria-label=\"Graf d lawan v bagi d berubah secara langsung dengan v²; titik pada v = 40, d = 9.6\"><text x=\"130\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">d ∝ v²,  d = 0.006v²</text><line x1=\"44\" y1=\"164\" x2=\"240\" y2=\"164\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"44\" y1=\"164\" x2=\"44\" y2=\"44\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"44\" y1=\"164\" x2=\"44\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"44\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"83.2\" y1=\"164\" x2=\"83.2\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"83.2\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">25</text><line x1=\"122.4\" y1=\"164\" x2=\"122.4\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"122.4\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">50</text><line x1=\"161.6\" y1=\"164\" x2=\"161.6\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"161.6\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">75</text><line x1=\"200.8\" y1=\"164\" x2=\"200.8\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"200.8\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">100</text><line x1=\"240\" y1=\"164\" x2=\"240\" y2=\"167\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><text x=\"240\" y=\"179\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">125</text><line x1=\"41\" y1=\"141.2\" x2=\"44\" y2=\"141.2\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"141.2\" x2=\"240\" y2=\"141.2\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"145.2\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">20</text><line x1=\"41\" y1=\"118.4\" x2=\"44\" y2=\"118.4\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"118.4\" x2=\"240\" y2=\"118.4\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"122.4\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">40</text><line x1=\"41\" y1=\"95.6\" x2=\"44\" y2=\"95.6\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"95.6\" x2=\"240\" y2=\"95.6\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"99.6\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">60</text><line x1=\"41\" y1=\"72.8\" x2=\"44\" y2=\"72.8\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"72.8\" x2=\"240\" y2=\"72.8\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"76.8\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">80</text><line x1=\"41\" y1=\"50\" x2=\"44\" y2=\"50\" stroke=\"var(--ink3)\" stroke-width=\"1.1\"></line><line x1=\"44\" y1=\"50\" x2=\"240\" y2=\"50\" stroke=\"var(--line)\" stroke-width=\"0.8\"></line><text x=\"39\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">100</text><text x=\"240\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">v (km/j)</text><text x=\"48\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">d (m)</text><path d=\"M44 164L47.1 164L50.3 163.9L53.4 163.8L56.5 163.6L59.7 163.3L62.8 163L66 162.7L69.1 162.2L72.2 161.8L75.4 161.3L78.5 160.7L81.6 160.1L84.8 159.4L87.9 158.6L91 157.8L94.2 157L97.3 156.1L100.4 155.1L103.6 154.1L106.7 153.1L109.9 151.9L113 150.8L116.1 149.5L119.3 148.2L122.4 146.9L125.5 145.5L128.7 144.1L131.8 142.5L134.9 141L138.1 139.4L141.2 137.7L144.4 136L147.5 134.2L150.6 132.4L153.8 130.5L156.9 128.5L160 126.5L163.2 124.5L166.3 122.4L169.4 120.2L172.6 118L175.7 115.7L178.8 113.4L182 111L185.1 108.6L188.3 106.1L191.4 103.6L194.5 101L197.7 98.3L200.8 95.6L203.9 92.8L207.1 90L210.2 87.1L213.3 84.2L216.5 81.2L219.6 78.2L222.8 75.1L225.9 72L229 68.8L232.2 65.5\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><circle cx=\"106.7\" cy=\"153.1\" r=\"4.5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.4\"></circle><text x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">v = 40 km/j</text><text class=\"jmi-hasil\" x=\"8\" y=\"232\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">d = 0.006 × 40² = 9.6 m</text><text class=\"jmi-hasil\" x=\"8\" y=\"252\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">d ÷ v² = k = 0.006</text></svg></div><figcaption>Rajah 1 · Jarak brek d (m) sebuah kereta pada laju v (km/j), d ∝ v². Gerakkan v.</figcaption></figure>",
  "r5": "<figure class=\"figure jmi cabar\" data-w=\"t5ubah\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5ubah&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Masa T (jam) mengecat dinding seluas A (m²) oleh P orang pekerja. Kira dahulu, kemudian semak.&quot;,&quot;alt&quot;:&quot;Rajah interaktif ubahan bergabung T = 0.15A/P dengan gelongsor luas dinding 20 hingga 120 meter persegi dan bilangan pekerja 1 hingga 6, dalam mod cabar&quot;,&quot;mod&quot;:&quot;gabung&quot;,&quot;cabar&quot;:true,&quot;k&quot;:0.15,&quot;namaY&quot;:&quot;T&quot;,&quot;unitY&quot;:&quot;jam&quot;,&quot;rumus&quot;:&quot;T ∝ A/P,  T = 0.15A/P&quot;,&quot;v&quot;:[{&quot;nama&quot;:&quot;A&quot;,&quot;p&quot;:1,&quot;unit&quot;:&quot;m²&quot;,&quot;nilai&quot;:[20,40,60,80,100,120],&quot;awal&quot;:1},{&quot;nama&quot;:&quot;P&quot;,&quot;p&quot;:-1,&quot;unit&quot;:&quot;orang&quot;,&quot;nilai&quot;:[1,2,3,4,5,6],&quot;awal&quot;:1}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 154\" role=\"img\" aria-label=\"Rajah ubahan: T ∝ A/P,  T = 0.15A/P; A = 40, P = 2; T = 3\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">T ∝ A/P,  T = 0.15A/P</text><text x=\"8\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">A = 40 m²</text><rect x=\"128\" y=\"33\" width=\"120\" height=\"12\" rx=\"6\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"128\" y=\"33\" width=\"24\" height=\"12\" rx=\"6\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.2\"></rect><text x=\"8\" y=\"60\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">langsung</text><text x=\"8\" y=\"78\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">P = 2 orang</text><rect x=\"128\" y=\"67\" width=\"120\" height=\"12\" rx=\"6\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"128\" y=\"67\" width=\"24\" height=\"12\" rx=\"6\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\"></rect><text x=\"8\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">songsang</text><text x=\"8\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">T = 0.15 × 40 ÷ 2</text><text class=\"jmi-hasil\" x=\"8\" y=\"144\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--arteri)\" font-weight=\"700\">T = 3 jam</text></svg></div><figcaption>Rajah 1 · Masa T (jam) mengecat dinding seluas A (m²) oleh P orang pekerja. Kira dahulu, kemudian semak.</figcaption></figure>",
  "r6": "<figure class=\"figure jmi\" data-w=\"t5ubah\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5ubah&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Panjang bandul L (cm) dan tempoh ayunan T (s) daripada satu eksperimen. Uji setiap model.&quot;,&quot;alt&quot;:&quot;Rajah interaktif jadual panjang bandul dan tempoh ayunan; cip memilih model T berubah secara langsung dengan L, L kuasa dua, punca kuasa dua L, atau secara songsang dengan L, dan lajur ketiga menunjukkan sama ada nisbahnya malar&quot;,&quot;mod&quot;:&quot;jadual&quot;,&quot;x&quot;:[16,25,36,49,64],&quot;y&quot;:[0.8,1,1.2,1.4,1.6],&quot;namaX&quot;:&quot;L&quot;,&quot;namaY&quot;:&quot;T&quot;,&quot;model&quot;:[{&quot;t&quot;:&quot;T ∝ L&quot;,&quot;n&quot;:1,&quot;u&quot;:&quot;L&quot;},{&quot;t&quot;:&quot;T ∝ L²&quot;,&quot;n&quot;:2,&quot;u&quot;:&quot;L²&quot;},{&quot;t&quot;:&quot;T ∝ √L&quot;,&quot;n&quot;:0.5,&quot;u&quot;:&quot;√L&quot;},{&quot;t&quot;:&quot;T ∝ 1/L&quot;,&quot;n&quot;:-1,&quot;u&quot;:&quot;L&quot;}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 194\" role=\"img\" aria-label=\"Jadual L dan T dengan lajur T ÷ L bagi model T ∝ L; nilai tidak malar\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Uji model T ∝ L</text><text x=\"40\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">L</text><text x=\"110\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">T</text><text x=\"196\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">T ÷ L</text><line x1=\"8\" y1=\"49\" x2=\"252\" y2=\"49\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><text x=\"40\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">16</text><text x=\"110\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">0.8</text><text class=\"jmi-hasil\" x=\"196\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">0.05</text><text x=\"40\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">25</text><text x=\"110\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">1</text><text class=\"jmi-hasil\" x=\"196\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">0.04</text><text x=\"40\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">36</text><text x=\"110\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">1.2</text><text class=\"jmi-hasil\" x=\"196\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">0.033</text><text x=\"40\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">49</text><text x=\"110\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">1.4</text><text class=\"jmi-hasil\" x=\"196\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">0.029</text><text x=\"40\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">64</text><text x=\"110\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">1.6</text><text class=\"jmi-hasil\" x=\"196\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">0.025</text><text class=\"jmi-hasil\" x=\"8\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Tidak malar: model tidak sesuai</text></svg></div><figcaption>Rajah 1 · Panjang bandul L (cm) dan tempoh ayunan T (s) daripada satu eksperimen. Uji setiap model.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Kedai Beras",
   "sk": "1.1.1 / 1.1.2 Maksud ubahan langsung",
   "lampiran": "r1",
   "kadNama": "Ubahan Langsung",
   "kadEm": "🌾",
   "kadFakta": "y ∝ x bermaksud y = kx. Apabila x digandakan, y turut digandakan, dan graf y lawan x ialah garis lurus melalui asalan.",
   "bosKadNama": "Pemalar k",
   "bosKadEm": "🔑",
   "bosKadFakta": "Pemalar ubahan k = y ÷ x. Cari k dengan satu pasangan nilai yang diketahui, kemudian gunakan k untuk meramal nilai lain.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Pernyataan H ∝ m dibaca sebagai:",
     "p": [
      "H berubah secara langsung dengan m",
      "H berubah secara songsang dengan m",
      "H sama dengan m",
      "H bertambah satu apabila m bertambah satu"
     ],
     "b": 0,
     "u": "Simbol ∝ bermaksud 'berubah secara langsung dengan'. H ∝ m boleh ditulis sebagai H = km."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gerakkan m kepada 5 kg. Berapakah harga H, dalam RM?",
     "tol": 0.001000000001,
     "b": 16,
     "u": "H = 3.2 × 5 = RM16. Setiap kilogram berharga RM3.20."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah nilai pemalar ubahan k bagi H = km?",
     "tol": 0.01000000001,
     "b": 3.2,
     "u": "k = H ÷ m. Contohnya, apabila m = 2, H = 6.40, jadi k = 6.40 ÷ 2 = 3.2."
    },
    {
     "j": "pilih",
     "t": "Graf H lawan m dalam Rajah 1 ialah:",
     "p": [
      "Garis lurus yang tidak melalui asalan",
      "Garis lurus yang melalui asalan",
      "Lengkung yang menurun",
      "Garis mengufuk"
     ],
     "b": 1,
     "u": "Bagi ubahan langsung H = km, apabila m = 0, H = 0. Graf ialah garis lurus melalui asalan dengan kecerunan k."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, jika jisim beras digandakan dua kali, harganya akan:",
     "p": [
      "Berkurang separuh",
      "Bertambah RM2",
      "Digandakan dua kali",
      "Kekal sama"
     ],
     "b": 2,
     "u": "H = 3.2m. Jika m menjadi 2m, H menjadi 3.2(2m) = 2 × 3.2m. Contoh: 4 kg berharga RM12.80, iaitu dua kali harga 2 kg (RM6.40)."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah jisim beras, dalam kg, yang berharga RM28.80?",
     "tol": 0.001000000001,
     "b": 9,
     "u": "m = H ÷ k = 28.80 ÷ 3.2 = 9 kg."
    },
    {
     "j": "pilih",
     "t": "Antara situasi berikut, yang manakah ialah ubahan langsung?",
     "p": [
      "Masa perjalanan dan laju kenderaan bagi jarak yang tetap",
      "Umur seorang kanak-kanak dan tinggi badannya",
      "Bilangan pekerja dan masa menyiapkan satu kerja",
      "Upah pekerja dan bilangan jam bekerja pada kadar tetap"
     ],
     "b": 3,
     "u": "Upah = kadar × jam, jadi upah ∝ jam. Masa dan laju serta pekerja dan masa ialah ubahan songsang. Tinggi badan tidak bertambah pada kadar tetap mengikut umur."
    },
    {
     "j": "pilih",
     "t": "Persamaan bagi 'y berubah secara langsung dengan x' ialah:",
     "p": [
      "y = kx",
      "y = k/x",
      "y = x + k",
      "y = kx + 1"
     ],
     "b": 0,
     "u": "Ubahan langsung: y ∝ x, jadi y = kx dengan k pemalar. Tiada sebutan tambahan kerana graf melalui asalan."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Harga 3 kg beras ialah RM9.60 dan H ∝ m. Berapakah harga 7.5 kg beras, dalam RM?",
    "tol": 0.001000000001,
    "b": 24,
    "u": "Langkah 1: k = 9.60 ÷ 3 = 3.2. Langkah 2: H = 3.2 × 7.5 = RM24."
   }
  },
  {
   "n": 2,
   "tempat": "Makmal Kuasa",
   "sk": "1.1.2 / 1.1.3 y ∝ xⁿ, pemalar dan kecerunan; ubahan tercantum",
   "lampiran": "r2",
   "kadNama": "Garis Tersembunyi",
   "kadEm": "📈",
   "kadFakta": "Jika y ∝ xⁿ, graf y lawan xⁿ ialah garis lurus melalui asalan, dan kecerunannya ialah pemalar k.",
   "bosKadNama": "Ubahan Tercantum",
   "bosKadEm": "🔗",
   "bosKadFakta": "Ubahan tercantum: satu pemboleh ubah berubah secara langsung dengan hasil darab dua atau lebih pemboleh ubah, contohnya V ∝ j²t.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih y ∝ x² dan gerakkan x kepada 3. Berapakah nilai y?",
     "tol": 0.001000000001,
     "b": 18,
     "u": "y = 2x² = 2 × 3² = 2 × 9 = 18."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih y ∝ x³ dan gerakkan x kepada 2. Berapakah nilai y?",
     "tol": 0.001000000001,
     "b": 16,
     "u": "y = 2x³ = 2 × 2³ = 2 × 8 = 16."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih y ∝ √x dan gerakkan x kepada 9. Berapakah nilai y?",
     "tol": 0.001000000001,
     "b": 6,
     "u": "y = 2√x = 2 × √9 = 2 × 3 = 6."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih y ∝ x² dan paparan y lawan xⁿ. Kecerunan garis lurus itu sama dengan:",
     "p": [
      "Kuasa n",
      "Pemalar ubahan k",
      "Nilai x terbesar",
      "Pintasan-y graf"
     ],
     "b": 1,
     "u": "Graf y lawan x² bagi y = 2x² ialah garis lurus melalui asalan. Kecerunannya = y ÷ x² = k = 2."
    },
    {
     "j": "pilih",
     "t": "Jika y ∝ x² dan x digandakan dua kali, y menjadi:",
     "p": [
      "Dua kali nilai asal",
      "Lapan kali nilai asal",
      "Empat kali nilai asal",
      "Separuh nilai asal"
     ],
     "b": 2,
     "u": "y = k(2x)² = 4kx². Semak dalam Rajah 1: x = 2 memberi y = 8, x = 4 memberi y = 32, iaitu empat kali."
    },
    {
     "j": "pilih",
     "t": "Diberi y ∝ x³, dan y = 40 apabila x = 2. Persamaan yang menghubungkan y dan x ialah:",
     "p": [
      "y = 20x³",
      "y = 40x³",
      "y = 10x³",
      "y = 5x³"
     ],
     "b": 3,
     "u": "y = kx³, jadi 40 = k × 2³ = 8k. Maka k = 40 ÷ 8 = 5 dan y = 5x³."
    },
    {
     "j": "pilih",
     "t": "Ubahan tercantum bermaksud satu pemboleh ubah:",
     "p": [
      "Berubah secara langsung dengan hasil darab dua atau lebih pemboleh ubah",
      "Berubah secara songsang dengan hasil tambah dua pemboleh ubah",
      "Bertambah dengan nilai yang sama seperti pemboleh ubah lain",
      "Kekal malar apabila pemboleh ubah lain berubah"
     ],
     "b": 0,
     "u": "Contoh ubahan tercantum: P ∝ QR, iaitu P = kQR. P berubah secara langsung dengan hasil darab Q dan R."
    },
    {
     "j": "nombor",
     "t": "Diberi P ∝ QR, dan P = 24 apabila Q = 2 dan R = 3. Hitung P apabila Q = 5 dan R = 4.",
     "tol": 0.001000000001,
     "b": 80,
     "u": "Langkah 1: 24 = k × 2 × 3, jadi k = 4. Langkah 2: P = 4 × 5 × 4 = 80."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Isi padu silinder V berubah secara langsung dengan j² dan t (V ∝ j²t). Jika jejari j digandakan dan tinggi t dikurangkan separuh, isi padu yang baharu ialah:",
    "p": [
     "Sama dengan isi padu asal",
     "Dua kali isi padu asal",
     "Empat kali isi padu asal",
     "Separuh isi padu asal"
    ],
    "b": 1,
    "u": "V baharu = k(2j)²(½t) = k × 4j² × ½t = 2kj²t. Isi padu menjadi dua kali."
   }
  },
  {
   "n": 3,
   "tempat": "Lebuh Raya",
   "sk": "1.2.1 / 1.2.2 Ubahan songsang",
   "lampiran": "r3",
   "kadNama": "Ubahan Songsang",
   "kadEm": "🚗",
   "kadFakta": "y ∝ 1/x bermaksud y = k/x, iaitu xy = k. Apabila x digandakan, y menjadi separuh.",
   "bosKadNama": "Punca Songsang",
   "bosKadEm": "🧊",
   "bosKadFakta": "Bagi y ∝ 1/∛x, y = k/∛x. Cari k dahulu, kemudian selesaikan untuk ∛x dan kuasa tigakan.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gerakkan v kepada 60 km/j. Berapakah masa t, dalam jam?",
     "tol": 0.001000000001,
     "b": 2,
     "u": "t = 120 ÷ v = 120 ÷ 60 = 2 jam."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah masa t, dalam jam, apabila v = 80 km/j?",
     "tol": 0.01000000001,
     "b": 1.5,
     "u": "t = 120 ÷ 80 = 1.5 jam, iaitu 1 jam 30 minit."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, apabila laju v bertambah, masa t:",
     "p": [
      "Bertambah",
      "Kekal sama",
      "Berkurang",
      "Bertambah kemudian berkurang"
     ],
     "b": 2,
     "u": "t = 120/v. Pembahagi yang lebih besar memberi hasil bahagi yang lebih kecil, jadi lengkung dalam Rajah 1 menurun."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih paparan t lawan 1/v. Graf itu ialah:",
     "p": [
      "Lengkung yang menurun",
      "Garis mengufuk pada t = 120",
      "Garis lurus dengan kecerunan negatif",
      "Garis lurus melalui asalan dengan kecerunan 120"
     ],
     "b": 3,
     "u": "t = 120 × (1/v). Jika 1/v dijadikan paksi mengufuk, graf ialah garis lurus melalui asalan dengan kecerunan k = 120."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, hitung hasil darab t × v bagi sebarang titik pada graf.",
     "tol": 0.001000000001,
     "b": 120,
     "u": "Bagi ubahan songsang t = k/v, hasil darab tv = k = 120, iaitu jarak perjalanan dalam km."
    },
    {
     "j": "pilih",
     "t": "Persamaan bagi 'y berubah secara songsang dengan punca kuasa dua x' ialah:",
     "p": [
      "y = k/√x",
      "y = k√x",
      "y = kx²",
      "y = k/x²"
     ],
     "b": 0,
     "u": "Songsang bermaksud pemboleh ubah berada pada penyebut. Punca kuasa dua x ialah √x, jadi y = k/√x."
    },
    {
     "j": "nombor",
     "t": "Diberi y ∝ 1/x², dan y = 5 apabila x = 2. Hitung y apabila x = 5.",
     "tol": 0.01000000001,
     "b": 0.8,
     "u": "Langkah 1: 5 = k ÷ 2², jadi k = 20. Langkah 2: y = 20 ÷ 5² = 20 ÷ 25 = 0.8."
    },
    {
     "j": "pilih",
     "t": "Jika y ∝ 1/x dan x digandakan tiga kali, y menjadi:",
     "p": [
      "Tiga kali nilai asal",
      "Satu pertiga daripada nilai asal",
      "Sembilan kali nilai asal",
      "Sama dengan nilai asal"
     ],
     "b": 1,
     "u": "y = k/(3x) = ⅓ × k/x. Contoh dalam Rajah 1: v = 40 memberi t = 3, v = 120 memberi t = 1."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Diberi m berubah secara songsang dengan punca kuasa tiga n, dan m = 6 apabila n = 8. Hitung nilai n apabila m = 4.",
    "tol": 0.001000000001,
    "b": 27,
    "u": "Langkah 1: m = k/∛n, jadi 6 = k ÷ ∛8 = k ÷ 2 dan k = 12. Langkah 2: 4 = 12 ÷ ∛n, jadi ∛n = 3. Langkah 3: n = 3³ = 27."
   }
  },
  {
   "n": 4,
   "tempat": "Jalan Selamat",
   "sk": "1.1.4 / 1.2.3 Masalah ubahan langsung dan songsang",
   "lampiran": "r4",
   "kadNama": "Jarak Brek",
   "kadEm": "🛑",
   "kadFakta": "Jarak brek berubah secara langsung dengan kuasa dua laju. Laju dua kali ganda memerlukan jarak brek empat kali ganda.",
   "bosKadNama": "Had Laju",
   "bosKadEm": "🚦",
   "bosKadFakta": "Untuk mencari x daripada y = kx², bahagikan dengan k dahulu, kemudian ambil punca kuasa dua.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gerakkan v kepada 60 km/j. Berapakah jarak brek d, dalam meter?",
     "tol": 0.01000000001,
     "b": 21.6,
     "u": "d = 0.006 × 60² = 0.006 × 3600 = 21.6 m."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, apabila laju bertambah daripada 40 km/j kepada 80 km/j, jarak brek:",
     "p": [
      "Menjadi dua kali ganda",
      "Bertambah sebanyak 40 m",
      "Didarab 4",
      "Bertambah sebanyak 4 m"
     ],
     "b": 2,
     "u": "d ∝ v². Laju didarab 2, jadi d didarab 2² = 4: 9.6 m menjadi 38.4 m."
    },
    {
     "j": "nombor",
     "t": "Jarak brek sebuah kereta ialah 15 m. Berdasarkan Rajah 1, berapakah laju kereta itu, dalam km/j?",
     "tol": 0.001000000001,
     "b": 50,
     "u": "15 = 0.006v², jadi v² = 15 ÷ 0.006 = 2500. Maka v = √2500 = 50 km/j."
    },
    {
     "j": "pilih",
     "t": "Seorang pemandu berkata, 'Memandu 20 km/j lebih laju hanya menambah sedikit jarak brek.' Berdasarkan Rajah 1, mengapakah dakwaan ini kurang tepat pada laju tinggi?",
     "p": [
      "Tambahan d tetap sama kerana d ∝ v",
      "Jarak brek berkurang apabila laju bertambah",
      "Jarak brek bergantung pada jisim kereta, bukan laju",
      "Tambahan d semakin besar apabila v semakin tinggi kerana d ∝ v²"
     ],
     "b": 3,
     "u": "Daripada 20 ke 40 km/j, d bertambah 7.2 m. Daripada 100 ke 120 km/j, d bertambah 26.4 m. Lengkung d lawan v semakin curam."
    },
    {
     "j": "nombor",
     "t": "8 orang pekerja dapat menyiapkan sebuah rumah dalam 15 hari. Masa berubah secara songsang dengan bilangan pekerja. Berapa harikah yang diperlukan oleh 12 orang pekerja?",
     "tol": 0.001000000001,
     "b": 10,
     "u": "Masa × pekerja = k = 15 × 8 = 120. Masa = 120 ÷ 12 = 10 hari."
    },
    {
     "j": "nombor",
     "t": "Upah U (RM) berubah secara langsung dengan bilangan jam bekerja j. Upah bagi 6 jam ialah RM57. Hitung upah, dalam RM, bagi 14 jam.",
     "tol": 0.001000000001,
     "b": 133,
     "u": "k = 57 ÷ 6 = 9.5. U = 9.5 × 14 = RM133."
    },
    {
     "j": "nombor",
     "t": "Bekalan makanan cukup untuk 30 orang selama 12 hari. Jika 6 orang lagi menyertai kumpulan itu, berapa harikah bekalan itu akan cukup?",
     "tol": 0.001000000001,
     "b": 10,
     "u": "Bilangan hari berubah secara songsang dengan bilangan orang. k = 30 × 12 = 360. Hari = 360 ÷ 36 = 10."
    },
    {
     "j": "pilih",
     "t": "Tekanan gas P berubah secara songsang dengan isi padunya V. Jika isi padu dikurangkan menjadi ¼ daripada asal, tekanan:",
     "p": [
      "Didarab 4",
      "Berkurang menjadi ¼ daripada asal",
      "Bertambah sebanyak 4 unit",
      "Kekal seperti asal"
     ],
     "b": 0,
     "u": "P = k/V. Jika V menjadi ¼V, P = k ÷ ¼V = 4k/V, iaitu empat kali ganda."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Berdasarkan Rajah 1, sebuah kereta mesti dapat berhenti dalam jarak 40 m. Berapakah laju maksimumnya, dalam km/j? Berikan jawapan betul kepada satu tempat perpuluhan.",
    "tol": 0.05000000005,
    "b": 81.6,
    "u": "40 = 0.006v², jadi v² = 40 ÷ 0.006 = 6666.67. Maka v = √6666.67 = 81.6 km/j."
   }
  },
  {
   "n": 5,
   "tempat": "Bengkel Cat",
   "sk": "1.3.1 / 1.3.2 Ubahan bergabung",
   "lampiran": "r5",
   "kadNama": "Ubahan Bergabung",
   "kadEm": "🖌️",
   "kadFakta": "Ubahan bergabung menggabungkan ubahan langsung dan songsang, contohnya T ∝ A/P: T = kA/P.",
   "bosKadNama": "Kos Cetakan",
   "bosKadEm": "🖨️",
   "bosKadFakta": "Bagi masalah bergabung, cari k dengan set nilai pertama, kemudian gantikan set nilai kedua ke dalam persamaan yang sama.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan A = 60 m² dan P = 3 orang. Berapakah masa T, dalam jam? Kira dahulu, kemudian semak.",
     "tol": 0.001000000001,
     "b": 3,
     "u": "T = 0.15 × 60 ÷ 3 = 9 ÷ 3 = 3 jam."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, hitung T, dalam jam, apabila A = 120 m² dan P = 4 orang.",
     "tol": 0.01000000001,
     "b": 4.5,
     "u": "T = 0.15 × 120 ÷ 4 = 18 ÷ 4 = 4.5 jam."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, jika luas A digandakan dan bilangan pekerja P juga digandakan, masa T:",
     "p": [
      "Menjadi dua kali ganda",
      "Tidak berubah",
      "Menjadi empat kali ganda",
      "Berkurang menjadi separuh"
     ],
     "b": 1,
     "u": "T = k(2A)/(2P) = kA/P. Kesan menggandakan A dibatalkan oleh kesan menggandakan P. Semak: A = 40, P = 2 dan A = 80, P = 4 memberi T = 3."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapa orang pekerja diperlukan untuk mengecat dinding seluas 100 m² dalam masa 2.5 jam?",
     "tol": 0.001000000001,
     "b": 6,
     "u": "2.5 = 0.15 × 100 ÷ P, jadi P = 15 ÷ 2.5 = 6 orang."
    },
    {
     "j": "pilih",
     "t": "Diberi y berubah secara langsung dengan x dan secara songsang dengan z². Hubungan yang betul ialah:",
     "p": [
      "y = kxz²",
      "y = kz²/x",
      "y = kx/z²",
      "y = k/(xz²)"
     ],
     "b": 2,
     "u": "Langsung dengan x: x pada pengangka. Songsang dengan z²: z² pada penyebut. Maka y = kx/z²."
    },
    {
     "j": "nombor",
     "t": "Diberi y ∝ x/z², dan y = 12 apabila x = 6 dan z = 2. Hitung y apabila x = 15 dan z = 5.",
     "tol": 0.01000000001,
     "b": 4.8,
     "u": "Langkah 1: 12 = k × 6 ÷ 2², jadi 12 = 1.5k dan k = 8. Langkah 2: y = 8 × 15 ÷ 5² = 120 ÷ 25 = 4.8."
    },
    {
     "j": "nombor",
     "t": "Diberi F ∝ m/j², dan F = 20 apabila m = 5 dan j = 2. Hitung j apabila F = 5 dan m = 20, dengan keadaan j ialah nombor positif.",
     "tol": 0.001000000001,
     "b": 8,
     "u": "Langkah 1: 20 = k × 5 ÷ 4, jadi k = 16. Langkah 2: 5 = 16 × 20 ÷ j², jadi j² = 320 ÷ 5 = 64. Maka j = 8."
    },
    {
     "j": "pilih",
     "t": "Diberi w ∝ x²/y. Jika x digandakan dan y didarab tiga, w menjadi:",
     "p": [
      "2/3 daripada nilai asal",
      "6 kali nilai asal",
      "12 kali nilai asal",
      "4/3 daripada nilai asal"
     ],
     "b": 3,
     "u": "w baharu = k(2x)² ÷ (3y) = 4kx² ÷ 3y = (4/3) × kx²/y."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Kos K (RM) mencetak buku berubah secara langsung dengan bilangan muka surat m dan bilangan naskhah n, dan secara songsang dengan bilangan mesin c yang digunakan. Kos ialah RM1 200 apabila m = 100, n = 200 dan c = 2. Hitung kos, dalam RM, apabila m = 150, n = 400 dan c = 3.",
    "tol": 0.001000000001,
    "b": 2400,
    "u": "Langkah 1: K = kmn/c, jadi 1200 = k × 100 × 200 ÷ 2 = 10 000k dan k = 0.12. Langkah 2: K = 0.12 × 150 × 400 ÷ 3 = RM2 400."
   }
  },
  {
   "n": 6,
   "tempat": "Makmal Bandul",
   "sk": "1.1–1.3 Masalah ubahan bukan rutin",
   "lampiran": "r6",
   "kadNama": "Penguji Model",
   "kadEm": "🔬",
   "kadFakta": "Untuk menguji y ∝ xⁿ, kira y ÷ xⁿ bagi setiap pasangan data. Jika hasilnya malar, model itu sesuai dan nilai malar itu ialah k.",
   "bosKadNama": "Pereka Model",
   "bosKadEm": "💡",
   "bosKadFakta": "Model ubahan mempunyai had. Ia hanya tepat dalam julat data yang digunakan untuk membinanya.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, uji setiap model. Model manakah memberi lajur ketiga yang malar?",
     "p": [
      "T ∝ √L",
      "T ∝ L",
      "T ∝ L²",
      "T ∝ 1/L"
     ],
     "b": 0,
     "u": "T ÷ √L = 0.8 ÷ 4 = 1.0 ÷ 5 = 1.2 ÷ 6 = 0.2 bagi setiap baris. Model lain memberi nilai yang berubah-ubah."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah nilai pemalar k bagi model yang sesuai?",
     "tol": 0.01000000001,
     "b": 0.2,
     "u": "k = T ÷ √L = 0.8 ÷ √16 = 0.8 ÷ 4 = 0.2."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan model dalam Rajah 1, hitung tempoh T, dalam saat, bagi bandul yang panjangnya 100 cm.",
     "tol": 0.001000000001,
     "b": 2,
     "u": "T = 0.2√L = 0.2 × √100 = 0.2 × 10 = 2 s."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan model dalam Rajah 1, berapakah panjang bandul, dalam cm, yang tempohnya 3 saat?",
     "tol": 0.001000000001,
     "b": 225,
     "u": "3 = 0.2√L, jadi √L = 15. Maka L = 15² = 225 cm."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan model dalam Rajah 1, untuk menggandakan tempoh ayunan sebuah bandul, panjangnya perlu:",
     "p": [
      "Didarab 2",
      "Didarab 4",
      "Ditambah 2 cm",
      "Dibahagi 2"
     ],
     "b": 1,
     "u": "T ∝ √L. Supaya √L menjadi dua kali, L mesti menjadi 2² = 4 kali. Contoh: L = 16 memberi T = 0.8, L = 64 memberi T = 1.6."
    },
    {
     "j": "pilih",
     "t": "Seorang murid mengira T ÷ L bagi data Rajah 1 dan mendapat 0.05, 0.04, 0.033 dan seterusnya. Apakah kesimpulan yang betul?",
     "p": [
      "T berubah secara langsung dengan L",
      "T berubah secara songsang dengan L",
      "T tidak berubah secara langsung dengan L",
      "Data itu salah dan perlu dibuang"
     ],
     "b": 2,
     "u": "Jika T ∝ L, nilai T ÷ L mesti malar. Nilainya berubah, jadi model T ∝ L ditolak. Ini tidak bermaksud T ∝ 1/L; uji model itu secara berasingan."
    },
    {
     "j": "nombor",
     "t": "Bagi data x = 2, 4, 5 dan y = 50, 12.5, 8, diberi y berubah secara songsang dengan xⁿ. Cari nilai n.",
     "tol": 0.001000000001,
     "b": 2,
     "u": "Uji n = 2: y × x² = 50 × 4 = 200, 12.5 × 16 = 200, 8 × 25 = 200. Hasil darab malar, jadi n = 2 dan y = 200/x²."
    },
    {
     "j": "pilih",
     "t": "Diberi y ∝ xⁿ. Apabila x didarab 3, y menjadi 27 kali nilai asal. Nilai n ialah:",
     "p": [
      "9",
      "1/3",
      "27",
      "3"
     ],
     "b": 3,
     "u": "y baharu ÷ y asal = 3ⁿ = 27 = 3³, jadi n = 3."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu masalah ubahan bergabung daripada kehidupan sebenar dan selesaikannya.",
    "arahan": "Pilih satu situasi, contohnya kos membina pagar bergantung pada panjang pagar dan bilangan pekerja, atau masa memasak bergantung pada jisim makanan dan kuasa ketuhar. Tulis hubungan ubahan dengan simbol ∝ dan terangkan mengapa setiap pemboleh ubah berubah secara langsung atau songsang. Cari pemalar k daripada satu set data yang munasabah, kemudian gunakan persamaan itu untuk membuat satu ramalan. Nyatakan satu keadaan apabila model awak tidak lagi tepat.",
    "u": "Jawapan TP6 yang kukuh mempunyai situasi yang munasabah, hubungan ubahan yang ditulis dengan betul beserta alasan bagi setiap pemboleh ubah, pengiraan k yang tepat, ramalan yang dikira dengan langkah yang jelas, dan kesedaran tentang had model."
   }
  }
 ]
};
