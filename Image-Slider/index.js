const nextEl = document.getElementById("rightbtn");
const prevEl = document.getElementById("leftbtn");
const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll(".image-container img");

let currentImg = 0;
let timeout;

function updateImg() {
    if (currentImg < 0) {
        currentImg = imgsEl.length - 1;
    } else if (currentImg >= imgsEl.length) {
        currentImg = 0;
    }

    imageContainerEl.style.transform =
        `translateX(-${currentImg * 500}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}

nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();
