function solution(str1, str2) {
  const arr1 = str1.toLowerCase().split('');
  const arr2 = str2.toLowerCase().split('');

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < arr1.length - 1; i++) {
    const word = arr1[i] + arr1[i + 1];

    if (word.replace(/[^a-z]/g, '').length === 2) {
      map1[word] = (map1[word] || 0) + 1;
    }
  }

  for (let i = 0; i < arr2.length - 1; i++) {
    const word = arr2[i] + arr2[i + 1];

    if (word.replace(/[^a-z]/g, '').length === 2) {
      map2[word] = (map2[word] || 0) + 1;
    }
  }

  const key1 = Object.keys(map1);
  const key2 = Object.keys(map2);

  if (!key1.length && !key2.length) {
    return 65536;
  } else if (!key1.length || !key2.length) {
    return 0;
  } else {
    const minArr = key1.filter((el) => key2.includes(el));
    const min = minArr.reduce((acc, cur) => acc + Math.min(map1[cur], map2[cur]), 0);

    const maxArr = new Set([...key1, ...key2]);
    const max = [...maxArr].reduce((acc, cur) => acc + Math.max(map1[cur] || 0, map2[cur] || 0), 0);

    return Math.floor((min / max) * 65536);
  }
}
