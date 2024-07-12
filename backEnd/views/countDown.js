const countValue = document.querySelectorAll(".countValue span");
const days = document.querySelector(".days");
const daysIndex1 = document.querySelector(".days .index1");
const hoursIndex1 = document.querySelector(".hours .index1");
const hoursIndex2 = document.querySelector(".hours .index2");

const minutesIndex1 = document.querySelector(".minutes .index1");
const minutesIndex2 = document.querySelector(".minutes .index2");

const secondsIndex1 = document.querySelector(".seconds .index1");
const secondsIndex2 = document.querySelector(".seconds .index2");

//in Milliseconds
const seconds = 1000;
const minutes = 60;
const hours = 24;
const oneMinute = seconds * minutes;
const oneHour = seconds * minutes * minutes;
const oneDay = hours * oneHour;

let intervalId = setInterval(countDown, 1000);

function countDown() {
  let currDate = new Date();
  let deadLineDate = new Date(2024, 6, 26);

  let currTime = currDate.getTime();
  let deadLineTime = deadLineDate.getTime();
  console.log(currDate, deadLineDate, currTime, deadLineTime);

  console.log(seconds, minutes, hours, oneMinute, oneHour, oneDay);

  if (deadLineTime < currTime) {
    clearInterval(intervalId); // Stop the interval
    alert("Your Countdown Expires!");
  } else {
    let daysLeft = deadLineTime - currTime;

    let totalDaysLeft = Math.floor(daysLeft / oneDay);
    console.log(daysLeft, totalDaysLeft);
    let totalHoursLeft = Math.floor((daysLeft % oneDay) / oneHour);
    let totalMinutesLeft = Math.floor((daysLeft % oneHour) / oneMinute);
    let totalSecondsLeft = Math.floor((daysLeft % oneMinute) / seconds);

    daysIndex1.innerHTML = totalDaysLeft;

    hoursIndex1.innerHTML = zeroPad(totalHoursLeft).split("")[0];
    hoursIndex2.innerHTML = zeroPad(totalHoursLeft).split("")[1];

    minutesIndex1.innerHTML = zeroPad(totalMinutesLeft).split("")[0];
    minutesIndex2.innerHTML = zeroPad(totalMinutesLeft).split("")[1];

    secondsIndex1.innerHTML = zeroPad(totalSecondsLeft).split("")[0];
    secondsIndex2.innerHTML = zeroPad(totalSecondsLeft).split("")[1];
  }
}

function zeroPad(num) {
  return String(num).padStart(2, "0");
}
