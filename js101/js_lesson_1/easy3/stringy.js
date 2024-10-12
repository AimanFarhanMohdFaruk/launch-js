// Stringy
function stringy(number) {
  let iterator = 0;
  let result = "";
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
console.log(stringy(6));

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
