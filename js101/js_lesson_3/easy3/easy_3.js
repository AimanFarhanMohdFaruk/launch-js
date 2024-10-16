// Q2
// You cannot use + to concat arrays.
// in JS, the + operator converts arrays to strings
// then it concatenates them. similar to .join()
console.log([1, 2, 3] + [4, 5]); // 1,2,34,5

// Q3
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // hello there

// Q4
/*
Why does arr[0].first mutate arr1 despite the slice function?
the .slice method performs a shallow copy, not a deep copy, hence,
when objects exists within the original value, the copy would also have
the same reference to the original objects.

in the example below arr1[0] and arr2[0] points to the same object in memory
*/
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); // [{ first: 42 }, { second: "value2" }, 3, 4, 5];

// Q5
function isColorValid(color) {
  return color == "blue" || color === "green";
}
