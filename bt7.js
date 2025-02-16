const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

rl.question("Nhập số n: ", (n) => {
  if (isPrime(n) === true) {
    console.log(`${n} là số nguyên tố`);
  } else {
    console.log(`${n} không số nguyên tố`);
  }
  rl.close();
});
