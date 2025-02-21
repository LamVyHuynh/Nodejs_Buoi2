function asyncSum(arr, callback) {
  setTimeout(() => {
    const sum = arr.reduce((a, b) => a + b, 0);
    callback(sum);
  }, 1000);
}
asyncSum([1, 2, 3], (result) => console.log(result));
