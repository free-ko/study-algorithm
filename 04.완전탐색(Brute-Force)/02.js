// 뒤집은 소수
// 주어진 숫자를 뒤집어서 소수이면 출력

const makeReverseNumber1 = (number) =>
  parseInt(String(number).split("").reverse().join(""));

const makeReverseNumber2 = (number) => {
  let copyNumber = number;
  let reverseNumber = 0;

  while (copyNumber) {
    reverseNumber = reverseNumber * 10 + (copyNumber % 10);
    copyNumber = Math.floor(copyNumber / 10);
  }

  return reverseNumber;
};

const isPrime1 = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const isPrime2 = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const solution1 = (numbers) => {
  let result = [];
  for (let number of numbers) {
    const reverseNumber = makeReverseNumber1(number);
    if (isPrime1(reverseNumber)) {
      result.push(reverseNumber);
    }
  }

  return result;
};

const solution2 = (numbers) => {
  const result = [];

  for (let number of numbers) {
    const reverseNumber = makeReverseNumber2(number);

    if (isPrime2(reverseNumber)) {
      result.push(reverseNumber);
    }
  }

  return result;
};

const numbers = [32, 55, 62, 20, 250, 370, 200, 30, 100];
const results2 = solution2(numbers);
console.log(results2);
