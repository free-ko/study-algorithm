// 9개의 100을 넘지 않은 자연수가 주어 질 때,
// 7개의 숫자의 합이 100이 아닌, 다른 2개의 숫자를 제외하고 출력

const solution1 = (numbers) => {
  // 내 아이디어
  // - 배열의 총합을 구함
  // - 숫자의 합 100을 배열의 총합에서 뺌
  // - 배열에서 2개의 숫자의 합이 총합에서 뺀 숫자랑 같으면 그 숫자를 배열에서 제외
  let result = numbers;
  const arraySum = numbers.reduce((acc, cur) => acc + cur);
  const heightSum = 100;
  const findSum = arraySum - heightSum;

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === findSum) {
        result.splice(j, 1);
        result.splice(i, 1);
      }
    }
  }

  return result;
};

const solution2 = (numbers) => {
  // ArraySum - (arr[i] + arr[j]) === 100이면
  // arr[i], arr[j]를 제외
  let result = numbers;
  let sum = numbers.reduce((a, b) => a + b, 0);

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (sum - (numbers[i] + numbers[j]) === 100) {
        // splice를 하는 순간 값이 사라져서 index가 땡겨지기 때문에 밑에 처럼 작성하던가,
        // 아니면 뒤에 것 부터 splice해서 처리
        // result.splice(i, 1);
        // result.splice(j - 1, 1);
        result.splice(j, 1);
        result.splice(i, 1);
      }
    }
  }

  return result;
};

const numbers = [20, 7, 23, 19, 10, 15, 25, 8, 13];
const result2 = solution2(numbers);
