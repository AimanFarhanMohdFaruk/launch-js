function crunch(string) {
  let result = [];
  let stringLength = string.length;
  for (let i = 0; i < stringLength; i++) {
    if (string[i] === string[i + 1]) continue;

    result.push(string[i]);
  }
  return result.join("");
}
// console.log(crunch("ddaaiillyy ddoouubbllee"));
// console.log(crunch("4444abcabccba")); // "4abcabcba"
// console.log(crunch("ggggggggggggggg")); // "g"
