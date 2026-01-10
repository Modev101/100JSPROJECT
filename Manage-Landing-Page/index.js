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

  if (bars.classList.contains("fa-bars")) {
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-xmark");
  } else {
    bars.classList.remove("fa-xmark");
    bars.classList.add("fa-bars");
  }
});

const phoneimage = document.getElementById("phoneimage");
const phonename = document.getElementById("phonename");
const phonequote = document.getElementById("phonequote");
const circles = document.querySelectorAll(".fa-circle");

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    let i = 0;
    setInterval(() => {
      phoneimage.src = data[i].image;
      phonename.textContent = data[i].name;
      phonequote.textContent = data[i].quote;
      circles.forEach((circle, index) => {
        if (index === i) {
          circle.classList.add("text-[#f25f3a]");
          circle.classList.remove("text-white", "border-black");
        } else {
          circle.classList.remove("text-[#f25f3a]");
          circle.classList.add("text-white", "border-black");
        }
      });

      i++;
      if (i >= data.length) i = 0;
    }, 3000);
  });
