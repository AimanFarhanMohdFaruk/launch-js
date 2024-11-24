function halvsies(numArr) {
  let length = numArr.length;
  let result = [[], []];

  if (length === 0) return result;

  let middle = Math.ceil(length / 2);
  result[0] = numArr.slice(0, middle);
  result[1] = numArr.slice(middle);

  return result;
}

console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]\

// suggested
// function halvsies(array) {
//   let half = Math.ceil(array.length / 2);
//   let firstHalf = array.slice(0, half);
//   let secondHalf = array.slice(half);
//   return [firstHalf, secondHalf];
// }

// input arr
// input arr of two elements which are arrays

// rules
// if its odd, place it in the first arr. the rest in the second array.
// if there's no elements, return two empty arrays.

// algo
// set length to the numArr length
// set result to an initial value of an array with two empty arrays.
// using the length value
// check the modulo of 2. If its not zero means it's an odd number.
// If it's an odd number, find the middle value, using Math.floor, then + 1 to include the extra.
// then push the rest onto the other arraty.
