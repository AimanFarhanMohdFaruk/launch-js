let arr = ["a", "b", "c"];
let copyOfArr = [...arr];

copyOfArr.push("d");

console.log(arr); // => [ 'a', 'b', 'c' ]
console.log(copyOfArr); // => [ 'a', 'b', 'c', 'd' ]

let arr1 = ["a", "b", "c"];
let copyOfArr1 = arr1.slice();
copyOfArr1.push("d");
console.log(arr1);
console.log(copyOfArr1);

// nested data are references, like below:
let arr2 = [["a"], ["b"], ["c"]];
let copyOfArr2 = arr.slice();

copyOfArr2[1].push("d");

arr2; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
copyOfArr2; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
