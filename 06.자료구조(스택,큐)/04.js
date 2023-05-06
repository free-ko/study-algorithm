// 후위 연산자로 계산하기
// ex) 3*(5+2)-9를 후위연산자로 표현하면 352+*9-로 표현되며 결과는 12
const createOperator = (operator) => {
  switch (operator) {
    case "+":
      return (a, b) => a + b;
    case "-":
      return (a, b) => a - b;
    case "*":
      return (a, b) => a * b;
    case "/":
      return (a, b) => a / b;
  }
};

const solution1 = (test) => {
  const stack = [];

  for (let value of test) {
    const numberValue = parseInt(value, 10);
    const isOperator = isNaN(numberValue);

    if (isOperator) {
      const rightValue = stack.pop();
      const leftValue = stack.pop();
      const operator = createOperator(value);
      const resultValue = operator(leftValue, rightValue);
      stack.push(resultValue);
    } else {
      stack.push(numberValue);
    }
  }

  return stack[0];
};

const test1 = "352+*9-";
const result1 = solution1(test1);
console.log(result1);
