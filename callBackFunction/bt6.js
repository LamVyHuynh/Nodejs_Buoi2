function mapArray(arr, transform) {
  return arr.map(transform);
}
console.log(mapArray([1, 2, 3], (num) => num * 2)); // [2, 4, 6]
