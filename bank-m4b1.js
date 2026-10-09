/* Bank soalan — Matematik Ting. 4 · Bab 1 Fungsi dan Persamaan Kuadratik dalam Satu Pemboleh Ubah.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m4b1.js
   kemudian jalankan: node bina.js m4b1

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 4, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m4b1"] =
{
 "id": "m4b1",
 "tingkatan": 4,
 "kod": "1.0 Fungsi dan Persamaan Kuadratik",
 "tajuk": "Taman Parabola",
 "subtajuk": "Matematik Ting. 4 · Bab 1 Fungsi dan Persamaan Kuadratik dalam Satu Pemboleh Ubah",
 "spi": [
  "Mempamerkan pengetahuan asas tentang ungkapan, fungsi dan persamaan kuadratik dalam satu pemboleh ubah.",
  "Mempamerkan kefahaman tentang ungkapan, fungsi dan persamaan kuadratik dalam satu pemboleh ubah.",
  "Mengaplikasikan kefahaman tentang fungsi dan persamaan kuadratik dalam satu pemboleh ubah untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang fungsi dan persamaan kuadratik dalam satu pemboleh ubah dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang fungsi dan persamaan kuadratik dalam satu pemboleh ubah dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang fungsi dan persamaan kuadratik dalam satu pemboleh ubah dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat mengenal pasti ungkapan kuadratik dalam satu pemboleh ubah serta nilai a, b dan c, dan mengetahui bentuk graf ∪ atau ∩. Langkah seterusnya ialah memahami ciri-ciri fungsi kuadratik dan kesan perubahan nilai a, b dan c.",
  "2": "{n} memahami fungsi kuadratik sebagai hubungan banyak kepada satu, dan dapat menerangkan kesan perubahan a, b dan c ke atas graf. Perlu lebih latihan mencari punca dengan kaedah pemfaktoran.",
  "3": "{n} boleh menentukan punca persamaan kuadratik dengan kaedah pemfaktoran dan mengaitkannya dengan titik persilangan graf pada paksi-x. Sudah bersedia membentuk fungsi kuadratik daripada situasi.",
  "4": "{n} mampu membentuk fungsi kuadratik daripada situasi mudah, menyelesaikannya, dan menolak punca yang tidak munasabah. Seterusnya, latih masalah yang memerlukan lakaran graf dan titik maksimum atau minimum.",
  "5": "{n} dapat melakar graf fungsi kuadratik dan menyelesaikan masalah rutin yang kompleks seperti untung maksimum dan bingkai gambar. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya mereka situasi sebenar yang dimodelkan oleh fungsi kuadratik, mentafsir titik maksimum dan punca dengan bermakna, serta menilai kemunasabahan jawapan. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Fungsi dan Persamaan Kuadratik. Cadangan: ulang hentian pertama menggunakan Rajah 1 dan kenal pasti nilai a, b dan c bersama rakan sebaya."
 },
 "lampiran": {
  "graf": "<figure class=\"figure jmi\" data-w=\"t4kuad\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4kuad&quot;,&quot;mod&quot;:&quot;graf&quot;,&quot;aSet&quot;:[-2,-1,1,2],&quot;bSet&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;cSet&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;awal&quot;:{&quot;a&quot;:2,&quot;b&quot;:4,&quot;c&quot;:4},&quot;kapsyen&quot;:&quot;Rajah 1 · Graf f(x) = ax² + bx + c. Pilih nilai a, kemudian gerakkan b dan c.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf fungsi kuadratik; cip memilih a dan gelongsor menukar b serta c, menunjukkan bentuk graf, titik pusingan, paksi simetri dan punca&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 268\" role=\"img\" aria-label=\"Rajah graf fungsi kuadratik f(x) = x² berbentuk minimum, pintasan-y 0\"><text x=\"95.5\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">f(x) = x</text><text x=\"157.9\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><rect x=\"40\" y=\"34\" width=\"206\" height=\"136\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"40\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−6</text><line x1=\"74.3\" y1=\"34\" x2=\"74.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"74.3\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><line x1=\"108.7\" y1=\"34\" x2=\"108.7\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"108.7\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><line x1=\"143\" y1=\"34\" x2=\"143\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"143\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"177.3\" y1=\"34\" x2=\"177.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"177.3\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"211.7\" y1=\"34\" x2=\"211.7\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"211.7\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"246\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"40\" y1=\"136\" x2=\"246\" y2=\"136\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−5</text><line x1=\"40\" y1=\"102\" x2=\"246\" y2=\"102\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"106\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"68\" x2=\"246\" y2=\"68\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"72\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"36\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"40\" y1=\"102\" x2=\"246\" y2=\"102\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"143\" y1=\"34\" x2=\"143\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><g class=\"jmi-hasil\"><line x1=\"143\" y1=\"34\" x2=\"143\" y2=\"170\" stroke=\"var(--amber)\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"></line></g><path d=\"M88.9 34.5 L89.8 36.7 L90.6 38.7 L91.5 40.8 L92.4 42.8 L93.2 44.8 L94.1 46.8 L94.9 48.7 L95.8 50.6 L96.6 52.4 L97.5 54.2 L98.4 56 L99.2 57.8 L100.1 59.5 L100.9 61.2 L101.8 62.8 L102.7 64.4 L103.5 66 L104.4 67.6 L105.2 69.1 L106.1 70.6 L107 72 L107.8 73.4 L108.7 74.8 L109.5 76.1 L110.4 77.5 L111.2 78.7 L112.1 80 L113 81.2 L113.8 82.3 L114.7 83.5 L115.5 84.6 L116.4 85.7 L117.3 86.7 L118.1 87.7 L119 88.7 L119.8 89.6 L120.7 90.5 L121.5 91.4 L122.4 92.2 L123.3 93 L124.1 93.8 L125 94.5 L125.8 95.2 L126.7 95.9 L127.6 96.5 L128.4 97.1 L129.3 97.6 L130.1 98.2 L131 98.7 L131.8 99.1 L132.7 99.6 L133.6 99.9 L134.4 100.3 L135.3 100.6 L136.1 100.9 L137 101.2 L137.9 101.4 L138.7 101.6 L139.6 101.7 L140.4 101.8 L141.3 101.9 L142.1 102 L143 102 L143.9 102 L144.7 101.9 L145.6 101.8 L146.4 101.7 L147.3 101.6 L148.2 101.4 L149 101.2 L149.9 100.9 L150.7 100.6 L151.6 100.3 L152.4 99.9 L153.3 99.6 L154.2 99.1 L155 98.7 L155.9 98.2 L156.7 97.6 L157.6 97.1 L158.5 96.5 L159.3 95.9 L160.2 95.2 L161 94.5 L161.9 93.8 L162.7 93 L163.6 92.2 L164.5 91.4 L165.3 90.5 L166.2 89.6 L167 88.7 L167.9 87.7 L168.8 86.7 L169.6 85.7 L170.5 84.6 L171.3 83.5 L172.2 82.3 L173 81.2 L173.9 80 L174.8 78.7 L175.6 77.5 L176.5 76.1 L177.3 74.8 L178.2 73.4 L179 72 L179.9 70.6 L180.8 69.1 L181.6 67.6 L182.5 66 L183.3 64.4 L184.2 62.8 L185.1 61.2 L185.9 59.5 L186.8 57.8 L187.6 56 L188.5 54.2 L189.4 52.4 L190.2 50.6 L191.1 48.7 L191.9 46.8 L192.8 44.8 L193.6 42.8 L194.5 40.8 L195.4 38.7 L196.2 36.7 L197.1 34.5\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><circle cx=\"143\" cy=\"102\" r=\"4\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"143\" cy=\"102\" r=\"4.5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"143\" cy=\"102\" r=\"5\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Graf berbentuk ∪ (a &gt; 0)</text><text class=\"jmi-hasil\" x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Titik minimum: (0, 0)</text><text class=\"jmi-hasil\" x=\"8\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Paksi simetri: x = 0</text><text class=\"jmi-hasil\" x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\">Punca: x = 0</text></svg></div><figcaption>Rajah 1 · Graf f(x) = ax² + bx + c. Pilih nilai a, kemudian gerakkan b dan c.</figcaption></figure>",
  "cancang": "<figure class=\"figure jmi\" data-w=\"t4kuad\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4kuad&quot;,&quot;mod&quot;:&quot;cancang&quot;,&quot;a&quot;:1,&quot;b&quot;:-2,&quot;c&quot;:-3,&quot;x0&quot;:-3,&quot;x1&quot;:5,&quot;y0&quot;:-6,&quot;y1&quot;:10,&quot;xSet&quot;:[-2,-1,0,1,2,3,4],&quot;kSet&quot;:[-6,-4,-3,0,5],&quot;kapsyen&quot;:&quot;Rajah 1 · Graf f(x) = x² − 2x − 3. Gerakkan garis mencancang dan garis mengufuk.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf f(x) = x kuasa dua tolak 2x tolak 3 dengan garis mencancang dan garis mengufuk yang boleh digerakkan untuk mengira titik persilangan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 268\" role=\"img\" aria-label=\"Rajah ujian garis mencancang pada graf f(x) = x² − 2x − 3; garis x = 1 dan garis y = −3\"><text x=\"60.4\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">f(x) = x</text><text x=\"122.8\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><text x=\"129.4\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\"> − 2x − 3</text><rect x=\"40\" y=\"34\" width=\"206\" height=\"136\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><line x1=\"65.8\" y1=\"34\" x2=\"65.8\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"65.8\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><line x1=\"117.3\" y1=\"34\" x2=\"117.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"117.3\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"168.8\" y1=\"34\" x2=\"168.8\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"168.8\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"220.3\" y1=\"34\" x2=\"220.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"220.3\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><line x1=\"40\" y1=\"161.5\" x2=\"246\" y2=\"161.5\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"165.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−5</text><line x1=\"40\" y1=\"119\" x2=\"246\" y2=\"119\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"123\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"76.5\" x2=\"246\" y2=\"76.5\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"80.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"36\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"40\" y1=\"119\" x2=\"246\" y2=\"119\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"117.3\" y1=\"34\" x2=\"117.3\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><path d=\"M46.9 34.5 L47.7 36.6 L48.6 38.7 L49.4 40.8 L50.3 42.8 L51.2 44.9 L52 46.9 L52.9 48.9 L53.7 50.8 L54.6 52.8 L55.5 54.7 L56.3 56.7 L57.2 58.6 L58 60.4 L58.9 62.3 L59.7 64.1 L60.6 66 L61.5 67.8 L62.3 69.5 L63.2 71.3 L64 73.1 L64.9 74.8 L65.8 76.5 L66.6 78.2 L67.5 79.9 L68.3 81.5 L69.2 83.1 L70 84.8 L70.9 86.4 L71.8 87.9 L72.6 89.5 L73.5 91 L74.3 92.6 L75.2 94.1 L76.1 95.5 L76.9 97 L77.8 98.4 L78.6 99.9 L79.5 101.3 L80.3 102.7 L81.2 104 L82.1 105.4 L82.9 106.7 L83.8 108 L84.6 109.3 L85.5 110.6 L86.4 111.9 L87.2 113.1 L88.1 114.3 L88.9 115.5 L89.8 116.7 L90.6 117.9 L91.5 119 L92.4 120.1 L93.2 121.2 L94.1 122.3 L94.9 123.4 L95.8 124.4 L96.7 125.5 L97.5 126.5 L98.4 127.5 L99.2 128.4 L100.1 129.4 L100.9 130.3 L101.8 131.2 L102.7 132.1 L103.5 133 L104.4 133.9 L105.2 134.7 L106.1 135.5 L107 136.3 L107.8 137.1 L108.7 137.9 L109.5 138.6 L110.4 139.4 L111.2 140.1 L112.1 140.8 L113 141.4 L113.8 142.1 L114.7 142.7 L115.5 143.3 L116.4 143.9 L117.3 144.5 L118.1 145.1 L119 145.6 L119.8 146.1 L120.7 146.6 L121.5 147.1 L122.4 147.6 L123.3 148 L124.1 148.4 L125 148.8 L125.8 149.2 L126.7 149.6 L127.6 149.9 L128.4 150.3 L129.3 150.6 L130.1 150.9 L131 151.1 L131.8 151.4 L132.7 151.6 L133.6 151.9 L134.4 152.1 L135.3 152.2 L136.1 152.4 L137 152.5 L137.9 152.7 L138.7 152.8 L139.6 152.8 L140.4 152.9 L141.3 153 L142.1 153 L143 153 L143.9 153 L144.7 153 L145.6 152.9 L146.4 152.8 L147.3 152.8 L148.2 152.7 L149 152.5 L149.9 152.4 L150.7 152.2 L151.6 152.1 L152.4 151.9 L153.3 151.6 L154.2 151.4 L155 151.1 L155.9 150.9 L156.7 150.6 L157.6 150.3 L158.5 149.9 L159.3 149.6 L160.2 149.2 L161 148.8 L161.9 148.4 L162.7 148 L163.6 147.6 L164.5 147.1 L165.3 146.6 L166.2 146.1 L167 145.6 L167.9 145.1 L168.8 144.5 L169.6 143.9 L170.5 143.3 L171.3 142.7 L172.2 142.1 L173 141.4 L173.9 140.8 L174.8 140.1 L175.6 139.4 L176.5 138.6 L177.3 137.9 L178.2 137.1 L179.1 136.3 L179.9 135.5 L180.8 134.7 L181.6 133.9 L182.5 133 L183.3 132.1 L184.2 131.2 L185.1 130.3 L185.9 129.4 L186.8 128.4 L187.6 127.5 L188.5 126.5 L189.4 125.5 L190.2 124.4 L191.1 123.4 L191.9 122.3 L192.8 121.2 L193.6 120.1 L194.5 119 L195.4 117.9 L196.2 116.7 L197.1 115.5 L197.9 114.3 L198.8 113.1 L199.7 111.9 L200.5 110.6 L201.4 109.3 L202.2 108 L203.1 106.7 L203.9 105.4 L204.8 104 L205.7 102.7 L206.5 101.3 L207.4 99.9 L208.2 98.4 L209.1 97 L210 95.5 L210.8 94.1 L211.7 92.6 L212.5 91 L213.4 89.5 L214.2 87.9 L215.1 86.4 L216 84.8 L216.8 83.1 L217.7 81.5 L218.5 79.9 L219.4 78.2 L220.3 76.5 L221.1 74.8 L222 73.1 L222.8 71.3 L223.7 69.5 L224.5 67.8 L225.4 66 L226.3 64.1 L227.1 62.3 L228 60.4 L228.8 58.6 L229.7 56.7 L230.6 54.7 L231.4 52.8 L232.3 50.8 L233.1 48.9 L234 46.9 L234.8 44.9 L235.7 42.8 L236.6 40.8 L237.4 38.7 L238.3 36.6 L239.1 34.5\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><line x1=\"143\" y1=\"34\" x2=\"143\" y2=\"170\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-dasharray=\"6 3\"></line><line x1=\"40\" y1=\"144.5\" x2=\"246\" y2=\"144.5\" stroke=\"var(--arteri)\" stroke-width=\"2\" stroke-dasharray=\"6 3\"></line><circle class=\"jmi-hasil\" cx=\"143\" cy=\"153\" r=\"5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"117.3\" cy=\"144.5\" r=\"5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"168.8\" cy=\"144.5\" r=\"5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text class=\"jmi-hasil\" x=\"8\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">x = 1 menyilang graf pada 1 titik</text><text class=\"jmi-hasil\" x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">f(1) = −4</text><text class=\"jmi-hasil\" x=\"8\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">y = −3 menyilang graf pada 2 titik</text><text class=\"jmi-hasil\" x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">2 nilai x → 1 nilai y: banyak-satu</text></svg></div><figcaption>Rajah 1 · Graf f(x) = x² − 2x − 3. Gerakkan garis mencancang dan garis mengufuk.</figcaption></figure>",
  "punca": "<figure class=\"figure jmi\" data-w=\"t4kuad\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4kuad&quot;,&quot;mod&quot;:&quot;punca&quot;,&quot;pMin&quot;:-5,&quot;pMaks&quot;:5,&quot;awal&quot;:{&quot;p&quot;:6,&quot;q&quot;:8},&quot;kapsyen&quot;:&quot;Rajah 1 · Graf f(x) = (x − p)(x − q). Gerakkan p dan q, perhatikan punca.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf f(x) = (x tolak p)(x tolak q); gelongsor p dan q, bentuk am dan punca ditunjukkan pada paksi-x&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 270\" role=\"img\" aria-label=\"Rajah graf f(x) = (x − 1)(x − 3) dengan punca pada paksi-x\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">f(x) = (x − 1)(x − 3)</text><rect x=\"40\" y=\"34\" width=\"206\" height=\"136\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"40\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−6</text><line x1=\"74.3\" y1=\"34\" x2=\"74.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"74.3\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><line x1=\"108.7\" y1=\"34\" x2=\"108.7\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"108.7\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><line x1=\"143\" y1=\"34\" x2=\"143\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"143\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"177.3\" y1=\"34\" x2=\"177.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"177.3\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"211.7\" y1=\"34\" x2=\"211.7\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"211.7\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"246\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"40\" y1=\"136\" x2=\"246\" y2=\"136\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−5</text><line x1=\"40\" y1=\"102\" x2=\"246\" y2=\"102\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"106\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"68\" x2=\"246\" y2=\"68\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"72\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"36\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"40\" y1=\"102\" x2=\"246\" y2=\"102\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"143\" y1=\"34\" x2=\"143\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><path d=\"M120.7 34.7 L121.5 37 L122.4 39.2 L123.3 41.3 L124.1 43.5 L125 45.5 L125.8 47.6 L126.7 49.6 L127.6 51.6 L128.4 53.6 L129.3 55.5 L130.1 57.4 L131 59.2 L131.8 61 L132.7 62.8 L133.6 64.6 L134.4 66.3 L135.3 68 L136.1 69.6 L137 71.2 L137.9 72.8 L138.7 74.4 L139.6 75.9 L140.4 77.4 L141.3 78.8 L142.1 80.2 L143 81.6 L143.9 82.9 L144.7 84.3 L145.6 85.5 L146.4 86.8 L147.3 88 L148.2 89.1 L149 90.3 L149.9 91.4 L150.7 92.5 L151.6 93.5 L152.4 94.5 L153.3 95.5 L154.2 96.4 L155 97.3 L155.9 98.2 L156.7 99 L157.6 99.8 L158.5 100.6 L159.3 101.3 L160.2 102 L161 102.7 L161.9 103.3 L162.7 103.9 L163.6 104.4 L164.5 105 L165.3 105.5 L166.2 105.9 L167 106.4 L167.9 106.7 L168.8 107.1 L169.6 107.4 L170.5 107.7 L171.3 108 L172.2 108.2 L173 108.4 L173.9 108.5 L174.8 108.6 L175.6 108.7 L176.5 108.8 L177.3 108.8 L178.2 108.8 L179 108.7 L179.9 108.6 L180.8 108.5 L181.6 108.4 L182.5 108.2 L183.3 108 L184.2 107.7 L185.1 107.4 L185.9 107.1 L186.8 106.7 L187.6 106.4 L188.5 105.9 L189.4 105.5 L190.2 105 L191.1 104.4 L191.9 103.9 L192.8 103.3 L193.6 102.7 L194.5 102 L195.4 101.3 L196.2 100.6 L197.1 99.8 L197.9 99 L198.8 98.2 L199.7 97.3 L200.5 96.4 L201.4 95.5 L202.2 94.5 L203.1 93.5 L203.9 92.5 L204.8 91.4 L205.7 90.3 L206.5 89.1 L207.4 88 L208.2 86.8 L209.1 85.5 L210 84.3 L210.8 82.9 L211.7 81.6 L212.5 80.2 L213.4 78.8 L214.2 77.4 L215.1 75.9 L216 74.4 L216.8 72.8 L217.7 71.2 L218.5 69.6 L219.4 68 L220.3 66.3 L221.1 64.6 L222 62.8 L222.8 61 L223.7 59.2 L224.5 57.4 L225.4 55.5 L226.3 53.6 L227.1 51.6 L228 49.6 L228.8 47.6 L229.7 45.5 L230.6 43.5 L231.4 41.3 L232.3 39.2 L233.1 37 L234 34.7\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><circle class=\"jmi-hasil\" cx=\"160.2\" cy=\"102\" r=\"5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"194.5\" cy=\"102\" r=\"5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text class=\"jmi-hasil\" x=\"83.5\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">= x</text><text class=\"jmi-hasil\" x=\"105.1\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">2</text><text class=\"jmi-hasil\" x=\"111.7\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\"> − 4x + 3</text><text x=\"8\" y=\"224\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">f(x) = 0 ⇔ x − p = 0 atau x − q = 0</text><text class=\"jmi-hasil\" x=\"8\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Punca: x = 1 dan x = 3</text><text class=\"jmi-hasil\" x=\"8\" y=\"260\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\">Tambah punca 4, darab punca 3</text></svg></div><figcaption>Rajah 1 · Graf f(x) = (x − p)(x − q). Gerakkan p dan q, perhatikan punca.</figcaption></figure>",
  "segi": "<figure class=\"figure jmi\" data-w=\"t4kuad\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4kuad&quot;,&quot;mod&quot;:&quot;segi&quot;,&quot;P&quot;:20,&quot;awal&quot;:{&quot;x&quot;:2},&quot;kapsyen&quot;:&quot;Rajah 1 · Pagar 20 m mengelilingi kebun segi empat tepat. Ubah lebar x dan lihat luasnya.&quot;,&quot;alt&quot;:&quot;Rajah interaktif kebun segi empat tepat berperimeter 20 meter; gelongsor lebar x menukar panjang, luas dan titik pada graf luas melawan lebar&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 350\" role=\"img\" aria-label=\"Rajah pagar segi empat tepat dengan lebar 3 meter, panjang 7 meter dan graf luas melawan lebar\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Perimeter pagar = 20 m</text><rect x=\"16\" y=\"30\" width=\"77.8\" height=\"33.3\" rx=\"2\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\"></rect><text x=\"54.9\" y=\"77.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">7 m</text><text x=\"99.8\" y=\"50.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">3 m</text><rect x=\"40\" y=\"164\" width=\"206\" height=\"110\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"40\" y=\"288\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"81.2\" y1=\"164\" x2=\"81.2\" y2=\"274\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"81.2\" y=\"288\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"122.4\" y1=\"164\" x2=\"122.4\" y2=\"274\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"122.4\" y=\"288\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><line x1=\"163.6\" y1=\"164\" x2=\"163.6\" y2=\"274\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"163.6\" y=\"288\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"204.8\" y1=\"164\" x2=\"204.8\" y2=\"274\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"204.8\" y=\"288\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">8</text><text x=\"246\" y=\"288\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">10</text><line x1=\"40\" y1=\"258.3\" x2=\"246\" y2=\"258.3\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"262.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><line x1=\"40\" y1=\"242.6\" x2=\"246\" y2=\"242.6\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"246.6\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"40\" y1=\"226.9\" x2=\"246\" y2=\"226.9\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"230.9\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">15</text><line x1=\"40\" y1=\"211.1\" x2=\"246\" y2=\"211.1\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"215.1\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">20</text><line x1=\"40\" y1=\"195.4\" x2=\"246\" y2=\"195.4\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"199.4\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">25</text><line x1=\"40\" y1=\"179.7\" x2=\"246\" y2=\"179.7\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"183.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">30</text><text x=\"36\" y=\"168\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">35</text><line x1=\"40\" y1=\"274\" x2=\"246\" y2=\"274\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"40\" y1=\"164\" x2=\"40\" y2=\"274\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"246\" y=\"302\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">x (m)</text><path class=\"jmi-hasil\" d=\"M40 274 L40.9 272.7 L41.7 271.4 L42.6 270.1 L43.4 268.8 L44.3 267.6 L45.2 266.3 L46 265.1 L46.9 263.9 L47.7 262.7 L48.6 261.5 L49.4 260.3 L50.3 259.1 L51.2 257.9 L52 256.7 L52.9 255.6 L53.7 254.4 L54.6 253.3 L55.5 252.2 L56.3 251.1 L57.2 250 L58 248.9 L58.9 247.8 L59.7 246.8 L60.6 245.7 L61.5 244.7 L62.3 243.6 L63.2 242.6 L64 241.6 L64.9 240.6 L65.8 239.6 L66.6 238.6 L67.5 237.7 L68.3 236.7 L69.2 235.8 L70 234.9 L70.9 233.9 L71.8 233 L72.6 232.1 L73.5 231.2 L74.3 230.3 L75.2 229.5 L76.1 228.6 L76.9 227.8 L77.8 226.9 L78.6 226.1 L79.5 225.3 L80.3 224.5 L81.2 223.7 L82.1 222.9 L82.9 222.2 L83.8 221.4 L84.6 220.7 L85.5 219.9 L86.4 219.2 L87.2 218.5 L88.1 217.8 L88.9 217.1 L89.8 216.4 L90.6 215.7 L91.5 215.1 L92.4 214.4 L93.2 213.8 L94.1 213.2 L94.9 212.5 L95.8 211.9 L96.7 211.3 L97.5 210.8 L98.4 210.2 L99.2 209.6 L100.1 209.1 L100.9 208.5 L101.8 208 L102.7 207.5 L103.5 207 L104.4 206.5 L105.2 206 L106.1 205.5 L107 205.1 L107.8 204.6 L108.7 204.2 L109.5 203.7 L110.4 203.3 L111.2 202.9 L112.1 202.5 L113 202.1 L113.8 201.7 L114.7 201.4 L115.5 201 L116.4 200.7 L117.3 200.3 L118.1 200 L119 199.7 L119.8 199.4 L120.7 199.1 L121.5 198.8 L122.4 198.6 L123.3 198.3 L124.1 198.1 L125 197.8 L125.8 197.6 L126.7 197.4 L127.6 197.2 L128.4 197 L129.3 196.8 L130.1 196.7 L131 196.5 L131.8 196.4 L132.7 196.2 L133.6 196.1 L134.4 196 L135.3 195.9 L136.1 195.8 L137 195.7 L137.9 195.6 L138.7 195.6 L139.6 195.5 L140.4 195.5 L141.3 195.5 L142.1 195.4 L143 195.4 L143.9 195.4 L144.7 195.5 L145.6 195.5 L146.4 195.5 L147.3 195.6 L148.2 195.6 L149 195.7 L149.9 195.8 L150.7 195.9 L151.6 196 L152.4 196.1 L153.3 196.2 L154.2 196.4 L155 196.5 L155.9 196.7 L156.7 196.8 L157.6 197 L158.5 197.2 L159.3 197.4 L160.2 197.6 L161 197.8 L161.9 198.1 L162.7 198.3 L163.6 198.6 L164.5 198.8 L165.3 199.1 L166.2 199.4 L167 199.7 L167.9 200 L168.8 200.3 L169.6 200.7 L170.5 201 L171.3 201.4 L172.2 201.7 L173 202.1 L173.9 202.5 L174.8 202.9 L175.6 203.3 L176.5 203.7 L177.3 204.2 L178.2 204.6 L179.1 205.1 L179.9 205.5 L180.8 206 L181.6 206.5 L182.5 207 L183.3 207.5 L184.2 208 L185.1 208.5 L185.9 209.1 L186.8 209.6 L187.6 210.2 L188.5 210.8 L189.4 211.3 L190.2 211.9 L191.1 212.5 L191.9 213.2 L192.8 213.8 L193.6 214.4 L194.5 215.1 L195.4 215.7 L196.2 216.4 L197.1 217.1 L197.9 217.8 L198.8 218.5 L199.7 219.2 L200.5 219.9 L201.4 220.7 L202.2 221.4 L203.1 222.2 L203.9 222.9 L204.8 223.7 L205.7 224.5 L206.5 225.3 L207.4 226.1 L208.2 226.9 L209.1 227.8 L210 228.6 L210.8 229.5 L211.7 230.3 L212.5 231.2 L213.4 232.1 L214.2 233 L215.1 233.9 L216 234.9 L216.8 235.8 L217.7 236.7 L218.5 237.7 L219.4 238.6 L220.3 239.6 L221.1 240.6 L222 241.6 L222.8 242.6 L223.7 243.6 L224.5 244.7 L225.4 245.7 L226.3 246.8 L227.1 247.8 L228 248.9 L228.8 250 L229.7 251.1 L230.6 252.2 L231.4 253.3 L232.3 254.4 L233.1 255.6 L234 256.7 L234.8 257.9 L235.7 259.1 L236.6 260.3 L237.4 261.5 L238.3 262.7 L239.1 263.9 L240 265.1 L240.9 266.3 L241.7 267.6 L242.6 268.8 L243.4 270.1 L244.3 271.4 L245.1 272.7 L246 274\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><circle cx=\"101.8\" cy=\"208\" r=\"5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"322\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">A = x(10 − x) = 3 × 7</text><text class=\"jmi-hasil\" x=\"8\" y=\"340\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">Luas = 21 m²</text></svg></div><figcaption>Rajah 1 · Pagar 20 m mengelilingi kebun segi empat tepat. Ubah lebar x dan lihat luasnya.</figcaption></figure>",
  "graf5": "<figure class=\"figure jmi cabar\" data-w=\"t4kuad\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4kuad&quot;,&quot;mod&quot;:&quot;graf&quot;,&quot;aSet&quot;:[-2,-1,1,2],&quot;bSet&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;cSet&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;awal&quot;:{&quot;a&quot;:2,&quot;b&quot;:0,&quot;c&quot;:7},&quot;kapsyen&quot;:&quot;Rajah 1 · Lakar dahulu di kertas conteng, kemudian semak dengan graf f(x) = ax² + bx + c.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf fungsi kuadratik dalam mod cabar; cip a dan gelongsor b serta c, titik pusingan dan punca tersembunyi sehingga disemak&quot;,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 268\" role=\"img\" aria-label=\"Rajah graf fungsi kuadratik f(x) = x² − 4x + 3 berbentuk minimum, pintasan-y 3\"><text x=\"60.4\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">f(x) = x</text><text x=\"122.8\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">2</text><text x=\"129.4\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\"> − 4x + 3</text><rect x=\"40\" y=\"34\" width=\"206\" height=\"136\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"40\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−6</text><line x1=\"74.3\" y1=\"34\" x2=\"74.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"74.3\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><line x1=\"108.7\" y1=\"34\" x2=\"108.7\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"108.7\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><line x1=\"143\" y1=\"34\" x2=\"143\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"143\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"177.3\" y1=\"34\" x2=\"177.3\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"177.3\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"211.7\" y1=\"34\" x2=\"211.7\" y2=\"170\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"211.7\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"246\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"40\" y1=\"136\" x2=\"246\" y2=\"136\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−5</text><line x1=\"40\" y1=\"102\" x2=\"246\" y2=\"102\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"106\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"68\" x2=\"246\" y2=\"68\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"72\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"36\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"40\" y1=\"102\" x2=\"246\" y2=\"102\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"143\" y1=\"34\" x2=\"143\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><g class=\"jmi-hasil\"><line x1=\"177.3\" y1=\"34\" x2=\"177.3\" y2=\"170\" stroke=\"var(--amber)\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"></line></g><path d=\"M120.7 34.7 L121.5 37 L122.4 39.2 L123.3 41.3 L124.1 43.5 L125 45.5 L125.8 47.6 L126.7 49.6 L127.6 51.6 L128.4 53.6 L129.3 55.5 L130.1 57.4 L131 59.2 L131.8 61 L132.7 62.8 L133.6 64.6 L134.4 66.3 L135.3 68 L136.1 69.6 L137 71.2 L137.9 72.8 L138.7 74.4 L139.6 75.9 L140.4 77.4 L141.3 78.8 L142.1 80.2 L143 81.6 L143.9 82.9 L144.7 84.3 L145.6 85.5 L146.4 86.8 L147.3 88 L148.2 89.1 L149 90.3 L149.9 91.4 L150.7 92.5 L151.6 93.5 L152.4 94.5 L153.3 95.5 L154.2 96.4 L155 97.3 L155.9 98.2 L156.7 99 L157.6 99.8 L158.5 100.6 L159.3 101.3 L160.2 102 L161 102.7 L161.9 103.3 L162.7 103.9 L163.6 104.4 L164.5 105 L165.3 105.5 L166.2 105.9 L167 106.4 L167.9 106.7 L168.8 107.1 L169.6 107.4 L170.5 107.7 L171.3 108 L172.2 108.2 L173 108.4 L173.9 108.5 L174.8 108.6 L175.6 108.7 L176.5 108.8 L177.3 108.8 L178.2 108.8 L179 108.7 L179.9 108.6 L180.8 108.5 L181.6 108.4 L182.5 108.2 L183.3 108 L184.2 107.7 L185.1 107.4 L185.9 107.1 L186.8 106.7 L187.6 106.4 L188.5 105.9 L189.4 105.5 L190.2 105 L191.1 104.4 L191.9 103.9 L192.8 103.3 L193.6 102.7 L194.5 102 L195.4 101.3 L196.2 100.6 L197.1 99.8 L197.9 99 L198.8 98.2 L199.7 97.3 L200.5 96.4 L201.4 95.5 L202.2 94.5 L203.1 93.5 L203.9 92.5 L204.8 91.4 L205.7 90.3 L206.5 89.1 L207.4 88 L208.2 86.8 L209.1 85.5 L210 84.3 L210.8 82.9 L211.7 81.6 L212.5 80.2 L213.4 78.8 L214.2 77.4 L215.1 75.9 L216 74.4 L216.8 72.8 L217.7 71.2 L218.5 69.6 L219.4 68 L220.3 66.3 L221.1 64.6 L222 62.8 L222.8 61 L223.7 59.2 L224.5 57.4 L225.4 55.5 L226.3 53.6 L227.1 51.6 L228 49.6 L228.8 47.6 L229.7 45.5 L230.6 43.5 L231.4 41.3 L232.3 39.2 L233.1 37 L234 34.7\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><circle cx=\"143\" cy=\"81.6\" r=\"4\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"160.2\" cy=\"102\" r=\"4.5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"194.5\" cy=\"102\" r=\"4.5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle class=\"jmi-hasil\" cx=\"177.3\" cy=\"108.8\" r=\"5\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Graf berbentuk ∪ (a &gt; 0)</text><text class=\"jmi-hasil\" x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Titik minimum: (2, −1)</text><text class=\"jmi-hasil\" x=\"8\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Paksi simetri: x = 2</text><text class=\"jmi-hasil\" x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\">Punca: x = 1 dan x = 3</text></svg></div><figcaption>Rajah 1 · Lakar dahulu di kertas conteng, kemudian semak dengan graf f(x) = ax² + bx + c.</figcaption></figure>",
  "lontar": "<figure class=\"figure jmi\" data-w=\"t4kuad\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4kuad&quot;,&quot;mod&quot;:&quot;lontar&quot;,&quot;v&quot;:20,&quot;h0&quot;:0,&quot;tMaks&quot;:8,&quot;awal&quot;:{&quot;t&quot;:2},&quot;kapsyen&quot;:&quot;Rajah 1 · Bola dilambung tegak ke atas, h(t) = 20t − 5t². Gerakkan masa t.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf tinggi bola melawan masa bagi h sama dengan 20t tolak 5t kuasa dua; gelongsor masa menggerakkan bola pada lengkung&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 298\" role=\"img\" aria-label=\"Rajah graf tinggi bola h melawan masa t bagi h(t) = 0 + 20t − 5t kuasa dua, bola pada t = 1 saat\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">h(t) = 20t − 5t²</text><rect x=\"40\" y=\"34\" width=\"206\" height=\"150\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"40\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"91.5\" y1=\"34\" x2=\"91.5\" y2=\"184\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"91.5\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"143\" y1=\"34\" x2=\"143\" y2=\"184\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"143\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"194.5\" y1=\"34\" x2=\"194.5\" y2=\"184\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"194.5\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"246\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><line x1=\"40\" y1=\"154\" x2=\"246\" y2=\"154\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><line x1=\"40\" y1=\"124\" x2=\"246\" y2=\"124\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"128\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"40\" y1=\"94\" x2=\"246\" y2=\"94\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"98\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">15</text><line x1=\"40\" y1=\"64\" x2=\"246\" y2=\"64\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><text x=\"36\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">20</text><text x=\"36\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">25</text><line x1=\"40\" y1=\"184\" x2=\"246\" y2=\"184\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"40\" y1=\"34\" x2=\"40\" y2=\"184\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"246\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">t (s)</text><text x=\"10\" y=\"26\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">h (m)</text><path d=\"M40 184 L40.9 182 L41.7 180 L42.6 178.1 L43.4 176.1 L44.3 174.2 L45.2 172.3 L46 170.4 L46.9 168.5 L47.7 166.7 L48.6 164.8 L49.4 163 L50.3 161.2 L51.2 159.4 L52 157.6 L52.9 155.9 L53.7 154.1 L54.6 152.4 L55.5 150.7 L56.3 149 L57.2 147.3 L58 145.7 L58.9 144 L59.7 142.4 L60.6 140.8 L61.5 139.2 L62.3 137.6 L63.2 136.1 L64 134.5 L64.9 133 L65.8 131.5 L66.6 130 L67.5 128.5 L68.3 127.1 L69.2 125.6 L70 124.2 L70.9 122.8 L71.8 121.4 L72.6 120 L73.5 118.7 L74.3 117.3 L75.2 116 L76.1 114.7 L76.9 113.4 L77.8 112.1 L78.6 110.9 L79.5 109.6 L80.3 108.4 L81.2 107.2 L82.1 106 L82.9 104.8 L83.8 103.7 L84.6 102.5 L85.5 101.4 L86.4 100.3 L87.2 99.2 L88.1 98.1 L88.9 97.1 L89.8 96 L90.6 95 L91.5 94 L92.4 93 L93.2 92 L94.1 91.1 L94.9 90.1 L95.8 89.2 L96.7 88.3 L97.5 87.4 L98.4 86.5 L99.2 85.7 L100.1 84.8 L100.9 84 L101.8 83.2 L102.7 82.4 L103.5 81.6 L104.4 80.9 L105.2 80.1 L106.1 79.4 L107 78.7 L107.8 78 L108.7 77.3 L109.5 76.7 L110.4 76 L111.2 75.4 L112.1 74.8 L113 74.2 L113.8 73.6 L114.7 73.1 L115.5 72.5 L116.4 72 L117.3 71.5 L118.1 71 L119 70.5 L119.8 70.1 L120.7 69.6 L121.5 69.2 L122.4 68.8 L123.3 68.4 L124.1 68 L125 67.7 L125.8 67.3 L126.7 67 L127.6 66.7 L128.4 66.4 L129.3 66.1 L130.1 65.9 L131 65.6 L131.8 65.4 L132.7 65.2 L133.6 65 L134.4 64.8 L135.3 64.7 L136.1 64.5 L137 64.4 L137.9 64.3 L138.7 64.2 L139.6 64.1 L140.4 64.1 L141.3 64 L142.1 64 L143 64 L143.9 64 L144.7 64 L145.6 64.1 L146.4 64.1 L147.3 64.2 L148.2 64.3 L149 64.4 L149.9 64.5 L150.7 64.7 L151.6 64.8 L152.4 65 L153.3 65.2 L154.2 65.4 L155 65.6 L155.9 65.9 L156.7 66.1 L157.6 66.4 L158.5 66.7 L159.3 67 L160.2 67.3 L161 67.7 L161.9 68 L162.7 68.4 L163.6 68.8 L164.5 69.2 L165.3 69.6 L166.2 70.1 L167 70.5 L167.9 71 L168.8 71.5 L169.6 72 L170.5 72.5 L171.3 73.1 L172.2 73.6 L173 74.2 L173.9 74.8 L174.8 75.4 L175.6 76 L176.5 76.7 L177.3 77.3 L178.2 78 L179.1 78.7 L179.9 79.4 L180.8 80.1 L181.6 80.9 L182.5 81.6 L183.3 82.4 L184.2 83.2 L185.1 84 L185.9 84.8 L186.8 85.7 L187.6 86.5 L188.5 87.4 L189.4 88.3 L190.2 89.2 L191.1 90.1 L191.9 91.1 L192.8 92 L193.6 93 L194.5 94 L195.4 95 L196.2 96 L197.1 97.1 L197.9 98.1 L198.8 99.2 L199.7 100.3 L200.5 101.4 L201.4 102.5 L202.2 103.7 L203.1 104.8 L203.9 106 L204.8 107.2 L205.7 108.4 L206.5 109.6 L207.4 110.9 L208.2 112.1 L209.1 113.4 L210 114.7 L210.8 116 L211.7 117.3 L212.5 118.7 L213.4 120 L214.2 121.4 L215.1 122.8 L216 124.2 L216.8 125.6 L217.7 127.1 L218.5 128.5 L219.4 130 L220.3 131.5 L221.1 133 L222 134.5 L222.8 136.1 L223.7 137.6 L224.5 139.2 L225.4 140.8 L226.3 142.4 L227.1 144 L228 145.7 L228.8 147.3 L229.7 149 L230.6 150.7 L231.4 152.4 L232.3 154.1 L233.1 155.9 L234 157.6 L234.8 159.4 L235.7 161.2 L236.6 163 L237.4 164.8 L238.3 166.7 L239.1 168.5 L240 170.4 L240.9 172.3 L241.7 174.2 L242.6 176.1 L243.4 178.1 L244.3 180 L245.1 182 L246 184\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><line x1=\"91.5\" y1=\"184\" x2=\"91.5\" y2=\"94\" stroke=\"var(--amber)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"></line><circle cx=\"91.5\" cy=\"94\" r=\"7\" fill=\"var(--arteri)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"234\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">t = 1 s</text><text class=\"jmi-hasil\" x=\"8\" y=\"252\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Tinggi h = 15 m</text><text class=\"jmi-hasil\" x=\"8\" y=\"270\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\">Tinggi maksimum 20 m pada t = 2 s</text><text class=\"jmi-hasil\" x=\"8\" y=\"288\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Mendarat apabila h = 0: t = 4 s</text></svg></div><figcaption>Rajah 1 · Bola dilambung tegak ke atas, h(t) = 20t − 5t². Gerakkan masa t.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Taman Parabola",
   "sk": "1.1.1 / 1.1.2 Ungkapan dan fungsi kuadratik",
   "lampiran": "graf",
   "kadNama": "Ungkapan Kuadratik",
   "kadEm": "🌿",
   "kadFakta": "Ungkapan kuadratik dalam satu pemboleh ubah berbentuk ax² + bx + c, dengan a ≠ 0. Kuasa tertinggi pemboleh ubahnya ialah 2.",
   "bosKadNama": "Bentuk ∪ dan ∩",
   "bosKadEm": "🙂",
   "bosKadFakta": "Jika a > 0, graf berbentuk ∪ dan ada titik minimum. Jika a < 0, graf berbentuk ∩ dan ada titik maksimum.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Antara berikut, yang manakah ungkapan kuadratik dalam satu pemboleh ubah?",
     "p": [
      "3x² − 5x + 2",
      "3x³ − 5x + 2",
      "x² + y² − 1",
      "5x − 1"
     ],
     "b": 0,
     "u": "Ungkapan kuadratik mempunyai satu pemboleh ubah sahaja dan kuasa tertingginya 2. 3x³ berkuasa 3, x² + y² ada dua pemboleh ubah, dan 5x − 1 linear."
    },
    {
     "j": "pilih",
     "t": "Kuasa tertinggi pemboleh ubah dalam suatu ungkapan kuadratik ialah:",
     "p": [
      "1",
      "2",
      "3",
      "0"
     ],
     "b": 1,
     "u": "Perkataan kuadratik berasal daripada kuasa dua. Sebutan x² mesti ada, dan tiada kuasa yang lebih tinggi."
    },
    {
     "j": "pilih",
     "t": "Dalam ungkapan 5x² − 3x + 8, nilai a, b dan c ialah:",
     "p": [
      "a = 5, b = 3, c = 8",
      "a = −3, b = 5, c = 8",
      "a = 5, b = −3, c = 8",
      "a = 8, b = −3, c = 5"
     ],
     "b": 2,
     "u": "Bandingkan dengan ax² + bx + c. Pekali x² ialah 5, pekali x ialah −3 (termasuk tandanya), dan pemalar ialah 8."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan a = 1, b = 0 dan c = 0. Graf f(x) = x² berbentuk:",
     "p": [
      "∩ dengan titik maksimum",
      "Garis lurus melalui asalan",
      "∪ dengan titik maksimum",
      "∪ dengan titik minimum"
     ],
     "b": 3,
     "u": "Apabila a &gt; 0, graf membuka ke atas (∪). Titik terendahnya ialah titik minimum, iaitu (0, 0)."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tukar a kepada −2 dengan b = 0 dan c = 0. Apakah yang berlaku pada graf?",
     "p": [
      "Graf menjadi ∩ dan ada titik maksimum",
      "Graf kekal ∪ tetapi menjadi lebih sempit",
      "Graf berubah menjadi garis lurus",
      "Graf beralih 2 unit ke bawah"
     ],
     "b": 0,
     "u": "Tanda a menentukan arah bukaan graf. Apabila a &lt; 0, graf membuka ke bawah (∩) dan titik pusingannya ialah titik maksimum."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 1, b = 0 dan c = 3. Berapakah pintasan-y graf itu?",
     "b": 3,
     "tol": 0.001000000001,
     "u": "Pintasan-y ialah nilai f(0). Ganti x = 0: f(0) = 1(0)² + 0 + 3 = 3. Pintasan-y sentiasa sama dengan c."
    },
    {
     "j": "pilih",
     "t": "Ungkapan 2x² + 3x tidak mempunyai sebutan pemalar. Adakah ia ungkapan kuadratik?",
     "p": [
      "Tidak, kerana ungkapan kuadratik ada tiga sebutan",
      "Ya, kerana c boleh sifar asalkan a ≠ 0",
      "Tidak, kerana ungkapan itu tiada nombor pemalar",
      "Ya, kerana nilai b ialah sifar dalam ungkapan ini"
     ],
     "b": 1,
     "u": "Syarat ungkapan kuadratik ialah a ≠ 0. Nilai b atau c boleh sifar, contohnya 2x² + 3x (c = 0) dan x² − 9 (b = 0)."
    },
    {
     "j": "nombor",
     "t": "Diberi f(x) = x² − 4x + 1. Cari nilai f(5).",
     "b": 6,
     "tol": 0.001000000001,
     "u": "Ganti x = 5: f(5) = 5² − 4(5) + 1 = 25 − 20 + 1 = 6."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA ungkapan kuadratik dalam satu pemboleh ubah.",
    "p": [
     "x² − 9",
     "4 − 3x²",
     "7x² + x",
     "x³ + 2x²",
     "2/x² + 3",
     "5x − 1"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "x² − 9, 4 − 3x² dan 7x² + x mempunyai kuasa tertinggi 2. x³ + 2x² berkuasa 3, 2/x² bermaksud kuasa −2 (bukan nombor bulat positif), dan 5x − 1 linear."
   }
  },
  {
   "n": 2,
   "tempat": "Jambatan Lengkung",
   "sk": "1.1.2 / 1.1.3 Ciri-ciri fungsi kuadratik dan kesan a, b, c",
   "lampiran": "cancang",
   "kadNama": "Banyak kepada Satu",
   "kadEm": "🌉",
   "kadFakta": "Fungsi kuadratik ialah hubungan banyak kepada satu: dua nilai x yang berlainan boleh memberi nilai y yang sama, kecuali di titik pusingan.",
   "bosKadNama": "Paksi Simetri",
   "bosKadEm": "🪞",
   "bosKadFakta": "Paksi simetri graf ax² + bx + c ialah garis x = −b ÷ 2a. Ia selari dengan paksi-y dan melalui titik pusingan.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, gerakkan garis mencancang ke kedudukan yang berlainan. Berapa titik garis itu menyilang graf?",
     "p": [
      "Dua titik pada setiap kedudukan",
      "Tiada titik apabila x negatif",
      "Satu titik pada setiap kedudukan",
      "Bergantung pada nilai pintasan-y"
     ],
     "b": 2,
     "u": "Setiap nilai x memberi tepat satu nilai f(x). Inilah ujian garis mencancang yang membuktikan graf itu suatu fungsi."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan garis mengufuk y = 5. Berapakah bilangan titik persilangan garis itu dengan graf?",
     "b": 2,
     "tol": 0.001000000001,
     "u": "Selesaikan x² − 2x − 3 = 5, iaitu x² − 2x − 8 = 0, jadi (x − 4)(x + 2) = 0. Dua titik: x = −2 dan x = 4."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, y = 5 dicapai oleh x = −2 dan x = 4. Ini menunjukkan fungsi kuadratik ialah hubungan:",
     "p": [
      "satu kepada satu",
      "satu kepada banyak",
      "banyak kepada banyak",
      "banyak kepada satu"
     ],
     "b": 3,
     "u": "Dua nilai x (objek) dipetakan kepada satu nilai y (imej) yang sama, jadi hubungannya banyak kepada satu."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan y = −4. Mengapakah garis itu menyentuh graf pada satu titik sahaja?",
     "p": [
      "Titik (1, −4) ialah titik minimum graf",
      "Garis y = −4 selari dengan paksi simetri",
      "Nilai −4 ialah pintasan-y bagi graf ini",
      "Graf terputus di bawah garis y = −4"
     ],
     "b": 0,
     "u": "Paksi simetri ialah x = 1 dan f(1) = 1 − 2 − 3 = −4. Titik minimum ialah titik terendah, jadi garis y = −4 hanya menyentuhnya di situ."
    },
    {
     "j": "nombor",
     "t": "Persamaan paksi simetri bagi graf f(x) = x² − 2x − 3 ialah x = k. Cari nilai k.",
     "b": 1,
     "tol": 0.001000000001,
     "u": "Paksi simetri x = −b ÷ 2a. Ganti a = 1 dan b = −2: x = 2 ÷ 2 = 1."
    },
    {
     "j": "pilih",
     "t": "Bagi graf f(x) = x² + c, apabila c berubah daripada 0 kepada 3, graf itu:",
     "p": [
      "Beralih 3 unit ke kanan",
      "Beralih 3 unit ke atas",
      "Menjadi lebih sempit",
      "Bertukar menjadi bentuk ∩"
     ],
     "b": 1,
     "u": "Nilai c ialah pintasan-y. Menambah 3 kepada setiap nilai f(x) mengalihkan seluruh graf 3 unit ke atas tanpa mengubah bentuknya."
    },
    {
     "j": "pilih",
     "t": "Bandingkan graf f(x) = x² dengan graf g(x) = 3x². Graf g ialah:",
     "p": [
      "Lebih lebar daripada graf f",
      "Graf f yang dialih 3 unit ke atas",
      "Lebih sempit daripada graf f",
      "Graf yang mempunyai titik maksimum"
     ],
     "b": 2,
     "u": "Semakin besar nilai |a|, semakin cepat nilai y meningkat, jadi graf menjadi lebih sempit. Kedua-dua graf masih berbentuk ∪."
    },
    {
     "j": "pilih",
     "t": "Bagi f(x) = x² + bx, apabila b berubah daripada 0 kepada −4, paksi simetri beralih daripada x = 0 kepada:",
     "p": [
      "x = −2",
      "x = 4",
      "x = −4",
      "x = 2"
     ],
     "b": 3,
     "u": "Paksi simetri x = −b ÷ 2a = −(−4) ÷ 2 = 2. Nilai b mengalihkan graf ke kiri atau ke kanan."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Graf f(x) = ax² + bx + c mempunyai titik maksimum (2, 7) dan pintasan-y 3. Antara berikut, yang manakah benar?",
    "p": [
     "a &lt; 0 dan paksi simetri ialah x = 2",
     "a &gt; 0 dan paksi simetri ialah x = 2",
     "a &lt; 0 dan paksi simetri ialah x = 7",
     "a &gt; 0 dan paksi simetri ialah x = 3"
    ],
    "b": 0,
    "u": "Titik maksimum bermaksud graf berbentuk ∩, jadi a &lt; 0. Paksi simetri melalui titik pusingan, iaitu x = 2 (koordinat-x titik itu, bukan koordinat-y)."
   }
  },
  {
   "n": 3,
   "tempat": "Bengkel Faktor",
   "sk": "1.1.5 / 1.1.6 Punca persamaan kuadratik dan pemfaktoran",
   "lampiran": "punca",
   "kadNama": "Punca",
   "kadEm": "🎯",
   "kadFakta": "Punca persamaan kuadratik ialah nilai x yang menjadikan f(x) = 0. Pada graf, punca ialah titik persilangan graf dengan paksi-x.",
   "bosKadNama": "Sifar Dahulu",
   "bosKadEm": "0️⃣",
   "bosKadFakta": "Kaedah pemfaktoran hanya sah apabila satu belah persamaan ialah sifar, kerana jika pq = 0, maka p = 0 atau q = 0.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Punca suatu persamaan kuadratik ialah nilai x yang:",
     "p": [
      "Menjadikan x sama dengan sifar",
      "Menjadikan f(x) = 0",
      "Memberi nilai f(x) yang terbesar",
      "Memberi pintasan-y bagi graf"
     ],
     "b": 1,
     "u": "Punca memenuhi persamaan ax² + bx + c = 0. Pada graf, ia ialah titik di mana graf memotong paksi-x."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan p = 1 dan q = 3. Graf memotong paksi-x pada:",
     "p": [
      "x = −1 dan x = −3",
      "x = 0 dan x = 3",
      "x = 1 dan x = 3",
      "x = 1 dan x = −3"
     ],
     "b": 2,
     "u": "(x − 1)(x − 3) = 0 apabila x − 1 = 0 atau x − 3 = 0, iaitu x = 1 atau x = 3."
    },
    {
     "j": "nombor",
     "t": "Selesaikan x² − 5x + 6 = 0. Nyatakan punca yang lebih besar.",
     "b": 3,
     "tol": 0.001000000001,
     "u": "Faktorkan: (x − 2)(x − 3) = 0. Maka x = 2 atau x = 3. Punca yang lebih besar ialah 3."
    },
    {
     "j": "nombor",
     "t": "Selesaikan x² + 2x − 15 = 0. Nyatakan punca yang positif.",
     "b": 3,
     "tol": 0.001000000001,
     "u": "Cari dua nombor yang hasil darabnya −15 dan hasil tambahnya 2, iaitu 5 dan −3. (x + 5)(x − 3) = 0, jadi x = −5 atau x = 3."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan p = 2 dan q = −3. Bentuk am bagi f(x) ialah:",
     "p": [
      "x² − x − 6",
      "x² + x + 6",
      "x² − 5x − 6",
      "x² + x − 6"
     ],
     "b": 3,
     "u": "(x − 2)(x + 3) = x² + 3x − 2x − 6 = x² + x − 6."
    },
    {
     "j": "pilih",
     "t": "Selesaikan 2x² − 7x + 3 = 0 dengan kaedah pemfaktoran.",
     "p": [
      "x = 1/2 atau x = 3",
      "x = −1/2 atau x = −3",
      "x = 2 atau x = 3",
      "x = 1/2 atau x = −3"
     ],
     "b": 0,
     "u": "2x² − 7x + 3 = (2x − 1)(x − 3). Maka 2x − 1 = 0 memberi x = 1/2, dan x − 3 = 0 memberi x = 3."
    },
    {
     "j": "nombor",
     "t": "Selesaikan 3x² = 12x. Nyatakan punca yang bukan sifar.",
     "b": 4,
     "tol": 0.001000000001,
     "u": "Pindahkan semua sebutan ke kiri: 3x² − 12x = 0. Faktorkan: 3x(x − 4) = 0, jadi x = 0 atau x = 4. Jangan bahagi dengan x kerana punca x = 0 akan hilang."
    },
    {
     "j": "susun",
     "t": "Susun langkah menyelesaikan persamaan kuadratik dengan kaedah pemfaktoran.",
     "p": [
      "Susun persamaan dalam bentuk ax² + bx + c = 0",
      "Faktorkan ungkapan di sebelah kiri",
      "Samakan setiap faktor dengan sifar",
      "Selesaikan setiap persamaan linear"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Persamaan mesti sama dengan sifar dahulu. Selepas difaktorkan, setiap faktor disamakan dengan sifar dan diselesaikan."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Seorang murid menyelesaikan x² − 4x = 5 dengan menulis x(x − 4) = 5, maka x = 5 atau x − 4 = 5. Apakah kesilapannya?",
    "p": [
     "Ungkapan x² − 4x tidak boleh difaktorkan sama sekali",
     "Sebelah kanan mesti sifar sebelum setiap faktor disamakan",
     "Dia sepatutnya membahagi kedua-dua belah dengan x",
     "Tiada kesilapan kerana x = 5 dan x = 9 adalah punca"
    ],
    "b": 1,
    "u": "Jika ab = 5, tidak semestinya a = 5 atau b = 5. Tulis x² − 4x − 5 = 0, faktorkan menjadi (x − 5)(x + 1) = 0, jadi x = 5 atau x = −1."
   }
  },
  {
   "n": 4,
   "tempat": "Kebun Pagar",
   "sk": "1.1.4 / 1.1.8 Membentuk fungsi kuadratik daripada situasi",
   "lampiran": "segi",
   "kadNama": "Model Luas",
   "kadEm": "🌻",
   "kadFakta": "Dengan pagar sepanjang 20 m, lebar x memberi panjang (10 − x). Luas A = x(10 − x) ialah fungsi kuadratik dalam x.",
   "bosKadNama": "Punca yang Sah",
   "bosKadEm": "✅",
   "bosKadFakta": "Dalam masalah sebenar, semak setiap punca. Panjang, luas dan masa tidak boleh negatif, jadi punca negatif ditolak.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, jika lebar kebun ialah x m, maka panjangnya ialah:",
     "p": [
      "(20 − x) m",
      "(20 − 2x) m",
      "(10 − x) m",
      "(10 − 2x) m"
     ],
     "b": 2,
     "u": "2(panjang + x) = 20, jadi panjang + x = 10 dan panjang = 10 − x."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 3. Berapakah luas kebun, dalam m²?",
     "b": 21,
     "tol": 0.001000000001,
     "u": "Panjang = 10 − 3 = 7 m. Luas = 3 × 7 = 21 m²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gerakkan x dari 1 hingga 9. Berapakah luas maksimum kebun, dalam m²?",
     "b": 25,
     "tol": 0.001000000001,
     "u": "Luas terbesar apabila x = 5 m, iaitu kebun berbentuk segi empat sama: 5 × 5 = 25 m². Graf A berbentuk ∩ dengan titik maksimum (5, 25)."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, luas kebun ialah 24 m² dan lebarnya kurang daripada panjangnya. Cari lebar x, dalam m.",
     "b": 4,
     "tol": 0.001000000001,
     "u": "x(10 − x) = 24 memberi x² − 10x + 24 = 0, iaitu (x − 4)(x − 6) = 0. Lebar kurang daripada panjang, jadi x = 4 m (panjang 6 m)."
    },
    {
     "j": "pilih",
     "t": "Fungsi luas A(x) = x(10 − x) dalam bentuk am ialah:",
     "p": [
      "A = x² − 10x",
      "A = −x² − 10x",
      "A = x² + 10x",
      "A = −x² + 10x"
     ],
     "b": 3,
     "u": "Kembangkan: x × 10 − x × x = 10x − x², iaitu A = −x² + 10x. Nilai a = −1 &lt; 0, jadi graf berbentuk ∩."
    },
    {
     "j": "nombor",
     "t": "Hasil darab dua nombor bulat positif yang berturutan ialah 72. Cari nombor yang lebih kecil.",
     "b": 8,
     "tol": 0.001000000001,
     "u": "Biar nombor itu x dan x + 1. x(x + 1) = 72 memberi x² + x − 72 = 0, iaitu (x + 9)(x − 8) = 0. Nombor positif, jadi x = 8."
    },
    {
     "j": "nombor",
     "t": "Panjang sebuah segi empat tepat 3 cm lebih daripada lebarnya. Luasnya ialah 40 cm². Cari lebarnya, dalam cm.",
     "b": 5,
     "tol": 0.001000000001,
     "u": "Biar lebar x cm. x(x + 3) = 40 memberi x² + 3x − 40 = 0, iaitu (x + 8)(x − 5) = 0. Lebar mesti positif, jadi x = 5 cm."
    },
    {
     "j": "pilih",
     "t": "Persamaan x² − 10x + 24 = 0 memberi x = 4 atau x = 6. Mengapakah kedua-dua nilai sah bagi lebar kebun dalam Rajah 1?",
     "p": [
      "Kedua-duanya positif dan kurang daripada 10",
      "Persamaan kuadratik selalu ada dua jawapan",
      "Lebar dan panjang kebun mesti sama",
      "Lebar kebun boleh mengambil apa-apa nilai"
     ],
     "b": 0,
     "u": "Lebar mesti positif dan panjang 10 − x juga mesti positif, jadi 0 &lt; x &lt; 10. Nilai 4 dan 6 memenuhi syarat itu (kebun 4 × 6 atau 6 × 4)."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah segi tiga bersudut tegak mempunyai tapak x cm, tinggi (x + 2) cm dan luas 24 cm². Cari nilai x.",
    "b": 6,
    "tol": 0.001000000001,
    "u": "½ × x × (x + 2) = 24 memberi x² + 2x − 48 = 0, iaitu (x + 8)(x − 6) = 0. Tapak mesti positif, jadi x = 6."
   }
  },
  {
   "n": 5,
   "tempat": "Menara Lengkung",
   "sk": "1.1.7 / 1.1.8 Melakar graf dan masalah kompleks",
   "lampiran": "graf5",
   "kadNama": "Lakar Graf",
   "kadEm": "✏️",
   "kadFakta": "Untuk melakar graf kuadratik, tentukan bentuk (tanda a), pintasan-y (c), punca (jika ada) dan titik pusingan pada paksi simetri.",
   "bosKadNama": "Bingkai Gambar",
   "bosKadEm": "🖼️",
   "bosKadFakta": "Masalah luas berbingkai: luas bingkai = luas keseluruhan − luas gambar. Hasilnya sering persamaan kuadratik.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Lakar graf f(x) = x² − 4x + 3 di kertas conteng, kemudian semak dengan Rajah 1. Titik minimumnya ialah:",
     "p": [
      "(−2, 15)",
      "(2, −1)",
      "(2, 1)",
      "(4, 3)"
     ],
     "b": 1,
     "u": "Paksi simetri x = −(−4) ÷ 2 = 2. f(2) = 4 − 8 + 3 = −1. Titik minimum ialah (2, −1)."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan a = −1, b = 2 dan c = 3. Bentuk graf dan puncanya ialah:",
     "p": [
      "∪, punca x = −1 dan x = 3",
      "∩, punca x = 1 dan x = −3",
      "∩, punca x = −1 dan x = 3",
      "∪, punca x = 1 dan x = −3"
     ],
     "b": 2,
     "u": "a = −1 &lt; 0, jadi bentuk ∩. −x² + 2x + 3 = −(x² − 2x − 3) = −(x − 3)(x + 1), jadi punca x = −1 dan x = 3."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan a = 1, b = 0 dan c = 4. Graf ini tiada punca nyata. Titik minimumnya terletak di:",
     "p": [
      "(4, 0) pada paksi-x",
      "(0, −4) pada paksi-y",
      "(2, 0) pada paksi-x",
      "(0, 4) pada paksi-y"
     ],
     "b": 3,
     "u": "Dengan b = 0, paksi simetri ialah paksi-y. f(0) = 4, jadi titik minimum (0, 4) berada di atas paksi-x dan graf tidak memotong paksi-x."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 2, b = −4 dan c = −2. Persamaan paksi simetri graf itu ialah x = k. Cari nilai k.",
     "b": 1,
     "tol": 0.001000000001,
     "u": "x = −b ÷ 2a = −(−4) ÷ (2 × 2) = 4 ÷ 4 = 1."
    },
    {
     "j": "nombor",
     "t": "Untung harian sebuah gerai ialah U(x) = −x² + 40x − 300 ringgit, dengan x ialah harga sepinggan (RM). Berapakah untung maksimum, dalam RM?",
     "b": 100,
     "tol": 0.001000000001,
     "u": "Paksi simetri x = −40 ÷ (2 × −1) = 20. U(20) = −400 + 800 − 300 = 100. Untung maksimum ialah RM100 apabila harga RM20."
    },
    {
     "j": "nombor",
     "t": "Bagi gerai yang sama, U(x) = −x² + 40x − 300. Pada harga terendah berapakah (RM) untung harian menjadi RM75?",
     "b": 15,
     "tol": 0.001000000001,
     "u": "−x² + 40x − 300 = 75 memberi x² − 40x + 375 = 0, iaitu (x − 15)(x − 25) = 0. Harga terendah ialah RM15."
    },
    {
     "j": "pilih",
     "t": "Antara berikut, yang manakah menghuraikan graf f(x) = −(x − 1)(x − 5) dengan betul?",
     "p": [
      "∩, memotong paksi-x di 1 dan 5, maksimum pada x = 3",
      "∪, memotong paksi-x di 1 dan 5, minimum pada x = 3",
      "∩, memotong paksi-x di −1 dan −5, maksimum pada x = −3",
      "∪, memotong paksi-x di −1 dan −5, minimum pada x = −3"
     ],
     "b": 0,
     "u": "Tanda negatif di hadapan memberi a &lt; 0, jadi ∩. Punca ialah 1 dan 5, dan paksi simetri berada di tengah-tengah: (1 + 5) ÷ 2 = 3."
    },
    {
     "j": "nombor",
     "t": "Sebuah taman segi empat sama bersisi 10 m dikelilingi laluan selebar x m. Luas taman bersama laluan ialah 196 m². Cari x.",
     "b": 2,
     "tol": 0.001000000001,
     "u": "Sisi keseluruhan = 10 + 2x. (10 + 2x)² = 196, jadi 10 + 2x = 14 (sisi positif) dan x = 2."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sekeping gambar berukuran 8 cm × 6 cm diletakkan dalam bingkai selebar x cm di sekelilingnya. Luas bingkai sahaja ialah 72 cm². Cari x.",
    "b": 2,
    "tol": 0.001000000001,
    "u": "(8 + 2x)(6 + 2x) − 48 = 72. Kembangkan: 4x² + 28x + 48 − 48 = 72, jadi 4x² + 28x − 72 = 0, iaitu x² + 7x − 18 = 0. (x + 9)(x − 2) = 0, jadi x = 2."
   }
  },
  {
   "n": 6,
   "tempat": "Padang Lontar",
   "sk": "1.1.8 Masalah bukan rutin dan mereka situasi",
   "lampiran": "lontar",
   "kadNama": "Lontaran",
   "kadEm": "⚾",
   "kadFakta": "Tinggi objek yang dilambung boleh dimodelkan oleh h(t) = h₀ + vt − 5t². Graf berbentuk ∩ dan titik maksimumnya memberikan tinggi maksimum objek itu.",
   "bosKadNama": "Reka Model",
   "bosKadEm": "💡",
   "bosKadFakta": "Model matematik yang baik mempunyai pemboleh ubah yang jelas, domain yang munasabah, dan tafsiran bagi setiap nilai penting pada graf.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan t = 1.5 s. Berapakah tinggi bola, dalam m?",
     "b": 18.75,
     "tol": 0.005000000005,
     "u": "h(1.5) = 20(1.5) − 5(1.5)² = 30 − 11.25 = 18.75 m."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gerakkan t. Berapakah tinggi maksimum bola, dalam m?",
     "b": 20,
     "tol": 0.001000000001,
     "u": "Paksi simetri t = −20 ÷ (2 × −5) = 2. h(2) = 40 − 20 = 20 m."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pada masa berapakah (dalam saat) bola mendarat semula di tanah?",
     "b": 4,
     "tol": 0.001000000001,
     "u": "Selesaikan 20t − 5t² = 0, iaitu 5t(4 − t) = 0. Maka t = 0 (dilambung) atau t = 4 (mendarat)."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, bola berada pada ketinggian 15 m pada dua masa yang berlainan. Masa-masa itu ialah:",
     "p": [
      "t = 1.5 s dan t = 2.5 s",
      "t = 1 s dan t = 3 s",
      "t = 0.5 s dan t = 3.5 s",
      "t = 2 s dan t = 4 s"
     ],
     "b": 1,
     "u": "20t − 5t² = 15 memberi t² − 4t + 3 = 0, iaitu (t − 1)(t − 3) = 0. Bola melalui 15 m semasa naik (t = 1) dan semasa turun (t = 3)."
    },
    {
     "j": "pilih",
     "t": "Mengapakah persamaan 20t − 5t² = 25 tiada penyelesaian dalam situasi Rajah 1?",
     "p": [
      "Masa tidak boleh mempunyai nilai pecahan saat",
      "Bola sudah mendarat sebelum t = 2.5 s",
      "Tinggi maksimum bola ialah 20 m, jadi 25 m tidak dicapai",
      "Persamaan kuadratik mesti mempunyai dua punca"
     ],
     "b": 2,
     "u": "Garis h = 25 berada di atas titik maksimum (2, 20), jadi ia tidak menyilang graf. Secara algebra, t² − 4t + 5 = 0 tiada punca nyata."
    },
    {
     "j": "pilih",
     "t": "Persamaan x(x + 5) = 84 boleh mewakili situasi yang manakah?",
     "p": [
      "Perimeter segi empat tepat bersisi x dan 5 ialah 84 m",
      "Hasil tambah dua nombor yang berbeza sebanyak 5 ialah 84",
      "Isi padu kubus bersisi (x + 5) m ialah 84 m³",
      "Luas segi empat tepat yang panjangnya 5 m lebih daripada lebarnya ialah 84 m²"
     ],
     "b": 3,
     "u": "Lebar x dan panjang x + 5 memberi luas x(x + 5). Perimeter dan hasil tambah ialah ungkapan linear, manakala isi padu kubus ialah kuasa tiga."
    },
    {
     "j": "nombor",
     "t": "Jika bola itu dilambung dengan halaju 30 m/s, iaitu h(t) = 30t − 5t², berapakah tinggi maksimumnya, dalam m?",
     "b": 45,
     "tol": 0.001000000001,
     "u": "Paksi simetri t = −30 ÷ (2 × −5) = 3. h(3) = 90 − 45 = 45 m."
    },
    {
     "j": "pilih",
     "t": "Seorang murid berkata, \"Jika halaju lambungan digandakan, tinggi maksimum turut digandakan.\" Gunakan h(t) = vt − 5t² untuk menilai pernyataan itu.",
     "p": [
      "Tidak benar; tinggi menjadi empat kali ganda kerana bergantung pada v²",
      "Benar; tinggi berkadar terus dengan halaju lambungan",
      "Tidak benar; tinggi kekal sama kerana graviti tidak berubah",
      "Benar; masa bola di udara turut menjadi dua kali ganda"
     ],
     "b": 0,
     "u": "Tinggi maksimum = v² ÷ 20. Bagi v = 20, tinggi ialah 20 m. Bagi v = 40, tinggi ialah 1600 ÷ 20 = 80 m, iaitu empat kali ganda."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu situasi kehidupan sebenar yang boleh dimodelkan oleh fungsi kuadratik, contohnya lontaran bola, luas kebun atau untung jualan.",
    "arahan": "Tulis fungsi kuadratik bagi situasi itu dan nyatakan maksud setiap pemboleh ubah. Lakar grafnya, kemudian cari titik maksimum atau minimum serta puncanya. Terangkan maksud setiap nilai itu dalam situasi awak, dan nyatakan nilai yang tidak munasabah serta sebabnya.",
    "u": "Jawapan TP6 yang kukuh mempunyai fungsi yang sepadan dengan situasi, lakaran dengan bentuk, pintasan dan titik pusingan yang betul, tafsiran yang bermakna bagi titik maksimum atau minimum dan punca, serta penolakan nilai yang tidak munasabah (contohnya masa atau panjang negatif)."
   }
  }
 ]
};
