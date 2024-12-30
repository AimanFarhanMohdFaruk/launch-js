let arr = ["10", "11", "9", "7", "8"];
console.log(arr.sort((a, b) => Number(a) - Number(b)));

// sort by year published
let books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    published: "1967",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: "1925",
  },
  { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
  { title: "Ulysses", author: "James Joyce", published: "1922" },
  { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
];

console.log(
  books.sort(
    (book1, book2) => Number(book1.published) - Number(book2.published)
  )
);

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

let totalAge = 0;
for (let member in munsters) {
  console.log(
    `${member} is a ${munsters[member].age} year old, ${munsters[member].gender}`
  );
}

const VOWELS = ["a", "e", "i", "o", "u"];
let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};
Object.values(obj).forEach((array) => {
  array.forEach((word) => {
    let split = word.split("");
    split.forEach((char) => {
      if (VOWELS.includes(char)) {
        console.log(char);
      }
    });
  });
});

let arr1 = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];
console.log(
  arr1.map((array) => {
    if (typeof array[0] === "string") {
      return array.sort();
    } else {
      return array.sort((a, b) => b - a);
    }
  })
);

let arr2 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
console.log(
  arr2.map((obj) => {
    let newObj = Object.assign({}, obj);
    for (let key in newObj) {
      newObj[key] += 1;
    }

    return newObj;
  })
);

// 14
let arr3 = [[2], [3, 5, 7], [9], [11, 15, 18]];
console.log(
  arr3.map((subArr) => {
    return subArr.filter((number) => number % 3 === 0);
  })
);

// 15
let arr4 = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

function sumOdd(arr) {
  let sum = 0;
  for (const num of arr) {
    if (num % 2 === 1) {
      sum += num;
    }
  }

  return sum;
}

console.log(
  arr4.sort((arr1, arr2) => {
    let sum1 = sumOdd(arr1);
    let sum2 = sumOdd(arr2);

    return sum1 - sum2;
  })
);

let obj1 = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

let result = [];
Object.values(obj1).forEach((fruit) => {
  result.push(
    fruit.colors.map((color) => {
      return color[0].toUpperCase() + color.slice(1);
    })
  );

  result.push(fruit["size"].toUpperCase());
});

console.log(result);

let arr5 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// return all even

console.log(
  arr5.filter((obj) => {
    return Object.values(obj).every((arr) => {
      return arr.every((value) => value % 2 === 0);
    });
  })
);

let arr6 = [
  ["a", 1],
  ["b", "two"],
  ["sea", { c: 3 }],
  ["D", ["a", "b", "c"]],
];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
let objResult = {};

arr6.forEach((arr) => {
  objResult[arr[0]] = arr[1];
});
console.log(objResult);

const getRanHex = (size) => {
  let result = [];
  let hexRef = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join("");
};

function createUUID() {
  let pattern = [8, 4, 4, 4, 12];

  let result = [];
  for (let i = 0; i < pattern.length; i++) {
    if (i === 0) {
      result.push(getRanHex([pattern[i]]));
    } else {
      result.push(`-${getRanHex(pattern[i])}`);
    }
  }

  return result.join("");
}

console.log(createUUID());
