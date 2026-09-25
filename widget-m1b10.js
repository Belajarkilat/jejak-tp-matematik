/* Widget Tingkatan 1 Bab 10 Perimeter dan Luas: W.t1bentuk dengan enam mod.

   Mod (c.mod):
   - empat  : segi empat tepat pada kertas grid, gelongsor panjang dan lebar (perimeter dan luas)
   - anggar : anggar luas bentuk pada grid 1 unit (petak penuh, petak separa, anggaran)
   - terbit : segi empat selari dan segi tiga berbanding segi empat tepat (asas x tinggi)
   - lt     : lelayang (bentuk "lelayang") atau trapezium (bentuk "trapezium") dan rumus luasnya
   - gabung : bentuk gabungan, varian "L" (segi empat tepat ditolak sudut) atau "rumah"
   - kaitan : perimeter tetap 24 cm, luas berubah apabila panjang berubah

   Setiap nombor dikira daripada formula dalam kira(). Unsur jawapan bertanda
   hasil:true disembunyikan dalam mod cabar. Didaftar oleh interaktif.js (Node)
   atau dimuatkan selepas interaktif.js dalam pelayar. */
function daftarT1Bentuk(JMI) {
  "use strict";
  var h = JMI.h, teks = h.teks, garis = h.garis, kotak = h.kotak, svg = h.svg, w = h.w, b1 = h.b1, ungkap = h.ungkap;
  var W = JMI.W;
  function n1(x) { return Math.round(x * 10) / 10; }
  function nom(x) { return String(Math.round(x * 100) / 100); }
  function poli(pts, o) {
    o = o || {};
    return '<path d="' + pts.map(function (p, i) { return (i ? "L" : "M") + b1(p[0]) + " " + b1(p[1]); }).join(" ") +
      ' Z" fill="' + (o.isi ? w(o.isi) : "none") + '" stroke="' + (o.garis ? w(o.garis) : "none") +
      '" stroke-width="' + (o.tebal || 2) + '" stroke-linejoin="round"' +
      (o.putus ? ' stroke-dasharray="' + o.putus + '"' : "") + "></path>";
  }
  function petak(ox, oy, u, c, r, warna) {
    var s = "", i;
    for (i = 0; i <= c; i++) s += garis(ox + i * u, oy, ox + i * u, oy + r * u, { warna: warna || "garis", tebal: 0.8 });
    for (i = 0; i <= r; i++) s += garis(ox, oy + i * u, ox + c * u, oy + i * u, { warna: warna || "garis", tebal: 0.8 });
    return s;
  }
  /* Teks tengah yang dikekang supaya kekal dalam viewBox (lebar anggaran 0.62 x saiz). */
  function tk(x, y, isi, o) {
    var lb = String(isi).length * (o.saiz || 12) * 0.62 / 2;
    return teks(Math.max(lb + 3, Math.min(257 - lb, x)), y, isi, Object.assign({ tengah: true }, o));
  }
  function baris(y, isi, warna, hasil) { return teks(130, y, isi, { saiz: 12, warna: warna || "tinta", tebal: true, tengah: true, hasil: !!hasil }); }
  function barisU(y, segs, warna, hasil) { return ungkap(130, y, segs, { saiz: 12, warna: warna || "tinta", tebal: true, hasil: hasil !== false }); }
  function sudutTegak(x, y, dx, dy) { return kotak(dx > 0 ? x : x - 8, y - 8, 8, 8, { garis: "tinta3", tebal: 1, bulat: 0 }); }
  function isiSenarai(n, dari, teksSatu) { var a = []; for (var i = 0; i <= n; i++) a.push(i < dari ? "-" : teksSatu(i)); return a; }
  function cmT(i) { return i + " cm"; }

  /* ---- keratan poligon cembung (Sutherland-Hodgman) untuk anggaran petak ---- */
  function sisiSilang(a, b, p) { return (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]); }
  function luasB(p) { var s = 0, i, j; for (i = 0; i < p.length; i++) { j = (i + 1) % p.length; s += p[i][0] * p[j][1] - p[j][0] * p[i][1]; } return s / 2; }
  function klip(subj, kl) {
    var orient = luasB(kl) > 0 ? 1 : -1, out = subj, i, j;
    for (i = 0; i < kl.length && out.length; i++) {
      var a = kl[i], b = kl[(i + 1) % kl.length], inp = out; out = [];
      for (j = 0; j < inp.length; j++) {
        var p = inp[j], q = inp[(j + 1) % inp.length], sp = sisiSilang(a, b, p) * orient, sq = sisiSilang(a, b, q) * orient;
        if (sp >= 0) out.push(p);
        if ((sp >= 0) !== (sq >= 0)) { var t = sp / (sp - sq); out.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]); }
      }
    }
    return out;
  }
  var BENTUK_ANGGAR = [
    { nama: "Segi tiga", pts: [[1, 6], [6, 6], [1, 1]] },
    { nama: "Segi empat selari", pts: [[1, 5], [5, 5], [8, 1], [4, 1]] },
    { nama: "Lelayang", pts: [[4, 0], [7, 2], [4, 6], [1, 2]] }
  ];
  function kiraAnggar(b) {
    var pts = BENTUK_ANGGAR[b].pts, penuh = [], separa = [], i, j;
    for (i = 0; i < 9; i++) for (j = 0; j < 6; j++) {
      var cov = Math.abs(luasB(klip([[i, j], [i + 1, j], [i + 1, j + 1], [i, j + 1]], pts)));
      if (cov > 0.999) penuh.push([i, j]); else if (cov > 0.001) separa.push([i, j]);
    }
    return { penuh: penuh, separa: separa, anggar: penuh.length + separa.length / 2, sebenar: Math.abs(luasB(pts)) };
  }

  W.t1bentuk = {
    mula: function (c) {
      switch (c.mod) {
        case "empat": return { p: c.p == null ? 6 : c.p, l: c.l == null ? 4 : c.l };
        case "anggar": return { b: c.b || 0, k: c.k == null ? 0 : c.k };
        case "terbit": return { b: c.b || 0, a: c.a == null ? 5 : c.a, t: c.t == null ? 4 : c.t, s: c.s == null ? 2 : c.s };
        case "lt":
          return c.bentuk === "lelayang" ? { x: c.x == null ? 6 : c.x, y: c.y == null ? 4 : c.y }
            : { a: c.a == null ? 3 : c.a, b: c.b == null ? 7 : c.b, t: c.t == null ? 4 : c.t, l: c.l || 0 };
        case "gabung":
          /* c.w ialah nama widget, jadi keadaan awal guna c.sw dan c.sh */
          return c.varian === "L" ? { w: c.sw == null ? 3 : c.sw, h: c.sh == null ? 2 : c.sh }
            : { w: c.sw == null ? 6 : c.sw, h: c.sh == null ? 3 : c.sh, r: c.r == null ? 2 : c.r };
        case "kaitan": return { p: c.p == null ? 4 : c.p };
      }
      throw new Error("mod t1bentuk " + c.mod + " tidak dikenali");
    },
    kawalan: function (c) {
      switch (c.mod) {
        case "empat":
          return [{ k: "p", label: "panjang", min: 1, maks: c.pMaks || 10, teks: isiSenarai(c.pMaks || 10, 1, cmT) },
                  { k: "l", label: "lebar", min: 1, maks: c.lMaks || 6, teks: isiSenarai(c.lMaks || 6, 1, cmT) }];
        case "anggar":
          return [{ k: "b", label: "bentuk", min: 0, maks: 2, teks: BENTUK_ANGGAR.map(function (x) { return x.nama; }) },
                  { k: "k", label: "langkah", min: 0, maks: 3, teks: ["bentuk", "petak penuh", "+ separa", "anggaran"] }];
        case "terbit":
          return [{ k: "b", label: "bentuk", min: 0, maks: 1, teks: ["segi empat selari", "segi tiga"] },
                  { k: "a", label: "asas", min: 2, maks: 6, teks: isiSenarai(6, 2, cmT) },
                  { k: "t", label: "tinggi", min: 2, maks: 6, teks: isiSenarai(6, 2, cmT) },
                  { k: "s", label: "puncak", min: 0, maks: 6, teks: isiSenarai(6, 0, function (i) { return i + " ke kanan"; }) }];
        case "lt":
          if (c.bentuk === "lelayang")
            return [{ k: "x", label: "d1", min: 2, maks: 10, teks: isiSenarai(10, 2, cmT) },
                    { k: "y", label: "d2", min: 2, maks: 6, teks: isiSenarai(6, 2, cmT) }];
          return [{ k: "a", label: "sisi atas", min: 1, maks: 5, teks: isiSenarai(5, 1, cmT) },
                  { k: "b", label: "sisi bawah", min: 6, maks: 9, teks: isiSenarai(9, 6, cmT) },
                  { k: "t", label: "tinggi", min: 2, maks: 5, teks: isiSenarai(5, 2, cmT) },
                  { k: "l", label: "salinan", min: 0, maks: 1, teks: ["tiada", "putar 180°"] }];
        case "gabung":
          if (c.varian === "L")
            return [{ k: "w", label: "sudut lebar", min: 1, maks: 5, teks: isiSenarai(5, 1, cmT) },
                    { k: "h", label: "sudut tinggi", min: 1, maks: 4, teks: isiSenarai(4, 1, cmT) }];
          return [{ k: "w", label: "lebar", min: 2, maks: 8, teks: isiSenarai(8, 2, cmT) },
                  { k: "h", label: "dinding", min: 1, maks: 4, teks: isiSenarai(4, 1, cmT) },
                  { k: "r", label: "bumbung", min: 1, maks: 4, teks: isiSenarai(4, 1, cmT) }];
        case "kaitan":
          return [{ k: "p", label: "panjang", min: 1, maks: 11, teks: isiSenarai(11, 1, cmT) }];
      }
    },
    kira: function (c, s) {
      switch (c.mod) {
        case "empat": return { peri: 2 * (s.p + s.l), luas: s.p * s.l, p: s.p, l: s.l };
        case "anggar": {
          var k = kiraAnggar(s.b);
          return { penuh: k.penuh.length, separa: k.separa.length, anggar: k.anggar, sebenar: k.sebenar };
        }
        case "terbit": {
          var cond = Math.sqrt(s.s * s.s + s.t * s.t);
          return { luasEmpat: s.a * s.t, luas: s.b ? s.a * s.t / 2 : s.a * s.t, condong: n1(cond), perimeter: n1(2 * (s.a + cond)) };
        }
        case "lt":
          if (c.bentuk === "lelayang") return { d1: s.x, d2: s.y, luas: s.x * s.y / 2, luasEmpat: s.x * s.y };
          return { luas: (s.a + s.b) * s.t / 2, luasSalinan: (s.a + s.b) * s.t, asasBesar: s.a + s.b };
        case "gabung":
          if (c.varian === "L") return { luas: 8 * 6 - s.w * s.h, peri: 2 * (8 + 6), luasTolak: s.w * s.h };
          return { luasEmpat: s.w * s.h, luasTiga: s.w * s.r / 2, luas: s.w * s.h + s.w * s.r / 2 };
        case "kaitan": { var l = 12 - s.p; return { l: l, peri: 2 * (s.p + l), luas: s.p * l }; }
      }
    },
    lukis: function (c, s) {
      var r = this.kira(c, s), isi = "", i, j, u, ox, oy, yb;
      switch (c.mod) {
        case "empat": {
          var pM = c.pMaks || 10, lM = c.lMaks || 6;
          u = Math.min(200 / pM, 120 / lM); ox = 40; oy = 24;
          var pw = s.p * u, lh = s.l * u;
          isi += petak(ox, oy, u, pM, lM, "garis");
          isi += kotak(ox, oy, pw, lh, { isi: "hijauLembut", garis: "hijauLembut", tebal: 0.5, bulat: 0 });
          isi += petak(ox, oy, u, s.p, s.l, "hijau");
          isi += kotak(ox, oy, pw, lh, { garis: "merah", tebal: 3, bulat: 0 });
          isi += teks(ox + pw / 2, oy - 7, s.p + " cm", { tengah: true, saiz: 11, warna: "merah", tebal: true });
          isi += teks(ox - 5, oy + lh / 2 + 4, s.l + " cm", { kanan: true, saiz: 11, warna: "merah", tebal: true });
          yb = oy + lM * u + 22;
          isi += baris(yb, "Perimeter = 2 × (" + s.p + " + " + s.l + ") = " + r.peri + " cm", "merah", true);
          isi += barisU(yb + 18, ["Luas = " + s.p + " × " + s.l + " = " + r.luas + " cm", { p: "2" }], "hijau");
          return svg(yb + 30, isi, "Rajah segi empat tepat pada grid petak 1 sentimeter, panjang " + s.p + " dan lebar " + s.l + " sentimeter; garis merah ialah perimeter dan petak hijau ialah luas");
        }
        case "anggar": {
          u = 23; ox = 26; oy = 10;
          var kk = kiraAnggar(s.b), pts = BENTUK_ANGGAR[s.b].pts.map(function (p) { return [ox + p[0] * u, oy + p[1] * u]; });
          if (s.k >= 1) kk.penuh.forEach(function (p) { isi += kotak(ox + p[0] * u, oy + p[1] * u, u, u, { isi: "hijauLembut", garis: "hijauLembut", tebal: 0.5, bulat: 0 }); });
          if (s.k >= 2) kk.separa.forEach(function (p) { isi += kotak(ox + p[0] * u, oy + p[1] * u, u, u, { isi: "kuningLembut", garis: "kuningLembut", tebal: 0.5, bulat: 0 }); });
          if (s.k === 0) isi += poli(pts, { isi: "kuningLembut" });
          isi += petak(ox, oy, u, 9, 6, "garis");
          isi += poli(pts, { garis: "tinta", tebal: 2.5 });
          yb = oy + 6 * u + 22;
          if (s.k >= 1) isi += baris(yb, s.k === 1 ? "Petak penuh = " + r.penuh : "Penuh = " + r.penuh + ", separa = " + r.separa, "hijau", true);
          if (s.k >= 3) {
            isi += barisU(yb + 18, ["Anggaran = " + r.penuh + " + " + r.separa + " ÷ 2 = " + nom(r.anggar) + " unit", { p: "2" }], "tinta");
            isi += barisU(yb + 36, ["Luas sebenar = " + nom(r.sebenar) + " unit", { p: "2" }], "merah");
          }
          return svg(yb + 46, isi, "Rajah " + BENTUK_ANGGAR[s.b].nama.toLowerCase() + " pada grid petak 1 unit untuk menganggar luas dengan mengira petak penuh dan petak separa");
        }
        case "terbit": {
          u = 20; ox = 10; oy = 8; yb = oy + 6 * u;
          var yt = yb - s.t * u, X = function (v) { return ox + v * u; };
          isi += petak(ox, oy, u, 12, 6, "garis");
          isi += poli([[X(0), yb], [X(s.a), yb], [X(s.a), yt], [X(0), yt]], { garis: "tinta3", tebal: 1.5, putus: "4 3" });
          var bentuk = s.b === 0 ? [[X(0), yb], [X(s.a), yb], [X(s.a + s.s), yt], [X(s.s), yt]] : [[X(0), yb], [X(s.a), yb], [X(s.s), yt]];
          isi += poli(bentuk, { isi: "hijauLembut", garis: "hijau", tebal: 2.5 });
          isi += garis(X(s.s), yt, X(s.s), yb, { warna: "merah", tebal: 2, putus: "4 3" });
          if (s.s > 0) isi += sudutTegak(X(s.s), yb, 1, 0);
          isi += tk(X(s.a / 2), yb + 15, "asas = " + s.a + " cm", { saiz: 11, warna: "hijau", tebal: true });
          var kiri = X(s.s) - 5 - 33 >= 4;
          isi += teks(X(s.s) + (kiri ? -5 : 5), (yb + yt) / 2 + 4, "t = " + s.t, { kanan: kiri, saiz: 11, warna: "merah", tebal: true });
          var y0 = yb + 34;
          if (s.b === 0) {
            isi += barisU(y0, ["Luas = " + s.a + " × " + s.t + " = " + r.luas + " cm", { p: "2" }], "hijau");
            isi += baris(y0 + 18, "Perimeter = " + nom(r.perimeter) + " cm", "merah", true);
          } else {
            isi += barisU(y0, ["Segi empat tepat = " + s.a + " × " + s.t + " = " + r.luasEmpat + " cm", { p: "2" }], "tinta3");
            isi += barisU(y0 + 18, ["Segi tiga = ½ × " + s.a + " × " + s.t + " = " + nom(r.luas) + " cm", { p: "2" }], "hijau");
          }
          return svg(y0 + 30, isi, "Rajah " + (s.b === 0 ? "segi empat selari" : "segi tiga") + " dengan asas " + s.a + " dan tinggi " + s.t + " sentimeter berbanding segi empat tepat berputus-putus yang sama asas dan tinggi");
        }
        case "lt": {
          if (c.bentuk === "lelayang") {
            u = 20; ox = 30; oy = 8; yb = oy + 6 * u;
            var W1 = s.x * u, H1 = s.y * u, top = s.y * 0.4 * u, cxk = ox + 100;
            var ty = yb - H1;
            isi += petak(ox, oy, u, 10, 6, "garis");
            isi += kotak(cxk - W1 / 2, ty, W1, H1, { garis: "tinta3", tebal: 1.5, bulat: 0 });
            isi += poli([[cxk, ty], [cxk + W1 / 2, ty + top], [cxk, yb], [cxk - W1 / 2, ty + top]], { isi: "hijauLembut", garis: "hijau", tebal: 2.5 });
            isi += garis(cxk - W1 / 2, ty + top, cxk + W1 / 2, ty + top, { warna: "merah", tebal: 2, putus: "4 3" });
            isi += garis(cxk, ty, cxk, yb, { warna: "ungu", tebal: 2, putus: "4 3" });
            isi += teks(130, yb + 15, "d1 = " + s.x + " cm, d2 = " + s.y + " cm", { tengah: true, saiz: 11, warna: "tinta", tebal: true });
            var y1 = yb + 34;
            isi += baris(y1, "Segi empat tepat = " + s.x + " × " + s.y + " = " + r.luasEmpat, "tinta3", true);
            isi += barisU(y1 + 18, ["Luas = ½ × " + s.x + " × " + s.y + " = " + nom(r.luas) + " cm", { p: "2" }], "hijau");
            return svg(y1 + 30, isi, "Rajah lelayang dengan pepenjuru d1 " + s.x + " dan d2 " + s.y + " sentimeter di dalam segi empat tepat berputus-putus; luas lelayang ialah separuh hasil darab dua pepenjuru");
          }
          u = 17; oy = 20; ox = 11; yb = oy + 5 * u;
          var o = (s.b - s.a) / 2, Xt = function (v) { return ox + v * u; }, Yt = yb - s.t * u + 0, base = yb;
          isi += petak(ox, oy, u, 14, 5, "garis");
          var yTop = base - s.t * u;
          var asal = [[Xt(0), base], [Xt(s.b), base], [Xt(o + s.a), yTop], [Xt(o), yTop]];
          isi += poli(asal, { isi: "hijauLembut", garis: "hijau", tebal: 2.5 });
          if (s.l === 1) {
            isi += poli([[Xt(s.b), base], [Xt(s.a + s.b), base], [Xt(o + s.a + s.b), yTop], [Xt(o + s.a), yTop]], { isi: "kuningLembut", garis: "kuning", tebal: 2.5 });
            isi += garis(Xt(s.b), base, Xt(o + s.a), yTop, { warna: "tinta3", tebal: 1.2, putus: "3 3" });
          }
          isi += tk(Xt(o + s.a / 2), yTop - 4, "a = " + s.a, { saiz: 11, warna: "merah", tebal: true });
          isi += tk(Xt(s.b / 2), base + 14, "b = " + s.b, { saiz: 11, warna: "ungu", tebal: true });
          var y2 = base + 34;
          if (s.l === 1) {
            isi += barisU(y2, ["Selari: asas " + (s.a + s.b) + " × tinggi " + s.t + " = " + r.luasSalinan + " cm", { p: "2" }], "tinta3");
            isi += barisU(y2 + 18, ["Trapezium = " + r.luasSalinan + " ÷ 2 = " + nom(r.luas) + " cm", { p: "2" }], "hijau");
          } else {
            isi += baris(y2, "Luas = ½ × (" + s.a + " + " + s.b + ") × " + s.t, "tinta3", true);
            isi += barisU(y2 + 18, ["= " + nom(r.luas) + " cm", { p: "2" }], "hijau");
          }
          return svg(y2 + 30, isi, "Rajah trapezium dengan sisi selari " + s.a + " dan " + s.b + " sentimeter dan tinggi " + s.t + " sentimeter" + (s.l === 1 ? ", ditambah salinan yang diputar 180 darjah membentuk segi empat selari" : ""));
        }
        case "gabung": {
          if (c.varian === "L") {
            u = 25; ox = 40; oy = 10; yb = oy + 6 * u;
            isi += petak(ox, oy, u, 8, 6, "garis");
            var Wn = 8 - s.w, Hn = s.h;
            isi += poli([[ox, oy], [ox + Wn * u, oy], [ox + Wn * u, oy + Hn * u], [ox + 8 * u, oy + Hn * u], [ox + 8 * u, yb], [ox, yb]], { isi: "hijauLembut", garis: "hijau", tebal: 2.5 });
            isi += poli([[ox + Wn * u, oy], [ox + 8 * u, oy], [ox + 8 * u, oy + Hn * u], [ox + Wn * u, oy + Hn * u]], { garis: "merah", tebal: 1.5, putus: "4 3" });
            isi += teks(ox + 4 * u, yb + 15, "8 cm", { tengah: true, saiz: 11, warna: "tinta", tebal: true });
            isi += teks(ox - 5, oy + 3 * u + 4, "6 cm", { kanan: true, saiz: 11, warna: "tinta", tebal: true });
            var y3 = yb + 34;
            isi += barisU(y3, ["Luas = 8 × 6 − " + s.w + " × " + s.h + " = " + r.luas + " cm", { p: "2" }], "hijau");
            isi += baris(y3 + 18, "Perimeter = 2 × (8 + 6) = " + r.peri + " cm", "merah", true);
            return svg(y3 + 30, isi, "Rajah bentuk L: segi empat tepat 8 kali 6 sentimeter ditolak sudut berputus-putus " + s.w + " kali " + s.h + " sentimeter di penjuru kanan atas");
          }
          u = 17; oy = 6; ox = 62;
          var geser = ox + (8 - s.w) * u / 2, ybr = oy + 8 * u, yd = ybr - s.h * u, yp = yd - s.r * u;
          isi += petak(ox, oy, u, 8, 8, "garis");
          isi += poli([[geser, ybr], [geser + s.w * u, ybr], [geser + s.w * u, yd], [geser, yd]], { isi: "hijauLembut", garis: "hijau", tebal: 2.5 });
          isi += poli([[geser, yd], [geser + s.w * u, yd], [geser + s.w * u / 2, yp]], { isi: "kuningLembut", garis: "kuning", tebal: 2.5 });
          isi += teks(geser + s.w * u / 2, ybr + 14, "lebar " + s.w + " cm", { tengah: true, saiz: 11, warna: "tinta", tebal: true });
          var y4 = ybr + 32;
          isi += barisU(y4, ["Segi empat tepat = " + s.w + " × " + s.h + " = " + r.luasEmpat + " cm", { p: "2" }], "hijau");
          isi += barisU(y4 + 18, ["Segi tiga = ½ × " + s.w + " × " + s.r + " = " + nom(r.luasTiga) + " cm", { p: "2" }], "kuning");
          isi += barisU(y4 + 36, ["Jumlah luas = " + nom(r.luas) + " cm", { p: "2" }], "tinta");
          return svg(y4 + 46, isi, "Rajah rumah: segi empat tepat lebar " + s.w + " dan tinggi " + s.h + " sentimeter dengan bumbung segi tiga tinggi " + s.r + " sentimeter");
        }
        case "kaitan": {
          u = 8; var pw2 = s.p * u, lh2 = r.l * u, x0 = 130 - pw2 / 2, y00 = 20;
          isi += kotak(x0, y00, pw2, lh2, { isi: "hijauLembut", garis: "merah", tebal: 3, bulat: 0 });
          isi += teks(130, 13, s.p + " cm × " + r.l + " cm", { tengah: true, saiz: 11, warna: "merah", tebal: true });
          var base2 = 162;
          for (i = 1; i <= 11; i++) {
            var hb = (i * (12 - i)) * 1.4, bx = 9 + (i - 1) * 22;
            isi += kotak(bx + 2, base2 - hb, 18, hb, { isi: i === s.p ? "merah" : "hijauLembut", garis: i === s.p ? "merah" : "hijau", tebal: 1, bulat: 1 });
            isi += teks(bx + 11, base2 + 13, String(i), { tengah: true, saiz: 11, warna: i === s.p ? "merah" : "tinta2", tebal: i === s.p });
          }
          var y5 = base2 + 34;
          isi += baris(y5, "Perimeter = 2 × (" + s.p + " + " + r.l + ") = " + r.peri + " cm", "tinta");
          isi += barisU(y5 + 18, ["Luas = " + s.p + " × " + r.l + " = " + r.luas + " cm", { p: "2" }], "hijau");
          return svg(y5 + 28, isi, "Rajah segi empat tepat berperimeter tetap 24 sentimeter dengan panjang " + s.p + " dan lebar " + r.l + " sentimeter; carta palang menunjukkan luas bagi setiap panjang dari 1 hingga 11");
        }
      }
    }
  };
}
if (typeof module !== "undefined") module.exports = daftarT1Bentuk; else daftarT1Bentuk(window.JMI);
