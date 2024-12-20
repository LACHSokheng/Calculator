let displayValue = "";

window.appendNumber = function (number) {
  if (displayValue === "0") {
    displayValue = "" + number;
  } else {
    displayValue += number;
  }
  updateDisplay();
};

window.appendOperator = function (operator) {
  if (displayValue === "") return;
  const lastChar = displayValue[displayValue.length - 1];
  if ("+-*/".includes(lastChar)) {
    displayValue = displayValue.slice(0, -1) + operator;
  } else {
    displayValue += operator;
  }
  updateDisplay();
};

window.appendDecimal = function () {
  if (!displayValue.includes(".")) {
    displayValue += ".";
    updateDisplay();
  }
};

window.calculate = function () {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
};

window.clearDisplay = function () {
  displayValue = "";
  updateDisplay();
};

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue || "0";
}
