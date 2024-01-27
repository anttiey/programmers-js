function solution(n, left, right) {
  return Array.from({ length: right - left + 1 }, (_, i) => {
    return Math.max(Math.floor((left + i) / n) + 1, ((left + i) % n) + 1);
  });
}
