let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

function selectFruit(produceList) {
  const newObject = {};
  for (const key in produceList) {
    if (produceList[key] === "Fruit") {
      newObject[key] = "Fruit";
    }
  }
  return newObject;
}

console.log(selectFruit(produce));
