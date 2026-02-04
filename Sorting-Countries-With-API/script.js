fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    const layout = document.createElement("div");

    layout.innerHTML = `
      <nav class="flex justify-between items-center lg:px-16 lg:py-5 px-5 py-4 shadow-md">
        <div>
        <h1 class="font-bold text-sm lg:text-2xl">Where in the world?</h1>
      </div>
      <button
        id="themebtn"
        class="flex justify-center items-center gap-2 opacity-50 hover:opacity-100"
      >
        <i class="fa-solid fa-moon text-sm lg:text-base"></i>
        <h1 class="font-semibold text-sm lg:text-base"></h1>
      </button> 
      </nav>

      <main class="px-5 lg:px-16">
        <div class="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-between lg:w-full lg:items-center lg:mt-10 mt-5">
          <div class="lg:w-1/3 flex items-center rounded-lg shadow-lg px-4 space-x-3">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="searchInput" placeholder="Search for a country..." class="py-4 focus:outline-none" />
          </div>
          <div class="lg:w-1/6 relative">
            <button id="filterbtn" class="flex items-center justify-between hover:opacity-70 w-full shadow-lg rounded-lg p-4">
              <h1>Filter by Region</h1>
              <i class="fa-solid fa-angle-up"></i>
            </button>
            <ul class="absolute mt-2 w-full px-4 py-2 rounded-lg shadow-lg z-10 hidden">
              <li data-region="Africa">Africa</li>
              <li data-region="Americas">Americas</li>
              <li data-region="Asia">Asia</li>
              <li data-region="Europe">Europe</li>
              <li data-region="Oceania">Oceania</li>
              <li data-region="All">All</li>
            </ul>
          </div>
        </div>

        <div id="cards" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16"></div>
      </main>
    `;

    document.body.appendChild(layout);

    const cardsContainer = document.getElementById("cards");

    data.forEach((country) => {
      const card = document.createElement("div");
      card.className =
        "card shadow-lg rounded-lg overflow-hidden cursor-pointer";
      card.dataset.region = country.region;

      card.innerHTML = `
        <img src="${country.flags.svg}" class="w-full h-40 object-cover" />
        <div class="px-7 py-4">
          <p class="font-bold text-xl">${country.name}</p>
          <p>Population: <span>${country.population.toLocaleString()}</span></p>
          <p>Region: <span>${country.region}</span></p>
          <p>Capital: <span>${country.capital}</span></p>
        </div>
      `;

      card.addEventListener("click", () => showCountryDetails(country));
      cardsContainer.appendChild(card);
    });

    function showCountryDetails(country) {
      const main = document.querySelector("main");
      main.classList.add("hidden");

      const info = document.createElement("div");

      info.innerHTML = `
        <div class="max-w-7xl mx-auto px-10 mt-10">
          <button id="backBtn" class="flex items-center space-x-3 px-4 py-2 rounded-md shadow mb-6 hover:opacity-70">
            <i class="fa-solid fa-long-arrow-left"></i>
            <p>Back</p>
          </button>

          <div class="mt-10 flex flex-col lg:flex-row gap-10">
            <img src="${country.flags.svg}" class="w-full lg:w-1/2 rounded-lg" />

            <div class="flex-1 flex flex-col justify-between">
              <h1 class="text-2xl font-bold mb-6">${country.name}</h1>
              <div class="grid sm:grid-cols-2 gap-8">
                <div class="space-y-2">
                  <p>Native name: <span class="font-semibold">${country.nativeName}</span></p>
                  <p>Population: <span class="font-semibold">${country.population.toLocaleString()}</span></p>
                  <p>Region: <span class="font-semibold">${country.region}</span></p>
                  <p>Sub Region: <span class="font-semibold">${country.subregion}</span></p>
                  <p>Capital: <span class="font-semibold">${country.capital}</span></p>
                </div>
                <div class="space-y-2">
                  <p>Top Level Domain: <span class="font-semibold">${country.topLevelDomain.join(", ")}</span></p>
                  <p>Currencies: <span class="font-semibold">${country.currencies.map((c) => c.name).join(", ")}</span></p>
                  <p>Languages: <span class="font-semibold">${country.languages.map((l) => l.name).join(", ")}</span></p>
                </div>
              </div>
              <div class="mt-8 flex flex-wrap items-center gap-3">
                <span class="font-semibold">Border Countries:</span>
                ${country.borders ? country.borders.map((b) => `<button class="px-4 py-1 rounded-md cursor-default">${b}</button>`).join(" ") : `<button class="px-4 py-1 rounded-md cursor-default">None</button>`}
              </div>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(info);

      info.querySelector("#backBtn").addEventListener("click", () => {
        info.remove();
        main.classList.remove("hidden");
      });
    }

    const list = document.querySelector("ul");

    list.addEventListener("click", (e) => {
      const region = e.target.dataset.region;
      if (!region) return;

      document.querySelectorAll(".card").forEach((card) => {
        const name = card.querySelector("p").textContent.toLowerCase();
        const query = searchInput.value.toLowerCase();
        const matchesRegion =
          region === "All" || card.dataset.region === region;
        const matchesName = name.includes(query);

        card.classList.toggle("hidden", !(matchesRegion && matchesName));
      });

      list
        .querySelectorAll("li")
        .forEach((li) =>
          li.classList.remove(
            "bg-gray-400",
            "text-black",
            "rounded-lg",
            "font-bold",
            "pl-3",
          ),
        );
      e.target.classList.add(
        "bg-gray-400",
        "text-black",
        "rounded-lg",
        "font-bold",
        "pl-3",
      );

      list.classList.add("hidden");
      document
        .querySelector("#filterbtn i")
        .classList.replace("fa-angle-down", "fa-angle-up");
    });

    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const selectedRegion =
        document.querySelector("ul li.font-bold")?.dataset.region || "All";

      document.querySelectorAll(".card").forEach((card) => {
        const name = card.querySelector("p").textContent.toLowerCase();
        const matchesRegion =
          selectedRegion === "All" || card.dataset.region === selectedRegion;
        const matchesName = name.includes(query);

        card.classList.toggle("hidden", !(matchesRegion && matchesName));
      });
    });

    const filterbtn = document.getElementById("filterbtn");
    const iconangle = filterbtn.querySelector("i");
    const UlList = document.querySelector("ul");
    filterbtn.addEventListener("click", () => {
      if (iconangle.classList.contains("fa-angle-up")) {
        iconangle.classList.replace("fa-angle-up", "fa-angle-down");
        UlList.classList.remove("hidden");
      } else {
        iconangle.classList.replace("fa-angle-down", "fa-angle-up");
        UlList.classList.add("hidden");
      }
    });
    const themebtn = document.getElementById("themebtn");
    const icontheme = themebtn.querySelector("i");
    const nametheme = themebtn.querySelector("h1");
    const root = document.documentElement;
    function updateThemeUI() {
      const isDark = root.classList.contains("dark");
      icontheme.classList.toggle("fa-moon", !isDark);
      icontheme.classList.toggle("fa-sun", isDark);
      nametheme.textContent = isDark ? "Light Theme" : "Dark Theme";
    }
    if (localStorage.getItem("theme") === "dark") {
      root.classList.add("dark");
    }
    updateThemeUI();
    themebtn.addEventListener("click", () => {
      root.classList.toggle("dark");
      const isDark = root.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateThemeUI();
    });
  })
  .catch((err) => console.error(err));
