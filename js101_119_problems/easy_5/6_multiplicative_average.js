function multiplicativeAverage(numArr) {
  let sum = 1;
  for (const num of numArr) {
    sum *= num;
  }

  return (sum / numArr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5])); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"

// arr of numberr
// string of decimal fixed to 3 decimals
