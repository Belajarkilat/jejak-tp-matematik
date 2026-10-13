/* Sumber lawatan landing (12 Okt 2026), ikut corak sumber.js Jejak TP Sains.

   Pautan promosi membawa ?dari=<kod>, cth. landing.html?dari=nani-math.
   Kod pertama disimpan dalam pelayar ("jm-dari"). Satu ping 'lawat'
   dihantar sekali bagi setiap sesi pelayar di landing.html. Ujian automatik
   (localhost, pelayar webdriver) tidak direkod. */
(function(){
  try{
    if(navigator.webdriver||/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;
    var m=/[?&]dari=([^&#]*)/.exec(location.search), kod="";
    if(m) kod=decodeURIComponent(m[1]).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,30);
    if(kod&&!localStorage.getItem("jm-dari")) localStorage.setItem("jm-dari",kod);
    if(sessionStorage.getItem("jm-lawat")) return;
    var awan=window.CN_AWAN; if(!awan) return;
    var p=localStorage.getItem("jm-peranti");
    if(!p||!/^[a-z0-9]{8}$/.test(p)){
      p=Math.random().toString(36).slice(2,10).replace(/[^a-z0-9]/g,"0");
      while(p.length<8) p+="0";
      localStorage.setItem("jm-peranti",p);
    }
    sessionStorage.setItem("jm-lawat","1");
    fetch(awan.url+"/rest/v1/rpc/jm_ping",{
      method:"POST", keepalive:true,
      headers:{"apikey":awan.kunci,"Authorization":"Bearer "+awan.kunci,"Content-Type":"application/json"},
      body:JSON.stringify({p_jenis:"lawat",p_peranti:p,p_nota:kod||localStorage.getItem("jm-dari")||""})
    }).catch(function(){});
  }catch(e){}
})();

/* Klik butang di landing (13 Okt 2026): satu ping 'klik' bagi setiap butang utama.
   nota = daftar | contoh | murid | video. Hanya di landing; sekali bagi setiap jenis setiap sesi. */
(function(){
  try{
    if(!/landing(\.html)?$/.test(location.pathname)) return;
    var awan=window.CN_AWAN; if(!awan) return;
    document.addEventListener("click",function(e){
      try{
        var a=e.target.closest&&e.target.closest("a"); if(!a) return;
        var h=a.getAttribute("href")||"", n="";
        if(/[?&]daftar/.test(h)) n="daftar";
        else if(/demo=cikgu/.test(h)) n="contoh";
        else if(/demo=murid/.test(h)) n="murid";
        else if(h==="#video") n="video";
        if(!n||sessionStorage.getItem("cn-klik-"+n)) return;
        var p=localStorage.getItem("jm-peranti"); if(!p||!/^[a-z0-9]{8}$/.test(p)) return;
        sessionStorage.setItem("cn-klik-"+n,"1");
        fetch(awan.url+"/rest/v1/rpc/jm_ping",{
          method:"POST", keepalive:true,
          headers:{"apikey":awan.kunci,"Authorization":"Bearer "+awan.kunci,"Content-Type":"application/json"},
          body:JSON.stringify({p_jenis:"klik",p_peranti:p,p_nota:n})
        }).catch(function(){});
      }catch(x){}
    });
  }catch(x){}
})();
