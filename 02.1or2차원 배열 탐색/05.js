// 점수가 입력되면, 등수가 출력되는 함수
// ex) 87, 89, 92, 100, 76 -> 4, 3, 2, 1, 5
// 1등이 3명 존재하면 그 다음 등수는 4

const solution1 = (numbers) => {
  // 고민
  // 1. 76이 자동으로 5등 값이 나오는 식을 생각 하기가 어려움
  // 2. 탐색전에 각 숫자를 전체에서 등수를 1등으로 할 것인지, 5등으로 할 것인지 기준이 안 섬
  // 3. 89입장에서 87을 탐색하지 않기 위한 방법이 생각이 안남

  const result = [];
  let grade = 1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        grade += 1;
      }
    }

    result.push(grade);
    grade = 1;
  }

  return result;
};

const solution2 = (numbers) => {
  const result = Array.from({ length: numbers.length }, () => 1);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        result[i]++;
      }
    }
  }

  return result;
};

const numbers1 = [87, 89, 92, 100, 76];
const numbers2 = [87, 87, 87, 87, 76];
const result2 = solution2(numbers1);
console.log(result2);
