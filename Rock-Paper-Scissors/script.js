const rulesbtn = document.getElementById("rulesbtn");
const overlay = document.querySelector(".overlay");
const closeBtn = overlay.querySelector(".fa-close");

rulesbtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

const SELECTIONS = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
];

function cloneIcon(icon) {
  const clone = icon.cloneNode(true);
  clone.classList.remove("hover:opacity-70", "cursor-pointer");
  return clone;
}

function cloneIcon(icon) {
  const clone = icon.cloneNode(true);
  clone.classList.remove("hover:opacity-70", "cursor-pointer");
  return clone;
}

const selections = document.querySelectorAll("[data-select]");
const picks = [...document.querySelectorAll("[data-select] i")];

selections.forEach((select) => {
  select.addEventListener("click", () => {
    const playerName = select.dataset.select;
    const playerSelection = getSelection(playerName);
    const computerSelection = getRandomSelection();

    const playerchoice = document.getElementById("playerchoice");
    const computerchoice = document.getElementById("computerchoice");

    playerchoice.innerHTML = "";
    computerchoice.innerHTML = "";

    const playerIcon = select.querySelector("i");
    const computerIcon = document.querySelector(
      `[data-select="${computerSelection.name}"] i`,
    );

    playerchoice.appendChild(cloneIcon(playerIcon));
    computerchoice.appendChild(cloneIcon(computerIcon));
    const score = document.getElementById("score");
    const result = document.getElementById("result");
    if (playerSelection.name === computerSelection.name) {
      result.classList.remove("text-green-500");
      result.classList.remove("text-red-500");  
      result.innerHTML = "DRAW";
      playAgainBtn.classList.remove("hover:text-red-500");
      playAgainBtn.classList.remove("hover:text-green-500");
    } else if (isWinner(playerSelection, computerSelection)) {
      result.classList.remove("text-red-500");
      result.classList.add("text-green-500");
      result.innerHTML = "YOU WIN";
      score.innerHTML++;
      playAgainBtn.classList.remove("hover:text-red-500");
      playAgainBtn.classList.add("hover:text-green-500");
    } else {
      result.classList.remove("text-green-500");
      result.classList.add("text-red-500");
      result.innerHTML = "YOU LOSE";
      score.innerHTML--;
      playAgainBtn.classList.remove("hover:text-green-500");
      playAgainBtn.classList.add("hover:text-red-500");
    }

    mainsection.classList.add("hidden");
    selectionsection.classList.remove("hidden");
  });
});

const mainsection = document.getElementById("mainsection");
const selectionsection = document.getElementById("selectionsection");
const playAgainBtn = document.getElementById("playagain");

playAgainBtn.addEventListener("click", () => {
  selectionsection.classList.add("hidden");
  mainsection.classList.remove("hidden");
});
function getSelection(name) {
  return SELECTIONS.find((s) => s.name === name);
}

function isWinner(selection, opponent) {
  return selection.beats === opponent.name;
}

function getRandomSelection() {
  return SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
}

