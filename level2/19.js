function solution(s) {
  let answer = 0;
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    const sNew = s.slice(i) + s.slice(0, i);
    let stack = [];
    let flag = true;

    for (let el of sNew) {
      if (pairs[stack[stack.length - 1]] === el) {
        stack.pop();
      } else if (el === ')' || el === '}' || el === ']') {
        flag = false;
        break;
      } else {
        stack.push(el);
      }
    }

    if (stack.length === 0 && flag) {
      answer += 1;
    }
  }

  return answer;
}
