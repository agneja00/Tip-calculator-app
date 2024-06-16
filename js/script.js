import { validateInputs } from "./validateInputs.js";

const bill = document.querySelector("#bill");
const tipsContainer = document.querySelector(".tips-container");
const tips = document.querySelectorAll(".tips-container__tip");
const tipCustom = document.querySelector(".tips-container__tip--custom");
const numberOfPeople = document.querySelector("#people");
const billErrorMessage = document.querySelector(
  ".fill-container__bill-error-message"
);
const peopleErrorMessage = document.querySelector(
  ".fill-container__people-error-message"
);
const tipAmount = document.querySelector(".total-container__amount--tip");
const totalAmount = document.querySelector(".total-container__amount--total");
const resetBtn = document.querySelector(".total-container__btn");

let tip = 0;

function removeOrAddFocusStyle(event) {
  tips.forEach((tip) => {
    tip.classList.remove('tips-container__tip--active');
  });

  if (event.target.classList.contains('tips-container__tip')) {
    event.target.classList.add('tips-container__tip--active');
  }
}
function resetValues() {
  resetBtn.removeAttribute("disabled");

  resetBtn.onclick = () => {
    resetBtn.setAttribute("disabled", "true");
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    bill.value = "";
    tipCustom.value = "";
    numberOfPeople.value = "";
    billErrorMessage.textContent = "";
    bill.style.outline = "none";
    peopleErrorMessage.textContent = "";
    numberOfPeople.style.outline = "none";
    tips.forEach((tipPercentage) => {
      tipPercentage.classList.remove("tips-container__tip--active");
    });
  };
}

function countTipPercentage() {
  tipsContainer.addEventListener('click', (event) => {
    const tipValue = event.target.getAttribute('data-tip-value');

    if (tipValue === '5') {
      tip = 5;
    } else if (tipValue === '10') {
      tip = 10;
    } else if (tipValue === '15') {
      tip = 15;
    } else if (tipValue === '25') {
      tip = 25;
    } else if (tipValue === '50') {
      tip = 50;
    } else {
      tip = tipCustom.value;
    }

    removeOrAddFocusStyle(event);
    resetValues();
  });
}
countTipPercentage();

export function countAndDisplayTipSumAndTotalSum() {
  countTipPercentage();

  let tipSum = ((bill.value / 100) * tip) / numberOfPeople.value;
  tipAmount.textContent = "$" + tipSum.toFixed(2);

  let totalSum = bill.value / numberOfPeople.value + tipSum;
  totalAmount.textContent = "$" + totalSum.toFixed(2);
}

numberOfPeople.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    validateInputs();
  }
});

window.addEventListener("change", () => {
  if (bill.value || numberOfPeople.value) {
    resetValues();
  } else {
    resetBtn.setAttribute("disabled", "true");
  }
});
