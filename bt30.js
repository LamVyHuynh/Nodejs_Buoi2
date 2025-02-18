function findClosest(arr, target) {
  return arr.reduce((closest, num) =>
    Math.abs(num - target) < Math.abs(closest - target) ? num : closest
  );
}
console.log(findClosest([1, 5, 9, 15], 10));
