const helpers = require("../../js_lesson_2/helpers");
let readLine = require("readline-sync");

NUMBERS_COUNT = 6;

let numbers = [];
for (let i = 0; i < NUMBERS_COUNT; i++) {
  helpers.prompt("Please enter a number");
  let answer = Number(readLine.question());
  while (helpers.isInvalidNumber(answer)) {
    helpers.prompt("Please enter a number");
    answer = Number(readLine.question());
  }
  numbers.push(answer);
}

let lastNumber = numbers.pop();

console.log(
  numbers.includes(lastNumber)
    ? `The number ${lastNumber} appears in ${numbers.join(",")}`
    : `The number ${lastNumber} does not appear in ${numbers.join(",")}`
);
