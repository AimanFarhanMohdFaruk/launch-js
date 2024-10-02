const helpers = require("./helpers");
const readLine = require("readline-sync");

const CHOICES = ["rock", "paper", "scissors"];

helpers.prompt(`Choose one: ${CHOICES.join(", ")}`);
let choice = readLine.question();

while (!CHOICES.includes(choice)) {
  prompt("That's not a valid choice");
  choice = readLine.question();
}

const computerChoiceIndex = Math.floor(Math.random() * CHOICES.length);

let computerChoice = CHOICES[computerChoiceIndex];

helpers.prompt(`You chose ${choice}, the computer chose ${computerChoice}`);

if (
  (choice === "rock" && computerChoice === "scissors") ||
  (choice === "paper" && computerChoice === "rock") ||
  (choice === "scissors" && computerChoice === "paper")
) {
  helpers.prompt("You win!");
} else if (
  (choice === "rock" && computerChoice === "paper") ||
  (choice === "paper" && computerChoice === "scissors") ||
  (choice === "scissors" && computerChoice === "rock")
) {
  helpers.prompt("Computer wins!");
} else {
  helpers.prompt("It's a tie");
}
