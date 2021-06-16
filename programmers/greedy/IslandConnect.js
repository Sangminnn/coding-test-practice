function solution(n, costs) {
	// [0, 1], [0, 2], [1, 3]
	// 1 1 2 5 8
	// [0, 1], [1, 3], [0, 2]

	// 먼저 cost의 last index에 있는 값들로 오름차순 정렬을 한다.
	// 이후 0, 1번째 인덱스 중에서 한가지만 존재 or 둘다 존재하지 x 라면
	// 배열에 들어가야한다.
	// 이 말인 즉슨, 0, 1 둘다 존재한다면 그냥 지나간다.
	let answer = 0
	let check_array = []
	let sorted_costs = costs.sort((a, b) => a[2] - b[2])

	sorted_costs.forEach((costs) => {
		let check_zero_index = check_array.findIndex((num) => num === costs[0])
		let check_first_index = check_array.findIndex((num) => num === costs[1])

		if (check_zero_index > -1 && check_first_index > -1) return

		// 위 경우가 아니라면 반드시 배열에 들어가야하기 때문에
		// 0번째, 1번째 값은 check_array에 넣고, 2번째 값은 answer에 넣는다.
		check_array.push(costs[0], costs[1])
		answer += costs[2]
	})

	return answer
}
