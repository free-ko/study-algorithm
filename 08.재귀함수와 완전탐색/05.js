/**
 * 합이 같은 부분집합(DFS)
 *  ㄴ N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두개의 부분집합으로 나누었을 때
 *  ㄴ 두 부분 집합의 원소의 합이 서로 같은 경우 존재하면 YES
 *  ㄴ 그렇지 않으면, NO
 */

const solution = (arr) => {
  let result = 'NO';
  let flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;

  const DFS = (L, sum) => {
    if (flag) return;

    if (L === n) {
      if (total - sum === sum) {
        result = 'YES';
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };

  DFS(0, 0);

  return result;
};

const practice = (arr) => {
  let result = 'NO';
  let flag = 0;
  const arraySum = arr.reduce((a, b) => a + b, 0);
  const arrayLength = arr.length;

  const DFS = (L, sum) => {
    if (flag) return;

    if (L === arrayLength) {
      if (arraySum - sum === sum) {
        result = 'YES';
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };

  DFS(0, 0);

  return result;
};

const test = [1, 3, 5, 6, 7, 10];
const result = practice(test);
console.log(result);
