// let rlSync = require("readline-sync");
// function prompt(message) {
//   console.log(`=> ${message}`);
// }
// prompt("What is your name?");
// let name = rlSync.question();

// if (name.includes("!")) {
//   console.log(`HELLO ${name}, why are we screaming!`);
// } else {
//   console.log(`hello ${name}`);
// }

function penultimate(string) {
  let arr = string.split(" ");

  return arr[arr.length - 2];
}
console.log(penultimate("Launch School is great!") === "is"); // logs true

function xor(arg1, arg2) {
  if (arg1 && arg2) return false;
  if (arg1) return true;
  if (arg2) return true;

  return false;

  // recommended
  // if ((value1 && !value2) || (value2 && !value1)) {
  //   return true;
  // }
  // return false;
}
console.log(xor(5, 0) === true); // true
console.log(xor(true, true) === false); // true
console.log(xor(0, false) === false); // true
console.log(xor(0, 0) === false); // true

function oddities(arr) {
  if (arr.length === 0) return [];

  let result = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    result.push(arr[i]);
  }
  return result;
}
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]

function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}
console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
