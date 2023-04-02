// 자릿수의 합
// 자릿수의 합이 최대인 자연수를 출력
// 단, 자릿수의 합이 동일하다면 큰 숫자를 출력
const solution1 = (numbers) => {
  let result;
  let resultSumMax = Number.MIN_SAFE_INTEGER;

  for (let number of numbers) {
    let numberSum = 0;
    let tempNumber = number;

    while (tempNumber) {
      numberSum += tempNumber % 10;
      tempNumber = Math.floor(tempNumber / 10);
    }

    if (resultSumMax < numberSum) {
      resultSumMax = numberSum;
      result = number;
    }

    if (numberSum === resultSumMax) {
      if (result < number) {
        result = number;
      }
    }
  }

  return result;
};

const solution2 = (numbers) => {
  let result;
  let sumMax = Number.MIN_SAFE_INTEGER;

  for (let number of numbers) {
    let numberSum = number
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);

    if (sumMax < numberSum) {
      sumMax = numberSum;
      result = number;
    }

    if (numberSum === sumMax) {
      if (result < number) {
        result = number;
      }
    }
  }

  return result;
};

const numbers = [128, 460, 603, 40, 521, 137, 123];
const results1 = solution1(numbers);
console.log(results1);
