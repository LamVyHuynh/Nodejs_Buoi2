function chuoiDoiXung(str) {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}
// console.log(chuoiDoiXung("madam"));
console.log(chuoiDoiXung("hello"));
