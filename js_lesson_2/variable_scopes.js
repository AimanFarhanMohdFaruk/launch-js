// Global scopes are usable within functions
let myVar = 1;

function myFunc() {
  myVar = 2;
}

myFunc();
console.log(myVar); // 2

// Similar to primitive values, global scoped variables are accessible.
// take note, below we are using the variable to point to a new array.
// we are not mutating the original array assigned to the variable myVar2
let myVar2 = [1];
function myFunc2() {
  myVar2 = [2];
}
myFunc2();
console.log(myVar2); // [2]

// In place mutation. NOW you are changing the original array.
// Unlike above, you are now using the global variable, accessing the
// first position in the index, and changing it to 2.
let myVar3 = [1];
function myFunc3() {
  myVar3[0] = 2;
}
myFunc3();
console.log(myVar3); // [2]

// no argument passed in myFunc4
let myVarNoArgument = [1];
function myFunc4(myVarNoArgument) {
  myVarNoArgument[0] = 2;
}
myFunc4(); // TypeError: Cannot set properties of undefined (setting '0')
console.log(myVarNoArgument);

// IMPORTANT!!! Personally, the most confusing aspect of this topic.
// Take note of the function's parameters.
// it takes in myVar4 as a parameter,
// however, on line <50>, we are requesting to change
// what the variable myVar4 is pointing to, from the argument passed in the function,
// to a new primitive value 2.
// IMPORTANT TAKEAWAY, when you re-assign the the parameter to another value,
// you BREAK the link to the original value / reference.
// After line 57 here, you have no way of retrieving what was sent as an argument
let myVar4 = 1;
function myFunc4(myVar4) {
  console.log(myVar4);
  myVar4 = 2;
}
myFunc4(myVar4);
console.log(myVar4); // 1

// Similar to above, the function's parameter variable
// is re-assigned to a new array.
// if it wants to mutate it, it would need to do something like
// myVar5[0] = [2]

// IMPORTANT TAKEAWAY, when you re-assign the the parameter to another value,
// you BREAK the link to the original reference
let myVar5 = [1];
function myFunc5(myVar5) {
  console.log(`I'm still the original reference`, myVar5);
  myVar5 = [2];

  console.log(
    `You re-assigned me to a new object, I no longer link to the original reference`,
    myVar5
  );
}
myFunc5(myVar5);
console.log("I'm the original object", myVar5); // [1]

// correct way of mutating. it doesn't re-assigned the function scoped variable
// to a new object,
// it uses the original reference, accesses the first position, and updates the value
let myVar6 = [1];
function myFunc6(myVar6) {
  myVar6[0] = 2;
}
myFunc6(myVar6);
console.log(myVar6);

// IMPORTANT, unlike the example above, primitive values are passed by value.
// when you access the variable myVar7 within the function,
// you are actually receiving a copy of the value.
// hence, it doesn't change the original value.
let myVar7 = 1;
function myFunc7(myVar7) {
  myVar7 = 2;
}
myFunc7(myVar7);
console.log(myVar7);

// to change primitive, values you can do something like below:
// you have to use the copy and return a new value.
// with that return value, use it to re-assign a new value to the
// myVar8 variable.
let myVar8 = 1;
function myFunc8(myVar8) {
  return myVar8 + 1;
}
myVar8 = myFunc8(myVar8);
console.log(myVar8);

// NOTES

// VARIABLE SHADOWING
// When you have an inner scope variable with the same name as the outer scope.

// example 1
let number = 10;
[1, 2, 3].forEach((number) => {
  console.log(number); // this no longer points to the outer scope variable number
});

// example 2
let a = 1;
function doit(a) {
  console.log(a); // => 3
}
doit(3);
console.log(a); // => 1

// IMPORTANT
// in the case below, it might be a surpise that line 138 throws a reference error.
// This is because of Javascript's Temporal Dead Zone.

let num2 = 5;
function myFunc9() {
  console.log(num2);
  let num2 = 10;
}

myFunc9();
console.log(num2);
