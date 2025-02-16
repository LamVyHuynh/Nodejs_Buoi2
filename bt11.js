function daoChuoi(str) {
  // split: tách từng phần tử trong chuỗi và tách chuỗi thành mảng
  // reverse: đảo chuỗi
  // join: ghép các phần tử mảng thành chuỗi
  return str.split("").reverse().join("");
}

console.log(daoChuoi("hello"));
