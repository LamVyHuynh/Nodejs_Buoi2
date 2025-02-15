const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function giaiThua(n) {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  return gt;
}

rl.question("Nhập số n vào: ", (n) => {
  n = parseInt(n);
  let kq = giaiThua(n);
  console.log(`Giai thừa của sô ${n} là ${kq}`);
  rl.close();
  4;
});
