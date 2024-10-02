// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
// }

// let myWord = "Hello";
// changeMyWord(myWord);
// console.log(myWord);

// // returns "Hello"
// // Why? because primitives are pass by value.

// function changeMyWord2(word) {
//   word = word.toUpperCase();
//   return word;
// }

// let myWord2 = "Hello";
// myWord2 = changeMyWord2(myWord2);
// console.log(myWord2);

// // returns HELLO.
// // Why? because it is a re-assigned a value returned by the function

// function changeMyWord3(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord3 = "Hello";
// let myOtherWord = changeMyWord3(myWord3);
// console.log(myWord3);
// console.log(myOtherWord);

// // similar as above.

// function changeMyWords(words) {
//   console.log(words);
//   words[0] = "Hi";
// }

// let myWords = ["Hello", "Goodbye"];
// changeMyWords(myWords);
// console.log(myWords);

// // returns ["Hi", "Goodbye"]
// // Why? Objects are passed by reference, you're passing a pointer to the original object.

function changeMyWords(words) {
  console.log(words);
  words = ["Hi", "Goodbye"];
}

let myWords = ["Hello", "Goodbye"];
changeMyWords(myWords);
console.log(myWords);

//returns ["Hello", "Goodbye"]
// Why?  in line 52,  we reassign the words parameter to a new array.

function logFuncVar() {
  help = "help"; // this is a function scoped global variable

  console.log(help);
}
logFuncVar();

let myVar = [1];

function myFunc(myVar) {
  myVar = [2]; // same as above, although this one, we re-assign the variable myVar to a new array.
}

myFunc();
console.log(myVar); // [1]

let color = "purple";
let colors = ["red", "green", "blue"];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors);
console.log(colors);
