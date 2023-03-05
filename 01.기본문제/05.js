// 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 함수
const solution1 = (numbers) => {
  let result;
  numbers.forEach((number, idx) => {
    if (idx === 0) {
      result = number;
    }

    if (number < result) {
      result = number;
    }
  });

  return result;
};

const numbers = [5, 3, 7, 11, 2, 15, 17];
const result1 = solution1(numbers);
console.log(result1);

const solution2 = (numbers) => {
  let result;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  result = min;

  return result;
};

const result2 = solution2(numbers);
console.log(result2);

const solution3 = (numbers) => Math.min(...numbers);
const solution4 = (numbers) => Math.min.apply(null, numbers);

const result3 = solution3(numbers);
console.log(result3);

const result4 = solution4(numbers);
console.log(result4);
