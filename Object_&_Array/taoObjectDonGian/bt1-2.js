const person = {
  name: "John",
  age: 30,
  job: "Developer",
};
person.address = "New York";
delete person.job;
console.log(person);
