const currentCalculationOutput = document.getElementById('current-calculation');
const currentResultOutput = document.getElementById('current-result');

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent =  text;
}