// Q1 replace practice
let advice =
  "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replace("important", "urgent"));
console.log(advice);

let object = ["a", "b", "c"];
let primitive = 1;

// Q2
/*
The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.
*/

let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

numbers = [1, 2, 3, 4, 5];
sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5] [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers);

// Q3
// Given a number and an array, determine whether the number is included in the array.
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
console.log(numbers.includes(8));

// Q4 show two different ways to put the expected "Four score and " in front of it.
let famousWords = "seven years ago...";
let completedFamousWords = "Four scores and ".concat(famousWords);
console.log(completedFamousWords);

// Q6 ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let nested = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
function breakArray(array) {
  let unnestedArray = [];
  for (const value of array) {
    if (Array.isArray(value)) {
      for (const string of value) {
        unnestedArray.push(string);
      }
    } else {
      unnestedArray.push(value);
    }
  }
  return unnestedArray;
}
let unnested = breakArray(nested);
// console.log(unnested);

unnested = [].concat(...nested);
// console.log(unnested);

let newUnnested = [];
nested.forEach((element) => {
  console.log(element);
  newUnnested = newUnnested.concat(element);
});
console.log(newUnnested);

// Q7
let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};
console.log(Object.entries(flintstones).find((value) => value[0] === "Barney"));

// Q8
let numbers2 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
//How would you check whether the objects assigned to variables numbers and table below are arrays?

console.log(Array.isArray(numbers2));
console.log(Array.isArray(table));

// Q9  If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?
let title = "Flintstone Family Members";
let titleLength = title.length;
let spacesToRepeat = Math.floor((40 - title.length) / 2);
console.log(
  `${" ".repeat(spacesToRepeat)}${title}${" ".repeat(spacesToRepeat)}`
);
console.log(title.padStart(spacesToRepeat + title.length));

// Q10 Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split("").filter((value) => value === "t").length);
console.log(statement2.split("").filter((value) => value === "t").length);
