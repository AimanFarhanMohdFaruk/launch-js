let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

// return [ 'Barney', 2 ]
// .find will have a value with a type of [string, string]
// to represent the key and value
console.log(Object.entries(flintstones).find((value) => value[0] == "Barney"));
