const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
