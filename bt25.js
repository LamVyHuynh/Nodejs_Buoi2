function xoaTrungNhau(arr) {
  return [...new Set(arr)];
}

console.log(xoaTrungNhau([1, 2, 3, 4, 4]));
