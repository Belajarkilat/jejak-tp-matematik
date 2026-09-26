/* Widget Tingkatan 2 Bab 6: Bentuk Geometri Tiga Dimensi.
   Satu widget `t2pepejal` dengan enam mod (spec.mod):
   - jenis     : gelongsor memilih pepejal (kubus ... sfera); muka, tepi, bucu dikira daripada geometri
   - bentangan : pepejal 3D kecil dan bentangannya (rata) untuk enam pepejal
   - luas      : gelongsor bentuk dan saiz; rumus luas permukaan dikira langkah demi langkah
   - isipadu   : gelongsor bentuk dan saiz; rumus isi padu dikira, ditukar kepada liter
   - tuang     : piramid (kon) dituang ke dalam prisma (silinder) yang sama tapak dan tinggi
   - gabung    : pepejal gabungan (silinder + kon, silinder + hemisfera, kuboid + prisma segi tiga)
   Semua nombor dikira daripada formula (pi = 22/7). Pepejal berbucu dilukis daripada koordinat
   bucu dengan garis nampak (padu) dan garis terlindung (sempang).
   Fail ini didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js; pelayar: tag <script>). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;
    var PI = 22 / 7, AN = 0.42, PANDANG = [AN, AN, -1];

    function bul(x, n) { var k = Math.pow(10, n == null ? 2 : n); return Math.round(x * k) / k; }
    function fm(x) { return String(bul(x, 2)); }
    function hasilG(isi) { return '<g class="jmi-hasil">' + isi + "</g>"; }
    function pt(x, y) { return h.b1(x) + " " + h.b1(y); }
    function el(d, o) {
      o = o || {};
      return '<path d="' + d + '" fill="' + (o.isi ? h.w(o.isi) : "none") + '" stroke="' + (o.garis === null ? "none" : h.w(o.garis || "tinta")) +
        '" stroke-width="' + (o.tebal || 1.6) + '"' + (o.putus ? ' stroke-dasharray="' + o.putus + '"' : "") + ' stroke-linejoin="round"></path>';
    }
    function tengah(y, t, o) {
      o = o || {};
      return teks(130, y, t, { saiz: o.saiz || 12, warna: o.warna || "tinta", tebal: o.tebal, tengah: true, hasil: o.hasil });
    }

    /* ---------- geometri pepejal berbucu ---------- */
    function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
    function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
    function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }

    /* Muka nampak jika normal luarnya menghadap pemerhati; tepi nampak jika bersempadan dengan muka nampak. */
    function bina(v, f) {
      var cen = [0, 0, 0], edges = {}, keys = [];
      v.forEach(function (p) { cen[0] += p[0] / v.length; cen[1] += p[1] / v.length; cen[2] += p[2] / v.length; });
      var faces = f.map(function (idx) {
        var n = cross(sub(v[idx[1]], v[idx[0]]), sub(v[idx[2]], v[idx[0]])), fc = [0, 0, 0];
        idx.forEach(function (i) { fc[0] += v[i][0] / idx.length; fc[1] += v[i][1] / idx.length; fc[2] += v[i][2] / idx.length; });
        if (dot(n, sub(fc, cen)) < 0) n = [-n[0], -n[1], -n[2]];
        var len = Math.sqrt(dot(n, n)); n = [n[0] / len, n[1] / len, n[2] / len];
        return { idx: idx, n: n, vis: dot(n, PANDANG) > 1e-9 };
      });
      faces.forEach(function (fc) {
        fc.idx.forEach(function (i, k) {
          var j = fc.idx[(k + 1) % fc.idx.length], a = Math.min(i, j), b = Math.max(i, j), key = a + "-" + b;
          if (!edges[key]) { edges[key] = { a: a, b: b, vis: false }; keys.push(key); }
          if (fc.vis) edges[key].vis = true;
        });
      });
      return { v: v, faces: faces, edges: keys.map(function (k) { return edges[k]; }) };
    }
    function kuboid(p, l, t) {
      return bina([[0, 0, 0], [p, 0, 0], [p, t, 0], [0, t, 0], [0, 0, l], [p, 0, l], [p, t, l], [0, t, l]],
        [[0, 1, 2, 3], [4, 5, 6, 7], [0, 3, 7, 4], [1, 2, 6, 5], [0, 1, 5, 4], [3, 2, 6, 7]]);
    }
    /* Prisma: poligon depan (satah xy) ditolak sedalam L. */
    function prisma(pts, L) {
      var n = pts.length, v = [], f = [], i, dep = [], bel = [];
      pts.forEach(function (q) { v.push([q[0], q[1], 0]); });
      pts.forEach(function (q) { v.push([q[0], q[1], L]); });
      for (i = 0; i < n; i++) { dep.push(i); bel.push(n + i); f.push([i, (i + 1) % n, n + (i + 1) % n, n + i]); }
      f.push(dep); f.push(bel);
      return bina(v, f);
    }
    /* Piramid: tapak poligon pada satah mengufuk (y = 0), puncak di atas. */
    function piramid(tapak, puncak) {
      var n = tapak.length, v = tapak.concat([puncak]), f = [], i, asas = [];
      for (i = 0; i < n; i++) { asas.push(i); f.push([i, (i + 1) % n, n]); }
      f.push(asas);
      return bina(v, f);
    }
    function piramidSegiEmpat(a, t) { return piramid([[0, 0, 0], [a, 0, 0], [a, 0, a], [0, 0, a]], [a / 2, t, a / 2]); }
    function proj(p) { return [p[0] + AN * p[2], p[1] + AN * p[2]]; }
    function pandu(P, box) {
      var mnx = 1e9, mxx = -1e9, mny = 1e9, mxy = -1e9;
      P.v.forEach(function (p) { var q = proj(p); mnx = Math.min(mnx, q[0]); mxx = Math.max(mxx, q[0]); mny = Math.min(mny, q[1]); mxy = Math.max(mxy, q[1]); });
      return { s: Math.min(box.w / (mxx - mnx), box.h / (mxy - mny)), cx: (mnx + mxx) / 2, cy: (mny + mxy) / 2, bx: box.x + box.w / 2, by: box.y + box.h / 2 };
    }
    function skrin(T, p) { var q = proj(p); return [T.bx + T.s * (q[0] - T.cx), T.by - T.s * (q[1] - T.cy)]; }
    function warnaMuka(n) {
      var ax = Math.abs(n[0]), ay = Math.abs(n[1]), az = Math.abs(n[2]);
      if (az >= ay && az >= ax) return "hijauLembut";
      return ay >= ax ? "kuningLembut" : "lembayungLembut";
    }
    function lukisPoli(P, T, o) {
      o = o || {};
      var out = "", d = "";
      P.faces.forEach(function (fc) {
        if (!fc.vis) return;
        var q = "";
        fc.idx.forEach(function (k, j) { var s = skrin(T, P.v[k]); q += (j ? "L" : "M") + pt(s[0], s[1]); });
        out += el(q + "Z", { isi: o.isi || warnaMuka(fc.n), garis: null });
      });
      P.edges.forEach(function (e) {
        if (e.vis) return;
        var a = skrin(T, P.v[e.a]), b = skrin(T, P.v[e.b]);
        d += "M" + pt(a[0], a[1]) + "L" + pt(b[0], b[1]);
      });
      if (d) out += el(d, { garis: "tinta3", tebal: 1.2, putus: "3 3" });
      d = "";
      P.edges.forEach(function (e) {
        if (!e.vis) return;
        var a = skrin(T, P.v[e.a]), b = skrin(T, P.v[e.b]);
        d += "M" + pt(a[0], a[1]) + "L" + pt(b[0], b[1]);
      });
      if (d) out += el(d, { garis: "tinta", tebal: 1.8 });
      return out;
    }
    function lukisSolid(P, box, o) { return lukisPoli(P, pandu(P, box), o); }

    /* ---------- pepejal melengkung (unjuran serong: bulatan dilukis sebagai elips) ---------- */
    function elips(cx, cy, R, RY, isi, garis, tebal) {
      return '<ellipse cx="' + h.b1(cx) + '" cy="' + h.b1(cy) + '" rx="' + h.b1(R) + '" ry="' + h.b1(RY) + '" fill="' + (isi ? h.w(isi) : "none") +
        '" stroke="' + h.w(garis || "tinta") + '" stroke-width="' + (tebal || 1.8) + '"></ellipse>';
    }
    function silinderPx(cx, yb, R, H, o) {
      o = o || {};
      var RY = R * 0.3, x0 = cx - R, x1 = cx + R, yt = yb - H, out = "";
      out += el("M" + pt(x0, yt) + "L" + pt(x0, yb) + "A" + h.b1(R) + " " + h.b1(RY) + " 0 0 0 " + pt(x1, yb) + "L" + pt(x1, yt) + "Z", { isi: o.isi || "hijauLembut", garis: null });
      out += el("M" + pt(x0, yb) + "A" + h.b1(R) + " " + h.b1(RY) + " 0 0 1 " + pt(x1, yb), { garis: "tinta3", tebal: 1.2, putus: "3 3" });
      out += el("M" + pt(x0, yb) + "A" + h.b1(R) + " " + h.b1(RY) + " 0 0 0 " + pt(x1, yb), { garis: "tinta", tebal: 1.8 });
      out += h.garis(x0, yt, x0, yb, { warna: "tinta", tebal: 1.8 }) + h.garis(x1, yt, x1, yb, { warna: "tinta", tebal: 1.8 });
      if (!o.tanpaAtas) out += elips(cx, yt, R, RY, o.isiAtas === undefined ? "kuningLembut" : o.isiAtas, "tinta", 1.8);
      return out;
    }
    function konPx(cx, yb, R, H, o) {
      o = o || {};
      var RY = R * 0.3, x0 = cx - R, x1 = cx + R, out = "";
      out += el("M" + pt(cx, yb - H) + "L" + pt(x0, yb) + "A" + h.b1(R) + " " + h.b1(RY) + " 0 0 0 " + pt(x1, yb) + "Z", { isi: o.isi || "hijauLembut", garis: "tinta", tebal: 1.8 });
      out += el("M" + pt(x0, yb) + "A" + h.b1(R) + " " + h.b1(RY) + " 0 0 1 " + pt(x1, yb), { garis: "tinta3", tebal: 1.2, putus: "3 3" });
      return out;
    }
    function sferaPx(cx, cy, R) {
      var RY = R * 0.3, out = '<circle cx="' + h.b1(cx) + '" cy="' + h.b1(cy) + '" r="' + h.b1(R) + '" fill="' + h.w("hijauLembut") + '" stroke="' + h.w("tinta") + '" stroke-width="1.8"></circle>';
      out += el("M" + pt(cx - R, cy) + "A" + h.b1(R) + " " + h.b1(RY) + " 0 0 1 " + pt(cx + R, cy), { garis: "tinta3", tebal: 1.2, putus: "3 3" });
      out += el("M" + pt(cx - R, cy) + "A" + h.b1(R) + " " + h.b1(RY) + " 0 0 0 " + pt(cx + R, cy), { garis: "tinta", tebal: 1.4 });
      return out;
    }
    function hemiPx(cx, yb, R) {
      var RY = R * 0.3, x0 = cx - R, x1 = cx + R, out = "";
      out += el("M" + pt(x0, yb) + "A" + h.b1(R) + " " + h.b1(R) + " 0 0 1 " + pt(x1, yb) + "A" + h.b1(R) + " " + h.b1(RY) + " 0 0 1 " + pt(x0, yb) + "Z", { isi: "hijauLembut", garis: "tinta", tebal: 1.8 });
      out += el("M" + pt(x0, yb) + "A" + h.b1(R) + " " + h.b1(RY) + " 0 0 1 " + pt(x1, yb), { garis: "tinta3", tebal: 1.2, putus: "3 3" });
      return out;
    }
    /* Pepejal melengkung dalam kotak: skala mengikut r dan tinggi. */
    function lukisSilinder(r, t, box) {
      var s = Math.min(box.w / (2 * r), box.h / (t + 0.6 * r)), R = r * s, H = t * s, cx = box.x + box.w / 2, cy = box.y + box.h / 2;
      return silinderPx(cx, cy + H / 2, R, H);
    }
    function lukisKon(r, t, box) {
      var s = Math.min(box.w / (2 * r), box.h / (t + 0.3 * r)), R = r * s, H = t * s, cx = box.x + box.w / 2, cy = box.y + box.h / 2;
      return konPx(cx, cy + (H - 0.3 * R) / 2, R, H);
    }
    function lukisSfera(r, box) {
      var s = Math.min(box.w, box.h) / (2 * r);
      return sferaPx(box.x + box.w / 2, box.y + box.h / 2, r * s);
    }

    /* ---------- katalog ---------- */
    var NAMA_JENIS = ["kubus", "kuboid", "prisma segi tiga", "prisma heksagon", "piramid segi empat", "piramid segi tiga", "silinder", "kon", "sfera"];
    var TAJUK_JENIS = ["Kubus", "Kuboid", "Prisma segi tiga", "Prisma heksagon", "Piramid segi empat", "Piramid segi tiga", "Silinder", "Kon", "Sfera"];
    function poliJenis(i) {
      var k = Math.sqrt(3) / 2;
      switch (i) {
        case 0: return kuboid(2, 2, 2);
        case 1: return kuboid(3, 2, 1.5);
        case 2: return prisma([[0, 0], [2.4, 0], [0, 1.8]], 3);
        case 3: return prisma([[2, k], [1.5, 2 * k], [0.5, 2 * k], [0, k], [0.5, 0], [1.5, 0]], 2.4);
        case 4: return piramidSegiEmpat(2, 2.2);
        case 5: return piramid([[0, 0, 0], [2, 0, 0], [1, 0, 1.8]], [1, 2.2, 0.6]);
        default: return null;
      }
    }
    var KELAS = [
      ["prisma", "segi empat sama"], ["prisma", "segi empat tepat"], ["prisma", "segi tiga"], ["prisma", "heksagon"],
      ["piramid", "segi empat sama"], ["piramid", "segi tiga"]
    ];
    function maklumat(i) {
      var P = poliJenis(i);
      if (P) {
        var kl = KELAS[i];
        return { nama: TAJUK_JENIS[i], muka: P.faces.length, tepi: P.edges.length, bucu: P.v.length, kumpulan: kl[0], huraiKuncilas: kl[0] === "prisma" ? "Keratan rentas: " + kl[1] : "Tapak: " + kl[1], melengkung: false };
      }
      if (i === 6) return { nama: "Silinder", rata: 2, lengkung: 1, tepi: 2, bucu: 0, kumpulan: "pepejal melengkung", huraiKuncilas: "Tapak: 2 bulatan sama", melengkung: true };
      if (i === 7) return { nama: "Kon", rata: 1, lengkung: 1, tepi: 1, bucu: 1, kumpulan: "pepejal melengkung", huraiKuncilas: "Tapak: 1 bulatan, 1 puncak", melengkung: true };
      return { nama: "Sfera", rata: 0, lengkung: 1, tepi: 0, bucu: 0, kumpulan: "pepejal melengkung", huraiKuncilas: "Tiada tapak, tiada tepi", melengkung: true };
    }
    function lukisJenis(i, box) {
      var P = poliJenis(i);
      if (P) return lukisSolid(P, box);
      if (i === 6) return lukisSilinder(1, 2, box);
      if (i === 7) return lukisKon(1, 2, box);
      return lukisSfera(1, box);
    }

    /* Bentuk am mengikut dimensi (untuk luas dan isi padu). */
    function lukisDim(k, d, box) {
      if (k === "kubus") return lukisSolid(kuboid(d.a, d.a, d.a), box);
      if (k === "kuboid") return lukisSolid(kuboid(d.p, d.l, d.t), box);
      if (k === "prisma") return lukisSolid(prisma([[0, 0], [d.a, 0], [0, d.b]], d.L), box);
      if (k === "piramid") return lukisSolid(piramidSegiEmpat(d.a, d.tegak), box);
      if (k === "silinder") return lukisSilinder(d.r, d.t, box);
      if (k === "kon") return lukisKon(d.r, d.tegak, box);
      return lukisSfera(d.r, box);
    }

    /* ---------- data luas permukaan ---------- */
    var LUAS = [
      { k: "kubus", nama: "kubus", pre: [{ a: 2 }, { a: 3 }, { a: 5 }, { a: 10 }] },
      { k: "kuboid", nama: "kuboid", pre: [{ p: 5, l: 4, t: 3 }, { p: 6, l: 3, t: 2 }, { p: 8, l: 5, t: 4 }, { p: 10, l: 6, t: 3 }] },
      { k: "prisma", nama: "prisma segi tiga", pre: [{ a: 3, b: 4, c: 5, L: 10 }, { a: 6, b: 8, c: 10, L: 12 }, { a: 5, b: 12, c: 13, L: 10 }, { a: 8, b: 15, c: 17, L: 6 }] },
      { k: "piramid", nama: "piramid", pre: [{ a: 6, s: 5 }, { a: 8, s: 5 }, { a: 10, s: 13 }, { a: 12, s: 10 }] },
      { k: "silinder", nama: "silinder", pre: [{ r: 7, t: 10 }, { r: 14, t: 20 }, { r: 3.5, t: 10 }, { r: 7, t: 5 }] },
      { k: "kon", nama: "kon", pre: [{ r: 7, s: 25 }, { r: 14, s: 50 }, { r: 3.5, s: 12.5 }, { r: 21, s: 29 }] },
      { k: "sfera", nama: "sfera", pre: [{ r: 7 }, { r: 3.5 }, { r: 14 }, { r: 10.5 }] }
    ];
    var ISI = [
      { k: "kubus", nama: "kubus", pre: [{ a: 2 }, { a: 3 }, { a: 5 }, { a: 10 }] },
      { k: "kuboid", nama: "kuboid", pre: [{ p: 5, l: 4, t: 3 }, { p: 6, l: 3, t: 2 }, { p: 8, l: 5, t: 4 }, { p: 10, l: 6, t: 3 }] },
      { k: "prisma", nama: "prisma segi tiga", pre: [{ a: 3, b: 4, c: 5, L: 10 }, { a: 6, b: 8, c: 10, L: 12 }, { a: 5, b: 12, c: 13, L: 10 }, { a: 8, b: 15, c: 17, L: 6 }] },
      { k: "piramid", nama: "piramid", pre: [{ a: 6, t: 5 }, { a: 9, t: 4 }, { a: 12, t: 10 }, { a: 10, t: 6 }] },
      { k: "silinder", nama: "silinder", pre: [{ r: 7, t: 10 }, { r: 14, t: 5 }, { r: 3.5, t: 8 }, { r: 10.5, t: 4 }] },
      { k: "kon", nama: "kon", pre: [{ r: 7, t: 6 }, { r: 7, t: 12 }, { r: 3.5, t: 6 }, { r: 14, t: 9 }] },
      { k: "sfera", nama: "sfera", pre: [{ r: 7 }, { r: 3.5 }, { r: 14 }, { r: 10.5 }] }
    ];
    var NAMA_SAIZ = ["kecil", "sederhana", "besar", "sangat besar"];

    function luasKira(k, d) {
      var L = {};
      switch (k) {
        case "kubus": L.nilai = 6 * d.a * d.a; L.rumus = "LP = 6 × a × a"; L.ganti = "6 × " + d.a + " × " + d.a; L.dim = "a = " + d.a + " cm"; break;
        case "kuboid": L.nilai = 2 * (d.p * d.l + d.p * d.t + d.l * d.t); L.rumus = "LP = 2(pl + pt + lt)";
          L.ganti = "2(" + d.p * d.l + " + " + d.p * d.t + " + " + d.l * d.t + ")"; L.dim = "p = " + d.p + ", l = " + d.l + ", t = " + d.t + " cm"; break;
        case "prisma": L.nilai = 2 * (0.5 * d.a * d.b) + (d.a + d.b + d.c) * d.L; L.rumus = "LP = 2(1/2 ab) + (a + b + c)L";
          L.ganti = "2(" + fm(0.5 * d.a * d.b) + ") + (" + (d.a + d.b + d.c) + ")(" + d.L + ")"; L.dim = "tapak " + d.a + ", " + d.b + ", " + d.c + "; panjang " + d.L + " cm"; break;
        case "piramid": L.nilai = d.a * d.a + 4 * (0.5 * d.a * d.s); L.rumus = "LP = a × a + 4(1/2 × a × s)";
          L.ganti = d.a + " × " + d.a + " + 4(1/2 × " + d.a + " × " + d.s + ")"; L.dim = "a = " + d.a + " cm, s = " + d.s + " cm condong"; break;
        case "silinder": L.nilai = 2 * PI * d.r * (d.r + d.t); L.rumus = "LP = 2πr(r + t)";
          L.ganti = "2(22/7)(" + d.r + ")(" + fm(d.r + d.t) + ")"; L.dim = "r = " + d.r + " cm, t = " + d.t + " cm"; break;
        case "kon": L.nilai = PI * d.r * (d.r + d.s); L.rumus = "LP = πr(r + s)";
          L.ganti = "(22/7)(" + d.r + ")(" + fm(d.r + d.s) + ")"; L.dim = "r = " + d.r + " cm, s = " + d.s + " cm condong"; break;
        default: L.nilai = 4 * PI * d.r * d.r; L.rumus = "LP = 4πr²"; L.ganti = "4(22/7)(" + d.r + ")(" + d.r + ")"; L.dim = "r = " + d.r + " cm";
      }
      L.nilai = bul(L.nilai, 2);
      return L;
    }
    function isiKira(k, d) {
      var V = {};
      switch (k) {
        case "kubus": V.nilai = d.a * d.a * d.a; V.rumus = "V = a × a × a"; V.ganti = d.a + " × " + d.a + " × " + d.a; V.dim = "a = " + d.a + " cm"; break;
        case "kuboid": V.nilai = d.p * d.l * d.t; V.rumus = "V = p × l × t"; V.ganti = d.p + " × " + d.l + " × " + d.t; V.dim = "p = " + d.p + ", l = " + d.l + ", t = " + d.t + " cm"; break;
        case "prisma": V.nilai = 0.5 * d.a * d.b * d.L; V.rumus = "V = 1/2 × a × b × L"; V.ganti = "1/2 × " + d.a + " × " + d.b + " × " + d.L; V.dim = "tapak " + d.a + ", " + d.b + ", " + d.c + "; panjang " + d.L + " cm"; break;
        case "piramid": V.nilai = d.a * d.a * d.t / 3; V.rumus = "V = 1/3 × a × a × t"; V.ganti = "1/3 × " + d.a + " × " + d.a + " × " + d.t; V.dim = "a = " + d.a + " cm, t = " + d.t + " cm (tinggi tegak)"; break;
        case "silinder": V.nilai = PI * d.r * d.r * d.t; V.rumus = "V = π × r × r × t"; V.ganti = "22/7 × " + d.r + " × " + d.r + " × " + d.t; V.dim = "r = " + d.r + " cm, t = " + d.t + " cm"; break;
        case "kon": V.nilai = PI * d.r * d.r * d.t / 3; V.rumus = "V = 1/3 × π × r × r × t"; V.ganti = "1/3 × 22/7 × " + d.r + " × " + d.r + " × " + d.t; V.dim = "r = " + d.r + " cm, t = " + d.t + " cm (tinggi tegak)"; break;
        default: V.nilai = 4 / 3 * PI * d.r * d.r * d.r; V.rumus = "V = 4/3 × π × r × r × r"; V.ganti = "4/3 × 22/7 × " + d.r + " × " + d.r + " × " + d.r; V.dim = "r = " + d.r + " cm";
      }
      V.nilai = bul(V.nilai, 2);
      V.liter = bul(V.nilai / 1000, 3);
      return V;
    }
    /* Tinggi tegak untuk lukisan apabila hanya tinggi condong diberi. */
    function dimLukis(k, d) {
      var o = Object.assign({}, d);
      if (k === "piramid" && d.s != null) o.tegak = Math.sqrt(d.s * d.s - d.a * d.a / 4);
      else if (k === "piramid") o.tegak = d.t;
      if (k === "kon") o.tegak = d.s != null ? Math.sqrt(d.s * d.s - d.r * d.r) : d.t;
      return o;
    }

    /* ---------- bentangan ---------- */
    var NAMA_JARING = ["kubus", "kuboid", "prisma segi tiga", "piramid", "silinder", "kon"];
    var TAJUK_JARING = ["Bentangan kubus", "Bentangan kuboid", "Bentangan prisma segi tiga", "Bentangan piramid", "Bentangan silinder", "Bentangan kon"];
    var KOMPOSISI = ["6 segi empat sama", "6 segi empat tepat, 3 pasang", "2 segi tiga + 3 segi empat tepat", "1 segi empat sama + 4 segi tiga", "1 segi empat tepat + 2 bulatan", "1 sektor + 1 bulatan"];
    var HUBUNGAN = ["LP = 6 × luas satu petak", "LP = jumlah luas 6 muka", "LP = 2 × tapak + sisi tegak", "LP = tapak + 4 segi tiga", "Lebar segi empat = 2πr (lilitan)", "Lengkok sektor = 2πr (lilitan)"];
    var WJ = ["hijauLembut", "kuningLembut", "lembayungLembut"];
    function jaring(i) {
      var sh = [], k, a, r, s;
      function seg(x, y, w, hh, n) { sh.push({ t: "r", x: x, y: y, w: w, h: hh, c: WJ[n % 3] }); }
      function segi(pts, n) { sh.push({ t: "p", pts: pts, c: WJ[n % 3] }); }
      if (i === 0) {
        [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]].forEach(function (q, n) { seg(q[0], q[1], 1, 1, n); });
      } else if (i === 1) {
        var p = 3, l = 2, t = 1.5;
        seg(0, l, p, t, 0); seg(p, l, l, t, 1); seg(p + l, l, p, t, 2); seg(2 * p + l, l, l, t, 1);
        seg(0, 0, p, l, 1); seg(0, l + t, p, l, 1);
      } else if (i === 2) {
        a = 1.5; var b = 2, c = 2.5, L = 2.5;
        seg(0, b, a, L, 0); seg(a, b, b, L, 1); seg(a + b, b, c, L, 2);
        segi([[0, b], [a, b], [0, 0]], 1); segi([[0, b + L], [a, b + L], [0, b + L + b]], 1);
      } else if (i === 3) {
        a = 2; s = 2.4;
        seg(s, s, a, a, 0);
        segi([[s, s], [s + a, s], [s + a / 2, 0]], 1); segi([[s, s + a], [s + a, s + a], [s + a / 2, 2 * s + a]], 1);
        segi([[s, s], [s, s + a], [0, s + a / 2]], 2); segi([[s + a, s], [s + a, s + a], [2 * s + a, s + a / 2]], 2);
      } else if (i === 4) {
        r = 1; var tt = 2.5;
        seg(0, 2 * r, 2 * Math.PI * r, tt, 0);
        sh.push({ t: "c", cx: r, cy: r, r: r, c: "kuningLembut" });
        sh.push({ t: "c", cx: r, cy: 2 * r + tt + r, r: r, c: "kuningLembut" });
      } else {
        r = 1; s = 3;
        var th = 2 * Math.PI * r / s, cx = s * Math.sin(th / 2), pts = [[cx, 0]];
        for (k = 0; k <= 24; k++) { var an = -th / 2 + th * k / 24; pts.push([cx + s * Math.sin(an), s * Math.cos(an)]); }
        segi(pts, 0);
        sh.push({ t: "c", cx: cx, cy: s + r, r: r, c: "kuningLembut" });
      }
      return sh;
    }
    function lukisJaring(sh, box) {
      var mnx = 1e9, mxx = -1e9, mny = 1e9, mxy = -1e9, out = "";
      function tokok(x, y) { mnx = Math.min(mnx, x); mxx = Math.max(mxx, x); mny = Math.min(mny, y); mxy = Math.max(mxy, y); }
      sh.forEach(function (q) {
        if (q.t === "r") { tokok(q.x, q.y); tokok(q.x + q.w, q.y + q.h); }
        else if (q.t === "p") q.pts.forEach(function (v) { tokok(v[0], v[1]); });
        else { tokok(q.cx - q.r, q.cy - q.r); tokok(q.cx + q.r, q.cy + q.r); }
      });
      var s = Math.min(box.w / (mxx - mnx), box.h / (mxy - mny)), ox = box.x + (box.w - s * (mxx - mnx)) / 2 - s * mnx, oy = box.y + (box.h - s * (mxy - mny)) / 2 - s * mny;
      sh.forEach(function (q) {
        if (q.t === "r") out += h.kotak(ox + s * q.x, oy + s * q.y, s * q.w, s * q.h, { isi: q.c, garis: "tinta2", bulat: 0, tebal: 1.3 });
        else if (q.t === "p") {
          var d = ""; q.pts.forEach(function (v, n) { d += (n ? "L" : "M") + pt(ox + s * v[0], oy + s * v[1]); });
          out += el(d + "Z", { isi: q.c, garis: "tinta2", tebal: 1.3 });
        } else out += '<circle cx="' + h.b1(ox + s * q.cx) + '" cy="' + h.b1(oy + s * q.cy) + '" r="' + h.b1(s * q.r) + '" fill="' + h.w(q.c) + '" stroke="' + h.w("tinta2") + '" stroke-width="1.3"></circle>';
      });
      return out;
    }
    function miniJaring(i, box) {
      switch (i) {
        case 0: return lukisSolid(kuboid(2, 2, 2), box);
        case 1: return lukisSolid(kuboid(3, 2, 1.5), box);
        case 2: return lukisSolid(prisma([[0, 0], [1.5, 0], [0, 2]], 2.5), box);
        case 3: return lukisSolid(piramidSegiEmpat(2, 2.2), box);
        case 4: return lukisSilinder(1, 2.5, box);
        default: return lukisKon(1, 2.8, box);
      }
    }

    /* ---------- gabungan ---------- */
    var NAMA_GABUNG = ["silinder + kon", "silinder + hemisfera", "kuboid + prisma"];
    var GABUNG = [
      [{ r: 7, t1: 10, t2: 6 }, { r: 7, t1: 8, t2: 9 }, { r: 3.5, t1: 12, t2: 6 }],
      [{ r: 7, t: 10 }, { r: 3.5, t: 8 }, { r: 7, t: 6 }],
      [{ p: 6, l: 10, t1: 4, t2: 3 }, { p: 8, l: 12, t1: 5, t2: 3 }, { p: 10, l: 8, t1: 6, t2: 4 }]
    ];
    function gabungKira(i, j) {
      var d = GABUNG[i][j], g = {};
      if (i === 0) {
        g.a = bul(PI * d.r * d.r * d.t1, 2); g.b = bul(PI * d.r * d.r * d.t2 / 3, 2);
        g.namaA = "Silinder"; g.namaB = "Kon"; g.dim = "r = " + d.r + ", t1 = " + d.t1 + ", t2 = " + d.t2 + " cm";
      } else if (i === 1) {
        g.a = bul(PI * d.r * d.r * d.t, 2); g.b = bul(2 / 3 * PI * d.r * d.r * d.r, 2);
        g.namaA = "Silinder"; g.namaB = "Hemisfera"; g.dim = "r = " + d.r + " cm, t = " + d.t + " cm";
      } else {
        g.a = bul(d.p * d.l * d.t1, 2); g.b = bul(0.5 * d.p * d.t2 * d.l, 2);
        g.namaA = "Kuboid"; g.namaB = "Prisma"; g.dim = "p = " + d.p + ", l = " + d.l + ", t1 = " + d.t1 + ", t2 = " + d.t2 + " cm";
      }
      g.jumlah = bul(g.a + g.b, 2);
      g.liter = bul(g.jumlah / 1000, 3);
      return g;
    }
    function lukisGabung(i, j, box) {
      var d = GABUNG[i][j], cx = box.x + box.w / 2, cy = box.y + box.h / 2, s, R, H1, H2, RY, yb;
      if (i === 0) {
        s = Math.min(box.w / (2 * d.r), box.h / (d.t1 + d.t2 + 0.3 * d.r)); R = d.r * s; H1 = d.t1 * s; H2 = d.t2 * s; RY = R * 0.3;
        yb = cy + (H1 + H2 - RY) / 2;
        return silinderPx(cx, yb, R, H1, { isiAtas: "" }) + konPx(cx, yb - H1, R, H2, { isi: "kuningLembut" });
      }
      if (i === 1) {
        s = Math.min(box.w / (2 * d.r), box.h / (d.t + d.r + 0.3 * d.r)); R = d.r * s; H1 = d.t * s; RY = R * 0.3;
        yb = cy + (H1 + R - RY) / 2;
        return silinderPx(cx, yb, R, H1, { isiAtas: "" }) + hemiPx(cx, yb - H1, R);
      }
      var P = prisma([[0, 0], [d.p, 0], [d.p, d.t1], [d.p / 2, d.t1 + d.t2], [0, d.t1]], d.l);
      return lukisSolid(P, box);
    }

    /* ---------- tuang: piramid/kon ke dalam prisma/silinder ---------- */
    var TUANG = [
      { nama: "piramid dan prisma", kecil: "piramid", besar: "prisma", a: 6, t: 5 },
      { nama: "kon dan silinder", kecil: "kon", besar: "silinder", r: 7, t: 6 }
    ];
    function tuangKira(i, k) {
      var d = TUANG[i], vBesar = i === 0 ? d.a * d.a * d.t : PI * d.r * d.r * d.t;
      var vKecil = vBesar / 3;
      return { d: d, besar: bul(vBesar, 2), kecil: bul(vKecil, 2), air: bul(k * vKecil, 2), penuh: k >= 3 };
    }

    var TINGGI = { jenis: 230, bentangan: 254, luas: 188, isipadu: 208, tuang: 176, gabung: 208 };

    W.t2pepejal = {
      mula: function (c) {
        var m = c.mod;
        if (m === "tuang") return { i: c.i == null ? 0 : c.i, k: c.k == null ? 0 : c.k };
        if (m === "luas" || m === "isipadu" || m === "gabung") return { i: c.i == null ? 0 : c.i, j: c.j == null ? 0 : c.j };
        if (m === "jenis" || m === "bentangan") return { i: c.i == null ? 0 : c.i };
        throw new Error("mod t2pepejal tidak dikenali: " + m);
      },
      kawalan: function (c) {
        var m = c.mod, saiz = { k: "j", label: "saiz", min: 0, maks: 3, teks: NAMA_SAIZ };
        if (m === "jenis") return [{ k: "i", label: "pepejal", min: 0, maks: NAMA_JENIS.length - 1, teks: NAMA_JENIS }];
        if (m === "bentangan") return [{ k: "i", label: "bentuk", min: 0, maks: NAMA_JARING.length - 1, teks: NAMA_JARING }];
        if (m === "luas") return [{ k: "i", label: "bentuk", min: 0, maks: LUAS.length - 1, teks: LUAS.map(function (x) { return x.nama; }) }, saiz];
        if (m === "isipadu") return [{ k: "i", label: "bentuk", min: 0, maks: ISI.length - 1, teks: ISI.map(function (x) { return x.nama; }) }, saiz];
        if (m === "tuang") return [{ k: "i", label: "bentuk", min: 0, maks: 1, teks: TUANG.map(function (x) { return x.nama; }) }, { k: "k", label: "tuang", min: 0, maks: 3, teks: ["0 kali", "1 kali", "2 kali", "3 kali"] }];
        return [{ k: "i", label: "gabungan", min: 0, maks: 2, teks: NAMA_GABUNG }, { k: "j", label: "saiz", min: 0, maks: 2, teks: ["A", "B", "C"] }];
      },
      kira: function (c, s) {
        var m = c.mod, r;
        if (m === "jenis") return maklumat(s.i);
        if (m === "bentangan") return { nama: NAMA_JARING[s.i], komposisi: KOMPOSISI[s.i], hubungan: HUBUNGAN[s.i] };
        if (m === "luas") { r = luasKira(LUAS[s.i].k, LUAS[s.i].pre[s.j]); r.k = LUAS[s.i].k; return r; }
        if (m === "isipadu") { r = isiKira(ISI[s.i].k, ISI[s.i].pre[s.j]); r.k = ISI[s.i].k; return r; }
        if (m === "tuang") return tuangKira(s.i, s.k);
        return gabungKira(s.i, s.j);
      },
      lukis: function (c, s) {
        var m = c.mod, r = this.kira(c, s), o = "", alt, sd, d;

        if (m === "jenis") {
          o += lukisJenis(s.i, { x: 30, y: 6, w: 200, h: 142 });
          o += tengah(166, r.nama, { saiz: 14, tebal: true });
          if (r.melengkung) o += tengah(184, "Rata " + r.rata + "  Lengkung " + r.lengkung + "  Bucu " + r.bucu, { warna: "ungu", tebal: true, hasil: true });
          else o += tengah(184, "Muka " + r.muka + "  Tepi " + r.tepi + "  Bucu " + r.bucu, { warna: "ungu", tebal: true, hasil: true });
          o += tengah(202, "Kumpulan: " + r.kumpulan, { hasil: true });
          o += tengah(220, r.huraiKuncilas, { warna: "hijau", hasil: true });
          alt = "Rajah " + r.nama + (r.melengkung ? " dengan " + r.rata + " muka rata, " + r.lengkung + " muka melengkung dan " + r.bucu + " bucu" : " dengan " + r.muka + " muka, " + r.tepi + " tepi dan " + r.bucu + " bucu") + ". " + r.kumpulan;
          return h.svg(TINGGI.jenis, o, alt);
        }

        if (m === "bentangan") {
          o += miniJaring(s.i, { x: 60, y: 6, w: 140, h: 84 });
          o += lukisJaring(jaring(s.i), { x: 12, y: 100, w: 236, h: 96 });
          o += tengah(214, TAJUK_JARING[s.i], { saiz: 13, tebal: true });
          o += tengah(230, r.komposisi, { warna: "ungu", tebal: true, hasil: true });
          o += tengah(246, r.hubungan, { warna: "hijau", hasil: true });
          alt = "Rajah " + NAMA_JARING[s.i] + " dan bentangannya: " + r.komposisi + ". " + r.hubungan;
          return h.svg(TINGGI.bentangan, o, alt);
        }

        if (m === "luas") {
          sd = LUAS[s.i]; d = sd.pre[s.j];
          o += lukisDim(sd.k, dimLukis(sd.k, d), { x: 40, y: 6, w: 180, h: 100 });
          o += tengah(124, r.dim, { warna: "tinta" });
          o += tengah(142, r.rumus, { tebal: true });
          o += tengah(160, "= " + r.ganti, { warna: "ungu", hasil: true });
          o += tengah(178, "= " + fm(r.nilai) + " cm²", { warna: "ungu", tebal: true, saiz: 14, hasil: true });
          alt = "Rajah " + sd.nama + " (" + r.dim + "), luas permukaan " + fm(r.nilai) + " sentimeter persegi dengan " + r.rumus;
          return h.svg(TINGGI.luas, o, alt);
        }

        if (m === "isipadu") {
          sd = ISI[s.i]; d = sd.pre[s.j];
          o += lukisDim(sd.k, dimLukis(sd.k, d), { x: 40, y: 6, w: 180, h: 100 });
          o += tengah(124, r.dim, { warna: "tinta" });
          o += tengah(142, r.rumus, { tebal: true });
          o += tengah(160, "= " + r.ganti, { warna: "ungu", hasil: true });
          o += tengah(178, "= " + fm(r.nilai) + " cm³", { warna: "ungu", tebal: true, saiz: 14, hasil: true });
          o += tengah(196, "= " + String(r.liter) + " liter", { warna: "hijau", hasil: true });
          alt = "Rajah " + sd.nama + " (" + r.dim + "), isi padu " + fm(r.nilai) + " sentimeter padu iaitu " + r.liter + " liter";
          return h.svg(TINGGI.isipadu, o, alt);
        }

        if (m === "tuang") {
          var iw = TUANG[s.i], k = s.k, T, P, Pl, Pk;
          if (s.i === 0) {
            P = kuboid(iw.a, iw.a, iw.t);
            T = pandu(P, { x: 100, y: 8, w: 150, h: 112 });
            o += lukisPoli(P, T, { isi: "kertas2" });
            if (k > 0) {
              Pl = kuboid(iw.a, iw.a, iw.t * k / 3);
              o += lukisPoli(Pl, T, { isi: "hijauLembut" });
            }
            Pk = piramidSegiEmpat(iw.a, iw.t);
            o += lukisSolid(Pk, { x: 12, y: 44, w: 70, h: 70 });
          } else {
            var Rp = 44, Hp = 84, cx = 175, yb = 108;
            o += silinderPx(cx, yb, Rp, Hp, { isi: "kertas2", isiAtas: "" });
            if (k > 0) o += silinderPx(cx, yb, Rp, Hp * k / 3, { isi: "hijauLembut", isiAtas: k === 3 ? "hijauLembut" : "kuningLembut" });
            if (k === 0 || k < 3) o += elips(cx, yb - Hp, Rp, Rp * 0.3, "", "tinta", 1.8);
            o += lukisKon(1, 1.2, { x: 12, y: 44, w: 70, h: 70 });
          }
          o += tengah(134, iw.kecil.charAt(0).toUpperCase() + iw.kecil.slice(1) + " = 1/3 daripada " + iw.besar, { saiz: 12, hasil: true });
          o += tengah(152, iw.besar.charAt(0).toUpperCase() + iw.besar.slice(1) + ": " + fm(r.besar) + " cm³, " + iw.kecil + ": " + fm(r.kecil) + " cm³", { saiz: 11 });
          o += tengah(168, k === 3 ? "Penuh selepas 3 tuangan!" : "Air = " + k + " × " + fm(r.kecil) + " = " + fm(r.air) + " cm³", { warna: "ungu", tebal: true, hasil: true });
          alt = "Rajah " + iw.kecil + " dituang ke dalam " + iw.besar + " yang sama tapak dan tinggi: " + k + " kali tuangan mengisi " + k + " per 3 bekas";
          return h.svg(TINGGI.tuang, o, alt);
        }

        /* gabung */
        o += lukisGabung(s.i, s.j, { x: 40, y: 6, w: 180, h: 100 });
        o += tengah(124, r.dim, { warna: "tinta" });
        o += tengah(142, r.namaA + " = " + fm(r.a) + " cm³", { warna: "ungu", hasil: true });
        o += tengah(160, r.namaB + " = " + fm(r.b) + " cm³", { warna: "ungu", hasil: true });
        o += tengah(178, "Jumlah = " + fm(r.jumlah) + " cm³", { warna: "ungu", tebal: true, saiz: 14, hasil: true });
        o += tengah(196, "= " + String(r.liter) + " liter", { warna: "hijau", hasil: true });
        alt = "Rajah " + NAMA_GABUNG[s.i] + " (" + r.dim + "), isi padu gabungan " + fm(r.jumlah) + " sentimeter padu";
        return h.svg(TINGGI.gabung, o, alt);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
