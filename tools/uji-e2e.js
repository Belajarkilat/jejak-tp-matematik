/* Ujian hujung ke hujung app sebenar (UI + pangkalan data Matematik):
   guru daftar, cipta kelas, simpan nama murid; murid masuk dengan kod kelas
   dan PIN, main hentian 1 dengan jawapan betul; sahkan percubaan tersimpan
   dalam pangkalan data; kemudian MEMBERSIHKAN semua data ujian (guru berawalan
   "uji-").

     BASE=https://jejaktpmath.naikgred.com node tools/uji-e2e.js
   Lalai BASE = http://localhost:8811. Perlu playwright dan .env (service role). */
const { chromium } = require("playwright");
const fs = require("fs");
const BASE = process.env.BASE || "http://localhost:8811";
const env = {}; fs.readFileSync(".env", "utf8").split(/\r?\n/).forEach(l => { const m = /^([A-Z_]+)=(.*)$/.exec(l); if (m) env[m[1]] = m[2]; });
const SVC = { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: "Bearer " + env.SUPABASE_SERVICE_ROLE_KEY, "Content-Type": "application/json" };
let gagal = 0;
const ok = (b, msg, x) => { console.log((b ? "✓ " : "✗ ") + msg + (b || x === undefined ? "" : "  -> " + String(x).slice(0, 160))); if (!b) gagal++; };

async function bersih() {
  /* padam SEMUA guru ujian (uji-*@example.com) termasuk sisa larian terdahulu */
  const r = await (await fetch(env.SUPABASE_URL + "/auth/v1/admin/users?per_page=200", { headers: SVC })).json();
  let n = 0;
  for (const u of (r.users || [])) if (/^uji-\d+@example\.com$/.test(u.email || "")) { await fetch(env.SUPABASE_URL + "/auth/v1/admin/users/" + u.id, { method: "DELETE", headers: SVC }); n++; }
  const baki = await (await fetch(env.SUPABASE_URL + "/rest/v1/jm_kelas?select=id,nama&nama=like.uji-*", { headers: SVC })).json();
  for (const k of baki) await fetch(env.SUPABASE_URL + "/rest/v1/jm_kelas?id=eq." + k.id, { method: "DELETE", headers: SVC });
  const lagi = await (await fetch(env.SUPABASE_URL + "/rest/v1/jm_kelas?select=id&nama=like.uji-*", { headers: SVC })).json();
  return { guru: n, kelasBaki: Array.isArray(lagi) ? lagi.length : -1 };
}

(async () => {
  const b = await chromium.launch();
  const emel = "uji-" + Date.now() + "@example.com";
  let kodKelas = null, idKelas = null;
  try {
    /* ---- guru ---- */
    const cg = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const g = await cg.newPage(); const ralatG = [];
    g.on("pageerror", e => ralatG.push(e.message));
    await g.goto(BASE + "/index.html?cikgu", { waitUntil: "load" }); await g.waitForTimeout(2500);
    await g.click("text=Belum ada akaun? Daftar"); await g.waitForTimeout(400);
    await g.fill("#m-nama", "Uji Guru"); await g.fill("#m-sekolah", "Uji Sekolah"); await g.fill("#m-emel", emel); await g.fill("#m-kata", "UjiKata123!");
    await g.click("text=Daftar dan mula"); await g.waitForTimeout(3500);
    ok(await g.$("text=Selamat datang, Cikgu Uji Guru").then(x => !!x), "guru daftar dan masuk dashboard");
    await g.click("text=Tambah kelas"); await g.waitForTimeout(600);
    await g.fill("input[type=text]:visible", "uji-3 Amanah"); await g.click("text=Cipta kelas"); await g.waitForTimeout(2500);
    kodKelas = (await g.$eval("#guruKod", e => e.textContent)).trim();
    ok(/^[A-Z0-9]{6}$/.test(kodKelas), "kelas dicipta dengan kod " + kodKelas);
    await g.fill("#senaraiTeks", "Aina\nBudi"); await g.click("text=Simpan nama murid"); await g.waitForTimeout(2500);
    await g.click("#tabSenarai"); await g.waitForTimeout(800);
    const teksJadual = await g.evaluate(() => document.body.innerText);
    const pin = (/\n1\s+(\d{4})/.exec(teksJadual) || [])[1];
    ok(!!pin, "PIN murid dijana (" + pin + ")");
    /* ---- murid ---- */
    const cm = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const m = await cm.newPage(); const ralatM = [];
    m.on("pageerror", e => ralatM.push(e.message));
    await m.goto(BASE + "/index.html", { waitUntil: "load" }); await m.waitForTimeout(2200);
    const kodInput = await m.$("input:visible"); await kodInput.fill(kodKelas);
    await m.click("text=Masuk kelas"); await m.waitForTimeout(2500);
    await m.click("button:has-text('Aina')"); await m.waitForTimeout(1200);
    if (process.env.DEBUG) console.log("   PIN screen:", await m.evaluate(() => document.body.innerText.replace(/\s+/g, " ").slice(0, 250)), "|", await m.evaluate(() => [...document.querySelectorAll("input,button,textarea")].filter(e => e.offsetParent).map(e => e.tagName + "#" + e.id + "[" + (e.type || "") + "|" + (e.getAttribute("data-f") || "") + "|" + (e.innerText || e.placeholder || "").slice(0, 20) + "]").join(" ")));
    ok(await m.$("text=Masukkan PIN 4 nombor").then(x => !!x), "murid pilih nama dan diminta PIN (papan nombor)");
    for (const d of pin) await m.locator("button", { hasText: new RegExp("^" + d + "$") }).first().click();
    await m.waitForTimeout(2500);
    ok(!!(await m.$('[data-f="stop-1"]')), "PIN betul diterima, peta hentian dipaparkan", (await m.evaluate(() => document.body.innerText)).replace(/\s+/g, " ").slice(0, 160));
    /* ---- murid main hentian 1 dengan jawapan betul ---- */
    await m.click('[data-f="stop-1"]'); await m.waitForTimeout(800);
    const teks = h => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    const bersihHtml = e => { const c = e.cloneNode(true); c.querySelectorAll(".sr-sahaja").forEach(x => x.remove()); c.querySelectorAll("[data-sr]").forEach(x => { x.removeAttribute("data-sr"); x.removeAttribute("aria-hidden"); }); return c.innerHTML; };
    let dijawab = 0;
    for (let langkah = 0; langkah < 40; langkah++) {
      const soalan = await m.$(".qtext"); const aksi = await m.$('[data-f="aksi"]');
      if (!soalan) { if (aksi) { await aksi.click().catch(() => {}); await m.waitForTimeout(350); continue; } break; }
      const tq = teks(await soalan.evaluate(bersihHtml));
      const cari = await m.evaluate(({ tq }) => {
        const strip = h => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
        const bank = window.BANK.m3b1;
        for (const a of bank.aras) for (const q of a.soalan.concat([a.bos])) if (strip(q.t) === tq) return { j: q.j, p: q.p ? q.p.map(x => String(x).replace(/\s+/g, " ").trim()) : null, b: q.b };
        return null;
      }, { tq });
      if (!cari) break;
      const opts = await m.$$eval('[data-f^="opt-"]', els => els.map(e => { const c = e.querySelector("span:last-child").cloneNode(true); c.querySelectorAll(".sr-sahaja").forEach(x => x.remove()); c.querySelectorAll("[data-sr]").forEach(x => { x.removeAttribute("data-sr"); x.removeAttribute("aria-hidden"); }); return { f: e.getAttribute("data-f"), t: c.innerHTML.replace(/\s+/g, " ").trim() }; }));
      const ke = t => (opts.find(o => o.t === t) || {}).f;
      if (cari.j === "pilih") await m.click(`[data-f="${ke(cari.p[cari.b])}"]`);
      else if (cari.j === "banyak" || cari.j === "susun") for (const i of cari.b) await m.click(`[data-f="${ke(cari.p[i])}"]`);
      else if (cari.j === "nombor") await m.fill('[data-f="num"]', String(cari.b));
      await m.click('[data-f="aksi"]', { timeout: 4000 }).catch(() => {}); await m.waitForTimeout(400);
      await m.click('[data-f="aksi"]', { timeout: 3000 }).catch(() => {}); await m.waitForTimeout(350);
      dijawab++;
    }
    ok(dijawab >= 5, "murid menjawab " + dijawab + " soalan hentian 1 dengan betul");
    await m.waitForTimeout(3000);
    /* ---- sahkan rekod dalam pangkalan data ---- */
    const kelasBaris = await (await fetch(env.SUPABASE_URL + "/rest/v1/jm_kelas?select=id&kod=eq." + kodKelas, { headers: SVC })).json();
    idKelas = kelasBaris[0] && kelasBaris[0].id;
    const cub = await (await fetch(env.SUPABASE_URL + "/rest/v1/jm_cubaan?select=bab,aras,no,kali,pertama&kelas=eq." + idKelas, { headers: SVC })).json();
    ok(Array.isArray(cub) && cub.length >= 1 && cub[0].bab === "m3b1" && cub[0].aras === 1, "percubaan murid tersimpan dalam pangkalan data (m3b1 hentian 1)", JSON.stringify(cub).slice(0, 200));
    if (cub[0] && cub[0].pertama) ok(cub[0].pertama.mod === "tenang" && cub[0].pertama.lulus === true, "rekod ditanda mod tenang dan lulus (semua jawapan betul)", JSON.stringify(cub[0].pertama).slice(0, 160));
    ok(ralatM.length === 0 && ralatG.length === 0, "tiada ralat JavaScript (guru/murid)", ralatM.concat(ralatG).join(" | "));
  } catch (e) {
    console.log("✗ ralat ujian: " + e.message.split("\n")[0]); gagal++;
  } finally {
    const h = await bersih();
    ok(h.kelasBaki === 0, `pembersihan: ${h.guru} guru ujian dipadam, baki kelas ujian ${h.kelasBaki}`);
    await b.close();
  }
  console.log(gagal ? gagal + " ujian gagal" : "semua ujian E2E lulus");
  process.exit(gagal ? 1 : 0);
})();
