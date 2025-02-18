function sumGTLN(arr, n) {
  // ban đầu sẽ tìm xem trong mảnhg có giá trị nào > n không(tức n=5)
  // 1>5 sai
  // 5>5 sai
  // 8>5 đúng
  // 10>5 đúng
  //=> [8,10]
  // sau đó thực hiện tính tổng sum = 0
  // sum = sum + 8
  // sum = sum + 10
  //=> 18
  return arr.filter((num) => num > n).reduce((sum, num) => sum + num, 0);
}
console.log(sumGTLN([1, 5, 8, 10], 5));
