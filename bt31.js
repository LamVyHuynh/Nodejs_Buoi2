function tongChuSo(num) {
  if (num < 10) return num;
  return (num % 10) + tongChuSo(Math.floor(num / 10));
}

console.log(tongChuSo(1234));
