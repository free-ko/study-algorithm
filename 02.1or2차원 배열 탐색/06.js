// 격자판 최대합 구하기
// 5 x 5 격자판에서 각 행의 합, 각 열의 합, 각 대각선의 합 중 가장 큰 합을 출
const solution1 = (matrix) => {
  let result = 0;
  let rowSum = 0;
  let rowMax = 0;

  let columnMax = 0;
  let columnSum = 0;

  let crossMax;
  let crossSum1 = 0;
  let crossSum2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      rowSum += matrix[i][j];
      columnSum += matrix[j][i];

      if (i === j) {
        crossSum1 += matrix[i][j];
        crossSum2 += matrix[i][matrix.length - i - 1];
      }
    }

    if (rowMax < rowSum) {
      rowMax = rowSum;
    }

    rowSum = 0;

    if (columnMax < columnSum) {
      columnMax = columnSum;
    }

    columnSum = 0;
  }

  crossMax = crossSum1 < crossSum2 ? crossSum2 : crossSum1;

  result = rowMax < columnMax ? columnMax : rowMax;
  result = result < crossMax ? crossMax : result;

  return result;
};

const solution2 = (matrix) => {
  let result = Number.MIN_SAFE_INTEGER;
  let rowSum = 0;
  let columnSum = 0;
  let crossSum1 = 0;
  let crossSum2 = 0;

  // 행, 열 합
  for (let i = 0; i < matrix.length; i++) {
    rowSum = columnSum = 0;

    for (let j = 0; j < matrix.length; j++) {
      // 행 합
      rowSum += matrix[i][j];
      // 열 합
      columnSum += matrix[j][i];
    }

    result = Math.max(result, rowSum, columnSum);
  }

  // 대각선 합
  for (let i = 0; i < matrix.length; i++) {
    crossSum1 += matrix[i][i];
    crossSum2 += matrix[i][matrix.length - i - 1];
  }

  result = Math.max(result, crossSum1, crossSum2);

  return result;
};

const matrix = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

const result1 = solution1(matrix);
const result2 = solution2(matrix);
console.log(result2);

// Math.max() 구현
function myMax() {
  let max = -Infinity; // 가장 작은 값으로 초기화
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

myMax(1, 2, 3);

// 리팩토링
const rowSum = matrix.map((row) => row.reduce((acc, cur) => acc + cur, 0));
const colSum = matrix.map((col, i) =>
  matrix.map((row) => row[i]).reduce((acc, cur) => acc + cur, 0)
);
const diagonalSum1 = matrix.reduce((acc, row, i) => acc + row[i], 0);
const diagonalSum2 = matrix.reduce(
  (acc, row, i) => acc + row[matrix.length - i - 1],
  0
);

const maxSum = Math.max(...rowSum, ...colSum, diagonalSum1, diagonalSum2);
