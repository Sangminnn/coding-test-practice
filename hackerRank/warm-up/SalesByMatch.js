function solution(n, array) {
  let answer = 0;
  let i = 0;

  // 루프를 돌린다.
  while (i < array.length) {
    // 첫번째 값부터 시작
    let targetNumber = array.shift();

    // targetNumber와 같은 값이 있다면 해당 index값 제거해주고 answer++
    if (array.findIndex(num => num === targetNumber) > -1) {
      let targetIndex = array.findIndex(num => num === targetNumber);

      // 해당 인덱스 찾아서 빼주고, 짝 맞췄으니 answer ++
      array.splice(targetIndex, 1);
      answer++;
    }
  }

  return answer;
}
