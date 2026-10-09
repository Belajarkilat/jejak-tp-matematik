/* Widget Tingkatan 4 Bab 9 Kebarangkalian Peristiwa Bergabung. Widget `t4bergabung`, empat mod:
   - jadual : ruang sampel dua eksperimen sebagai jadual (pasangan tertib). Peristiwa A dan B
              daripada pustaka EV di bawah; cip memilih A, B, A ∩ B, A ∪ B atau A′.
              Kod menyemak sama ada P(A ∩ B) = P(A) × P(B) (tak bersandar).
              Spek: baris, lajur (label), A, B (kunci EV), lblA, lblB, namaBaris, namaLajur.
   - pokok  : dua cabutan daripada beg; cip "dengan pemulangan" / "tanpa pemulangan" dan cip
              peristiwa. Kebarangkalian setiap cabang dan laluan dikira sebagai pecahan tepat.
              Spek: beg [{w, n, h}] (h = huruf), peristiwa [{nama, laluan:["MM", ...]}].
   - venn   : kad bernombor 1 hingga N; pasangan peristiwa daripada pustaka NOM. Gambar rajah
              Venn dengan bilangan, dan P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
              Spek: N, pasangan [{A, B, lblA, lblB}].
   - pokok3 : tiga peristiwa tak bersandar dengan kebarangkalian p; lapan kesudahan.
              Cip memilih peristiwa gabungan. Spek: peristiwa [{nama, h, p}], pilihan [{nama, uji}]
              dengan uji = "semua" | "tiada" | "tepat1" | "tepat2" | "sekurang2" | kod seperti "LLG".
   Pecahan dipermudah dengan FSB. Unsur jawapan bertanda jmi-hasil. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    function fsb(a, b) { return b ? fsb(b, a % b) : a; }
    function pecahan(n, d) { if (n === 0) return "0"; if (n === d) return "1"; var g = fsb(n, d); return (n / g) + "/" + (d / g); }
    function pecahLengkap(n, d) { var p = pecahan(n, d); return n + "/" + d + (p !== n + "/" + d ? " = " + p : ""); }
    function nombor(x) { return isNaN(+x) ? null : +x; }

    var EV = {
      rK: function (r) { return r === "K"; }, rE: function (r) { return r === "E"; },
      cGenap: function (r, c) { return nombor(c) % 2 === 0; }, cGanjil: function (r, c) { return nombor(c) % 2 === 1; },
      cPerdana: function (r, c) { return [2, 3, 5, 7].indexOf(nombor(c)) >= 0; }, cLebih4: function (r, c) { return nombor(c) > 4; },
      rGenap: function (r) { return nombor(r) % 2 === 0; }, rLebih4: function (r) { return nombor(r) > 4; },
      sama: function (r, c) { return r === c; }, jumlah7: function (r, c) { return nombor(r) + nombor(c) === 7; },
      jumlahLebih8: function (r, c) { return nombor(r) + nombor(c) > 8; }, jumlahGenap: function (r, c) { return (nombor(r) + nombor(c)) % 2 === 0; },
      darabLebih6: function (r, c) { return nombor(r) * nombor(c) > 6; }, darabGenap: function (r, c) { return (nombor(r) * nombor(c)) % 2 === 0; },
      jumlah5: function (r, c) { return nombor(r) + nombor(c) === 5; }
    };
    var NOM = {
      gandaan3: function (x) { return x % 3 === 0; }, gandaan4: function (x) { return x % 4 === 0; }, gandaan5: function (x) { return x % 5 === 0; },
      genap: function (x) { return x % 2 === 0; }, ganjil: function (x) { return x % 2 === 1; },
      perdana: function (x) { if (x < 2) return false; for (var d = 2; d * d <= x; d++) if (x % d === 0) return false; return true; },
      lebih15: function (x) { return x > 15; }, faktor24: function (x) { return 24 % x === 0; }, kuasaDua: function (x) { return Math.round(Math.sqrt(x)) * Math.round(Math.sqrt(x)) === x; },
      kurang6: function (x) { return x < 6; }
    };
    function ev(k) { if (!EV[k]) throw new Error("peristiwa " + k + " tidak dikenali"); return EV[k]; }
    function nm(k) { if (!NOM[k]) throw new Error("peristiwa nombor " + k + " tidak dikenali"); return NOM[k]; }

    var PILIH_J = ["A", "B", "A ∩ B", "A ∪ B", "A′"];
    function ujiJ(c, i, r, cc) {
      var a = ev(c.A)(r, cc), b = ev(c.B)(r, cc);
      return [a, b, a && b, a || b, !a][i];
    }

    /* kebarangkalian laluan pokok (pecahan) */
    function pokokP(c, pulang) {
      var N = c.beg.reduce(function (j, x) { return j + x.n; }, 0), out = {};
      c.beg.forEach(function (x) {
        c.beg.forEach(function (y) {
          var n2 = y.n - (!pulang && x === y ? 1 : 0), N2 = N - (pulang ? 0 : 1);
          out[x.h + y.h] = { n1: x.n, d1: N, n2: n2, d2: N2, n: x.n * n2, d: N * N2 };
        });
      });
      return out;
    }
    function pola(c, uji) {
      var k = c.peristiwa.length, o = [];
      for (var m = 0; m < (1 << k); m++) {
        var kod = "", p = 1, bil = 0;
        for (var i = 0; i < k; i++) { var ya = !(m & (1 << (k - 1 - i))); kod += ya ? c.peristiwa[i].h : c.peristiwa[i].hBukan; p *= ya ? c.peristiwa[i].p : 1 - c.peristiwa[i].p; if (ya) bil++; }
        var ok = uji === "semua" ? bil === k : uji === "tiada" ? bil === 0 : uji === "tepat1" ? bil === 1 : uji === "tepat2" ? bil === 2 : uji === "sekurang2" ? bil >= 2 : uji === "sekurang1" ? bil >= 1 : kod === uji;
        o.push({ kod: kod, p: p, ok: ok });
      }
      return o;
    }
    function bul(x, d) { var p = Math.pow(10, d), r = Math.round(x * p) / p; return r; }

    W.t4bergabung = {
      mula: function (c) { if (c.mod === "pokok") return { pulang: 0, e: 0 }; return { i: 0 }; },
      kawalan: function (c) {
        var cip = function (k, label, arr) { return { k: k, label: label, min: 0, maks: arr.length - 1, teks: arr, pilih: true }; };
        if (c.mod === "jadual") return [cip("i", "peristiwa", PILIH_J)];
        if (c.mod === "pokok") return [cip("pulang", "cabutan", ["Dengan pemulangan", "Tanpa pemulangan"]), cip("e", "peristiwa", c.peristiwa.map(function (p) { return p.nama; }))];
        if (c.mod === "venn") return [cip("i", "pasangan", c.pasangan.map(function (p, i) { return "Pasangan " + (i + 1); }))];
        return [cip("i", "peristiwa", c.pilihan.map(function (p) { return p.nama; }))];
      },
      kira: function (c, s) {
        if (c.mod === "jadual") {
          var N = c.baris.length * c.lajur.length, nA = 0, nB = 0, nAB = 0, nPilih = 0;
          c.baris.forEach(function (r) { c.lajur.forEach(function (cc) {
            var a = ev(c.A)(r, cc), b = ev(c.B)(r, cc);
            if (a) nA++; if (b) nB++; if (a && b) nAB++; if (ujiJ(c, s.i, r, cc)) nPilih++;
          }); });
          return { N: N, nA: nA, nB: nB, nAB: nAB, n: nPilih, P: pecahan(nPilih, N), takBersandar: nAB * N === nA * nB, eksklusif: nAB === 0 };
        }
        if (c.mod === "pokok") {
          var T = pokokP(c, s.pulang === 0), e = c.peristiwa[s.e], d = T[e.laluan[0]].d, n = 0;
          e.laluan.forEach(function (L) { n += T[L].n; });
          return { laluan: T, n: n, d: d, P: pecahan(n, d) };
        }
        if (c.mod === "venn") {
          var pr = c.pasangan[s.i], fA = nm(pr.A), fB = nm(pr.B), a2 = 0, b2 = 0, ab2 = 0;
          for (var x = 1; x <= c.N; x++) { var ia = fA(x), ib = fB(x); if (ia) a2++; if (ib) b2++; if (ia && ib) ab2++; }
          return { nA: a2, nB: b2, nAB: ab2, nAtau: a2 + b2 - ab2, N: c.N, eksklusif: ab2 === 0, P: pecahan(a2 + b2 - ab2, c.N) };
        }
        var L = pola(c, c.pilihan[s.i].uji), jum = 0; L.forEach(function (z) { if (z.ok) jum += z.p; });
        return { kesudahan: L, P: bul(jum, 4) };
      },
      lukis: function (c, s) {
        var r = W.t4bergabung.kira(c, s), o = "";
        if (c.mod === "jadual") {
          var nb = c.baris.length, nl = c.lajur.length, sel = Math.min(30, 200 / Math.max(nl, 1)), tinggi = Math.min(26, 160 / nb);
          var x0 = 52, y0 = 46;
          o += teks(130, 16, "Ruang sampel: " + r.N + " kesudahan", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += teks(x0 + nl * sel, y0 - 8, c.namaLajur + " →", { kanan: true, saiz: 11, warna: "tinta3" });
          o += teks(8, y0 - 8, c.namaBaris + " ↓", { saiz: 11, warna: "tinta3" });
          c.lajur.forEach(function (l, j) { o += teks(x0 + j * sel + sel / 2, y0 + 12, l, { tengah: true, saiz: 11, warna: "tinta2", tebal: true }); });
          c.baris.forEach(function (b, i) {
            var y = y0 + 18 + i * tinggi;
            o += teks(x0 - 6, y + tinggi / 2 + 4, b, { kanan: true, saiz: 11, warna: "tinta2", tebal: true });
            c.lajur.forEach(function (l, j) {
              var ok = ujiJ(c, s.i, b, l);
              o += (ok ? '<g class="jmi-hasil">' : "") + h.kotak(x0 + j * sel + 1, y + 1, sel - 2, tinggi - 2, { isi: ok ? "kuningLembut" : "kertas", garis: ok ? "kuning" : "garis", bulat: 3, tebal: ok ? 1.5 : 0.8 }) + (ok ? "</g>" : "");
            });
          });
          var yb = y0 + 18 + nb * tinggi + 22;
          o += teks(8, yb, "A: " + c.lblA, { saiz: 11, warna: "ungu", tebal: true });
          o += teks(8, yb + 16, "B: " + c.lblB, { saiz: 11, warna: "hijau", tebal: true });
          o += teks(8, yb + 38, "P(" + PILIH_J[s.i] + ") = " + r.n + "/" + r.N + (r.P !== r.n + "/" + r.N ? " = " + r.P : ""), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          o += teks(8, yb + 58, "P(A) × P(B) = " + pecahan(r.nA, r.N) + " × " + pecahan(r.nB, r.N) + " = " + pecahan(r.nA * r.nB, r.N * r.N), { saiz: 11, warna: "tinta2", hasil: true });
          o += teks(8, yb + 74, "P(A ∩ B) = " + pecahan(r.nAB, r.N) + (r.takBersandar ? ": tak bersandar" : ": bersandar"), { saiz: 11, warna: "tinta2", hasil: true });
          return h.svg(yb + 84, o, "Rajah jadual ruang sampel " + c.namaBaris + " dan " + c.namaLajur + " dengan kesudahan peristiwa " + PILIH_J[s.i] + " diserlahkan");
        }
        if (c.mod === "pokok") {
          var T = r.laluan, e = c.peristiwa[s.e], N = T[c.beg[0].h + c.beg[0].h].d1, y1 = [70, 170], x1 = 96, x2 = 176;
          o += teks(130, 16, (s.pulang === 0 ? "Dengan" : "Tanpa") + " pemulangan", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += teks(8, 34, "Beg: " + c.beg.map(function (b) { return b.n + " " + b.w; }).join(", "), { saiz: 11, warna: "tinta3" });
          var akar = [24, 120];
          c.beg.forEach(function (x, i) {
            var ya = y1[i];
            o += h.garis(akar[0], akar[1], x1, ya, { warna: "tinta3", tebal: 1.5 });
            o += teks((akar[0] + x1) / 2 - 6, (akar[1] + ya) / 2 + (i ? 14 : -4), x.n + "/" + N, { kanan: true, saiz: 11, warna: "tinta2", tebal: true });
            o += h.kotak(x1 - 9, ya - 10, 18, 20, { isi: i ? "hijauLembut" : "merahLembut", garis: i ? "hijau" : "merah", bulat: 4 });
            o += teks(x1, ya + 5, x.h, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
            c.beg.forEach(function (y, j) {
              var kod = x.h + y.h, t = T[kod], yb2 = ya + (j ? 24 : -24), on = e.laluan.indexOf(kod) >= 0;
              o += (on ? '<g class="jmi-hasil">' + h.garis(x1 + 9, ya, x2 - 10, yb2, { warna: "kuning", tebal: 4 }) + "</g>" : "") + h.garis(x1 + 9, ya, x2 - 10, yb2, { warna: "tinta3", tebal: 1.5 });
              o += teks((x1 + x2) / 2 - 2, (ya + yb2) / 2 + (j ? 16 : -7), t.n2 + "/" + t.d2, { kanan: true, saiz: 11, warna: "tinta2", tebal: true });
              o += teks(x2 - 4, yb2 + 4, kod, { saiz: 12, warna: "tinta", tebal: true });
              o += teks(x2 + 20, yb2 + 4, t.n + "/" + t.d, { saiz: 11, warna: on ? "merah" : "tinta3", tebal: on, hasil: on });
            });
          });
          var yp = 222;
          o += teks(8, yp, "Peristiwa: " + e.nama, { saiz: 12, warna: "tinta", tebal: true });
          o += teks(8, yp + 20, "P = " + e.laluan.map(function (L) { return T[L].n + "/" + T[L].d; }).join(" + "), { saiz: 11, warna: "tinta2", hasil: true });
          o += teks(8, yp + 40, "= " + r.n + "/" + r.d + (r.P !== r.n + "/" + r.d ? " = " + r.P : ""), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          return h.svg(yp + 50, o, "Rajah pokok dua cabutan " + (s.pulang === 0 ? "dengan" : "tanpa") + " pemulangan bagi beg " + c.beg.map(function (b) { return b.n + " " + b.w; }).join(" dan ") + "; peristiwa " + e.nama);
        }
        if (c.mod === "venn") {
          var pr = c.pasangan[s.i];
          o += teks(130, 16, "Kad 1 hingga " + c.N + ", satu kad dipilih", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += h.kotak(6, 28, 248, 136, { garis: "tinta2", bulat: 6, tebal: 1.5 }) + teks(12, 44, "ξ", { saiz: 13, warna: "tinta", tebal: true });
          var cxA = r.eksklusif ? 80 : 104, cxB = r.eksklusif ? 180 : 156;
          o += '<circle cx="' + cxA + '" cy="98" r="50" fill="none" stroke="' + h.w("ungu") + '" stroke-width="2"></circle>';
          o += '<circle cx="' + cxB + '" cy="98" r="50" fill="none" stroke="' + h.w("hijau") + '" stroke-width="2"></circle>';
          o += teks(cxA - 44, 54, "A", { saiz: 13, warna: "ungu", tebal: true }) + teks(cxB + 36, 54, "B", { saiz: 13, warna: "hijau", tebal: true });
          o += teks(r.eksklusif ? cxA : cxA - 22, 102, String(r.nA - r.nAB), { tengah: true, saiz: 14, warna: "tinta", tebal: true });
          if (!r.eksklusif) o += teks(130, 102, String(r.nAB), { tengah: true, saiz: 14, warna: "merah", tebal: true });
          o += teks(r.eksklusif ? cxB : cxB + 22, 102, String(r.nB - r.nAB), { tengah: true, saiz: 14, warna: "tinta", tebal: true });
          o += teks(20, 156, String(r.N - r.nAtau), { saiz: 13, warna: "tinta2", tebal: true });
          var yv = 186;
          o += teks(8, yv, "A: " + pr.lblA, { saiz: 11, warna: "ungu", tebal: true });
          o += teks(8, yv + 16, "B: " + pr.lblB, { saiz: 11, warna: "hijau", tebal: true });
          o += teks(8, yv + 36, r.eksklusif ? "A ∩ B = ∅: saling eksklusif" : "A ∩ B ≠ ∅: tidak saling eksklusif", { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, yv + 56, "P(A ∪ B) = " + r.nA + "/" + r.N + " + " + r.nB + "/" + r.N + " − " + r.nAB + "/" + r.N, { saiz: 11, warna: "tinta2", hasil: true });
          o += teks(8, yv + 76, "= " + r.nAtau + "/" + r.N + (r.P !== r.nAtau + "/" + r.N ? " = " + r.P : ""), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          return h.svg(yv + 86, o, "Rajah gambar rajah Venn bagi kad 1 hingga " + c.N + " dengan peristiwa A " + pr.lblA + " dan B " + pr.lblB);
        }
        /* pokok3 */
        var P3 = c.peristiwa, pil = c.pilihan[s.i];
        o += teks(130, 16, "Tiga peristiwa tak bersandar", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        var xs = [16, 72, 128, 184], ys0 = 40, gap = 22, daun = r.kesudahan.length;
        var yDaun = function (i) { return ys0 + 8 + i * gap; };
        var tengah = function (lv, idx) { var per = daun / Math.pow(2, lv); return (yDaun(idx * per) + yDaun(idx * per + per - 1)) / 2; };
        for (var lv = 0; lv < 3; lv++) {
          for (var idx = 0; idx < Math.pow(2, lv); idx++) {
            var ya3 = tengah(lv, idx);
            [0, 1].forEach(function (cab) {
              var yb3 = tengah(lv + 1, idx * 2 + cab), p = cab ? 1 - P3[lv].p : P3[lv].p;
              o += h.garis(xs[lv] + 4, ya3, xs[lv + 1] - 4, yb3, { warna: "tinta3", tebal: 1.2 });
              if (lv === 0) o += teks((xs[0] + xs[1]) / 2 - 4, (ya3 + yb3) / 2 + (cab ? 14 : -4), String(bul(p, 2)), { tengah: true, saiz: 11, warna: "tinta2" });
            });
          }
        }
        r.kesudahan.forEach(function (z, i) {
          var y = yDaun(i);
          if (z.ok) o += '<g class="jmi-hasil">' + h.kotak(xs[3] - 2, y - 9, 74, 18, { isi: "kuningLembut", garis: "kuning", bulat: 4 }) + "</g>";
          o += teks(xs[3] + 2, y + 4, z.kod, { saiz: 11, warna: "tinta", tebal: true });
          o += teks(254, y + 4, String(bul(z.p, 3)), { kanan: true, saiz: 11, warna: z.ok ? "merah" : "tinta3", tebal: z.ok });
        });
        var yk = yDaun(daun - 1) + 26;
        P3.forEach(function (p, i) { o += teks(8, yk + i * 15, p.h + " = " + p.nama + ", P = " + p.p, { saiz: 11, warna: "tinta3" }); });
        yk += P3.length * 15 + 8;
        o += teks(8, yk, "P(" + pil.nama + ") = " + r.P, { saiz: 13, warna: "merah", tebal: true, hasil: true });
        return h.svg(yk + 10, o, "Rajah pokok tiga peristiwa tak bersandar dengan lapan kesudahan; peristiwa " + pil.nama + " diserlahkan");
      }
    };
    W.t4bergabung.EV = EV; W.t4bergabung.NOM = NOM;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
