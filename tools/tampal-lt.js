/* Tampalan (26 Sep 2026): tanda < dan > dalam teks soalan Bab 8 ditulis sebagai entiti HTML. */
const fs = require("fs");
let n = 0;
const s = fs.readFileSync("sumber/m3b8.js", "utf8").split("\n").map(l => {
  if (!/^\s*(\{j:|bos:\{j:)/.test(l)) return l;
  return l.replace(/"((?:[^"\\]|\\.)*)"/g, (m, i) => {
    const o = i.replace(/ <= /g, " &le; ").replace(/ >= /g, " &ge; ").replace(/ < /g, " &lt; ").replace(/ > /g, " &gt; ");
    if (o !== i) n++;
    return '"' + o + '"';
  });
}).join("\n");
fs.writeFileSync("sumber/m3b8.js", s);
console.log(n);
