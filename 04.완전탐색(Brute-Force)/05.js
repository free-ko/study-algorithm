// K번째 큰 수
// 숫자 중 3개를 뽑아 합을 구함
// 그 중에 K번째 큰 수를 찾는 함수
const solution1 = (numbers, k) => {
  const temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      for (let s = 0; s < numbers.length; s++) {
        const sum = numbers[i] + numbers[j] + numbers[s];
        temp.push(sum);
      }
    }
  }

  const result = [...new Set(temp)];

  return result[k - 1];
};

const solution2 = (k, cards) => {
  let result;
  let temp = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let s = j + 1; s < numbers.length; s++) {
        temp.add(cards[i] + cards[j] + cards[s]);
      }
    }
  }

  const array = Array.from(temp).sort((a, b) => b - a);
  result = array[k - 1];

  return result;
};

const numbers = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// const result1 = solution1(numbers, 3);
const result2 = solution2(3, numbers);
console.log(result2);
