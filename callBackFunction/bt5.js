function forEachElement(arr, callback) {
  arr.forEach(callback);
}
forEachElement([1, 2, 3], (num) => console.log(num)); // 1, 2, 3
