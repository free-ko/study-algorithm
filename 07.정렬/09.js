/**
 * 결혼식
 *  ㄴ 사람들 피로연장에 머물게 되는 시간 주어짐
 *  ㄴ 피로연장에 동시에 존재하는 최대 인원 출력(적절한 피로연장 시간 구하기 위해)
 *  ㄴ 참고) 13 15 일 때, 15시에는 피로연에 없음
 */

const solution1 = (times) => {
  let result = 0;
  let count = 0;
  let timeLine = [];

  for (const time of times) {
    timeLine.push([time[0], 'start']);
    timeLine.push([time[1], 'end']);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    }

    return a[0] - b[0];
  });

  for (const time of timeLine) {
    if (time[1] === 'start') {
      count++;
    } else {
      count--;
    }

    result = Math.max(result, count);
  }

  return result;
};

const solution2 = (test) => {
  let result = 0;
  let count = 0;
  const arr = [];

  for (const item of test) {
    arr.push({
      type: 'start',
      time: item[0],
    });

    arr.push({
      type: 'end',
      time: item[1],
    });
  }

  arr.sort((a, b) => {
    if (a.time === b.time) {
      if (a.type === 'start' && b.type === 'end') {
        return 1;
      }

      if (a.type === 'end' && b.type === 'start') {
        return -1;
      }

      return 0;
    }

    return a.time - b.time;
  });

  for (const item of arr) {
    if (item.type === 'start') {
      ++count;
    } else {
      --count;
    }

    result = Math.max(result, count);
  }

  return result;
};

const test = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

const result1 = solution1(test);
console.log(result1);
