function staggeredCase(string) {
  let result = swap(string.split(""), [], "UP", 0);

  return result.join("");
}

function swap(stringSpl, resulArr, direction, iterator) {
  if (stringSpl.length === resulArr.length && iterator > 0) return resulArr;

  let currentChar = stringSpl[iterator];

  if (currentChar === " " || !/[a-zA-Z]/.test(currentChar)) {
    resulArr.push(currentChar);
    return swap(stringSpl, resulArr, direction, iterator + 1);
  }

  if (direction === "UP") {
    resulArr.push(currentChar.toUpperCase());
  } else {
    resulArr.push(currentChar.toLowerCase());
  }
  let nextDirection = direction === "UP" ? "DOWN" : "UP";
  return swap(stringSpl, resulArr, nextDirection, iterator + 1);
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

//suggested
// function staggeredCase(string) {
//   let needUpper = true;

//   return string
//     .split("")
//     .map(char => {
//       char = char.toLowerCase();
//       if (char >= 'a' && char <= 'z') {
//         if (needUpper) {
//           needUpper = false;
//           return char.toUpperCase();
//         } else {
//           needUpper = true;
//           return char.toLowerCase();
//         }
//       } else {
//         return char;
//       }
//     })
//     .join("");
// }
