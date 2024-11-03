console.log([1, 2, 3].filter((num) => "hi")); // => [1, 2, 3]

// Why undefined?
// the function callback does not return anything
// the usage of {} makes it that you must
// specify a return
console.log(
  [1, 2, 3].map((num) => {
    num * num;
  })
); // => [undefined, undefined, undefined]

// Unlike above, this returns a value
console.log([1, 2, 3].map((num) => num * num)); // => [1, 4, 9]

// It logs 11 because .pop() returns the caterpillar string
console.log(["ant", "bear", "caterpillar"].pop().length); // => 11

// true because, the return always returns a truthy value
console.log(
  [1, 2, 3].every((num) => {
    return (num = num * 2);
  })
);

// .fill(value, start index, exclusive end index) is a destructive method.
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
console.log(arr); // => [1, 1, 1, 1, 1]

// when a function doesn't return something, it implicitly returns undefined.
console.log(
  ["ant", "bear"].map((elem) => {
    if (elem.length > 3) {
      return elem;
    }
  })
); // => [undefined, "bear"]

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let newObject = {};
flintstones.forEach((value, index) => {
  newObject[value] = index;
});
console.log(newObject);

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};
console.log(Object.values(ages).reduce((acc, age) => (acc += age), 0));

console.log(
  Object.keys(ages).find(
    (key) => ages[key] === Object.values(ages).sort((a, b) => a - b)[0]
  )
);

let agesArr = Object.values(ages);
console.log(Math.min(...agesArr)); // => 10

// Create an object that expresses the frequency with which each letter occurs in this string:
let statement = "The Flintstones Rock";
let charCount = {};
for (const char of statement) {
  if (char === " ") continue;

  if (!charCount[char]) {
    charCount[char] = 1;
  } else {
    charCount[char]++;
  }
}
console.log(charCount);
