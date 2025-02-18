function getCombinations(arr) {
  const result = [];
  const tachra = (combo, index) => {
    result.push(combo);
    for (let i = index; i < arr.length; i++) {
      tachra([...combo, arr[i]], i + 1);
    }
  };
  tachra([], 0);
  return result;
}

console.log(getCombinations([1, 2, 3]));
