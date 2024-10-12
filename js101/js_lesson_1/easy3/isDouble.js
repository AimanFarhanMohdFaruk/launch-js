// doubles
function isDouble(number) {
  const stringifyNumber = String(number);
  if (stringifyNumber.length % 2 === 1) return false;
  let center = Math.floor(stringifyNumber.length / 2);
  let leftNumber = stringifyNumber.substring(0, center);
  let rightNumber = stringifyNumber.substring(center);

  return leftNumber === rightNumber;
}
function twice(number) {
  if (isDouble(number)) return number;

  return number * 2;
}
console.log(twice(334433)); // 668866
console.log(twice(103103)); // 103103

function isAlphaNumeric(char) {
  const cc = char.charCodeAt(0);
  if ((cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123)) {
    return true;
  } else {
    return false;
  }
}
