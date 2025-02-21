const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
];
console.log(students);
const entries = [
  ["name", "Alice"],
  ["age", 25],
  ["job", "Engineer"],
];
const obj = Object.fromEntries(entries);
console.log(obj);
