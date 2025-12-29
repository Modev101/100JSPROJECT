const pop = document.getElementById("pop");
const menu = document.getElementById("menu");
const close = document.getElementById("close");

const features = document.getElementById("features");
const featuresList = document.getElementById("featuresList");
const featuresArrow = document.getElementById("featuresArrow");

const company = document.getElementById("company");
const companyList = document.getElementById("companyList");
const companyArrow = document.getElementById("companyArrow");

// Open menu
menu.addEventListener("click", () => {
  pop.classList.remove("translate-x-full");
  pop.classList.add("translate-x-0");
});

// Close menu
close.addEventListener("click", () => {
  pop.classList.add("translate-x-full");
  pop.classList.remove("translate-x-0");
});

// Features dropdown
features.addEventListener("click", () => {
  featuresList.classList.toggle("hidden");
  featuresArrow.classList.toggle("rotate-180");
});

// Company dropdown
company.addEventListener("click", () => {
  companyList.classList.toggle("hidden");
  companyArrow.classList.toggle("rotate-180");
});

// desk

const featuresDesk = document.getElementById("featuresDesk");
const featuresDeskArrow = document.getElementById("featuresDeskArrow");
const companyDesk = document.getElementById("companyDesk");
const companyDeskArrow = document.getElementById("companyDeskArrow");
const deskcontainer = document.getElementById("deskcontainer");

featuresDesk.addEventListener("click", () => {
  const existing = document.getElementById("featuresListDesk");

  if (existing) {
    existing.remove(); // remove the card if already exists
  } else {
    const div = document.createElement("div");
    div.id = "featuresListDesk"; // assign the ID directly
    div.className =
      "hidden lg:flex flex-col items-center gap-3 bg-white shadow-xl rounded-lg p-4";

    div.innerHTML = `
      <div class="flex flex-col items-center gap-3 text-gray-600">
        <p class="flex items-center justify-center gap-3 cursor-pointer hover:text-black">
          <img src="/images/icon-todo.svg" class="w-4" /> Todo List
        </p>
        <p class="flex items-center justify-center gap-3 cursor-pointer hover:text-black">
          <img src="/images/icon-calendar.svg" class="w-4" /> Calendar
        </p>
        <p class="flex items-center justify-center gap-3 cursor-pointer hover:text-black">
          <img src="/images/icon-reminders.svg" class="w-4" /> Reminders
        </p>
        <p class="flex items-center justify-center gap-3 cursor-pointer hover:text-black">
          <img src="/images/icon-planning.svg" class="w-4" /> Planning
        </p>
      </div>
    `;

    deskcontainer.appendChild(div);
  }

  featuresDeskArrow.classList.toggle("rotate-180");
});

companyDesk.addEventListener("click", () => {
  const existing = document.getElementById("companyListDesk");

  if (existing) {
    existing.remove(); // remove the company card if it exists
  } else {
    const div = document.createElement("div");
    div.id = "companyListDesk"; // assign ID directly
    div.className =
      "hidden lg:flex flex-col items-center gap-3 bg-white shadow-xl rounded-lg p-4 h-fit";

    div.innerHTML = `
      <div class="flex flex-col items-center gap-2 text-gray-600">
        <p class="cursor-pointer hover:text-black">History</p>
        <p class="cursor-pointer hover:text-black">Our Team</p>
        <p class="cursor-pointer hover:text-black">Blog</p>
      </div>
    `;

    deskcontainer.appendChild(div);
  }

  companyDeskArrow.classList.toggle("rotate-180");
});
