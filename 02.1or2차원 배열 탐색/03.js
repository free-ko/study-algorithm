// A, B 두 사람이 가위바위보 게임을 진행
// 1:가위, 2:바위, 3:보
// A가 이기면 A 출력
// B가 이기면 B 출력
// 비기면, D 출력

// 이기는 경우
// 1 - 3
// 2 - 1
// 3 - 2

const showWinner = (a, b) => {
  if (a === b) {
    return "D";
  }

  switch (a) {
    case 1: {
      if (b === 3) {
        return "A";
      }
      break;
    }
    case 2: {
      if (b === 1) {
        return "A";
      }
      break;
    }

    case 3: {
      if (b === 2) {
        return "A";
      }
      break;
    }
  }

  switch (b) {
    case 1: {
      if (a === 3) {
        return "B";
      }
      break;
    }
    case 2: {
      if (a === 1) {
        return "B";
      }
      break;
    }

    case 3: {
      if (a === 2) {
        return "B";
      }
      break;
    }
  }
};

const solution1 = (A, B) => {
  const result = [];

  for (let i = 0; i < A.length; i++) {
    const showA = A[i];
    const showB = B[i];

    const resultShow = showWinner(showA, showB);
    result.push(resultShow);
  }

  return result;
};

const solution2 = (A, B) => {
  let result = "";

  // A가 이기는 경우만 생각하고
  // 그게 아니면 다 B가 이기는 경우라고 생각
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) {
      result += "D" + " ";
    } else if (A[i] === 1 && B[i] === 3) {
      result += "A" + " ";
    } else if (A[i] === 2 && B[i] === 1) {
      result += "A" + " ";
    } else if (A[i] === 3 && B[i] === 2) {
      result += "A" + " ";
    } else {
      result += "B" + " ";
    }
  }

  return result;
};

const A = [2, 3, 3, 1, 3];
const B = [1, 1, 2, 2, 3];
const result2 = solution2(A, B);
console.log(result2);
