// 연속된 K일 동안 최대 매출액이 얼마인지 구하는 식
// Sliding Window
const solution1 = (day, salesAmountList) => {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < salesAmountList.length; i++) {
    let calSum = 0;

    if (i === salesAmountList.length - 2) {
      break;
    }

    for (let j = i; j < i + day; j++) {
      calSum += salesAmountList[j];
    }

    if (max <= calSum) {
      max = calSum;
    }
  }

  return max;
};

const solution2 = (day, salesAmountList) => {
  let sum = 0;
  for (let i = 0; i < day; i++) {
    sum += salesAmountList[i];
  }
  let max = sum;

  for (let i = day; i < salesAmountList.length; i++) {
    sum += salesAmountList[i] - salesAmountList[i - day];
    max = Math.max(max, sum);
  }

  return max;
};

const day = 3;
const salesAmountList = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const result2 = solution2(day, salesAmountList);
console.log(result2);
