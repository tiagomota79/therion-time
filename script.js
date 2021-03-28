const years = document.querySelector("#years");
const months = document.querySelector("#months");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function updateDisplay() {
  const now = moment();
  const therion = moment("2018-04-17 13:44");
  const diff = moment.duration(now.diff(therion));

  years.textContent = diff.years();
  months.textContent = diff.months();
  days.textContent = diff.days();
  hours.textContent = diff.hours();
  minutes.textContent = diff.minutes();
  seconds.textContent = diff.seconds();
}

setInterval(updateDisplay, 1000);
updateDisplay();
