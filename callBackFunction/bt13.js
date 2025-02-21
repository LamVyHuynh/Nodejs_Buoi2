function nestedCallbacks(cb1, cb2) {
  cb1(() => cb2());
}
nestedCallbacks(
  (next) => {
    console.log("First task");
    next();
  },
  () => console.log("Second task")
);
