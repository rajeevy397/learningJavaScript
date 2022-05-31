const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc}  ${operator}  ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newNumber
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newNumber,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, currentResult);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function sub() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, currentResult);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function mul() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, currentResult);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function div() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, currentResult);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subBtn.addEventListener('click', sub);
mulBtn.addEventListener('click', mul);
divBtn.addEventListener('click', div);
