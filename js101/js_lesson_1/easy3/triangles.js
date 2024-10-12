// Triangles

function triangle(height) {
  let spaces = height;
  let stars = 0;
  let result = [];

  while (height--) {
    stars++;
    spaces--;
    result.push(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
  }

  return result.join("\n");
}

function triangle2(num) {
  for (let i = 1; i <= num; i++) {
    console.log(" ".repeat(num - i) + "*".repeat(i));
  }
}
console.log(triangle(5));
