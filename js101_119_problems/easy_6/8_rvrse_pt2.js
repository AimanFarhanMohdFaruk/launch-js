const WORD_LENGTH_TO_REVERSE = 5;
function reverseWords(string) {
  let stringSplit = string.split(" ");

  for (let i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length >= WORD_LENGTH_TO_REVERSE) {
      stringSplit[i] = stringSplit[i].split("").reverse().join("");
    }
  }

  return stringSplit.join(" ");
}

console.log(reverseWords("Professional")); // "lanoisseforP"
console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWords("Launch School")); // "hcnuaL loohcS"
