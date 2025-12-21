const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const error = document.getElementById("error");

const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

function check() {
    const value = inp.value.trim();

    inp.classList.remove("border-[#ce9797]", "border-[#f96262ff]", "border-green-500");

    if (value === "") {
        inp.classList.add("border-[#f96262ff]");
        error.innerText = "Please provide an email";
    } else if (!re.test(value)) {
        inp.classList.add("border-[#f96262ff]");
        error.innerText = "Please provide a valid email";
    } else {
        inp.classList.add("border-green-500");
        error.innerText = "";
    }
}

btn.addEventListener("click", check);
