/* Widget Tingkatan 1 Bab 11 Pengenalan Set: W.t1set dengan empat mod.

   Mod (c.mod):
   - sifat  : set A daripada perihalan. Gelongsor memilih set A (c.kriteria) dan
              objek x (c.unsur = true). Paparan: perihalan, penyenaraian,
              tatatanda pembina set, n(A), dan x ∈ A atau x ∉ A.
   - venn   : set semesta ξ = {1, ..., 12}, set A dan pelengkap A'. Gelongsor
              memilih set A. Nombor disusun di dalam atau di luar A.
   - subset : set A = c.A dan subset B. Gelongsor memilih salah satu daripada
              2^n subset (kosong hingga A sendiri), dilukis dalam gambar rajah Venn.
   - sama   : set A dibandingkan dengan set B (c.calon). Gelongsor memilih B.
              Papar sama atau tidak sama, dan sebabnya.

   Semua nombor dan senarai dikira daripada formula dalam kira(). Unsur jawapan
   dilukis dalam elemen class "jmi-hasil" supaya tersembunyi dalam mod cabar.
   Fail ini didaftar oleh interaktif.js (Node) atau dimuatkan selepas
   interaktif.js dalam pelayar. */
function daftarT1Set(JMI) {
  "use strict";
  var h = JMI.h, teks = h.teks, garis = h.garis, kotak = h.kotak, svg = h.svg, w = h.w, b1 = h.b1, LEBAR = h.LEBAR;
  var W = JMI.W;
  var N = 12;

  /* Perpustakaan kriteria bagi set A dalam semesta {1, ..., 12}.
     perihal = perihalan; tt = syarat dalam tatatanda pembina set. */
  var KRI = {
    genap:    { nama: "genap", perihal: "nombor genap", tt: "x nombor genap", fn: function (x) { return x % 2 === 0; } },
    ganjil:   { nama: "ganjil", perihal: "nombor ganjil", tt: "x nombor ganjil", fn: function (x) { return x % 2 === 1; } },
    perdana:  { nama: "perdana", perihal: "nombor perdana", tt: "x nombor perdana", fn: function (x) { if (x < 2) return false; for (var d = 2; d * d <= x; d++) if (x % d === 0) return false; return true; } },
    gandaan3: { nama: "gandaan 3", perihal: "gandaan 3", tt: "x gandaan 3", fn: function (x) { return x % 3 === 0; } },
    gandaan4: { nama: "gandaan 4", perihal: "gandaan 4", tt: "x gandaan 4", fn: function (x) { return x % 4 === 0; } },
    gandaan13:{ nama: "gandaan 13", perihal: "gandaan 13", tt: "x gandaan 13", fn: function (x) { return x % 13 === 0; } },
    faktor12: { nama: "faktor 12", perihal: "faktor bagi 12", tt: "x faktor bagi 12", fn: function (x) { return 12 % x === 0; } },
    faktor10: { nama: "faktor 10", perihal: "faktor bagi 10", tt: "x faktor bagi 10", fn: function (x) { return 10 % x === 0; } },
    kurang6:  { nama: "kurang 6", perihal: "nombor kurang daripada 6", tt: "x < 6", fn: function (x) { return x < 6; } },
    lebih8:   { nama: "lebih 8", perihal: "nombor lebih besar daripada 8", tt: "x > 8", fn: function (x) { return x > 8; } },
    kuasa2:   { nama: "kuasa dua", perihal: "kuasa dua sempurna", tt: "x kuasa dua sempurna", fn: function (x) { var r = Math.round(Math.sqrt(x)); return r * r === x; } },
    gk9:      { nama: "genap < 9", perihal: "genap dan kurang daripada 9", tt: "x genap, x < 9", fn: function (x) { return x % 2 === 0 && x < 9; } },
    go6:      { nama: "ganjil > 6", perihal: "ganjil dan lebih besar daripada 6", tt: "x ganjil, x > 6", fn: function (x) { return x % 2 === 1 && x > 6; } }
  };
  function kriteria(c, k) {
    var id = c.kriteria[k];
    if (!KRI[id]) throw new Error("kriteria set " + id + " tidak dikenali");
    return KRI[id];
  }
  function ahli(kr) { var a = []; for (var x = 1; x <= N; x++) if (kr.fn(x)) a.push(x); return a; }
  function pelengkap(a) { var p = []; for (var x = 1; x <= N; x++) if (a.indexOf(x) < 0) p.push(x); return p; }
  function dalam(a, x) { return a.indexOf(x) >= 0; }

  /* Senarai ahli sebagai baris teks: "A = {2, 4, 6}". Pecah selepas koma jika terlalu panjang. */
  function senaraiBaris(nama, arr, maks) {
    if (!arr.length) return [nama + " = { }"];
    var semua = nama + " = {" + arr.join(", ") + "}";
    if (semua.length <= maks) return [semua];
    var pref = nama + " = {", cur = pref, lines = [], i, t;
    for (i = 0; i < arr.length; i++) {
      t = String(arr[i]) + (i < arr.length - 1 ? "," : "}");
      var sambung = (cur === pref || cur === "    ") ? cur + t : cur + " " + t;
      if (sambung.length > maks && cur !== pref && cur !== "    ") { lines.push(cur); sambung = "    " + t; }
      cur = sambung;
    }
    lines.push(cur);
    return lines;
  }
  function bulatan(x, y, r, isi, tepi, tebal) {
    return '<circle cx="' + b1(x) + '" cy="' + b1(y) + '" r="' + r + '" fill="' + (isi ? w(isi) : "none") + '" stroke="' + w(tepi) + '" stroke-width="' + (tebal || 1.5) + '"></circle>';
  }
  function elips(cx, cy, rx, ry, isi, tepi, tebal, putus) {
    return '<ellipse cx="' + b1(cx) + '" cy="' + b1(cy) + '" rx="' + b1(rx) + '" ry="' + b1(ry) + '" fill="' + (isi ? w(isi) : "none") + '" stroke="' + w(tepi) + '" stroke-width="' + (tebal || 2) + '"' + (putus ? ' stroke-dasharray="' + putus + '"' : "") + "></ellipse>";
  }
  function hasilG(isi) { return isi ? '<g class="jmi-hasil">' + isi + "</g>" : ""; }
  function no(x) { return String(x); }

  /* ---------- mod sifat ---------- */
  function kiraSifat(c, s) {
    var kr = kriteria(c, s.k), a = ahli(kr), x = s.p + 1;
    return { perihal: kr.perihal, tt: kr.tt, A: a, n: a.length, kosong: a.length === 0, x: x, xDalam: dalam(a, x), senarai: senaraiBaris("A", a, 26) };
  }
  function tinggiSifat(c) {
    var mak = 1;
    for (var k = 0; k < c.kriteria.length; k++) mak = Math.max(mak, senaraiBaris("A", ahli(kriteria(c, k)), 26).length);
    return 194 + mak * 17 + (c.unsur ? 20 : 0) + 14;
  }
  function lukisSifat(c, s) {
    var r = kiraSifat(c, s), isi = "", i, lajur, baris, cx, cy;
    isi += teks(10, 20, "Set A dalam ξ ialah set semua", { saiz: 11, warna: "tinta3" });
    isi += teks(10, 38, r.perihal, { saiz: 12, warna: "tinta", tebal: true });
    var bg = "", nb = "";
    for (i = 1; i <= N; i++) {
      lajur = (i - 1) % 6; baris = Math.floor((i - 1) / 6);
      cx = 32 + lajur * 39; cy = 70 + baris * 36;
      isi += bulatan(cx, cy, 14, "kertas", "garis2", 1.3);
      if (dalam(r.A, i)) bg += bulatan(cx, cy, 14, "hijauLembut", "hijau", 2.2);
      if (c.unsur && i === r.x) nb += bulatan(cx, cy, 17.5, null, "kuning", 2.6);
    }
    isi += hasilG(bg) + nb;
    for (i = 1; i <= N; i++) {
      lajur = (i - 1) % 6; baris = Math.floor((i - 1) / 6);
      isi += teks(32 + lajur * 39, 74 + baris * 36, no(i), { saiz: 12, warna: "tinta", tebal: true, tengah: true });
    }
    var y = 156;
    isi += teks(10, y, "ξ = {1, 2, 3, ..., 12}", { saiz: 11, warna: "tinta3" });
    y += 20;
    isi += teks(10, y, "A = {" + r.tt + "}", { saiz: 11, warna: "tinta2", tebal: true });
    y += 18;
    r.senarai.forEach(function (b) { isi += teks(10, y, b, { saiz: 12, warna: "hijau", tebal: true, hasil: true }); y += 17; });
    isi += teks(10, y, "n(A) = " + r.n, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
    if (c.unsur) {
      y += 20;
      isi += teks(10, y, r.x + (r.xDalam ? " ∈ A  (unsur bagi A)" : " ∉ A  (bukan unsur A)"), { saiz: 12, warna: r.xDalam ? "hijau" : "merah", tebal: true, hasil: true });
    }
    return svg(tinggiSifat(c), isi, "Rajah set A daripada " + r.perihal + " dalam set semesta 1 hingga 12; unsur A ialah " + (r.A.length ? r.A.join(", ") : "tiada") + " dan n(A) = " + r.n);
  }

  /* ---------- mod venn ---------- */
  var VE = { cx: 95, cy: 71, rx: 72, ry: 46 };
  function slotDalam(i) { return [59 + (i % 4) * 24, 52 + Math.floor(i / 4) * 21]; }
  function slotLuar(i) { return [190 + (i % 3) * 24, 30 + Math.floor(i / 3) * 22]; }
  function kiraVenn(c, s) {
    var kr = kriteria(c, s.k), a = ahli(kr), p = pelengkap(a);
    return { perihal: kr.perihal, A: a, komp: p, nA: a.length, nK: p.length, nS: N, lA: senaraiBaris("A", a, 30), lK: senaraiBaris("A'", p, 30) };
  }
  function tinggiVenn(c) {
    var mak = 2;
    for (var k = 0; k < c.kriteria.length; k++) { var r = kiraVenn(c, { k: k }); mak = Math.max(mak, r.lA.length + r.lK.length); }
    return 176 + mak * 16 + 22 + 8;
  }
  function lukisVenn(c, s) {
    var r = kiraVenn(c, s), isi = "", i, p;
    isi += kotak(8, 8, 244, 126, { garis: "tinta3", tebal: 1.5, bulat: 4 });
    isi += elips(VE.cx, VE.cy, VE.rx, VE.ry, "hijauLembut", "hijau", 2.4);
    isi += teks(14, 24, "ξ", { saiz: 13, warna: "tinta", tebal: true });
    isi += teks(VE.cx, 40, "A", { saiz: 13, warna: "hijau", tebal: true, tengah: true });
    var num = "";
    for (i = 0; i < r.A.length; i++) { p = slotDalam(i); num += teks(p[0], p[1] + 4, no(r.A[i]), { saiz: 12, warna: "tinta", tebal: true, tengah: true }); }
    for (i = 0; i < r.komp.length; i++) { p = slotLuar(i); num += teks(p[0], p[1] + 4, no(r.komp[i]), { saiz: 12, warna: "tinta", tebal: true, tengah: true }); }
    isi += hasilG(num);
    var y = 152;
    isi += teks(10, y, "ξ = {1, 2, 3, ..., 12}", { saiz: 11, warna: "tinta3" });
    y += 16;
    isi += teks(10, y, "A = " + r.perihal, { saiz: 11, warna: "hijau", tebal: true });
    y += 20;
    r.lA.forEach(function (b) { isi += teks(10, y, b, { saiz: 12, warna: "hijau", tebal: true, hasil: true }); y += 16; });
    r.lK.forEach(function (b) { isi += teks(10, y, b, { saiz: 12, warna: "merah", tebal: true, hasil: true }); y += 16; });
    isi += teks(10, y + 2, "n(A) = " + r.nA + "   n(A') = " + r.nK + "   n(ξ) = " + r.nS, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
    return svg(tinggiVenn(c), isi, "Rajah Venn: set semesta 1 hingga 12, set A ialah " + r.perihal + " dengan " + r.nA + " unsur, dan pelengkap A' mempunyai " + r.nK + " unsur");
  }

  /* ---------- mod subset ---------- */
  function kiraSubset(c, s) {
    var n = c.A.length, B = [], i;
    for (i = 0; i < n; i++) if (Math.floor(s.i / Math.pow(2, i)) % 2 === 1) B.push(c.A[i]);
    return { A: c.A, n: n, B: B, nB: B.length, jumlah: Math.pow(2, n), sama: B.length === n, kosong: B.length === 0 };
  }
  function lukisSubset(c, s) {
    var r = kiraSubset(c, s), isi = "", i, n = r.n, sp = 32, mid = 100, luar = c.luar || [];
    isi += kotak(8, 8, 244, 118, { garis: "tinta3", tebal: 1.5, bulat: 4 });
    isi += elips(100, 66, 88, 48, "kuningLembut", "kuning", 2.4);
    isi += teks(14, 24, "ξ", { saiz: 13, warna: "tinta", tebal: true });
    isi += teks(20, 108, "A", { saiz: 13, warna: "kuning", tebal: true });
    var dalamB = r.B, luarB = c.A.filter(function (x) { return dalam(dalamB, x) === false; });
    var susun = dalamB.concat(luarB), xs = [], pos = {};
    for (i = 0; i < n; i++) { xs.push(mid + (i - (n - 1) / 2) * sp); pos[susun[i]] = xs[i]; }
    var ring = "";
    if (r.nB > 0 && r.nB < n) {
      var bx = (xs[0] + xs[r.nB - 1]) / 2, brx = ((r.nB - 1) * sp) / 2 + 18;
      ring = elips(bx, 66, brx, 24, "hijauLembut", "hijau", 2.4) + teks(bx, 38, "B", { saiz: 13, warna: "hijau", tebal: true, tengah: true });
    } else if (r.nB === n) {
      ring = elips(100, 66, 82, 42, null, "hijau", 2.4, "5 4") + teks(84, 42, "B", { saiz: 13, warna: "hijau", tebal: true });
    }
    isi += hasilG(ring);
    for (i = 0; i < n; i++) isi += teks(xs[i], 70, no(susun[i]), { saiz: 13, warna: "tinta", tebal: true, tengah: true });
    for (i = 0; i < luar.length; i++) isi += teks(214 + (i % 2) * 24, 40 + Math.floor(i / 2) * 26, no(luar[i]), { saiz: 13, warna: "tinta", tebal: true, tengah: true });
    var y = 144;
    isi += teks(10, y, "A = {" + c.A.join(", ") + "}   n(A) = " + n, { saiz: 12, warna: "tinta2", tebal: true });
    y += 18;
    isi += teks(10, y, r.kosong ? "B = { }  (set kosong)" : "B = {" + r.B.join(", ") + "}", { saiz: 12, warna: "hijau", tebal: true, hasil: true });
    y += 18;
    isi += teks(10, y, "B ⊂ A   n(B) = " + r.nB, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
    y += 18;
    isi += teks(10, y, "Semua subset A ada " + r.jumlah, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
    return svg(y + 14, isi, "Rajah Venn subset: A = {" + c.A.join(", ") + "}; B ialah subset yang mempunyai " + r.nB + " unsur; A mempunyai " + r.jumlah + " subset semuanya");
  }

  /* ---------- mod sama ---------- */
  function kiraSama(c, s) {
    var kr = KRI[c.kriteria[0]], a = ahli(kr), b = c.calon[s.j].a.slice(), sb = [], i, beza = null;
    for (i = 0; i < b.length; i++) if (sb.indexOf(b[i]) < 0) sb.push(b[i]);
    for (i = 0; i < a.length && beza === null; i++) if (sb.indexOf(a[i]) < 0) beza = { x: a[i], dalamA: true };
    for (i = 0; i < sb.length && beza === null; i++) if (a.indexOf(sb[i]) < 0) beza = { x: sb[i], dalamA: false };
    return { perihal: kr.perihal, A: a, B: b, nA: a.length, nB: sb.length, sama: beza === null, beza: beza, ada: b.length !== sb.length };
  }
  function lukisSama(c, s) {
    var r = kiraSama(c, s), isi = "", i, cx;
    isi += teks(10, 20, "Set A: " + r.perihal, { saiz: 11, warna: "tinta", tebal: true });
    for (i = 0; i < r.A.length; i++) {
      cx = 26 + i * 36; isi += bulatan(cx, 48, 14, "hijauLembut", "hijau", 2);
      isi += teks(cx, 52, no(r.A[i]), { saiz: 12, warna: "tinta", tebal: true, tengah: true });
    }
    if (!r.A.length) isi += teks(10, 52, "{ }  (set kosong)", { saiz: 12, warna: "tinta2", tebal: true });
    isi += teks(10, 92, "Set B: " + (c.calon[s.j].t || "senarai di bawah"), { saiz: 11, warna: "tinta", tebal: true });
    for (i = 0; i < r.B.length; i++) {
      cx = 26 + i * 36; isi += bulatan(cx, 120, 14, "kuningLembut", "kuning", 2);
      isi += teks(cx, 124, no(r.B[i]), { saiz: 12, warna: "tinta", tebal: true, tengah: true });
    }
    if (!r.B.length) isi += teks(10, 124, "{ }  (set kosong)", { saiz: 12, warna: "tinta2", tebal: true });
    var y = 156;
    isi += teks(10, y, r.sama ? "A = B  (sama)" : "A ≠ B  (tidak sama)", { saiz: 14, warna: r.sama ? "hijau" : "merah", tebal: true, hasil: true });
    y += 19;
    isi += teks(10, y, "n(A) = " + r.nA + "   n(B) = " + r.nB, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
    y += 18;
    var sebab = r.sama ? (r.ada ? "Unsur sama, ulangan dikira sekali" : "Unsur sama, susunan tidak penting")
      : r.beza.x + (r.beza.dalamA ? " ∈ A tetapi ∉ B" : " ∈ B tetapi ∉ A");
    isi += teks(10, y, sebab, { saiz: 11, warna: "tinta2", tebal: true, hasil: true });
    return svg(y + 14, isi, "Rajah membandingkan set A daripada " + r.perihal + " dengan set B; " + (r.sama ? "kedua-dua set sama" : "kedua-dua set tidak sama"));
  }

  /* ---------- widget ---------- */
  W.t1set = {
    mula: function (c) {
      switch (c.mod) {
        case "sifat": return { k: c.k || 0, p: c.p == null ? 6 : c.p };
        case "venn": return { k: c.k || 0 };
        case "subset": return { i: c.i == null ? 3 : c.i };
        case "sama": return { j: c.j || 0 };
      }
      throw new Error("mod t1set " + c.mod + " tidak dikenali");
    },
    kawalan: function (c) {
      var i, t = [], u = [];
      switch (c.mod) {
        case "sifat":
        case "venn":
          for (i = 0; i < c.kriteria.length; i++) t.push(kriteria(c, i).nama);
          var out = [{ k: "k", label: "set A", min: 0, maks: c.kriteria.length - 1, teks: t }];
          if (c.mod === "sifat" && c.unsur) { for (i = 1; i <= N; i++) u.push(String(i)); out.push({ k: "p", label: "objek x", min: 0, maks: N - 1, teks: u }); }
          return out;
        case "subset":
          for (i = 0; i < Math.pow(2, c.A.length); i++) t.push("ke-" + (i + 1));
          return [{ k: "i", label: "subset B", min: 0, maks: t.length - 1, teks: t }];
        case "sama":
          for (i = 0; i < c.calon.length; i++) t.push("ke-" + (i + 1));
          return [{ k: "j", label: "set B", min: 0, maks: t.length - 1, teks: t }];
      }
      throw new Error("mod t1set " + c.mod + " tidak dikenali");
    },
    kira: function (c, s) {
      switch (c.mod) {
        case "sifat": return kiraSifat(c, s);
        case "venn": return kiraVenn(c, s);
        case "subset": return kiraSubset(c, s);
        case "sama": return kiraSama(c, s);
      }
      throw new Error("mod t1set " + c.mod + " tidak dikenali");
    },
    lukis: function (c, s) {
      switch (c.mod) {
        case "sifat": return lukisSifat(c, s);
        case "venn": return lukisVenn(c, s);
        case "subset": return lukisSubset(c, s);
        case "sama": return lukisSama(c, s);
      }
      throw new Error("mod t1set " + c.mod + " tidak dikenali");
    }
  };
}
if (typeof module !== "undefined") module.exports = daftarT1Set; else daftarT1Set(window.JMI);
