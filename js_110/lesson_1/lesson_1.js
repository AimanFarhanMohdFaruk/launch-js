// Some good to know methods for objects
let capitals = { uk: "London", france: "Paris", germany: "Berlin" };
Object.keys(capitals); // => ['uk', 'france', 'germany']
Object.values(capitals); // => ['London', 'Paris', 'Berlin']
Object.values(capitals)[0]; // => 'London'

// Checking whether an object has a key
capitals.hasOwnProperty("uk");

// Arrays are objects too! how nice . . .
let arr = ["foo", "bar", "qux"];
arr["boo"] = "hoo"; // you can add object key and value elements
arr[-1] = 374;
arr; // => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
arr.length; // => 3 (not 5!)
arr.forEach((element) => console.log(element)); // prints: foo, bar, qux
Object.keys(arr); // => [ '0', '1', '2', 'boo', '-1' ]

// Non-element properties gets ignored by the .length property of the array.
// those elements' keys are also ignored for iterative methods like forEach, map, filter

// ------------

// String to Array conversions
"apple,orange,mango".split(","); // => ['apple', 'orange', 'mango']
let arr1 = ["a", "b", "c", "d", "e", "f"];
arr1.join(); // => 'a,b,c,d,e,f'
console.log(arr1.join("")); // => 'abcdef'

// String methods
// Common ones, slice, toUpperCase toLowerCase repeat substring conca
