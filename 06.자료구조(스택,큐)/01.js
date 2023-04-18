// 올바른 괄호
// (())() : YES
// (()())) : NO

const solution1 = (brackets) => {
  let result = "YES";
  const stack = [];

  for (let bracket of brackets) {
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (stack.length !== 0) {
        stack.pop();
      } else {
        return "NO";
      }
    }
  }

  if (stack.length !== 0) {
    return "NO";
  }

  return result;
};

const solution2 = (brackets) => {
  let result = "YES";
  const stack = [];

  for (let bracket of brackets) {
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (stack.length === 0) {
        return "NO";
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length > 0) {
    return "NO";
  }

  return result;
};

const solution3 = (brakets) => {
  const stack = [];

  for (let bracket of brakets) {
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return "NO";
      }
    }
  }

  if (stack.length > 0) {
    return "NO";
  }

  return "YES";
};

const brakets1 = "(())()";
const brakets2 = "(()()))";
const brakets3 = "((((()()))";
const result3 = solution3(brakets2);
console.log(result3);
