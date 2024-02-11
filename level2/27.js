function solution(progresses, speeds) {
  let answer = [];
  let i = 0;

  while (i < progresses.length) {
    const x = Math.ceil((100 - progresses[i]) / speeds[i]);
    let cnt = 1;

    for (let j = i + 1; j < progresses.length; j++) {
      if (progresses[j] + x * speeds[j] >= 100) {
        cnt++;
      } else {
        break;
      }
    }

    answer.push(cnt);
    i += cnt;
  }

  return answer;
}
