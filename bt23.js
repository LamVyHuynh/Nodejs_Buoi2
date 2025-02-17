function isSubArray(a1, a2) {
  // phương thức every là để kiểm tra các phần tử có trong mảng thoã mãn 1 điều kiện nào đó
  // includes kiểm tra xem có bao gồm phần tử đó kh
  return a2.every((val) => a1.includes(val));
}
console.log(isSubArray([1, 2, 3, 4, 5, 6], [1, 2, 3]));
// console.log(isSubArray([1, 2, 3, 4], [5, 6, 7]));
