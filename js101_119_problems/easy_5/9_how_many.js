function countOccurrences(vehicles) {
  let vehicleCount = {};

  for (const vehicle of vehicles) {
    if (!vehicleCount[vehicle]) {
      vehicleCount[vehicle] = 1;
    } else {
      vehicleCount[vehicle] += 1;
    }
  }

  Object.entries(vehicleCount).forEach((entry) => {
    console.log(`${entry[0]} => ${entry[1]}`);
  });
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
