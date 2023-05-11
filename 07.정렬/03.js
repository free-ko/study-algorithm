// 스페셜 정렬
// - 음의 정수는 앞쪽에, 양의 정수는 뒷쪽에 있어야 한다.

const solution1 = (numbers) => {
  const result = numbers;

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (0 < result[j] && result[j + 1] < 0) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
};

const numbers = [1, 2, 3, -3, -2, 5, 6, -6];
const result1 = solution1(numbers);
console.log(result1);
