function solution(s, n) {
  function removeExceptALength(string) {
    return string.replace(/[b-z]/g, '').length;
  }

  // string 자체가 a를 들고있지 않은 경우는 return 0
  if (removeExceptALength(s) === 0) return 0;
  // n을 s 로 나눈 나머지 및 몫을 구하고
  // s 를 나머지만큼 slice한 값을 replace 시켜 a만 남기고 length 를 더해주면 될듯

  // 몫과 나머지 세팅
  const quota = parseInt(n / s.length);
  const rest = n % s.length;

  return removeExceptALength(s) * quota + removeExceptALength(s.slice(0, rest));
}
