// 귤 고르기
function solution(k, tangerine) {
  const tMap = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const tArr = Object.values(tMap).sort((a, b) => b - a);

  let answer = 0;

  while (k > 0 && answer < tArr.length) {
    k -= tArr[answer];
    answer += 1;
  }

  return answer;
}
