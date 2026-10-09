/* Widget Tingkatan 4 Bab 5 Rangkaian dalam Teori Graf. Satu widget `t4graf` dengan lima mod:
   - darjah  : graf tak terarah (boleh ada gelung dan berbilang tepi). Cip memilih bucu;
               darjahnya dikira (gelung = 2) dan jumlah darjah = 2 × bilangan tepi.
               Spek: bucu [{n, x, y}], tepi [[u, v], ...].
   - terarah : graf terarah (contoh rangkaian sosial "mengikuti"). Cip memilih bucu;
               darjah masuk dan darjah keluar dikira. Spek: bucu, tepi [[dari, ke]].
   - pokok   : cip memilih subgraf (senarai tepi). Kod menyemak sama ada subgraf itu
               terkait dan tanpa kitaran, iaitu pokok (tepi = bucu − 1). Spek: bucu, tepi, subgraf [{nama, tepi:[i...]}].
   - laluan  : rangkaian berpemberat. Cip memilih laluan (senarai bucu) dan kriteria
               (jarak/masa/kos). Laluan optimum dikira dengan algoritma Dijkstra.
               Spek: bucu, tepi [[u, v, {j, m, k}]], mula, akhir, laluan [[...]], kriteria [...],
               pelan (pilihan) [{nama, tepi:[[u, v, {..}]]}] = jalan baharu yang boleh ditambah.
   Unsur jawapan bertanda jmi-hasil (tersembunyi dalam mod cabar). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;
    var UNIT = { j: "km", m: "min", k: "RM" }, NAMA_K = { j: "jarak", m: "masa", k: "kos" };

    function cari(c, n) { for (var i = 0; i < c.bucu.length; i++) if (c.bucu[i].n === n) return c.bucu[i]; throw new Error("bucu " + n + " tiada"); }
    function bulat(cx, cy, r, isi, tepi, tebal, kelas) {
      return '<circle' + (kelas ? ' class="' + kelas + '"' : "") + ' cx="' + b1(cx) + '" cy="' + b1(cy) + '" r="' + r + '" fill="' + h.w(isi) + '" stroke="' + h.w(tepi) + '" stroke-width="' + (tebal || 2) + '"></circle>';
    }
    function nilaiK(w, k) { return k === "k" ? "RM" + w[k] : w[k] + " " + UNIT[k]; }

    /* Lukis tepi: lurus, melengkung (berbilang tepi) atau gelung. */
    function lukisTepi(c, senarai, o) {
      o = o || {};
      var out = "", kira = {};
      senarai.forEach(function (t, i) {
        var u = cari(c, t[0]), v = cari(c, t[1]), warna = (o.warna && o.warna(i, t)) || "tinta3", tebal = (o.tebal && o.tebal(i, t)) || 2;
        var kunci = [t[0], t[1]].sort().join("-"), ke = kira[kunci] = (kira[kunci] || 0) + 1;
        if (t[0] === t[1]) {
          var ly = u.y - 22;
          out += '<circle cx="' + b1(u.x) + '" cy="' + b1(ly) + '" r="11" fill="none" stroke="' + h.w(warna) + '" stroke-width="' + tebal + '"></circle>';
          return;
        }
        var mx = (u.x + v.x) / 2, my = (u.y + v.y) / 2, dx = v.x - u.x, dy = v.y - u.y, L = Math.sqrt(dx * dx + dy * dy);
        var off = t[3] && t[3].lengkung ? t[3].lengkung * 18 : ke === 1 ? 0 : (ke % 2 === 0 ? 1 : -1) * 18 * Math.ceil((ke - 1) / 2);
        var cx = mx - dy / L * off * 2, cy = my + dx / L * off * 2;
        if (off === 0) out += h.garis(u.x, u.y, v.x, v.y, { warna: warna, tebal: tebal });
        else out += '<path d="M' + b1(u.x) + " " + b1(u.y) + " Q" + b1(cx) + " " + b1(cy) + " " + b1(v.x) + " " + b1(v.y) + '" fill="none" stroke="' + h.w(warna) + '" stroke-width="' + tebal + '"></path>';
        if (o.arah) {
          /* kepala anak panah di tepi bulatan bucu sasaran */
          var tx = off === 0 ? u.x : cx, ty = off === 0 ? u.y : cy, ax = v.x - tx, ay = v.y - ty, al = Math.sqrt(ax * ax + ay * ay);
          var px = v.x - ax / al * 15, py = v.y - ay / al * 15, sd = Math.atan2(ay, ax);
          var p1 = [px - 9 * Math.cos(sd - 0.4), py - 9 * Math.sin(sd - 0.4)], p2 = [px - 9 * Math.cos(sd + 0.4), py - 9 * Math.sin(sd + 0.4)];
          out += h.laluan("M" + b1(px) + " " + b1(py) + " L" + b1(p1[0]) + " " + b1(p1[1]) + " L" + b1(p2[0]) + " " + b1(p2[1]) + " Z", { isi: warna, warna: warna, tebal: 1 });
        }
        if (o.label) {
          var lx = off === 0 ? mx : (mx + cx) / 2, ly2 = off === 0 ? my : (my + cy) / 2, lb = o.label(i, t);
          if (lb) {
            var lw = lb.length * 6.6 + 8;
            out += h.kotak(lx - lw / 2, ly2 - 9, lw, 16, { isi: "kertas", garis: "garis", bulat: 4, tebal: 1 });
            out += teks(lx, ly2 + 3, lb, { tengah: true, saiz: 11, warna: "tinta2", tebal: true });
          }
        }
      });
      return out;
    }
    function lukisBucu(c, pilih, o) {
      o = o || {};
      return c.bucu.map(function (b) {
        var on = pilih && pilih.indexOf(b.n) >= 0;
        return bulat(b.x, b.y, 13, on ? (o.isiPilih || "lembayungLembut") : "kertas", on ? (o.tepiPilih || "ungu") : "tinta2", on ? 2.5 : 1.8) +
          teks(b.x, b.y + 4, b.n, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      }).join("");
    }

    function darjah(c, n) { var d = 0; c.tepi.forEach(function (t) { if (t[0] === n) d++; if (t[1] === n) d++; }); return d; }
    function terkait(V, E) {
      if (!V.length) return true;
      var adj = {}; V.forEach(function (v) { adj[v] = []; });
      E.forEach(function (t) { adj[t[0]].push(t[1]); adj[t[1]].push(t[0]); });
      var lawat = {}, tindan = [V[0]];
      while (tindan.length) { var x = tindan.pop(); if (lawat[x]) continue; lawat[x] = true; adj[x].forEach(function (y) { tindan.push(y); }); }
      return V.every(function (v) { return lawat[v]; });
    }
    function berat(c, extra) { return c.tepi.concat(extra || []); }
    function dijkstra(c, E, k) {
      var jarak = {}, dari = {}, Q = c.bucu.map(function (b) { return b.n; });
      Q.forEach(function (v) { jarak[v] = Infinity; }); jarak[c.mula] = 0;
      while (Q.length) {
        Q.sort(function (a, b) { return jarak[a] - jarak[b]; });
        var u = Q.shift();
        E.forEach(function (t) {
          var v = t[0] === u ? t[1] : t[1] === u ? t[0] : null;
          if (v === null || Q.indexOf(v) < 0) return;
          var d = jarak[u] + t[2][k];
          if (d < jarak[v]) { jarak[v] = d; dari[v] = u; }
        });
      }
      var laluan = [c.akhir]; while (laluan[0] !== c.mula) laluan.unshift(dari[laluan[0]]);
      return { nilai: jarak[c.akhir], laluan: laluan };
    }
    function kosLaluan(E, L, k) {
      var j = 0;
      for (var i = 0; i < L.length - 1; i++) {
        var best = Infinity;
        E.forEach(function (t) { if ((t[0] === L[i] && t[1] === L[i + 1]) || (t[1] === L[i] && t[0] === L[i + 1])) best = Math.min(best, t[2][k]); });
        if (best === Infinity) return null;
        j += best;
      }
      return Math.round(j * 100) / 100;
    }

    W.t4graf = {
      mula: function (c) {
        if (c.mod === "darjah" || c.mod === "terarah") return { b: 0 };
        if (c.mod === "pokok") return { g: 0 };
        if (c.mod === "laluan") return { l: 0, k: 0, p: 0 };
        throw new Error("mod t4graf tidak dikenali: " + c.mod);
      },
      kawalan: function (c) {
        var cip = function (k, label, arr) { return { k: k, label: label, min: 0, maks: arr.length - 1, teks: arr, pilih: true }; };
        if (c.mod === "darjah" || c.mod === "terarah") return [cip("b", "bucu", c.bucu.map(function (b) { return b.n; }))];
        if (c.mod === "pokok") return [cip("g", "subgraf", c.subgraf.map(function (s) { return s.nama; }))];
        var k = [cip("l", "laluan", c.laluan.map(function (L) { return L.join("→"); }))];
        if (c.kriteria.length > 1) k.push(cip("k", "kriteria", c.kriteria.map(function (x) { return NAMA_K[x]; })));
        if (c.pelan) k.push(cip("p", "pelan", c.pelan.map(function (x) { return x.nama; })));
        return k;
      },
      kira: function (c, s) {
        if (c.mod === "darjah") {
          var n = c.bucu[s.b].n, gel = c.tepi.filter(function (t) { return t[0] === t[1]; }).length;
          var berbilang = {}, ada = false;
          c.tepi.forEach(function (t) { if (t[0] === t[1]) return; var kk = [t[0], t[1]].sort().join("-"); if (berbilang[kk]) ada = true; berbilang[kk] = true; });
          return { bucu: n, darjah: darjah(c, n), tepi: c.tepi.length, jumlahDarjah: c.bucu.reduce(function (j, b) { return j + darjah(c, b.n); }, 0), gelung: gel, berbilang: ada, mudah: !gel && !ada };
        }
        if (c.mod === "terarah") {
          var m = c.bucu[s.b].n;
          return { bucu: m, masuk: c.tepi.filter(function (t) { return t[1] === m; }).length, keluar: c.tepi.filter(function (t) { return t[0] === m; }).length };
        }
        if (c.mod === "pokok") {
          var sg = c.subgraf[s.g], E = sg.tepi.map(function (i) { return c.tepi[i]; }), V = [];
          E.forEach(function (t) { [t[0], t[1]].forEach(function (v) { if (V.indexOf(v) < 0) V.push(v); }); });
          (sg.bucu || []).forEach(function (v) { if (V.indexOf(v) < 0) V.push(v); });
          var ter = terkait(V, E), pokok = ter && E.length === V.length - 1;
          return { bucu: V.length, tepi: E.length, terkait: ter, kitaran: ter && E.length > V.length - 1, pokok: pokok, merentang: pokok && V.length === c.bucu.length };
        }
        var kk2 = c.kriteria[s.k], extra = c.pelan ? c.pelan[s.p].tepi : [], E2 = berat(c, extra), L = c.laluan[s.l];
        var opt = dijkstra(c, E2, kk2);
        return { kriteria: kk2, laluan: L.join("→"), nilai: kosLaluan(E2, L, kk2), optimum: opt.nilai, laluanOptimum: opt.laluan.join("→") };
      },
      lukis: function (c, s) {
        var r = W.t4graf.kira(c, s), o = "";
        if (c.mod === "darjah") {
          o += teks(130, 18, c.tajuk || "Graf G", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += lukisTepi(c, c.tepi, { warna: function (i, t) { return t[0] === r.bucu || t[1] === r.bucu ? "ungu" : "tinta3"; }, tebal: function (i, t) { return t[0] === r.bucu || t[1] === r.bucu ? 3 : 2; } });
          o += lukisBucu(c, [r.bucu]);
          var y = 222;
          o += teks(8, y, "Darjah bucu " + r.bucu + " = " + r.darjah, { saiz: 13, warna: "ungu", tebal: true, hasil: true });
          o += teks(8, y + 20, "Bilangan tepi = " + r.tepi, { saiz: 12, warna: "tinta2", hasil: true });
          o += teks(8, y + 38, "Jumlah darjah = " + r.jumlahDarjah + " = 2 × " + r.tepi, { saiz: 12, warna: "merah", tebal: true, hasil: true });
          o += teks(8, y + 56, r.mudah ? "Graf mudah" : "Bukan graf mudah:", { saiz: 12, warna: "tinta2", tebal: true, hasil: true });
          if (!r.mudah) o += teks(8, y + 72, [r.gelung ? "ada gelung" : "", r.berbilang ? "berbilang tepi" : ""].filter(Boolean).join(" dan "), { saiz: 11, warna: "tinta2", hasil: true });
          return h.svg(y + 82, o, "Rajah graf dengan " + c.bucu.length + " bucu dan " + r.tepi + " tepi; bucu " + r.bucu + " dipilih");
        }
        if (c.mod === "terarah") {
          o += teks(130, 18, c.tajuk || "Graf terarah", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += lukisTepi(c, c.tepi, { arah: true, warna: function (i, t) { return t[1] === r.bucu ? "hijau" : t[0] === r.bucu ? "merah" : "tinta3"; }, tebal: function (i, t) { return t[0] === r.bucu || t[1] === r.bucu ? 2.6 : 1.8; } });
          o += lukisBucu(c, [r.bucu]);
          var y2 = 222;
          o += teks(8, y2, "Darjah masuk " + r.bucu + " = " + r.masuk, { saiz: 13, warna: "hijau", tebal: true, hasil: true });
          o += teks(8, y2 + 20, "Darjah keluar " + r.bucu + " = " + r.keluar, { saiz: 13, warna: "merah", tebal: true, hasil: true });
          o += teks(8, y2 + 40, c.makna || "", { saiz: 11, warna: "tinta2" });
          return h.svg(y2 + 50, o, "Rajah graf terarah; bucu " + r.bucu + " mempunyai darjah masuk " + r.masuk + " dan darjah keluar " + r.keluar);
        }
        if (c.mod === "pokok") {
          var sg = c.subgraf[s.g];
          o += teks(130, 18, "Graf G (kelabu) dan subgraf (ungu)", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += lukisTepi(c, c.tepi, { warna: function () { return "garis2"; }, tebal: function () { return 1.5; } });
          o += lukisTepi(c, sg.tepi.map(function (i) { return c.tepi[i]; }), { warna: function () { return "ungu"; }, tebal: function () { return 3.5; } });
          var Vs = []; sg.tepi.forEach(function (i) { Vs.push(c.tepi[i][0], c.tepi[i][1]); });
          o += lukisBucu(c, Vs.concat(sg.bucu || []));
          var y3 = 222;
          o += teks(8, y3, "Bucu = " + r.bucu + ", tepi = " + r.tepi, { saiz: 12, warna: "tinta", tebal: true });
          o += teks(8, y3 + 20, r.terkait ? "Terkait" : "Tidak terkait", { saiz: 12, warna: "tinta2", hasil: true });
          o += teks(8, y3 + 38, r.kitaran ? "Ada kitaran" : "Tiada kitaran", { saiz: 12, warna: "tinta2", hasil: true });
          o += teks(8, y3 + 58, r.pokok ? "Pokok ✓ (tepi = bucu − 1)" : "Bukan pokok ✗", { saiz: 13, warna: r.pokok ? "hijau" : "merah", tebal: true, hasil: true });
          return h.svg(y3 + 68, o, "Rajah graf G dengan subgraf " + sg.nama + " yang mempunyai " + r.bucu + " bucu dan " + r.tepi + " tepi");
        }
        var extra = c.pelan ? c.pelan[s.p].tepi : [], E = berat(c, extra), L = c.laluan[s.l];
        var dalamL = function (t) { for (var i = 0; i < L.length - 1; i++) if ((t[0] === L[i] && t[1] === L[i + 1]) || (t[1] === L[i] && t[0] === L[i + 1])) return true; return false; };
        o += teks(130, 18, "Dari " + c.mula + " ke " + c.akhir + " · label = " + NAMA_K[r.kriteria], { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        o += lukisTepi(c, E, { warna: function (i, t) { return i >= c.tepi.length ? "hijau" : dalamL(t) ? "ungu" : "tinta3"; }, tebal: function (i, t) { return dalamL(t) ? 4 : 2; },
          label: function (i, t) { return nilaiK(t[2], r.kriteria); } });
        o += lukisBucu(c, L, { isiPilih: "lembayungLembut" });
        var y4 = 222;
        o += teks(8, y4, "Laluan " + r.laluan, { saiz: 12, warna: "ungu", tebal: true });
        o += teks(8, y4 + 20, r.nilai === null ? "Laluan ini tiada dalam pelan ini" : "Jumlah " + NAMA_K[r.kriteria] + " = " + (r.kriteria === "k" ? "RM" + r.nilai : r.nilai + " " + UNIT[r.kriteria]), { saiz: 12, warna: "tinta", hasil: true });
        o += teks(8, y4 + 40, "Optimum: " + r.laluanOptimum, { saiz: 12, warna: "merah", tebal: true, hasil: true });
        o += teks(8, y4 + 58, "(" + (r.kriteria === "k" ? "RM" + r.optimum : r.optimum + " " + UNIT[r.kriteria]) + ")", { saiz: 12, warna: "merah", tebal: true, hasil: true });
        return h.svg(y4 + 68, o, "Rajah rangkaian berpemberat dari " + c.mula + " ke " + c.akhir + "; laluan " + r.laluan + " dipilih dengan kriteria " + NAMA_K[r.kriteria]);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
