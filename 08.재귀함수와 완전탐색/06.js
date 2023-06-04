/**
 * 바둑이 승차(DFS)
 *  ㄴ N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게 구하기
 *  ㄴ 결국 바둑이를 태운다, 태우지 않는다의 부분 집합의 개념으로 접근 가능
 */

const solution = (c, arr) => {
  let result = Number.MIN_SAFE_INTEGER;
  const n = arr.length;

  const DFS = (L, sum) => {
    if (c < sum) return;

    if (L === n) {
      // 부분집합 완성
      result = Math.max(result, sum);
    } else {
      DFS(L + 1, sum + arr[L]); // 바둑이를 태운다.
      DFS(L + 1, sum); // 바둑이를 태우지 않는다.
    }
  };

  DFS(0, 0);

  return result;
};

const weight = 259;
const arr = [81, 58, 42, 33, 61];

const result = solution(weight, arr);
console.log(result);
