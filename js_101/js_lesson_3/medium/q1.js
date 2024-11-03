// Q1
let line = "The Flintstones Rock!";
function printLineTenTimes() {
  for (let i = 0; i < 10; i++) {
    // console.log(`${" ".repeat(i)}${line}`);
    console.log(line.padStart(line.length + i, " "));
  }
}
printLineTenTimes();
