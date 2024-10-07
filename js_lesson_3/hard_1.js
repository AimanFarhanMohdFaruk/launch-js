// Q1
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return;
  {
    prop1: "hi there";
  }
}

console.log(first()); // the object
console.log(second()); // undefined

// Q2
let object = { first: [1] };
let numArray = object["first"]; // => [1] // it is passing the object to the variable numArray
numArray.push(2); // this will impact the original array within the variable object

console.log(numArray); //  => "[1, 2]"
console.log(object); // => { first: [1, 2] };

// How to take the copy without having the value reference the original array?
// Change numArray to either of the following:
let numArray1 = object["first"].slice();
let numArray2 = object["first"].concat();

// Q3 testing outputs
// A: unchanged,
// B: unchanged
// C:

// a and b, the variables within messWithVars are re-assigned, which
// makes them lose their reference to the global variables.
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// Unlike above, we invoke methods onto each of the argument that is referencing the original object.
// Splice is a destructive method and hence will mutate the arguments.
function messWithVars1(one1, two1, three1) {
  one1.splice(0, 1, "two");
  two1.splice(0, 1, "three");
  three1.splice(0, 1, "one");
}

let one1 = ["one"];
let two1 = ["two"];
let three1 = ["three"];

messWithVars1(one1, two1, three1);

console.log(`one is: ${one1}`);
console.log(`two is: ${two1}`);
console.log(`three is: ${three1}`);
