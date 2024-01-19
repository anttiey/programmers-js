// 구명보트
function solution(people, limit) {
  people = people.sort((a, b) => a - b);

  let answer = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    answer++;
  }

  return answer;
}
