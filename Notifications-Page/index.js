const cards = document.querySelectorAll(".card");
const notificationsCounter = document.getElementById("notificationsCounter");
const clearbtn = document.getElementById("clearbtn");

let counter = 3;
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const dot = card.querySelector(".dot");

    if (dot && !dot.classList.contains("hidden")) {
      card.classList.remove("bg-slate-100");
      card.classList.add("bg-white");
      dot.classList.add("hidden");
      counter--;
      notificationsCounter.innerText = `${counter}`;
    }
  });
});

clearbtn.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.remove("bg-slate-100");
    const dot = card.querySelector(".dot");
    dot.classList.add("hidden");
  });

  notificationsCounter.innerText = `0`;
});
