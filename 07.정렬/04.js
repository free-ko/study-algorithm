// 삽입 정렬
const solution1 = (arr) => {
  const result = arr;

  for (let i = 0; i < result.length; i++) {
    let j;
    let tmp = result[i];
    for (j = i - 1; 0 <= j; --j) {
      if (tmp < result[j]) {
        result[j + 1] = result[j];
      } else {
        break;
      }
    }

    result[j + 1] = tmp;
  }

  return result;
};

const arr = [11, 7, 5, 6, 10, 9];
const result1 = solution1(arr);
console.log(result1);
