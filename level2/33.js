function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  const v = n.toString(k);
  return v.split('0').filter((el) => isPrime(Number(el))).length;
}
