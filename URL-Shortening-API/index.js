const menubar = document.getElementById("menubar");
let menu = null;

menubar.addEventListener("click", () => {
  if (menu) {
    menu.remove();
    menu = null;
    return;
  }

  menu = document.createElement("div");
  menu.classList.add(
    "bg-[#3b3054]",
    "absolute",
    "left-[9%]",
    "w-10/12",
    "z-10",
    "p-5",
    "top-20",
    "rounded-xl",
    "space-y-5",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "text-white"
  );

  menu.innerHTML = `
      <div class="space-y-2 font-semibold">
        <p class="hover:text-[#2acfcf] cursor-pointer text-center">Features</p>
        <p class="hover:text-[#2acfcf] cursor-pointer text-center">Pricing</p>
        <p class="hover:text-[#2acfcf] cursor-pointer text-center">Resources</p>
      </div>
    
      <div class="flex flex-col space-y-3 items-center justify-center">
        <button class="text-gray-500 font-semibold hover:text-black">
          Login
        </button>
        <button
          class="bg-[#2acfcf] text-white px-6 py-2 rounded-full font-semibold hover:opacity-70"
        >
          Sign Up
        </button>
      </div>
    `;

  document.body.appendChild(menu);
});

const shortenbox = document.getElementById("shortenbox");
const shortenbtn = document.getElementById("shortenbtn");
const errorespan = document.getElementById("erroespan");

// Create container for results
let linkHistoryEl = document.getElementById("resultsContainer");
if (!linkHistoryEl) {
  linkHistoryEl = document.createElement("div");
  linkHistoryEl.id = "resultsContainer";
  linkHistoryEl.classList.add(
    "max-w-6xl",
    "mx-auto",
    "mt-10",
    "space-y-4",
    "px-6"
  );
  shortenbox.parentElement.parentElement.appendChild(linkHistoryEl);
}

function getUrlInput() {
  return shortenbox.value.trim();
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

async function shortenUrl(userUrl) {
  const apiUrl =
    "https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten";
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ url: userUrl }),
    });

    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();
    displayToLinksHistory(userUrl, data);
  } catch (err) {
    console.error("Error shortening URL:", err);
  }
}

function displayToLinksHistory(originalLink, urlData) {
  const linkItem = document.createElement("div");
  linkItem.classList.add(
    "bg-white",
    "p-4",
    "rounded-lg",
    "flex",
    "justify-between",
    "items-center",
    "flex-col",
    "md:flex-row",
    "gap-2"
  );

  linkItem.innerHTML = `
    <p class="text-gray-800 break-all">${originalLink}</p>
    <div class="flex gap-2 flex-col md:flex-row items-center">
      <p class="text-[#2acfcf]">${urlData.result_url}</p>
      <button class="copy-link-btn bg-[#2acfcf] text-white px-4 py-1 rounded hover:opacity-80">Copy</button>
    </div>
  `;

  linkHistoryEl.appendChild(linkItem);

  // Copy button functionality
  linkItem.querySelector(".copy-link-btn").addEventListener("click", (e) => {
    navigator.clipboard.writeText(urlData.result_url);
    e.target.textContent = "Copied!";
    e.target.classList.remove("bg-[#2acfcf]");
    e.target.classList.add("bg-[#3b3054]");
    setTimeout(() => {
      e.target.textContent = "Copy";
      e.target.classList.remove("bg-[#3b3054]");
      e.target.classList.add("bg-[#2acfcf]");
    }, 1500);
  });
}

shortenbtn.addEventListener("click", () => {
  const userUrl = shortenbox.value.trim();
  if (!userUrl || !isValidUrl(userUrl)) {
    errorespan.classList.remove("hidden");
    shortenbox.classList.add("border-red-500");
  } else {
    errorespan.classList.add("hidden");
    shortenbox.classList.remove("border-red-500");
    shortenUrl(userUrl);
    shortenbox.value = "";
  }
});

