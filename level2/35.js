function solution(n, t, m, p) {
  let answer = '';
  let value = 0;
  let turn = 1;

  while (answer.length < t) {
    for (let i = 0; i < value.toString(n).length; i++) {
      if (turn === p) {
        answer += value.toString(n)[i].toUpperCase();
        if (answer.length === t) break;
      }
      turn = (turn % m) + 1;
    }
    value++;
  }

  return answer;
}
