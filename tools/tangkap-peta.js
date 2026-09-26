/* Tangkapan skrin peta dan skrin soalan untuk semakan visual.
     BAB=m1b1,m1b13 ARAH=folder node tools/tangkap-peta.js */
const { chromium } = require("playwright");
const path = require("path"), fs = require("fs");
const BASE = process.env.BASE || "http://localhost:8811";
const ARAH = process.env.ARAH || path.join(process.env.TEMP || ".", "peta");
fs.mkdirSync(ARAH, { recursive: true });
(async () => {
  const b = await chromium.launch();
  for (const bab of (process.env.BAB || "m1b1").split(",")) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, serviceWorkers: "block" });
    await require("./_buka").bukaSemua(ctx);
    await ctx.addInitScript(id => { try { localStorage.setItem("jm-bab", id); } catch (e) {} }, bab);
    const p = await ctx.newPage();
    await p.goto(BASE + "/index.html?demo=murid", { waitUntil: "load" }); await p.waitForTimeout(1500);
    await p.fill("#namaBebas", "Aina"); await p.click("text=Mula main"); await p.waitForTimeout(900);
    await p.screenshot({ path: path.join(ARAH, bab + "-peta.png") });
    await p.click('[data-f="stop-1"]'); await p.waitForTimeout(800);
    await p.screenshot({ path: path.join(ARAH, bab + "-soalan.png") });
    await ctx.close();
  }
  await b.close();
})();
