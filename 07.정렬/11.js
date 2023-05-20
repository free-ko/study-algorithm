/**
 * 결정 알고리즘(중요)
 *  ㄴ 이분 검색 사용
 *  ㄴ 오름차순으로 정렬로 준비
 *  ㄴ 값의 범위를 찾아야 함(최소 9, 최대 45)
 */

const count = (songs, capacity) => {
  let cnt = 1;
  let sum = 0;

  for (const song of songs) {
    if (capacity < sum + song) {
      cnt++;
      sum = song;
    } else {
      sum += song;
    }
  }

  return cnt;
};

const solution1 = (m, songs) => {
  let result = 0;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (count(songs, mid) <= m) {
      result = mid;
      rt = mid - 1;
      continue;
    }

    if (m < count(songs, mid)) {
      lt = mid + 1;
      continue;
    }
  }

  return result;
};

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = solution1(3, test);
console.log(result1);
