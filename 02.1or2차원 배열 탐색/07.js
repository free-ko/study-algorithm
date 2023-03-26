// N*N 격자판이 주어짐
// 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리
// 봉우리 갯수 구하는 것
// 단 격자의 가장자리는 0으로 초기화되었다고 가정
const solution1 = (matrix) => {
  const result = [];

  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix.length - 1; j++) {
      const target = matrix[i][j];
      const max = Math.max(
        target,
        matrix[i - 1][j],
        matrix[i][j + 1],
        matrix[i + 1][j],
        matrix[i][j - 1]
      );

      if (target === max) {
        result.push(target);
      }
    }
  }

  return result.length;
};

const solution2 = (matrix) => {
  let result = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          0 <= nx &&
          nx < matrix.length &&
          0 <= ny &&
          ny < matrix.length &&
          matrix[i][j] <= matrix[nx][ny]
        ) {
          flag = 0;
          break;
        }
      }

      if (flag) {
        result++;
      }
    }
  }

  return result;
};

const matrix1 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 5, 3, 7, 2, 3, 0],
  [0, 3, 7, 1, 6, 1, 0],
  [0, 7, 2, 5, 3, 4, 0],
  [0, 4, 3, 6, 4, 1, 0],
  [0, 8, 7, 3, 5, 2, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

const matrix2 = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

const result1 = solution1(matrix1);
const result2 = solution2(matrix2);
console.log(result2);
