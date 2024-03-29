// 쇠 막대기
const solution1 = (stick) => {
  let result = 0;
  const stack = [];

  for (let i = 0; i < stick.length; i++) {
    if (stick[i] === "(") {
      stack.push(stick[i]);
    } else {
      stack.pop();
      if (stick[i - 1] === "(") {
        // 레이저
        result += stack.length;
      } else {
        // 막대기 끝
        result += 1;
      }
    }
  }

  return result;
};

const solution2 = (stick) => {
  let count = 0;
  const stack = [];

  for (let i = 0; i < stick.length; i++) {
    if (stick[i] === "(") {
      stack.push(stick[i]);
    } else if (stick[i] === ")") {
      stack.pop();

      if (stick[i - 1] === "(") {
        count += stack.length;
      } else if (stick[i] === ")") {
        count += 1;
      }
    }
  }

  return count;
};

const stick = "()(((()())(())()))(())";
const result1 = solution2(stick);
console.log(result1);
