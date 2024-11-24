function sum(number) {
  let numbers = [];

  while (number > 0) {
    let remainder = number % 10;
    numbers.push(remainder);
    number = Math.floor(number / 10);
  }

  return numbers.reduce((acc, number) => acc + number, 0);
}

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45
