const sidebar = document.getElementById("popphone");
const toggleBtn = document.getElementById("menuphone");
const closeBtn = document.getElementById("closebtnphone");
const overlay = document.getElementById("overlay");
const cart = document.getElementById("cart");
const cartbasket = document.getElementById("cartbasket");
const mainpicture = document.getElementById("mainpicture");
const previousbtn = document.getElementById("previousbtn");
const nextbtn = document.getElementById("nextbtn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("opacity-0", "pointer-events-none");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("opacity-0", "pointer-events-none");
  }
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("opacity-0", "pointer-events-none");
});

cart.addEventListener("click", () => {
  cartbasket.classList.toggle("hidden");
});

let currentIndex = 1;
const totalImages = 4;

nextbtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex > totalImages) {
    currentIndex = 1;
  }

  mainpicture.src = `/images/image-product-${currentIndex}.jpg`;
});

previousbtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 1) {
    currentIndex = totalImages;
  }

  mainpicture.src = `/images/image-product-${currentIndex}.jpg`;
});

const thumbnails = document
  .getElementById("thumbnails")
  .querySelectorAll("img");

thumbnails.forEach((img, index) => {
  img.addEventListener("click", () => {
    thumbnails.forEach((thumb) =>
      thumb.classList.remove("border-orange-500", "opacity-50")
    );

    mainpicture.src = `/images/image-product-${index + 1}.jpg`;
    img.classList.add("border-orange-500", "opacity-50");
  });
});

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const itemcount = document.getElementById("itemcount");
const popcart = document.getElementById("popcart");
const addtocart = document.getElementById("addtocart");
let count = 0;

const span = document.createElement("span");
span.classList.add(
  "bg-[#ff7d1aff]",
  "rounded-full",
  "text-white",
  "px-1",
  "h-4",
  "text-xs",
  "absolute",
  "top-6",
  "right-[75px]",
  "lg:right-[130px]"
);
span.innerText = count;
popcart.appendChild(span);
span.style.display = "none";

function updateCount() {
  itemcount.innerText = count;
  if (count === 0) {
    span.style.display = "none";
  } else {
    span.style.display = "inline-block";
    span.innerText = count;
  }
}

plus.addEventListener("click", () => {
  count++;
  updateCount();
});
minus.addEventListener("click", () => {
  if (count > 0) count--;
  updateCount();
});

const emptycart = document.getElementById("emptycart");

addtocart.addEventListener("click", () => {
  if (count === 0) return;
  if (window.innerWidth < 768) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  emptycart.style.display = "none";
  cartbasket.innerHTML = "";
  cartbasket.classList.remove("hidden");

  const cartdiv = document.createElement("div");
  cartdiv.classList.add("flex", "flex-col", "justify-center", "items-center");

  cartdiv.innerHTML = `
    <div class="flex justify-center items-center p-7 space-x-4">
      <div>
        <img src="/images/image-product-1-thumbnail.jpg" alt="product-1" class="h-16 w-20" />
      </div>
      <div>
        <h1 class="text-gray-500 font-medium">Fall Limited Edition Sneakers</h1>
        <p class="text-gray-500 font-medium">
          $125.00 x ${count} <span class="text-black font-semibold">$${
    125 * count
  }</span>
        </p>
      </div>
      <div>
        <i class="fa-solid fa-trash-can hover:text-red-600 cursor-pointer" id="trash"></i>
      </div>
    </div>
    <button id="checkoutBtn" class="bg-[#ff7d1aff] w-11/12 rounded-lg font-semibold py-2 mb-5 hover:opacity-70">
      Checkout
    </button>
  `;

  cartbasket.appendChild(cartdiv);

  const trash = cartdiv.querySelector("#trash");
  trash.addEventListener("click", () => {
    cartbasket.innerHTML = "";
    emptycart.style.display = "block";
    count = 0;
    updateCount();
  });

  const checkout = cartdiv.querySelector("#checkoutBtn");
  checkout.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add(
      "fixed",
      "inset-0",
      "bg-black",
      "bg-opacity-50",
      "flex",
      "justify-center",
      "items-center",
      "z-50"
    );

    const card = document.createElement("div");
    card.classList.add(
      "bg-white",
      "rounded-xl",
      "p-10",
      "w-11/12",
      "max-w-md",
      "text-center",
      "space-y-6"
    );

    card.innerHTML = `
      <h1 class="text-3xl font-bold text-gray-900">Thank You!</h1>
      <p class="text-gray-600">Your order has been placed successfully.</p>
      <button id="closeThankYou" class="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:opacity-80 font-semibold">
        Close
      </button>
    `;

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    cartbasket.innerHTML = "";
    emptycart.style.display = "block";
    count = 0;
    updateCount();

    document.getElementById("closeThankYou").addEventListener("click", () => {
      overlay.remove();
    });
  });
});

