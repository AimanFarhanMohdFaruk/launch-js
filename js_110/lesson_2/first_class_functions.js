// what does it mean to say functions are treated as
// first-class value / object or higher order functions?

// it means that you pass them around in your program
// like any other value.

// Since functions can be treated as values, we can create
// functions that can take other functions as arguments
// and return other functions.

// functions that take other functions as arguments are called
// HIGHER-ORDER functions, as are those that return functions

// breadown the code below
/*

let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

Breakdown:

method forEach is called on the outer array.

a callback function, is called onto each arr.
  the callback function returns a new array, which is done through
  a map function called onto the array,
    the map function runs a callback function on each element in the array.
    which logs the number if the number that is more than 5. this function
    would always return undefined.

    it has the side effect of logging the number.
  
  the return value from the map function is not used since forEach always returns undefined.
  
*/

/* 
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
}); 

.map is called onto the outer array, hence this block will return a new array
based on the return values of the callback function

  for each array, a callback function is run which returns a new array from the
  .map function called onto the each element in the array.

    the .map from the callback function returns a new array with each element
    multiplied by 2. [1,2] will return [2,4]

  the result from the callback function should be [2, 4], [6, 8].

the outer .map returns [[2,4], [6,8]]
*/

/* 

[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

--> first arr iterated would be [[1,2], [3,4]], [5,6]
--> second arr.map will run on both arrays with elements like below:
  - first one, [1,2], [3,4]
  - second one, 5,6

--> first one, will run a .map returninng,
    [[2,3], [4,5]]

--> second one, will run a map returning,
    [6,7]

 */

// Running destructive methods during a map call will mutate the orinal array

/* 
let arr = [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]];

arr.map(subArr => subArr.pop()); // [ [ 4 ], [ 'c' ] ]

arr; // [ [ [ 1 ], [ 2 ], [ 3 ] ], [ [ 'a' ], [ 'b' ] ] ]
*/
