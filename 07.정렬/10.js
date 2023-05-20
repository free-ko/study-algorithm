/**
 * 이분 검색
 *  ㄴ 임의의 N개의 수를 오름차순으로 정렬한
 *  ㄴ 다음 N개의 수 중 한개의 수인 M이 주어지면 이분 검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램 작성
 *  ㄴ 이분 검색 조건 : 정렬된 상태
 *  ㄴ 이분 검색 시간 복잡도 : logN
 */

const solution1 = (target, arr) => {
  let lt = 0;
  let rt = arr.length - 1;
  let result = 0;
  arr.sort((a, b) => a - b);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (arr[mid] === target) {
      result = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return result;
};

const solution2 = (target, arr) => {
  let result = 0;
  let lt = 0;
  let rt = arr.length - 1;
  const sortedArr = [...arr].sort((a, b) => a - b);

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (sortedArr[mid] === target) {
      result = mid + 1;
      break;
    }

    if (target < sortedArr[mid]) {
      rt = mid - 1;
      mid = Math.floor((lt + rt) / 2);
      continue;
    }

    if (sortedArr[mid] < target) {
      lt = mid + 1;
      mid = Math.floor((lt + rt) / 2);
      continue;
    }
  }

  return result;
};

const test = [23, 87, 65, 12, 57, 32, 99, 81];
const result1 = solution1(32, test);
console.log(result1);
