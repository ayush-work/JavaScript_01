const defaultValue = 0;
let currentResult = defaultValue;

function addValue() {
  const enteredValue = parseInt(userInput.value);
  const calcLog = `${currentResult}+ ${enteredValue}`;
  currentResult = currentResult + enteredValue;
  outputResult(currentResult, calcLog);
}

function subValue() {
  const enteredValue = parseInt(userInput.value);
  const calcLog = `${currentResult}- ${enteredValue}`;
  currentResult = currentResult - enteredValue;
  outputResult(currentResult, calcLog);
}

function mulValue() {}
function divValue() {}

addBtn.addEventListener("click", addValue);
subtractBtn.addEventListener("click", subValue);
