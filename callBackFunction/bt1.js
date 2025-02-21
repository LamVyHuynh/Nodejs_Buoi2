function executeCallback(callback) {
  callback();
}
executeCallback(() => console.log("Callback executed!"));
