// 선택 정렬
const solution1 = (arr) => {
  const result = arr;
  for (let i = 0; i < result.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[idx]) idx = j;
    }
    [result[i], result[idx]] = [result[idx], result[i]];
  }

  return result;
};

const solution2 = (arr) => {
  const result = arr;
  for (let i = 0; i < result.length - 1; i++) {
    let idx = i;

    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[idx]) {
        idx = j;
      }
    }

    [result[i], result[idx]] = [result[idx], result[i]];
  }

  return result;
};

const arr = [13, 5, 11, 7, 23, 15];
const result1 = solution2(arr);
console.log(result1);
