/**
 * 순열 구하기
 *  ㄴ 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력
 */

const solution = (m, arr) => {
  const result = [];
  const length = arr.length;

  const ch = Array.from({ length: length }, () => 0);
  const tmp = Array.from({ length: m }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      result.push([...tmp]);
    } else {
      for (let i = 0; i < length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  };

  DFS(0);

  return result;
};

const practice = (target, arr) => {
  const result = [];

  const checkArr = Array.from({ length: arr.length }, () => 0);
  const tmpArr = Array.from({ length: target }, () => 0);

  const DFS = (L) => {
    if (L === target) {
      result.push([...tmpArr]);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (checkArr[i] === 0) {
          checkArr[i] = 1;
          tmpArr[L] = arr[i];
          DFS(L + 1);
          checkArr[i] = 0;
        }
      }
    }
  };

  DFS(0);

  return result;
};

const result = practice(2, [3, 6, 9]);
console.log(result);
