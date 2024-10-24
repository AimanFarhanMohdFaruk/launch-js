function hello() {
  console.log("hello");
}

let test = 1 && hello(); // logs hello
let test2 = hello() && 1; // logs hello
let test3 = 0 && hello(); // does not log, FIRST falsy found, it short circuits
let test4 = hello() && 0; // logs hello
// why && operator returns the FIRST falsy value or the last truthy value

// examples with || operator,
// evaluates to the FIRST truthy or last falsy
let test5 = hello() || 3; // logs hello
let test6 = 3 || hello(); // DOES NOT log hello
let test7 = 0 || hello(); // logs hello

// Why? because in test6, 3 is a truthy value, hence
// it got what it wanted to check, so it terminates
// the evaluation early.

// in test7, 0 is considered a falsy value,
// hence, the evaluation continues, onto hello()
// which results in "hello" getting logged
