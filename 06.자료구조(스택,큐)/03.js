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

const solution3 = (board, moves) => {
  let count = 0;
  const _board = board;
  const stack = [];

  // 1. moves 값이 board[i][moves-1]
  // 2. 0이 아니면 값을 꺼낸다.
  // 3. 꺼낸 값을 stack에 넣은다.
  // 4. 꺼낸 뒤, 꺼낸 위치의 값은 0으로 바꾼다.
  // 5. stack.pop()한 값과 꺼낸 값이 같으면 count += 2를 하고 꺼낸 값을 stack에 넣지 않는다.
  // 위 작업을 moves 배열 값을 순회 할 때까지 반복한다.

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < _board.length; j++) {
      const gripItem = _board[j][moves[i] - 1];

      if (gripItem === 0) continue;

      const popItemByStack = stack[stack.length - 1];
      if (gripItem === popItemByStack) {
        count += 2;
        stack.pop();
        _board[j][moves[i] - 1] = 0;
        break;
      }

      stack.push(gripItem);
      _board[j][moves[i] - 1] = 0;

      break;
    }
  }

  return count;
};

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
const result3 = solution3(board, moves);
console.log(result3);
