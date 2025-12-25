const display = document.getElementById("display");
const reset = document.getElementById("reset");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

const startingMinutes = 25;
let time = startingMinutes * 60;
let timer = null;

function countDown() {
    if (time <= 0) {
        clearInterval(timer);
        timer = null;
        return;
    }

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = `${minutes}:${seconds}`;

    time--;
}

start.addEventListener("click", () => {
    if (timer === null) {
        timer = setInterval(countDown, 1000);
    }
});

stop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

reset.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    time = startingMinutes * 60;
    display.textContent = "25:00";
});
