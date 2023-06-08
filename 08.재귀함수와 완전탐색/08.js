/**
 * 중복 순열 구하기
 *  ㄴ 1부터 N까지 번호가 적힌 구슬이 있습니다.
 *  ㄴ 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법
 */

const solution = (n, m) => {
  let result = [];
  let tmp = Array.from({ length: m }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      result.push([...tmp]);
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  };

  DFS(0);

  return result;
};

const practice = (targetNumber, location) => {
  let result = [];
  let tmp = Array.from({ length: location }, () => 0);

  const DFS = (L) => {
    if (L === location) {
      result.push([...tmp]);
    } else {
      for (let i = 1; i <= targetNumber; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  };

  DFS(0);

  return result;
};

const result = practice(3, 2);
console.log(result);
