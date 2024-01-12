function solution(n, words) {
  let list = [];

  for (let i = 0; i < Math.floor(words.length / n); i++) {
    for (let j = 0; j < n; j++) {
      const word = words[n * i + j];
      if (word === undefined || word.length < 2) {
        return [j + 1, i + 1];
      }
      if (list && (list.includes(word) || list[list.length - 1].slice(-1) !== word[0])) {
        return [j + 1, i + 1];
      }
      list.push(word);
    }
  }

  return [0, 0];
}
