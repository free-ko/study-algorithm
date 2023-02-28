// 숫자 배열을 받으면, 홀수인 자연수들을 모두 골라 그 합을 구하고
// 고른 홀수들 중에 최솟값을 찾는 함수 만들기
const solution1 = (numbers) => {
  let 최솟값;
  let 홀수들합;
  const 홀수들 = [];
  numbers.forEach((number) => {
    if (number % 2 !== 0) {
      홀수들.push(number);
    }
  });

  최솟값 = Math.min(...홀수들);
  홀수들합 = 홀수들.reduce((acc, cur) => acc + cur);

  return [홀수들합, 최솟값];
};

const numbers = [12, 77, 38, 41, 53, 92, 85];
const result1 = solution1(numbers);
console.log(result1);

const solution2 = (arr) => {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) {
        min = x;
      }
    }
  }

  answer.push(sum);
  answer.push(min);

  return answer;
};

const result2 = solution2(numbers);
console.log(result2);
