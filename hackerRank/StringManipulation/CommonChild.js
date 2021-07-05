function solution(s1, s2) {
  let arr1,
    arr2,
    count = 0;

  s1 = s1.split('');
  s2 = s2.split('');

  arr1 = s1.map(str => s2.indexOf(str));
  // arr2 = s2.map(str => s1.indexOf(str))

  function checkContinuous(arr) {
    let continuous = 0;
    let target;
    for (let i = 0; i < arr.length; i++) {
      // target이 비어있고, arr[i]가 -1이 아니라면 target을 갱신하면서 다음 step

      if (arr[i] === -1) continue;

      if (!target && arr[i] !== -1) {
        target = arr[i];
        continuous++;
        continue;
      }

      // 위의 코드를 지나온 순간부터는 -1이 아니면서, target보다 크다면 연속성 +
      // target보다 작은 값이 들어오면 target갱신해주면서, 쌓인 연속성 최댓값으로 갱신해주고 연속성 초기화
      if (arr[i] < target) {
        target = arr[i];
        count = Math.max(count, continuous);
        continuous = 0;
        continue;
      }

      continuous++;
    }
    count = Math.max(count, continuous);
  }

  checkContinuous(arr1);

  return count;
}

// 서치해서 알아낸 정석적인 풀이
// DP와 LCS(Longest Common String)를 활용하여 구하는 패턴이라고 함
// 2차 배열을 활용하여 동일 문자열이 나올때마다 1씩 추가해준다.

function commonChild(s1, s2) {
  let arr2d = []; // 1

  for (let i = 0; i <= s1.length; i++) {
    // 2
    arr2d[i] = new Array(); // 3

    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 || j === 0) arr2d[i][j] = 0;
      // 4
      else if (s1[i - 1] === s2[j - 1]) {
        arr2d[i][j] = arr2d[i - 1][j - 1] + 1; // 5
      } else {
        arr2d[i][j] = Math.max(arr2d[i - 1][j], arr2d[i][j - 1]); // 6
      }
    }
  }

  return arr2d[s1.length][s2.length]; // 7
}
