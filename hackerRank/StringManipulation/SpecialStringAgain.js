function solution(n, str) {
  let answer = 0;

  function checkSpecialString(str) {
    if (str.length === 1) {
      answer++;
      return;
    }

    let limit = str.length % 2 === 0 ? str.length / 2 - 1 : Math.floor(str.length / 2);

    for (let k = 0; k <= limit; k++) {
      // 대칭값이 같지않으면 break
      if (str[k] !== str[str.length - k - 1]) break;
      // 대칭값이 계속해서 같았고, 마지막 대칭값도 통과한 경우 answer++
      if (k === limit) answer++;
    }
  }

  // str에 들어오는 값을 2개의 변수를 사용하여
  // slice하여 값을 올려주면서 해당 값을 체크하는 로직을 태운다.

  for (let i = 1; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      // j번째 index에서 i만큼의 길이를 slice하고 체크한다.
      // 둘의 합이 str.length보다 작거나 같을때만 유효하기때문에 체크
      if (i + j > str.length) break;

      checkSpecialString(str.slice(j, i + j));
    }
  }
  checkSpecialString(str);

  return answer;
}
