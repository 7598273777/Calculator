let input = document.getElementById('result');

function appendNumber(number) {
  input.value += number;
}

function appendOperator(operator) {
  input.value += operator;
}

function calculate() {
  try {
    input.value = eval(input.value);
    // The eval() method evaluates or executes an argument.
  } catch (error) {
    alert('Invalid expression');
    clearInput();
  }
}

function clearInput() {
  input.value = null;
}
