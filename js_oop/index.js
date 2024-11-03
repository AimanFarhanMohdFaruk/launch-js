// Constructor

function Album(title, artist, releaseYear) {
  this.title = title;
  this.artist = artist;
  this.releaseYear = releaseYear;
}

let thriller = new Album("Thriller", "Michael Jackson", 1982);
console.log(thriller);

function SmartPhone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;

  this.checkBattery = () => {
    console.log("Battery full");
  };

  this.displayInfo = () => {
    console.log({
      brand,
      model,
      releaseYear,
    });
  };
}
let oppo = new SmartPhone("oppo", "x12", 2019);
console.log(oppo.displayInfo());

// Object factories
function createSmartPhone(brand, model, releaseYear) {
  return {
    checkBattery() {
      console.log("Battery full");
    },
  };
}
let nokia = new createSmartPhone("Nokia", "150", "2004");
console.log(nokia.checkBattery());

// What's the upside and downside?
// Upside:
// Straightforward to create new objects without dealing with prototypes
// Bypass the <this> keyword.

// Disadvantage:
// Creating a new object also COPIES the methods defined by the returned object. Hence, high memory usage
// Unable to clearly define the returned object's type. It would simply return typeof of the returned object as 'object'
// Similarly, if you check the instanceOf <object factory> it'll return false.

// The example below, using object factories, the "type" is unexpected.
// function Foo() {
//   return {
//     foo: 42,
//   };
// }

// let obj = Foo();
// console.log(obj instanceof Foo); // false
// console.log(obj.constructor); // [Function: Object]

// How does classes solve this? albeit with syntatical sugar

class LinkedList {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  peek() {
    console.log(`The value is ${this.value}`);
  }
}
let pointA = new LinkedList(3, undefined);
console.log(pointA.peek());
console.log(pointA instanceof LinkedList);

class SmartPhoneUsingClass {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }

  displayInfo() {
    console.log({
      brand: this.brand,
      model: this.model,
      releaseYear: this.releaseYear,
    });
  }
}
let iPhone = new SmartPhoneUsingClass("Apple", "iPhone16", 2024);
console.log(iPhone.displayInfo());
