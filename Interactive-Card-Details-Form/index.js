function validateCardNumber() {
  const raw = numberInput.value.replace(/\D/g, "");
  let valid = true;

  if (raw.length !== 16) {
    numberInput.style.borderColor = "red";
    numberSpan.innerText = "Card number must be 16 digits";
    valid = false;
  } else {
    numberInput.style.borderColor = "green";
    numberSpan.innerText = "";
  }

  const formatted = raw.replace(/(.{4})/g, "$1 ").trim();
  cardNumber.innerText = formatted || "0000 0000 0000 0000";

  return valid;
}

function validateName() {
  const value = nameInput.value.trim();
  let valid = true;

  if (value === "" || /\d/.test(value)) {
    nameInput.style.borderColor = "red";
    valid = false;
  } else {
    nameInput.style.borderColor = "green";
  }

  cardHolderName.innerText = value || "Jane Appleseed";
  return valid;
}

function validateMonth() {
  const value = parseInt(ExpMonth.value, 10);
  let valid = true;

  if (isNaN(value) || value < 1 || value > 12) {
    ExpMonth.style.borderColor = "red";
    valid = false;
  } else {
    ExpMonth.style.borderColor = "green";
  }

  month.innerText = ExpMonth.value || "00";
  return valid;
}

function validateYear() {
  const value = parseInt(ExpYear.value, 10);
  let valid = true;

  if (isNaN(value) || value <= 25 || value > 50) {
    ExpYear.style.borderColor = "red";
    valid = false;
  } else {
    ExpYear.style.borderColor = "green";
  }

  year.innerText = ExpYear.value || "00";
  return valid;
}
const cvc = document.getElementById("cvc");
function validateCVC() {
  const value = cvc.value.trim();
  let valid = true;

  if (!/^\d{3,4}$/.test(value)) {
    cvc.style.borderColor = "red";
    valid = false;
  } else {
    cvc.style.borderColor = "green";
  }

  return valid;
}
numberInput.addEventListener("input", validateCardNumber);
nameInput.addEventListener("input", validateName);
ExpMonth.addEventListener("input", validateMonth);
ExpYear.addEventListener("input", validateYear);
cvc.addEventListener("input", validateCVC);

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const valid =
    validateCardNumber() &&
    validateName() &&
    validateMonth() &&
    validateYear() &&
    validateCVC();

  if (valid) {
    const formSection = document.getElementById("formSection");
    const main = document.getElementById("main");
    const thankYou = document.createElement("section");

    formSection.style.display = "none";

    thankYou.id = "thankYou";
    thankYou.innerHTML = ` 
   <div class="flex justify-center items-center flex-col space-y-6">
    <img src="/images/icon-complete.svg" alt="icon-complete" />
    <h1 class="font-semibold tracking-widest text-2xl">THANK YOU!</h1>
    <h3 class="text-[#acb4beff]">We've added your card details</h3>
    <button class="bg-[#21092fff] text-white w-full rounded-md py-2">
      Continue
    </button>
   </div>
  `;
    main.appendChild(thankYou);
  } else {
    alert("Please fix the errors in the form.");
  }
});
