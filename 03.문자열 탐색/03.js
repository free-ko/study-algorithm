// 문자 속에 숫자를 출력
// 출력한 숫자 중에 0123이 있다면, 123으로 출력

const solution1 = (words) => parseInt(words.replace(/[a-zA-Z]/g, ""));
const solution2 = (words) => {
  let result = "";
  for (let word of words) {
    if (!isNaN(word)) {
      result += word;
    }
  }

  return parseInt(result);
};

const solution3 = (words) => {
  let result = 0;
  for (let word of words) {
    if (!isNaN(word)) {
      result = result * 10 + Number(word);
    }
  }

  return result;
};

const words = "g000en2T0s8eSoft";
const results3 = solution3(words);
console.log(results3);
