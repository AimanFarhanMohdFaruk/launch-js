/*
Sort Strings by Most Adjacent Consonants

Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Note that for this problem, the letters 'y' and 'w' should be treated as consonants.

Input: array of strings
Output: new array of strings sorted to the highest number of adjacent consonants 

Explicit rules
- if two strings have the same highest number of adjacent consonants, maintain their order in terms of who came first
- adjacent consonants must be next to each other in the same word OR there is a space between two consonants in adjacent words
- y and w are treated as consonants

Implicit rules
- maintain order for words that does not have adjacent consonants



Questions:
1. What is a consonant
- any letter that isn't aeiou
2. how to deal with numbers


Examples
let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']


DS: Array / Object


Algo:
1. Create a countAdjConsonants function that takes in a string and returns an integer representing the number of adjacent consonants found in the string.
  - example "ccaa"
  - 
2. 

*/
let list1 = ["aa", "baa", "ccaa", "dddaa"];
// console.log(sortStringsByConsonants(list1));
function isConsonant(char) {
  return !["a", "e", "i", "o", "u"].includes(char);
}

function countAdjConsonants(string) {
  let count = 0;
  let trimString = string.trim();
  // ("ccaa");
  // starting from the first char, check if its a consonant,
  // if its not, move to the next word that is consonant,
  // if it is, check if its next word is consonant, if it is increase the count.
  // repeat steps 2,3
  let iterator = 0;
  while (iterator < trimString.length) {
    if (isConsonant(trimString[iterator])) {
      let currentCount = 0;
      let innerIterator = 1;
      while (
        iterator + innerIterator < trimString.length &&
        isConsonant(trimString[iterator + innerIterator])
      ) {
        if (currentCount === 0) {
          currentCount = 1;
        }
        currentCount++;
        innerIterator++;
      }
      count += currentCount;
      iterator += innerIterator;
    } else {
      iterator++;
    }
  }
  return count;
}

function sortStringsByConsonants(list) {
  let listCopy = list.slice();

  listCopy.sort((a, b) => {
    return countAdjConsonants(b) - countAdjConsonants(a);
  });

  return listCopy;
}

let list = ["aa", "baa", "ccaa", "dddaa"];
console.log(sortStringsByConsonants(list));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ["can can", "toucan", "batman", "salt pan"];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ["bar", "car", "far", "jar"];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ["day", "week", "month", "year"];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']
