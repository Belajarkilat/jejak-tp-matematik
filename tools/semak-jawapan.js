/* Semakan jawapan bebas untuk sumber bab Matematik.
   Guna: node tools/semak-jawapan.js m3b1 [m3b2 ...]
   1. Soalan dengan medan kira(): nilai yang dikira mesti sama dengan jawapan.
   2. Pilihan berangka: hanya SATU pilihan boleh bernilai sama dengan jawapan.
   3. Senarai bacaan (--senarai) mencetak semua soalan untuk semakan mata. */
const path = require("path");
const nyah = t => String(t).replace(/<sup>(.*?)<\/sup>/g, "^($1)").replace(/<[^>]+>/g, "");
const nombor = t => { const x = nyah(t).replace(/^RM\s*/i, "").replace(/\s*(mm|cm|kali|%)$/i, "").replace(/\s+/g, "").replace("−", "-"); return /^-?\d+(\.\d+)?$/.test(x) ? parseFloat(x) : null; };
let gagal = 0, dikira = 0, jumlah = 0;
const hujah = process.argv.slice(2), senarai = hujah.includes("--senarai");
for(const id of hujah.filter(x => !x.startsWith("--"))){
  const bab = require(path.resolve("sumber", id + ".js"));
  bab.aras.forEach(a => a.soalan.concat([a.bos]).forEach((q, k) => {
    jumlah++;
    const kod = `${id} H${a.n} S${k + 1}`;
    if(senarai){
      console.log(`\n[${kod}] ${q.j}  ${nyah(q.t)}`);
      if(q.p) q.p.forEach((x, i) => console.log(`   ${(q.j==="banyak"?q.b.includes(i):q.j==="pilih"?i===q.b:true)?"✔":" "} ${nyah(x)}`));
      if(q.j === "nombor") console.log(`   = ${q.b} (±${q.tol}) ${q.suf||""}`);
      console.log(`   u: ${nyah(q.u||"")}`);
    }
    if(q.kira){
      dikira++;
      const v = q.kira();
      let ok;
      if(typeof v === "boolean") ok = v;
      else if(q.j === "nombor") ok = Math.abs(v - q.b) < 1e-9;
      else if(q.j === "pilih"){ const n = nombor(q.p[q.b]); ok = n !== null && Math.abs(n - v) < 1e-9; }
      else ok = false;
      if(!ok){ gagal++; console.log(`✗ ${kod}: kira()=${v} tetapi jawapan ialah ${q.j==="nombor"?q.b:nyah(q.p[q.b])}`); }
    }
    if(q.j === "pilih"){
      const bet = nombor(q.p[q.b]);
      if(bet !== null && !q.sama){
        const sama = q.p.filter((x, i) => i !== q.b && nombor(x) === bet);
        if(sama.length){ gagal++; console.log(`✗ ${kod}: pilihan lain bernilai sama dengan jawapan (${bet})`); }
      }
      if(new Set(q.p.map(nyah)).size !== q.p.length){ gagal++; console.log(`✗ ${kod}: pilihan berulang selepas buang tag`); }
    }
  }));
}
console.log(`\n${jumlah} item, ${dikira} disemak dengan kira(), ${gagal} masalah`);
process.exit(gagal ? 1 : 0);
