function solution(arr1, arr2) {
  return Array.from({ length: arr1.length }, (_, i) =>
    Array.from({ length: arr2[0].length }, (_, j) =>
      Array.from({ length: arr1[0].length }, (_, k) => arr1[i][k] * arr2[k][j]).reduce(
        (acc, val) => acc + val,
        0
      )
    )
  );
}
