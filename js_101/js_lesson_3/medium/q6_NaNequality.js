let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// false. You can't use equality operators
// to determine whether a value is NaN

// It is meant to indicate that an operation
// that was intended to return a number failed.

// How to check if is a NaN?
console.log(Number.isNaN(nanArray[0])); // true
