/**
 * 10진수 N이 입력되면 2진수로 변환하는 프로그램 작성
 *  ㄴ 재귀함수 이용
 */

const practice = (n) => {
  let result = '';

  const DFS = (L) => {
    const quotient = Math.floor(L / 2);
    const remainder = L % 2;
    result = remainder + result;

    if (quotient === 0) return;

    DFS(quotient);
  };

  DFS(n);

  return result;
};

const solution = (n) => {
  let result = '';

  // 항상 언제 재귀함수가 멈춰야 할지를 먼저 생각
  const DFS = (L) => {
    if (L === 0) return;
    DFS(parseInt(L / 2, 10));
    result += L % 2;
  };

  DFS(n);

  return result;
};

const result = solution(11);
console.log(result);
