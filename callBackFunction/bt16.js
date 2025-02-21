function sequentialCallbacks(callbacks) {
  callbacks.forEach((cb) => cb());
}
sequentialCallbacks([
  () => console.log("Task 1"),
  () => console.log("Task 2"),
  () => console.log("Task 3"),
]);
