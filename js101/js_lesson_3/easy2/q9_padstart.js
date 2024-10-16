// Q9  If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?
let title = "Flintstone Family Members";
let titleLength = title.length;
let spacesToRepeat = Math.floor((40 - title.length) / 2);
console.log(
  `${" ".repeat(spacesToRepeat)}${title}${" ".repeat(spacesToRepeat)}`
);
console.log(title.padStart(spacesToRepeat + title.length));
