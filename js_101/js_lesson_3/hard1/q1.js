function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return;
  {
    prop1: "hi there";
  }
}

console.log(first()); // returns the object
console.log(second()); // the return statement breaks before reaching the
// object, hence it returns nothing
