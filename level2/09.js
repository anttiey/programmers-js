// 짝지어 제거하기
function solution(s) {
  let stack = [];

  for (let el of s) {
    if (stack.length > 0 && stack[stack.length - 1] === el) {
      stack.pop();
    } else {
      stack.push(el);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
