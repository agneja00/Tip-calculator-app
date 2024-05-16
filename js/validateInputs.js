import { countAndDisplayTipSumAndTotalSum } from "./script.js";

const bill = document.querySelector("#bill");
const billErrorMessage = document.querySelector(
  ".fill-container__bill-error-message"
);
const numberOfPeople = document.querySelector("#people");
const peopleErrorMessage = document.querySelector(
  ".fill-container__people-error-message"
);

export function validateInputs() {
  if (bill.value === "0") {
    billErrorMessage.textContent = "Can't be zero";
    bill.style.outline = "2px solid hsl(0, 100%, 50%)";
    bill.addEventListener("focus", function () {
      bill.style.outline = "2px solid hsl(0, 100%, 50%)";
    });
    bill.addEventListener("blur", function () {
      bill.style.outline = "2px solid hsl(0, 100%, 50%)";
    });
  } else {
    billErrorMessage.textContent = "";
    bill.style.outline = "none";
    bill.addEventListener("focus", function () {
      bill.style.outline = "2px solid hsl(172, 67%, 45%)";
    });
    bill.addEventListener("blur", function () {
      bill.style.outline = "none";
    });
  }

  if (numberOfPeople.value === "0") {
    peopleErrorMessage.textContent = "Can't be zero";
    numberOfPeople.style.outline = "2px solid hsl(0, 100%, 50%)";

    numberOfPeople.addEventListener("focus", function () {
      numberOfPeople.style.outline = "2px solid hsl(0, 100%, 50%)";
    });
    numberOfPeople.addEventListener("blur", function () {
      numberOfPeople.style.outline = "2px solid hsl(0, 100%, 50%)";
    });
  } else {
    peopleErrorMessage.textContent = "";
    numberOfPeople.style.outline = "none";
    numberOfPeople.addEventListener("focus", function () {
      numberOfPeople.style.outline = "2px solid hsl(172, 67%, 45%)";
    });
    numberOfPeople.addEventListener("blur", function () {
      numberOfPeople.style.outline = "none";
    });
  }

  if (
    bill.value !== "0" &&
    bill.value !== "" &&
    numberOfPeople.value !== "0" &&
    numberOfPeople !== ""
  ) {
    countAndDisplayTipSumAndTotalSum();
  }
}
