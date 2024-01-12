function solution(brown, yellow) {
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0 && (i + 2) * (yellow / i + 2) === brown + yellow) {
      return [i, yellow / i + 1];
    }
  }
  return [0, 0];
}
