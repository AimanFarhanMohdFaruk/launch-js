function reverseNumber(number) {
  let result = [];

  do {
    let remainder = number % 10;

    number = Math.floor(number / 10);
    result.push(remainder);
  } while (number > 0);

  return Number(result.join(""));
}

console.log(reverseNumber(12345) === 54321);
console.log(reverseNumber(12213) === 31221);
console.log(reverseNumber(456) === 654);
console.log(reverseNumber(12000) === 21);
console.log(reverseNumber(1) === 1);

// suggested solution
function reverseNumber(number) {
  let numberStringArray = String(number).split("");
  let reversedStringedNum = numberStringArray.reverse().join("");
  return parseInt(reversedStringedNum, 10);
}
