// 모든 문자를 대문자로 만드는 함수
const solution1 = (words) => {
  let result = "";
  for (let word of words) {
    result += word.toUpperCase();
  }

  return result;
};

const solution2 = (words) => {
  let result = "";
  for (let word of words) {
    if (word === word.toLowerCase()) {
      result += word.toUpperCase();
    } else {
      result += word;
    }
  }

  return result;
};

const solution3 = (words) => {
  let result = "";
  for (let word of words) {
    const num = word.charCodeAt();

    if (num >= 97 && num <= 122) {
      result += String.fromCharCode(num - 32);
    } else {
      result += word;
    }
  }

  return result;
};

const solution4 = (words) => words.toUpperCase();

const words = "ItisTimeToStudy";
const result4 = solution4(words);
console.log(result4);
