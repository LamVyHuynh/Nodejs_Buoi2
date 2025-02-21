function sortArray(arr, compare) {
  return arr.sort(compare);
}
console.log(sortArray([3, 1, 4, 2], (a, b) => a - b)); // [1, 2, 3, 4]
