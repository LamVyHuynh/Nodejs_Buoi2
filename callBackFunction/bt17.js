function processElements(arr, callback) {
  arr.forEach((el) => console.log(callback(el)));
}
processElements([1, 2, 3], (num) => num * num);
