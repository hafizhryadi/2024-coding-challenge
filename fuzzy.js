// tolong install node.js terlebih dahulu
// gunakan "node fuzzy.js" di terminal untuk menjalankan program

// Mengimpor modul readline untuk input user
const readline = require("readline");

// Membuat antarmuka untuk input data dari user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk menghitung nilai linear keanggotaan dengan batas atas 1.0 dan batas bawah 0.0
const fuzzyMembership = (value, a, b) =>
  value <= a ? 0.0 : value >= b ? 1.0 : (value - a) / (b - a);

// Fungsi untuk menenetukan aksi ac dalam mode auto
function autoModeAC(degree) {
  const low = fuzzyMembership(degree, 0, 30); // batas rentang anggota
  const medium = fuzzyMembership(degree, 20, 70);
  const high = fuzzyMembership(degree, 50, 100);

  console.log(`Suhu ruangan: ${degree.toFixed(2)}`);
  console.log(`Derajat keanggotaan (Low): ${low.toFixed(2)}`);
  console.log(`Derajat keanggotaan (Medium): ${medium.toFixed(2)}`);
  console.log(`Derajat keanggotaan (High): ${high.toFixed(2)}`);

  const statusAC =
    high > 0.5
      ? "Status AC: Suhu AC diatur ke 18 derajat Celcius\n"
      : medium > 0.5
      ? "Status AC: Suhu AC diatur ke 23 derajat celcius\n"
      : "Status AC: AC dalam posisi menutup\n";
  console.log(statusAC);
}

// Fungsi utama untuk meminta input pengguna
rl.question("Masukkan suhu ruang (0-45): ", (input) => {
  const suhuRuang = parseFloat(input);

  // cek input hanya dari 0 - 45
  if (!isNaN(suhuRuang) && suhuRuang >= 0 && suhuRuang <= 100) {
    // output
    autoModeAC(suhuRuang);
  } else {
    console.log("Input tidak valid. Silakan masukkan angka antara 0 dan 45.");
  }
  rl.close(); // Menutup antarmuka readline setelah selesai
});
