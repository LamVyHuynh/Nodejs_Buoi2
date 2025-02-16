function sapXepTangDan(arr) {
  //   a - b bằng âm thì a đứng trước b đứng sau
  //   a - b bằng dương thì b đứng trước a đứng sau
  //   a - b bằng 0 thì a,b giữ nguyên vị trí
  return arr.sort((a, b) => a - b);
}

console.log(sapXepTangDan([3, 1, 4, 2]));
