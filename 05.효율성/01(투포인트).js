// 2개의 배열 합치기
// 오름차순으로 정렬이 된 2개의 배열이 주어지면, 배열 합쳐서 오름차순으로 출력
const solution1 = (arr1, arr2) => {
  const sumArr = arr1.concat(...arr2);

  // sort 함수는 nlogN 시간 복잡도임
  return sumArr.sort((a, b) => a - b);
};

const solution2 = (arr1, arr2) => {
  const result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1]);
      ++p1;
    } else {
      result.push(arr2[p2]);
      ++p2;
    }
  }

  while (p1 < arr1.length) {
    result.push(arr1[p1]);
    ++p1;
  }

  while (p2 < arr2.length) {
    result.push(arr2[p2]);
    ++p2;
  }

  return result;
};

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
const result2 = solution2(arr2, arr1);
console.log(result2);
