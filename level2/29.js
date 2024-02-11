function solution(k, dungeons) {
  let answer = 0;
  dungeons.sort((a, b) => b[0] - b[1] - (a[0] - a[1]));

  while (dungeons.some((el) => el[1] <= k)) {
    
  }

  return answer;
}
