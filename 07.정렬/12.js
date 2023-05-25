/**
 * 마굿간 정하기(결정 알고리즘)
 *  ㄴ x1, x2, x3, ..., xN의 좌표를 가짐(마굿간 좌표 중복X)
 *  ㄴ 말들을 마굿간에 한 마리의 말만 넣을 수 있음
 *  ㄴ 두 말의 거리가 최대가 되게 말을 마굿간에 배치하는 방법
 *  ㄴ 즉, 첫 줄에 가장 가까운 두 말의 최대 거리를 출력
 */

const count = (stable, dist) => {
  let cnt = 1;
  let endpoint = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (dist <= stable[i] - endpoint) {
      ++cnt;
      endpoint = stable[i];
    }
  }

  return cnt;
};

const solution1 = (c, stable) => {
  let result;
  let lt = 1;
  let rt = stable[stable.length - 1];
  stable.sort((a, b) => a - b);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (c <= count(stable, mid)) {
      result = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return result;
};

const distCount = (stable, dist) => {
  let cnt = 1;
  let endpoint = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (dist <= stable[i] - endpoint) {
      ++cnt;
      endpoint = stable[i];
    }
  }

  return cnt;
};

const solution2 = (horesCount, stable) => {
  let result;
  const newArr = [...stable].sort((a, b) => a - b);
  let lt = 1;
  let rt = newArr[newArr.length - 1];

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (horesCount <= distCount(newArr, mid)) {
      result = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return result;
};

const arr1 = [1, 2, 8, 4, 9];
const arr2 = [5, 6, 8, 12, 14];

const result = solution2(3, arr2);
console.log(result);
