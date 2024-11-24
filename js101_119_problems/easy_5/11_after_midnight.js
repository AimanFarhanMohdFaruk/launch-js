const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_PER_DAy = HOURS_IN_DAY * MINUTES_IN_HOUR;

function timeOfDay(timeInMinutes) {
  if (timeInMinutes === 0) {
    return formatHourMinute(0, 0);
  }
  let direction = timeInMinutes < 0 ? -1 : 1;

  let hour = 0;
  let minutes = timeInMinutes < 0 ? 60 : 0;

  if (Math.abs(timeInMinutes) < 60) {
    minutes = minutes + timeInMinutes;
    hour = timeInMinutes < 0 ? hour-- : hour;
  } else {
    let hourCount = 0;
    let remainingMinutes = Math.abs(timeInMinutes);
    while (remainingMinutes >= 60) {
      remainingMinutes -= 60;
      hourCount++;
    }

    if (timeInMinutes > 0) {
      hour = 0;
      while (hourCount > 0) {
        if (hour === 24) {
          hour = 0;
        }

        hour++;
        hourCount--;
      }
    } else {
      hour = 23;
      while (hourCount > 0) {
        if (hour === 0) {
          hour = 24;
        }
        hour--;
        hourCount--;
      }
    }

    minutes = minutes + remainingMinutes * direction;
  }

  return formatHourMinute(hour, minutes);
}

function formatHourMinute(hour, minute) {
  return `${addLeadingZero(hour)}:${addLeadingZero(minute)}`;
}

function addLeadingZero(number) {
  let abs = Math.abs(number);

  return number < 10 ? `0${Math.abs(abs)}` : `${Math.abs(abs)}`;
}

// suggested solution

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "00:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03"); // => "00:03"
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

// input integer representing minutes
// output: string representing HH:MM
