// 한 개의 문자열을 입력 받아, 해당 문자열에 알파벳 대문자가 몇 개 있는지
const solution1 = (words) => {
  let count = 0;
  for (let word of words) {
    if (word.toUpperCase() === word) {
      count += 1;
    }
  }

  return count;
};

const solution2 = (words) => {
  let count = 0;
  for (let word of words) {
    // 아스키 번호 중
    // 알파벳 대문자는 65(A) ~ 90(Z)임
    // 알파벳 소문자는 97(a) ~ 122(z)임
    const num = word.charCodeAt();
    if (num >= 65 && num <= 90) {
      count += 1;
    }
  }

  return count;
};

const words = "KoreaTimeGood";
const result1 = solution1(words);
const result2 = solution2(words);
console.log(result2);
