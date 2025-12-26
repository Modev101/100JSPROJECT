const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const newYear = new Date(2026, 0, 1);

function updateCountdown() {
  const now = new Date();
  const diff = newYear - now;

  if (diff <= 0) {
    days.innerText = "0";
    hours.innerText = "0";
    minutes.innerText = "0";
    seconds.innerText = "0";
    return;
  }

  const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (diff % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsLeft = Math.floor(
    (diff % (1000 * 60)) / 1000
  );

  days.innerText = daysLeft;
  hours.innerText = hoursLeft;
  minutes.innerText = minutesLeft;
  seconds.innerText = secondsLeft;
}

updateCountdown(); 
setInterval(updateCountdown, 1000);
