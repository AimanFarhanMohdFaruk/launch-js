let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34

// Explanation

// the variable answer is initialised with a value 42;

// there is function that takes someNumber as an argument,
// which returns that someNumber + 8.

// a NEW variable is initialised by using the messWithIt function
// this does not affect the original answer variable at all.
