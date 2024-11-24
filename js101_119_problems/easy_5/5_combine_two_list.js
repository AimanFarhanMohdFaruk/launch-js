function interleave(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  }

  return result;
}

console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]

// algo
// set result = [];
// have a common iterator then add using the first arr, then the second using the same iterator
