const buttons = document.querySelectorAll("button");

const screenDisplay = document.querySelector(".screen");

let calculation = [];
let clearCalc = [];

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    clearCalc = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    screenDisplay.textContent = eval(clearCalc);
  } else {
    if (clearCalc.length <= 9) {
      calculation.push(value);
      clearCalc = calculation.join("");
      screenDisplay.textContent = clearCalc;
      calculation = [];
      calculation.push(clearCalc);
    }
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
