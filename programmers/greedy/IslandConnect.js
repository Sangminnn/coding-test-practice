function solution(n, costs) {
  // [0, 1], [0, 2], [1, 3]
  // 1 1 2 5 8
  // [0, 1], [1, 3], [0, 2]

  // 먼저 cost의 last index에 있는 값들로 오름차순 정렬을 한다.
  // 이후 0, 1번째 인덱스 중에서 한가지만 존재 or 둘다 존재하지 x 라면
  // 배열에 들어가야한다.
  // 이 말인 즉슨, 0, 1 둘다 존재한다면 그냥 지나간다.
  let answer = 0;
  let check_array = [];
  let sorted_costs = costs.sort((a, b) => a[2] - b[2]);

  sorted_costs.forEach(costs => {
    let check_zero_index = check_array.findIndex(num => num === costs[0]);
    let check_first_index = check_array.findIndex(num => num === costs[1]);

    if (check_zero_index > -1 && check_first_index > -1) return;

    // 위 경우가 아니라면 반드시 배열에 들어가야하기 때문에
    // 0번째, 1번째 값은 check_array에 넣고, 2번째 값은 answer에 넣는다.
    check_array.push(costs[0], costs[1]);
    answer += costs[2];
  });

  return answer;
}

// 가장 합리적이라고 생각한 풀이

function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  let [from, to, answer] = costs.shift();
  let connected = new Set([from, to]);

  while (connected.size < n) {
    let index = costs.findIndex(
      ([from, to]) =>
        (connected.has(from) && !connected.has(to)) || (connected.has(to) && !connected.has(from)),
    );
    let [[from, to, cost]] = costs.splice(index, 1);
    answer += cost;
    connected.add(from).add(to);
  }
  return answer;
}

// 정석적이라고 느꼈던 풀이, 크루스칼 알고리즘에 대한 내용을 담고있음 ( Union-find 알고리즘을 이용한 최소신장트리 구하기 )

function union(nodeA, nodeB, list) {
  const result = [...list];

  const linkA = find(nodeA, list);
  const linkB = find(nodeB, list);

  linkA <= linkB ? (result[linkB] = linkA) : (result[linkA] = linkB);

  return result;
}

function find(node, list) {
  if (node === list[node]) {
    return node;
  }

  list[node] = find(list[node], list);
  return list[node];
}

function isLinked(nodeA, nodeB, list) {
  return find(nodeA, list) === find(nodeB, list);
}

function checkAllLink(list) {
  if (list.length === 1) {
    return true;
  }

  for (let i = 0; i < list.length - 1; i++) {
    if (find(i, list) !== find(i + 1, list)) {
      return false;
    }
  }

  return true;
}

function solution(n, costs) {
  const sortedCosts = [...costs];
  let islandLink = [];
  let result = 0;

  for (let i = 0; i < n; i++) {
    islandLink[i] = i;
  }

  sortedCosts.sort((costA, costB) => {
    return costA[2] - costB[2];
  });

  for (const [islandA, islandB, cost] of sortedCosts) {
    if (isLinked(islandA, islandB, islandLink)) {
      continue;
    }

    result += cost;
    islandLink = union(islandA, islandB, islandLink);

    if (checkAllLink(islandLink)) {
      break;
    }
  }

  return result;
}
