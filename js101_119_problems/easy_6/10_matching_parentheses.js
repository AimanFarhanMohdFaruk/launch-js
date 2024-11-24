function isBalanced(string) {
  // input string
  // output boolean
  // rules
  // return true if all parantheses in the string are properly balanced.
  // what is balanced?
  // paranthese must occur in matching pairs.
  // implicit
  // no parentheses, return true.
  // array / object

  // algo
  // set newArr = filter characters if they match either "(", or ")"
  // if length is odd, return false.
  // if length is even
  // calculate parens starting with "(" then ")", if less than zero return false.

  let newArr = string.split("").filter((char) => ["(", ")"].includes(char));

  if (newArr.length === 0) return true;
  if (newArr.length % 2 !== 0) return false;

  let iterator = 0;
  let parens = 0;

  while (iterator < newArr.length) {
    if (newArr[iterator] === "(") {
      parens += 1;
    } else {
      parens -= 1;
    }
    if (parens < 0) return false;
    iterator++;
  }

  return parens === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced("hello)(") === false);
