"use strict";

var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minsEl = document.getElementById('mins');
var secondsEl = document.getElementById('seconds');
var newYears = '1 Jan 2024';

function countdown() {
  var newYearsDate = new Date(newYears);
  var currentDate = new Date();
  var totalSeconds = (newYearsDate - currentDate) / 1000;
  var days = Math.floor(totalSeconds / 3600 / 24);
  var hours = Math.floor(totalSeconds / 3600) % 24;
  var mins = Math.floor(totalSeconds / 60) % 60;
  var seconds = Math.floor(totalSeconds) % 60; //	console.log(days, hours, minutes, seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = seconds;
}

function formatTime(time) {
  return time < 10 ? "".concat(time) : time;
} //initial call


countdown();
setInterval(countdown, 1000);
//# sourceMappingURL=script.dev.js.map
