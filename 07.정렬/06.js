// 장난꾸러기 학생 찾기
// 졍렬이 안된 요소 찾기
// ex 1)
// 입력 : 120 125 152 130 135 135 143 127 160
// 출력 : 3, 8
// 설명 : 152 키를 갖은 학생이 정렬 무시하고 127번하고 바꿨기 때문에 이 학생 순서를 출력
// ex 2)
// 입력 : 120 130 150 150 130 150
// 출력 : 3, 5

const solution1 = (arr) => {
  let result = '';
  const sortedArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== arr[i]) {
      result += i + 1 + ' ';
    }
  }

  return result;
};

const arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
const arr2 = [120, 130, 150, 150, 130, 150];
const test = solution1(arr2);
console.log(test);
