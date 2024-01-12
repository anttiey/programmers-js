// 다음 큰 숫자
function countBits(n) {
  return n
    .toString(2)
    .split('')
    .filter((el) => el === '1').length;
}

function solution(n) {
  let answer = n;
  let oneCount = countBits(n);

  while (1) {
    answer += 1;
    if (countBits(answer) === oneCount) break;
  }

  return answer;
}
