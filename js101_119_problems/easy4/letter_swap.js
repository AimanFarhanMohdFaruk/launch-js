function swap(string) {
  return string
    .split(" ")
    .map((word) => {
      let split = word.split("");
      [split[0], split[split.length - 1]] = [split[split.length - 1], split[0]];

      return split.join("");
    })
    .join(" ");
}

console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a")); // "a"
