function reverse(arr) {
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;

    start++;
    end--;
  }

  return arr;
}

// algo
// set startIdx = 0
// set endIdx = length - 1

// while (startIdx <= endIdx) {
// swap(startIdx, endIdx)

// increment startIdx
// decrement endIdx
//}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
