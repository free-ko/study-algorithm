// 유효한 회문 문자열 찾기
// 알파벳 이외의 문자들은 무시
// 단 알파벳 대소문자 구분 안함
const solution1 = (words) => {
  const regex = /[a-zA-Z]/g;
  const pureWords = words.match(regex).join("").toLowerCase();
  const reverseWords = pureWords.split("").reverse().join("");

  if (pureWords === reverseWords) {
    return "YES";
  }

  return "NO";
};

const solution2 = (words) => {
  const pureWords = words.toLowerCase().replace(/[^a-z]/g, "");
  const reverseWords = pureWords.split("").reverse().join("");

  if (reverseWords !== pureWords) {
    return "NO";
  }

  return "YES";
};

const words = "found7, time: study; Yduts; emit, 7Dnuof";
const result2 = solution2(words);
