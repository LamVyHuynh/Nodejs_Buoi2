function countPrimes(arr) {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return arr.filter(isPrime).length;
}
console.log(countPrimes([1, 2, 3, 4, 5]));
