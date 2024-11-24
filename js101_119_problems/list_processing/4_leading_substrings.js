function leadingSubstrings(string) {
  // input: string
  // output: array of substrings;

  // algo
  // set a result array to an empty array.
  // iterate over the string
  //  push the first character.
  //  then, for every following character, push the character + the previous index value
  let stringSplit = string.split("");
  let result = [];

  for (let i = 0; i < stringSplit.length; i++) {
    if (result.length === 0) {
      result.push(stringSplit[i]);
    } else {
      result.push(`${result[i - 1]}${stringSplit[i]}`);
    }
  }

  return result;
}

function leadingSubstringsWithMap(str) {
  let substr = "";
  return str.split("").map((char) => {
    substr = substr + char;
    return substr;
  });
}

console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// suggested solution
function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}
