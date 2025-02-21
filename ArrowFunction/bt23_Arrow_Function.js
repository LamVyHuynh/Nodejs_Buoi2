const isSubArray = (arr, subArr) => subArr.every((val) => arr.includes(val));
console.log(isSubArray([1, 2, 3, 4], [2, 3]));
console.log(isSubArray([1, 2, 3, 4], [5]));
