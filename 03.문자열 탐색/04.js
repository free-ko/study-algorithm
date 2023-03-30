// 가장 짧은 문자 거리
// - 한 개의 문자열과 문자가 주어짐
// - 문자열의 각 문자가 주어진 문자와 떨어진 최소거리를 출력
const solution1 = (words, target) => {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] === target) {
      result.push(0);
      continue;
    }

    let count = 0;
    for (let j = 0; j < words.length; j++) {
      if (i === j) continue;

      if (words[j] === target) {
        // 1. j - i를 변수에 저장한다.
        // 2. 저장된 변수를 j - i와 비교해서 작은 것만 result에 Pushg한다.
      }
    }
  }

  return result;
};

// 1. 왼쪽에서 오른쪽으로 for문을 통해 탐색
// - 문자열보다 긴 숫자의 값을 특정 변수에 지정
// - target 문자를 만나면 변수 값 0으로 리셋
// - 그렇지 않은 경우, 변수를 증가해서 배열에 넣음
// - 왼쪽에 있는 target 문자로 부터 떨어진 거리 적용

// 2. 오른쪽에서 왼쪽으로 for문을 통해 탐색
// - 이 때 특정 변수를 다시 초기화 시킨 다음
// - target 문자를 만나면 변수 값을 0으로 셋팅
// - 그 다음 기존에 있는 인덱스 배열 값과 작은 값을 배열 값으로 넣음
const solution2 = (words, target) => {
  const result = [];
  let temp = 1000;

  for (let word of words) {
    if (word === target) {
      temp = 0;
      result.push(temp);
    } else {
      temp++;
      result.push(temp);
    }
  }

  temp = 1000;
  for (let i = words.length - 1; 0 <= i; i--) {
    if (words[i] === target) {
      temp = 0;
    } else {
      temp++;
      result[i] = Math.min(result[i], temp);
    }
  }

  return result;
};

const words = "teachermode";
const result2 = solution2(words, "e");
console.log(result2);
