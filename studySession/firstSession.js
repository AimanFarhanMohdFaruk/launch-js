const a = 0 && 2; // 2
const b = 0 || 3; // 3

if (a > b) {
  // 2 > 3
  c = a;
} else {
  c = b; // c = 3
}

console.log(c); // reference error

/*
Two important concepts to cover, one, how the values of `a` and `b` are assigned,
and two, understanding function scope in terms of the variable `c`.

The const variable `a` is assigned 2 due to both being truthy values and 2 being larger than 1
The const variable `b` is assigned the value 3 because 0 is considered as a falsy value

In the IF block, the values are used as a condition whether to assign a function scoped
variable c to the value of `a` or `b`.

In line 10, console.log(c) fails due to a reference error, because,
the variable `c` is defined within the IF block, hence, it is not accessible 
outside of that block.
*/

// the above WAS WRONG DUDEEEE.

// feedback
// short circuit operators, for logical && operators, it returns the first falsy value OR the last truthy value
// for || operators, it evaluates to the first truthy value or last falsy value

// Retrying
const a2 = 0 && 2; // 0
const b2 = 0 || 3; // 3
if (a2 > b2) {
  // 2 > 3
  c2 = a2;
} else {
  c2 = b2; // c = 3
}
console.log(c2);
// explain
// the console.log above returns 3.

// c2 is a global variable that is assigned the value 3 which refers to the value assigned to b2.
// the if block makes a comparison between the variables a2 and b2 which dictates the value assigned to c2

// const variable a2 is assigned 0, because, when using an && operator, it either returns the first falsy
// value OR the last truthy value. in this case, 0 is a falsy value whilst 2 is true, since 0 is a falsy
// value, it returns 0. the first falsy value.

// if for example, it was 8 && 2, it would return 2, because 2 is the last truthy value.

// const b2 is assigned the value 3, because 0 || 3 evaluates to 3 due to the OR operator which returns the first truthy
// value or the last falsy value.

function hello() {
  console.log("hello");
}
const d = 1 || hello(); // hello() DOESNT RUN!!!! because the OR operator already sees a truthy value

// What is the output? Explain why.  -- Nicholas
const person = {
  name: "Alice",
  age: 30,
};

function updateAge(obj) {
  obj.age = 40; // mutating the obj
  obj = { name: "Alice", age: 31 };
}

updateAge(person);
console.log(person);

// variable shadowing, an inner scope mimics a variable name with an outer scope
