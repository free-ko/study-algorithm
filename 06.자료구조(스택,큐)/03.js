// 크레인 인형 뽑기(카카오)
// https://school.programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
const solution1 = (board, moves) => {
  let count = 0;
  const stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        const gripItem = board[i][pos - 1];
        board[i][pos - 1] = 0;

        if (gripItem === stack[stack.length - 1]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(gripItem);
        }
        break;
      }
    }
  });

  return count;
};

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution2 = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );

  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
const result1 = solution2(board, moves);
console.log(result1);
