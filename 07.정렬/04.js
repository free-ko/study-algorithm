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

const solution2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j;
    let tmp = arr[i];

    for (j = i - 1; 0 <= j; j--) {
      if (tmp < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = tmp;
  }

  return arr;
};

const arr = [7, 11, 5, 6, 10, 9];
const result1 = solution2(arr);
console.log(result1);
