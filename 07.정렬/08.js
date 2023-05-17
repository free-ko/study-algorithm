/**
 * 회의실 배정
 *  ㄴ 각 회의에 대해 시작, 끝나는 시간이 주어짐
 *  ㄴ 각 회의가 겹치지 않으면서 회의실을 사용할 수 있는 최대 회의 수를 찾는 문제
 *  ㄴ 단, 회의 시작과 끝나는 시간 조건은 시작 시간 <= 끝나는 시간
 */

// 빨리 끝나는 시간으로 정렬 하는 것이 Point
const solution1 = (meeting) => {
  let result = 0;
  let endTime = 0;
  const sortedMeetting = [...meeting].sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  for (const time of sortedMeetting) {
    if (endTime <= time[0]) {
      ++result;
      endTime = time[1];
    }
  }

  return result;
};

const test1 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

const test2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];

const result1 = solution1(test1);
console.log(result1);
