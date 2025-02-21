function calculate(a, b, operation) {
  return operation(a, b);
}
console.log(calculate(5, 3, (x, y) => x + y)); // 8
console.log(calculate(5, 3, (x, y) => x * y)); // 15
