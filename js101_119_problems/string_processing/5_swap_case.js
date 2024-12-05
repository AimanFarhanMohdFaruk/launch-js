function swapCase(string) {
  let stringArr = string.split("");
  stringArr.forEach((char, idx) => {
    if (
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
    ) {
      if (char === char.toUpperCase()) {
        stringArr[idx] = stringArr[idx].toLowerCase();
      } else {
        stringArr[idx] = stringArr[idx].toUpperCase();
      }
    }
  });

  return stringArr.join("");
}

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
