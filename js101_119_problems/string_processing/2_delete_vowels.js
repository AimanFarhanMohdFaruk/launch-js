const VOWELS = ["a", "e", "i", "o", "u"];

function removeVowels(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = deleteVowels(arr[i]);
  }

  return arr;
}

function deleteVowels(word) {
  for (let i = 0; i < word.length; i++) {
    if (VOWELS.includes(word[i].toLowerCase())) {
      word = word.replaceAll(word[i], "");
    }
  }
  return word;
}

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]

// solution I like
/*
const VOWELS = "aeiouAEIOU";

function removeVowels(words) {
  return words.map((word) => {
    return word
      .split("")
      .filter((char) => !VOWELS.includes(char))
      .join("");
  });
}
*/
