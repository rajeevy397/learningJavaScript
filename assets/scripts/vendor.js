const userInput =  document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');

const currentCalculationOutput = document.getElementById('current-calculation');
const currentResultOutput = document.getElementById('current-result');

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent =  text;
}