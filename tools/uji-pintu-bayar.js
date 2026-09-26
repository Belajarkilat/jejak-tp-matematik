/* Ujian pintu bayaran: tanpa pintasan, murid/guru percuma hanya boleh buka Bab 1-2
   setiap tingkatan; Bab 3 ke atas terkunci dan lencong ke Bab 1.
     BASE=https://jejaktpmath.naikgred.com node tools/uji-pintu-bayar.js */
const { chromium } = require("playwright");
const BASE = process.env.BASE || "http://localhost:8811";
(async () => {
  const b = await chromium.launch();
  let gagal = 0;
  const semak = (ok, teks) => { console.log((ok ? "✓ " : "✗ ") + teks); if (!ok) gagal++; };
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, serviceWorkers: "block" });
    const p = await ctx.newPage();
  await p.goto(BASE + "/index.html?demo=murid", { waitUntil: "load" }); await p.waitForTimeout(1800);
  await p.fill("#namaBebas", "Aina"); await p.click("text=Mula main"); await p.waitForTimeout(1000);
  let pesan = "";
  p.on("dialog", d => { pesan = d.message(); d.dismiss().catch(() => {}); });
  const senarai = await p.evaluate(() => [...document.querySelectorAll("button.terkunci, .terkunci")].map(e => e.innerText.trim().slice(0, 30)));
  semak(senarai.length >= 7, "bab 3 ke atas ditanda terkunci dalam peta (" + senarai.length + " butang terkunci)");
  await p.click(".terkunci"); await p.waitForTimeout(500);
  semak(/premium/i.test(pesan), "klik bab terkunci memaparkan mesej bab premium");
  const babKini = await p.evaluate(() => localStorage.getItem("jm-bab"));
  semak(babKini === "m3b6" || babKini === "m3b1" || babKini === null, "bab semasa tidak bertukar ke bab terkunci");
  await p.click("text=Menara Kuasa"); await p.waitForTimeout(800);
  await p.click('[data-f="stop-1"]'); await p.waitForTimeout(700);
  semak(!!(await p.$(".qtext")), "soalan Bab 1 (percuma) boleh dimainkan");
  const teksDemo = await (async () => { const q = await ctx.newPage(); await q.goto(BASE + "/index.html?demo=cikgu", { waitUntil: "load" }); await q.waitForTimeout(2200); const t = await q.evaluate(() => document.body.innerText); await q.close(); return t; })();
  semak(/RM23/.test(teksDemo) && /Bab 1-2/.test(teksDemo), "kelas contoh guru menyebut Bab 1-2 percuma dan harga perintis RM23");
  semak(!/dibuka percuma/.test(teksDemo), "tiada lagi teks 'semua bab dibuka percuma'");
  await b.close();
  console.log(gagal ? gagal + " gagal" : "semua ujian pintu bayaran lulus");
  process.exit(gagal ? 1 : 0);
})();
