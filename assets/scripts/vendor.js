const usrInput =  document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subBtn = document.getElementById('btn-subtract');
const mulBtn = document.getElementById('btn-multiply');
const divBtn = document.getElementById('btn-divide');

const currentCalculationOutput = document.getElementById('current-calculation');
const currentResultOutput = document.getElementById('current-result');

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent =  text;
}