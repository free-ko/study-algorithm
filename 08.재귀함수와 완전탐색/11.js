/**
 * 팩토리얼
 *  ㄴ 5! = 5 x 4 x 3 x 2 x 1
 */

const solution = (n) => {
  let result;

  const DFS = (L) => {
    if (L === 1) return 1;

    return L * DFS(L - 1);
  };

  result = DFS(n);

  return result;
};

const practice = (n) => {
  let result;

  const DFS = (L) => {
    if (L === 1) return 1;

    return L * DFS(L - 1);
  };

  result = DFS(n);

  return result;
};

const result = practice(5);
console.log(result);
