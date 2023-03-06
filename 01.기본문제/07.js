// 10부제
// - 자동차 번호의 일의 자리 숫자가 7이면, 7일, 17일, 27일에 운행하지 못함
// - 자동차 번호가 일의 자리 숫자가 0이면, 10일, 20일, 30일에 운행하지 못함함
const solution = (day, numbers) => {
  let count = 0;
  for (let number of numbers) {
    if (number % 10 === day) {
      count += 1;
    }
  }

  return count;
};

const day1 = 3;
const day2 = 0;
const numbers1 = [25, 23, 11, 47, 53, 17, 33];
const numbers2 = [12, 20, 54, 30, 87, 91, 30];

const result1 = solution(day1, numbers1);
const result2 = solution(day2, numbers2);
console.log(result1);
console.log(result2);
