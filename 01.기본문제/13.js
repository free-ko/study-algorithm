// 대소문자 변환 하는 함수
const solution1 = (words) => {
  let result = "";
  for (let word of words) {
    if (word === word.toUpperCase()) {
      result += word.toLowerCase();
    } else {
      result += word.toUpperCase();
    }
  }

  return result;
};

const words = "StuDY";
const result1 = solution1(words);
console.log(result1);
