function solution(n, arr) {
  let answer = 0,
    count = 1,
    row = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // 처음부터 다시 돌면서도 target값보다 작은 값이 들어온 경우는
      // row를 target기준으로 쌓을 수 없기 때문에 멈춘다.
      if (arr[i] <= arr[j]) {
        row++;
        continue;
      }

      // 이 지점은 target 값보다 큰 값이 들어온 경우이기때문에
      // 현재까지의 count와 비교해서 새로 쌓인 count가 더 크면 갱신 후 reset
      if (count < row) {
        count = row;
        row = 0;
        continue;
      }

      row = 0;
    }
    // count 1로 초기화(자기 자신)

    if (count > row) row = count;

    if (answer < arr[i] * row) answer = arr[i] * row;
    count = 1;
    row = 0;
  }

  return answer;
}
