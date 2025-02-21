function conditionalCallback(value, condition, callback) {
  if (condition(value)) {
    callback(value);
  }
}
conditionalCallback(
  10,
  (x) => x > 5,
  (x) => console.log(`${x} is greater than 5`)
); // "10 is greater than 5"
