// Problem
// Examples / Test cases
// Data Structure
// Algorithm
// Code

// Example question for returning a string but convert the palindromes into uppercase letters
// input: string
// output: string (not the same object)
// rules:
//      Explicit requirements:
//        - every palindrome in the string must be converted to
//          uppercase. (Reminder: a palindrome is a word that reads
//          the same forwards and backward).
//        - Palindromes are case sensitive ("Dad" is not a palindrome, but
//          "dad" is.)

//      Implicit requirements:
//        - if the string is an empty string, the result should be an empty string

// Exercise 1:
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes and 2 or more characters long.
// Consider palindrome words case sensitive.

// input: string
// ouput: array of strings
// rules:
//    Explicit requirements:
//        - palindrome must be at least 2 characters long
//        - palindrome words must be case sensitive "Bcb" is not a palindrome
//    Implicit:
//        - return an empty array if there are none or empty string is given as the input

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

// Data structure: array

// Algorithm:
// v1
// init a result array
// init a substring array and have it contain all substrings
// check palindrome, push into result
// return result

// the above is incomplete, it does not detail the `hard` parts of the algo
// which is the important bit, for example, the substrings part is the complex bit.

// algo for returning substrings
// example string: 'halo'

/*
for each starting index from 0 through the next to last index position
  for each substring length from 2 until there are no substrings of that length
    extract the substring of the indicated length starting at the indicated index position
  end of inner loop
end of outer loop
*/

// - create an empty array called `result` that will contain all required substrings
// - create a `startingIndex` variable (value `0`) for the starting index of a substring
// - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//   - create a `numChars` variable (value `2`) for the length of a substring
//   - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//     - extract a substring of length `numChars` from `string` starting at `startingIndex`
//     - append the extracted substring to the `result` array
//     - increment the `numChars` variable by `1`
//   - end the inner loop
//   - increment the `startingIndex` variable by `1`
// - end the outer loop
// - return the `result` array

// START
//
//   /* Given a string named `string` */
//
//   SET result = []
//   SET startingIndex = 0
//
//   WHILE startingIndex <= length of string - 2
//     SET numChars = 2
//     WHILE numChars <= length of string - startingIndex
//       SET substring = numChars characters from string starting at index startingIndex
//       append substring to result array
//       SET numChars = numChars + 1
//
//     SET startingIndex = startingIndex + 1
//
//   RETURN result
//
// END

function substrings(string) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= string.length - 2) {
    let numChars = 2;
    while (numChars <= string.length - startingIndex) {
      let substring = string.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars++;
    }
    startingIndex++;
  }

  return result;
}

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

// Complete PEDAC
// input: a string
// output: an array of substrings
// rules: palindrome words should be case sensitive, meaning "abBA"
//        is not a palindrome

// Algorithm:
//  substrings function
//  =================
//    - create an empty array called `result` that will contain all required substrings
//    - create a `startingIndex` variable (value `0`) for the starting index of a substring
//    - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//      - create a `numChars` variable (value `2`) for the length of a substring
//      - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//        - extract a substring of length `numChars` from `string` starting at `startingIndex`
//        - append the extracted substring to the `result` array
//        - increment the `numChars` variable by `1`
//      - end the inner loop
//      - increment the `startingIndex` variable by `1`
//    - end the outer loop
//    - return the `result` array

//  isPalindrome function
//  =====================
//    - Inside the `isPalindrome` function, check whether the string
//      value is equal to its reversed value.

//  palindromeSubstrings function
//  ============================
//    - declare a `result` variable and initialize it to an empty array
//    - create an array named `substrArray` that will contain all of the
//      substrings of the input string that are at least 2 characters long.
//    - loop through the words in the `substrArray` array.
//      - if the word is a palindrome, append it to the `result` array
//    - return the `result` array

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach((substring) => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}
