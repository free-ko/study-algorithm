// 100 이하의 세가지 수 중에 가장 작은 수를 리턴하는 함수

const solution1 = (a,b,c) => {
  let temp;

  if (a < b) {
    temp = a;
  } else {
    temp = b;
  }

  if (temp < c) {
    return temp;
  } else {
    return c
  }
}

const result1 = solution1(6, 5, 11);
console.log(result1);

const solution2 = (a,b,c) => {
  let result = a < b ? a : b;

  if (c < result) result = c;

  return result
}

const result2 = solution2(6, 5, 11);
console.log(result2);