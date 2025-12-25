const display = document.getElementById("display");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

let number = 0;

function updateDisplay() {
    display.innerText = number;

    if (number > 0) {
        display.style.color = "green";
    } else if (number < 0) {
        display.style.color = "red";
    } else {
        display.style.color = "black";
    }
}

increase.addEventListener("click", () => {
    number++;
    updateDisplay();
});

decrease.addEventListener("click", () => {
    number--;
    updateDisplay();
});

reset.addEventListener("click", () => {
    number = 0;
    updateDisplay();
});
