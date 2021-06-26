function solution(n, arr) {
  // array의 length 만큼 n을 나눈 나머지만큼만 돌아가면서 우측으로 이동시켜주면 된다.
  const rest = n % arr.length;
  let i = 0;

  while (i < rest) {
    arr.push(arr.shift());
    i++;
  }

  return arr;
}
