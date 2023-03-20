// 자신의 바로 앞(전) 수보다 큰 수만 한 줄로 출력 한다.
// 첫 번째 수는 무조건 출력
const getArrayInDeduplication = (array) =>
  array.filter((item, idx) => array.indexOf(item) === idx);

const solution1 = (numbers) => {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1]) {
      result.push(numbers[i + 1]);
    } else {
      result.push(numbers[i]);
    }
  }

  return getArrayInDeduplication(result);
};

const solution2 = (numbers) => {
  const result = [];
  result.push(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      result.push(numbers[i]);
    }
  }

  return result;
};

const numbers = [7, 3, 9, 5, 6, 12];
const result2 = solution2(numbers);
console.log(result2);
