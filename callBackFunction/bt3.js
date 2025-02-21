function filterArray(arr, condition) {
  return arr.filter(condition);
}
console.log(filterArray([1, 2, 3, 4], (num) => num % 2 === 0)); // [2, 4]
