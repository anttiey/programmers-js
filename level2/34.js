function solution(msg) {
  const dict = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const answer = [];
  let i = 0;

  while (i < msg.length) {
    let j = i + 1;
    while (j <= msg.length && dict.includes(msg.substring(i, j))) {
      j++;
    }
    answer.push(dict.indexOf(msg.substring(i, j - 1)) + 1);
    dict.push(msg.substring(i, j));
    i = j - 1;
  }

  return answer;
}
