const nameEl = document.getElementById("name");
const family = document.getElementById("family");
const genus = document.getElementById("genus");
const calories = document.getElementById("calories");
const carbs = document.getElementById("carbs");
const fat = document.getElementById("fat");
const protein = document.getElementById("protein");
const sugar = document.getElementById("sugar");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

function loadFruit(fruitName) {
    fetch(`https://corsproxy.io/?https://www.fruityvice.com/api/fruit/${fruitName}`)
        .then(res => {
            if (!res.ok) throw new Error("Fruit not found");
            return res.json();
        })
        .then(data => {
            nameEl.innerText = `Name: ${data.name}`;
            family.innerText = `Family: ${data.family}`;
            genus.innerText = `Genus: ${data.genus}`;

            calories.innerText = `Calories: ${data.nutritions.calories}`;
            carbs.innerText = `Carbs: ${data.nutritions.carbohydrates}`;
            fat.innerText = `Fat: ${data.nutritions.fat}`;
            protein.innerText = `Protein: ${data.nutritions.protein}`;
            sugar.innerText = `Sugar: ${data.nutritions.sugar}`;
        })
        .catch(err => alert(err.message));
}

window.addEventListener("DOMContentLoaded", () => {
    loadFruit("banana");
});

btn.addEventListener("click", () => {
    const fruit = input.value.trim().toLowerCase();
    if (fruit) loadFruit(fruit);
});
