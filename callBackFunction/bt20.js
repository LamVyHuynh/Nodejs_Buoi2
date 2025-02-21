function createCallback(condition) {
  if (condition === "success") {
    return () => console.log("Success callback executed");
  } else {
    return () => console.log("Failure callback executed");
  }
}
const cb = createCallback("success");
cb();
