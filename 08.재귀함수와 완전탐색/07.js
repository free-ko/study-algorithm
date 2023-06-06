/**
 * 최대 점수 구하기(DFS)
 *  ㄴ 제한시간 M분 안에 N개의 문제 중 최대점수를 얻을 수 있는 방법
 *  ㄴ 결국 문제를 풀 건지 안 풀 건지를 생각해야 하기 때문에 부분집합
 */

const solution = (m, ps, pt) => {
  let result = Number.MIN_SAFE_INTEGER;
  const n = ps.length;

  const DFS = (L, sum, time) => {
    if (m < time) return;

    if (L === n) {
      result = Math.max(result, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  };

  DFS(0, 0, 0);

  return result;
};

const ps = [10, 25, 15, 6, 7];
const pt = [5, 12, 8, 3, 4];

const result = solution(20, ps, pt);
console.log(result);
