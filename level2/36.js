function solution(word) {
  const answer = word
    .split('')
    .reduce(
      (arr, cur, idx) =>
        (arr += ['A', 'E', 'I', 'O', 'U'].indexOf(cur) * [781, 156, 31, 6, 1][idx]),
      0
    );

  return answer + word.length;
}
