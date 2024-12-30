let board = ["X", "X", 3, 4, 5, 6, 7, 8, 9];
const WINNING_COMBOS = [
  [1, 2, 3],
  // [4, 5, 6],
  // [7, 8, 9],
  // [1, 4, 7],
  // [2, 5, 8],
  // [3, 6, 9],
  // [1, 5, 9],
  // [3, 5, 7],
];

// input single dimension array
// output, index, if any.

// algo

/* 
iterate over winning combos.

for each winning combo,
  let count;
  loop over each value
    for each position in board[i - 1], if the mark is the player mark, increase the count.

  if count === 2 {

  }

*/

function detectDefensivePosition(board) {
  for (let i = 0; i < WINNING_COMBOS.length; i++) {
    let [sq1, sq2, sq3] = WINNING_COMBOS[i];

    if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] !== PLAYER_MARKER
    ) {
      return sq3;
    } else if (
      board[sq1] !== PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
      return sq1;
    } else if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] !== PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
      return sq2;
    }
  }

  return null;
}
console.log(computerDefense(board));
