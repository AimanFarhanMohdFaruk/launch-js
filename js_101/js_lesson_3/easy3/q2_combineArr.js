console.log([1, 2, 3] + [4, 5]);

// The above, does not work,
// why? because, when using the + operator
// the arr gets converted into strings,
// so what you're actually doing is below:
// "1,2,3" + "4,5"

// below works as expected,
// concat is meant to combine two arrays together
console.log([1, 2, 3].concat([4, 5]));
