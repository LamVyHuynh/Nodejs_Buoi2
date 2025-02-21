const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
];
console.log(students);
const grouped = students.reduce(
  (result, student) => {
    student.passed ? result.passed.push(student) : result.failed.push(student);
    return result;
  },
  { passed: [], failed: [] }
);
console.log(grouped);
