// Q1 Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];
numbers = [];
console.log(numbers);

numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.shift();
}
console.log(numbers);
