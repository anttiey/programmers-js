// 점프와 순간 이동
function solution(n) {
  let ans = 0;

  while (n > 0) {
    ans += n % 2;
    n = Math.floor(n / 2);
  }

  return ans;
}
