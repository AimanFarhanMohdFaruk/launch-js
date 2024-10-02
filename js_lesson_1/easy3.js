// ddaailyy dobulee
function crunch(string) {
  let result = [];
  let stringLength = string.length;
  for (let i = 0; i < stringLength; i++) {
    if (string[i] === string[i + 1]) continue;

    result.push(string[i]);
  }
  return result.join("");
}
// console.log(crunch("ddaaiillyy ddoouubbllee"));
// console.log(crunch("4444abcabccba")); // "4abcabcba"
// console.log(crunch("ggggggggggggggg")); // "g"

function logInBox(string) {
  const stringLength = string.length;

  function renderTopOrBottom() {
    let border = new Array(stringLength + 4);
    border[0] = "+";
    border[border.length - 1] = "+";

    for (let i = 0; i < border.length; i++) {
      if (border[i] === "+") {
        continue;
      } else {
        border[i] = "-";
      }
    }
    console.log(border.join(""));
  }

  function renderWordLine() {
    let line = new Array(stringLength + 4);

    for (let i = 0; i < line.length; i++) {
      if (i === 0 || i === line.length - 1) {
        line[i] = "|";
      } else if (i === 1 || i === line.length - 2) {
        line[i] = " ";
      } else {
        line[i] = string[i - 2];
      }
    }
    console.log(line.join(""));
  }

  function renderEmptyLine() {
    let line = new Array(stringLength + 4);
    line[0] = "|";
    line[line.length - 1] = "|";
    for (let i = 0; i < line.length; i++) {
      if (line[i] === "|") {
        continue;
      } else {
        line[i] = " ";
      }
    }
    console.log(line.join(""));
  }

  renderTopOrBottom();
  renderEmptyLine();
  renderWordLine();
  renderEmptyLine();
  renderTopOrBottom();
}
logInBox("To boldly go where no one has gone before.");

// Example solution:
/*
function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
*/

// Stringy

function stringy(number) {
  let iterator = 0;
  let result = [];
  while (iterator < number) {
    if (iterator % 2 === 0) {
      result += 1;
    } else {
      result += 0;
    }

    iterator++;
  }

  return result;
}
console.log(stringy(4));

/*
function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};
*/

// Triangles

function triangle(number) {
  let iterator = number;
  let spaces = number;
  let stars = 0;
  let result = [];

  while (iterator--) {
    stars++;
    spaces--;
    result.push(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
  }

  return result.join("\n");
}
console.log(triangle(5));

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

function cleanUp(string) {
  let arrString = string.split("");
  for (let i = 0; i < arrString.length; i++) {
    if (!isAlphaNumeric(arrString[i])) {
      arrString[i] = " ";
    }
  }
  return arrString.join("");
}

console.log(cleanUp("---what's my +*& line?")); // " what s my line "
/*
function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function lastChar(text) {
  return text[text.length - 1];
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}
*/

function century(year) {
  if (year < 100) {
    return "1st";
  }

  let number = year / 100;
  let flooredYear = Math.floor(number);

  return number > flooredYear ? flooredYear + 1 : flooredYear;
}
// console.log(century(2000));
console.log(century(10103)); // "102nd"
