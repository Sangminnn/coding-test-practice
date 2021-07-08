function solution(arr1, arr2, arr3) {
  let count = 0;

  function removeOverlap(arr) {
    let obj = {};

    arr.forEach(num => {
      if (!obj[num]) {
        obj[num] = 1;
        return;
      }

      obj[num]++;
    });

    return Object.keys(obj);
  }

  let a1 = removeOverlap(arr1);
  let a2 = removeOverlap(arr2);
  let a3 = removeOverlap(arr3);

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      for (let k = 0; k < a3.length; k++) {
        if (+a1[i] <= +a2[j] && +a2[j] >= +a3[k]) count++;
      }
    }
  }

  return count;
}
