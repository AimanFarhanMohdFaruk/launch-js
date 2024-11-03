/** Write a function which accomplishes what the string requests
 *   Your function should use the mechanism specifed (for, while, forEach, etc)
 *   Use the function name specified
 *   Log the result to the console
 */
const obj = {
  text: "Remove occurances of the letter e after the word 'letter' in this sentence",
};
Object.freeze(obj);

/**
 * BONUS:
 * A single function should satisfy the strings defined 'obj' and the bonus objects below
 * The function should only take a single argument of type object
 * The function should be able to accomidate any word between the single quotes
 */
const bonusObj1 = {
  text: "Remove occurances of the letter e after 'the' in this sentence",
};
const bonusObj2 = {
  text: "The letter e should not appear after the word 'not' in this sentence",
};
Object.freeze(bonusObj1);
Object.freeze(bonusObj2);

/** for loop - function name: forSolution */
function forSolution(obj, target) {
  const text = obj["text"];
  let arrText = text.split(" ");
  let letterIndex = arrText.indexOf(target);

  for (let i = letterIndex + 1; i < arrText.length; i++) {
    arrText[i] = arrText[i].replace(/e/g, "");
  }

  return arrText.join(" ");
}
console.log(forSolution(bonusObj1, "the"));

/** while loop - function name: whileSolution */

function whileSolution(obj) {
  const text = obj["text"];
  let arrText = text.split(" ");
  let letterIndex = arrText.indexOf("'letter'");
  let i = letterIndex + 1;
  while (true) {
    arrText[i] = arrText[i].replace(/e/g, "");
    i++;

    if (i >= arrText.length) break;
  }

  return arrText.join(" ");
}
// console.log(whileSolution(obj));

/** do while loop - function name: doWhileSolution */

function doWhileSolution(obj) {
  const text = obj["text"];
  let arrText = text.split(" ");
  let letterIndex = arrText.indexOf("'letter'");
  let i = letterIndex + 1;

  do {
    arrText[i] = arrText[i].replace(/e/g, "");
    i++;

    if (i >= arrText.length) break;
  } while (true);

  return arrText.join(" ");
}
// console.log(doWhileSolution(obj));

/** forEach iteration method  - function name: forEachSolution */

/** filter iteration method  - function name: 'filterSolution' */

// map iteration method

// reduce iteration method
