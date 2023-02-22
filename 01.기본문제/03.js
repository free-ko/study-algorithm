// 연필 1다스는 12자루
// 학생 1인당 연필을 1자루씩 나누어 준다고 할 때,
// N명의 학생수를 입력하면 필요한 다스 수를 계산하는 프로그램을 작성
const solution1 = (number) => Math.ceil(number / 12);

const result1 = solution1(25);
console.log(result1);

const solution2 = (number) => {
  return Math.ceil(number / 12);
}

const result2 = solution2(178);
console.log(result2);