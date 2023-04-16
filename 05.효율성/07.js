// 아나그램(해쉬)
// 알파벳 나열 순서는 다르지만, 구성이 일치하면 두 단어는 아나그램이라고 한다.
const solution1 = (words1, words2) => {
  let result = "YES";
  const map1 = new Map();
  const map2 = new Map();

  for (let word1 of words1) {
    if (map1.has(word1)) {
      map1.set(word1, map1.get(word1) + 1);
    } else {
      map1.set(word1, 1);
    }
  }

  for (let word2 of words2) {
    if (map2.has(word2)) {
      map2.set(word2, map2.get(word2) + 1);
    } else {
      map2.set(word2, 1);
    }
  }

  for (let [key1, value1] of map1) {
    for (let [key2, value2] of map2) {
      if (key1 === key2) {
        if (value1 !== value2) {
          return "No";
        }
      }

      if (value1 === value2) {
        if (key1 !== key2) {
          return "No";
        }
      }
    }
  }

  return result;
};

const solution2 = (words1, words2) => {
  let result = "YES";
  const map1 = new Map();

  for (let word1 of words1) {
    if (map1.has(word1)) {
      map1.set(word1, map1.get(word1) + 1);
    } else {
      map1.set(word1, 1);
    }
  }

  for (let word2 of words2) {
    if (map1.has(word2)) {
      map1.set(word2, map1.get(word2) - 1);

      if (map1.get(word2) < 0) {
        return "No";
      }
    } else {
      return "No";
    }
  }

  return result;
};

const solution3 = (words1, words2) => {
  let result = "YES";
  const map1 = new Map();

  for (let word1 of words1) {
    if (map1.has(word1)) {
      map1.set(word1, map1.get(word1) + 1);
    } else {
      map1.set(word1, 1);
    }
  }

  for (let word2 of words2) {
    if (!map1.has(word2) || map1.get(word2) === 0) {
      return "No";
    }

    map1.set(word2, map1.get(word2) - 1);
  }

  return result;
};

const solution4 = (words1, words2) => {
  let result = "YES";
  const wordsMap = new Map();

  for (let word1 of words1) {
    if (wordsMap.has(word1)) {
      wordsMap.set(word1, wordsMap.get(word1) + 1);
    } else {
      wordsMap.set(word1, 1);
    }
  }

  for (let word2 of words2) {
    if (wordsMap.has(word2)) {
      wordsMap.set(word2, wordsMap.get(word2) - 1);
    }

    if (!wordsMap.has(word2) || wordsMap.get(word2) < 0) {
      return "NO";
    }
  }

  return result;
};

const words1 = "AbaAeCe";
const words2 = "baeeACA";
const words3 = "abaCC";
const words4 = "Caaab";
const result4 = solution4(words3, words4);
console.log(result4);
