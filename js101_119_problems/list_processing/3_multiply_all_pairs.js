function multiplyAllPairs(arr1, arr2) {
  let newArr = [];

  for (const number of arr1) {
    for (const multiple of arr2) {
      newArr.push(number * multiple);
    }
  }

  return newArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
