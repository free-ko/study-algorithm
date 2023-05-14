// <Least Recently Used>
// - 가장 최근에 사용되지 않은 것
// - 캐시에서 작업을 제거 할 때, 가장 오랫동안 사용하지 않은 것을 제거하는 알고리즘.

// 1. Cache Miss
// - 만약 캐시 사이즈 5이고 작업이 2 3 1 6 7 순으로 저장되어있다면,
// - 해야할 작업이 캐시에 없는 상태로 새로운 작업인 5번 작업을 CPU가 사용한다면 Cache miss가 되고 모든 작업이 뒤로 밀림
// - 즉, 5 2 3 1 6(7번 작업은 캐시에서 삭제)

// 2. Cache Hit
// - 만약 위 상태에서 3번 작업을 CPU가 사용한다면 Cache Hit 진행
// - 즉, 3 5 2 1 6

const solution1 = (size, arr) => {
  const cache = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;

    for (let i = 0; i < size; i++) {
      if (x === cache[i]) {
        pos = i;
      }
    }

    // Miss
    if (pos === -1) {
      // 뒤로 땡기기
      for (let j = size - 1; 1 <= j; j--) {
        cache[j] = cache[j - 1];
      }

      cache[0] = x;
    } else {
      // Hit

      for (let j = pos; 1 <= j; j--) {
        cache[j] = cache[j - 1];
      }

      cache[0] = x;
    }
  });

  return cache;
};

const solution2 = (size, arr) => {
  const cache = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;

    for (let i = 0; i < size; i++) {
      if (x === cache[i]) {
        pos = i;
      }
    }

    if (pos === -1) {
      // Miss
      cache.unshift(x);

      if (size < cache.length) {
        cache.pop();
      }
    } else {
      // Hit
      cache.splice(pos, 1);
      cache.unshift(x);
    }
  });

  return cache;
};

const solution3 = (size, arr) => {
  const cache = Array.from({ length: size }, () => 0);

  arr.forEach((item) => {
    let pos = -1;
    for (let i = 0; i < cache.length; i++) {
      if (item === cache[i]) {
        pos = i;
      }
    }

    if (pos === -1) {
      cache.unshift(item);
      if (size < cache.length) {
        cache.pop();
      }
    } else {
      cache.splice(pos, 1);
      cache.unshift(item);
    }
  });

  return cache;
};

const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
const result1 = solution3(5, arr);
console.log(result1);
