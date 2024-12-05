function letterCaseCount(string) {
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (const char of string) {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      if (char === char.toUpperCase()) {
        result["uppercase"]++;
      } else {
        result["lowercase"]++;
      }
    } else {
      if (char !== "") result["neither"]++;
    }
  }

  return result;
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }
