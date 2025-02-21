function checkArray(arr, cbIfEmpty, cbIfNotEmpty) {
  if (arr.length === 0) {
    cbIfEmpty();
  } else {
    cbIfNotEmpty();
  }
}
checkArray(
  [],
  () => console.log("Array is empty"),
  () => console.log("Array is not empty")
);
