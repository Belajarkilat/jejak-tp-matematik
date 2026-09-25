"""Tampalan sekali guna P1 (25 Sep 2026): kritik pakar Matematik/psikologi/UX.
Setiap penggantian mesti berlaku tepat sekali; jika tidak, skrip gagal.
Disimpan sebagai rekod perubahan pada index.html."""
import re, sys
p = 'index.html'
s = open(p, encoding='utf-8').read()

def g(a, b, kali=1):
    global s
    n = s.count(a)
    if n != kali:
        sys.exit('GAGAL (%d kali, jangka %d): %r' % (n, kali, a[:80]))
    s = s.replace(a, b)

# ---- 1. mod tenang lalai (Matematik perlukan masa berfikir) ----
g('masaBos:0, senyap:false, tenang:false,', 'masaBos:0, senyap:false, tenang:true,')
g('S.tenang=!!d.tenang;', 'S.tenang=(d.tenang===undefined)?true:!!d.tenang;')
g('''    ? "Meter nafas dimatikan. Baca selama yang perlu. Cikgu nampak tanda ini pada rekod awak."
    : "Hidupkan jika meter nafas membuat awak tergesa-gesa. Soalan dan markah tetap sama.";''',
  '''    ? "Tiada meter tenaga atau pemasa. Kira selama yang perlu. Cikgu nampak tanda ini pada rekod awak."
    : "Mod cabaran masa: meter tenaga dan pemasa bos dihidupkan. Soalan dan markah tetap sama.";''')
g('''    ? "Mod tenang hidup: meter nafas dimatikan dan cikgu nampak tanda ini pada rekod awak."
    : "Mod tenang mematikan meter nafas. Soalan dan markah tetap sama."''',
  '''    ? "Mod tenang hidup: tiada meter tenaga atau pemasa, supaya awak boleh mengira dengan teliti. Cikgu nampak tanda ini pada rekod awak."
    : "Mod cabaran masa hidup: meter tenaga dan pemasa bos berjalan. Matikan Mod tenang untuk kembali berehat."''')
g('tb.innerHTML=\'<span class="trek" aria-hidden="true"></span>Mod tenang\';', 'tb.innerHTML=\'<span class="trek" aria-hidden="true"></span>Mod tenang (tiada pemasa)\';')

# ---- 2. kuasa tambahan bukan bertema Biologi ----
g('''      if(S.kombo%6===0){ if(S.hemo<3){S.hemo++;kuasaBaru="hemo";} }''',
  '''      if(S.tenang||S.kombo%6===0){ if(S.hemo<3){S.hemo++;kuasaBaru="hemo";} }''')
g('title="Kuasa: inhaler dan hemoglobin"><span aria-hidden="true">💉</span>', 'title="Kuasa: tenaga segar dan petunjuk"><span aria-hidden="true">⚡</span>')
g('''<span aria-hidden="true">🩸</span>''', '''<span aria-hidden="true">🔍</span>''')
g('''bi.innerHTML='<em>\\u{1F489}</em>Inhaler <span class="n">×'+S.inhaler+'</span>';''', '''bi.innerHTML='<em>\\u26A1</em>Tenaga segar <span class="n">×'+S.inhaler+'</span>';''')
g('''bi.title=S.tenang?"Tidak perlu dalam mod tenang":"Isi semula 40 nafas";''', '''bi.title=S.tenang?"Tidak perlu dalam mod tenang":"Isi semula 40 tenaga";''')
g('''bh.innerHTML='<em>\\u{1FA78}</em>Hemoglobin <span class="n">×'+S.hemo+'</span>';''', '''bh.innerHTML='<em>\\u{1F50D}</em>Petunjuk <span class="n">×'+S.hemo+'</span>';''')
g('apung(kuasaBaru==="hemo"?"Hemoglobin!":"Inhaler!"', 'apung(kuasaBaru==="hemo"?"Petunjuk!":"Tenaga segar!"')

# ---- 3. maklum balas jawapan salah: bahasa berkembang, langkah, cuba lagi ----
g('''  var betul=false;
  if(!masaHabis){
    if(q.j==="pilih")betul=S.pilihan===q.b;''',
  '''  /* Cuba lagi: latihan sahaja. Percubaan pertama sudah direkod dan tidak diubah. */
  if(S.retry){
    var b2=false;
    if(q.j==="pilih")b2=S.pilihan===q.b;
    else if(q.j==="banyak")b2=eqSet(S.pilihan,q.b);
    else if(q.j==="susun")b2=eq(S.pilihan,q.b);
    else if(q.j==="nombor")b2=Math.abs(parseFloat(S.pilihan)-q.b)<=(q.tol||0.05);
    S.retryOk=b2; S.disemak=true; bunyi(b2?"betul":"salah"); render();
    return;
  }

  var betul=false;
  if(!masaHabis){
    if(q.j==="pilih")betul=S.pilihan===q.b;''')
g('''function reset(){
  S.pilihan=null; S.disemak=false;''', '''function reset(){
  S.retry=false; S.retryOk=undefined;
  S.pilihan=null; S.disemak=false;''')
g('''    var hantar=(q._betul===null);
    var f=el("div","fb "+(hantar?"ok":(q._betul?"ok":"no")));
    var PUJI=["Betul!","Hebat!","Tepat sekali!","Mantap!"];
    var tajukFb=hantar?"Dihantar kepada cikgu":(q._betul?(S.kombo>=3?"Kombo "+S.kombo+"!":PUJI[S.qi%PUJI.length]):"Belum tepat");
    var emo=hantar?"✉️":(q._betul?(S.kombo>=3?"\\u{1F525}":"\\u{1F389}"):"\\u{1F914}");
    f.innerHTML='<span class="emo" aria-hidden="true">'+emo+'</span><div><b>'+tajukFb+'</b>'+
      (hantar?"Tugasan reka cipta tidak dinilai oleh mesin. Cikgu akan membacanya dan memutuskan hentian 6.":(q.u||""))+'</div>';''',
  '''    var hantar=(q._betul===null);
    var ulang=!!S.retry;
    var okFb=hantar||(ulang?!!S.retryOk:!!q._betul);
    var f=el("div","fb "+(okFb?"ok":"no"));
    var PUJI=["Betul!","Hebat!","Tepat sekali!","Mantap!"];
    var tajukFb, emo;
    if(hantar){ tajukFb="Dihantar kepada cikgu"; emo="✉️"; }
    else if(ulang){ tajukFb=S.retryOk?"Sekarang betul! Awak dah faham":"Belum lagi, tak apa"; emo=S.retryOk?"\\u{1F4AA}":"\\u{1F4A1}"; }
    else if(q._betul){ tajukFb=(S.kombo>=3?"Kombo "+S.kombo+"!":PUJI[S.qi%PUJI.length]); emo=(S.kombo>=3?"\\u{1F525}":"\\u{1F389}"); }
    else { tajukFb="Jom lihat caranya"; emo="\\u{1F4A1}"; }
    f.innerHTML='<span class="emo" aria-hidden="true">'+emo+'</span><div><b>'+tajukFb+'</b>'+
      (hantar?"Tugasan reka cipta tidak dinilai oleh mesin. Cikgu akan membacanya dan memutuskan hentian 6.":langkahHtml(q))+'</div>';''')
g('''    bn.onclick=seterusnya;
    act.appendChild(bn);''', '''    bn.onclick=seterusnya;
    act.appendChild(bn);
    if(q._betul===false && q.j!=="buka" && !(S.retry&&S.retryOk)){
      var bc=el("button","btn ghost sm");bc.type="button";bc.setAttribute("data-f","cuba-lagi");
      bc.textContent="Cuba lagi (latihan)";
      bc.onclick=cubaLagiSoalan;
      act.appendChild(bc);
    }''')
g('''function seterusnya(){''', '''/* Penjelasan dipecah kepada langkah bernombor apabila ia mengandungi dua ayat atau lebih. */
function langkahHtml(q){
  var u=q.u||"";
  var ayat=u.split(/(?<=[.!?])\\s+(?=[A-Z0-9(])/).filter(function(x){return x.trim();});
  if(q.langkah&&q.langkah.length) ayat=q.langkah;
  if(ayat.length<2) return u;
  return '<ol class="langkah">'+ayat.map(function(x){return '<li>'+x+'</li>';}).join("")+'</ol>';
}
function cubaLagiSoalan(){
  var q=S.set[S.qi];
  S.retry=true; S.retryOk=undefined; S.disemak=false; S.buang=[]; S.pilihan=null;
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}

function seterusnya(){''')

# ---- 4. nota di atas soalan dipadatkan kepada satu baris cip ----
g('''  if(!S.tenang&&!S.disemak&&S.tenggangPenuh>=12&&S.tenggang>0)
    bd.appendChild(el("p","qnote baca","Masa membaca: tenaga awak tidak berkurang selama "+Math.round(S.tenggangPenuh)+" saat pertama."));

  if(bos&&!S.disemak&&!S.tenang&&q.j!=="buka"){
    /* dua puluh saat untuk berfikir, ditambah sedikit bagi setiap pilihan,
       dan hanya bermula selepas masa membaca tamat */
    if(S.masaBos===0){ S.masaBosPenuh=20+2*((q.p||[]).length); S.masaBos=S.masaBosPenuh; }
    var bt=el("div","bostimer",'<i id="bosbar" style="width:'+(S.masaBos/S.masaBosPenuh*100)+'%"></i>');
    bd.appendChild(bt);
    bd.appendChild(el("p","qnote","Soalan bos. "+Math.round(S.masaBosPenuh)+" saat untuk menjawab selepas masa membaca, markah tiga kali ganda."));
  }''',
  '''  var chips=[], bt=null;
  if(q.j==="banyak"&&!S.disemak) chips.push("\\u2611 Pilih semua yang betul");
  if(!S.tenang&&!S.disemak&&S.tenggangPenuh>=12&&S.tenggang>0) chips.push("\\u23F3 Baca dahulu "+Math.round(S.tenggangPenuh)+" s");
  if(bos&&!S.disemak&&!S.tenang&&q.j!=="buka"){
    /* dua puluh saat untuk berfikir, ditambah sedikit bagi setiap pilihan,
       dan hanya bermula selepas masa membaca tamat */
    if(S.masaBos===0){ S.masaBosPenuh=20+2*((q.p||[]).length); S.masaBos=S.masaBosPenuh; }
    bt=el("div","bostimer",'<i id="bosbar" style="width:'+(S.masaBos/S.masaBosPenuh*100)+'%"></i>');
    chips.push("\\u23F1 "+Math.round(S.masaBosPenuh)+" s \\u00B7 markah \\u00D73");
  }
  if(chips.length) bd.appendChild(el("div","qchips",chips.map(function(c){return "<span>"+c+"</span>";}).join("")));
  if(bt) bd.appendChild(bt);''')
g('''    if(many&&!S.disemak) body.appendChild(el("p","qnote","Boleh pilih lebih daripada satu."));\n''', '')

# ---- 5. satu butang bunyi dengan panel muzik / bunyi ----
g('''      <button class="icon-btn" id="btnMuzik" title="Muzik latar" aria-label="Tutup muzik latar" aria-pressed="true">&#127925;</button>
      <button class="icon-btn" id="btnBunyi" title="Bunyi dan getaran" aria-label="Hidup atau matikan bunyi dan getaran">&#9834;</button>''',
  '''      <div class="bunyimenu">
        <button class="icon-btn" id="btnBunyi" title="Bunyi, muzik dan getaran" aria-label="Tetapan bunyi, muzik dan getaran" aria-haspopup="true" aria-expanded="false">&#128266;</button>
        <div class="bunyipanel" id="bunyiPanel" hidden>
          <label class="suis"><input type="checkbox" id="swMuzik" checked><span>Muzik latar</span></label>
          <label class="suis"><input type="checkbox" id="swBunyi" checked><span>Bunyi dan getaran</span></label>
        </div>
      </div>''')
g('''$("btnBunyi").onclick=function(){
  S.senyap=!S.senyap;
  $("btnBunyi").innerHTML=S.senyap?"&#9633;":"&#9834;";
  $("btnBunyi").setAttribute("aria-label",S.senyap?"Hidupkan bunyi dan getaran":"Matikan bunyi dan getaran");
  aturDegup(); simpanDiri();
};''',
  '''/* Satu butang bunyi membuka panel kecil: muzik latar, serta bunyi dan getaran. */
function kemasIkonBunyi(){
  var muzik=window.JM_MUZIK?window.JM_MUZIK.hidup():true;
  $("swBunyi").checked=!S.senyap; $("swMuzik").checked=muzik;
  $("btnBunyi").innerHTML=(S.senyap&&!muzik)?"&#128263;":"&#128266;";
}
$("btnBunyi").onclick=function(e){
  e.stopPropagation();
  var p=$("bunyiPanel"), buka=p.hidden;
  p.hidden=!buka; $("btnBunyi").setAttribute("aria-expanded",buka?"true":"false");
  if(buka) kemasIkonBunyi();
};
$("swBunyi").onchange=function(){ S.senyap=!this.checked; kemasIkonBunyi(); aturDegup(); simpanDiri(); };
$("swMuzik").onchange=function(){ if(window.JM_MUZIK) window.JM_MUZIK.set(this.checked); kemasIkonBunyi(); };
document.addEventListener("click",function(e){
  var p=$("bunyiPanel"); if(p.hidden||p.contains(e.target)) return;
  p.hidden=true; $("btnBunyi").setAttribute("aria-expanded","false");
});
document.addEventListener("keydown",function(e){
  if(e.key==="Escape"&&!$("bunyiPanel").hidden){ $("bunyiPanel").hidden=true; $("btnBunyi").focus(); }
});''')
g('''if(S.senyap)$("btnBunyi").innerHTML="&#9633;";''', '''kemasIkonBunyi();''')

# ---- 6. murid tidak perlu nampak butang Cikgu; pautan halus di kaki ----
g('<div class="seg" role="group" aria-label="Tukar mod">', '<div class="seg" id="segMod" role="group" aria-label="Tukar mod">')
g('''    <span>A <span class="ngw"><i>Naik</i><b>Gred</b></span> product</span>
  </footer>''',
  '''    <span>A <span class="ngw"><i>Naik</i><b>Gred</b></span> product</span>
    <a class="untukcikgu" href="?cikgu">Untuk cikgu</a>
  </footer>''')

# ---- 7. warna teks dunia yang lebih cerah dalam tema gelap ----
g('''function pasangDunia(){
  var d=duniaBab(), s=document.body.style;
  s.setProperty("--dunia",d.warna); s.setProperty("--dunia-gelap",d.gelap);
  var gelap=document.documentElement.getAttribute("data-theme")==="dark"||
    (!document.documentElement.getAttribute("data-theme")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);''',
  '''function campurPutih(h,w){
  var n=parseInt(h.slice(1),16),r=n>>16,g=(n>>8)&255,b=n&255;
  return "rgb("+Math.round(r+(255-r)*w)+","+Math.round(g+(255-g)*w)+","+Math.round(b+(255-b)*w)+")";
}
function pasangDunia(){
  var d=duniaBab(), s=document.body.style;
  s.setProperty("--dunia",d.warna); s.setProperty("--dunia-gelap",d.gelap);
  var gelap=document.documentElement.getAttribute("data-theme")==="dark"||
    (!document.documentElement.getAttribute("data-theme")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);
  s.setProperty("--dunia-teks", gelap?campurPutih(d.warna,.5):d.warna);''')

# ---- 8. fail luaran: CSS tambahan, kertas conteng, akses ----
s = s.replace('</head>', '<link rel="stylesheet" href="math-ext.css?v=1">\n</head>', 1)
g('<script src="muzik.js?v=1"></script>', '<script src="muzik.js?v=2"></script>\n<script src="conteng.js?v=1"></script>\n<script src="akses.js?v=1"></script>')

open(p, 'w', encoding='utf-8').write(s)
print('ok')
