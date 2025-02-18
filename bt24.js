function getRandomElement(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

console.log(getRandomElement([1, 2, 3, 4, 5, 6]));
