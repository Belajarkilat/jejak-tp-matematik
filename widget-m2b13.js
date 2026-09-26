/* Widget Tingkatan 2 Bab 13 Kebarangkalian Mudah: W.t2keb dengan lima mod.

   Mod (c.mod):
   - eksperimen : eksperimen berulang (syiling, dadu, pemutar 8 sektor) dengan bilangan
                  cubaan 10 hingga 1000. Kekerapan relatif dilukis pada graf dan menghampiri
                  kebarangkalian teori (garis putus-putus). Gelongsor: cubaan dan larian.
                  Keputusan dijana oleh penjana rawak berbenih tetap (deterministik), jadi
                  rajah sama pada setiap muat semula. Spek: eks, idx (peristiwa), namaP,
                  langkah, benih.
   - ruang      : ruang sampel S sebagai petak, peristiwa A diserlahkan. Spek: tajuk, S
                  (label kesudahan), lajur, kurung, acara [{nama, idx}]. Gelongsor: peristiwa.
   - pokok      : gambar rajah pokok bagi eksperimen berperingkat. Spek: tajuk, peringkat
                  (senarai label setiap peringkat), acara [{nama, idx}] dengan idx ialah
                  indeks daun mengikut susunan hasil darab Cartes. Gelongsor: peristiwa.
   - pelengkap  : beg guli berwarna, peristiwa A gabungan warna, pelengkap A' dan bar
                  P(A) + P(A') = 1. Spek: beg [{n, w}], pilihan [[indeks warna]...].
   - skala      : skala kebarangkalian 0 hingga 1, penanda pada P(A). Spek: acara
                  [{nama, t, n, N}].

   Semua nombor dikira daripada formula dalam kira(). Unsur jawapan dilukis dalam
   elemen class "jmi-hasil" supaya tersembunyi dalam mod cabar. Fail ini didaftar oleh
   interaktif.js (Node) atau dimuatkan selepas interaktif.js dalam pelayar. */
function daftarT2Keb(JMI) {
  "use strict";
  var h = JMI.h, teks = h.teks, garis = h.garis, kotak = h.kotak, laluan = h.laluan, svg = h.svg, w = h.w, b1 = h.b1, LEBAR = h.LEBAR;
  var W = JMI.W;

  /* ---------- pembantu ---------- */
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function perpuluhan(x) { return String(Math.round(x * 1000) / 1000); }
  /* Pecahan n/N, dengan bentuk termudah jika berbeza: "3/6 = 1/2", "0/6 = 0", "6/6 = 1". */
  function pecah(n, N) {
    if (n === 0) return "0/" + N + " = 0";
    if (n === N) return N + "/" + N + " = 1";
    var g = gcd(n, N);
    return g > 1 ? n + "/" + N + " = " + (n / g) + "/" + (N / g) : n + "/" + N;
  }
  function termudah(n, N) {
    if (n === 0) return "0";
    if (n === N) return "1";
    var g = gcd(n, N);
    return (n / g) + "/" + (N / g);
  }
  function hasilG(isi) { return isi ? '<g class="jmi-hasil">' + isi + "</g>" : ""; }
  function bulatan(x, y, r, isi, tepi, tebal) {
    return '<circle cx="' + b1(x) + '" cy="' + b1(y) + '" r="' + r + '" fill="' + (isi ? w(isi) : "none") + '" stroke="' + w(tepi) + '" stroke-width="' + (tebal || 1.5) + '"></circle>';
  }
  function segitiga(x, y, s, isi, tepi) {
    return '<path d="M' + b1(x) + " " + b1(y) + " L" + b1(x - s) + " " + b1(y - s * 1.4) + " L" + b1(x + s) + " " + b1(y - s * 1.4) + ' Z" fill="' + w(isi) + '" stroke="' + w(tepi) + '" stroke-width="1.5" stroke-linejoin="round"></path>';
  }
  /* Senarai unsur pada beberapa baris: "A = {HH, HT," / "   TH}" */
  function senarai(awalan, arr, mak) {
    if (!arr.length) return [awalan + "{ }"];
    var baris = [], cur = awalan + "{", pertama = true, i, tok, tambah;
    for (i = 0; i < arr.length; i++) {
      tok = arr[i] + (i < arr.length - 1 ? "," : "}");
      tambah = (pertama ? "" : " ") + tok;
      if (!pertama && cur.length + tambah.length > mak) { baris.push(cur); cur = "   " + tok; }
      else cur += tambah;
      pertama = false;
    }
    baris.push(cur);
    return baris;
  }
  function tokenSet(c, arr) { return arr.map(function (t) { return c.kurung ? "(" + t + ")" : t; }); }
  function bungkus(t, mak) {
    var kata = String(t).split(" "), baris = [], cur = "";
    kata.forEach(function (k) {
      if (cur && (cur + " " + k).length > mak) { baris.push(cur); cur = k; }
      else cur = cur ? cur + " " + k : k;
    });
    if (cur) baris.push(cur);
    return baris;
  }
  function tepat(id, c) { if (!c.acara || !c.acara[id]) throw new Error("peristiwa " + id + " tiada"); return c.acara[id]; }

  /* ---------- penjana rawak berbenih (mulberry32) ---------- */
  function rng(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  var EKS = {
    syiling: { nama: "Baling syiling", n: 2, lab: ["K", "E"] },
    dadu: { nama: "Baling dadu", n: 6, lab: ["1", "2", "3", "4", "5", "6"] },
    pemutar: { nama: "Putar pemutar 8 sektor", n: 8, lab: ["1", "2", "3", "4", "5", "6", "7", "8"] }
  };
  var CACHE = {};
  function jujukan(eks, benih, panjang) {
    var kunci = eks + ":" + benih + ":" + panjang;
    if (CACHE[kunci]) return CACHE[kunci];
    var r = rng(benih), n = EKS[eks].n, a = [], i;
    for (i = 0; i < panjang; i++) a.push(Math.floor(r() * n));
    CACHE[kunci] = a;
    return a;
  }

  /* ================= mod eksperimen ================= */
  function kiraEks(c, s) {
    var E = EKS[c.eks]; if (!E) throw new Error("eksperimen " + c.eks + " tidak dikenali");
    var langkah = c.langkah, maks = langkah[langkah.length - 1];
    var seq = jujukan(c.eks, c.benih[s.l], maks);
    var titik = [], kira = 0, j = 0, i, cubaan, ada = {};
    c.idx.forEach(function (x) { ada[x] = true; });
    for (i = 0; i <= s.i; i++) {
      for (; j < langkah[i]; j++) if (ada[seq[j]]) kira++;
      titik.push(kira / langkah[i]);
    }
    cubaan = langkah[s.i];
    var akhir = seq.slice(Math.max(0, cubaan - 12), cubaan).map(function (x) { return E.lab[x]; });
    return {
      cubaan: cubaan, kejadian: kira, f: kira / cubaan, titik: titik, akhir: akhir,
      teori: { n: c.idx.length, N: E.n, p: c.idx.length / E.n }
    };
  }
  function lukisEks(c, s) {
    var r = kiraEks(c, s), E = EKS[c.eks], isi = "", i;
    var x0 = 40, x1 = 238, y0 = 58, y1 = 148, n = c.langkah.length;
    isi += teks(10, 18, E.nama, { saiz: 12, warna: "tinta", tebal: true });
    isi += teks(10, 34, "Peristiwa: " + c.namaP, { saiz: 11, warna: "tinta2" });
    isi += kotak(x0, y0, x1 - x0, y1 - y0, { garis: "garis2", tebal: 1, bulat: 2 });
    isi += teks(34, y0 + 4, "1", { saiz: 11, warna: "tinta3", kanan: true });
    isi += teks(34, (y0 + y1) / 2 + 4, "0.5", { saiz: 11, warna: "tinta3", kanan: true });
    isi += teks(34, y1 + 4, "0", { saiz: 11, warna: "tinta3", kanan: true });
    isi += garis(x0, (y0 + y1) / 2, x1, (y0 + y1) / 2, { warna: "garis", tebal: 1 });
    var xs = function (k) { return x0 + (k / (n - 1)) * (x1 - x0); };
    var ys = function (f) { return y1 - f * (y1 - y0); };
    for (i = 0; i < n; i++) isi += teks(xs(i), 164, String(c.langkah[i]), { saiz: 11, warna: i === s.i ? "tinta" : "tinta3", tengah: true, tebal: i === s.i });
    isi += teks(x1, 180, "bilangan cubaan", { saiz: 11, warna: "tinta3", kanan: true });
    var lengkung = "", titikSvg = "", yT = ys(r.teori.p);
    for (i = 0; i < r.titik.length; i++) {
      lengkung += (i ? " L" : "M") + b1(xs(i)) + " " + b1(ys(r.titik[i]));
      titikSvg += bulatan(xs(i), ys(r.titik[i]), i === r.titik.length - 1 ? 4.5 : 3, i === r.titik.length - 1 ? "ungu" : "kertas", "ungu", 1.8);
    }
    isi += hasilG(garis(x0, yT, x1, yT, { warna: "merah", tebal: 1.6, putus: "5 3" }) + laluan(lengkung, { warna: "ungu", tebal: 2 }) + titikSvg);
    isi += teks(10, 198, "Cubaan = " + r.cubaan, { saiz: 12, warna: "tinta", tebal: true });
    isi += teks(130, 198, "Kejadian = " + r.kejadian, { saiz: 12, warna: "hijau", tebal: true, hasil: true });
    isi += teks(10, 216, "Kekerapan relatif: " + r.kejadian + "/" + r.cubaan + " = " + (Math.round(r.f * 100) / 100).toFixed(2), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
    isi += teks(10, 234, "P(teori) = " + pecah(r.teori.n, r.teori.N) + " = " + perpuluhan(r.teori.p), { saiz: 12, warna: "merah", tebal: true, hasil: true });
    isi += teks(10, 252, "Terakhir: " + r.akhir.join(" "), { saiz: 11, warna: "tinta3" });
    return svg(262, isi, "Rajah " + E.nama.toLowerCase() + " sebanyak " + r.cubaan + " kali untuk peristiwa " + c.namaP + "; kekerapan relatif " + (Math.round(r.f * 100) / 100).toFixed(2) + ", kebarangkalian teori " + perpuluhan(r.teori.p));
  }

  /* ================= mod ruang ================= */
  function kiraRuang(c, s) {
    var a = tepat(s.p, c), n = c.S.length;
    var unsur = a.idx.map(function (i) { return c.S[i]; });
    return { nama: a.nama, unsur: unsur, nA: a.idx.length, nS: n, p: a.idx.length / n, teks: pecah(a.idx.length, n) };
  }
  function tataRuang(c) {
    var n = c.S.length, lajur = c.lajur || Math.min(n, 6), cw = c.cw || Math.min(44, Math.floor(236 / lajur) - 4), ch = c.ch || 26;
    var baris = Math.ceil(n / lajur), lebarJumlah = lajur * (cw + 4) - 4;
    return { lajur: lajur, cw: cw, ch: ch, baris: baris, x0: Math.round((LEBAR - lebarJumlah) / 2), y0: 46 };
  }
  function tinggiRuang(c) {
    var t = tataRuang(c), mak = 1, k;
    for (k = 0; k < c.acara.length; k++) mak = Math.max(mak, senarai("A = ", tokenSet(c, kiraRuang(c, { p: k }).unsur), 36).length);
    return t.y0 + t.baris * (t.ch + 4) + 22 + mak * 15 + 34;
  }
  function lukisRuang(c, s) {
    var r = kiraRuang(c, s), t = tataRuang(c), isi = "", i, cx, cy, sorot = "", huruf = "";
    isi += teks(10, 18, "Eksperimen: " + c.tajuk, { saiz: 12, warna: "tinta", tebal: true });
    isi += teks(10, 34, "Ruang sampel S, n(S) = " + r.nS, { saiz: 11, warna: "tinta2" });
    var ada = {};
    c.acara[s.p].idx.forEach(function (x) { ada[x] = true; });
    for (i = 0; i < c.S.length; i++) {
      cx = t.x0 + (i % t.lajur) * (t.cw + 4); cy = t.y0 + Math.floor(i / t.lajur) * (t.ch + 4);
      isi += kotak(cx, cy, t.cw, t.ch, { isi: "kertas", garis: "garis2", tebal: 1.2, bulat: 4 });
      if (ada[i]) sorot += kotak(cx, cy, t.cw, t.ch, { isi: "hijauLembut", garis: "hijau", tebal: 2.2, bulat: 4 });
      huruf += teks(cx + t.cw / 2, cy + t.ch / 2 + 4, c.S[i], { saiz: 12, warna: "tinta", tebal: true, tengah: true });
    }
    isi += hasilG(sorot) + huruf;
    var y = t.y0 + t.baris * (t.ch + 4) + 16;
    isi += teks(10, y, "Peristiwa A: " + r.nama, { saiz: 11, warna: "tinta", tebal: true });
    y += 16;
    senarai("A = ", tokenSet(c, r.unsur), 36).forEach(function (b) { isi += teks(10, y, b, { saiz: 11, warna: "hijau", tebal: true, hasil: true }); y += 15; });
    isi += teks(10, y, "n(A) = " + r.nA + "   n(S) = " + r.nS, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
    y += 17;
    isi += teks(10, y, "P(A) = " + r.teks, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
    return svg(tinggiRuang(c), isi, "Rajah ruang sampel eksperimen " + c.tajuk + " dengan " + r.nS + " kesudahan; peristiwa " + r.nama + " ada " + r.nA + " kesudahan, P(A) = " + termudah(r.nA, r.nS));
  }

  /* ================= mod pokok ================= */
  function daun(c) {
    var out = [""], k;
    for (k = 0; k < c.peringkat.length; k++) {
      var baru = [];
      out.forEach(function (d) { c.peringkat[k].forEach(function (l) { baru.push(d + l); }); });
      out = baru;
    }
    return out;
  }
  function kiraPokok(c, s) {
    var a = tepat(s.p, c), d = daun(c), unsur = a.idx.map(function (i) { return d[i]; });
    return { nama: a.nama, unsur: unsur, nA: a.idx.length, nS: d.length, teks: pecah(a.idx.length, d.length), daun: d };
  }
  function tinggiPokok(c) {
    var L = daun(c).length;
    return 40 + (L - 1) * 16 + 30 + 4 * 15 + 12;
  }
  function lukisPokok(c, s) {
    var r = kiraPokok(c, s), isi = "", asas = "", sorot = "", nod = "", i, k, L = r.daun.length, P = c.peringkat.length;
    var yDaun = function (idx) { return 40 + idx * 16; };
    var xNod = function (k) { return 14 + (k + 1) * 46; };
    var baris = function (k) { var b = 1, q; for (q = k + 1; q < P; q++) b *= c.peringkat[q].length; return b; };   /* bilangan daun bagi satu nod peringkat k */
    var yNod = function (k, p) { var per = baris(k); return yDaun(p * per + (per - 1) / 2); };
    var xAkar = 14, yAkar = yDaun((L - 1) / 2);
    isi += teks(10, 18, "Rajah pokok: " + c.tajuk, { saiz: 12, warna: "tinta", tebal: true });
    var ada = {};
    c.acara[s.p].idx.forEach(function (x) { ada[x] = true; });
    /* nod dan sisi peringkat k: bilangan nod = hasil darab saiz peringkat 0..k */
    var bil = 1, sebelum = 1;
    for (k = 0; k < P; k++) {
      var saiz = c.peringkat[k].length;
      bil = sebelum * saiz;
      for (i = 0; i < bil; i++) {
        var ibu = Math.floor(i / saiz);
        var px = k === 0 ? xAkar : xNod(k - 1), py = k === 0 ? yAkar : yNod(k - 1, ibu);
        asas += garis(px, py, xNod(k), yNod(k, i), { warna: "garis2", tebal: 1.4 });
        nod += bulatan(xNod(k), yNod(k, i), 7.5, "kertas", "garis2", 1.3) +
          teks(xNod(k), yNod(k, i) + 4, c.peringkat[k][i % saiz], { saiz: 11, warna: "tinta", tebal: true, tengah: true });
      }
      sebelum = bil;
    }
    /* laluan yang menyusun peristiwa A diserlahkan */
    var xL = xNod(P - 1) + 14;
    for (i = 0; i < L; i++) {
      if (!ada[i]) continue;
      var idx = i, pengubah = [], q;
      for (q = P - 1; q >= 0; q--) { pengubah[q] = Math.floor(idx / baris(q)); }
      for (q = 0; q < P; q++) {
        var px2 = q === 0 ? xAkar : xNod(q - 1), py2 = q === 0 ? yAkar : yNod(q - 1, Math.floor(pengubah[q] / c.peringkat[q].length));
        sorot += garis(px2, py2, xNod(q), yNod(q, pengubah[q]), { warna: "hijau", tebal: 3 });
      }
      sorot += kotak(xL - 4, yDaun(i) - 8, 8 + r.daun[i].length * 7.5, 16, { isi: "hijauLembut", garis: "hijau", tebal: 1.4, bulat: 3 });
    }
    isi += asas + hasilG(sorot);
    isi += '<circle cx="' + xAkar + '" cy="' + b1(yAkar) + '" r="4" fill="' + w("tinta3") + '" stroke="none"></circle>';
    isi += nod;
    for (i = 0; i < L; i++) isi += teks(xL, yDaun(i) + 4, r.daun[i], { saiz: 11, warna: "tinta", tebal: true });
    var y = 40 + (L - 1) * 16 + 30;
    isi += teks(10, y, "Peristiwa A: " + r.nama, { saiz: 11, warna: "tinta", tebal: true });
    y += 16;
    var sen = senarai("A = ", r.unsur, 36);
    sen.forEach(function (b) { isi += teks(10, y, b, { saiz: 11, warna: "hijau", tebal: true, hasil: true }); y += 15; });
    isi += teks(10, y, "n(A) = " + r.nA + "   n(S) = " + r.nS, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
    y += 17;
    isi += teks(10, y, "P(A) = " + r.teks, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
    var tinggi = tinggiPokokSebenar(c);
    return svg(tinggi, isi, "Rajah pokok eksperimen " + c.tajuk + " dengan " + r.nS + " kesudahan; peristiwa " + r.nama + " ada " + r.nA + " kesudahan, P(A) = " + termudah(r.nA, r.nS));
  }
  function tinggiPokokSebenar(c) {
    var t = 0, k;
    for (k = 0; k < c.acara.length; k++) {
      var r = kiraPokok(c, { p: k });
      t = Math.max(t, 40 + (r.nS - 1) * 16 + 30 + 16 + senarai("A = ", r.unsur, 36).length * 15 + 17 + 14);
    }
    return t;
  }

  /* ================= mod pelengkap ================= */
  var GULI = {
    merah: { nama: "merah", h: "M", isi: "merahLembut", tepi: "merah" },
    hijau: { nama: "hijau", h: "H", isi: "hijauLembut", tepi: "hijau" },
    kuning: { nama: "kuning", h: "K", isi: "kuningLembut", tepi: "kuning" },
    ungu: { nama: "ungu", h: "U", isi: "lembayungLembut", tepi: "lembayung" }
  };
  function kiraPelengkap(c, s) {
    var pil = c.pilihan[s.p], warna = [], nS = 0, nA = 0, i;
    c.beg.forEach(function (g, k) { for (i = 0; i < g.n; i++) warna.push(k); nS += g.n; if (pil.indexOf(k) >= 0) nA += g.n; });
    var nama = pil.map(function (k) { return GULI[c.beg[k].w].nama; }).join(" atau ");
    return { warna: warna, nS: nS, nA: nA, nK: nS - nA, nama: nama, pil: pil };
  }
  function namaPil(c, k) { return c.pilihan[k].map(function (q) { return GULI[c.beg[q].w].nama; }).join(" atau "); }
  function lukisPelengkap(c, s) {
    var r = kiraPelengkap(c, s), isi = "", i, cx, cy, sorot = "", huruf = "";
    isi += teks(10, 18, "Beg guli: " + r.nS + " biji", { saiz: 12, warna: "tinta", tebal: true });
    for (i = 0; i < r.nS; i++) {
      var g = GULI[c.beg[r.warna[i]].w];
      cx = 24 + (i % 10) * 23.5; cy = 44 + Math.floor(i / 10) * 26;
      isi += bulatan(cx, cy, 10, g.isi, g.tepi, 1.8);
      if (r.pil.indexOf(r.warna[i]) >= 0) sorot += bulatan(cx, cy, 12.6, null, "tinta", 2.4);
      huruf += teks(cx, cy + 4, g.h, { saiz: 11, warna: "tinta", tebal: true, tengah: true });
    }
    isi += hasilG(sorot) + huruf;
    var baris = Math.ceil(r.nS / 10), y = 44 + (baris - 1) * 26 + 30;
    c.beg.forEach(function (gb, k) {
      var gi = GULI[gb.w];
      isi += teks(10 + (k % 2) * 125, y + Math.floor(k / 2) * 16, gi.h + " " + gi.nama + " = " + gb.n, { saiz: 11, warna: "tinta2" });
    });
    y += Math.ceil(c.beg.length / 2) * 16 + 8;
    isi += teks(10, y, "Peristiwa A: " + r.nama, { saiz: 11, warna: "tinta", tebal: true });
    y += 18;
    isi += teks(10, y, "n(A) = " + r.nA + "   n(S) = " + r.nS, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
    y += 17;
    isi += teks(10, y, "P(A) = " + pecah(r.nA, r.nS), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
    y += 17;
    isi += teks(10, y, "P(A') = 1 − " + termudah(r.nA, r.nS) + " = " + termudah(r.nK, r.nS), { saiz: 12, warna: "merah", tebal: true, hasil: true });
    y += 14;
    var bx = 30, bl = 200, wA = bl * r.nA / r.nS, bar = "";
    bar += kotak(bx, y, wA, 14, { isi: "hijauLembut", garis: "hijau", tebal: 1.6, bulat: 2 });
    bar += kotak(bx + wA, y, bl - wA, 14, { isi: "kuningLembut", garis: "kuning", tebal: 1.6, bulat: 2 });
    isi += hasilG(bar);
    isi += hasilG(teks(bx + wA / 2, y + 28, "A", { saiz: 11, warna: "hijau", tebal: true, tengah: true }) + teks(bx + wA + (bl - wA) / 2, y + 28, "A'", { saiz: 11, warna: "kuning", tebal: true, tengah: true }));
    return svg(y + 42, isi, "Rajah beg " + r.nS + " guli; peristiwa " + r.nama + " ada " + r.nA + " guli, kebarangkalian pelengkap ialah " + termudah(r.nK, r.nS));
  }
  function tinggiPelengkap(c) {
    var t = 0, k;
    for (k = 0; k < c.pilihan.length; k++) t = Math.max(t, lukisPelengkap(c, { p: k }).match(/viewBox="0 0 [0-9.]+ ([0-9.]+)"/)[1] * 1);
    return t;
  }

  /* ================= mod skala ================= */
  function kiraSkala(c, s) {
    var a = tepat(s.a, c);
    return { nama: a.nama, t: a.t, nA: a.n, nS: a.N, p: a.n / a.N, teks: pecah(a.n, a.N) };
  }
  function lukisSkala(c, s) {
    var r = kiraSkala(c, s), isi = "", i, y = 18;
    isi += teks(10, y, "Peristiwa:", { saiz: 11, warna: "tinta3" });
    var lines = bungkus(r.t, 34);
    lines.forEach(function (b, k) { isi += teks(10, 34 + k * 15, b, { saiz: 11, warna: "tinta", tebal: true }); });
    var yg = 116, xa = 20, xb = 240, mx = xa + (xb - xa) * r.p;
    isi += teks(xa, yg - 22, "mustahil", { saiz: 11, warna: "merah", tebal: true });
    isi += teks((xa + xb) / 2, yg - 22, "sama mungkin", { saiz: 11, warna: "tinta3", tengah: true });
    isi += teks(xb, yg - 22, "pasti", { saiz: 11, warna: "hijau", tebal: true, kanan: true });
    isi += garis(xa, yg, xb, yg, { warna: "tinta3", tebal: 2.4 });
    for (i = 0; i <= 4; i++) {
      isi += garis(xa + (xb - xa) * i / 4, yg - (i % 2 ? 4 : 8), xa + (xb - xa) * i / 4, yg + (i % 2 ? 4 : 8), { warna: "tinta3", tebal: 1.6 });
    }
    isi += teks(xa, yg + 24, "0", { saiz: 11, warna: "tinta2", tengah: true });
    isi += teks((xa + xb) / 2, yg + 24, "0.5", { saiz: 11, warna: "tinta2", tengah: true });
    isi += teks(xb, yg + 24, "1", { saiz: 11, warna: "tinta2", tengah: true });
    var tanda = garis(mx, yg - 14, mx, yg + 12, { warna: "ungu", tebal: 2.2 }) + bulatan(mx, yg, 6, "ungu", "ungu", 1.5);
    isi += hasilG(tanda);
    var lab = "P(A) = " + r.teks, lx = Math.min(Math.max(mx, 92), 168);
    isi += teks(lx, yg + 50, lab, { saiz: 12, warna: "ungu", tebal: true, tengah: true, hasil: true });
    isi += teks(lx, yg + 68, "n(A) = " + r.nA + "   n(S) = " + r.nS, { saiz: 12, warna: "tinta", tebal: true, tengah: true, hasil: true });
    isi += teks(130, yg + 92, "0 ≤ P(A) ≤ 1", { saiz: 12, warna: "tinta3", tengah: true });
    return svg(yg + 108, isi, "Rajah skala kebarangkalian dari mustahil ke pasti; " + r.t + " ialah P(A) = " + termudah(r.nA, r.nS));
  }

  /* ---------- widget ---------- */
  function mod(c) { if (["eksperimen", "ruang", "pokok", "pelengkap", "skala"].indexOf(c.mod) < 0) throw new Error("mod t2keb " + c.mod + " tidak dikenali"); return c.mod; }
  W.t2keb = {
    mula: function (c) {
      switch (mod(c)) {
        case "eksperimen": return { i: c.i == null ? 2 : c.i, l: c.l || 0 };
        case "ruang": case "pokok": return { p: c.p || 0 };
        case "pelengkap": return { p: c.p || 0 };
        case "skala": return { a: c.a || 0 };
      }
    },
    kawalan: function (c) {
      var i, t = [];
      switch (mod(c)) {
        case "eksperimen":
          var kw = [{ k: "i", label: "cubaan", min: 0, maks: c.langkah.length - 1, teks: c.langkah.map(String) }];
          if (c.benih.length > 1) kw.push({ k: "l", label: "larian", min: 0, maks: c.benih.length - 1, teks: c.benih.map(function (_, q) { return "ke-" + (q + 1); }) });
          return kw;
        case "ruang": case "pokok":
          for (i = 0; i < c.acara.length; i++) t.push(c.acara[i].nama);
          return [{ k: "p", label: "peristiwa A", min: 0, maks: t.length - 1, teks: t }];
        case "pelengkap":
          for (i = 0; i < c.pilihan.length; i++) t.push(namaPil(c, i));
          return [{ k: "p", label: "peristiwa A", min: 0, maks: t.length - 1, teks: t }];
        case "skala":
          for (i = 0; i < c.acara.length; i++) t.push(c.acara[i].nama);
          return [{ k: "a", label: "peristiwa", min: 0, maks: t.length - 1, teks: t }];
      }
    },
    kira: function (c, s) {
      switch (mod(c)) {
        case "eksperimen": return kiraEks(c, s);
        case "ruang": return kiraRuang(c, s);
        case "pokok": return kiraPokok(c, s);
        case "pelengkap": return kiraPelengkap(c, s);
        case "skala": return kiraSkala(c, s);
      }
    },
    lukis: function (c, s) {
      switch (mod(c)) {
        case "eksperimen": return lukisEks(c, s);
        case "ruang": return lukisRuang(c, s);
        case "pokok": return lukisPokok(c, s);
        case "pelengkap": return lukisPelengkap(c, s);
        case "skala": return lukisSkala(c, s);
      }
    }
  };
  W.t2keb.tinggiPokokSebenar = tinggiPokokSebenar;
  W.t2keb.tinggiPelengkap = tinggiPelengkap;
}
if (typeof module !== "undefined") module.exports = daftarT2Keb; else daftarT2Keb(window.JMI);
