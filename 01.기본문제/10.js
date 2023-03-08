// 문자열에 특정 문자가 몇개 있는지 찾는 함수
const solution1 = (words, target) => {
  let count = 0;
  for (let word of words) {
    if (word === target) {
      count += 1;
    }
  }

  return count;
};

// 문자열을 중심으로 나눴을 때, 배열의 값을 가지고 문자열에 포함된 문자 갯수 파악 가능
// 마지막 단어가 split 하게 되면 뒤에 빈 문자열이 발생함 ex) G
const solution2 = (words, target) => words.split(target).length - 1;

const words = "COMPUTERPROGRAMMING";
const result1 = solution1(words, "G");
const result2 = solution2(words, "G");
console.log(result2);
