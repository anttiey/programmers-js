// 연속 부분 수열 합의 개수
function solution(elements) {
  const set = new Set();

  for (let i = 0; i < elements.length; i++) {
    let acc = 0;
    for (let j = i; j < i + elements.length; j++) {
      acc += elements[j % elements.length];
      set.add(acc);
    }
  }

  return set.size;
}
