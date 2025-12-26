const Y = document.getElementById("Y");
const X = document.getElementById("X");

window.addEventListener("mousemove", (event) => {

    Y.innerText = `${event.clientY}`;
    X.innerText = `${event.clientX}`;
}
);