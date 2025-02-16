function tinhTB(arr) {
  // hàm callback (tong, num) => tong + num,
  // phương thức reduce dùng để thực hiện nhiều phép tính tích luỹ
  let sum = arr.reduce((tong, num) => tong + num, 0);
  // arr.length là chiều dài của mảng hay các phần tử có trong mảng
  return sum / arr.length;
}
console.log(
  "Trung bình cộng các phần tử trong mảng: ",
  tinhTB([1, 2, 3, 4, 5])
);
