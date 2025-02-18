function fibonacii(num) {
  const isPerfectSpare = (x) => Math.sqrt(x) % 1 === 0;
  return isPerfectSpare(5 * num ** 2 + 4) || isPerfectSpare(5 * num ** 2 - 4);
}
console.log(fibonacii(10));
