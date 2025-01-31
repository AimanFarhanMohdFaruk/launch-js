function sumOfSums(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result.push(arr[i]);
    } else {
      result.push(arr[i] + result[i - 1]);
    }
  }

  return result.reduce((acc, val) => acc + val, 0);
}

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
