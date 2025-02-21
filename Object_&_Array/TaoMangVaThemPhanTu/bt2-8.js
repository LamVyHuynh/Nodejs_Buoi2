const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
