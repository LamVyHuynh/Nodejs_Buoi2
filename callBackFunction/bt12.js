function delayedCallback(callback) {
  setTimeout(callback, 2000);
}
delayedCallback(() => console.log("Executed after 2 seconds"));
