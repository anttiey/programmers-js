// 숫자의 표현
function solution(n) {
  let answer = 1;

  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    for (let j = i; sum <= n; j++) {
      sum += j;
      if (sum === n) {
        answer += 1;
        break;
      }
    }
  }

  return answer;
}
