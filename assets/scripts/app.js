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

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;

  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    enteredNumber ===0
  ) {
    return;
  }

  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    calculationOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    calculationOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    calculationOperator = '*';
  } else {
    currentResult /= enteredNumber;
    calculationOperator = '/';
  }
  createAndWriteOutput(calculationOperator, initialResult, currentResult);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function sub() {
  calculateResult('SUBTRACT');
}

function mul() {
  calculateResult('MULTIPLY');
}

function div() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subBtn.addEventListener('click', sub);
mulBtn.addEventListener('click', mul);
divBtn.addEventListener('click', div);
