// 최댓값과 최솟값
function solution(s) {
  const arr = s.split(' ');
  return Math.min(...arr) + ' ' + Math.max(...arr);
}
