function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const dSliced = discount.slice(i, i + 10);

    if (want.every((el) => dSliced.includes(el))) {
      const dMap = dSliced.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      }, {});

      if (want.every((el, i) => dMap[el] === number[i])) {
        answer++;
      }
    }
  }

  return answer;
}
