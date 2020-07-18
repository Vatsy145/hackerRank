`use strict`

// clear
let clearButton = document.getElementById(`btnClr`);
clearButton.addEventListener(`click`, clear);
function clear() {
  document.getElementById(`res`).innerHTML = ``;
}
// zero
let zeroButton = document.getElementById(`btn0`);
zeroButton.addEventListener(`click`, setZero);
function setZero() {
  document.getElementById(`res`).innerHTML += 0;
}
// one
let oneButton = document.getElementById(`btn1`);
oneButton.addEventListener(`click`, setOne);
function setOne() {
  document.getElementById(`res`).innerHTML += 1;
}
// +
let plusButton = document.getElementById(`btnSum`);
plusButton.addEventListener(`click`, add);
function add() {
  document.getElementById(`res`).innerHTML += `+`;
}
// -
let minusButton = document.getElementById(`btnSub`);
minusButton.addEventListener(`click`, subtract);
function subtract() {
  document.getElementById(`res`).innerHTML += `-`;
}
// *
let mulButton = document.getElementById(`btnMul`);
mulButton.addEventListener(`click`, multiply);
function multiply() {
  document.getElementById(`res`).innerHTML += `*`;
}
// /
let divButton = document.getElementById(`btnDiv`);
divButton.addEventListener(`click`, divied);
function divied() {
  document.getElementById(`res`).innerHTML += `/`;
}

// =
let equalButton = document.getElementById(`btnEql`);
equalButton.addEventListener(`click`, equal);
function equal() {
  let operator, result,
    exp = document.getElementById(`res`).innerHTML;
  // let arrayOfReasult = exp.split(/[+,-,*,/]/g);
  let numbers = exp.split(``).map(val => {
    if (val === `+` || val === `-` || val === `*` || val === `/`) {
      operator = val;
      return `OperatorBlock`;
    } else return val;
  }).join(``).split(`OperatorBlock`);
  let firstNumber = toDecimal(numbers[0]), secondNumber = toDecimal(numbers[1]);
  
  if (operator === `+`) result = firstNumber + secondNumber;
  else if(operator === `-`) result = firstNumber - secondNumber;
  else if(operator === `*`) result = firstNumber * secondNumber;
  else if(operator === `/`) result = Math.floor(numbers[0] / numbers[1]);

  if(operator === `/`) document.getElementById(`res`).innerHTML = result;
  else document.getElementById(`res`).innerHTML = toBinary(result);
}

function toBinary(n){
    let binaryArray = [];
    while(n){
        let mod = n%2;
        binaryArray.unshift(mod);
        n = Math.floor(n/2);
    }
    return binaryArray.join(``);
}

function toDecimal(n){
    return n.split(``).reverse().reduce((acc, val, idx) => {
        if(val === `1`) acc += Math.pow(2, idx)
        return acc;
    }, 0);
}
