// Q1
let line = "The Flintstones Rock!";
function printLineTenTimes() {
  for (let i = 0; i < 10; i++) {
    // console.log(`${" ".repeat(i)}${line}`);
    console.log(line.padStart(line.length + i, " "));
  }
}
printLineTenTimes();

// Q2 Return a new string that swaps the case of all of the letters:
let munstersDescription = "The Munsters are creepy and spooky.";

function switchCase() {
  let newString = [];
  let munstersDescriptionArr = munstersDescription.split("");
  for (const char of munstersDescriptionArr) {
    char.charCodeAt() <= 90
      ? newString.push(char.toLowerCase())
      : newString.push(char.toUpperCase());
  }
  return newString.join("");
}
console.log(switchCase());

// Q3 refactor for better error handling and remove do while loop.
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function refactorFactors(number) {
  if (number <= 0) {
    console.log("Number must be greater than zero");
    return;
  }
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
console.log(refactorFactors(30));

//Q4 Is there a difference between these implementations, other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.

// Yes, the difference is whether it mutates the original buffer sent as an argument.
// in the second function, the function scoped variable is re-assigned to point from the
// original buffer reference, to a new array with the updated elements.
// After that line, buffer no longer refers to the original reference, running shift,
// is making changes to the new value pointed at a diff memory address.
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Q5
// to make it equal, you need to convert the strings to Number
// Number((0.3 + 0.6).toFixed(1))
console.log(0.3 + 0.6); // 0.8999999999
console.log(0.3 + 0.6 === 0.9); // false

// Q7
let nanArray = [NaN];
console.log(nanArray[0] === NaN); // false
// to test correctly is below
console.log(Number.isNaN(nanArray[0])); // true

// Q8 what is the output?
let answer = 42;
function messWithIt(someNumber) {
  return (someNumber += 8);
}
let newAnswer = messWithIt(answer);
console.log(answer - 8);
// my answer = 34. answer is still 42, minus 8 is 34.
// why? primitive values are passed by value not reference. whatever happend in messWithIt
// did not impact the original answer variable's value.

// Q8 what happens?
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach((familyMember) => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
messWithDemographics(munsters);
// answer
// Gone. because objects are passed by references. Using Object.values does not impact this principle.

// Q9: console.log("paper");

// Q10 you got this wrong so pay attenton
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
// what I got wrong
// I did not not read the code properly that it was
// doing an equality check with param === 'no'.
