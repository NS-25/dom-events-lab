const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const equal = document.querySelector('.equals')

let isLastOperator = false;

numbers.forEach(element => {
  element.addEventListener('click', function () {
    let keypadValue = element.textContent;
    let screenValue = display.innerText;
    isLastOperator = false;

    if (screenValue === '0') {
      display.innerText = keypadValue;
    } else {
      display.innerText += keypadValue;
    }
  })
});

function reset() {
  display.innerText = '';
  isLastOperator = false;
}

operators.forEach(element => {
  element.addEventListener('click', function () {
    let operator = element.textContent;

    if (operator === "C") {
      reset();
    } else if (isLastOperator == false) {
      display.innerText += operator;
      isLastOperator = true;
    }

  })
})

equal.addEventListener('click', function () {
  display.innerText = eval(display.textContent)
})

