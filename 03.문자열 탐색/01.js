// 회문 문자열(앞으로 읽으나, 뒤로 읽으나 똑같은 문자열)
// 회문 문자열 판독하는 함수
// 단, 대소문자 구문 안함

const solution1 = (words) => {
  if (!words) {
    return "EMPTY WORDS";
  }

  let count = 0;

  for (let i = 0; i < Math.floor(words.length / 2); i++) {
    if (words[i].toLowerCase() === words[words.length - 1 - i].toLowerCase()) {
      count++;
    }
  }

  if (count === Math.floor(words.length / 2)) {
    return "YES";
  }

  return "NO";
};

const solution2 = (words) => {
  let result = "YES";
  let len = words.length;
  words = words.toLowerCase();

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (words[i] !== words[len - i - 1]) {
      return "NO";
    }
  }

  return result;
};

const solution3 = (words) => {
  const lowerWords = words.toLowerCase();
  const reverseWords = words.split("").reverse().join("").toLowerCase();

  if (lowerWords !== reverseWords) {
    return "NO";
  }

  return "YES";
};

const words = "goToG";
const result3 = solution3(words);
console.log(result3);
