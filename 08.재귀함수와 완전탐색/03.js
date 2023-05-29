/**
 * 이진트리 순회(깊이우선탐색)
 *  ㄴ 전위순회 : 부모 노드가 가장 왼쪽
 *  ㄴ 중위순회 : 부모 노드가 가운데
 *  ㄴ 후위순회 : 부모 노드가 가장 오른쪽
 */

const solution = (n) => {
  let pre = '';
  let mid = '';
  let post = '';

  const DFS = (L) => {
    if (7 < L) return;

    pre += L;
    DFS(L * 2);
    mid += L;
    DFS(L * 2 + 1);
    post += L;
  };

  DFS(n);
  return [[...pre], [...mid], [...post]];
};

const result = solution(1);
console.log(result);
