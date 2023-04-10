// 공통 원소 구하기
const solution1 = (arr1, arr2) => {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }

  return result.sort((a, b) => a - b);
};

const solution2 = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  const result = [];
  const sortedArr1 = arr1.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);

  while (p1 < sortedArr1.length && p2 < sortedArr2.length) {
    if (sortedArr1[p1] === sortedArr2[p2]) {
      result.push(sortedArr1[p1]);
      ++p1;
      ++p2;
    } else {
      if (sortedArr1[p1] < sortedArr2[p2]) {
        ++p1;
      } else {
        ++p2;
      }
    }
  }

  return result;
};

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];
const result2 = solution2(arr1, arr2);
console.log(result2);
