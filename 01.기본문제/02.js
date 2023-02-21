// 길이가 서로 다른 A,B,C 세 개의 막대 길이가 주어질 때
// 이 세 막대로 삼각형을 만들 수 있으면 'YES', 없으면 'NO'를 출력한다.
const solution1 = (a, b, c) => {
  let result = 'NO'
  let max;

  if (a < b) {
    max = b;
  }

  if (max < c) {
    max = c;
  }


  if (max < (max - (a + b + c))) {
    return 'YES'
  }

  return result;
}

const result1 = solution1(13, 33, 17);
console.log(result1);

const solution2 = (a, b, c) => {
  let result = "YES", max;
  let sum = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) max = c;

  if ((sum - max) <= max) {
    result = "NO"
  }

  return result
}

const result2 = solution2(13, 33, 17);
console.log(result2);