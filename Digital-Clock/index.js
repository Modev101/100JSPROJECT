const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateTime() {
    const nowTime = new Date();

    hours.innerText = String(nowTime.getHours()).padStart(2, "0");
    minutes.innerText = String(nowTime.getMinutes()).padStart(2, "0");
    seconds.innerText = String(nowTime.getSeconds()).padStart(2, "0");
}

updateTime();
setInterval(updateTime, 1000);
