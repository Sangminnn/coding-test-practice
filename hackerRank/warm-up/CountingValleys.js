function solution(steps, path) {
  let i = 0;
  let height = 0;
  let answer = 0;

  while (i < steps) {
    // path의 index를 검사하여 U면 +, 아니면 -
    path[i] === 'U' ? height++ : height--;

    // 방금 올라와서 height가 0이 된 경우 가 Valley counting으로 인지
    if (path[i] === 'U' && height === 0) answer++;
    i++;
  }

  return answer;
}
