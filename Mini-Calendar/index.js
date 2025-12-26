const monthName = document.getElementById("monthName");
const dayName = document.getElementById("dayName");
const dayNumber = document.getElementById("dayNumber");
const year = document.getElementById("year");

const nowDate = new Date();

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const days = [
  "Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"
];

function calendar() {
  monthName.innerText = months[nowDate.getMonth()];
  dayName.innerText = days[nowDate.getDay()];
  dayNumber.innerText = nowDate.getDate();
  year.innerText = nowDate.getFullYear();
}

calendar();
