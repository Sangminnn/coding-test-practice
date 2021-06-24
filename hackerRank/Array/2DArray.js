function hourglassSum(arr) {
  // Write your code here
  let answer = -70;
  let sum = -70;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      let firstRow = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      let secondRow = arr[i + 1][j + 1];
      let thirdRow = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

      sum = firstRow + secondRow + thirdRow;

      if (answer < sum) answer = sum;
      sum = -70;
    }
  }

  return answer;
}
