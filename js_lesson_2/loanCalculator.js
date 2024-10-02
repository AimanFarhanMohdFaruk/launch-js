const helpers = require("./helpers");
const readLine = require("readline-sync");

helpers.prompt("Enter your loan amount:");
let loanAmount = Number(readLine.question());

while (helpers.isInvalidNumber(loanAmount)) {
  helpers.prompt("Must enter a positive number");
  loanAmount = Number(readLine.question());
}

helpers.prompt("Enter your Annual Percentage Rate(APR): example(3, 4, 5)");
let annualRate = Number(readLine.question()) / 100;
while (helpers.isInvalidNumber(annualRate)) {
  helpers.prompt("Must enter a positive number");
  annualRate = Number(readLine.question());
}
let monthlyRate = annualRate / 12;

helpers.prompt("Enter loan duration in years:");
let durationInYears = Number(readLine.question());
while (helpers.isInvalidNumber(durationInYears)) {
  helpers.prompt("Must enter a positive number");
  durationInYears = Number(readLine.question());
}
let durationInMonths = durationInYears * 12;

let monthlyPayment =
  loanAmount *
  (monthlyRate / (1 - Math.pow(1 + monthlyRate, -durationInMonths)));

console.log(`$${monthlyPayment.toFixed(2)}`);
