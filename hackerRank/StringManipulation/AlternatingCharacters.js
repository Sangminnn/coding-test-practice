function solution(str) {
  let answer = 0;

  // 인접한 문자열은 regex로 걸러내고
  let regex = new RegExp(/A{2,}|B{2,}/, 'g');
  let adjacentString = str.match(regex);

  // 인접한 문자열이 존재하지 않으면 0 return
  if (!adjacentString) return answer;

  // 아니라면 array를 순회하여 length - 1만큼을 제거한 문자 수에 더하여 count
  adjacentString.forEach(string => (answer += string.length - 1));

  return answer;
}
