// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
const compareMaps = (map1, map2) => {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key1, value1] of map1) {
    if (!map2.has(key1) || map2.get(key1) !== value1) {
      return false;
    }
  }

  return true;
};

const solution1 = (requestWords, targetWords) => {
  let lt = 0;
  let count = 0;
  let requestWordsHasMap = new Map();
  let targetWordsHasMap = new Map();

  // targetWordsHasMap 셋팅
  for (let targetWord of targetWords) {
    if (targetWordsHasMap.has(targetWord)) {
      targetWordsHasMap.set(targetWord, targetWordsHasMap.get(targetWord) + 1);
    } else {
      targetWordsHasMap.set(targetWord, 1);
    }
  }

  // requestWordsHasMap 초기 2자리 셋팅
  for (let i = 0; i < targetWords.length - 1; i++) {
    if (requestWordsHasMap.has(requestWords[i])) {
      requestWordsHasMap.set(
        requestWords[i],
        requestWordsHasMap.get(requestWords[i]) + 1
      );
    } else {
      requestWordsHasMap.set(requestWords[i], 1);
    }
  }

  for (let rt = targetWords.length - 1; rt < requestWords.length; rt++) {
    if (requestWordsHasMap.has(requestWords[rt])) {
      requestWordsHasMap.set(
        requestWords[rt],
        requestWordsHasMap.get(requestWords[rt]) + 1
      );
    } else {
      requestWordsHasMap.set(requestWords[rt], 1);
    }

    if (compareMaps(requestWordsHasMap, targetWordsHasMap)) {
      ++count;
    }

    requestWordsHasMap.set(
      requestWords[lt],
      requestWordsHasMap.get(requestWords[lt]) - 1
    );
    if (requestWordsHasMap.get(requestWords[lt]) === 0) {
      requestWordsHasMap.delete(requestWords[lt]);
    }

    ++lt;
  }

  return count;
};

const requestWords = "bacaAacba";
const targetWords = "abc";
const result1 = solution1(requestWords, targetWords);
console.log(result1);
