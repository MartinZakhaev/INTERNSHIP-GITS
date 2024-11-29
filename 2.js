const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function denseRanking(scores, gitsScores) {
  // menghapus skor duplikat kemudian di urutkan dari nilai tertinggi ke terendah
  const uniqueScores = [...new Set(scores)].sort((a, b) => b - a);

  // mencari peringkat menggunakan pencarian biner
  function binarySearch(score) {
    // left merupakan indeks paling kiri dan
    // right merupakan indeks paling kanan
    let left = 0,
      right = uniqueScores.length - 1;
    while (left <= right) {
      // mencari pivot / titik tengah
      const mid = Math.floor((left + right) / 2);

      if (uniqueScores[mid] === score) {
        // jika nilai tengah sama dengan score, maka return
        return mid + 1;
      } else if (uniqueScores[mid] < score) {
        // jika nilai tengah lebih kecil dari score, maka geser ke kiri
        right = mid - 1;
      } else {
        // jika nilai tengah lebih besar dari score, maka geser ke kanan
        left = mid + 1;
      }
    }
    // jika tidak ada nilai yang sama dengan score, maka return indeks terdekat
    return left + 1;
  }

  return gitsScores.map(binarySearch);
}

function getValidInput(question, expectedCount) {
  return new Promise((resolve, _) => {
    rl.question(question, (input) => {
      const values = input.split(" ").map(Number);

      // validasi input jumlah permainan dengan jumlah pemain
      if (values.length === expectedCount) {
        resolve(values);
      } else {
        console.warn(
          `Jumlah elemen tidak sesuai. Harap masukkan ${expectedCount} score.`
        );
        // input ulang
        resolve(getValidInput(question, expectedCount));
      }
    });
  });
}

rl.question("Masukkan jumlah pemain: ", async (playerCount) => {
  // konversi input ke bilangan bulat
  playerCount = parseInt(playerCount);

  // validasi input jumlah pemain dengan jumlah score
  const scores = await getValidInput(
    "Masukkan skor pemain (dipisahkan dengan spasi): ",
    playerCount
  );

  rl.question("Masukkan jumlah permainan GITS: ", async (gitsGames) => {
    gitsGames = parseInt(gitsGames);

    const gitsScores = await getValidInput(
      "Masukkan skor GITS (dipisahkan dengan spasi): ",
      gitsGames
    );

    // dense ranking
    const rankings = denseRanking(scores, gitsScores);
    console.log("Peringkat GITS: " + rankings.join(" "));

    rl.close();
  });
});
