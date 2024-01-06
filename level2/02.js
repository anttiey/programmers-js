// JadenCase 문자열 만들기
function solution(s) {
  const arr = s.split('');
  const answer = arr.map((el, idx) =>
    idx === 0 || arr[idx - 1] === ' ' ? el.toUpperCase() : el.toLowerCase()
  );

  return answer.join('');
}
