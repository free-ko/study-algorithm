// 문자열 압축
// 중복되는 문자(2개 이상)의 갯수를 해당 문자 오른쪽에 배치
// ex) KKHSSSSSSSE -> K2HS7E
const solution1 = (words) => {
  let result = "";
  // 1. 문자열에서 중복을 제거
  const deduplicatedWords = words
    .split("")
    .filter((item, idx) => words.indexOf(item) === idx);
  // 2. 중복 제거한 문자를 문자열을 탐색하면서
  for (let deduplicatedWord of deduplicatedWords) {
    let count = 0;
    result += deduplicatedWord;
    for (let word of words) {
      if (deduplicatedWord === word) {
        count++;
      }
    }

    if (1 < count) {
      result += count;
    }
  }

  // 3. 해당 문자가 있으면 특정 변수에 쌓아 놓음
  return result;
};

const solution2 = (words) => {
  let result = "";
  let count = 1;
  words = words + " ";

  for (let i = 0; i < words.length - 1; i++) {
    if (words[i] === words[i + 1]) {
      count++;
    } else {
      if (count === 1) {
        result += words[i];
      } else {
        result += words[i] + String(count);
      }

      count = 1;
    }
  }

  return result;
};

const words = "KKHSSSSSSSE";
const result1 = solution2(words);
console.log(result1);
