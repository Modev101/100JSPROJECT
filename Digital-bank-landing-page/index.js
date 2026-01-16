const menubar = document.getElementById("menubar");
const menubarlist = document.getElementById("menubarlist");

menubar.addEventListener("click", () => {
  if (menubarlist.classList.contains("hidden")) {
    menubarlist.classList.remove("hidden");
    menubar.classList.replace("fa-bars", "fa-close");
  } else {
    menubarlist.classList.add("hidden");
    menubar.classList.replace("fa-close", "fa-bars");
  }
});
