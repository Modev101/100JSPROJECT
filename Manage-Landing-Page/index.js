const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
const emailinput = document.getElementById("emailinput");
const emailbtn = document.getElementById("emailbtn");
const emspan = document.getElementById("emspan");

emailbtn.addEventListener("click", () => {
  // Email
  if (emailinput.value.trim() === "") {
    emailinput.classList.add("border-red-500");
    emspan.innerText = "This field is required";
  } else if (!re.test(emailinput.value)) {
    emailinput.classList.add("border-red-500");
    emspan.innerText = "Looks like this is not an email";
  } else {
    emailinput.classList.replace("border-red-500", "border-green-500");
    emspan.innerText = "";
  }
});
const bars = document.getElementById("bars");
const cartbasket = document.getElementById("cartbasket");

bars.addEventListener("click", () => {
  cartbasket.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  cartbasket.classList.add("hidden");
});
