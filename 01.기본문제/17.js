// 중복 단어 제거
// N개의 문자열이 입력되면, 중복된 문자열은 제거하고 출력하는 프로그램
const solution1 = (words) => {
  const result = [];
  const wordsCount = words.length;
  if (wordsCount < 3 || wordsCount > 31) {
    return "문자는 최소 3개, 최대 30개만 받을 수 있습니다.";
  }
  for (let i = 0; i < wordsCount; i++) {
    if (words.indexOf(words[i]) === i) {
      result.push(words[i]);
    }
  }

  return result;
};

const solution2 = (words) => {
  let answer;
  answer = words.filter((word, idx) => {
    return words.indexOf(word) === idx;
  });

  return answer;
};

const solution3 = (words) =>
  words.filter((word, idx) => words.indexOf(word) === idx);

const words = ["good", "time", "good", "time", "student"];
const result3 = solution3(words);
console.log(result3);
