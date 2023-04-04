// 멘토링
// 완전탐색(Brute-Force) 대표적인 문제
// 1. 멘토 - 멘티가 될 수 있는 경우의 수를 생각
// 2. 모든 경우의 수를 확인하면서(완전탐색), 문제 조건에 맞는 경우의 수를 구함

// 3번의 시험동안, 특정 학생보다 성적이 크면 멘토 - 멘티 성사
const solution1 = (test) => {
  let result = [];
  const testCount = test.length;
  const testGradeCount = test[0].length;

  for (let i = 1; i <= testGradeCount; i++) {
    for (let j = 1; j <= testGradeCount; j++) {
      let cnt = 0;
      for (let k = 0; k < testCount; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < testGradeCount; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }

        if (pi < pj) cnt++;
      }

      if (cnt === testCount) result.push([i, j]);
    }
  }

  console.log(result);
  return result.length;
};

const test = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

const result1 = solution1(test);
console.log(result1);
