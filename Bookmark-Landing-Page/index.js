const menu = document.getElementById("menu");
const navphone = document.getElementById("navphone");

menu.addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.classList.add(
    "fixed",
    "bg-black/70",
    "left-0",
    "top-0",
    "w-full",
    "h-full",
    "z-[1000]"
  );
  document.body.appendChild(overlay);
  const popup = document.createElement("div");
  popup.innerHTML = `<div
      class="bg-[#252b46] h-screen flex flex-col z-[10000]"
      id="menuphonelist"
    >
      <!-- Header -->
      <div class="flex justify-around items-center px-6 py-6">
        <img
          src="/images/logo-bookmark.svg"
          alt="logo-bookmark"
          class="rounded-lg py-1 px-2 bg-white"
        />
        <img
          src="/images/icon-close.svg"
          alt="icon-close"
          id="closemenuphone"
          class="size-10 cursor-pointer"
        />
      </div>

      <!-- Menu -->
      <div class="flex items-center">
        <ul class="w-full flex flex-col items-center gap-3">
          <hr class="w-full border-white/20" />

          <li class="py-3 uppercase text-white cursor-pointer">features</li>
          <hr class="w-full border-white/20" />

          <li class="py-3 uppercase text-white cursor-pointer">pricing</li>
          <hr class="w-full border-white/20" />

          <li class="py-3 uppercase text-white cursor-pointer">contact</li>
          <hr class="w-full border-white/20" />

          <li
            class="mt-4 w-[85%] py-3 uppercase cursor-pointer text-white border rounded-lg text-center hover:text-[#fa5757]"
          >
            login
          </li>
        </ul>
      </div>

      <!-- Social -->
      <div class="flex justify-center text-white gap-6 pb-10 mt-20">
        <i class="fa-brands fa-square-facebook cursor-pointer hover:text-[#fa5757]"></i>
        <i class="fa-brands fa-twitter cursor-pointer hover:text-[#fa5757]"></i>
      </div>
    </div>`;
  overlay.appendChild(popup);
  navphone.classList.add("hidden");
  popup.querySelector("#closemenuphone").addEventListener("click", () => {
    overlay.remove();
    navphone.classList.remove("hidden");
  });
});

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const titleContent = document.getElementById("titleContent");
const textContent = document.getElementById("textContent");
const imgContent = document.getElementById("imgContent");

btn1.addEventListener("click", () => {
  titleContent.innerText = `Bookmark in one click`;
  textContent.innerText = `Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.`;
  imgContent.src = "/images/illustration-features-tab-1.svg";
});
btn2.addEventListener("click", () => {
  titleContent.innerText = `Intelligent search`;
  textContent.innerText = `Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.`;
  imgContent.src = "/images/illustration-features-tab-2.svg";
});
btn3.addEventListener("click", () => {
  titleContent.innerText = `Share your bookmarks`;
  textContent.innerText = `Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.`;
  imgContent.src = "/images/illustration-features-tab-3.svg";
});

const FAQ1 = document.getElementById("FAQ1");
const FAQ1A = document.getElementById("FAQ1A");
const FAQ2 = document.getElementById("FAQ2");
const FAQ2A = document.getElementById("FAQ2A");
const FAQ3 = document.getElementById("FAQ3");
const FAQ3A = document.getElementById("FAQ3A");
const FAQ4 = document.getElementById("FAQ4");
const FAQ4A = document.getElementById("FAQ4A");

FAQ1.addEventListener("click", () => {
  FAQ1.querySelector(".fa-angle-down").classList.toggle("rotate-180");
  FAQ1A.classList.toggle("hidden");
});
FAQ2.addEventListener("click", () => {
  FAQ2.querySelector(".fa-angle-down").classList.toggle("rotate-180");
  FAQ2A.classList.toggle("hidden");
});
FAQ3.addEventListener("click", () => {
  FAQ3.querySelector(".fa-angle-down").classList.toggle("rotate-180");
  FAQ3A.classList.toggle("hidden");
});
FAQ4.addEventListener("click", () => {
  FAQ4.querySelector(".fa-angle-down").classList.toggle("rotate-180");
  FAQ4A.classList.toggle("hidden");
});

const emailInput = document.getElementById("emailInput");
const emailbtn = document.getElementById("emailbtn");
const inputDiv = document.getElementById("inputDiv");

const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

emailbtn.addEventListener("click", () => {
  // Reset previous state
  emailInput.classList.remove("border-red-500", "border-green-500");
  inputDiv.classList.remove("bg-[#fa5757ff]", "h-20");

  const oldError = inputDiv.querySelector(".error-message");
  if (oldError) oldError.remove();

  // Empty email
  if (emailInput.value.trim() === "") {
    showError("Whoops, can't be empty");
    return;
  }

  // Invalid email
  if (!re.test(emailInput.value)) {
    showError("Whoops, make sure it's an email");
    return;
  }

  // Success
  emailInput.classList.add("border-green-500");
});

function showError(message) {
  emailInput.classList.add("border-red-500");

  inputDiv.classList.add(
    "relative",
    "bg-[#fa5757ff]",
    "h-20",
    "w-full",
    "rounded-lg"
  );

  const errordiv = document.createElement("div");
  errordiv.className =
    "error-message flex items-center justify-between pl-4 text-sm font-semibold text-white";

  errordiv.innerHTML = `
    <span>${message}</span>
    <img src="/images/icon-error.svg" alt="icon-error" class="absolute right-2 top-3" />
  `;

  inputDiv.appendChild(errordiv);
}
