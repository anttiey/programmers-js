// N개의 최소공배수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function solution(arr) {
  return arr.reduce((acc, cur) => {
    return lcm(acc, cur);
  }, 1);
}
