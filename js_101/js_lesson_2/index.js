let myVar = [1];

function myFunc(myVar) {
  let reference = myVar;
  console.log(`Reference: ${reference}, myVar: ${myVar}`);
  console.log(reference === myVar); // true
  myVar = [2];
  console.log(`Reference: ${reference}, myVar: ${myVar}`);
  console.log(reference === myVar); // false
}
myFunc(myVar);
console.log(myVar);
