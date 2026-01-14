const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const result = eval(display.value.replace(/x/g, "*"));
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

const slider = document.getElementById("slider");
const sliderbg = document.getElementById("sliderbg");
const equalbtn = document.getElementById("equalbtn");

const btnsdiv = document.getElementById("btnsdiv");
const btnchange = [
  document.getElementById("deletebtn"),
  document.getElementById("resetbtn"),
];
const positions = ["8px", "25px", "45px"];
let current = 0;
const bgColorClasses = ["bg-[#3a4764]", "bg-[#e6e6e6]", "bg-[#160628]"];
const sliderColorClasses = ["bg-[#232c43]", "bg-[#ededed]", "bg-[#1d0934]"];
const btnsdivColorClasses = ["bg-[#232c43]", "bg-[#d1cccc]", "bg-[#1d0934]"];
const sliderbgColorClasses = ["bg-[#d03f2f]", "bg-[#ca5502]", "bg-[#00e0d1]"];
const sliderbgshadowClasses = [
  "shadow-[0px_3px_0px_0px_#93261a]",
  "shadow-[0px_3px_0px_0px_#893901]",
  "shadow-[0px_3px_0px_0px_#6cf9f2]",
];
const btnchangeColorClasses = ["bg-[#637097]", "bg-[#377f86]", "bg-[#58077d]"];
const btnchangeshadowClasses = [
  "shadow-[0px_3px_0px_0px_#404e72]",
  "shadow-[0px_3px_0px_0px_#1b5f65]",
  "shadow-[0px_3px_0px_0px_#bc15f4]",
];
const allbtns = document.querySelectorAll("#btnnum");
const allbtnsColorClasses = ["bg-[#e6e6e6]", "bg-[#e6e6e6]", "bg-[#341c4f]"];
const allbtnsshadowClasses = [
  "shadow-[0px_3px_0px_0px_#b4a597]",
  "shadow-[0px_3px_0px_0px_#b4a597]",
  "shadow-[0px_3px_0px_0px_#871c9c]",
];

const alltext = [...allbtns, display, document.getElementById("header")];
const alltextColorClasses = [
  "text-[#444b5a]",
  "text-[#1b2428]",
  "text-[#ffe53d]",
];
function applyTheme(index) {
  slider.style.left = positions[index];

  document.body.classList.remove(...bgColorClasses);
  document.body.classList.add(bgColorClasses[index]);

  display.classList.remove(...sliderColorClasses);
  display.classList.add(sliderColorClasses[index]);

  btnsdiv.classList.remove(...btnsdivColorClasses);
  btnsdiv.classList.add(btnsdivColorClasses[index]);

  sliderbg.classList.remove(...btnsdivColorClasses);
  sliderbg.classList.add(btnsdivColorClasses[index]);

  slider.classList.remove(...sliderbgColorClasses);
  slider.classList.add(sliderbgColorClasses[index]);

  equalbtn.classList.remove(...sliderbgColorClasses, ...sliderbgshadowClasses);
  equalbtn.classList.add(
    sliderbgColorClasses[index],
    sliderbgshadowClasses[index]
  );

  btnchange.forEach((btn) => {
    btn.classList.remove(...btnchangeColorClasses, ...btnchangeshadowClasses);
    btn.classList.add(
      btnchangeColorClasses[index],
      btnchangeshadowClasses[index]
    );
  });

  allbtns.forEach((btn) => {
    btn.classList.remove(...allbtnsColorClasses, ...allbtnsshadowClasses);
    btn.classList.add(allbtnsColorClasses[index], allbtnsshadowClasses[index]);
  });

  alltext.forEach((el) => {
    el.classList.remove(...alltextColorClasses);
    el.classList.add(alltextColorClasses[index]);
  });
}
slider.addEventListener("click", () => {
  current = (current + 1) % positions.length;
  applyTheme(current);
  localStorage.setItem("calculatorTheme", current);
});

const savedTheme = localStorage.getItem("calculatorTheme");
if (savedTheme !== null) {
  current = Number(savedTheme);
  applyTheme(current);
}
