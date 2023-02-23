// 1부터 N까지 합 출력하기
const solution1 = (number) => {
  const array = [];
  for (let i = 1; i <= number; i++) {
    array.push(i);
  }

  return array.reduce((acc, i) => acc + i);
}

const result1 = solution1(6);
console.log(result1);

const solution2 = (number) => {
  let answer = 0;
  for (let i=1; i<=number; i++) {
    answer = answer + i;
  }

  return answer;
}

const result2 = solution2(6);
console.log(result2);