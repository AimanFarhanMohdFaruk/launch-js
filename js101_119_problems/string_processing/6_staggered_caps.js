function staggeredCase(string) {
  let stringSpl = string.split("");
  let initDirection = string[0] === string[0].toUpperCase() ? "DOWN" : "UP";
  let result = swap(stringSpl, [], initDirection, 0, true);
  return result.join("");
}

function swap(stringSpl, resulArr, initDirection, iterator, isNewWord) {
  if (stringSpl.length === resulArr.length && iterator > 0) return resulArr;

  let char = stringSpl[iterator];

  if (char === " ") {
    resulArr.push(char);
    return swap(stringSpl, resulArr, initDirection, iterator + 1, true);
  }

  if (isNewWord) {
    resulArr.push(char);
    return swap(stringSpl, resulArr, initDirection, iterator + 1, false);
  }

  if (initDirection === "UP") {
    resulArr.push(char.toUpperCase());
  } else {
    resulArr.push(char.toLowerCase());
  }
  let nextDirection = initDirection === "UP" ? "DOWN" : "UP";
  return swap(stringSpl, resulArr, nextDirection, iterator + 1, false);
}

console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"

// suggested solution
/*
function staggeredCase(string) {
  return string
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}
*/
