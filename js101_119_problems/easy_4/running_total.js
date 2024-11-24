function runningTotal(numArray) {
  if (numArray.length === 0) return [];

  let runningTotals = [];
  for (let i = 0; i < numArray.length; i++) {
    if (i === 0) {
      runningTotals.push(numArray[i]);
    } else {
      let total = runningTotals[i - 1] + numArray[i];

      runningTotals.push(total);
    }
  }
  return runningTotals;
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []

// some solutions

function runningTotal(array) {
  let total = 0;
  return array.map((num) => (total += num));
}

function runningTotal(array) {
  let resultArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    resultArray.push((sum += array[idx]));
  }

  return resultArray;
}
