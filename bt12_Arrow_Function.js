const isPalindrome = (str) => {
  const reverse = str.split("").reverse().join("");
  return str === reverse;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));
