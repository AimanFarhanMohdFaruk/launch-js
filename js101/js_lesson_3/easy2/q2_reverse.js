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

// explanation

// .slice() will return a copy of the array.
// [...numbers] does the same

// what is the difference between slice and the spread operator?

/*
slice is a function on the Array.prototype & String.prototype.
The spread operator will work for any iterable object so it can work with
String, Array, Map, Set, etc.

maybe not so important differences:
  - do something like Array(3).slice() will return [empty x3]
  - but [...Array(3)] will return [undefined, undefined, undefined]
*/
