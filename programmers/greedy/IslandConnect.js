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

  for (let i = 0; i < sorted_costs.length; i++) {
    let check_zero_index = check_array.findIndex(num => num === sorted_costs[i][0]);
    let check_first_index = check_array.findIndex(num => num === sorted_costs[i][1]);

    if (check_zero_index > -1 && check_first_index > -1) return;

    if (check_zero_index > -1 && check_first_index === -1) {
      check_array.push(sorted_costs[i][0]);
    } else if (check_zero_index === -1 && check_first_index > -1) {
      check_array.push(sorted_costs[i][1]);
    } else {
      check_array.push(sorted_costs[i][0], sorted_costs[i][1]);
    }
    answer += sorted_costs[i][2];

    if (check_array.length === n) break;
  }

  return answer;
}

// sorted_costs.forEach(costs => {
//   let check_zero_index = check_array.findIndex(num => num === costs[0]);
//   let check_first_index = check_array.findIndex(num => num === costs[1]);

//   if (check_zero_index > -1 && check_first_index > -1) return;

//   // 위 경우가 아니라면 반드시 배열에 들어가야하기 때문에
//   // 0번째, 1번째 값은 check_array에 넣고, 2번째 값은 answer에 넣는다.

//   if(check_zero_index > -1 && check_first_index === -1) {
//     check_array.push(costs[0])
//   } else if(check_zero_index === -1 && check_first_index > -1) {
//     check_array.push(costs[1])
//   } else {
//     check_array.push(costs[0], costs[1])
//   }
//   answer += costs[2];

//   if(check_array.length === n) break;
// });
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

// 1, 3, [0,1,2,3,4,5] 이 들어오면
// [0,1,2,1,4,5] 가 된다.

// 이후에 들어오는 4번 index값은 find를 통해
function union(nodeA, nodeB, list) {
  const result = [...list];

  // find를 통해 초기세팅되어있는 값들에서 찾아준다.
  const linkA = find(nodeA, list);
  const linkB = find(nodeB, list);

  // 1 < 3 이라면 현재 세팅된 list의 list[3]에 1값을 넣고
  // 아니라면 list[1] 에 3을 넣는다.

  // 그렇다는말은 높은 index에 있는 node값을 연결된 낮은 node값으로 치환시켜준다.
  linkA <= linkB ? (result[linkB] = linkA) : (result[linkA] = linkB);

  return result;
}

// 아무것도 없는 상황에서 1, [0,1,2,3,4,5]
// 3, [0,1,2,3,4,5] 이 들어오면
// 처음에는 해당 index에 맞는 값을 세팅했기때문에 node에 맞는 값을 return
// 하지만 그 이후에는 해당 index에 연결된 값으로 치환된다는 개념인가 ?

function find(node, list) {
  if (node === list[node]) {
    return node;
  }

  list[node] = find(list[node], list);
  return list[node];
}

// ex) 1, 3, [0,1,2,3,4,5] 라고 보면
// 1, [0,1,2,3,4,5] 그리고 3, [0,1,2,3,4,5] 이 find를 돈다.
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

  // n개만큼 섬을 다 깔아주는 개념인듯 [0,1,2,3,4,5] 처럼
  for (let i = 0; i < n; i++) {
    islandLink[i] = i;
  }

  // 가중치에 대한 값을 오름차순으로 정렬하고
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
