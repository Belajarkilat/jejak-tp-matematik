/* Galeri audit rajah: melukis setiap rajah interaktif pada beberapa keadaan
   dengan tema sebenar app, supaya mata boleh menyemak susun atur.
     node tools/galeri.js  ->  galeri.html  (buka dalam pelayar) */
const fs = require("fs"), path = require("path");
const JMI = require("../interaktif");
const idx = fs.readFileSync("index.html", "utf8");
const css = (idx.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || []).join("\n").replace(/<\/?style[^>]*>/g, "");
const peraturan = css;   /* seluruh CSS app supaya rajah sama seperti dalam app */
let html = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Galeri rajah Matematik</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Lexend:wght@400;600&display=swap">
<style>${peraturan}
body{padding:12px;display:block !important}
h2{font-size:14px;margin:18px 0 6px}.kotak{width:296px;background:var(--surface,#fff);border-radius:14px;padding:12px;margin:0 8px 10px 0;display:inline-block;vertical-align:top;border:1px solid var(--line,#ddd)}
.kotak small{display:block;font:11px DM Mono,monospace;color:var(--ink3,#777);margin-bottom:4px}</style><body class="zon-murid">`;
for(const f of fs.readdirSync("sumber").filter(f => /^m\d+b\d+\.js$/.test(f))){
  const bab = require(path.resolve("sumber", f));
  for(const [k, spec] of Object.entries(bab.lampiran || {})){
    if(!spec || spec.jenis !== "interaktif") continue;
    const ks = JMI.semuaKeadaan(spec);
    const pilih = ks.length <= 3 ? ks : [ks[0], ks[Math.floor(ks.length / 2)], ks[ks.length - 1]];
    html += `<h2>${bab.id}:${k} (${spec.w})</h2>`;
    pilih.forEach(x => { html += `<div class="kotak"><small>${JSON.stringify(x.s)}</small><figure class="figure">${x.svg}</figure></div>`; });
  }
}
fs.writeFileSync("galeri.html", html);
console.log("galeri.html siap");
