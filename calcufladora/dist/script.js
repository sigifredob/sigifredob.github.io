let result = document.getElementById("result");

function appendSymbol(symbol) {
  result.value += symbol;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  let expression = result.value;
  let operators = ["+", "-", "*", "/"];

  for (let i = 0; i < operators.length; i++) {
    let operatorIndex = expression.indexOf(operators[i]);
    if (operatorIndex !== -1) {
      let leftOperand = parseFloat(expression.substring(0, operatorIndex));
      let rightOperand = parseFloat(expression.substring(operatorIndex + 1));
      let resultValue = 0;

      switch (operators[i]) {
        case "+":
          resultValue = leftOperand + rightOperand;
          break;
        case "-":
          resultValue = leftOperand - rightOperand;
          break;
        case "*":
          resultValue = leftOperand * rightOperand;
          break;
        case "/":
          resultValue = leftOperand / rightOperand;
          break;
      }

      result.value = resultValue.toString();
      break;
    }
  }
}