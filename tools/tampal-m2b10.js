/* Tampalan (26 Sep 2026): imbangkan panjang pilihan jawapan dalam sumber/m2b10.js. */
const fs = require("fs");
let s = fs.readFileSync("sumber/m2b10.js", "utf8");
function g(a, b) {
  if (s.split(a).length !== 2) { console.error("GAGAL:", a.slice(0, 60)); process.exit(1); }
  s = s.replace(a, b);
}
g('p:["Condong ke bawah apabila bergerak ke kanan","Condong ke atas apabila bergerak ke kanan","Mengufuk","Mencancang"]',
  'p:["Turun ke kanan","Naik ke kanan","Mendatar sahaja","Mencancang sahaja"]');
g('p:["Tak tertakrif","Sifar","Satu","Negatif satu"]',
  'p:["Tak tertakrif","Sama dengan sifar","Sama dengan satu","Sama dengan negatif satu"]');
g('p:["m = -0.5","m = -3","m = -2","m = -1"]', 'p:["m = -0.5","m = -3.0","m = -2.0","m = -1.5"]');
g('p:["Garis mencancang, kecerunan tak tertakrif","Garis mengufuk, kecerunan sifar","Garis condong, kecerunan positif","Garis condong, kecerunan negatif"]',
  'p:["Mencancang, kecerunan tak tertakrif","Mengufuk, kecerunan bernilai sifar","Condong ke atas, kecerunan positif","Condong ke bawah, kecerunan negatif"]');
g('p:["Tak tertakrif","0","-1","4"]', 'p:["Tak tertakrif","Sama dengan 0","Sama dengan -1","Sama dengan 4"]');
g('p:["Dia membahagi jarak mengufuk dengan jarak mencancang","Dia menolak koordinat dengan urutan yang berbeza","Dia menambah koordinat, bukan menolaknya","Tiada kesilapan, jawapan 2/6 betul"]',
  'p:["Dia membahagi jarak mengufuk dengan mencancang","Dia menolak koordinat dengan urutan berbeza","Dia menambah koordinat, bukan menolaknya","Tiada kesilapan, jawapan 2/6 itu betul"]');
fs.writeFileSync("sumber/m2b10.js", s);
console.log("ok");
