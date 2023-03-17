// 문자가 들어오면 가운데 문자 출력
// 문자 수가 짝수이면, 가운데 문자 2개 출력
const solution1 = (words) => {
  let result = "";
  const centerWordsIndex = Math.floor(words.length / 2);

  if (words.length % 2 === 0) {
    result = words[centerWordsIndex - 1] + words[centerWordsIndex];
  } else {
    result = words[centerWordsIndex];
  }

  return result;
};

const solution2 = (words) => {
  let result = "";
  let mid = Math.floor(words.length / 2);

  if (words.length % 2 === 1) {
    result = words.substring(mid, mid + 1);
  } else {
    result = words.substring(mid - 1, mid + 1);
  }

  return result;
};

const solution3 = (words) => {
  let result = "";
  let mid = Math.floor(words.length / 2);

  if (words.length % 2 === 1) {
    result = words.substr(mid, 1);
  } else {
    result = words.substr(mid - 1, 2);
  }

  return result;
};

const words = "study";
const result3 = solution3(words);
console.log(result3);
