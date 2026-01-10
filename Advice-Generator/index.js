let apiUrl = "https://api.adviceslip.com/advice";
const adviceNumber = document.getElementById("adviceNumber");
const advice = document.getElementById("advice");
const generate = document.getElementById("generate");

generate.addEventListener("click", () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      adviceNumber.innerText = `Advice #${data.slip.id}`;
      advice.innerText = `${data.slip.advice}`;
    })
    .catch((error) => console.error(error));
});
