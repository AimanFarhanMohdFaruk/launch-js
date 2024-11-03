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

let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
console.log(flintstones);

// How does concat behave with arrays?
/*
it merges two or more arrays together. IMPORTANT, it does not change the
exsting array, it returns a new one.

*/
