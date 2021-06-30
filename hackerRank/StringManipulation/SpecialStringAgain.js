// 알고보니 special string은 주어진 값중 가운데 값만 기준으로 잡고
// 나머지는 다 같은 값인것을 일컫는 말이였음.
function solution(n, str) {
  let answer = 0;

  function checkSpecialString(str) {
    if (str.length === 1) {
      answer++;
      return;
    }

    let regex = new RegExp(str[0], 'g');
    //
    if (str.length % 2 === 1) {
      let word_to_array = str.split('');
      word_to_array.splice(Math.floor(str.length / 2), 1);

      str = word_to_array.join('');
    }

    if (!str.replace(regex, '')) {
      answer++;
      return;
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
