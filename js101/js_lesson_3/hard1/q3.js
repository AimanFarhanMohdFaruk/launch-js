// 1.
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

function messWithVars1(one1, two1, three1) {
  one1 = ["two"];
  two1 = ["three"];
  three1 = ["one"];
}

let one1 = ["one"];
let two1 = ["two"];
let three1 = ["three"];

messWithVars1(one1, two1, three1);

console.log(`one is: ${one1}`);
console.log(`two is: ${two1}`);
console.log(`three is: ${three1}`);

function messWithVars2(one2, two2, three2) {
  one2.splice(0, 1, "two");
  two2.splice(0, 1, "three");
  three2.splice(0, 1, "one");
}

let one2 = ["one"];
let two2 = ["two"];
let three2 = ["three"];

messWithVars2(one2, two2, three2);

console.log(`one is: ${one2}`);
console.log(`two is: ${two2}`);
console.log(`three is: ${three2}`);

// my answer:
/*
the first one, it doesn't do anything to the orignal references,
because the function scoped variables are which were pointing to the
original reference before line 3, are re-assigned to different values.

hence, logging each value would show the same values without any mutations

the second, same concept, due to the re-assigment of the variables,
it causes no changes.

the thid one does something different, here, the function parameters are
not re-assigned to new values.

they are being used in-place to run the method .splice(), which is a destructive
method that will impact the original reference. hence,

splice takes in 3 arguments, the first argument is the position that you want
to remove an element, and the second argument is how many elements to remove
starting from that position, and the third is the value to replace it with.

this would cause the following mutations to occur:
one2 --> "two"
two2 --> "three"
three2 --> "one"
*/
