// 교육과정 설계
// 필수 수강 과목을 순서대로 수강했는지 판별하는 함수
const solution1 = (essentialSubjects, subjects) => {
  let result = "YES";
  const queue = [...essentialSubjects];

  for (let subject of subjects) {
    if (queue.includes(subject)) {
      const queueItem = queue[0];
      if (queueItem !== subject) {
        return "NO";
      } else {
        queue.shift();
      }
    }
  }

  if (queue.length !== 0) {
    return "NO";
  }

  return result;
};

const solution2 = (need, plan) => {
  let result = "YES";
  const queue = [...need];

  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) {
        return "NO";
      }
    }
  }

  if (0 < queue.length) {
    return "NO";
  }

  return result;
};

const essentialSubjects = "CBA";
const subjects = "CBE";
const result1 = solution2(essentialSubjects, subjects);
console.log(result1);
