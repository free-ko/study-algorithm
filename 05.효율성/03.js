// 연속 부분수열 1
// 1 2 1 3 1 1 1 2 가 주어 졌을 때
// 합이 6이 되는 연속 부분 수열은 {2,1,3} {1,3,1,1}, {3,1,1,1} 총 3가지

const solution1 = (sum, arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let tmpSum = sum;
    let tmpArr = [];

    tmpSum -= arr[i];
    tmpArr.push(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      tmpSum -= arr[j];

      if (0 <= tmpSum) {
        tmpArr.push(arr[j]);
      }

      if (tmpSum === 0) {
        result.push(tmpArr);
      }

      if (tmpSum < 0) {
        break;
      }
    }
  }

  return result;
};

// 잘 이해 하자!!!
const solution2 = (targetSum, numbers) => {
  let lt = 0;
  let calSum = 0;
  let count = 0;

  for (let rt = 0; rt < numbers.length; rt++) {
    calSum += numbers[rt];

    if (calSum === targetSum) {
      ++count;
    }

    while (calSum >= targetSum) {
      calSum -= numbers[lt];
      ++lt;

      if (targetSum === calSum) {
        ++count;
      }
    }
  }

  return count;
};

const numbers = [1, 2, 1, 3, 1, 1, 1, 2];
const result2 = solution2(6, numbers);
console.log(result2);
