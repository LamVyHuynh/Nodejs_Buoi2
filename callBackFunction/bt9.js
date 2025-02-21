function executeCallbacks(cb1, cb2) {
  cb1();
  cb2();
}
executeCallbacks(
  () => console.log("First callback"),
  () => console.log("Second callback")
);
