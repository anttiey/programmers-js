// 멀리 뛰기
function solution(n) {
  const fibonacci = [1, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;
  }

  return fibonacci[n];
}
