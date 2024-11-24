const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeOfDay) {
  let minutes = 0;
  if (timeOfDay === "00:00" || timeOfDay === "24:00") return minutes;

  let arrSplit = timeOfDay.split(":");
  let hour = Number(arrSplit[0]);
  let minute = Number(arrSplit[1]);

  while (hour > 0) {
    minutes += 60;
    hour--;
  }

  minutes += minute;

  return minutes;
}

function beforeMidnight(timeOfDay) {
  let minutes = 0;
  if (timeOfDay === "00:00" || timeOfDay === "24:00") return minutes;

  let arrSplit = timeOfDay.split(":");
  let hour = Number(arrSplit[0]);
  let minute = Number(arrSplit[1]);

  while (hour > 0) {
    minutes += 60;
    hour--;
  }

  minutes += minute;

  return MINUTES_PER_DAY - afterMidnight(timeOfDay);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
