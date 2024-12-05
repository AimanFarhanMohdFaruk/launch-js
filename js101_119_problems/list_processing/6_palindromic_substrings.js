const substringsFunc = require("./5_all_substrings");

function palindromes(string) {
  let allSubstrings = substringsFunc.substrings(string);

  return allSubstrings.filter((word) => isPalindrome(word));
}

function isPalindrome(string) {
  if (string.length < 2) return false;

  let leftIdx = 0;
  let rightIdx = string.length - 1;

  while (leftIdx <= rightIdx) {
    if (string[leftIdx] != string[rightIdx]) {
      return false;
    }

    leftIdx++;
    rightIdx--;
  }

  return true;
}

console.log(palindromes("knitting cassettes"));

// suggested solution
/*
function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}
*/
