/**
 * 부분집합 구하기(DFS)
 *  ㄴ 자연수 N이 주어지면, 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램 작성
 *  ㄴ 만들고자 하는 부분집합에 참여할지 안 할지를 판단하는 것
 */

const solution = (n) => {
  let result = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  const DFS = (v) => {
    if (v === n + 1) {
      let temp = '';
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) temp += i + ' ';
      }

      if (0 < temp.length) {
        result.push(temp.trim());
      }
    } else {
      ch[v] = 1; // 집합에 포함 시킨다.
      DFS(v + 1);
      ch[v] = 0; // 집합에 포함 시키지 않는다.
      DFS(v + 1);
    }
  };

  DFS(1);

  return result;
};

const result = solution(3);
console.log(result);
