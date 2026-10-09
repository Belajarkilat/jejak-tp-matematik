/* Bank soalan — Matematik Ting. 5 · Bab 6 Nisbah dan Graf Fungsi Trigonometri.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m5b6.js
   kemudian jalankan: node bina.js m5b6

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 5, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m5b6"] =
{
 "id": "m5b6",
 "tingkatan": 5,
 "kod": "6.0 Nisbah dan Graf Fungsi Trigonometri",
 "tajuk": "Makmal Gelombang",
 "subtajuk": "Matematik Ting. 5 · Bab 6 Nisbah dan Graf Fungsi Trigonometri",
 "spi": [
  "Mempamerkan pengetahuan asas tentang nisbah dan graf fungsi trigonometri.",
  "Mempamerkan kefahaman tentang nisbah dan graf fungsi trigonometri.",
  "Mengaplikasikan kefahaman tentang nisbah dan graf fungsi trigonometri untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nisbah dan graf fungsi trigonometri dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nisbah dan graf fungsi trigonometri dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nisbah dan graf fungsi trigonometri dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat menggunakan bulatan unit untuk menentukan nilai sin, kos dan tan bagi sudut khas dan mengenal pasti tanda dalam setiap sukuan. Langkah seterusnya ialah sudut rujukan.",
  "2": "{n} memahami sudut rujukan dan menentukan nilai trigonometri dalam sukuan II, III dan IV tanpa kalkulator. Perlu lebih latihan mencari sudut daripada nilai yang diberi.",
  "3": "{n} boleh menentukan sudut apabila nilai sin, kos atau tan diberi dan menyelesaikan persamaan trigonometri mudah.",
  "4": "{n} mampu melukis dan membandingkan ciri graf sin, kos dan tan. Seterusnya, kaji kesan pemalar a, b dan c.",
  "5": "{n} dapat membuat generalisasi kesan a, b dan c ke atas graf dan menentukan persamaan daripada ciri graf. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya membina dan menggunakan model trigonometri bagi fenomena berulang untuk membuat keputusan. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab ini. Cadangan: ulang hentian pertama dengan Rajah 1 dan lukis bulatan unit di atas kertas grid."
 },
 "lampiran": {
  "r1": "<figure class=\"figure jmi\" data-w=\"t5trig\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trig&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Bulatan unit. Gerakkan sudut θ.&quot;,&quot;alt&quot;:&quot;Rajah interaktif bulatan unit dengan sudut 0 hingga 360 darjah; titik pada bulatan memberi kos θ dan sin θ, serta sukuan dan nilai tan&quot;,&quot;mod&quot;:&quot;bulatan&quot;,&quot;sudut&quot;:[0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330,360],&quot;iAwal&quot;:1}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 280\" role=\"img\" aria-label=\"Bulatan unit dengan sudut 30 darjah; sin = 0.5, kos = 0.866, tan = 0.5774\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Bulatan unit, θ = 30°</text><circle cx=\"130\" cy=\"98\" r=\"64\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.4\"></circle><line x1=\"58\" y1=\"98\" x2=\"202\" y2=\"98\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"130\" y1=\"26\" x2=\"130\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"198\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">I</text><text x=\"56\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">II</text><text x=\"54\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">III</text><text x=\"196\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">IV</text><line x1=\"130\" y1=\"98\" x2=\"185.4\" y2=\"66\" stroke=\"var(--arteri)\" stroke-width=\"2\"></line><line x1=\"185.4\" y1=\"66\" x2=\"185.4\" y2=\"98\" stroke=\"var(--amber)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"></line><circle cx=\"185.4\" cy=\"66\" r=\"4\" fill=\"var(--arteri)\"></circle><text class=\"jmi-hasil\" x=\"8\" y=\"192\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">(kos θ, sin θ) = (0.866, 0.5)</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Sukuan I, sudut rujukan = 30°</text><text class=\"jmi-hasil\" x=\"8\" y=\"234\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">sin 30° = 0.5</text><text class=\"jmi-hasil\" x=\"8\" y=\"252\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">kos 30° = 0.866</text><text class=\"jmi-hasil\" x=\"8\" y=\"270\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">tan 30° = 0.5774</text></svg></div><figcaption>Rajah 1 · Bulatan unit. Gerakkan sudut θ.</figcaption></figure>",
  "r2": "<figure class=\"figure jmi\" data-w=\"t5trig\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trig&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Sudut dalam sukuan II, III dan IV. Gerakkan θ dan perhatikan sudut rujukan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif bulatan unit bagi sudut dalam sukuan kedua, ketiga dan keempat dengan sudut rujukan dan nilai sin, kos dan tan&quot;,&quot;mod&quot;:&quot;bulatan&quot;,&quot;sudut&quot;:[100,120,135,150,200,210,225,240,300,315,330,340],&quot;iAwal&quot;:3}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 280\" role=\"img\" aria-label=\"Bulatan unit dengan sudut 150 darjah; sin = 0.5, kos = −0.866, tan = −0.5774\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Bulatan unit, θ = 150°</text><circle cx=\"130\" cy=\"98\" r=\"64\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.4\"></circle><line x1=\"58\" y1=\"98\" x2=\"202\" y2=\"98\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"130\" y1=\"26\" x2=\"130\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"198\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">I</text><text x=\"56\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">II</text><text x=\"54\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">III</text><text x=\"196\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">IV</text><line x1=\"130\" y1=\"98\" x2=\"74.6\" y2=\"66\" stroke=\"var(--arteri)\" stroke-width=\"2\"></line><line x1=\"74.6\" y1=\"66\" x2=\"74.6\" y2=\"98\" stroke=\"var(--amber)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"></line><circle cx=\"74.6\" cy=\"66\" r=\"4\" fill=\"var(--arteri)\"></circle><text class=\"jmi-hasil\" x=\"8\" y=\"192\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">(kos θ, sin θ) = (−0.866, 0.5)</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Sukuan II, sudut rujukan = 30°</text><text class=\"jmi-hasil\" x=\"8\" y=\"234\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">sin 150° = 0.5</text><text class=\"jmi-hasil\" x=\"8\" y=\"252\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">kos 150° = −0.866</text><text class=\"jmi-hasil\" x=\"8\" y=\"270\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">tan 150° = −0.5774</text></svg></div><figcaption>Rajah 1 · Sudut dalam sukuan II, III dan IV. Gerakkan θ dan perhatikan sudut rujukan.</figcaption></figure>",
  "r3": "<figure class=\"figure jmi\" data-w=\"t5trig\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trig&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Mencari sudut daripada nilai sin, kos atau tan. Pilih persamaan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif bulatan unit yang menandakan semua sudut antara 0 dan 360 darjah yang memenuhi persamaan trigonometri yang dipilih&quot;,&quot;mod&quot;:&quot;cari&quot;,&quot;soalan&quot;:[{&quot;f&quot;:&quot;sin&quot;,&quot;v&quot;:0.5,&quot;t&quot;:&quot;sin θ = 0.5&quot;},{&quot;f&quot;:&quot;kos&quot;,&quot;v&quot;:-0.5,&quot;t&quot;:&quot;kos θ = −0.5&quot;},{&quot;f&quot;:&quot;tan&quot;,&quot;v&quot;:1,&quot;t&quot;:&quot;tan θ = 1&quot;},{&quot;f&quot;:&quot;sin&quot;,&quot;v&quot;:-0.6,&quot;t&quot;:&quot;sin θ = −0.6&quot;},{&quot;f&quot;:&quot;kos&quot;,&quot;v&quot;:0.8,&quot;t&quot;:&quot;kos θ = 0.8&quot;},{&quot;f&quot;:&quot;tan&quot;,&quot;v&quot;:-2,&quot;t&quot;:&quot;tan θ = −2&quot;}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 238\" role=\"img\" aria-label=\"Penyelesaian sin θ = 0.5 bagi 0 hingga 360 darjah: 30, 150 darjah\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">sin θ = 0.5, 0° ≤ θ ≤ 360°</text><circle cx=\"130\" cy=\"96\" r=\"62\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.4\"></circle><line x1=\"60\" y1=\"96\" x2=\"200\" y2=\"96\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"130\" y1=\"26\" x2=\"130\" y2=\"166\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"196\" y=\"82\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">I</text><text x=\"58\" y=\"82\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">II</text><text x=\"56\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">III</text><text x=\"194\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">IV</text><line x1=\"64\" y1=\"65\" x2=\"196\" y2=\"65\" stroke=\"var(--amber)\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"></line><g class=\"jmi-hasil\"><line x1=\"130\" y1=\"96\" x2=\"183.7\" y2=\"65\" stroke=\"var(--arteri)\" stroke-width=\"1.8\"></line><circle cx=\"183.7\" cy=\"65\" r=\"4\" fill=\"var(--arteri)\"></circle><line x1=\"130\" y1=\"96\" x2=\"76.3\" y2=\"65\" stroke=\"var(--arteri)\" stroke-width=\"1.8\"></line><circle cx=\"76.3\" cy=\"65\" r=\"4\" fill=\"var(--arteri)\"></circle></g><text class=\"jmi-hasil\" x=\"8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Sudut rujukan = 30°</text><text class=\"jmi-hasil\" x=\"8\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Sukuan: I dan II</text><text class=\"jmi-hasil\" x=\"8\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">θ = 30°, 150°</text></svg></div><figcaption>Rajah 1 · Mencari sudut daripada nilai sin, kos atau tan. Pilih persamaan.</figcaption></figure>",
  "r4": "<figure class=\"figure jmi\" data-w=\"t5trig\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trig&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Graf fungsi trigonometri bagi 0° ≤ x ≤ 360°. Pilih graf dan gerakkan x.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf y = sin x, y = kos x dan y = tan x bagi 0 hingga 360 darjah dengan ciri maksimum, minimum dan pintasan&quot;,&quot;mod&quot;:&quot;graf&quot;,&quot;xs&quot;:[0,30,45,60,90,120,135,150,180,210,240,270,300,330,360]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 252\" role=\"img\" aria-label=\"Graf y = sin x bagi 0 hingga 360 darjah; nilai pada x = 0 ialah 0\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">y = sin x</text><line x1=\"40\" y1=\"150\" x2=\"236\" y2=\"150\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"154\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−1</text><line x1=\"40\" y1=\"120\" x2=\"236\" y2=\"120\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−0.5</text><line x1=\"40\" y1=\"90\" x2=\"236\" y2=\"90\" stroke=\"var(--ink3)\" stroke-width=\"1.3\"></line><text x=\"36\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"60\" x2=\"236\" y2=\"60\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"64\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0.5</text><line x1=\"40\" y1=\"30\" x2=\"236\" y2=\"30\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"150\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"40\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0°</text><line x1=\"89\" y1=\"30\" x2=\"89\" y2=\"150\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"89\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">90°</text><line x1=\"138\" y1=\"30\" x2=\"138\" y2=\"150\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"138\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">180°</text><line x1=\"187\" y1=\"30\" x2=\"187\" y2=\"150\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"187\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">270°</text><line x1=\"236\" y1=\"30\" x2=\"236\" y2=\"150\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"236\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">360°</text><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.3\"></line><text x=\"44\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">y</text><path d=\"M40 90L41.1 87.9L42.2 85.8L43.3 83.7L44.4 81.6L45.4 79.6L46.5 77.5L47.6 75.5L48.7 73.5L49.8 71.5L50.9 69.5L52 67.5L53.1 65.6L54.2 63.7L55.2 61.8L56.3 60L57.4 58.2L58.5 56.4L59.6 54.7L60.7 53.1L61.8 51.4L62.9 49.9L64 48.3L65 46.8L66.1 45.4L67.2 44L68.3 42.7L69.4 41.5L70.5 40.3L71.6 39.1L72.7 38L73.8 37L74.8 36.1L75.9 35.2L77 34.4L78.1 33.6L79.2 32.9L80.3 32.3L81.4 31.8L82.5 31.3L83.6 30.9L84.6 30.6L85.7 30.3L86.8 30.1L87.9 30L89 30L90.1 30L91.2 30.1L92.3 30.3L93.4 30.6L94.4 30.9L95.5 31.3L96.6 31.8L97.7 32.3L98.8 32.9L99.9 33.6L101 34.4L102.1 35.2L103.2 36.1L104.2 37L105.3 38L106.4 39.1L107.5 40.3L108.6 41.5L109.7 42.7L110.8 44L111.9 45.4L113 46.8L114 48.3L115.1 49.9L116.2 51.4L117.3 53.1L118.4 54.7L119.5 56.4L120.6 58.2L121.7 60L122.8 61.8L123.8 63.7L124.9 65.6L126 67.5L127.1 69.5L128.2 71.5L129.3 73.5L130.4 75.5L131.5 77.5L132.6 79.6L133.6 81.6L134.7 83.7L135.8 85.8L136.9 87.9L138 90L139.1 92.1L140.2 94.2L141.3 96.3L142.4 98.4L143.4 100.4L144.5 102.5L145.6 104.5L146.7 106.5L147.8 108.5L148.9 110.5L150 112.5L151.1 114.4L152.2 116.3L153.2 118.2L154.3 120L155.4 121.8L156.5 123.6L157.6 125.3L158.7 126.9L159.8 128.6L160.9 130.1L162 131.7L163 133.2L164.1 134.6L165.2 136L166.3 137.3L167.4 138.5L168.5 139.7L169.6 140.9L170.7 142L171.8 143L172.8 143.9L173.9 144.8L175 145.6L176.1 146.4L177.2 147.1L178.3 147.7L179.4 148.2L180.5 148.7L181.6 149.1L182.6 149.4L183.7 149.7L184.8 149.9L185.9 150L187 150L188.1 150L189.2 149.9L190.3 149.7L191.4 149.4L192.4 149.1L193.5 148.7L194.6 148.2L195.7 147.7L196.8 147.1L197.9 146.4L199 145.6L200.1 144.8L201.2 143.9L202.2 143L203.3 142L204.4 140.9L205.5 139.7L206.6 138.5L207.7 137.3L208.8 136L209.9 134.6L211 133.2L212 131.7L213.1 130.1L214.2 128.6L215.3 126.9L216.4 125.3L217.5 123.6L218.6 121.8L219.7 120L220.8 118.2L221.8 116.3L222.9 114.4L224 112.5L225.1 110.5L226.2 108.5L227.3 106.5L228.4 104.5L229.5 102.5L230.6 100.4L231.6 98.4L232.7 96.3L233.8 94.2L234.9 92.1L236 90\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><circle cx=\"40\" cy=\"90\" r=\"4\" fill=\"var(--arteri)\"></circle><text class=\"jmi-hasil\" x=\"8\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">sin 0° = 0</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Maks 1 (x = 90°), min −1 (x = 270°)</text><text class=\"jmi-hasil\" x=\"8\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Pintasan-x: 0°, 180°, 360°</text><text class=\"jmi-hasil\" x=\"8\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Pintasan-y: 0</text></svg></div><figcaption>Rajah 1 · Graf fungsi trigonometri bagi 0° ≤ x ≤ 360°. Pilih graf dan gerakkan x.</figcaption></figure>",
  "r5": "<figure class=\"figure jmi cabar\" data-w=\"t5trig\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trig&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · y = a sin bx + c dan y = a kos bx + c. Kira dahulu, kemudian semak.&quot;,&quot;alt&quot;:&quot;Rajah interaktif kesan pemalar a, b dan c ke atas graf sinus dan kosinus; amplitud, tempoh, maksimum dan minimum dikira, dalam mod cabar&quot;,&quot;mod&quot;:&quot;abc&quot;,&quot;cabar&quot;:true,&quot;a&quot;:[1,2,3],&quot;b&quot;:[0.5,1,2,3],&quot;c&quot;:[-1,0,1,2],&quot;aAwal&quot;:1,&quot;bAwal&quot;:2,&quot;cAwal&quot;:2}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 288\" role=\"img\" aria-label=\"Graf y = 2 sin 2x + 1 dengan amplitud 2, tempoh 180 darjah, maksimum 3 dan minimum −1\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">y = 2 sin 2x + 1</text><line x1=\"40\" y1=\"160\" x2=\"236\" y2=\"160\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−4</text><line x1=\"40\" y1=\"134\" x2=\"236\" y2=\"134\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−2</text><line x1=\"40\" y1=\"108\" x2=\"236\" y2=\"108\" stroke=\"var(--ink3)\" stroke-width=\"1.3\"></line><text x=\"36\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"82\" x2=\"236\" y2=\"82\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"86\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"40\" y1=\"56\" x2=\"236\" y2=\"56\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"60\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"40\" y1=\"30\" x2=\"236\" y2=\"30\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"160\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"40\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0°</text><line x1=\"89\" y1=\"30\" x2=\"89\" y2=\"160\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"89\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">90°</text><line x1=\"138\" y1=\"30\" x2=\"138\" y2=\"160\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"138\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">180°</text><line x1=\"187\" y1=\"30\" x2=\"187\" y2=\"160\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"187\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">270°</text><line x1=\"236\" y1=\"30\" x2=\"236\" y2=\"160\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"236\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">360°</text><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"160\" stroke=\"var(--ink3)\" stroke-width=\"1.3\"></line><text x=\"44\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">y</text><path d=\"M40 108L41.1 107.5L42.2 107.1L43.3 106.6L44.4 106.2L45.4 105.7L46.5 105.3L47.6 104.9L48.7 104.4L49.8 104L50.9 103.6L52 103.1L53.1 102.7L54.2 102.3L55.2 101.9L56.3 101.5L57.4 101.1L58.5 100.7L59.6 100.4L60.7 100L61.8 99.6L62.9 99.3L64 99L65 98.6L66.1 98.3L67.2 98L68.3 97.8L69.4 97.5L70.5 97.2L71.6 97L72.7 96.7L73.8 96.5L74.8 96.3L75.9 96.1L77 95.9L78.1 95.8L79.2 95.6L80.3 95.5L81.4 95.4L82.5 95.3L83.6 95.2L84.6 95.1L85.7 95.1L86.8 95L87.9 95L89 95L90.1 95L91.2 95L92.3 95.1L93.4 95.1L94.4 95.2L95.5 95.3L96.6 95.4L97.7 95.5L98.8 95.6L99.9 95.8L101 95.9L102.1 96.1L103.2 96.3L104.2 96.5L105.3 96.7L106.4 97L107.5 97.2L108.6 97.5L109.7 97.8L110.8 98L111.9 98.3L113 98.6L114 99L115.1 99.3L116.2 99.6L117.3 100L118.4 100.4L119.5 100.7L120.6 101.1L121.7 101.5L122.8 101.9L123.8 102.3L124.9 102.7L126 103.1L127.1 103.6L128.2 104L129.3 104.4L130.4 104.9L131.5 105.3L132.6 105.7L133.6 106.2L134.7 106.6L135.8 107.1L136.9 107.5L138 108L139.1 108.5L140.2 108.9L141.3 109.4L142.4 109.8L143.4 110.3L144.5 110.7L145.6 111.1L146.7 111.6L147.8 112L148.9 112.4L150 112.9L151.1 113.3L152.2 113.7L153.2 114.1L154.3 114.5L155.4 114.9L156.5 115.3L157.6 115.6L158.7 116L159.8 116.4L160.9 116.7L162 117L163 117.4L164.1 117.7L165.2 118L166.3 118.2L167.4 118.5L168.5 118.8L169.6 119L170.7 119.3L171.8 119.5L172.8 119.7L173.9 119.9L175 120.1L176.1 120.2L177.2 120.4L178.3 120.5L179.4 120.6L180.5 120.7L181.6 120.8L182.6 120.9L183.7 120.9L184.8 121L185.9 121L187 121L188.1 121L189.2 121L190.3 120.9L191.4 120.9L192.4 120.8L193.5 120.7L194.6 120.6L195.7 120.5L196.8 120.4L197.9 120.2L199 120.1L200.1 119.9L201.2 119.7L202.2 119.5L203.3 119.3L204.4 119L205.5 118.8L206.6 118.5L207.7 118.2L208.8 118L209.9 117.7L211 117.4L212 117L213.1 116.7L214.2 116.4L215.3 116L216.4 115.6L217.5 115.3L218.6 114.9L219.7 114.5L220.8 114.1L221.8 113.7L222.9 113.3L224 112.9L225.1 112.4L226.2 112L227.3 111.6L228.4 111.1L229.5 110.7L230.6 110.3L231.6 109.8L232.7 109.4L233.8 108.9L234.9 108.5L236 108\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><path d=\"M40 95L41.1 93.2L42.2 91.4L43.3 89.6L44.4 87.8L45.4 86.1L46.5 84.4L47.6 82.8L48.7 81.2L49.8 79.7L50.9 78.3L52 76.9L53.1 75.7L54.2 74.5L55.2 73.4L56.3 72.5L57.4 71.6L58.5 70.9L59.6 70.3L60.7 69.8L61.8 69.4L62.9 69.1L64 69L65 69L66.1 69.1L67.2 69.4L68.3 69.8L69.4 70.3L70.5 70.9L71.6 71.6L72.7 72.5L73.8 73.4L74.8 74.5L75.9 75.7L77 76.9L78.1 78.3L79.2 79.7L80.3 81.2L81.4 82.8L82.5 84.4L83.6 86.1L84.6 87.8L85.7 89.6L86.8 91.4L87.9 93.2L89 95L90.1 96.8L91.2 98.6L92.3 100.4L93.4 102.2L94.4 103.9L95.5 105.6L96.6 107.2L97.7 108.8L98.8 110.3L99.9 111.7L101 113.1L102.1 114.3L103.2 115.5L104.2 116.6L105.3 117.5L106.4 118.4L107.5 119.1L108.6 119.7L109.7 120.2L110.8 120.6L111.9 120.9L113 121L114 121L115.1 120.9L116.2 120.6L117.3 120.2L118.4 119.7L119.5 119.1L120.6 118.4L121.7 117.5L122.8 116.6L123.8 115.5L124.9 114.3L126 113.1L127.1 111.7L128.2 110.3L129.3 108.8L130.4 107.2L131.5 105.6L132.6 103.9L133.6 102.2L134.7 100.4L135.8 98.6L136.9 96.8L138 95L139.1 93.2L140.2 91.4L141.3 89.6L142.4 87.8L143.4 86.1L144.5 84.4L145.6 82.8L146.7 81.2L147.8 79.7L148.9 78.3L150 76.9L151.1 75.7L152.2 74.5L153.2 73.4L154.3 72.5L155.4 71.6L156.5 70.9L157.6 70.3L158.7 69.8L159.8 69.4L160.9 69.1L162 69L163 69L164.1 69.1L165.2 69.4L166.3 69.8L167.4 70.3L168.5 70.9L169.6 71.6L170.7 72.5L171.8 73.4L172.8 74.5L173.9 75.7L175 76.9L176.1 78.3L177.2 79.7L178.3 81.2L179.4 82.8L180.5 84.4L181.6 86.1L182.6 87.8L183.7 89.6L184.8 91.4L185.9 93.2L187 95L188.1 96.8L189.2 98.6L190.3 100.4L191.4 102.2L192.4 103.9L193.5 105.6L194.6 107.2L195.7 108.8L196.8 110.3L197.9 111.7L199 113.1L200.1 114.3L201.2 115.5L202.2 116.6L203.3 117.5L204.4 118.4L205.5 119.1L206.6 119.7L207.7 120.2L208.8 120.6L209.9 120.9L211 121L212 121L213.1 120.9L214.2 120.6L215.3 120.2L216.4 119.7L217.5 119.1L218.6 118.4L219.7 117.5L220.8 116.6L221.8 115.5L222.9 114.3L224 113.1L225.1 111.7L226.2 110.3L227.3 108.8L228.4 107.2L229.5 105.6L230.6 103.9L231.6 102.2L232.7 100.4L233.8 98.6L234.9 96.8L236 95\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><text class=\"jmi-hasil\" x=\"8\" y=\"200\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Amplitud = a = 2</text><text class=\"jmi-hasil\" x=\"8\" y=\"220\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Tempoh = 360° ÷ b = 180°</text><text class=\"jmi-hasil\" x=\"8\" y=\"240\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Maksimum = a + c = 3</text><text class=\"jmi-hasil\" x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Minimum = c − a = −1</text><text x=\"8\" y=\"278\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Garis kelabu: y = sin x asal</text></svg></div><figcaption>Rajah 1 · y = a sin bx + c dan y = a kos bx + c. Kira dahulu, kemudian semak.</figcaption></figure>",
  "r6": "<figure class=\"figure jmi\" data-w=\"t5trig\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trig&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Paras air h (m) di sebuah pelabuhan t jam selepas tengah malam. Gerakkan t.&quot;,&quot;alt&quot;:&quot;Rajah interaktif model pasang surut h = 2 sin(30t) + 3 bagi 0 hingga 24 jam; paras air antara 1 meter dan 5 meter dengan tempoh 12 jam&quot;,&quot;mod&quot;:&quot;model&quot;,&quot;a&quot;:2,&quot;b&quot;:30,&quot;c&quot;:3,&quot;ts&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],&quot;namaT&quot;:&quot;t&quot;,&quot;unitT&quot;:&quot;jam&quot;,&quot;namaY&quot;:&quot;h&quot;,&quot;unitY&quot;:&quot;m&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 264\" role=\"img\" aria-label=\"Model h = 2 sin(30t) + 3; pada t = 0, h = 3\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">h = 2 sin(30t) + 3</text><line x1=\"40\" y1=\"160\" x2=\"248\" y2=\"160\" stroke=\"var(--ink3)\" stroke-width=\"1.3\"></line><text x=\"36\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"136.8\" x2=\"248\" y2=\"136.8\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"140.8\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"40\" y1=\"113.6\" x2=\"248\" y2=\"113.6\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"117.6\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"40\" y1=\"90.4\" x2=\"248\" y2=\"90.4\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"94.4\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"40\" y1=\"67.2\" x2=\"248\" y2=\"67.2\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"71.2\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"40\" y1=\"44\" x2=\"248\" y2=\"44\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"36\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"40\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"92\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><text x=\"144\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">12</text><text x=\"196\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">18</text><text x=\"248\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">24</text><text x=\"248\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">t (jam)</text><text x=\"44\" y=\"36\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">h (m)</text><path d=\"M40 90.4L42.2 84.3L44.3 78.4L46.5 72.6L48.7 67.2L50.8 62.2L53 57.6L55.2 53.6L57.3 50.2L59.5 47.5L61.7 45.6L63.8 44.4L66 44L68.2 44.4L70.3 45.6L72.5 47.5L74.7 50.2L76.8 53.6L79 57.6L81.2 62.2L83.3 67.2L85.5 72.6L87.7 78.4L89.8 84.3L92 90.4L94.2 96.5L96.3 102.4L98.5 108.2L100.7 113.6L102.8 118.6L105 123.2L107.2 127.2L109.3 130.6L111.5 133.3L113.7 135.2L115.8 136.4L118 136.8L120.2 136.4L122.3 135.2L124.5 133.3L126.7 130.6L128.8 127.2L131 123.2L133.2 118.6L135.3 113.6L137.5 108.2L139.7 102.4L141.8 96.5L144 90.4L146.2 84.3L148.3 78.4L150.5 72.6L152.7 67.2L154.8 62.2L157 57.6L159.2 53.6L161.3 50.2L163.5 47.5L165.7 45.6L167.8 44.4L170 44L172.2 44.4L174.3 45.6L176.5 47.5L178.7 50.2L180.8 53.6L183 57.6L185.2 62.2L187.3 67.2L189.5 72.6L191.7 78.4L193.8 84.3L196 90.4L198.2 96.5L200.3 102.4L202.5 108.2L204.7 113.6L206.8 118.6L209 123.2L211.2 127.2L213.3 130.6L215.5 133.3L217.7 135.2L219.8 136.4L222 136.8L224.2 136.4L226.3 135.2L228.5 133.3L230.7 130.6L232.8 127.2L235 123.2L237.2 118.6L239.3 113.6L241.5 108.2L243.7 102.4L245.8 96.5L248 90.4\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><circle cx=\"40\" cy=\"90.4\" r=\"4\" fill=\"var(--arteri)\"></circle><text x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">t = 0 jam</text><text class=\"jmi-hasil\" x=\"8\" y=\"232\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">h = 3 m</text><text class=\"jmi-hasil\" x=\"8\" y=\"254\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Maks 5 m, min 1 m, tempoh 12 jam</text></svg></div><figcaption>Rajah 1 · Paras air h (m) di sebuah pelabuhan t jam selepas tengah malam. Gerakkan t.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Bulatan Unit",
   "sk": "6.1.1 Bulatan unit dan nilai bagi 0°, 90°, 180°, 270°, 360°",
   "lampiran": "r1",
   "kadNama": "Bulatan Unit",
   "kadEm": "⭕",
   "kadFakta": "Pada bulatan unit, titik bagi sudut θ ialah (kos θ, sin θ), dan tan θ = sin θ ÷ kos θ.",
   "bosKadNama": "Sudut Paksi",
   "bosKadEm": "➕",
   "bosKadFakta": "sin θ = 0 apabila titik berada pada paksi-x: θ = 0°, 180° dan 360°.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gerakkan θ kepada 90°. Berapakah nilai sin 90°?",
     "tol": 0.001000000001,
     "b": 1,
     "u": "Pada θ = 90°, titik ialah (0, 1). sin θ ialah koordinat-y, jadi sin 90° = 1."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah nilai kos 180°?",
     "tol": 0.001000000001,
     "b": -1,
     "u": "Pada θ = 180°, titik ialah (−1, 0). kos θ ialah koordinat-x, jadi kos 180° = −1."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih θ = 90°. Nilai tan 90° ialah:",
     "p": [
      "Tidak tertakrif",
      "Sama dengan 0",
      "Sama dengan 1",
      "Sama dengan −1"
     ],
     "b": 0,
     "u": "tan 90° = sin 90° ÷ kos 90° = 1 ÷ 0. Pembahagian dengan sifar tidak tertakrif."
    },
    {
     "j": "pilih",
     "t": "Dalam bulatan unit, koordinat titik bagi sudut θ ialah:",
     "p": [
      "(sin θ, kos θ)",
      "(kos θ, sin θ)",
      "(tan θ, 1)",
      "(θ, sin θ)"
     ],
     "b": 1,
     "u": "Koordinat-x ialah kos θ dan koordinat-y ialah sin θ kerana jejari bulatan unit ialah 1."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih θ = 150°. Sudut itu berada dalam sukuan:",
     "p": [
      "I",
      "III",
      "II",
      "IV"
     ],
     "b": 2,
     "u": "Sukuan II meliputi sudut antara 90° dan 180°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah nilai sin 270°?",
     "tol": 0.001000000001,
     "b": -1,
     "u": "Pada θ = 270°, titik ialah (0, −1), jadi sin 270° = −1."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah nilai kos 360°?",
     "tol": 0.001000000001,
     "b": 1,
     "u": "360° ialah satu pusingan lengkap, jadi titik kembali ke (1, 0) dan kos 360° = 1."
    },
    {
     "j": "pilih",
     "t": "Gerakkan θ dalam sukuan III pada Rajah 1. Nisbah trigonometri yang positif dalam sukuan III ialah:",
     "p": [
      "sin dan tan",
      "kos dan tan",
      "sin dan kos",
      "tan"
     ],
     "b": 3,
     "u": "Dalam sukuan III, sin dan kos kedua-duanya negatif, jadi tan = sin ÷ kos positif. Contoh: θ = 225° memberi tan = 1."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Berdasarkan Rajah 1, bagi sudut manakah sin θ = 0 dalam julat 0° ≤ θ ≤ 360°?",
    "p": [
     "0°, 180° dan 360°",
     "90° dan 270°",
     "0° dan 180°",
     "180° dan 270°"
    ],
    "b": 0,
    "u": "sin θ = 0 apabila titik berada pada paksi-x, iaitu (1, 0) atau (−1, 0). Ini berlaku pada 0°, 180° dan 360°."
   }
  },
  {
   "n": 2,
   "tempat": "Bilik Rujukan",
   "sk": "6.1.1 / 6.1.2 Sudut rujukan dan nilai dalam sukuan II, III dan IV",
   "lampiran": "r2",
   "kadNama": "Sudut Rujukan",
   "kadEm": "📐",
   "kadFakta": "Sudut rujukan: sukuan II 180° − θ, sukuan III θ − 180°, sukuan IV 360° − θ. Nilainya sama dengan sudut rujukan, tandanya ikut sukuan.",
   "bosKadNama": "Tanda Sukuan",
   "bosKadEm": "➗",
   "bosKadFakta": "Sukuan I semua positif, II sin positif, III tan positif, IV kos positif.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih θ = 150°. Berapakah sudut rujukannya, dalam darjah?",
     "tol": 0.001000000001,
     "b": 30,
     "u": "150° berada dalam sukuan II. Sudut rujukan = 180° − 150° = 30°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih θ = 225°. Berapakah sudut rujukannya, dalam darjah?",
     "tol": 0.001000000001,
     "b": 45,
     "u": "225° berada dalam sukuan III. Sudut rujukan = 225° − 180° = 45°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih θ = 300°. Berapakah sudut rujukannya, dalam darjah?",
     "tol": 0.001000000001,
     "b": 60,
     "u": "300° berada dalam sukuan IV. Sudut rujukan = 360° − 300° = 60°."
    },
    {
     "j": "pilih",
     "t": "Tanpa kalkulator, nilai kos 120° ialah:",
     "p": [
      "1/2",
      "−1/2",
      "−√3/2",
      "√3/2"
     ],
     "b": 1,
     "u": "Sudut rujukan = 60° dan kos 60° = 1/2. Dalam sukuan II kos negatif, jadi kos 120° = −1/2."
    },
    {
     "j": "pilih",
     "t": "Tanpa kalkulator, nilai sin 240° ialah:",
     "p": [
      "√3/2",
      "−1/2",
      "−√3/2",
      "1/2"
     ],
     "b": 2,
     "u": "Sudut rujukan = 60° dan sin 60° = √3/2. Dalam sukuan III sin negatif, jadi sin 240° = −√3/2."
    },
    {
     "j": "pilih",
     "t": "Tanpa kalkulator, nilai tan 315° ialah:",
     "p": [
      "1",
      "√3",
      "−√3",
      "−1"
     ],
     "b": 3,
     "u": "Sudut rujukan = 45° dan tan 45° = 1. Dalam sukuan IV tan negatif, jadi tan 315° = −1."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, konjektur yang betul tentang sin θ bagi θ dalam sukuan II ialah:",
     "p": [
      "sin θ = sin (180° − θ)",
      "sin θ = −sin (180° − θ)",
      "sin θ = sin (θ − 180°)",
      "sin θ = kos (180° − θ)"
     ],
     "b": 0,
     "u": "Dalam sukuan II, sin positif dan nilainya sama dengan sin sudut rujukan. Contoh: sin 150° = sin 30° = 0.5."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih θ = 200°. Berapakah nilai sin 200°, betul kepada empat tempat perpuluhan?",
     "tol": 0.0001000000001,
     "b": -0.342,
     "u": "Sudut rujukan = 20°. sin 20° = 0.3420, dan sin negatif dalam sukuan III. sin 200° = −0.3420."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Diberi sin 35° = 0.5736 dan kos 35° = 0.8192. Nilai sin 215° ialah:",
    "p": [
     "0.5736",
     "−0.5736",
     "−0.8192",
     "0.8192"
    ],
    "b": 1,
    "u": "Langkah 1: 215° dalam sukuan III, sudut rujukan = 215° − 180° = 35°. Langkah 2: sin negatif dalam sukuan III. Maka sin 215° = −sin 35° = −0.5736."
   }
  },
  {
   "n": 3,
   "tempat": "Pencari Sudut",
   "sk": "6.1.3 / 6.1.4 Menentukan sudut apabila nilai diberi",
   "lampiran": "r3",
   "kadNama": "Dua Penyelesaian",
   "kadEm": "🔎",
   "kadFakta": "Bagi 0° ≤ θ ≤ 360°, persamaan sin θ = k, kos θ = k atau tan θ = k (k bukan 0, ±1) biasanya mempunyai dua penyelesaian.",
   "bosKadNama": "Susun Semula",
   "bosKadEm": "🔧",
   "bosKadFakta": "Susun persamaan supaya fungsi trigonometri berdiri sendiri, contohnya 4 sin θ + 3 = 1 menjadi sin θ = −0.5.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih sin θ = 0.5. Nilai θ ialah:",
     "p": [
      "30° dan 210°",
      "60° dan 120°",
      "30° dan 150°",
      "30° dan 330°"
     ],
     "b": 2,
     "u": "Sudut rujukan = 30°. sin positif dalam sukuan I dan II: θ = 30° dan 180° − 30° = 150°."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih kos θ = −0.5. Nilai θ ialah:",
     "p": [
      "60° dan 300°",
      "120° dan 300°",
      "150° dan 210°",
      "120° dan 240°"
     ],
     "b": 3,
     "u": "Sudut rujukan = 60°. kos negatif dalam sukuan II dan III: θ = 180° − 60° = 120° dan 180° + 60° = 240°."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih tan θ = 1. Nilai θ ialah:",
     "p": [
      "45° dan 225°",
      "45° dan 135°",
      "45° dan 315°",
      "135° dan 315°"
     ],
     "b": 0,
     "u": "Sudut rujukan = 45°. tan positif dalam sukuan I dan III: θ = 45° dan 180° + 45° = 225°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih sin θ = −0.6. Berapakah nilai θ yang lebih kecil, betul kepada satu tempat perpuluhan?",
     "tol": 0.05000000005,
     "b": 216.9,
     "u": "Sudut rujukan = sin⁻¹ 0.6 = 36.9°. sin negatif dalam sukuan III dan IV: θ = 180° + 36.9° = 216.9° dan 360° − 36.9° = 323.1°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih kos θ = 0.8. Berapakah nilai θ dalam sukuan IV, betul kepada satu tempat perpuluhan?",
     "tol": 0.05000000005,
     "b": 323.1,
     "u": "Sudut rujukan = kos⁻¹ 0.8 = 36.9°. Dalam sukuan IV: θ = 360° − 36.9° = 323.1°."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih tan θ = −2. Dalam sukuan manakah θ berada?",
     "p": [
      "I dan III",
      "II dan IV",
      "II dan III",
      "III dan IV"
     ],
     "b": 1,
     "u": "tan negatif dalam sukuan II dan IV. θ = 180° − 63.4° = 116.6° dan 360° − 63.4° = 296.6°."
    },
    {
     "j": "pilih",
     "t": "Jika sin θ negatif dan kos θ positif, θ berada dalam sukuan:",
     "p": [
      "II",
      "III",
      "IV",
      "I"
     ],
     "b": 2,
     "u": "kos positif dalam sukuan I dan IV; sin negatif dalam sukuan III dan IV. Kedua-dua syarat dipenuhi dalam sukuan IV."
    },
    {
     "j": "nombor",
     "t": "Selesaikan 2 kos θ − 1 = 0 bagi 180° ≤ θ ≤ 360°.",
     "tol": 0.001000000001,
     "b": 300,
     "u": "kos θ = 0.5. Sudut rujukan = 60°. kos positif dalam sukuan I dan IV, tetapi julat hanya 180° hingga 360°, jadi θ = 360° − 60° = 300°."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Selesaikan 4 sin θ + 3 = 1 bagi 0° ≤ θ ≤ 360°. Berikan hasil tambah semua nilai θ, dalam darjah.",
    "tol": 0.001000000001,
    "b": 540,
    "u": "Langkah 1: 4 sin θ = −2, jadi sin θ = −0.5. Langkah 2: sudut rujukan = 30°, sin negatif dalam sukuan III dan IV: θ = 210° dan 330°. Langkah 3: 210° + 330° = 540°."
   }
  },
  {
   "n": 4,
   "tempat": "Galeri Graf",
   "sk": "6.2.1 Graf y = sin x, y = kos x dan y = tan x",
   "lampiran": "r4",
   "kadNama": "Gelombang Sinus",
   "kadEm": "🌊",
   "kadFakta": "Graf sin x dan kos x berulang setiap 360°, dengan nilai antara −1 dan 1. Graf tan x berulang setiap 180° dan tiada nilai maksimum.",
   "bosKadNama": "Titik Persilangan",
   "bosKadEm": "✖️",
   "bosKadFakta": "Bilangan penyelesaian sin x = k sama dengan bilangan titik persilangan graf y = sin x dengan garis y = k.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih y = sin x. Berapakah nilai maksimum graf itu?",
     "tol": 0.001000000001,
     "b": 1,
     "u": "Nilai maksimum y = sin x ialah 1, dicapai pada x = 90°."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih y = kos x. Pada nilai x manakah graf itu mencapai nilai minimum?",
     "p": [
      "90°",
      "270°",
      "360°",
      "180°"
     ],
     "b": 3,
     "u": "kos 180° = −1, iaitu nilai minimum graf kos x."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih y = tan x. Pernyataan manakah yang benar?",
     "p": [
      "Graf tidak tertakrif pada x = 90° dan x = 270°",
      "Nilai maksimum graf ialah 1 pada x = 45°",
      "Graf melalui titik (90°, 0) dan (270°, 0)",
      "Pintasan-y graf ialah 1 kerana tan 0° = 1"
     ],
     "b": 0,
     "u": "Pada 90° dan 270°, kos x = 0, jadi tan x tidak tertakrif. Graf mempunyai asimptot pada garis itu dan tiada nilai maksimum."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, pintasan-y bagi graf y = kos x ialah:",
     "p": [
      "0",
      "1",
      "−1",
      "90"
     ],
     "b": 1,
     "u": "Pintasan-y ialah nilai y apabila x = 0°: kos 0° = 1."
    },
    {
     "j": "banyak",
     "t": "Berdasarkan Rajah 1, pilih SEMUA pintasan-x bagi graf y = sin x dalam 0° ≤ x ≤ 360°.",
     "p": [
      "0°",
      "90°",
      "180°",
      "270°",
      "360°"
     ],
     "b": [
      0,
      2,
      4
     ],
     "u": "Graf sin x memotong paksi-x apabila sin x = 0, iaitu pada 0°, 180° dan 360°."
    },
    {
     "j": "pilih",
     "t": "Bandingkan graf y = sin x dan y = kos x dalam Rajah 1. Pernyataan yang betul ialah:",
     "p": [
      "Kedua-dua graf mempunyai pintasan-y yang sama",
      "Graf kos x mempunyai nilai maksimum 2",
      "Graf kos x ialah graf sin x yang dianjak 90° ke kiri",
      "Graf sin x tidak tertakrif pada x = 90°"
     ],
     "b": 2,
     "u": "Bentuk kedua-dua graf sama, tetapi puncak kos x berada pada 0° manakala puncak sin x pada 90°. Maka kos x = sin (x + 90°)."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih y = tan x dan x = 135°. Berapakah nilai y?",
     "tol": 0.001000000001,
     "b": -1,
     "u": "tan 135° = −tan 45° = −1 (sukuan II)."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, julat nilai y bagi graf y = sin x ialah:",
     "p": [
      "0 ≤ y ≤ 1",
      "−90 ≤ y ≤ 90",
      "−360 ≤ y ≤ 360",
      "−1 ≤ y ≤ 1"
     ],
     "b": 3,
     "u": "Nilai sin x berada antara minimum −1 dan maksimum 1."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Berdasarkan Rajah 1, berapakah bilangan titik persilangan graf y = sin x dengan garis y = 0.5 bagi 0° ≤ x ≤ 360°?",
    "tol": 0.001000000001,
    "b": 2,
    "u": "Langkah 1: sin x = 0.5 bermaksud x = 30° atau 150°. Langkah 2: garis y = 0.5 memotong lengkung sin x pada kedua-dua titik itu. Bilangan titik = 2."
   }
  },
  {
   "n": 5,
   "tempat": "Studio Gelombang",
   "sk": "6.2.2 Kesan pemalar a, b dan c ke atas graf",
   "lampiran": "r5",
   "kadNama": "Amplitud dan Tempoh",
   "kadEm": "🎚️",
   "kadFakta": "Bagi y = a sin bx + c: amplitud = a, tempoh = 360° ÷ b, maksimum = a + c, minimum = c − a.",
   "bosKadNama": "Kira Puncak",
   "bosKadEm": "⛰️",
   "bosKadFakta": "Bilangan titik maksimum dalam 0° hingga 360° = 360° ÷ tempoh = b, bagi graf sinus yang bermula pada 0°.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan y = 2 sin 2x + 1. Berapakah nilai maksimum graf itu? Kira dahulu, kemudian semak.",
     "tol": 0.001000000001,
     "b": 3,
     "u": "Maksimum = a + c = 2 + 1 = 3."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah tempoh graf y = 2 sin 2x + 1, dalam darjah?",
     "tol": 0.001000000001,
     "b": 180,
     "u": "Tempoh = 360° ÷ b = 360° ÷ 2 = 180°."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah nilai minimum graf y = 3 kos x − 1?",
     "tol": 0.001000000001,
     "b": -4,
     "u": "Minimum = c − a = −1 − 3 = −4."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah tempoh graf y = sin 3x, dalam darjah?",
     "tol": 0.001000000001,
     "b": 120,
     "u": "Tempoh = 360° ÷ 3 = 120°. Graf berulang tiga kali dalam 0° hingga 360°."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, apakah kesan menambah nilai c?",
     "p": [
      "Graf beralih ke atas",
      "Amplitud graf bertambah sebanyak c",
      "Tempoh graf berkurang menjadi 360° ÷ c",
      "Graf dipantulkan pada paksi-x"
     ],
     "b": 0,
     "u": "c ditambah kepada setiap nilai y, jadi seluruh graf beralih ke atas tanpa mengubah bentuk, amplitud atau tempoh."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, apakah kesan menggandakan nilai b?",
     "p": [
      "Amplitud graf menjadi dua kali",
      "Tempoh graf menjadi separuh",
      "Graf dianjak ke atas sebanyak 2 unit",
      "Nilai maksimum graf menjadi dua kali"
     ],
     "b": 1,
     "u": "Tempoh = 360° ÷ b. Jika b digandakan, tempoh menjadi separuh, jadi gelombang lebih rapat."
    },
    {
     "j": "pilih",
     "t": "Suatu graf mempunyai nilai maksimum 5, nilai minimum 1, tempoh 360°, pintasan-y 3, dan meningkat apabila x bertambah dari 0°. Persamaan graf itu ialah:",
     "p": [
      "y = 3 sin x + 2",
      "y = 2 kos x + 3",
      "y = 2 sin x + 3",
      "y = 2 sin 2x + 3"
     ],
     "b": 2,
     "u": "a = (5 − 1) ÷ 2 = 2, c = (5 + 1) ÷ 2 = 3, b = 360° ÷ 360° = 1. Graf meningkat dari pintasan-y 3, jadi ia graf sinus: y = 2 sin x + 3."
    },
    {
     "j": "nombor",
     "t": "Graf y = a kos bx + c mempunyai nilai maksimum 7, nilai minimum −1 dan tempoh 120°. Cari nilai a + b + c.",
     "tol": 0.001000000001,
     "b": 10,
     "u": "a = (7 − (−1)) ÷ 2 = 4. c = (7 + (−1)) ÷ 2 = 3. b = 360° ÷ 120° = 3. a + b + c = 4 + 3 + 3 = 10."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Berdasarkan Rajah 1, bagi graf y = 3 sin 2x + 1 dalam julat 0° ≤ x ≤ 360°, berapakah bilangan titik maksimum?",
    "tol": 0.001000000001,
    "b": 2,
    "u": "Langkah 1: tempoh = 360° ÷ 2 = 180°. Langkah 2: satu titik maksimum bagi setiap tempoh: x = 45° dan x = 225°. Bilangan titik maksimum = 2."
   }
  },
  {
   "n": 6,
   "tempat": "Pelabuhan",
   "sk": "6.2.3 Masalah graf fungsi trigonometri (bukan rutin)",
   "lampiran": "r6",
   "kadNama": "Pasang Surut",
   "kadEm": "⚓",
   "kadFakta": "Fenomena berulang seperti pasang surut, roda Ferris dan bunyi boleh dimodelkan dengan y = a sin bx + c.",
   "bosKadNama": "Pemodel Gelombang",
   "bosKadEm": "🎡",
   "bosKadFakta": "Untuk membina model, tentukan a daripada separuh julat, c daripada nilai tengah, dan b daripada 360° ÷ tempoh.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gerakkan t kepada 3 jam. Berapakah paras air h, dalam meter?",
     "tol": 0.001000000001,
     "b": 5,
     "u": "h = 2 sin(30 × 3) + 3 = 2 sin 90° + 3 = 2 + 3 = 5 m."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah tempoh kitaran pasang surut, dalam jam?",
     "tol": 0.001000000001,
     "b": 12,
     "u": "Tempoh = 360° ÷ b = 360° ÷ 30° = 12 jam."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, pada jam ke berapakah air surut ke paras terendah buat kali pertama?",
     "tol": 0.001000000001,
     "b": 9,
     "u": "Paras terendah apabila sin(30t) = −1, iaitu 30t = 270°, jadi t = 9 jam."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah paras air pada t = 1 jam, dalam meter?",
     "tol": 0.001000000001,
     "b": 4,
     "u": "h = 2 sin 30° + 3 = 2(0.5) + 3 = 4 m."
    },
    {
     "j": "pilih",
     "t": "Sebuah bot memerlukan paras air sekurang-kurangnya 4 m untuk masuk ke pelabuhan. Berdasarkan Rajah 1, dalam 12 jam pertama bot itu boleh masuk antara:",
     "p": [
      "Jam ke-0 hingga jam ke-6",
      "Jam ke-3 hingga jam ke-9",
      "Jam ke-7 hingga jam ke-11",
      "Jam ke-1 hingga jam ke-5"
     ],
     "b": 3,
     "u": "h ≥ 4 bermaksud sin(30t) ≥ 0.5, iaitu 30° ≤ 30t ≤ 150°. Maka 1 ≤ t ≤ 5."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah beza antara paras air tertinggi dan terendah, dalam meter?",
     "tol": 0.001000000001,
     "b": 4,
     "u": "Tertinggi = 2 + 3 = 5 m, terendah = 3 − 2 = 1 m. Beza = 4 m, iaitu dua kali amplitud."
    },
    {
     "j": "pilih",
     "t": "Pihak pelabuhan mendapati model yang lebih tepat ialah h = 2 sin(15t) + 3. Apakah perubahan berbanding Rajah 1?",
     "p": [
      "Tempoh menjadi 24 jam",
      "Paras maksimum menjadi 4 m",
      "Paras minimum menjadi 0 m",
      "Tempoh berkurang menjadi 6 jam"
     ],
     "b": 0,
     "u": "Tempoh = 360° ÷ 15° = 24 jam. a dan c tidak berubah, jadi paras maksimum (5 m) dan minimum (1 m) kekal."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapa kalikah paras air mencapai 5 m dalam 0 ≤ t ≤ 24?",
     "tol": 0.001000000001,
     "b": 2,
     "u": "h = 5 apabila sin(30t) = 1, iaitu 30t = 90° atau 450°. Maka t = 3 dan t = 15: dua kali."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Bina model trigonometri bagi satu fenomena berulang dan gunakannya untuk membuat keputusan.",
    "arahan": "Pilih satu fenomena, contohnya ketinggian tempat duduk roda Ferris, suhu harian atau paras air sungai. Nyatakan nilai maksimum, nilai minimum dan tempoh yang munasabah, kemudian tentukan a, b dan c bagi model y = a sin bx + c (atau kosinus) dengan menunjukkan pengiraan. Lakar graf bagi satu tempoh dan gunakan model untuk menjawab satu soalan keputusan, contohnya bila ketinggian melebihi suatu nilai. Nyatakan satu had model awak.",
    "u": "Jawapan TP6 yang kukuh memilih fenomena yang berulang, menentukan a, b dan c dengan pengiraan yang betul, melakar graf yang sepadan, menggunakan model untuk keputusan dengan langkah yang jelas, dan menyedari had model."
   }
  }
 ]
};
