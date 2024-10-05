let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsWithExclaimation(string) {
  if (string[string.length - 1] === "!") return true;

  return false;
}
console.log(endsWithExclaimation(str1));
console.log(endsWithExclaimation(str2));

// Q3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(ages.hasOwnProperty("Spot"));

//Q5:
console.log(false == "0"); // true, because 0 is a falsy. implicit coercions
console.log(false === "0"); // false, since boolean type is not equal to string

// Q6. add entries
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);
console.log(ages);

//Q7, check existence of string 'Dino'
let string1 =
  "Few things in life are as important as house training your pet dinosaur.";
let string2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(string1.includes("Dino"));
console.log(string2.includes("Dino"));

// Q10
let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

console.log(advice.slice(0, advice.indexOf("house")));
