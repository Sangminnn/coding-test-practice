function solution(t, n) {
  // t는 사람들의 수, n은 마지막 queue의 형태
  let count = 0;

  for (let i = 0; i < n.length; i++) {
    // 해당 index+1값과 queue에 있는 index값이 동일하다면 chaotic하지 X
    if (n[i] === i + 1) break;
    count++;
  }

  if (n.length === count) return 'Too chaotic';

  // 전체가 다 섞여있는 경우가 아닌 Case이기에 다시 count reset

  count = 0;
  for (let j = 0; j < n.length; j++) {
    // index상 앞에있는 값이 뒤에있는 값보다 크다면, 순서가 바뀐것이라 다시 바꿔주면서 count++
    if (n[j] > n[j + 1]) {
      n.splice(j, 2, n[j + 1], n[j]);
      count++;
      continue;
    }
  }

  return count;
}
