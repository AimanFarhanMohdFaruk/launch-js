// primitive values are passed by value.
let myWord = "Hello";
let myOtherWord = myWord;

console.log(myWord); // "Hello"
console.log(myOtherWord); // "Hello"

// In this case, myWord1 is updated, but this does not update myOtherWord1
// because primitives are passed by value.

// When you change one, it does not change another.
let myWord1 = "Hello";
let myOtherWord1 = myWord1;
myWord1 = "Goodbye";

console.log(myWord1);
console.log(myOtherWord1);

// Objects are sent as references.
// When you assign myOtherWords to myWords, you are making
// those two variables point to the same value.

// mutating one would mean both variables would have access to
// the updated values
let myWords = ["Hello", "Goodbye"];
let myOtherWords = myWords;
myWords[0] = "Hi";

console.log(myWords); // ["Hi", "Goodbye"]
console.log(myOtherWords); // ["Hi", "Goodbye"]

// Important note, line 38 is very different to line 27.
// here, you are re-assigning the variable to a new object array.
// re-assigning to a new value is not equal to mutating.
// mutating means you are updating an existing value.
// this requires doing something like myWords[1], or running destructive methods
// such as .push and .pop to the array.
let myWords1 = ["Hello", "Goodbye"];
let myOtherWords1 = myWords1;
myWords1 = ["Hi", "Bye"];

console.log(myWords1);
console.log(myOtherWords1);

// When using myWords[0] to assign a value, we maintain
// the rule of primitives being sent out as values rather than references
// hence, when we update myWords2[0] in line 50, it does not update myWord2
let myWords2 = ["Hello", "Goodbye"];
let myWord2 = myWords2[0];
myWords2[0] = "Hi";

console.log(myWords2); // ["Hi", "Goodbye"]
console.log(myWord2); // ["Hello"]

// line <59> mutates the first position in myWords3 to "Hi"
// myWords3 is then re-assigned a new value, "Hello"
let myWords3 = ["Hello", "Goodbye"];
let myWord3 = "Hi";
myWords3[0] = myWord3;
myWord3 = "Hello";

console.log(myWords3); // ["Hi", "Goodbye"]
console.log(myWord3); // "Hello"
