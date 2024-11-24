function union(arr1, arr2) {
  let result = [];
  let combinedAll = arr1.concat(arr2);

  combinedAll.forEach((value) => {
    if (!result.includes(value)) {
      result.push(value);
    }
  });

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
