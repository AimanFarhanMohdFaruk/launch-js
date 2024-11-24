function digitList(number) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let result = [];

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    result.unshift(DIGITS[remainder]);
  } while (number > 0);

  return result;
}

function digitList2(number) {
  return String(number)
    .split("")
    .map((value) => parseInt(value), 10);
}

console.log(digitList2(12345)); // [1, 2, 3, 4, 5]
console.log(digitList2(7)); // [7]
console.log(digitList2(375290)); // [3, 7, 5, 2, 9, 0]
console.log(digitList2(444)); // [4, 4, 4]
