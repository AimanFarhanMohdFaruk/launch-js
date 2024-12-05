function buyFruit(fruitCount) {
  let fruitsArr = [];

  for (const fruit of fruitCount) {
    let fruitName = fruit[0];
    let fruitCount = fruit[1];

    for (let i = 0; i < fruitCount; i++) {
      fruitsArr.push(fruitName);
    }
  }

  return fruitsArr;
}

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// solution I like
function buyFruit(fruitList) {
  return fruitList.map(([fruit, count]) => Array(count).fill(fruit)).flat();
}
