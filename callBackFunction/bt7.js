function recursiveProcess(arr, callback, index = 0) {
  if (index < arr.length) {
    callback(arr[index]);
    recursiveProcess(arr, callback, index + 1);
  }
}
recursiveProcess([1, 2, 3], (num) => console.log(num * 2)); // 2, 4, 6
