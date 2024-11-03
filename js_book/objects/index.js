// 3.
let myArray = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// 4.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys[0]);
console.log(obj);

// 5.
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// 8.
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

const copyObj = (object, keys = []) => {
  let copyOfObj = {};
  if (keys.length === 0) {
    Object.assign(copyOfObj, objToCopy);
  } else {
    for (let key of keys) {
      copyOfObj[key] = objToCopy[key];
    }
  }

  return copyOfObj;
};

let newObj = copyObj(objToCopy);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ["foo", "qux"]);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ["bar"]);
console.log(newObj3); // => { bar: 2 }

// 9.
