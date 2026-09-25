/* Aksesibiliti untuk ungkapan berindeks.

   Pembaca skrin membaca "3<sup>4</sup>" sebagai "3 4", jadi murid yang
   menggunakannya tidak dapat membezakan 3 kuasa 4 daripada 34. Bagi setiap
   <sup>, teks tersembunyi "kuasa X" ditambah sebelumnya dan <sup> itu sendiri
   ditanda aria-hidden. Tanda tolak Unicode dibaca "negatif". */
(function () {
  "use strict";
  function sebut(t) {
    return String(t).trim().replace(/[−-]/g, "negatif ").replace(/\//g, " per ").replace(/\s+/g, " ");
  }
  function proses(akar) {
    var senarai = akar.querySelectorAll ? akar.querySelectorAll("sup:not([data-sr])") : [];
    for (var i = 0; i < senarai.length; i++) {
      var e = senarai[i];
      e.setAttribute("data-sr", "1"); e.setAttribute("aria-hidden", "true");
      var sr = document.createElement("span");
      sr.className = "sr-sahaja"; sr.textContent = " kuasa " + sebut(e.textContent) + " ";
      if (e.parentNode) e.parentNode.insertBefore(sr, e);
    }
  }
  function mula() {
    proses(document);
    new MutationObserver(function (semua) {
      for (var i = 0; i < semua.length; i++) {
        var n = semua[i].addedNodes;
        for (var j = 0; j < n.length; j++) if (n[j].nodeType === 1) proses(n[j]);
      }
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mula); else mula();
})();
