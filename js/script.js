import { validateInputs } from "./validateInputs.js";

const bill = document.querySelector("#bill");
const tips = document.querySelectorAll(".tips-container__tip");
const tipFive = document.querySelector(".tips-container__tip--five");
const tipTen = document.querySelector(".tips-container__tip--ten");
const tipFifteen = document.querySelector(".tips-container__tip--fifteen");
const tipTwentyFive = document.querySelector(
  ".tips-container__tip--twenty-five"
);
const tipFifty = document.querySelector(".tips-container__tip--fifty");
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
  tips.forEach((tipPercentage) => {
    tipPercentage.classList.remove("tips-container__tip--active");
  });

  event.target.classList.add("tips-container__tip--active");
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
  tipFive.addEventListener("click", (event) => {
    tip = 5;
    removeOrAddFocusStyle(event);
    resetValues();
  });

  tipTen.addEventListener("click", (event) => {
    tip = 10;
    removeOrAddFocusStyle(event);
    resetValues();
  });

  tipFifteen.addEventListener("click", (event) => {
    tip = 15;
    removeOrAddFocusStyle(event);
    resetValues();
  });

  tipTwentyFive.addEventListener("click", (event) => {
    tip = 25;
    removeOrAddFocusStyle(event);
    resetValues();
  });

  tipFifty.addEventListener("click", (event) => {
    tip = 50;
    removeOrAddFocusStyle(event);
    resetValues();
  });

  tipCustom.addEventListener("input", (event) => {
    tip = tipCustom.value;
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
