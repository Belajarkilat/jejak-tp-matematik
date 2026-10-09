/* Widget Tingkatan 4 Bab 3 Penaakulan Logik. Satu widget `t4logik` dengan enam mod (spec.mod):
   - nilai    : ayat → pernyataan atau bukan, nilai kebenaran dan penafian. Cip ayat.
                Spek: ayat [{t, jenis:"B"|"P"|"X", nafi}] (X = bukan pernyataan).
   - majmuk   : pernyataan p dan q dipilih dengan cip; nilai kebenaran "p dan q", "p atau q",
                dan baris jadual kebenaran yang sepadan diserlahkan. Spek: pSet, qSet [{t, v}].
   - implikasi: implikasi daripada pustaka predikat di bawah (x integer −12 hingga 30). Nilai
                kebenaran implikasi, akas, songsangan dan kontrapositif DIKIRA dengan menguji
                setiap x; contoh penyangkal pertama dipaparkan. Spek: senarai [{p, q}] (kunci PRED).
   - hujah    : hujah deduktif Bentuk I, II dan III dengan rajah Euler atau anak panah.
                Spek: senarai [{bentuk, p1, p2, k, sah}].
   - induktif : premis T1, T2, ... daripada pola, kesimpulan umum. Gelongsor bilangan premis,
                cip pola. Spek: pola [{a, b, c}] bagi Tn = an² + bn + c, konteks.
   - sangkal  : dakwaan "untuk semua n" diuji n demi n; titik hijau/merah; gelongsor n.
                Spek: dakwaan [kunci DAKWA], nMaks.
   Unsur jawapan bertanda jmi-hasil (tersembunyi dalam mod cabar). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    function bungkus(t, mak) {
      var kata = String(t).split(" "), baris = [], cur = "";
      kata.forEach(function (k) {
        if (cur && (cur + " " + k).length > mak) { baris.push(cur); cur = k; }
        else cur = cur ? cur + " " + k : k;
      });
      if (cur) baris.push(cur);
      return baris;
    }
    function perenggan(x, y, t, o, mak, jarak) {
      var out = "", bs = bungkus(t, mak || 33);
      bs.forEach(function (b, i) { out += teks(x, y + i * (jarak || 16), b, o); });
      return { svg: out, y: y + (bs.length - 1) * (jarak || 16) };
    }
    function BP(v) { return v ? "Benar" : "Palsu"; }
    function perdana(n) { if (n < 2) return false; for (var d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; }
    function bulat(cx, cy, r, isi, tepi, kelas) {
      return '<circle' + (kelas ? ' class="' + kelas + '"' : "") + ' cx="' + b1(cx) + '" cy="' + b1(cy) + '" r="' + r + '" fill="' + (isi ? h.w(isi) : "none") + '" stroke="' + h.w(tepi) + '" stroke-width="1.5"></circle>';
    }

    /* Predikat bagi mod implikasi. Domain: integer −12 hingga 30. */
    var PRED = {
      x3: { t: "x = 3", n: "x ≠ 3", f: function (x) { return x === 3; } },
      kd9: { t: "x² = 9", n: "x² ≠ 9", f: function (x) { return x * x === 9; } },
      kd16: { t: "x² = 16", n: "x² ≠ 16", f: function (x) { return x * x === 16; } },
      x4: { t: "x = 4", n: "x ≠ 4", f: function (x) { return x === 4; } },
      g6: { t: "x > 6", n: "x ≤ 6", f: function (x) { return x > 6; } },
      g4: { t: "x > 4", n: "x ≤ 4", f: function (x) { return x > 4; } },
      gan4: { t: "x gandaan 4", n: "x bukan gandaan 4", f: function (x) { return x % 4 === 0; } },
      gen: { t: "x nombor genap", n: "x bukan nombor genap", f: function (x) { return x % 2 === 0; } },
      gan6: { t: "x gandaan 6", n: "x bukan gandaan 6", f: function (x) { return x % 6 === 0; } },
      gan3: { t: "x gandaan 3", n: "x bukan gandaan 3", f: function (x) { return x % 3 === 0; } }
    };
    var DOMAIN = []; for (var dx = -12; dx <= 30; dx++) DOMAIN.push(dx);
    var BENTUK = ["Implikasi", "Akas", "Songsangan", "Kontrapositif"];
    function ujiImp(fp, fq) {
      for (var i = 0; i < DOMAIN.length; i++) { var x = DOMAIN[i]; if (fp(x) && !fq(x)) return { v: false, x: x }; }
      return { v: true, x: null };
    }
    function empatBentuk(imp) {
      var P = PRED[imp.p], Q = PRED[imp.q];
      if (!P || !Q) throw new Error("predikat tidak dikenali");
      var np = function (x) { return !P.f(x); }, nq = function (x) { return !Q.f(x); };
      return [
        { t: "Jika " + P.t + ", maka " + Q.t, u: ujiImp(P.f, Q.f) },
        { t: "Jika " + Q.t + ", maka " + P.t, u: ujiImp(Q.f, P.f) },
        { t: "Jika " + P.n + ", maka " + Q.n, u: ujiImp(np, nq) },
        { t: "Jika " + Q.n + ", maka " + P.n, u: ujiImp(nq, np) }];
    }

    /* Dakwaan bagi mod sangkal: f(n) dan syarat. */
    var DAKWA = {
      euler41: { t: "n² + n + 41 ialah nombor perdana", f: function (n) { return n * n + n + 41; }, ujian: perdana, lbl: "n² + n + 41" },
      p11: { t: "n² − n + 11 ialah nombor perdana", f: function (n) { return n * n - n + 11; }, ujian: perdana, lbl: "n² − n + 11" },
      dua: { t: "2ⁿ > n² bagi setiap n ≥ 1", f: function (n) { return Math.pow(2, n) - n * n; }, ujian: function (v) { return v > 0; }, lbl: "2ⁿ − n²", mula: 1 }
    };

    function Tn(p, n) { return p.a * n * n + p.b * n + p.c; }
    function rumus(p) {
      var o = "", sebut = function (k, s) {
        if (!k) return;
        var neg = k < 0, m = Math.abs(k);
        if (!o) o = (neg ? "−" : "") + (m === 1 && s ? "" : m) + s;
        else o += (neg ? " − " : " + ") + (m === 1 && s ? "" : m) + s;
      };
      sebut(p.a, "n²"); sebut(p.b, "n"); sebut(p.c, "");
      return o || "0";
    }

    W.t4logik = {
      mula: function (c) {
        if (c.mod === "nilai") return { i: 0 };
        if (c.mod === "majmuk") return { p: 0, q: 0 };
        if (c.mod === "implikasi") return { i: 0, f: 0 };
        if (c.mod === "hujah") return { i: 0 };
        if (c.mod === "induktif") return { i: 0, n: 3 };
        if (c.mod === "sangkal") return { d: 0, n: 1 };
        throw new Error("mod t4logik tidak dikenali: " + c.mod);
      },
      kawalan: function (c) {
        var cip = function (k, label, arr) { return { k: k, label: label, min: 0, maks: arr.length - 1, teks: arr, pilih: true }; };
        if (c.mod === "nilai") return [cip("i", "ayat", c.ayat.map(function (a, i) { return "Ayat " + (i + 1); }))];
        if (c.mod === "majmuk") return [cip("p", "p", c.pSet.map(function (a) { return a.lbl; })), cip("q", "q", c.qSet.map(function (a) { return a.lbl; }))];
        if (c.mod === "implikasi") return [cip("i", "implikasi", c.senarai.map(function (a, i) { return "I" + (i + 1); })), cip("f", "bentuk", BENTUK)];
        if (c.mod === "hujah") return [cip("i", "hujah", c.senarai.map(function (a, i) { return "Hujah " + (i + 1); }))];
        if (c.mod === "induktif") return [cip("i", "pola", c.pola.map(function (a, i) { return "Pola " + String.fromCharCode(65 + i); })), { k: "n", label: "bilangan premis", min: 1, maks: c.nMaks || 5 }];
        var mula = DAKWA[c.dakwaan[0]].mula || 0;
        return [cip("d", "dakwaan", c.dakwaan.map(function (a, i) { return "Dakwaan " + (i + 1); })), { k: "n", label: "n", min: 0, maks: c.nMaks }];
      },
      kira: function (c, s) {
        if (c.mod === "nilai") { var a = c.ayat[s.i]; return { t: a.t, pernyataan: a.jenis !== "X", v: a.jenis === "B", nafi: a.nafi }; }
        if (c.mod === "majmuk") { var p = c.pSet[s.p], q = c.qSet[s.q]; return { p: p.v, q: q.v, dan: p.v && q.v, atau: p.v || q.v }; }
        if (c.mod === "implikasi") { var e = empatBentuk(c.senarai[s.i]); return { bentuk: e.map(function (z) { return { t: z.t, v: z.u.v, penyangkal: z.u.x }; }), dipilih: s.f }; }
        if (c.mod === "hujah") { var hj = c.senarai[s.i]; return { bentuk: hj.bentuk, k: hj.k, sah: hj.sah !== false }; }
        if (c.mod === "induktif") { var pl = c.pola[s.i], sb = []; for (var k = 1; k <= s.n; k++) sb.push(Tn(pl, k)); return { sebutan: sb, rumus: "Tn = " + rumus(pl), seterusnya: Tn(pl, s.n + 1) }; }
        var D = DAKWA[c.dakwaan[s.d]], m0 = D.mula || 0, n = Math.max(s.n, m0), v = D.f(n), pertama = null;
        for (var j = m0; j <= c.nMaks; j++) if (!D.ujian(D.f(j))) { pertama = j; break; }
        return { n: n, nilai: v, lulus: D.ujian(v), penyangkal: pertama };
      },
      lukis: function (c, s) {
        if (c.mod === "nilai") return lukisNilai(c, s);
        if (c.mod === "majmuk") return lukisMajmuk(c, s);
        if (c.mod === "implikasi") return lukisImp(c, s);
        if (c.mod === "hujah") return lukisHujah(c, s);
        if (c.mod === "induktif") return lukisInduktif(c, s);
        return lukisSangkal(c, s);
      }
    };

    function lukisNilai(c, s) {
      var r = W.t4logik.kira(c, s), o = "";
      o += h.kotak(6, 8, 248, 70, { isi: "lembayungLembut", garis: "ungu", bulat: 10 });
      var P = perenggan(16, 32, "“" + r.t + "”", { saiz: 13, warna: "tinta", tebal: true }, 30, 18);
      o += P.svg;
      var y = 102;
      o += teks(8, y, "Pernyataan?", { saiz: 12, warna: "tinta3" });
      o += teks(120, y, r.pernyataan ? "Ya" : "Bukan pernyataan", { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      o += teks(8, y + 22, "Nilai kebenaran:", { saiz: 12, warna: "tinta3" });
      o += teks(130, y + 22, r.pernyataan ? BP(r.v) : "tiada", { saiz: 12, warna: r.v ? "hijau" : "merah", tebal: true, hasil: true });
      o += teks(8, y + 46, "Penafian:", { saiz: 12, warna: "tinta3" });
      var Q = perenggan(8, y + 66, r.pernyataan ? "“" + r.nafi + "”" : "Tiada, kerana nilai kebenarannya tidak dapat ditentukan.", { saiz: 12, warna: "tinta2", hasil: true }, 34);
      o += Q.svg;
      if (r.pernyataan) o += teks(8, Q.y + 20, "Nilai kebenaran penafian: " + BP(!r.v), { saiz: 11, warna: "tinta2", hasil: true });
      var tinggi = (r.pernyataan ? Q.y + 20 : Q.y) + 12;
      return h.svg(Math.max(tinggi, 196), o, "Rajah kad ayat: " + r.t + "; menunjukkan sama ada ayat itu pernyataan, nilai kebenarannya dan penafiannya");
    }

    function lukisMajmuk(c, s) {
      var r = W.t4logik.kira(c, s), o = "", p = c.pSet[s.p], q = c.qSet[s.q];
      var A = perenggan(8, 18, "p: " + p.t, { saiz: 12, warna: "tinta", tebal: true }, 34);
      o += A.svg;
      var B = perenggan(8, A.y + 20, "q: " + q.t, { saiz: 12, warna: "tinta", tebal: true }, 34);
      o += B.svg;
      var y0 = B.y + 22, lajur = [24, 82, 150, 220], tajuk = ["p", "q", "p dan q", "p atau q"];
      o += h.kotak(6, y0, 248, 26 * 5, { isi: "kertas2", garis: "garis2", bulat: 8, tebal: 1 });
      tajuk.forEach(function (t, i) { o += teks(lajur[i], y0 + 18, t, { tengah: true, saiz: 12, warna: "tinta", tebal: true }); });
      var baris = [[true, true], [true, false], [false, true], [false, false]];
      baris.forEach(function (bq, i) {
        var y = y0 + 26 * (i + 1), kini = bq[0] === r.p && bq[1] === r.q;
        if (kini) o += '<g class="jmi-hasil">' + h.kotak(10, y + 3, 240, 22, { isi: "kuningLembut", garis: "kuning", bulat: 6, tebal: 1.5 }) + "</g>";
        var nilai = [bq[0], bq[1], bq[0] && bq[1], bq[0] || bq[1]];
        nilai.forEach(function (v, j) { o += teks(lajur[j], y + 19, v ? "B" : "P", { tengah: true, saiz: 13, warna: j < 2 ? "tinta2" : v ? "hijau" : "merah", tebal: j >= 2 }); });
      });
      var y = y0 + 26 * 5 + 22;
      o += teks(8, y, "p dan q: " + BP(r.dan), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      o += teks(8, y + 18, "p atau q: " + BP(r.atau), { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      return h.svg(y + 28, o, "Rajah jadual kebenaran pernyataan majmuk; p " + BP(r.p) + " dan q " + BP(r.q) + ", baris sepadan diserlahkan");
    }

    function lukisImp(c, s) {
      var r = W.t4logik.kira(c, s), o = "", y = 20;
      o += teks(8, y, "x ialah integer dari −12 hingga 30", { saiz: 11, warna: "tinta3" });
      y += 12;
      r.bentuk.forEach(function (b, i) {
        var bs = bungkus(b.t, 30), tinggi = 24 + bs.length * 15;
        var pilih = i === r.dipilih;
        o += h.kotak(6, y, 248, tinggi, { isi: pilih ? "lembayungLembut" : "kertas", garis: pilih ? "ungu" : "garis2", bulat: 8, tebal: pilih ? 2 : 1 });
        o += teks(14, y + 15, BENTUK[i], { saiz: 11, warna: "tinta3", tebal: true });
        o += teks(246, y + 15, BP(b.v), { kanan: true, saiz: 11, warna: b.v ? "hijau" : "merah", tebal: true, hasil: true });
        bs.forEach(function (l, j) { o += teks(14, y + 32 + j * 15, l, { saiz: 12, warna: "tinta" }); });
        y += tinggi + 6;
      });
      var d = r.bentuk[r.dipilih];
      o += teks(8, y + 14, d.v ? "Tiada contoh penyangkal" : "Contoh penyangkal: x = " + String(d.penyangkal).replace("-", "−"), { saiz: 12, warna: d.v ? "hijau" : "merah", tebal: true, hasil: true });
      return h.svg(y + 24, o, "Rajah empat bentuk implikasi: " + r.bentuk[0].t + ", akas, songsangan dan kontrapositif dengan nilai kebenaran masing-masing");
    }

    function lukisHujah(c, s) {
      var hj = c.senarai[s.i], r = W.t4logik.kira(c, s), o = "", y = 18;
      o += teks(8, y, "Bentuk " + hj.bentuk, { saiz: 13, warna: "ungu", tebal: true });
      y += 22;
      var P1 = perenggan(8, y, "Premis 1: " + hj.p1, { saiz: 12, warna: "tinta" }, 34); o += P1.svg; y = P1.y + 20;
      var P2 = perenggan(8, y, "Premis 2: " + hj.p2, { saiz: 12, warna: "tinta" }, 34); o += P2.svg; y = P2.y + 20;
      var K = perenggan(8, y, "Kesimpulan: " + hj.k, { saiz: 12, warna: "merah", tebal: true, hasil: true }, 34); o += K.svg; y = K.y + 18;
      /* gambar: Euler (Bentuk I) atau anak panah p → q (Bentuk II/III) */
      var gy = y + 10;
      if (hj.bentuk === "I") {
        o += '<ellipse cx="130" cy="' + b1(gy + 50) + '" rx="110" ry="46" fill="' + h.w("hijauLembut") + '" stroke="' + h.w("hijau") + '" stroke-width="1.5"></ellipse>';
        o += '<ellipse cx="110" cy="' + b1(gy + 56) + '" rx="56" ry="28" fill="' + h.w("lembayungLembut") + '" stroke="' + h.w("ungu") + '" stroke-width="1.5"></ellipse>';
        o += teks(196, gy + 34, "B", { saiz: 13, warna: "hijau", tebal: true });
        o += teks(70, gy + 52, "A", { saiz: 13, warna: "ungu", tebal: true });
        o += bulat(122, gy + 60, 5, "merah", "merah", "jmi-hasil") + teks(132, gy + 64, "C", { saiz: 12, warna: "merah", tebal: true, hasil: true });
        y = gy + 104;
      } else {
        var negasi = hj.bentuk === "III";
        o += h.kotak(16, gy + 8, 70, 34, { isi: "lembayungLembut", garis: "ungu", bulat: 8 });
        o += h.kotak(174, gy + 8, 70, 34, { isi: "hijauLembut", garis: "hijau", bulat: 8 });
        o += teks(51, gy + 30, negasi ? "bukan p" : "p", { tengah: true, saiz: 12, warna: "tinta", tebal: true, hasil: negasi });
        o += teks(209, gy + 30, negasi ? "bukan q" : "q", { tengah: true, saiz: 12, warna: "tinta", tebal: true, hasil: !negasi });
        o += h.garis(90, gy + 25, 166, gy + 25, { warna: "tinta2", tebal: 2 });
        o += h.laluan("M170 " + b1(gy + 25) + " L162 " + b1(gy + 20) + " L162 " + b1(gy + 30) + " Z", { isi: "tinta2", warna: "tinta2", tebal: 1 });
        o += teks(130, gy + 58, negasi ? "bukan q benar ⇒ bukan p benar" : "p benar ⇒ q benar", { tengah: true, saiz: 11, warna: "tinta2" });
        y = gy + 70;
      }
      o += teks(8, y + 10, "Hujah " + (r.sah ? "sah" : "tidak sah"), { saiz: 12, warna: r.sah ? "hijau" : "merah", tebal: true, hasil: true });
      return h.svg(y + 20, o, "Rajah hujah deduktif Bentuk " + hj.bentuk + " dengan premis 1, premis 2 dan kesimpulan");
    }

    function lukisInduktif(c, s) {
      var r = W.t4logik.kira(c, s), o = "", y = 18;
      o += teks(8, y, c.konteks, { saiz: 12, warna: "tinta", tebal: true });
      y += 24;
      r.sebutan.forEach(function (v, i) {
        o += teks(8, y + i * 18, "Premis " + (i + 1) + ": T" + (i + 1) + " = " + v, { saiz: 12, warna: "tinta2" });
      });
      var pl = c.pola[s.i];
      var ruangX = 8 + 22 * 7.2;
      r.sebutan.forEach(function (v, i) {
        var nn = i + 1, u = [];
        if (pl.a) u.push(pl.a + "(" + nn + ")²");
        if (pl.b) u.push(pl.b + "(" + nn + ")");
        if (pl.c) u.push(String(pl.c));
        o += teks(ruangX, y + i * 18, "= " + u.join(" + ").replace(/\+ -/g, "− "), { saiz: 11, warna: "ungu", hasil: true });
      });
      y += r.sebutan.length * 18 + 8;
      o += h.garis(8, y, 252, y, { warna: "tinta3", tebal: 1 });
      o += teks(8, y + 20, "Kesimpulan: " + r.rumus, { saiz: 13, warna: "merah", tebal: true, hasil: true });
      o += teks(8, y + 38, "bagi n = 1, 2, 3, ...", { saiz: 11, warna: "tinta2", hasil: true });
      o += teks(8, y + 58, "Ramalan T" + (r.sebutan.length + 1) + " = " + r.seterusnya, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      return h.svg(Math.max(y + 68, 200), o, "Rajah hujah induktif: " + r.sebutan.length + " premis daripada pola " + r.sebutan.join(", ") + " membawa kepada kesimpulan umum");
    }

    function lukisSangkal(c, s) {
      var D = DAKWA[c.dakwaan[s.d]], r = W.t4logik.kira(c, s), o = "", m0 = D.mula || 0;
      var A = perenggan(8, 18, "Dakwaan: " + D.t, { saiz: 12, warna: "tinta", tebal: true }, 34);
      o += A.svg;
      var y0 = A.y + 16, per = 14, lajur = 14;
      for (var n = m0; n <= c.nMaks; n++) {
        var k = n - m0, cx = 14 + (k % lajur) * 17, cy = y0 + 10 + Math.floor(k / lajur) * 17, ok = D.ujian(D.f(n));
        o += bulat(cx, cy, n === r.n ? 7 : 5, n <= r.n ? (ok ? "hijau" : "merah") : "kertas2", n === r.n ? "tinta" : "garis2");
      }
      var bar = Math.ceil((c.nMaks - m0 + 1) / lajur);
      var y = y0 + bar * 17 + 22;
      o += teks(8, y, "n = " + r.n + ": " + D.lbl + " = " + r.nilai, { saiz: 12, warna: "tinta", tebal: true });
      o += teks(8, y + 20, r.lulus ? "✓ Memenuhi dakwaan" : "✗ Tidak memenuhi dakwaan", { saiz: 12, warna: r.lulus ? "hijau" : "merah", tebal: true });
      o += teks(8, y + 42, r.penyangkal == null ? "Tiada penyangkal hingga n = " + c.nMaks : "Penyangkal pertama: n = " + r.penyangkal, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      return h.svg(y + 52, o, "Rajah ujian dakwaan " + D.t + " bagi n dari " + m0 + " hingga " + c.nMaks + "; titik hijau memenuhi dakwaan dan titik merah tidak");
    }
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
