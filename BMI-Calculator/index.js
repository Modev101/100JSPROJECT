const height = document.getElementById("height");
const weight = document.getElementById("weight");
const convertBtn = document.getElementById("convertBtn");
const bmiValue = document.getElementById("bmiValue");
const result = document.getElementById("result");
const error = document.getElementById("error");

function countBMI() {

  error.innerText = "";

  const h = Number(height.value);
  const w = Number(weight.value);

  if (!h || !w || h <= 0 || w <= 0) {
    bmiValue.innerText = "";
    result.innerText = "";
    error.innerText = "Please enter valid height and weight";
    return;
  }

  const heightMeters = h / 100;
  const bmi = w / (heightMeters ** 2);
  const roundedBMI = bmi.toFixed(1);

  bmiValue.innerText = roundedBMI;

  if (bmi < 18.5) {
    result.innerText = "Underweight";
  } else if (bmi <= 24.9) {
    result.innerText = "Normal weight";
  } else if (bmi <= 29.9) {
    result.innerText = "Overweight";
  } else {
    result.innerText = "Obese";
  }
}

convertBtn.addEventListener("click", countBMI);
