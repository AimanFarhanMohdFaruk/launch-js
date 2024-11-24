function substrings(string) {
  // ds: arrays
  // algo:
  // set currentPosition = first character
  // for every character,
  // set endPos to current character's position + 1
  // take the substring, from string(currentPositon, endPos)
  // increase the endPos
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let currentCharPos = i;
    let endPos = currentCharPos + 1;
    for (let i = currentCharPos; i < string.length; i++) {
      result.push(string.substring(currentCharPos, endPos));
      endPos++;
    }
  }

  return result;
}

console.log(substrings("abcde"));

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
