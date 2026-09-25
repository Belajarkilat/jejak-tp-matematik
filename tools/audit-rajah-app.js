/* Audit UI/UX rajah interaktif DALAM app: setiap lampiran bab disisipkan pada skrin
   soalan sebenar (gaya sebenar), dalam tema cerah dan gelap pada telefon 390px.
   Semak: kontras dan aksesibiliti (axe) pada setiap keadaan gelongsor (min, tengah,
   maks), tatal mendatar, saiz sasaran sentuh gelongsor, dan tangkapan skrin.
     BAB=m3b6,m3b7 node tools/audit-rajah-app.js   (perlu server 8811 dan internet untuk axe)
   Tangkapan skrin disimpan di ARAH (lalai: scratchpad/rajah-app). */
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const BASE = process.env.BASE || "http://localhost:8811";
const BAB = (process.env.BAB || "m3b1").split(",");
const ARAH = process.env.ARAH || path.join(process.env.TEMP || ".", "rajah-app");
fs.mkdirSync(ARAH, { recursive: true });
(async () => {
  const b = await chromium.launch();
  const axeSrc = await (await fetch("https://cdn.jsdelivr.net/npm/axe-core@4.10.2/axe.min.js")).text();
  let masalah = 0;
  for (const bab of BAB) for (const tema of ["light", "dark"]) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, colorScheme: tema });
    await ctx.addInitScript(id => { try { localStorage.setItem("jm-bab", id); } catch (e) {} }, bab);
    const p = await ctx.newPage(); const ralat = [];
    p.on("pageerror", e => ralat.push("pageerror: " + e.message));
    await p.goto(BASE + "/index.html?demo=murid", { waitUntil: "load" }); await p.waitForTimeout(1500);
    await p.fill("#namaBebas", "Aina"); await p.click("text=Mula main"); await p.waitForTimeout(800);
    await p.click('[data-f="stop-1"]'); await p.waitForTimeout(700);
    const kunci = await p.evaluate(id => Object.keys(window.BANK[id].lampiran || {}), bab);
    for (const k of kunci) {
      await p.evaluate(({ id, k }) => {
        document.querySelectorAll("figure.jmi").forEach(f => f.remove());
        const q = document.querySelector(".qtext"); const h = window.BANK[id].lampiran[k];
        q.insertAdjacentHTML("afterend", h); window.JMI.hidupkan(document);
      }, { id: bab, k });
      await p.waitForTimeout(200);
      const info = await p.evaluate(() => {
        const f = document.querySelector("figure.jmi"); if (!f) return null;
        const r = f.querySelector('input[type="range"]');
        return { slider: r ? { min: +r.min, max: +r.max } : null, cabar: f.classList.contains("cabar") };
      });
      if (!info) continue; /* lampiran statik (bukan interaktif) */
      const nilai = info.slider ? [info.slider.min, Math.round((info.slider.min + info.slider.max) / 2), info.slider.max] : [null];
      for (const v of nilai) {
        if (v !== null) await p.evaluate(v => {
          const r = document.querySelector('figure.jmi input[type="range"]');
          r.value = v; r.dispatchEvent(new Event("input", { bubbles: true }));
        }, v);
        if (info.cabar) await p.evaluate(() => document.querySelector("figure.jmi").classList.add("tunjuk"));
        await p.waitForTimeout(80);
        await p.evaluate(src => { if (!window.axe) (0, eval)(src); }, axeSrc);
        const hasil = await p.evaluate(async () => {
          const r = await window.axe.run(document.querySelector("figure.jmi"), { runOnly: ["wcag2a", "wcag2aa"] });
          const f = document.querySelector("figure.jmi").getBoundingClientRect();
          const sl = document.querySelector('figure.jmi input[type="range"]');
          const sb = sl ? sl.getBoundingClientRect() : null;
          return {
            pel: r.violations.map(v => v.id + " (" + v.nodes.length + ") " + v.nodes[0].target.join(" ").slice(0, 50)),
            lebihLebar: document.documentElement.scrollWidth > window.innerWidth + 1,
            lebarRajah: Math.round(f.width),
            tinggiSlider: sb ? Math.round(sb.height) : null
          };
        });
        const isu = [];
        if (hasil.pel.length) isu.push("axe: " + hasil.pel.join("; "));
        if (hasil.lebihLebar) isu.push("tatal mendatar");
        if (hasil.tinggiSlider !== null && hasil.tinggiSlider < 24) isu.push("gelongsor terlalu nipis: " + hasil.tinggiSlider + "px");
        if (isu.length) { masalah++; console.log(`✗ ${bab} ${tema} ${k} v=${v}: ${isu.join(" | ")}`); }
        if (v === nilai[nilai.length - 1] || v === nilai[1]) {
          const el = await p.$("figure.jmi");
          await el.screenshot({ path: path.join(ARAH, `${bab}-${k}-${tema}-${v === nilai[1] ? "t" : "m"}.png`) }).catch(() => {});
        }
      }
    }
    if (ralat.length) { masalah += ralat.length; ralat.forEach(x => console.log(`✗ ${bab} ${tema}: ${x}`)); }
    console.log(`${bab} ${tema}: ${kunci.length} lampiran diperiksa`);
    await ctx.close();
  }
  await b.close();
  console.log(masalah ? `${masalah} masalah` : "bersih");
  process.exit(masalah ? 1 : 0);
})();
