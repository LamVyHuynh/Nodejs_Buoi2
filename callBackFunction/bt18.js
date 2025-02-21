function processIfGreaterThan(arr, threshold, callback) {
  arr.forEach((num) => {
    if (num > threshold) callback(num);
  });
}
processIfGreaterThan([2, 7, 4, 9], 5, (num) => console.log(num));
