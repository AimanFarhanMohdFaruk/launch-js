// Important note, primitive values are passed by values. You cannot mutate it in a func.
// Objects on the other hand are passed by reference. Mutations can occur through a func.

// names is an object array passed to add names.
// running destructive methods such as push causes an update
// to the original object used in the arguments.
function addNames(arr, name) {
  arr.push(name);
}

let names = ["bob", "kim"];
addNames(names, "jim");
console.log(names); // => [ 'bob', 'kim', 'jim' ]

// example of how re-assignment causes the breaking linkage to the original reference
function addName(arr) {
  let reference = arr;
  arr = ["bob", "kim"];
  console.log(arr === reference); // false
}
let names1 = ["bob", "kim"];
addName(names1, "jim");
console.log(names1); // => [ 'bob', 'kim', ]

// The function below causes a mutation to the original array since
// objects are passed by reference.
// IMPORTANT NOTE. Do not get confused with the re-assignment of the variable arr.
// Despite making the variable `arr` point to the existing arr.push(name), technically making arr point to a new arr.
// it still made the mutation when it calls the method .push to the existing array.
function addNames2(arr, name) {
  arr = arr.push(name);
  // running arr.push(name) here would return an error because .push returns the new length
  // when you run arr.push(name) after assigning it to the value returned by the .push
  // method, you will get a arr.push is not a function error.
}
let names2 = ["bob", "kim"];
addNames2(names2, "jim");
console.log(names2); // => [ 'bob', 'kim', 'jim' ]

// Return values for objects and primitives act similarly, when you return an object
// you return the reference to the value.
function bar(array) {
  return array;
}
let array = [1, 2, 3];
let newArray = bar(array);
console.log(array === newArray); // true (they are same object)
array.push(4);
console.log(array); // [ 1, 2, 3, 4 ]
console.log(newArray);

// RE-ASSIGNMENTS behaviour

// the function receives myWord which is a primitive value.
// In the function, it has no way of updating the outer scoped myWord variable because its receiving a copy
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}
let myWord = "Hello";
changeMyWord(myWord);
console.log(myWord); // "Hello"

// unlike above, this time, the function RETURNS a value.
// that value is then used in line 72 to reassign the variable myWord 2 with the new value
function changeMyWord2(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}
let myWord2 = "Hello";
myWord2 = changeMyWord2(myWord2);
console.log(myWord2); // "HELLO"

// Similar to above but includes a new variable which uses myWord3 in the func
// since the function returns a value, the myOtherWord variable now equals to
// "HELLO"
function changeMyWord33(word) {
  word = word.toUpperCase();
  return word;
}
let myWord3 = "Hello";
let myOtherWord = changeMyWord33(myWord3);
console.log(myWord3);
console.log(myOtherWord);

// Here, the variable myWords will cause changeMyWords to receive a reference.
// it then mutates it on line 90
function changeMyWords(words) {
  words[0] = "Hi";
}
let myWords = ["Hello", "Goodbye"];
changeMyWords(myWords);
console.log(myWords);

// IMPORTANT, here, it doesn't mutate the original array.
// BECAUSE, it re-assigns the initial variable words to a new value.
// this breaks the link to the original array.
function changeMyWords2(words) {
  console.log(words);
  words = ["Hi", "Goodbye"];
}

let myWords2 = ["Hello", "Goodbye"];
changeMyWords2(myWords2);
console.log(myWords2);
