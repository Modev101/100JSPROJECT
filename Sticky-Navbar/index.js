const navbar = document.getElementById("navbar");
const liItems = document.querySelectorAll("#navbar li");

function colorChange() {
  if (window.scrollY >= 552) {
    navbar.classList.add("bg-black");

    liItems.forEach(li => {
      li.classList.add("text-white");
      li.classList.remove("text-black");
    });
  } else {
    navbar.classList.remove("bg-black");

    liItems.forEach(li => {
      li.classList.remove("text-white");
      li.classList.add("text-black");
    });
  }
}

window.addEventListener("scroll", colorChange);
