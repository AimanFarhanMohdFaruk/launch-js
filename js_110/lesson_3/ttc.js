/* Display the initial empty 3x3 board.
Ask the user to mark a square.
Computer marks a square.
Display the updated board state.
If it's a winning board, display the winner.
If the board is full, display tie.
If neither player won and the board is not full, go to #2
Play again?
If yes, go to #1
Goodbye! */

import { prompt } from "../../helpers.js";
import { question } from "readline-sync";
const INITIAL_MARKER = " ";
const POSITION_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const PLAYER_MARKER = "X";
const COMPUTER_MARKER = "O";

const WINNING_COMBOS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function displayBoard(board) {
  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = square;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(
    (key) =>
      board[key] === INITIAL_MARKER || POSITION_NUMBERS.includes(board[key])
  );
}

function playerMove(board) {
  let square;

  while (true) {
    let emptyBoard = emptySquares(board);
    prompt(
      `Choose a square ${emptyBoard
        .slice(0, emptyBoard.length - 1)
        .join(", ")} or ${emptyBoard[emptyBoard.length - 1]}:`
    );
    square = question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that is not a valid choice.");
  }

  board[square] = PLAYER_MARKER;
}

function detectDefensivePosition(board) {
  let atRisk = null;
  for (let i = 0; i < WINNING_COMBOS.length; i++) {
    let [sq1, sq2, sq3] = WINNING_COMBOS[i];
    if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] !== PLAYER_MARKER
    ) {
      atRisk = board[sq3] !== COMPUTER_MARKER ? sq3 : null;
    } else if (
      board[sq1] !== PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
      atRisk = board[sq1] !== COMPUTER_MARKER ? sq1 : null;
    } else if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] !== PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
      atRisk = board[sq2] !== COMPUTER_MARKER ? sq2 : null;
    }
  }

  return atRisk;
}

function detectOffensivePosition(board) {
  let offensivePosition = null;
  for (let i = 0; i < WINNING_COMBOS.length; i++) {
    let [sq1, sq2, sq3] = WINNING_COMBOS[i];
    if (
      board[sq3] !== PLAYER_MARKER &&
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER
    ) {
      offensivePosition = board[sq3] !== COMPUTER_MARKER ? sq3 : null;
    } else if (
      board[sq1] !== PLAYER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      offensivePosition = board[sq1] !== COMPUTER_MARKER ? sq1 : null;
    } else if (
      board[sq2] !== PLAYER_MARKER &&
      board[sq1] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      offensivePosition = board[sq2] !== COMPUTER_MARKER ? sq2 : null;
    }
  }

  return offensivePosition;
}

function computerMove(board) {
  let offensivePosition = detectOffensivePosition(board);
  let defensivePosition = detectDefensivePosition(board);

  if (offensivePosition !== null) {
    return (board[offensivePosition] = COMPUTER_MARKER);
  }

  if (defensivePosition !== null) {
    return (board[defensivePosition] = COMPUTER_MARKER);
  }

  let randomPosition = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomPosition];
  return (board[square] = COMPUTER_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let i = 0; i < WINNING_COMBOS.length; i++) {
    let [sq1, sq2, sq3] = WINNING_COMBOS[i];

    if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

function winnerExists(board) {
  return !!detectWinner(board);
}

function alternatePlayer(player) {
  if (player === PLAYER_MARKER) {
    return COMPUTER_MARKER;
  }

  return PLAYER_MARKER;
}

function makeMove(board, player) {
  if (player === PLAYER_MARKER) {
    return playerMove(board);
  }

  return computerMove(board);
}

function playGame(playerWinCount = 0, computerWinCount = 0) {
  let board = initializeBoard();
  displayBoard(board);

  let isPlaying = true;
  let currentPlayer = Math.round(Math.random())
    ? PLAYER_MARKER
    : COMPUTER_MARKER;

  currentPlayer === PLAYER_MARKER
    ? prompt("You move first!")
    : prompt("Computer moves first");

  while (isPlaying) {
    makeMove(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    displayBoard(board);

    if (winnerExists(board)) {
      let winner = detectWinner(board);
      winner.toLowerCase() === "player" ? playerWinCount++ : computerWinCount++;

      prompt(`${winner} won!`);
      isPlaying = false;
    } else if (boardFull(board)) {
      prompt("It's a tie!");
      isPlaying = false;
    }
  }
  prompt(`Player has won: ${playerWinCount} times`);
  prompt(`Computer has won: ${computerWinCount} times`);
  prompt(`Another game? Type yes or no`);

  let restart = question().trim().toLowerCase() === "yes";
  if (restart) {
    playGame(playerWinCount, computerWinCount);
  }
}

playGame();
