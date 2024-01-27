function solution(clothes) {
  const cMap = clothes.reduce((acc, cur) => {
    acc[cur[1]] = (acc[cur[1]] || 0) + 1;
    return acc;
  }, {});

  return Object.values(cMap).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
