// 이진 변환 반복하기
function solution(s) {
  const answer = [0, 0];

  while (s !== '1') {
    const oneCount = s.split('').filter((el) => el !== '0').length;

    answer[1] += s.length - oneCount;
    s = oneCount.toString(2);

    answer[0]++;
  }

  return answer;
}
