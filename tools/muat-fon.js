/* Muat turun fon Google dan simpan dalam app (fon/), supaya app tidak
   bergantung pada Google Fonts. Wifi sekolah sering perlahan atau menyekat
   domain luar, dan fon yang gagal dimuat menukar reka letak seluruh app.

   Hanya subset "latin" dan "latin-ext" disimpan (cukup untuk Bahasa Melayu).
     node tools/muat-fon.js            (perlu sambungan internet, sekali sahaja)  */
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const URL_CSS = "https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Figtree:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
(async () => {
  const css = await (await fetch(URL_CSS, { headers: { "User-Agent": UA } })).text();
  fs.mkdirSync("fon", { recursive: true });
  const blok = css.split(/(?=\/\* [a-z-]+ \*\/)/).filter(b => /^\/\* (latin|latin-ext) \*\//.test(b));
  if (!blok.length) throw new Error("tiada subset latin dalam CSS Google");
  let keluar = "/* Dijana oleh tools/muat-fon.js. Jangan sunting. */\n";
  for (const b of blok) {
    const u = b.match(/url\((https:[^)]+)\)/);
    if (!u) continue;
    const data = Buffer.from(await (await fetch(u[1], { headers: { "User-Agent": UA } })).arrayBuffer());
    const nama = crypto.createHash("sha1").update(data).digest("hex").slice(0, 12) + ".woff2";
    fs.writeFileSync(path.join("fon", nama), data);
    keluar += b.replace(u[0], `url(${nama})`).replace(/^\/\* [a-z-]+ \*\/\n?/, "").trim() + "\n";
  }
  fs.writeFileSync("fon/fon.css", keluar);
  console.log(blok.length + " subset fon disimpan, " + fs.readdirSync("fon").filter(f => f.endsWith(".woff2")).length + " fail woff2");
})().catch(e => { console.error(e.message); process.exit(1); });
