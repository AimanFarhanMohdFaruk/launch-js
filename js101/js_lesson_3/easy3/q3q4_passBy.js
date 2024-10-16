let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// str1 is unchanged, why?
// primitive values such as strings
// are passed by values,
// running str2 = "goodbye" impacts
// only the str2 variable

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// returns [ { first: 42 }, { second: 'value2' }, 3, 4, 5 ]
// why does it still change?
// because, arr1.slice() does a shallow copy.
// Meaning, if within the array, there are objects,
// it will also copy the pointers to the object
