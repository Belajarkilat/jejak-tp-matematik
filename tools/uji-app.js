/* Ujian pelayar: buka app Matematik pada telefon 390px, main hentian 1,
   uji rajah interaktif, butang muzik dan ralat konsol. Guna:
     node tools/uji-app.js [tangkapan-dir] */
const {chromium}=require('playwright');
const dir=process.argv[2]||'.';
(async()=>{
 const b=await chromium.launch();
 const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});
 const p=await ctx.newPage(); const ralat=[];
 p.on('pageerror',e=>ralat.push('pageerror: '+e.message));
 p.on('console',m=>{ if(m.type()==='error') ralat.push('console: '+m.text()); });
 await p.goto('http://localhost:8811/index.html?demo=murid',{waitUntil:'domcontentloaded'});
 await p.waitForTimeout(2500);
 await p.fill('#namaBebas','Aina'); await p.click('text=Mula main'); await p.waitForTimeout(1200);
 console.log('tajuk:',await p.title());
 console.log('muzik btn:',await p.$('#btnMuzik')!==null);
 await p.screenshot({path:dir+'/u1-peta.png'});
 await p.click('[data-f="stop-1"]'); await p.waitForTimeout(900);
 /* cari soalan yang ada rajah: jawab apa-apa sampai figure.jmi muncul */
 for(let i=0;i<14;i++){
   if(await p.$('figure.jmi')) break;
   const at=await p.$('[data-f="aksi"]'); if(!at) break;
   const opt=await p.$('[data-f^="opt-"]');
   const inp=await p.$('input[type=number],input[inputmode="decimal"],input[inputmode="numeric"],#jawapanNombor');
   if(opt) await opt.click(); else if(inp) await inp.fill('1');
   await p.waitForTimeout(200);
   await p.click('[data-f="aksi"]',{timeout:3000}).catch(()=>{}); await p.waitForTimeout(700);
   await p.click('[data-f="aksi"]',{timeout:3000}).catch(()=>{}); await p.waitForTimeout(700);
 }
 const ada=await p.$('figure.jmi');
 console.log('figure.jmi:',!!ada);
 if(ada){
   await ada.scrollIntoViewIfNeeded(); await p.waitForTimeout(400);
   console.log('petunjuk:',!!(await p.$('.jmi-petunjuk')),' gelongsor:',!!(await p.$('.jmi-baris input[type=range]')));
   const sebelum=await p.$eval('.jmi-svg svg text',e=>e.textContent);
   await p.$eval('.jmi-baris input[type=range]',(e)=>{ e.value=e.min; e.dispatchEvent(new Event('input',{bubbles:true})); });
   await p.waitForTimeout(300);
   const selepas=await p.$eval('.jmi-svg svg text',e=>e.textContent);
   console.log('rajah berubah:',sebelum,'=>',selepas);
   await p.screenshot({path:dir+'/u2-rajah.png'});
 }
 await p.click('#btnMuzik'); await p.waitForTimeout(300);
 console.log('muzik selepas klik:',await p.$eval('#btnMuzik',e=>e.getAttribute('aria-pressed')));
 console.log('ralat:',ralat.length?ralat:'tiada');
 await b.close();
})();
