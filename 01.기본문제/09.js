// A를 #으로 바꾸어 출력

const solution1 = (words) => {
  let result = words;

  for (let word of words) {
    if (word === "A") {
      result = result.replace("A", "#");
    }
  }

  return result;
};

const solution2 = (words) => {
  let result = "";

  for (let word of words) {
    if (word === "A") {
      result += "#";
    } else {
      result += word;
    }
  }

  return result;
};

const solution3 = (words) => words.replace(/A/g, "#");

const words = "BANANA";
const result1 = solution1(words);
const result2 = solution2(words);
const result3 = solution3(words);
console.log(result3);
