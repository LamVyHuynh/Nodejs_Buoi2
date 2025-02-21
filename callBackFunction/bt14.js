function processValue(value, callback) {
  if (value < 0) {
    callback("Error: Value cannot be negative", null);
  } else {
    callback(null, value * 2);
  }
}
processValue(-1, (err, result) => {
  if (err) console.log(err);
  else console.log(result);
});
