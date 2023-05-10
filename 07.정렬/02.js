// 버블 정렬
const solution1 = (arr) => {
  const result = arr;

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j + 1] < result[j]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
};

const test = [13, 5, 11, 7, 23, 15];
const result1 = solution1(test);
console.log(result1);
