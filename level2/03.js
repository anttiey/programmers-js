// 최솟값 만들기
function solution(A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  return sortedA.reduce((arr, curr, idx) => {
    return (arr += curr * sortedB[idx]);
  }, 0);
}
