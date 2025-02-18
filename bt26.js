function groupBy(arr, callback) {
  // Ban đầu result được khởi tạo với giá trị {rỗng}
  //  dùng reduce chạy dài qua các phần tử trong array
  // thấy 6.1 làm tròn dưới(Math.floor(number))
  // result chưa có 6 tạo ra {6: []}
  // đẩy giá trị 6.1 vào bên trong result = {6: [6.1]}
  //   số còn lại làm tương tự
  return arr.reduce((result, items) => {
    const key = callback(items);
    if (!result[key]) result[key] = [];
    result[key].push(items);
    return result;
  }, {});
}
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
