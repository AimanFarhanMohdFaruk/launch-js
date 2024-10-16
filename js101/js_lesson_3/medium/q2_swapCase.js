// Q2 Return a new string that swaps the case of all of the letters:
let munstersDescription = "The Munsters are creepy and spooky.";

function switchCase() {
  let newString = [];
  let munstersDescriptionArr = munstersDescription.split("");
  for (const char of munstersDescriptionArr) {
    char.charCodeAt() <= 90
      ? newString.push(char.toLowerCase())
      : newString.push(char.toUpperCase());
  }
  return newString.join("");
}
console.log(switchCase());

console.log(
  munstersDescription
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("")
);
