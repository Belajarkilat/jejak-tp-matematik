/* Audit halaman pendaratan: tangkapan skrin (telefon dan desktop, cerah dan gelap),
   axe (WCAG A dan AA), tatal mendatar, imej rosak dan ralat konsol.
     BASE=http://localhost:8811 node tools/audit-landing.js */
const { chromium } = require("playwright");
const path = require("path"), fs = require("fs");
const BASE = process.env.BASE || "http://localhost:8811";
const ARAH = process.env.ARAH || path.join(process.env.TEMP || ".", "landing");
fs.mkdirSync(ARAH, { recursive: true });
(async () => {
  const b = await chromium.launch();
  const axeSrc = await (await fetch("https://cdn.jsdelivr.net/npm/axe-core@4.10.2/axe.min.js")).text();
  let masalah = 0;
  for (const [nama, vp] of [["hp", { width: 390, height: 844 }], ["desktop", { width: 1280, height: 900 }]]) {
    for (const tema of ["light", "dark"]) {
      const ctx = await b.newContext({ viewport: vp, deviceScaleFactor: 1, colorScheme: tema });
      const p = await ctx.newPage(); const ralat = [], gagal = [];
      p.on("pageerror", e => ralat.push(e.message));
      p.on("console", m => { if (m.type() === "error") ralat.push(m.text().slice(0, 120)); });
      p.on("response", r => { if (r.status() >= 400) gagal.push(r.status() + " " + r.url().slice(0, 90)); });
      await p.goto(BASE + "/landing.html", { waitUntil: "load" }); await p.waitForTimeout(1200);
      await p.evaluate(() => document.querySelectorAll("img[loading=lazy]").forEach(i => { i.loading = "eager"; }));
      await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } window.scrollTo(0, 0); });
      await p.waitForTimeout(600);
      await p.evaluate(src => { (0, eval)(src); }, axeSrc);
      const r = await p.evaluate(async () => {
        const a = await window.axe.run(document, { runOnly: ["wcag2a", "wcag2aa"] });
        const rosak = [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src.slice(-40));
        return { pel: a.violations.map(v => v.id + " (" + v.nodes.length + ") " + v.nodes[0].target.join(" ").slice(0, 60)), mendatar: document.documentElement.scrollWidth > window.innerWidth + 1, rosak };
      });
      const isu = [];
      if (r.pel.length) isu.push("axe: " + r.pel.join("; "));
      if (r.mendatar) isu.push("tatal mendatar");
      if (r.rosak.length) isu.push("imej rosak: " + r.rosak.join(","));
      if (ralat.length) isu.push("ralat: " + ralat.join("; "));
      if (gagal.length) isu.push("permintaan gagal: " + gagal.join("; "));
      console.log(`${isu.length ? "✗" : "✓"} ${nama} ${tema}${isu.length ? " " + isu.join(" | ") : ""}`);
      if (isu.length) masalah++;
      await p.screenshot({ path: path.join(ARAH, `${nama}-${tema}.png`), fullPage: true });
      await ctx.close();
    }
  }
  await b.close();
  process.exit(masalah ? 1 : 0);
})();
