function formatTime(seconds) {
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

console.log(formatTime(3661));
