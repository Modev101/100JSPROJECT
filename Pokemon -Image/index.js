const input = document.getElementById("input");
const btn = document.getElementById("btn");
const image = document.getElementById("image");

function loadPokemon() {
  const name = input.value.trim().toLowerCase();
  if (!name) return;

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      if (!res.ok) throw new Error("Pokemon not found");
      return res.json();
    })
    .then((data) => {
      image.src = data.sprites.front_default;
    })
    .catch((err) => alert(err.message));
}

btn.addEventListener("click", loadPokemon);
