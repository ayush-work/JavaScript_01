const defaultValue = 0;
let currentResult = defaultValue;

function userValue() {
  return parseInt(userInput.value);
}

function calculationLog(operator, resultBeforeCalc, calcNumber) {
  const calcDesc = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDesc);
}
let operators = ["+", "-", "*", "/"];

let logEntries = [];
function logEntry(text, initResult, finalResult, num) {
  let operatorObj = {
    operation: text,
    prevResult: initResult,
    result: finalResult,
    number: num,
  };
  logEntries.push(operatorObj);
  console.log(logEntries);
}
function addValue() {
  const enteredValue = userValue();
  const initialResult = currentResult;
  currentResult = currentResult + enteredValue;
  calculationLog(operators[0], initialResult, enteredValue);
  logEntry("ADD", initialResult, currentResult, enteredValue);
}

function subValue() {
  const enteredValue = userValue();
  const initialResult = currentResult;
  currentResult = currentResult - enteredValue;
  calculationLog(operators[1], initialResult, enteredValue);
  logEntry("SUB", initialResult, currentResult, enteredValue);
}

function mulValue() {
  const enteredValue = userValue();
  const initialResult = currentResult;
  currentResult = currentResult * enteredValue;
  calculationLog(operators[2], initialResult, enteredValue);
  logEntry("MULTIPLY", initialResult, currentResult, enteredValue);
}
function divValue() {
  const enteredValue = userValue();
  const initialResult = currentResult;
  currentResult = currentResult / enteredValue;
  calculationLog(operators[3], initialResult, enteredValue);
  logEntry("DIVISION", initialResult, currentResult, enteredValue);
}

addBtn.addEventListener("click", addValue);
subtractBtn.addEventListener("click", subValue);
multiplyBtn.addEventListener("click", mulValue);
divideBtn.addEventListener("click", divValue);
