// 좌표 정렬
// 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램
// 정렬 기준은 먼저 x값 정렬하고 x값이 같을 경우 y값에 의해 정렬함

const solution1 = (arr) => {
  const result = [...arr];

  result.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  return result;
};

const arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

const test = solution1(arr);
console.log(test);
