let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// my answer:

// object logs { first: [1,2] }
// Why? because when you assign numArray to object["first"]
// that would return you the reference to the array [1].

// Hence, when values are passed by reference, running a descrutive
// method such as push(2), causes it to mutate the original object.

// What if we wanted it to not impact the original reference?
// change line 2, to object["first"].slice or .concat()
// those two methods will return a copy of the value

// feedback:
// you got it right.
