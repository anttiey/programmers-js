function solution(priorities, location) {
  let priArr = priorities.map((el, idx) => [idx, el]).filter((el) => el[1] >= priorities[location]);
  let order = 1;

  while (priArr.length > 1 && priArr.some((el) => el[1] !== priorities[location])) {
    const priArrVal = priArr.map((el) => el[1]);
    const max = Math.max(...priArrVal);
    const maxIndex = priArrVal.indexOf(max);

    priArr = [...priArr.slice(maxIndex + 1), ...priArr.slice(0, maxIndex)];
    order++;
  }

  return order + priArr.map((el) => el[0]).indexOf(location);
}
