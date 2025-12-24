const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const monthsToPay = document.getElementById("monthsToPay");
const result = document.getElementById("result");
const calculate = document.getElementById("calculate");
const reset = document.getElementById("reset");

calculate.addEventListener("click", () => {
    const loan = Number(loanAmount.value);
    const rate = Number(interestRate.value);
    const months = Number(monthsToPay.value);

    const money = loan + (loan * (rate / 100));
    const bill = money / months;

    result.innerText = `$${bill.toFixed(2)}`;
});

reset.addEventListener("click", () => {
    loanAmount.value = 10000;
    interestRate.value = 10;
    monthsToPay.value = 12;
    result.innerText = "$0.00";
});
