/* Rajah interaktif Jejak TP Matematik.

   Satu fail, dua tempat:
   - Node (bina.js): lukis(spec) menghasilkan <figure> dengan SVG keadaan
     awal. SVG itu melalui semakan rajah yang sama seperti rajah statik
     (warna tema, fon >= 11px, viewBox, teks tidak bertindih), jadi rajah
     masih betul walaupun JavaScript gagal dimuatkan.
   - Pelayar: JMI.hidupkan() mencari setiap figure[data-w] dan menambah
     gelongsor atau butang. Setiap perubahan melukis semula SVG daripada
     keadaan baharu, dengan getaran ringan dan bunyi klik.

   Semua nombor dikira daripada formula, bukan ditulis tangan, supaya
   rajah tidak boleh bercanggah dengan jawapan soalan. Fungsi kira()
   setiap widget dieksport untuk bina.js dan skrip audit. */
(function (root) {
  "use strict";

  var WARNA = {
    garis: "var(--line)", garis2: "var(--line2)", tinta: "var(--ink)", tinta2: "var(--ink2)",
    tinta3: "var(--ink3)", kertas: "var(--surface)", kertas2: "var(--surface2)",
    merah: "var(--arteri)", merahLembut: "var(--arteri-soft)", ungu: "var(--vena)",
    hijau: "var(--teal)", hijauLembut: "var(--teal-soft)", kuning: "var(--amber)",
    kuningLembut: "var(--amber-soft)", lembayung: "var(--gen)", lembayungLembut: "var(--gen-soft)"
  };
  var LEBAR = 260, FON = "DM Mono,monospace";
  var ATAS = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];

  function w(n) { if (!WARNA[n]) throw new Error("warna " + n + " tidak dikenali"); return WARNA[n]; }
  function b1(n) { return Math.round(n * 10) / 10; }
  function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function kuasaTeks(n) {
    var s = String(n), o = "";
    for (var i = 0; i < s.length; i++) o += s[i] === "-" ? "⁻" : ATAS[+s[i]];
    return o;
  }
  function teks(x, y, isi, o) {
    o = o || {};
    var saiz = o.saiz || 12;
    if (saiz < 11) throw new Error("fon " + saiz + "px terlalu kecil");
    return '<text' + (o.hasil ? ' class="jmi-hasil"' : "") + ' x="' + b1(x) + '" y="' + b1(y) + '" xml:space="preserve" style="white-space:pre" font-family="' + FON + '" font-size="' + saiz +
      '" fill="' + w(o.warna || "tinta2") + '"' + (o.tengah ? ' text-anchor="middle"' : "") +
      (o.kanan ? ' text-anchor="end"' : "") + (o.tebal ? ' font-weight="700"' : "") + ">" + esc(isi) + "</text>";
  }
  function kotak(x, y, l, t, o) {
    o = o || {};
    return '<rect x="' + b1(x) + '" y="' + b1(y) + '" width="' + b1(l) + '" height="' + b1(t) + '" rx="' +
      (o.bulat == null ? 3 : o.bulat) + '" fill="' + (o.isi ? w(o.isi) : "none") + '" stroke="' +
      w(o.garis || "garis2") + '" stroke-width="' + (o.tebal || 1.2) + '"></rect>';
  }
  function garis(x1, y1, x2, y2, o) {
    o = o || {};
    return '<line x1="' + b1(x1) + '" y1="' + b1(y1) + '" x2="' + b1(x2) + '" y2="' + b1(y2) + '" stroke="' +
      w(o.warna || "garis2") + '" stroke-width="' + (o.tebal || 1.5) + '"' +
      (o.putus ? ' stroke-dasharray="' + o.putus + '"' : "") + "></line>";
  }
  function laluan(d, o) {
    o = o || {};
    return '<path d="' + d + '" fill="' + (o.isi ? w(o.isi) : "none") + '" stroke="' + w(o.warna || "garis2") +
      '" stroke-width="' + (o.tebal || 2) + '" stroke-linejoin="round"></path>';
  }
  function svg(tinggi, isi, alt) {
    return '<svg viewBox="0 0 ' + LEBAR + " " + tinggi + '" role="img" aria-label="' + esc(alt) + '">' + isi + "</svg>";
  }
  function ringkas(v) { return v >= 1000 ? (Math.round(v / 100) / 10) + "k" : String(Math.round(v)); }
  function rm(n) {
    var bulat = Math.abs(n - Math.round(n)) < 1e-9;
    var t = (bulat ? Math.round(n) : Math.round(n * 100) / 100).toFixed(bulat ? 0 : 2).split(".");
    return "RM" + t[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (t[1] ? "." + t[1] : "");
  }

  /* Ungkapan berpangkat: asas dan indeks dilukis sebagai dua teks berasingan
     (indeks 11px, dinaikkan 6px). Huruf superskrip Unicode dalam DM Mono jatuh
     kembali kepada fon lain dan menjadi terlalu kecil untuk dibaca pada telefon.
     Segmen: "teks" = teks biasa, {p:"m + n"} = indeks bagi segmen sebelumnya. */
  function ungkap(cx, y, segs, o) {
    o = o || {};
    var sz = o.saiz || 13, esz = 11, lb = function (t, z) { return String(t).length * z * 0.6; };
    var jum = 0, i;
    for (i = 0; i < segs.length; i++) jum += typeof segs[i] === "string" ? lb(segs[i], sz) : lb(segs[i].p, esz);
    var x = cx - jum / 2, out = "";
    for (i = 0; i < segs.length; i++) {
      if (typeof segs[i] === "string") { out += teks(x, y, segs[i], { saiz: sz, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil }); x += lb(segs[i], sz); }
      else { out += teks(x, y - 6, segs[i].p, { saiz: esz, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil }); x += lb(segs[i].p, esz); }
    }
    return out;
  }

  /* ---------- nombor perpuluhan tepat (tanpa ralat titik apung) ---------- */
  /* Nombor disimpan sebagai digit + kedudukan titik, supaya 0.000345 x 10^4
     menjadi tepat 3.45, bukan 3.4499999999. */
  function hurai(str) {
    str = String(str).replace(/,/g, "");
    var neg = str[0] === "-"; if (neg) str = str.slice(1);
    var p = str.split("."), bulat = p[0] || "0", pecah = p[1] || "";
    var digit = (bulat + pecah).replace(/^0+/, "");
    var sifarDepan = (bulat + pecah).length - digit.length;
    return { neg: neg, digit: digit || "0", titik: bulat.length - sifarDepan, asal: str };
  }
  /* Tulis semula digit dengan titik pada kedudukan t (bilangan digit sebelum titik). */
  function tulisNombor(digit, t) {
    var d = digit.replace(/0+$/, "") || "0";
    if (t <= 0) return "0." + "0".repeat(-t) + d;
    if (t >= d.length) return d + "0".repeat(t - d.length);
    return d.slice(0, t) + "." + d.slice(t);
  }

  /* ================= WIDGET ================= */
  var W = {};

  /* 1. kuasa: a^n sebagai blok. Gelongsor n. */
  W.kuasa = {
    mula: function (c) { return { n: c.n || 3 }; },
    kawalan: function (c) { return [{ k: "n", label: "n", min: c.nMin || 1, maks: c.nMaks || 6 }]; },
    kira: function (c, s) { return { nilai: Math.pow(c.asas, s.n) }; },
    lukis: function (c, s) {
      var a = c.asas, n = s.n, nilai = Math.pow(a, n);
      var isi = ungkap(LEBAR / 2, 24, [String(a), { p: String(n) }, n <= 4 ? " = " + Array(n).fill(a).join(" × ") : " = " + a + " × ... × " + a], { saiz: 14, tebal: true });
      isi += teks(LEBAR / 2, 46, "= " + nilai.toLocaleString("en-US").replace(/,/g, " ") + " blok", { tengah: true, saiz: 14, warna: "ungu", tebal: true, hasil: true });
      var tunjuk = Math.min(nilai, 81), lajur = Math.ceil(Math.sqrt(tunjuk * 1.6));
      var saiz = Math.min(16, Math.floor(220 / lajur)), baris = Math.ceil(tunjuk / lajur);
      var x0 = (LEBAR - lajur * saiz) / 2, y0 = 60;
      for (var k = 0; k < tunjuk; k++) {
        var kumpul = Math.floor(k / a) % 2 === 0;
        isi += kotak(x0 + (k % lajur) * saiz + 1, y0 + Math.floor(k / lajur) * saiz + 1, saiz - 2, saiz - 2,
          { isi: kumpul ? "lembayungLembut" : "hijauLembut", garis: kumpul ? "ungu" : "hijau", bulat: 2, tebal: 1 });
      }
      var bawah = y0 + baris * saiz;
      if (nilai > 81) isi += teks(LEBAR / 2, bawah + 16, "(81 blok pertama sahaja)", { tengah: true, saiz: 11 });
      return svg(bawah + (nilai > 81 ? 26 : 12), isi, "Rajah " + a + " kuasa " + n + " sebagai " + nilai + " blok, dengan pendaraban berulang");
    }
  };

  /* 2. lipat: kertas dilipat dua, lapisan berganda. Butang Lipat / Buka. */
  W.lipat = {
    mula: function (c) { return { n: c.n || 0 }; },
    kawalan: function (c) { return [{ k: "n", label: "lipatan", min: 0, maks: c.nMaks || 6, butang: true }]; },
    kira: function (c, s) { var l = Math.pow(2, s.n); return { lapisan: l, tebal: +(l * c.tebal).toFixed(4) }; },
    lukis: function (c, s) {
      var r = this.kira(c, s), lap = r.lapisan;
      var isi = teks(LEBAR / 2, 18, "Lipatan: " + s.n, { tengah: true, saiz: 13, warna: "tinta", tebal: true });
      isi += ungkap(LEBAR / 2, 38, ["Lapisan: 2", { p: String(s.n) }, " = " + lap], { saiz: 13, warna: "ungu", tebal: true, hasil: true });
      var lebarK = Math.max(28, 200 / Math.pow(1.35, s.n)), x = (LEBAR - lebarK) / 2;
      var lukisLap = Math.min(lap, 32), tinggiL = Math.min(5, 76 / lukisLap);
      for (var i = 0; i < lukisLap; i++)
        isi += kotak(x, 128 - (i + 1) * tinggiL, lebarK, tinggiL, { isi: i % 2 ? "kuningLembut" : "kertas", garis: "kuning", bulat: 1, tebal: 0.8 });
      isi += garis(20, 128, 240, 128, { warna: "tinta3", tebal: 1.2 });
      isi += teks(LEBAR / 2, 148, "Tebal: " + lap + " × " + c.tebal + " mm = " + r.tebal + " mm", { tengah: true, saiz: 12, warna: "ungu", tebal: true, hasil: true });
      if (lap > 32) isi += teks(LEBAR / 2, 164, "(32 lapisan pertama dilukis)", { tengah: true, saiz: 11 });
      return svg(lap > 32 ? 172 : 158, isi, "Rajah kertas dilipat " + s.n + " kali menjadi " + lap + " lapisan setebal " + r.tebal + " milimeter");
    }
  };

  /* 3. hukum: jubin faktor untuk hukum indeks darab, bahagi, kuasa. */
  W.hukum = {
    mula: function (c) { return { m: c.m || 4, n: c.n || 2 }; },
    kawalan: function (c) {
      return [{ k: "m", label: "m", min: 1, maks: c.mMaks || 6 }, { k: "n", label: "n", min: 1, maks: c.nMaks || (c.mod === "kuasa" ? 3 : 5) }];
    },
    kira: function (c, s) {
      var e = c.mod === "darab" ? s.m + s.n : c.mod === "bahagi" ? s.m - s.n : s.m * s.n;
      return { indeks: e };
    },
    lukis: function (c, s) {
      var a = c.asas || "a", r = this.kira(c, s), isi = "", t = 26, sz = 26, y;
      var jubin = function (x, y, lbl, gaya) {
        return kotak(x, y, sz, sz, { isi: gaya === "potong" ? "kertas2" : gaya === "b" ? "hijauLembut" : "lembayungLembut", garis: gaya === "potong" ? "tinta3" : gaya === "b" ? "hijau" : "ungu", bulat: 5 }) +
          teks(x + sz / 2, y + sz / 2 + 4, lbl, { tengah: true, saiz: 12, warna: gaya === "potong" ? "tinta3" : "tinta", tebal: true }) +
          (gaya === "potong" ? garis(x + 4, y + sz - 4, x + sz - 4, y + 4, { warna: "merah", tebal: 2 }) : "");
      };
      var baris = function (bil, y, gaya, potongDari) {
        var o = "", x0 = (LEBAR - bil * (sz + 4)) / 2;
        for (var i = 0; i < bil; i++) o += jubin(x0 + i * (sz + 4), y, a, potongDari != null && i >= potongDari ? "potong" : gaya);
        return o;
      };
      var K = function (x) { return { p: String(x) }; };
      if (c.mod === "darab") {
        isi += ungkap(LEBAR / 2, 20, [a, K(s.m), " × " + a, K(s.n)], { saiz: 14, tebal: true });
        isi += baris(s.m, t, "a") + baris(s.n, t + sz + 8, "b");
        y = t + 2 * sz + 34;
        isi += ungkap(LEBAR / 2, y, ["= " + a, K(s.m + " + " + s.n), " = " + a, K(r.indeks)], { saiz: 14, warna: "ungu", tebal: true, hasil: true });
      } else if (c.mod === "bahagi") {
        isi += ungkap(LEBAR / 2, 20, [a, K(s.m), " ÷ " + a, K(s.n)], { saiz: 14, tebal: true });
        var batal = Math.min(s.n, s.m);
        isi += baris(s.m, t, "a", s.m - batal) + garis(40, t + sz + 5, 220, t + sz + 5, { warna: "tinta2", tebal: 1.5 });
        isi += baris(s.n, t + sz + 10, "b", s.n - batal);
        y = t + 2 * sz + 36;
        var hasilB = ["= " + a, K(s.m + " − " + s.n), " = " + a, K(r.indeks)];
        if (r.indeks === 0) hasilB.push(" = 1");
        isi += ungkap(LEBAR / 2, y, hasilB, { saiz: 14, warna: r.indeks < 0 ? "merah" : "ungu", tebal: true, hasil: true });
      } else {
        isi += ungkap(LEBAR / 2, 20, ["(" + a, K(s.m), ")", K(s.n)], { saiz: 14, tebal: true });
        isi += teks(LEBAR / 2, 40, s.n + " kumpulan, setiap kumpulan " + s.m + " faktor " + a, { tengah: true, saiz: 11 });
        for (var g = 0; g < s.n; g++) isi += baris(s.m, 48 + g * (sz + 6), g % 2 ? "b" : "a");
        y = 48 + s.n * (sz + 6) + 22;
        isi += ungkap(LEBAR / 2, y, ["= " + a, K(s.m + " × " + s.n), " = " + a, K(r.indeks)], { saiz: 14, warna: "ungu", tebal: true, hasil: true });
      }
      return svg(y + 12, isi, "Rajah jubin faktor " + a + " bagi hukum indeks " + c.mod + " dengan m sama dengan " + s.m + " dan n sama dengan " + s.n);
    }
  };

  /* 4. piawai: anjak titik perpuluhan, lihat kuasa 10 berubah. */
  W.piawai = {
    mula: function (c) { return { k: 0 }; },
    kawalan: function (c) { var h = hurai(c.nombor), e = h.titik - 1; return [{ k: "k", label: "kuasa 10", min: Math.min(0, e) - 1, maks: Math.max(0, e) + 1 }]; },
    kira: function (c, s) {
      var h = hurai(c.nombor), pekali = tulisNombor(h.digit, h.titik - s.k);
      var p = parseFloat(pekali);
      return { pekali: pekali, k: s.k, piawai: p >= 1 && p < 10, eBetul: h.titik - 1 };
    },
    lukis: function (c, s) {
      var r = this.kira(c, s), isi = "";
      isi += teks(LEBAR / 2, 18, c.nombor + (c.unit ? " " + c.unit : ""), { tengah: true, saiz: 13, warna: "tinta", tebal: true });
      var ch = r.pekali.split(""), sz = 18, x0 = (LEBAR - ch.length * sz) / 2;
      ch.forEach(function (d, i) {
        var titik = d === ".";
        if (!titik) isi += kotak(x0 + i * sz + 1, 34, sz - 2, 24, { isi: "kertas2", garis: "garis2", bulat: 3, tebal: 1 });
        isi += teks(x0 + i * sz + sz / 2, 51, d, { tengah: true, saiz: titik ? 16 : 13, warna: titik ? "merah" : "tinta", tebal: true });
      });
      isi += ungkap(LEBAR / 2, 90, ["= " + r.pekali + " × 10", { p: String(s.k) }], { saiz: 14, warna: "ungu", tebal: true, hasil: true });
      isi += kotak(40, 102, 180, 26, { isi: r.piawai ? "hijauLembut" : "kuningLembut", garis: r.piawai ? "hijau" : "kuning", bulat: 13 });
      isi += teks(LEBAR / 2, 119, r.piawai ? "Bentuk piawai: 1 ≤ A < 10" : "Belum: A mesti 1 ≤ A < 10", { tengah: true, saiz: 11, warna: "tinta", tebal: true, hasil: true });
      return svg(136, isi, "Rajah nombor " + c.nombor + " ditulis sebagai " + r.pekali + " darab 10 kuasa " + s.k);
    }
  };

  /* 5. ab: angka bererti. Gelongsor bilangan a.b., digit bererti diserlah. */
  function bundarAB(str, ab) {
    var h = hurai(str);
    if (h.digit === "0") return "0";
    var d = h.digit, t = h.titik;
    if (d.length > ab) {
      var simpan = d.slice(0, ab).split("").map(Number), naik = +d[ab] >= 5;
      if (naik) {
        var i = ab - 1;
        while (i >= 0) { simpan[i]++; if (simpan[i] < 10) break; simpan[i] = 0; i--; }
        if (i < 0) { simpan.unshift(1); t++; simpan.pop(); }
      }
      d = simpan.join("");
    }
    /* kekalkan sifar bererti di hujung bahagian perpuluhan */
    var o;
    if (t <= 0) o = "0." + "0".repeat(-t) + d;
    else if (t >= d.length) o = d + "0".repeat(t - d.length);
    else o = d.slice(0, t) + "." + d.slice(t);
    return (h.neg ? "-" : "") + o;
  }
  function kiraAB(str) {
    /* bilangan angka bererti bagi nombor seperti yang ditulis (sifar hujung nombor bulat dianggap tidak bererti) */
    var s = String(str).replace(/^-/, "");
    if (s.indexOf(".") >= 0) return s.replace(".", "").replace(/^0+/, "").length;
    return s.replace(/^0+/, "").replace(/0+$/, "").length;
  }
  W.ab = {
    mula: function (c) { return { ab: c.ab || 3 }; },
    kawalan: function (c) { return [{ k: "ab", label: "angka bererti", min: 1, maks: Math.min(6, kiraAB(c.nombor)) }]; },
    kira: function (c, s) { return { bundar: bundarAB(c.nombor, s.ab), jumlahAB: kiraAB(c.nombor) }; },
    lukis: function (c, s) {
      var r = this.kira(c, s), isi = "", ch = String(c.nombor).split(""), sz = 18;
      var x0 = (LEBAR - ch.length * sz) / 2, jumpa = false, dikira = 0;
      isi += teks(LEBAR / 2, 16, "Nombor asal", { tengah: true, saiz: 11 });
      ch.forEach(function (d, i) {
        var titik = d === ".";
        if (!titik && d !== "0") jumpa = true;
        var bererti = !titik && jumpa && dikira < s.ab;
        if (bererti) dikira++;
        if (!titik) isi += kotak(x0 + i * sz + 1, 24, sz - 2, 24, { isi: bererti ? "lembayungLembut" : "kertas2", garis: bererti ? "ungu" : "garis2", bulat: 3, tebal: 1 });
        isi += teks(x0 + i * sz + sz / 2, 41, d, { tengah: true, saiz: 13, warna: bererti ? "ungu" : titik ? "merah" : "tinta3", tebal: true });
      });
      isi += teks(LEBAR / 2, 70, "Dibundarkan kepada " + s.ab + " a.b.", { tengah: true, saiz: 12 });
      isi += teks(LEBAR / 2, 92, r.bundar, { tengah: true, saiz: 16, warna: "ungu", tebal: true, hasil: true });
      return svg(104, isi, "Rajah nombor " + c.nombor + " dibundarkan kepada " + s.ab + " angka bererti menjadi " + r.bundar);
    }
  };

  /* 6. kompaun: faedah mudah lawan kompaun, gelongsor tahun. */
  W.kompaun = {
    mula: function (c) { return { t: c.t || 5 }; },
    kawalan: function (c) { return [{ k: "t", label: "tahun", min: 1, maks: c.tMaks || 10 }]; },
    kira: function (c, s) {
      var P = c.P, r = c.r / 100, n = c.n || 1;
      var mudah = P * (1 + r * s.t), kompaun = P * Math.pow(1 + r / n, n * s.t);
      return { mudah: Math.round(mudah * 100) / 100, kompaun: Math.round(kompaun * 100) / 100 };
    },
    lukis: function (c, s) {
      var tM = c.tMaks || 10, akhir = this.kira(c, { t: tM }).kompaun, isi = "";
      var kx = function (t) { return 44 + (t / tM) * 200; }, ky = function (v) { return 150 - ((v - c.P) / (akhir - c.P || 1)) * 110; };
      isi += garis(44, 150, 248, 150, { warna: "tinta3", tebal: 1.2 }) + garis(44, 30, 44, 150, { warna: "tinta3", tebal: 1.2 });
      isi += teks(40, 154, ringkas(c.P), { kanan: true, saiz: 11 }) + teks(40, 44, ringkas(akhir), { kanan: true, saiz: 11 }) + teks(4, 26, "RM", { saiz: 11 });
      isi += teks(146, 166, "Tahun", { tengah: true, saiz: 11 });
      var dM = "", dK = "";
      for (var t = 0; t <= tM; t++) {
        var v = this.kira(c, { t: t });
        dM += (t ? " L" : "M") + b1(kx(t)) + " " + b1(ky(v.mudah));
        dK += (t ? " L" : "M") + b1(kx(t)) + " " + b1(ky(v.kompaun));
      }
      isi += laluan(dM, { warna: "hijau", tebal: 2 }) + laluan(dK, { warna: "ungu", tebal: 2.5 });
      isi += garis(kx(s.t), 30, kx(s.t), 150, { warna: "kuning", tebal: 1.5, putus: "4 3" });
      var r = this.kira(c, s);
      isi += teks(8, 14, "Selepas tahun " + s.t, { saiz: 11, warna: "tinta", tebal: true });
      isi += teks(8, 188, "Kompaun " + rm(r.kompaun), { saiz: 12, warna: "ungu", tebal: true });
      isi += teks(8, 206, "Mudah   " + rm(r.mudah), { saiz: 12, warna: "hijau", tebal: true });
      return svg(214, isi, "Graf nilai simpanan " + rm(c.P) + " pada kadar " + c.r + " peratus: faedah kompaun lawan faedah mudah, tahun " + s.t);
    }
  };

  /* 7. pinjaman: kadar rata. Gelongsor tempoh. */
  W.pinjaman = {
    mula: function (c) { return { t: c.t || 5 }; },
    kawalan: function (c) { return [{ k: "t", label: "tempoh (tahun)", min: 1, maks: c.tMaks || 9 }]; },
    kira: function (c, s) {
      var I = c.P * (c.r / 100) * s.t, A = c.P + I;
      return { faedah: Math.round(I * 100) / 100, jumlah: Math.round(A * 100) / 100, bulanan: Math.round(A / (12 * s.t) * 100) / 100 };
    },
    lukis: function (c, s) {
      var r = this.kira(c, s), maks = this.kira(c, { t: c.tMaks || 9 }).jumlah, isi = "";
      var L = 200, lP = L * c.P / maks, lI = L * r.faedah / maks;
      isi += teks(8, 16, "Pinjaman " + rm(c.P) + ", " + c.r + "% setahun", { saiz: 12, warna: "tinta", tebal: true });
      isi += kotak(30, 30, lP, 30, { isi: "hijauLembut", garis: "hijau", bulat: 3 }) + kotak(30 + lP, 30, Math.max(lI, 1), 30, { isi: "merahLembut", garis: "merah", bulat: 3 });
      isi += teks(30, 76, "Pokok", { saiz: 11, warna: "hijau", tebal: true }) + teks(232, 76, "Faedah", { kanan: true, saiz: 11, warna: "merah", tebal: true });
      isi += teks(8, 100, "Faedah " + s.t + " tahun: " + rm(r.faedah), { saiz: 12, warna: "merah", tebal: true });
      isi += teks(8, 120, "Jumlah bayar:   " + rm(r.jumlah), { saiz: 12, warna: "tinta", tebal: true });
      isi += teks(8, 140, "Ansuran bulanan: " + rm(r.bulanan), { saiz: 12, warna: "ungu", tebal: true });
      return svg(150, isi, "Rajah pinjaman " + rm(c.P) + " kadar rata " + c.r + " peratus selama " + s.t + " tahun, ansuran bulanan " + rm(r.bulanan));
    }
  };

  /* 8. kad: baki kad kredit jika bayar minimum sahaja. Gelongsor bulan. */
  W.kad = {
    mula: function (c) { return { b: c.b || 6 }; },
    kawalan: function (c) { return [{ k: "b", label: "bulan", min: 1, maks: c.bMaks || 12 }]; },
    kira: function (c, s) {
      var baki = c.baki, faedahJum = 0, bayarJum = 0;
      for (var i = 0; i < s.b; i++) {
        var bayar = Math.max(c.minPeratus / 100 * baki, c.minRM);
        if (bayar > baki) bayar = baki;
        baki -= bayar; bayarJum += bayar;
        var f = baki * (c.kadar / 100) / 12; faedahJum += f; baki += f;
      }
      return { baki: Math.round(baki * 100) / 100, faedah: Math.round(faedahJum * 100) / 100, bayar: Math.round(bayarJum * 100) / 100 };
    },
    lukis: function (c, s) {
      var bM = c.bMaks || 12, isi = "", self = this;
      var kx = function (b) { return 40 + (b / bM) * 206; }, ky = function (v) { return 130 - (v / c.baki) * 100; };
      isi += garis(40, 130, 248, 130, { warna: "tinta3", tebal: 1.2 }) + garis(40, 26, 40, 130, { warna: "tinta3", tebal: 1.2 });
      isi += teks(36, 34, ringkas(c.baki), { kanan: true, saiz: 11 }) + teks(36, 134, "0", { kanan: true, saiz: 11 }) + teks(4, 52, "RM", { saiz: 11 });
      isi += teks(144, 146, "Bulan", { tengah: true, saiz: 11 });
      var d = "M" + kx(0) + " " + ky(c.baki);
      for (var b = 1; b <= bM; b++) d += " L" + b1(kx(b)) + " " + b1(ky(self.kira(c, { b: b }).baki));
      isi += laluan(d, { warna: "merah", tebal: 2.5 });
      isi += garis(kx(s.b), 26, kx(s.b), 130, { warna: "kuning", tebal: 1.5, putus: "4 3" });
      var r = this.kira(c, s);
      isi += teks(8, 14, "Bayar minimum sahaja, bulan " + s.b, { saiz: 11, warna: "tinta", tebal: true });
      isi += teks(8, 166, "Baki hutang:  " + rm(r.baki), { saiz: 12, warna: "merah", tebal: true });
      isi += teks(8, 184, "Jumlah bayar: " + rm(r.bayar), { saiz: 12, warna: "tinta", tebal: true });
      isi += teks(8, 202, "Faedah kena:  " + rm(r.faedah), { saiz: 12, warna: "ungu", tebal: true });
      return svg(210, isi, "Graf baki kad kredit " + rm(c.baki) + " jika bayar minimum sahaja, selepas " + s.b + " bulan baki " + rm(r.baki));
    }
  };

  /* 9. berskala: hubungan ukuran sebenar dan lukisan berskala (lukisan : sebenar) */
  var KE_CM = { km: 100000, m: 100, cm: 1, mm: 0.1 };
  function sebutSkala(pr) { return pr[0] + " : " + pr[1]; }
  function nomK(n) { return String(Math.round(n * 100) / 100); }
  W.berskala = {
    mula: function (c) { return { i: c.i || 0 }; },
    kawalan: function (c) { return [{ k: "i", label: "skala", min: 0, maks: c.pilihan.length - 1, teks: c.pilihan.map(sebutSkala) }]; },
    kira: function (c, s) {
      var pr = c.pilihan[s.i], f = KE_CM[c.unit || "m"], a = pr[0] / pr[1];
      return { skala: sebutSkala(pr), lukisP: Math.round(c.p * f * a * 100) / 100, lukisL: Math.round(c.l * f * a * 100) / 100, seCm: Math.round(pr[1] / pr[0] * 1000) / 1000 };
    },
    lukis: function (c, s) {
      var r = this.kira(c, s), unit = c.unit || "m", isi = "";
      isi += teks(LEBAR / 2, 18, "Skala " + r.skala + "  (lukisan : sebenar)", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      /* Saiz relatif: semua skala dilukis pada satu ukuran piksel-per-cm yang sama
         (ditentukan oleh lukisan terbesar), jadi lukisan benar-benar mengecil
         atau membesar apabila skala berubah. */
      var self = this, mp = 0, ml = 0;
      c.pilihan.forEach(function (_, n) { var q = self.kira(c, { i: n }); mp = Math.max(mp, q.lukisP); ml = Math.max(ml, q.lukisL); });
      var k = Math.min(150 / mp, 92 / ml), w = r.lukisP * k, h = r.lukisL * k;
      var x0 = 40, y0 = 50;
      isi += kotak(x0, y0, w, h, { isi: "lembayungLembut", garis: "ungu", bulat: 3, tebal: 2 });
      isi += teks(x0 + w / 2, y0 - 8, "Lukisan " + nomK(r.lukisP) + " cm", { tengah: true, saiz: 11, warna: "ungu", tebal: true, hasil: true });
      isi += teks(x0 + w + 6, y0 + h / 2 + 4, nomK(r.lukisL) + " cm", { saiz: 11, warna: "ungu", tebal: true, hasil: true });
      var by = y0 + ml * k + 24;
      isi += teks(LEBAR / 2, by, "Sebenar: " + nomK(c.p) + " " + unit + " × " + nomK(c.l) + " " + unit, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      isi += teks(LEBAR / 2, by + 20, "1 cm pada lukisan = " + nomK(r.seCm) + " cm sebenar", { tengah: true, saiz: 11, warna: "tinta2", hasil: true });
      return svg(by + 32, isi, "Rajah segi empat tepat " + nomK(c.p) + " kali " + nomK(c.l) + " " + unit + " dilukis pada skala " + r.skala);
    }
  };

  /* 10. grid: membesarkan atau mengecilkan bentuk pada grid petak */
  function luasPoligon(pt) {
    var a = 0;
    for (var i = 0; i < pt.length; i++) { var j = (i + 1) % pt.length; a += pt[i][0] * pt[j][1] - pt[j][0] * pt[i][1]; }
    return Math.abs(a) / 2;
  }
  W.grid = {
    mula: function (c) { return { i: c.i == null ? 1 : c.i }; },
    kawalan: function (c) { return [{ k: "i", label: "skala", min: 0, maks: c.faktor.length - 1, teks: c.faktor.map(function (f) { return "" + f[0] + " : " + f[1]; }) }]; },
    kira: function (c, s) {
      var f = c.faktor[s.i], k = f[0] / f[1], mx = 0, my = 0;
      c.bentuk.forEach(function (q) { mx = Math.max(mx, q[0]); my = Math.max(my, q[1]); });
      var a0 = luasPoligon(c.bentuk);
      return { k: k, lebar: mx * k, tinggi: my * k, luas: Math.round(a0 * k * k * 100) / 100, luas0: a0, lebar0: mx, tinggi0: my };
    },
    lukis: function (c, s) {
      var r = this.kira(c, s), isi = "", kM = 0;
      c.faktor.forEach(function (f) { kM = Math.max(kM, f[0] / f[1]); });
      var gw = Math.ceil(r.lebar0 * kM), gh = Math.ceil(r.tinggi0 * kM);
      var sel = Math.min(18, Math.floor(232 / gw), Math.floor(130 / gh));
      var gx = (LEBAR - gw * sel) / 2, gy = 14;
      for (var i = 0; i <= gw; i++) isi += garis(gx + i * sel, gy, gx + i * sel, gy + gh * sel, { warna: "garis", tebal: 1 });
      for (var j = 0; j <= gh; j++) isi += garis(gx, gy + j * sel, gx + gw * sel, gy + j * sel, { warna: "garis", tebal: 1 });
      var lukisPoli = function (k) {
        return c.bentuk.map(function (q, n) { return (n ? "L" : "M") + b1(gx + q[0] * k * sel) + " " + b1(gy + gh * sel - q[1] * k * sel); }).join(" ") + " Z";
      };
      isi += laluan(lukisPoli(r.k), { isi: "lembayungLembut", warna: "ungu", tebal: 2 });
      isi += laluan(lukisPoli(1), { warna: "tinta3", tebal: 1.5, putus: "4 3" });
      var by = gy + gh * sel + 22;
      isi += teks(8, by, "Asal:   lebar " + nomK(r.lebar0) + ", tinggi " + nomK(r.tinggi0) + ", luas " + nomK(r.luas0), { saiz: 11, warna: "tinta2" });
      isi += teks(8, by + 18, "Baharu: lebar " + nomK(r.lebar) + ", tinggi " + nomK(r.tinggi) + ", luas " + nomK(r.luas), { saiz: 11, warna: "ungu", tebal: true, hasil: true });
      return svg(by + 28, isi, "Rajah bentuk pada grid petak dibesarkan atau dikecilkan dengan faktor " + nomK(r.k) + ", garis putus ialah bentuk asal");
    }
  };

  /* 11. segitiga: segi tiga bersudut tegak, sudut tirus dan nisbah trigonometri */
  W.segitiga = {
    mula: function (c) { return { i: c.i == null ? 3 : c.i }; },
    kawalan: function (c) { return [{ k: "i", label: "sudut", min: 0, maks: c.sudut.length - 1, teks: c.sudut.map(function (x) { return x + "°"; }) }]; },
    kira: function (c, s) {
      var th = c.sudut[s.i], r = th * Math.PI / 180, h = c.sisi || 10;
      return {
        sudut: th, hipotenus: h,
        bertentangan: Math.round(h * Math.sin(r) * 100) / 100,
        bersebelahan: Math.round(h * Math.cos(r) * 100) / 100,
        sin: Math.round(Math.sin(r) * 1000) / 1000,
        kos: Math.round(Math.cos(r) * 1000) / 1000,
        tan: th === 90 ? null : Math.round(Math.tan(r) * 1000) / 1000
      };
    },
    lukis: function (c, s) {
      var r = this.kira(c, s), isi = "", H = 150, rad = r.sudut * Math.PI / 180;
      var ax = 40, ay = 160, cx = ax + H * Math.cos(rad), by = ay - H * Math.sin(rad);
      isi += garis(ax, ay, cx, ay, { warna: "hijau", tebal: 3 });
      if (r.sudut > 0) isi += garis(cx, ay, cx, by, { warna: "merah", tebal: 3 });
      isi += garis(ax, ay, cx, by, { warna: "ungu", tebal: 3 });
      if (r.sudut > 0 && r.sudut < 90) isi += kotak(cx - 9, ay - 9, 9, 9, { garis: "tinta3", tebal: 1.2, bulat: 0 });
      if (r.sudut > 0 && r.sudut < 90) isi += teks(ax + 26, ay - 6, "θ", { saiz: 13, warna: "tinta", tebal: true });
      isi += teks(8, 194, "Bersebelahan", { saiz: 11, warna: "hijau", tebal: true }) + teks(92, 194, nomK(r.bersebelahan), { saiz: 11, warna: "hijau", tebal: true, hasil: true });
      isi += teks(8, 210, "Bertentangan", { saiz: 11, warna: "merah", tebal: true }) + teks(92, 210, nomK(r.bertentangan), { saiz: 11, warna: "merah", tebal: true, hasil: true });
      isi += teks(8, 226, "Hipotenus", { saiz: 11, warna: "ungu", tebal: true }) + teks(92, 226, nomK(r.hipotenus), { saiz: 11, warna: "ungu", tebal: true });
      isi += teks(126, 194, "sin θ = " + nomK(r.sin), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
      isi += teks(126, 210, "kos θ = " + nomK(r.kos), { saiz: 12, warna: "tinta", tebal: true, hasil: true });
      isi += teks(126, 226, r.tan === null ? "tan θ tak tertakrif" : "tan θ = " + nomK(r.tan), { saiz: r.tan === null ? 11 : 12, warna: "tinta", tebal: true, hasil: true });
      return svg(238, isi, "Rajah segi tiga bersudut tegak dengan sudut tirus " + r.sudut + " darjah, hipotenus " + r.hipotenus + ", dan nilai sin, kos, tan");
    }
  };

  /* ================= bina & hidupkan ================= */
  function keadaan(spec) {
    var wd = W[spec.w]; if (!wd) throw new Error("widget " + spec.w + " tidak dikenali");
    var s = wd.mula(spec), awal = spec.awal || {};
    for (var k in awal) s[k] = awal[k];
    return s;
  }
  function figura(spec, s) {
    if (!spec.kapsyen || !/^Rajah \d/.test(spec.kapsyen)) throw new Error("kapsyen mesti bermula 'Rajah <n>'");
    var wd = W[spec.w];
    return '<figure class="figure jmi' + (spec.cabar ? ' cabar' : '') + '" data-w="' + esc(spec.w) + '" data-c="' + esc(JSON.stringify(spec)) + '">' +
      '<div class="jmi-svg">' + wd.lukis(spec, s) + "</div><figcaption>" + esc(spec.kapsyen) + "</figcaption></figure>";
  }
  /* Node: SVG keadaan awal, dan semua keadaan untuk audit. */
  function lukis(spec) { return figura(spec, keadaan(spec)); }
  function semuaKeadaan(spec) {
    var wd = W[spec.w], s0 = keadaan(spec), out = [];
    var kw = spec.kunci ? [] : wd.kawalan(spec);
    if (!kw.length) return [{ s: s0, svg: wd.lukis(spec, s0) }];
    kw.forEach(function (k) {
      for (var v = k.min; v <= k.maks; v++) {
        var s = JSON.parse(JSON.stringify(s0)); s[k.k] = v;
        out.push({ s: s, svg: wd.lukis(spec, s) });
      }
    });
    return out;
  }

  var JMI = { W: W, lukis: lukis, semuaKeadaan: semuaKeadaan, keadaan: keadaan, bundarAB: bundarAB, kiraAB: kiraAB, hurai: hurai, tulisNombor: tulisNombor };

  if (typeof module !== "undefined" && module.exports) { module.exports = JMI; return; }

  /* ---------- pelayar ---------- */
  function klik() {
    try { if (window.JM_GETAR) window.JM_GETAR(8); } catch (e) {}
    try { if (window.JM_NADA) window.JM_NADA(1400, 0.03, "triangle", 0.04); } catch (e) {}
  }
  function hidupkanSatu(fig) {
    if (fig.__jmi) return; fig.__jmi = true;
    var spec; try { spec = JSON.parse(fig.getAttribute("data-c")); } catch (e) { return; }
    var wd = W[spec.w]; if (!wd || spec.kunci) return;
    var s = keadaan(spec), kotakSvg = fig.querySelector(".jmi-svg");
    var panel = document.createElement("div"); panel.className = "jmi-kawal";
    function lukisSemula() { kotakSvg.innerHTML = wd.lukis(spec, s); }
    wd.kawalan(spec).forEach(function (k) {
      var baris = document.createElement("div"); baris.className = "jmi-baris";
      var lbl = document.createElement("span"); lbl.className = "jmi-label";
      function tulisLabel() { lbl.innerHTML = esc(k.label) + " = <b>" + esc(k.teks ? k.teks[s[k.k]] : s[k.k]) + "</b>"; }
      if (k.butang) {
        var kurang = document.createElement("button"), tambah = document.createElement("button");
        kurang.type = tambah.type = "button"; kurang.className = tambah.className = "jmi-btn";
        kurang.textContent = "↺ Buka"; tambah.textContent = "Lipat ✦";
        kurang.onclick = function () { if (s[k.k] > k.min) { s[k.k]--; tulisLabel(); lukisSemula(); klik(); } };
        tambah.onclick = function () { if (s[k.k] < k.maks) { s[k.k]++; tulisLabel(); lukisSemula(); klik(); } };
        baris.appendChild(kurang); baris.appendChild(lbl); baris.appendChild(tambah);
      } else {
        var inp = document.createElement("input");
        inp.type = "range"; inp.min = k.min; inp.max = k.maks; inp.step = 1; inp.value = s[k.k];
        inp.setAttribute("aria-label", k.label);
        inp.oninput = function () { var v = +inp.value; if (v === s[k.k]) return; s[k.k] = v; tulisLabel(); lukisSemula(); klik(); };
        baris.appendChild(lbl); baris.appendChild(inp);
      }
      tulisLabel(); panel.appendChild(baris);
    });
    var cap = fig.querySelector("figcaption");
    fig.insertBefore(panel, cap);
    if (spec.cabar) {
      var kotakCabar = document.createElement("div"); kotakCabar.className = "jmi-cabar";
      var nota = document.createElement("p"); nota.textContent = "Mod cabar: kira dahulu di kertas conteng, kemudian semak jawapan awak dengan rajah.";
      var sb = document.createElement("button"); sb.type = "button"; sb.className = "jmi-semak"; sb.setAttribute("aria-pressed", "false");
      sb.textContent = "\uD83D\uDC41 Semak dengan rajah";
      sb.onclick = function () {
        var on = !fig.classList.contains("tunjuk");
        fig.classList.toggle("tunjuk", on); sb.setAttribute("aria-pressed", on ? "true" : "false");
        sb.textContent = on ? "Sembunyi hasil rajah" : "\uD83D\uDC41 Semak dengan rajah"; klik();
      };
      kotakCabar.appendChild(nota); kotakCabar.appendChild(sb);
      fig.insertBefore(kotakCabar, panel);
    }
    var ptk = document.createElement("div"); ptk.className = "jmi-petunjuk"; ptk.textContent = "👆 Main dengan rajah ini";
    fig.insertBefore(ptk, kotakSvg);
  }
  JMI.hidupkan = function (akar) {
    var s = (akar || document).querySelectorAll ? (akar || document).querySelectorAll("figure.jmi") : [];
    for (var i = 0; i < s.length; i++) hidupkanSatu(s[i]);
  };
  if (typeof MutationObserver !== "undefined") {
    new MutationObserver(function () { JMI.hidupkan(document); })
      .observe(document.documentElement, { childList: true, subtree: true });
  }
  root.JMI = JMI;
})(typeof window !== "undefined" ? window : this);
