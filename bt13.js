function sumArray(arr) {
  return arr.reduce((tong, num) => tong + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
