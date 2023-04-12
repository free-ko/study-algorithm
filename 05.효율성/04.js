// 연속 수열 2
// 숫자들을 주어질 때, 합 보다 작은 경우 수 구하기

const solution1 = (sum, numbers) => {
  let lt = 0;
  let calSum = 0;
  const result = [];

  // 1. sum보다 적으면 tmp Push
  // 2. 이 때,  sum한 값들을 tmp에 Push
  for (let rt = 0; rt < numbers.length; rt++) {
    const tmp = [];
    calSum += numbers[rt];

    // 각 요소들 sum보다 작거나 같은지 체크
    if (numbers[rt] <= sum) {
      tmp.push(numbers[rt]);
    }

    while (sum <= calSum) {
      calSum -= numbers[lt];

      if (calSum <= sum) {
        tmp.push(numbers[lt]);
        tmp.push(numbers[rt]);
      } else {
        ++lt;
      }
    }

    calSum = 0;
    result.push(tmp);
  }

  console.log(result);
  return result.length;
};

const solution2 = (sum, numbers) => {
  let lt = 0;
  let count = 0;
  let calSum = 0;

  for (let rt = 0; rt < numbers.length; rt++) {
    calSum += numbers[rt];

    while (sum < calSum) {
      calSum -= numbers[lt];
      ++lt;
    }

    // 아래 식이, 부분 수열 갯수
    count += rt - lt + 1;
  }

  return count;
};

const sum = 5;
const numbers = [1, 3, 1, 2, 3];
const result2 = solution2(sum, numbers);
console.log(result2);
