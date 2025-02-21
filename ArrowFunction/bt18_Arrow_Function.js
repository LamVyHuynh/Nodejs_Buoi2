const sum = (n) => (n === 1 ? 1 : n + sum(n - 1));
console.log(sum(5));
