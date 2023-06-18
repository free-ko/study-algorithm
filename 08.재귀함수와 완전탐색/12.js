/**
 * 조합의 경우 수(메모이제이션)
 */

const solution = (n, r) => {
  let result;
  const dy = Array.from(Array(35), () => Array(55).fill(0));

  const DFS = (n, r) => {
    if (dy[n][r] > 0) return dy[n][r];

    if (n === r || r === 0) return 1;

    return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  };

  result = DFS(n, r);
  return result;
};

const practice = (n, r) => {
  let result;
  const dy = Array.from(Array(35), () => Array(55).fill(0));

  const DFS = (n, r) => {
    if (0 < dy[n][r]) return dy[n][r];

    if (n === r || r === 0) return 1;
    return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  };

  result = DFS(n, r);

  return result;
};

const result = practice(33, 19);
console.log(result);
