/**
 * 동전교환
 *  ㄴ 동전들을 주어졌을 때, 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 해야하는가
 */

const solution = (m, arr) => {
  let result = Number.MAX_SAFE_INTEGER;
  const n = arr.length;

  const DFS = (L, sum) => {
    if (m < sum) return;

    if (result <= L) return;

    if (sum === m) {
      result = Math.min(result, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0);

  return result;
};

const arr = [1, 2, 5];
const result = solution(15, arr);
console.log(result);
