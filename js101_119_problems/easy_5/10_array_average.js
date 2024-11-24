function average(numArr) {
  let sum = 0;
  numArr.forEach((number) => (sum += number));

  return parseInt(sum / numArr.length, 0);
}

console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40
