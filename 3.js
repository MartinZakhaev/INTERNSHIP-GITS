const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isBalanced(s) {
  // stack untuk menyimpan bracket pembuka
  let stack = [];

  // mapping pasangan bracket
  const bracketPair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // iterasi setiap char dalam input
  for (let char of s) {
    // masukkan bracket pembuka ke dalam stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      // jika char adalah bracket penutup, pastikan stack tidak kosong dan cocok dengan pembuka terakhir
      if (stack.length === 0 || stack.pop() !== bracketPair[char]) {
        return "NO";
      }
    }
  }

  // stack kosong berarti semua bracket cocok atau seimbang antara pembuka dan penutupnya
  return stack.length === 0 ? "YES" : "NO";
}

rl.question("Masukkan bracket: ", (input) => {
  console.info(isBalanced(input));
  rl.close();
});
