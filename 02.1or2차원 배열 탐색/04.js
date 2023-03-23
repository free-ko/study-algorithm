// 정답표를 주어짐
// - 1: 정답, 0: 틀림
// - 연속적으로 정답일 때, 가산점 + 1
// - 0 틀림이 나온 뒤, 1 정답이 나오면 1점
// ex) 1 0 1 1 1 0 0 1 1 0 -> 1 + 1 + 2 + 3 + 1 + 2 = 10점

const solution1 = (numbers) => {
  let result = 0;
  let bonus = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]) {
      result += 1 + bonus;
      bonus += 1;
    } else {
      bonus = 0;
    }
  }

  return result;
};

const solution2 = (numbers) => {
  let result = 0;
  let cnt = 0;

  for (let number of numbers) {
    if (number === 1) {
      cnt++;
      result += cnt;
    } else {
      cnt = 0;
    }
  }

  return result;
};

const numbers = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
const result2 = solution2(numbers);
console.log(result2);
