function substrings(string) {
  // ds: arrays
  // algo:
  // set currentPosition = first character
  // for every character,
  // set endPos to current character's position + 1
  // take the substring, from string(currentPositon, endPos)
  // increase the endPos
  let words = string.split(" ");
  let result = [];

  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      let currentCharPos = i;
      let endPos = currentCharPos + 1;
      for (let i = currentCharPos; i < word.length; i++) {
        result.push(word.substring(currentCharPos, endPos));
        endPos++;
      }
    }
  });

  return result;
}

// console.log(substrings("abcde sdfsd"));

// returns
[
  "a",
  "ab",
  "abc",
  "abcd",
  "abcde",
  "b",
  "bc",
  "bcd",
  "bcde",
  "c",
  "cd",
  "cde",
  "d",
  "de",
  "e",
];

module.exports = {
  substrings,
};
