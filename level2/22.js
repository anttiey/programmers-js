function solution(citations) {
  citations.sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i <= citations[citations.length - 1]; i++) {
    if (citations.filter((el) => el >= i).length >= i) {
      answer = i;
    } else {
      break;
    }
  }

  return answer;
}
