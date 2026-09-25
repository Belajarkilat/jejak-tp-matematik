/* Widget T1 Bab 5 Ungkapan Algebra: jubin algebra interaktif.
   Satu widget `t1algebra` dengan lima mod (spec.mod):
   - nilai  : bar x dan kuub 1; gelongsor nilai x, ungkapan ax + b diganti nilai
   - serupa : sebutan sebagai cip berwarna mengikut pemboleh ubah; sebutan serupa dikumpul
   - tambah : dua ungkapan (ax + b) tambah/tolak (cx + d) dengan jubin; hasil ringkas dan semakan
   - ulang  : x dikali sendiri n kali menjadi x^n; nilai apabila x diberi
   - darab  : a x (bx) dan (Nx) bahagi a dengan bar x disusun dalam baris
   Semua nombor dikira daripada formula. Unsur jawapan ditanda hasil supaya tersembunyi
   dalam mod cabar. Didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js;
   pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, ungkap = h.ungkap;
    var TENGAH = h.LEBAR / 2;

    /* ---------- pembantu ---------- */
    function fmt(n) { return String(n).replace("-", "−"); }
    /* Elemen dengan kelas jmi-hasil (tersembunyi dalam mod cabar). */
    function hasilG(isi) { return '<g class="jmi-hasil">' + isi + "</g>"; }
    function rekt(x, y, l, t, isi, garis, tebal) {
      return h.kotak(x, y, l, t, { isi: isi, garis: garis, bulat: 3, tebal: tebal || 1.4 });
    }
    /* Sebutan sebagai segmen untuk ungkap(): k = pekali, kunci = "", "x", "y", "xy", "x2", "y2". */
    var ASAS = { "": "", x: "x", y: "y", xy: "xy", x2: "x", y2: "y" };
    var KUASA = { x2: "2", y2: "2" };
    function segSebutan(k, kunci, pertama) {
      var abs = Math.abs(k), tanda = k < 0 ? "−" : (pertama ? "" : "+");
      var pek = (kunci !== "" && abs === 1) ? "" : String(abs);
      var s = [tanda + pek + ASAS[kunci]];
      if (KUASA[kunci]) s.push({ p: KUASA[kunci] });
      return s;
    }
    /* Ungkapan dalam bentuk a x + b (satu pemboleh ubah) sebagai teks biasa. */
    function tekaAB(a, b, hr) {
      var s = a === 0 ? "" : (a === 1 ? "" : String(a)) + hr;
      if (b !== 0) s += (s === "" ? String(b) : (b < 0 ? " − " + (-b) : " + " + b));
      return s === "" ? "0" : fmt(s);
    }
    /* Kumpul sebutan serupa: pulang senarai [pekali, kunci] mengikut kemunculan pertama. */
    function ringkas(senarai) {
      var tertib = [], jum = {};
      senarai.forEach(function (t) {
        if (!(t[1] in jum)) { jum[t[1]] = 0; tertib.push(t[1]); }
        jum[t[1]] += t[0];
      });
      var out = tertib.filter(function (k) { return jum[k] !== 0; }).map(function (k) { return [jum[k], k]; });
      return out;
    }
    function nilaiSebutan(t, x, y) {
      var k = t[0], v = t[1];
      if (v === "") return k;
      if (v === "x") return k * x;
      if (v === "y") return k * y;
      if (v === "xy") return k * x * y;
      if (v === "x2") return k * x * x;
      if (v === "y2") return k * y * y;
      throw new Error("kunci sebutan " + v);
    }
    function nilaiUngkapan(senarai, x, y) {
      return senarai.reduce(function (j, t) { return j + nilaiSebutan(t, x, y); }, 0);
    }
    var WARNA_KUNCI = {
      x: ["hijau", "hijauLembut"], y: ["lembayung", "lembayungLembut"], xy: ["merah", "merahLembut"],
      x2: ["ungu", "kertas2"], y2: ["ungu", "kertas2"], "": ["kuning", "kuningLembut"]
    };
    function tinggiSVG(t) { return Math.ceil(t); }

    W.t1algebra = {
      mula: function (c) {
        var mod = c.mod;
        if (mod === "nilai") return { i: c.i == null ? 2 : c.i };
        if (mod === "serupa") return { i: c.i == null ? 0 : c.i };
        if (mod === "tambah") return { i: c.i == null ? 0 : c.i, k: c.k == null ? 1 : c.k };
        if (mod === "ulang") return { n: c.n == null ? 3 : c.n, i: c.i == null ? 0 : c.i };
        if (mod === "darab") return { op: c.op == null ? 0 : c.op, a: c.a == null ? 2 : c.a, b: c.b == null ? 1 : c.b };
        throw new Error("mod t1algebra tidak dikenali: " + mod);
      },
      kawalan: function (c) {
        var mod = c.mod;
        if (mod === "nilai") {
          var xn = c.xNilai;
          return [{ k: "i", label: c.huruf || "x", min: 0, maks: xn.length - 1, teks: xn.map(String) }];
        }
        if (mod === "serupa") {
          return [{ k: "i", label: "ungkapan", min: 0, maks: c.set.length - 1, teks: c.set.map(function (_, n) { return "ABCDEF".charAt(n); }) }];
        }
        if (mod === "tambah") {
          var kn = c.kNilai || [1, 2, 3, 4, 5];
          return [
            { k: "i", label: "pasangan", min: 0, maks: c.pasang.length - 1, teks: c.pasang.map(function (_, n) { return "ABCDEF".charAt(n); }) },
            { k: "k", label: "semak x", min: 0, maks: kn.length - 1, teks: kn.map(String) }
          ];
        }
        if (mod === "ulang") {
          return [
            { k: "n", label: "n", min: 1, maks: c.nMaks || 5 },
            { k: "i", label: "x", min: 0, maks: c.xNilai.length - 1, teks: c.xNilai.map(String) }
          ];
        }
        var aN = c.aNilai || [1, 2, 3, 4], bN = c.bNilai || [1, 2, 3, 4];
        return [
          { k: "op", label: "operasi", min: 0, maks: 1, teks: ["darab", "bahagi"] },
          { k: "a", label: "a", min: 0, maks: aN.length - 1, teks: aN.map(String) },
          { k: "b", label: "b", min: 0, maks: bN.length - 1, teks: bN.map(String) }
        ];
      },
      kira: function (c, s) {
        var mod = c.mod;
        if (mod === "nilai") {
          var x = c.xNilai[s.i];
          return { x: x, nilai: c.a * x + c.b };
        }
        if (mod === "serupa") {
          var st = c.set[s.i], r = ringkas(st);
          return { sebutan: st.length, ringkas: r, nilai2: nilaiUngkapan(st, 2, 3), nilaiRingkas2: nilaiUngkapan(r, 2, 3) };
        }
        if (mod === "tambah") {
          var p = c.pasang[s.i], e1 = p[0], e2 = p[1], op = p[2] === "-" ? -1 : 1;
          var a3 = e1[0] + op * e2[0], b3 = e1[1] + op * e2[1];
          var k = (c.kNilai || [1, 2, 3, 4, 5])[s.k];
          return { a: a3, b: b3, x: k, kiri: (e1[0] * k + e1[1]) + (op === 1 ? " + " : " − ") + (e2[0] * k + e2[1]),
                   nilaiKiri: (e1[0] * k + e1[1]) + op * (e2[0] * k + e2[1]), nilaiKanan: a3 * k + b3 };
        }
        if (mod === "ulang") {
          var xv = c.xNilai[s.i];
          return { n: s.n, x: xv, nilai: Math.pow(xv, s.n) };
        }
        var av = (c.aNilai || [1, 2, 3, 4])[s.a], bv = (c.bNilai || [1, 2, 3, 4])[s.b];
        return { a: av, b: bv, jumlah: av * bv, bahagi: s.op === 1 };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), mod = c.mod, isi = "", alt, i, j;

        /* ---------- nilai ---------- */
        if (mod === "nilai") {
          var hr = c.huruf || "x", a = c.a, b = c.b, x = r.x;
          var u = Math.min(22, Math.floor(180 / Math.max(x, b, 1))), rowH = 20, gap = 5, x0 = 20, y0 = 34;
          isi += teks(TENGAH, 18, tekaAB(a, b, hr), { tengah: true, saiz: 14, warna: "tinta", tebal: true });
          for (i = 0; i < a; i++) {
            var yy = y0 + i * (rowH + gap);
            isi += rekt(x0, yy, x * u, rowH, "hijauLembut", "hijau");
            isi += teks(x0 + x * u / 2, yy + 14, hr, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
            isi += teks(x0 + x * u + 6, yy + 14, "= " + x, { saiz: 12, warna: "tinta2" });
          }
          var yc = y0 + a * (rowH + gap) + 2, sz = Math.min(u, 18);
          for (j = 0; j < b; j++) isi += rekt(x0 + j * (sz + 3), yc, sz, sz, "kuningLembut", "kuning", 1.3);
          if (b > 0) isi += teks(x0 + b * (sz + 3) + 2, yc + sz - 3, "kuub 1", { saiz: 11, warna: "tinta2" });
          var yb = yc + (b > 0 ? sz : 0) + 24;
          isi += teks(TENGAH, yb, hr + " = " + x, { tengah: true, saiz: 13, warna: "tinta", tebal: true });
          var pengganti = (a === 1 ? String(x) : a + " × " + x) + (b !== 0 ? " + " + b : "") + " = " + r.nilai;
          isi += teks(TENGAH, yb + 19, pengganti, { tengah: true, saiz: 13, warna: "ungu", tebal: true, hasil: true });
          alt = "Rajah jubin algebra bagi " + tekaAB(a, b, hr) + ": " + a + " bar " + hr + " dan " + b + " kuub 1. Gelongsor menukar nilai " + hr + "." + (c.cabar ? "" : " Apabila " + hr + " ialah " + x + ", nilai ialah " + r.nilai + ".");
          return h.svg(tinggiSVG(yb + 26), isi, alt);
        }

        /* ---------- serupa ---------- */
        if (mod === "serupa") {
          var st2 = c.set[s.i], cw = 54, ch = 28, cg = 4, sebaris = 4;
          var baris = Math.ceil(st2.length / sebaris);
          isi += teks(TENGAH, 16, "Ungkapan " + "ABCDEF".charAt(s.i), { tengah: true, saiz: 12, warna: "tinta2", tebal: true });
          var yTop = 26;
          for (var rb = 0; rb < baris; rb++) {
            var bil = Math.min(sebaris, st2.length - rb * sebaris);
            var xm = (h.LEBAR - (bil * cw + (bil - 1) * cg)) / 2;
            for (j = 0; j < bil; j++) {
              var t = st2[rb * sebaris + j], wr = WARNA_KUNCI[t[1]];
              var cxs = xm + j * (cw + cg), cys = yTop + rb * (ch + 6);
              isi += rekt(cxs, cys, cw, ch, wr[1], wr[0], 1.6);
              isi += ungkap(cxs + cw / 2, cys + 19, segSebutan(t[0], t[1], rb * sebaris + j === 0), { saiz: 13, warna: "tinta", tebal: true });
            }
          }
          var yl = yTop + baris * (ch + 6) + 14;
          isi += teks(TENGAH, yl, "Bilangan sebutan: " + st2.length, { tengah: true, saiz: 12, warna: "tinta2" });
          var kum = {}, tertib = [];
          st2.forEach(function (tt) { if (!(tt[1] in kum)) { kum[tt[1]] = []; tertib.push(tt[1]); } kum[tt[1]].push(tt); });
          var yh = yl + 20, nBaris = 0;
          tertib.forEach(function (kk) {
            if (kum[kk].length < 2) return;
            var segs = ["Serupa: "], first = true;
            kum[kk].forEach(function (tt) {
              var sg = segSebutan(tt[0], tt[1], true);
              if (!first) segs.push(", ");
              first = false;
              segs = segs.concat(sg);
            });
            /* gabung rentetan bersebelahan supaya ungkap() menyusun indeks dengan betul */
            var g = [];
            segs.forEach(function (sg) { if (typeof sg === "string" && g.length && typeof g[g.length - 1] === "string") g[g.length - 1] += sg; else g.push(sg); });
            isi += ungkap(TENGAH, yh + nBaris * 18, g, { saiz: 12, warna: WARNA_KUNCI[kk][0] === "ungu" ? "ungu" : WARNA_KUNCI[kk][0], tebal: true, hasil: true });
            nBaris++;
          });
          var rg = r.ringkas, sr = ["Ringkas: "];
          if (!rg.length) sr = ["Ringkas: 0"];
          rg.forEach(function (tt, n) {
            var sg = segSebutan(tt[0], tt[1], n === 0);
            if (n > 0) { sg[0] = sg[0].charAt(0) + " " + sg[0].slice(1); sr.push(" "); }
            sr = sr.concat(sg);
          });
          var g2 = [];
          sr.forEach(function (sg) { if (typeof sg === "string" && g2.length && typeof g2[g2.length - 1] === "string") g2[g2.length - 1] += sg; else g2.push(sg); });
          /* baris ringkas: tambah ruang selepas tanda + atau − */
          isi += ungkap(TENGAH, yh + nBaris * 18, g2, { saiz: 13, warna: "tinta", tebal: true, hasil: true });
          alt = "Rajah cip sebutan bagi ungkapan algebra " + "ABCDEF".charAt(s.i) + " dengan " + st2.length + " sebutan; sebutan serupa mempunyai warna yang sama.";
          return h.svg(tinggiSVG(yh + nBaris * 18 + 12), isi, alt);
        }

        /* ---------- tambah ---------- */
        if (mod === "tambah") {
          var pr = c.pasang[s.i], E1 = pr[0], E2 = pr[1], tolak = pr[2] === "-", hrT = c.huruf || "x";
          var BW = 26, BH = 16, SQ = 12;
          function tiles(y, aa, bb, wBar, wSq, sHasil) {
            var o = "", n, xx = 14;
            for (n = 0; n < aa; n++) {
              o += rekt(xx, y, BW, BH, wBar[1], wBar[0], 1.4);
              o += teks(xx + BW / 2, y + 12, hrT, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
              xx += BW + 3;
            }
            if (aa > 0 && bb > 0) xx += 5;
            for (n = 0; n < bb; n++) { o += rekt(xx, y + 2, SQ, SQ, wSq[1], wSq[0], 1.3); xx += SQ + 3; }
            if (xx > 254) throw new Error("jubin melebihi lebar: " + xx);
            return sHasil ? hasilG(o) : o;
          }
          var hijauW = ["hijau", "hijauLembut"], kuningW = ["kuning", "kuningLembut"], merahW = ["merah", "merahLembut"];
          isi += teks(14, 16, "(" + tekaAB(E1[0], E1[1], hrT) + ")", { saiz: 13, warna: "tinta", tebal: true });
          isi += tiles(22, E1[0], E1[1], hijauW, kuningW, false);
          isi += teks(14, 58, tolak ? "−  (" + tekaAB(E2[0], E2[1], hrT) + ")" : "+  (" + tekaAB(E2[0], E2[1], hrT) + ")", { saiz: 13, warna: tolak ? "merah" : "tinta", tebal: true });
          isi += tiles(64, E2[0], E2[1], tolak ? merahW : hijauW, tolak ? merahW : kuningW, false);
          isi += h.garis(14, 90, 246, 90, { warna: "garis2", tebal: 1.2, putus: "4 4" });
          isi += teks(14, 108, "= " + tekaAB(r.a, r.b, hrT), { saiz: 13, warna: "ungu", tebal: true, hasil: true });
          isi += tiles(114, r.a, r.b, hijauW, kuningW, true);
          isi += teks(TENGAH, 152, hrT + " = " + r.x, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          isi += teks(TENGAH, 169, "kiri: " + r.kiri + " = " + r.nilaiKiri, { tengah: true, saiz: 12, warna: "tinta", hasil: true });
          isi += teks(TENGAH, 186, "kanan: " + r.a + "(" + r.x + ")" + (r.b !== 0 ? (r.b < 0 ? " − " + (-r.b) : " + " + r.b) : "") + " = " + r.nilaiKanan, { tengah: true, saiz: 12, warna: "tinta", hasil: true });
          alt = "Rajah jubin bagi " + (tolak ? "penolakan" : "penambahan") + " ungkapan (" + tekaAB(E1[0], E1[1], hrT) + ") dan (" + tekaAB(E2[0], E2[1], hrT) + ")." + (c.cabar ? "" : " Hasil ringkas ialah " + tekaAB(r.a, r.b, hrT) + ".");
          return h.svg(196, isi, alt);
        }

        /* ---------- ulang ---------- */
        if (mod === "ulang") {
          var n = r.n, xv2 = r.x, hrU = c.huruf || "x";
          var bw = Math.min(34, Math.floor((236 - (n - 1) * 16) / n)), tot = n * bw + (n - 1) * 16, xs = (h.LEBAR - tot) / 2;
          isi += teks(TENGAH, 18, hrU + " sebagai faktor " + n + " kali", { tengah: true, saiz: 12, warna: "tinta2", tebal: true });
          for (i = 0; i < n; i++) {
            var bx = xs + i * (bw + 16);
            isi += rekt(bx, 30, bw, 30, "hijauLembut", "hijau", 1.6);
            isi += teks(bx + bw / 2, 51, hrU, { tengah: true, saiz: 13, warna: "tinta", tebal: true });
            if (i < n - 1) isi += teks(bx + bw + 8, 51, "×", { tengah: true, saiz: 13, warna: "tinta2", tebal: true });
          }
          var kiri = []; for (i = 0; i < n; i++) kiri.push(hrU);
          isi += teks(TENGAH, 82, kiri.join(" × "), { tengah: true, saiz: 13, warna: "tinta2" });
          isi += ungkap(TENGAH, 100, n > 1 ? ["= " + hrU, { p: String(n) }] : ["= " + hrU], { saiz: 14, warna: "tinta", tebal: true });
          isi += teks(TENGAH, 122, hrU + " = " + xv2, { tengah: true, saiz: 13, warna: "tinta", tebal: true });
          var rentetan = []; for (i = 0; i < n; i++) rentetan.push(xv2);
          isi += teks(TENGAH, 141, rentetan.join(" × ") + " = " + r.nilai, { tengah: true, saiz: 13, warna: "ungu", tebal: true, hasil: true });
          alt = "Rajah " + n + " kotak " + hrU + " didarab berulang menjadi " + hrU + " kuasa " + n + "." + (c.cabar ? "" : " Apabila " + hrU + " ialah " + xv2 + ", nilai ialah " + r.nilai + ".");
          return h.svg(152, isi, alt);
        }

        /* ---------- darab / bahagi ---------- */
        var av2 = r.a, bv2 = r.b, N = r.jumlah, hrD = c.huruf || "x", bahagi = r.bahagi;
        var bw2 = 28, bh2 = 16, x00 = (h.LEBAR - (bv2 * (bw2 + 3) - 3)) / 2;
        isi += teks(TENGAH, 18, bahagi ? "(" + N + hrD + ") ÷ " + av2 : av2 + " × (" + bv2 + hrD + ")", { tengah: true, saiz: 14, warna: "tinta", tebal: true });
        for (i = 0; i < av2; i++) {
          var yr = 30 + i * (bh2 + 5) + (bahagi ? i * 3 : 0);
          for (j = 0; j < bv2; j++) {
            isi += rekt(x00 + j * (bw2 + 3), yr, bw2, bh2, "hijauLembut", "hijau", 1.4);
            isi += teks(x00 + j * (bw2 + 3) + bw2 / 2, yr + 12, hrD, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          }
        }
        var yE = 30 + av2 * (bh2 + 5) + (bahagi ? (av2 - 1) * 3 : 0) + 14;
        isi += teks(TENGAH, yE, bahagi ? "Bilangan kumpulan: " + av2 : "Bar " + hrD + " dalam satu baris: " + bv2, { tengah: true, saiz: 12, warna: "tinta2" });
        isi += teks(TENGAH, yE + 19, bahagi ? N + hrD + " ÷ " + av2 + " = " + bv2 + hrD : av2 + " × " + bv2 + hrD + " = " + N + hrD, { tengah: true, saiz: 13, warna: "ungu", tebal: true, hasil: true });
        alt = "Rajah " + (bahagi ? "pembahagian " + N + " bar " + hrD + " kepada " + av2 + " kumpulan sama banyak" : "pendaraban: " + av2 + " baris, setiap baris " + bv2 + " bar " + hrD) + "." + (c.cabar ? "" : " Hasil ialah " + (bahagi ? bv2 : N) + hrD + ".");
        return h.svg(tinggiSVG(yE + 27), isi, alt);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
