// Stack 자료 구조에 의해 재귀함수가 실행
const solution = (n) => {
  const DFS = (L) => {
    if (L === 0) return;

    DFS(L - 1);
    console.log(L);
  };

  DFS(n);
};

const practice = (n) => {
  const DFS = (L) => {
    if (L === 0) return;

    DFS(L - 1);
    console.log(L);
  };

  DFS(n);
};

const result = practice(3);
console.log(result);
