// 중복문자 제거
// 중복된 문자 제거하고 출력
const solution1 = (words) => {
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (i === words.indexOf(words[i])) {
      result += words[i];
    }
  }

  return result;
};

// 특정 문자에 해당 문자 중복 카운팅
const solution2 = (words, word) => {
  let answer = 0;
  let pos = words.indexOf(word);

  while (pos !== -1) {
    answer++;
    pos = words.indexOf(word, pos + 1);
  }

  return answer;
};

const words = "ksekkset";
const result2 = solution2(words, "k");
console.log(result2);
