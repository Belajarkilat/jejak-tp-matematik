/* Widget Tingkatan 4 Bab 4 Operasi Set. Satu widget `t4set` dengan tiga mod (spec.mod):
   - venn2  : gambar rajah Venn dua set A dan B dalam ξ.
   - venn3  : gambar rajah Venn tiga set A, B dan C dalam ξ.
              Kedua-dua mod menerima unsur (spec.S = [{e, m:"AB"}], m = set yang mengandunginya)
              atau bilangan bagi setiap kawasan (spec.n = {"": 7, "A": 6, "AB": 3, ...}).
              Cip memilih operasi daripada spec.ops, contoh "A ∩ B", "(A ∪ B)′ ∩ C".
              Operasi DIHURAI oleh penghurai kecil di bawah (∩, ∪, ′ dan kurungan), jadi kawasan
              berlorek dan senarai unsur sentiasa dikira, bukan dilukis tangan. ∩ dan ∪ dinilai dari
              kiri ke kanan; spek mesti menggunakan kurungan apabila mencampurkannya.
   - tinjau : masalah tinjauan dua set: n(ξ), n(A), n(B) tetap, gelongsor x = n(A ∩ B).
              Spek: N, nA, nB, lblA, lblB.
   Kawasan dilorek dengan clipPath (dalam bulatan) dan laluan evenodd (luar bulatan), jadi
   tiada warna tetap. Lorekan dan jawapan bertanda jmi-hasil (tersembunyi dalam mod cabar). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    /* ---------- penghurai tatatanda set ---------- */
    function hurai(str) {
      var t = String(str).replace(/\s+/g, "").replace(/'/g, "′"), i = 0;
      function lihat() { return t[i]; }
      function ekspr() {
        var kiri = faktor();
        while (lihat() === "∩" || lihat() === "∪") {
          var op = t[i++], kanan = faktor(), a = kiri;
          kiri = op === "∩" ? (function (x, y) { return function (m) { return x(m) && y(m); }; })(a, kanan)
                            : (function (x, y) { return function (m) { return x(m) || y(m); }; })(a, kanan);
        }
        return kiri;
      }
      function faktor() {
        var f, c = lihat();
        if (c === "(") { i++; f = ekspr(); if (t[i++] !== ")") throw new Error("kurungan tidak lengkap: " + str); }
        else if (c === "ξ") { i++; f = function () { return true; }; }
        else if (/[A-C]/.test(c)) { i++; f = (function (s) { return function (m) { return m.indexOf(s) >= 0; }; })(c); }
        else throw new Error("simbol tidak dikenali dalam " + str + ": " + c);
        while (lihat() === "′") { i++; f = (function (g) { return function (m) { return !g(m); }; })(f); }
        return f;
      }
      var hasil = ekspr();
      if (i !== t.length) throw new Error("ungkapan set tidak lengkap: " + str);
      return hasil;
    }

    /* ---------- geometri ---------- */
    var U = { x: 6, y: 30, w: 248 };
    var G2 = { h: 160, bul: { A: [98, 110, 60], B: [162, 110, 60] },
      pusat: { "": [14, 174], "A": [70, 110], "AB": [130, 110], "B": [190, 110] }, label: { A: [44, 62], B: [210, 62] } };
    var G3 = { h: 190, bul: { A: [100, 98, 52], B: [160, 98, 52], C: [130, 150, 52] },
      pusat: { "": [14, 202], "A": [80, 84], "B": [180, 84], "C": [130, 178], "AB": [130, 76], "AC": [100, 138], "BC": [160, 138], "ABC": [130, 116] },
      label: { A: [50, 52], B: [204, 52], C: [194, 196] } };
    var KAW2 = ["", "A", "B", "AB"], KAW3 = ["", "A", "B", "C", "AB", "AC", "BC", "ABC"];

    function idKlip(c, s, extra) {
      var str = JSON.stringify([c.mod, c.ops, c.S || c.n, s, extra]), hs = 0;
      for (var i = 0; i < str.length; i++) hs = (hs * 31 + str.charCodeAt(i)) | 0;
      return "t4s" + (hs >>> 0).toString(36);
    }
    function lorek(G, kawasan, uid, kelas) {
      /* kawasan: senarai rentetan keahlian, contoh ["A", "AB"]. */
      var defs = "", isi = "", huruf = Object.keys(G.bul), x0 = U.x, y0 = U.y, x1 = U.x + U.w, y1 = U.y + G.h;
      huruf.forEach(function (k) {
        var b = G.bul[k], cx = b[0], cy = b[1], r = b[2];
        var bul = "M" + (cx - r) + " " + cy + " a" + r + " " + r + " 0 1 0 " + 2 * r + " 0 a" + r + " " + r + " 0 1 0 " + (-2 * r) + " 0 Z";
        defs += '<clipPath id="' + uid + k + '1"><path d="' + bul + '"></path></clipPath>';
        defs += '<clipPath id="' + uid + k + '0"><path clip-rule="evenodd" d="M' + x0 + " " + y0 + " H" + x1 + " V" + y1 + " H" + x0 + " Z " + bul + '"></path></clipPath>';
      });
      kawasan.forEach(function (m) {
        var buka = "", tutup = "";
        huruf.forEach(function (k) { buka += '<g clip-path="url(#' + uid + k + (m.indexOf(k) >= 0 ? "1" : "0") + ')">'; tutup += "</g>"; });
        isi += buka + '<rect x="' + x0 + '" y="' + y0 + '" width="' + U.w + '" height="' + G.h + '" fill="' + h.w("kuning") + '" fill-opacity="0.32" stroke="none"></rect>' + tutup;
      });
      return "<defs>" + defs + "</defs>" + '<g class="' + (kelas || "") + '">' + isi + "</g>";
    }
    function bingkaiVenn(G) {
      var o = h.kotak(U.x, U.y, U.w, G.h, { garis: "tinta2", bulat: 6, tebal: 1.5 });
      o += teks(U.x + 6, U.y + 16, "ξ", { saiz: 13, warna: "tinta", tebal: true });
      Object.keys(G.bul).forEach(function (k) {
        var b = G.bul[k];
        o += '<circle cx="' + b[0] + '" cy="' + b[1] + '" r="' + b[2] + '" fill="none" stroke="' + h.w(k === "A" ? "ungu" : k === "B" ? "hijau" : "merah") + '" stroke-width="2"></circle>';
        o += teks(G.label[k][0], G.label[k][1], k, { tengah: true, saiz: 14, warna: k === "A" ? "ungu" : k === "B" ? "hijau" : "merah", tebal: true });
      });
      return o;
    }
    function urutKaw(m) { return m.split("").sort().join(""); }
    function kiraVenn(c, s) {
      var tiga = c.mod === "venn3", KAW = tiga ? KAW3 : KAW2, f = hurai(c.ops[s.op]);
      var dalam = KAW.filter(function (m) { return f(m); });
      var r = { op: c.ops[s.op], kawasan: dalam };
      if (c.S) {
        r.unsur = c.S.filter(function (x) { return f(urutKaw(x.m)); }).map(function (x) { return x.e; });
        r.n = r.unsur.length;
      } else {
        r.n = dalam.reduce(function (j, m) { return j + (c.n[m] || 0); }, 0);
      }
      r.nXi = c.S ? c.S.length : KAW.reduce(function (j, m) { return j + (c.n[m] || 0); }, 0);
      return r;
    }

    W.t4set = {
      mula: function (c) {
        if (c.mod === "tinjau") return { x: Math.max(0, c.nA + c.nB - c.N) };
        if (c.mod === "venn2" || c.mod === "venn3") return { op: 0 };
        throw new Error("mod t4set tidak dikenali: " + c.mod);
      },
      kawalan: function (c) {
        if (c.mod === "tinjau") return [{ k: "x", label: "n(A ∩ B) = x", min: Math.max(0, c.nA + c.nB - c.N), maks: Math.min(c.nA, c.nB) }];
        return [{ k: "op", label: "operasi", min: 0, maks: c.ops.length - 1, teks: c.ops, pilih: true }];
      },
      kira: function (c, s) {
        if (c.mod === "tinjau") {
          var x = s.x, a = c.nA - x, b = c.nB - x, gab = c.nA + c.nB - x;
          return { x: x, hanyaA: a, hanyaB: b, kesatuan: gab, luar: c.N - gab };
        }
        return kiraVenn(c, s);
      },
      lukis: function (c, s) {
        if (c.mod === "tinjau") return lukisTinjau(c, s);
        return lukisVenn(c, s);
      }
    };

    function letakUnsur(G, c) {
      var o = "", ikut = {};
      c.S.forEach(function (x) { var m = urutKaw(x.m); (ikut[m] = ikut[m] || []).push(x.e); });
      Object.keys(ikut).forEach(function (m) {
        var p = G.pusat[m], senarai = ikut[m], lajur = m === "" ? 2 : 2, baris = Math.ceil(senarai.length / lajur);
        if (!p) throw new Error("kawasan tiada kedudukan: " + m);
        senarai.forEach(function (e, i) {
          var k = i % lajur, bb = Math.floor(i / lajur);
          var dx = senarai.length === 1 ? 0 : (k - (lajur - 1) / 2) * 20;
          var x = m === "" ? p[0] + k * 20 - 2 : p[0] + dx, y = p[1] + (bb - (baris - 1) / 2) * 15 + 4;
          o += teks(x, y, String(e), { tengah: m !== "", saiz: 12, warna: "tinta", tebal: true });
        });
      });
      return o;
    }
    function letakBil(G, c, KAW) {
      var o = "";
      KAW.forEach(function (m) { var p = G.pusat[m]; o += teks(p[0], p[1] + 4, String(c.n[m] || 0), { tengah: m !== "", saiz: 13, warna: "tinta", tebal: true }); });
      return o;
    }

    function lukisVenn(c, s) {
      var tiga = c.mod === "venn3", G = tiga ? G3 : G2, r = kiraVenn(c, s), uid = idKlip(c, s);
      var o = lorek(G, r.kawasan, uid, "jmi-hasil") + bingkaiVenn(G);
      o += c.S ? letakUnsur(G, c) : letakBil(G, c, tiga ? KAW3 : KAW2);
      o += teks(130, 20, "Kawasan berlorek: " + r.op, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      var y = U.y + G.h + 22;
      if (c.S) {
        var senarai = r.unsur.length ? "{" + r.unsur.join(", ") + "}" : "{ }";
        var baris1 = r.op + " = " + senarai;
        if (baris1.length > 34) { o += teks(8, y, r.op + " =", { saiz: 12, warna: "ungu", tebal: true, hasil: true }); y += 18; o += teks(8, y, senarai, { saiz: 12, warna: "ungu", tebal: true, hasil: true }); }
        else o += teks(8, y, baris1, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
        y += 20;
      }
      o += teks(8, y, "n(" + r.op + ") = " + r.n, { saiz: 13, warna: "merah", tebal: true, hasil: true });
      return h.svg(y + 10, o, "Rajah gambar rajah Venn " + (tiga ? "tiga" : "dua") + " set dengan kawasan " + r.op + " berlorek; n(ξ) = " + r.nXi);
    }

    function lukisTinjau(c, s) {
      var r = W.t4set.kira(c, s), G = G2, uid = idKlip(c, s, "t");
      var o = lorek(G, ["A", "AB", "B"], uid, "") + bingkaiVenn(G);
      o += teks(130, 20, "n(ξ) = " + c.N + ", n(A) = " + c.nA + ", n(B) = " + c.nB, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      o += teks(G.pusat.A[0], G.pusat.A[1] + 4, String(r.hanyaA), { tengah: true, saiz: 14, warna: "tinta", tebal: true, hasil: true });
      o += teks(G.pusat.AB[0], G.pusat.AB[1] + 4, String(r.x), { tengah: true, saiz: 14, warna: "merah", tebal: true });
      o += teks(G.pusat.B[0], G.pusat.B[1] + 4, String(r.hanyaB), { tengah: true, saiz: 14, warna: "tinta", tebal: true, hasil: true });
      o += teks(U.x + 8, U.y + G.h - 10, String(r.luar), { saiz: 14, warna: "tinta", tebal: true, hasil: true });
      var y = U.y + G.h + 20;
      o += teks(8, y, "A = " + c.lblA + ", B = " + c.lblB, { saiz: 11, warna: "tinta3" });
      o += teks(8, y + 20, "n(A ∪ B) = " + c.nA + " + " + c.nB + " − " + r.x + " = " + r.kesatuan, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      o += teks(8, y + 40, "n(A ∪ B)′ = " + c.N + " − " + r.kesatuan + " = " + r.luar, { saiz: 12, warna: "merah", tebal: true, hasil: true });
      return h.svg(y + 50, o, "Rajah gambar rajah Venn tinjauan dengan n(ξ) " + c.N + ", n(A) " + c.nA + ", n(B) " + c.nB + " dan n(A ∩ B) = " + r.x);
    }

    W.t4set.hurai = hurai;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
