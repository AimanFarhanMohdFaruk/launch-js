// let rlSync = require("readline-sync");
// function prompt(message) {
//   console.log(`=> ${message}`);
// }
// prompt("Enter your first number");
// let firstNumber = Number(rlSync.question());
// prompt("Enter your second number");
// let sescondNumber = Number(rlSync.question("Enter your second number:\n"));

// prompt("Choose an operation:\n 1) Add 2) Substract 3) Multiply 4) Divide");
// let operation = rlSync.question();

// let output;
// // if (operation === "1") {
// //   output = firstNumber + sescondNumber;
// // } else if (operation === "2") {
// //   output = firstNumber - sescondNumber;
// // } else if (operation === "3") {
// //   output = firstNumber * sescondNumber;
// // } else {
// //   output = firstNumber / sescondNumber;
// // }
// switch (operation) {
//   case "1":
//     output = firstNumber + sescondNumber;
//     break;
//   case "2":
//     output = firstNumber - sescondNumber;
//     break;
//   case "3":
//     output = firstNumber * sescondNumber;
//     break;
//   case "4":
//     output = firstNumber * sescondNumber;
//     break;
// }

// console.log(output);

/*
START
SET iterator = 0
SET skip = 1
SET newArray = [];
WHILE ITERATOR < length of array
  PUSH value into newArray
  iterator = iterator + 2

*/
function everyOther(arr) {
  let i = 0;
  const skipFactor = 1;
  let newArray = [];
  while (i < arr.length) {
    newArray.push(arr[i]);
    i = i + 1 + skipFactor;
  }
  return newArray;
}
console.log(everyOther([1, 4, 7, 2, 5])); // => [1,7,5]

/*
START

*/
function merge(arrayOne, arrayTwo) {
  let newlength = arrayOne.length + arrayTwo.length;
  let formattedArray = [];
  let counterOne = 0;
  let counterTwo = 0;

  for (let i = 0; i < newlength; i++) {
    if (i % 2 === 0) {
      formattedArray[i] = arrayOne[counterOne];
      counterOne++;
    } else {
      formattedArray[i] = arrayTwo[counterTwo];
      counterTwo++;
    }
  }

  return formattedArray;
}
console.log(merge([1, 2, 3], [4, 5, 6])); // => [1, 4, 2, 5, 3, 6]
