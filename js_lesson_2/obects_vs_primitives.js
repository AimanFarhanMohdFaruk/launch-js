// Primitives vs objects

// Primitives are immutable. No such way to update in place.
// If you want a new value, you simply need to re-assign that variable
// to point to a new primitive value.

// Ojects are mutable, you can update them in place.
// Whatever updates done trhougha destructive method WILL result
// in a change to the original object

// Mutating with objects example

// The following would not change the myWords array because you are not running a destructive method on the string.
// Also strings are a primitive type hence, they are immuatable.
let myWords = ["Hello"];
myWords[0].toUpperCase();

console.log(myWords);

// The example below WILL update the original array because we access the first potions and make it point to an updated
// string that gets the uppercase
let myWords2 = ["Hello"];
myWords2[0] = myWords2[0].toUpperCase();

console.log(myWords2);
