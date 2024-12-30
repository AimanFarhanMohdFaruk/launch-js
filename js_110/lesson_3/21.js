import { prompt } from "../../helpers.js";
import { question } from "readline-sync";

const MAX = 21;
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let deck = [];
let playerTotal = 0;
let dealerTotal = 0;

function buildDeck() {
  deck = [];
  cards.forEach((card) => {
    for (let i = 0; i < 4; i++) {
      deck.push(card);
    }
  });
}

function drawCard(deck) {
  let randomIndex = Math.floor(Math.random() * deck.length);

  return deck.splice(randomIndex, 1);
}

function getCardValue(card) {
  if (["J", "Q", "K"].includes(card)) return parseInt(10);
  if (card === "A") return 11;
  return parseInt(card);
}

function displayScores(playerTotal, dealerTotal) {
  console.log("Player score:", playerTotal);
  console.log("Computer score:", dealerTotal);
}

function playerMove(playerCards, deck) {
  while (true) {
    if (playerTotal > MAX) break;

    prompt("Choose to hit or stay:\n1: hit\n2: stay");
    prompt(`Your cards: ${playerCards}`);
    console.log("Your current total: ", playerTotal);

    let answer = question();
    if (answer === "1") {
      let cardDrawn = drawCard(deck)[0];
      playerCards.push(cardDrawn);
      playerTotal += getCardValue(cardDrawn);
    } else if (answer === "2") {
      break;
    } else {
      prompt("Invalid input");
    }
  }

  return;
}

function dealerMove(dealerCards, deck) {
  while (true) {
    if (dealerTotal > 17) {
      break;
    }
    let cardDrawn = drawCard(deck);
    dealerCards.push(cardDrawn);
    dealerTotal += getCardValue(cardDrawn);
  }
}

function initializeGame(playerCards, dealerCards) {
  for (let i = 0; i < 2; i++) {
    let cardDrawn = drawCard(deck);
    playerCards.push(cardDrawn);
  }

  for (let i = 0; i < 2; i++) {
    let cardDrawn = drawCard(deck);
    dealerCards.push(cardDrawn);
  }
}

function getCardTotal(cards) {
  let total = 0;

  for (const card of cards) {
    total += getCardValue(card[0], cards);
  }

  if (total > MAX) {
    cards
      .filter((card) => card[0] === "A")
      .forEach((_) => {
        if (total > MAX) {
          total -= 10;
        }
      });
  }

  return total;
}

function playGame() {
  while (true) {
    buildDeck();
    let playerCards = [];
    let dealerCards = [];

    initializeGame(playerCards, dealerCards);
    playerTotal = getCardTotal(playerCards);
    dealerTotal = getCardTotal(dealerCards);

    prompt(`You have ${playerCards}`);
    prompt(`Dealer has ${dealerCards[0]} and unknown`);

    playerMove(playerCards, deck);
    dealerMove(dealerCards, deck);

    if (playerTotal > 21) {
      prompt("PLAYER BUSTED!, dealer wins!");
    } else if (dealerTotal > 21) {
      prompt("DEALER BUSTED!, player wins!");
    } else if (playerTotal > dealerTotal) {
      prompt("PLAYER WINS");
    } else {
      prompt("DEALER WINS");
    }
    displayScores(playerTotal, dealerTotal);

    prompt("Type yes to play again");
    let restart = question();

    if (restart.toLowerCase() !== "yes") {
      break;
    }
  }
}

playGame();
