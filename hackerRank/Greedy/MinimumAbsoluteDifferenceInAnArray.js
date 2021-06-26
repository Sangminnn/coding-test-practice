function solution(n, arr) {
  let answer;

  while (arr.length > 1) {
    let targetNumber = arr.shift();

    for (let i = 0; i < arr.length; i++) {
      let newAnswer = Math.abs(targetNumber - arr[i]);

      // newAnswer가 0이라면 다음에 오는 그 어떤값보다도 작을테니 return
      if (newAnswer === 0) {
        answer = newAnswer;
        break;
      }

      if (!answer || answer > newAnswer) answer = newAnswer;
    }
  }

  return answer;
}
