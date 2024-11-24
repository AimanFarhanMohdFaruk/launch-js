function doubleConsonants(string) {
  return string
    .split("")
    .map((char) => (isConsonant(char) ? char + char : char))
    .join("");
}

function isConsonant(char) {
  return !["a", "e", "i", "o", "u", "-", " "].includes(char) && !Number(char);
}

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""
