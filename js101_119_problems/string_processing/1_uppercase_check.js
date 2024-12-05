function isUppercase(string) {
  let stringSplit = string.split("").filter((char) => char !== "");

  for (const char of stringSplit) {
    if (char !== char.toUpperCase()) return false;
  }
  return true;
}

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true

// suggested solution:

/*

function isUppercase(string) {
  return string.toUpperCase() === string;
}
  
*/
