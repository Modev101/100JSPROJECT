fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    const cardsContainer = document.getElementById("cardscontainer");

    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
        <div class="card bg-[#212636] border-[#545969] border rounded-xl py-3 px-4 space-y-4 shadow-xl">
          <div class="flex items-center justify-center space-x-3">
            <div><img src="${item.logo}" alt="${item.name}" class="size-28" /></div>
            <div>
              <h1 class="text-xl font-medium">${item.name}</h1>
              <p class="opacity-70">${item.description}</p>
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <button class="bg-[#2f364b] rounded-full px-3 py-1 font-medium shadow-2xl border border-[#545969] focus:ring-2 focus:ring-red-500 focus:outline-none hover:bg-[#de473f]">Remove</button>
            </div>
            <div>
              <label class="switch">
                <input type="checkbox" class="checkbox" data-is-active="${item.isActive}" />
                <div class="slider"></div>
              </label>
            </div>
          </div>
        </div>`;

      const checkbox = div.querySelector('input[type="checkbox"]');
      checkbox.checked = checkbox.dataset.isActive === "true";
      checkbox.addEventListener("change", () => {
        checkbox.dataset.isActive = String(checkbox.checked);
      });

      const removeBtn = div.querySelector("button");
      removeBtn.addEventListener("click", () => div.remove());

      cardsContainer.appendChild(div);
    });

    const themeBtn = document.getElementById("themebtn");
    themeBtn.addEventListener("click", () => {
      const icon = themeBtn.querySelector("i");

      if (icon.classList.contains("fa-sun")) {
        icon.classList.replace("fa-sun", "fa-moon");
        document.body.style.backgroundColor = "#ededed";
        document
          .querySelector("nav")
          .classList.replace("bg-[#212636]", "bg-[#fbfdfe]");
        document
          .querySelector("nav")
          .classList.replace("bg-[#212636]", "bg-[#fbfdfe]");
        document
          .querySelector("nav")
          .classList.replace("text-white", "text-black");
        document
          .querySelector("main")
          .classList.replace("text-white", "text-black");
        document.querySelectorAll("button").forEach((btn) => {
          btn.classList.replace("bg-[#2f364b]", "bg-[#c7c7c7]");
          btn.classList.replace("border-[#545969]", "border-none");
        });
        document.querySelectorAll("div").forEach((btn) => {
          btn.classList.replace("bg-[#212636]", "bg-[#fbfdfe]");
          btn.classList.replace("border-[#545969]", "border-none");
        });
      } else {
        icon.classList.replace("fa-moon", "fa-sun");
        document.body.style.backgroundColor = "#09153e";
        document
          .querySelector("nav")
          .classList.replace("bg-[#fbfdfe]", "bg-[#212636]");
        document
          .querySelector("nav")
          .classList.replace("text-black", "text-white");
        document
          .querySelector("main")
          .classList.replace("text-black", "text-white");
        document.querySelectorAll("button").forEach((btn) => {
          btn.classList.replace("bg-[#c7c7c7]", "bg-[#2f364b]");
          btn.classList.replace("border-none", "border-[#545969]");
        });
        document.querySelectorAll("div").forEach((btn) => {
          btn.classList.replace("bg-[#fbfdfe]", "bg-[#212636]");
          btn.classList.replace("border-none", "border-[#545969]");
        });
      }
    });
    const buttons = document.querySelectorAll("main button");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => {
          b.classList.remove("bg-[#de473f]", "text-white");
          b.classList.add("bg-[#2f364b]");
        });

        btn.classList.remove("bg-[#2f364b]");
        btn.classList.add("bg-[#de473f]", "text-white");
      });
    });
    const filterCards = (type) => {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        const checkbox = card.querySelector("input[type='checkbox']");
        if (type === "active")
          card.classList.toggle(
            "hidden",
            checkbox.dataset.isActive === "false",
          );
        if (type === "inactive")
          card.classList.toggle("hidden", checkbox.dataset.isActive === "true");
        if (type === "all") card.classList.remove("hidden");
      });
    };

    document
      .getElementById("activebtn")
      .addEventListener("click", () => filterCards("active"));
    document
      .getElementById("inactivebtn")
      .addEventListener("click", () => filterCards("inactive"));
    document
      .getElementById("allbtn")
      .addEventListener("click", () => filterCards("all"));
  })
  .catch((error) => console.error(error));
