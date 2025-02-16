function processArray(arr, callback) {
  return arr.map(callback);
}

console.log(processArray([1, 2, 3], (num) => num * 2));
