const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
];
console.log(students);
const highScorers = students.filter((student) => student.score > 80);
console.log(highScorers);
