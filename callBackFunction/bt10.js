function allMatch(arr, condition) {
  return arr.every(condition);
}
console.log(allMatch([2, 4, 6], (num) => num % 2 === 0));
console.log(allMatch([2, 3, 6], (num) => num % 2 === 0));
