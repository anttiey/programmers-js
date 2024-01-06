// 올바른 괄호
function solution(s) {
  let isOpen = 0;

  for (const el of s) {
    if (el === ')') {
      if (isOpen <= 0) return false;
      isOpen--;
    } else {
      isOpen++;
    }
  }

  return isOpen === 0;
}
