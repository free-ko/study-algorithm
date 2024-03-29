// 괄호 문자 제거
// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력

const solution1 = (words) => {
  let result;
  const stack = [];

  for (let word of words) {
    if (word === ")") {
      while (stack.pop() !== "(") {}
    } else {
      stack.push(word);
    }
  }

  result = stack.join("");
  return result;
};

const solution2 = (words) => {
  const stack = [];
  let result;

  for (let word of words) {
    if (word === ")") {
      let popWord = stack.pop();

      while (popWord !== "(") {
        popWord = stack.pop();
      }
    } else {
      stack.push(word);
    }
  }

  result = stack.join("");
  return result;
};

const solution3 = (words) => {
  let result;
  const stack = [];

  for (let word of words) {
    if (word === ")") {
      let popWord = stack.pop();

      while (popWord !== "(") {
        popWord = stack.pop();
      }
    } else {
      stack.push(word);
    }
  }

  result = stack.join("");
  return result;
};

const words = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
const result3 = solution3(words);
console.log(result3);
