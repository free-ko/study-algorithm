// N개의 문자열이 입력되면, 그 중 가장 긴 문자열을 출력
const solution1 = (words) => {
  let result = "";

  for (let word of words) {
    if (result.length < word.length) {
      result = word;
    }
  }

  return result;
};

const solution2 = (words) => {
  let result;
  let max = Number.MIN_SAFE_INTEGER;

  for (let word of words) {
    if (word.length > max) {
      max = word.length;
      result = word;
    }
  }

  return result;
};

const words = ["teacher", "time", "student", "beautiful", "good"];
const result2 = solution2(words);
console.log(result2);
