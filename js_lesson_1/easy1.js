// 1.

function isOdd(number) {
  if (Number.isNaN(number)) {
    return "Error, not a number";
  }

  return number % 2 === 1;
}
// console.log(isOdd(2));
// console.log(isOdd(5));

function logOdd(number) {
  for (let i = 0; i <= number; i++) {
    if (isOdd(i)) {
      console.log(`${i}`);
    }
  }
}
// console.log(logOdd(99));

// Short long short
function shortLongShort(string1, string2) {
  if (string1.length === 0 && string1.length > 0) {
    return string2;
  } else if (string2.length === 0 && string1.length > 0) {
    return string1;
  } else {
    let long = string1 > string2 ? string1 : string2;
    let short = long === string1 ? string2 : string1;

    return short + long + short;
  }
}
console.log(shortLongShort("abc", "defgh") === "abcdefghabc"); // "abcdefghabc"
console.log(shortLongShort("", "xyz") === "xyz");

function multisum(number) {
  let iterator = 0;
  let currentSum = 0;
  while (iterator < number) {
    if (iterator % 3 === 0 || iterator % 5 === 0) {
      currentSum += iterator;
    }
    iterator++;
  }
  return (currentSum += number);
}
console.log(multisum(1000)); // 234168

function utf16Value(string) {
  let sum = 0;
  for (const char of string) {
    let value = char.charCodeAt();
    sum += value;
  }
  return sum;
}
console.log(utf16Value("Four score")); // 984)
