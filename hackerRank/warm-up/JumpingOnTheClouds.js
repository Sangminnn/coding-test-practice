function solution(c) {
  let i = 0;
  let answer = 0;

  while (i < c.length - 1) {
    // 해당 위치에서 +2 index한 값이 일단 존재하고, 그 자리에 0이 있을 경우만 2칸 +
    // 아닌 경우에는 반드시 +1
    i + 2 <= c.length && c[i + 2] === 0 ? (i = i + 2) : i++;
    answer++;
  }

  return answer;
}
