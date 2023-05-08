// 공주 구하기
const solution1 = (persons, targetNumb) => {
  let answer;
  const queue = Array.from({ length: persons }, (value, idx) => idx + 1);

  while (queue.length) {
    for (let i = 1; i < targetNumb; i++) {
      queue.push(queue.shift());
    }

    queue.shift();

    if (queue.length === 1) {
      answer = queue.shift();
    }
  }

  return answer;
};

const solution2 = (persons, target) => {
  let result;
  const queue = Array.from({ length: persons }, (value, idx) => idx + 1);

  while (queue.length) {
    for (let i = 1; i < target; i++) {
      queue.push(queue.shift());
    }

    queue.shift();

    if (queue.length === 1) {
      result = queue.shift();
    }
  }

  return result;
};

const result1 = solution2(8, 3);
console.log(result1);
