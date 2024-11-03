// Using concat to add elements without mutating
let array = [1, 2, 3];
let concatArray = array.concat(42, "abc");
console.log(concatArray); // [1, 2, 3, 42, 'abc']
console.log(array); // [1, 2, 3]

// 3.
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function (row) {
  row.forEach(function (value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});

// 4.
let myArray2 = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
let mutatedMyArray2 = myArray2.map(function (value) {
  if (value % 2 === 0) {
    return "even";
  }
  if (value % 2 === 1) {
    return "odd";
  }
});
console.log(mutatedMyArray2);

// 5.
let things = [1, "a", "1", 3, NaN, 3.1415, -4, null, false];

const findIntegers = (things) => {
  let filteredArray = [];

  things.forEach(function (value) {
    if (Number.isInteger(value)) {
      filteredArray.push(value);
    }
  });

  return filteredArray;
};

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

// 6.
let arr = ["a", "abcd", "abcde", "abc", "ab"];
const oddLengths = (arr) => {
  let lengthArray = arr.map((value) => value.length);

  let oddLengths = lengthArray.filter((value) => value % 2 === 1);

  return oddLengths;
};
console.log(oddLengths(arr)); // => [1, 5, 3]

// 7.
let arrayA = [3, 5, 7];
const sumOfSquares = (numbers) => {
  return numbers.reduce((accumalator, number) => {
    return accumalator + number * number;
  }, 0);
};
console.log(sumOfSquares(arrayA)); // => 83

// 8.
let arrB = ["a", "abcd", "abcde", "abc", "ab"];
const oddLengths2 = (strArr) => {
  return strArr.reduce((filterNumbersArray, string) => {
    let length = string.length;
    if (length % 2 === 1) {
      filterNumbersArray.push(length);
    }

    return filterNumbersArray;
  });
};
console.log(oddLengths(arrB)); // => [1, 5, 3]

// 10.
let arr3 = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12],
];
arr3.forEach((arr) => {
  if (arr.includes(6)) {
    let indexTochange = arr.indexOf(6);
    arr[indexTochange] = 606;
  }
});
console.log(arr3);
