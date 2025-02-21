const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
];
console.log(students);
students.forEach((student) => {
  student.passed = student.score >= 80;
});
console.log(students);
