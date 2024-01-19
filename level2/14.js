// 예상 대진표
function solution(n, a, b) {
  let answer = 1;

  while (true) {
    if (Math.min(a, b) % 2 !== 0 && Math.abs(a - b) === 1) {
      break;
    }

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    answer++;
  }

  return answer;
}
