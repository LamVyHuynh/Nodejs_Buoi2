function findElement(arr, condition) {
  return arr.find(condition);
}
console.log(findElement([1, 3, 5, 8], (num) => num % 2 === 0));
