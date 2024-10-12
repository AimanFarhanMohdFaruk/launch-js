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
