// 학생의 키를 주어졌을 때, 선생님이 볼 수 있는 학생의 수를 구하는 프로그램
// 앞에 서있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않음
const solution1 = (heights) => {
  let result = 0;

  for (let i = heights.length - 1; 0 <= i; i--) {
    if (i === 0) {
      return ++result;
    }

    let moreHeights;
    for (let j = i - 1; 0 <= j; j--) {
      if (heights[i] <= heights[j]) {
        moreHeights = heights[j];
      }
    }

    if (moreHeights === undefined) {
      result++;
    }
  }

  return result;
};

const solution2 = (heights) => {
  let result = 1;
  // 나 보다 큰 사람
  let max = heights[0];

  for (let i = 1; i < heights.length; i++) {
    if (max < heights[i]) {
      result++;
      max = heights[i];
    }
  }

  return result;
};

const heights = [130, 135, 148, 140, 145, 150, 150, 153];
const result2 = solution2(heights);
console.log(result2);
