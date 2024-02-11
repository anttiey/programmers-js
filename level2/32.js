function solution(numbers, target) {
  let answer = [0];

  for (let i = 0; i < numbers.length; i++) {
    const tmp = [];
    for (let j = 0; j < answer.length; j++) {
      tmp.push(answer[j] + numbers[i]);
      tmp.push(answer[j] - numbers[i]);
    }
    answer = tmp;
  }

  return answer.filter((el) => el === target).length;
}
