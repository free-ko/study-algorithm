// 학급 회장 선출 프로그램(Hash Map)
const findMaxKey = (obj) => {
  let maxKey = null;
  let maxValue = Number.MIN_SAFE_INTEGER;

  for (let key in obj) {
    if (maxValue < obj[key]) {
      maxValue = obj[key];
      maxKey = key;
    }
  }

  return maxKey;
};

const solution1 = (votes) => {
  let result;
  const personList = votes
    .split("")
    .filter((item, idx) => votes.indexOf(item) === idx)
    .reduce((obj, key) => {
      obj[key] = 0;
      return obj;
    }, {});

  for (let vote of votes) {
    if (personList.hasOwnProperty(vote)) {
      personList[vote] += 1;
    }
  }

  result = findMaxKey(personList);

  return result;
};

const solution2 = (words) => {
  let result;
  let sH = new Map();
  for (let word of words) {
    if (sH.has(word)) {
      sH.set(word, sH.get(word) + 1);
    } else {
      sH.set(word, 1);
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (max < val) {
      max = val;
      result = key;
    }
  }

  return result;
};

const votes = "BACBACCACCBDEDE";
const result2 = solution2(votes);
console.log(result2);
