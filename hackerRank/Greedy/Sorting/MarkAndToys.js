function solution(prices, budget) {
  let answer = 0;

  prices.sort((a, b) => a - b);

  while (prices.length > 0) {
    let targetToy = prices.shift();
    if (budget < targetToy) break;

    budget = budget - targetToy;
    answer++;
  }

  return answer;
}
