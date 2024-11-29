// kode program ini dijalankan menggunakan node js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateA000124(n) {
  // rumus deret A000124: (n * (n + 1)) / 2 + 1
  return Array.from({ length: n }, (_, i) => (i * (i + 1)) / 2 + 1).join("-");
}

function askForInput() {
  rl.question(
    "Masukkan jumlah elemen deret A000124 (bilangan bulat positif): ",
    (input) => {
      const n = Number(input);
      // validasi input
      Number.isInteger(n) && n > 0
        ? (console.info(
            `Output untuk input ${n} terhadap rumus A000124 adalah: ${generateA000124(
              n
            )}`
          ),
          rl.close())
        : (console.warn("Masukkan angka positif berupa bilangan bulat."),
          askForInput());
    }
  );
}

askForInput();
