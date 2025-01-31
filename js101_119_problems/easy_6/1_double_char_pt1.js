// input: string
// output: string that doubles each character

function repeater(string) {
  return string
    .split("")
    .map((char) => char + char)
    .join("");
}

console.log(repeater("Hello") === "HHeelllloo");
console.log(repeater("Good job!") === "GGoooodd  jjoobb!!");
console.log(repeater("") === "");
