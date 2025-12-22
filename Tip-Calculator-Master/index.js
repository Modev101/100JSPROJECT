const billprice = document.getElementById("billprice");
const numberOfPeople = document.getElementById("numberOfPeople");
const customdiscount = document.getElementById("customdiscount");

const billError = document.getElementById("billError");
const peopleError = document.getElementById("peopleError");

const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("total");
const reset = document.getElementById("reset");

const discountbtn = [
    document.getElementById("discountbtn5"),
    document.getElementById("discountbtn10"),
    document.getElementById("discountbtn15"),
    document.getElementById("discountbtn25"),
    document.getElementById("discountbtn50"),
];

discountbtn.forEach(btn => {
    btn.classList.add(
        "bg-[#00494d]",
        "text-white",
        "py-2",
        "rounded-md",
        "font-bold",
        "hover:bg-[#26c0ab]",
        "transition"
    );

    btn.addEventListener("click", () => {
        discountbtn.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

function calculateTip(rate) {
    const bill = Number(billprice.value);
    const people = Number(numberOfPeople.value);

    let valid = true;

    if (bill <= 0) {
        billError.innerText = "Not valid";
        billprice.style.borderColor = "red";
        valid = false;
    } else {
        billError.innerText = "";
    }

    if (people <= 0) {
        peopleError.innerText = "Not valid";
        numberOfPeople.style.borderColor = "red";
        valid = false;
    } else {
        peopleError.innerText = "";
    }

    if (!valid) return;

    const perPerson = bill / people;
    const tip = perPerson * rate;

    tipAmount.innerText = `$${tip.toFixed(2)}`;
    total.innerText = `$${(perPerson + tip).toFixed(2)}`;
}

discountbtn[0].addEventListener("click", () => calculateTip(0.05));
discountbtn[1].addEventListener("click", () => calculateTip(0.10));
discountbtn[2].addEventListener("click", () => calculateTip(0.15));
discountbtn[3].addEventListener("click", () => calculateTip(0.25));
discountbtn[4].addEventListener("click", () => calculateTip(0.50));

customdiscount.addEventListener("input", () => {
    discountbtn.forEach(b => b.classList.remove("active"));
    const rate = Number(customdiscount.value) / 100;
    if (rate >= 0) calculateTip(rate);
});

reset.addEventListener("click", () => {
    billprice.value = "";
    numberOfPeople.value = "";
    customdiscount.value = "";

    billError.innerText = "";
    peopleError.innerText = "";

    tipAmount.innerText = "$0.00";
    total.innerText = "$0.00";

    billprice.style.borderColor = "";
    numberOfPeople.style.borderColor = "";

    discountbtn.forEach(b => b.classList.remove("active"));
});
