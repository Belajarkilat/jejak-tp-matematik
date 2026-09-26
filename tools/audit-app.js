/* Audit app dalam pelayar: ralat konsol, permintaan gagal, teks Sains yang
   tertinggal, dashboard guru pada bab Matematik, dan aksesibiliti (axe-core)
   pada skrin utama dalam tema cerah dan gelap.
     node tools/audit-app.js   (perlu server 8811 dan sambungan internet untuk axe) */
const { chromium } = require("playwright");
const BASE = process.env.BASE || "http://localhost:8811";
const fs = require("fs");
(async () => {
  const b = await chromium.launch();
  const laporan = [];
  const axeSrc = await (await fetch("https://cdn.jsdelivr.net/npm/axe-core@4.10.2/axe.min.js")).text();
  for (const tema of ["light", "dark"]) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, serviceWorkers: "block", colorScheme: tema });
    await require("./_buka").bukaSemua(ctx);
    await ctx.addInitScript(id => { try { localStorage.setItem("jm-bab", id); } catch (e) {} }, process.env.BAB || "m3b1");
    const p = await ctx.newPage(); const ralat = [], gagal = [];
    p.on("pageerror", e => ralat.push("pageerror: " + e.message));
    p.on("console", m => { if (m.type() === "error") ralat.push("console: " + m.text().slice(0, 140)); });
    p.on("response", r => { if (r.status() >= 400) gagal.push(r.status() + " " + r.url().slice(0, 100)); });
    p.on("requestfailed", r => gagal.push("GAGAL " + r.url().slice(0, 100)));
    const axe = async (nama) => {
      await p.evaluate(src => { if (!window.axe) (0, eval)(src); }, axeSrc);
      const r = await p.evaluate(async () => (await window.axe.run({ exclude: [[".ngw"]] }, { runOnly: ["wcag2a", "wcag2aa"] })).violations.map(v => ({ id: v.id, kesan: v.impact, n: v.nodes.length, contoh: v.nodes[0].target.join(" ").slice(0, 60), ringkas: v.help })));
      laporan.push({ tema, skrin: nama, pelanggaran: r });
    };
    await p.goto(BASE + "/index.html?demo=murid", { waitUntil: "load" }); await p.waitForTimeout(1800);
    await axe("nama murid");
    await p.fill("#namaBebas", "Aina"); await p.click("text=Mula main"); await p.waitForTimeout(900);
    await axe("peta");
    await p.click('[data-f="stop-1"]'); await p.waitForTimeout(700);
    await axe("soalan");
    const teksMurid = await p.evaluate(() => document.body.innerText);
    if (/sains|inhaler|hemoglobin|nafas|peparu/i.test(teksMurid)) ralat.push("teks Sains/Biologi tertinggal pada skrin murid: " + (teksMurid.match(/sains|inhaler|hemoglobin|nafas|peparu/i) || [])[0]);
    /* dashboard guru demo */
    await p.goto(BASE + "/index.html?demo=cikgu", { waitUntil: "load" }); await p.waitForTimeout(2200);
    const teksGuru = await p.evaluate(() => document.body.innerText);
    if (/sains/i.test(teksGuru)) ralat.push("teks 'Sains' pada dashboard guru: " + (teksGuru.match(/.{0,40}sains.{0,40}/i) || [])[0]);
    for (const [id, nama] of [["tabPapan", "papan"], ["tabSenarai", "nama & PIN"], ["tabDiag", "diagnostik"], ["tabTangga", "tangga TP"]]) {
      await p.evaluate(i => { const e = document.getElementById(i); e && e.click(); }, id); await p.waitForTimeout(500);
      const t = await p.evaluate(() => document.body.innerText);
      if (/sains/i.test(t)) ralat.push(`teks 'Sains' pada tab ${nama}: ` + (t.match(/.{0,40}sains.{0,40}/i) || [])[0]);
      if (id === "tabTangga" && !/Matematik|Indeks|indeks/.test(t)) ralat.push("Tangga TP tidak menunjukkan kandungan Matematik");
    }
    await axe("dashboard guru");
    laporan.push({ tema, skrin: "sesi", ralat, gagal: [...new Set(gagal)] });
    await ctx.close();
  }
  await b.close();
  let masalah = 0;
  for (const l of laporan) {
    if (l.pelanggaran) {
      console.log(`\n[${l.tema}] ${l.skrin}: ${l.pelanggaran.length} jenis pelanggaran axe`);
      l.pelanggaran.forEach(v => { console.log(`   ${v.kesan.padEnd(8)} ${v.id} (${v.n}) ${v.contoh} — ${v.ringkas}`); masalah++; });
    } else {
      console.log(`\n[${l.tema}] ralat konsol/teks: ${l.ralat.length ? "" : "tiada"}`);
      l.ralat.forEach(x => { console.log("   ✗ " + x); masalah++; });
      console.log(`[${l.tema}] permintaan gagal: ${l.gagal.length ? "" : "tiada"}`);
      l.gagal.forEach(x => console.log("   ! " + x));
    }
  }
  process.exit(masalah ? 1 : 0);
})();
