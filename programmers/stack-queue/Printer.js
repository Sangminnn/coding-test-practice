// 내가 만든 풀이

function solution(priorities, location) {
	let answerArray = [] // 정답 Array
	let beforeArray = [] // targetIndex보다 낮은 index의 숫자가 쌓이는 곳
	let afterArray = [] // targetIndex보다 높은 index의 숫자가 쌓이는 곳
	let lastIndex

	// 중요도 9 -> 1 순으로 검색하면서
	for (let i = 9; i >= 0; i--) {
		// lastIndex를 기준으로 length - 1까지 먼저 훑고, 0부터 lastIndex까지 다시 한번 훑는다.

		// answerArray가 없을 때에는 기준 index가 없기때문에 단순히 돌리면서 index push
		if (answerArray.length === 0) {
			priorities.forEach((number, index) => {
				if (number === i) answerArray.push(index)
			})
		} else {
			// 대신 loop를 돌고나온 배열에 location이 있으면 return 해주도록 체크
			if (!!answerArray.includes(location)) {
				return answerArray.findIndex((number) => number === location) + 1
			}

			// answerArray가 비어있을 수 있기 때문에, 있을때만 lastIndex 다시 세팅
			lastIndex = answerArray[answerArray.length - 1]

			// number가 targeting된 i일때
			// index가 lastIndex보다 높으면 beforeArray에, 낮으면 afterArray에
			priorities.forEach((number, index) => {
				if (number === i) index > lastIndex ? beforeArray.push(index) : afterArray.push(index)
			})

			// answerArray에 해당 배열 넣어주면서 초기화
			answerArray.push(...beforeArray, ...afterArray)
			beforeArray = []
			afterArray = []
		}
	}
}

// Programmers의 Best 풀이

function solution(priorities, location) {
	var list = priorities.map((t, i) => ({
		my: i === location,
		val: t,
	}))
	var count = 0
	while (true) {
		var cur = list.shift()
		if (list.some((t) => t.val > cur.val)) {
			list.push(cur)
		} else {
			count++
			if (cur.my) return count
		}
	}
}

// 코드의 길이는 현저히 짧으나, list.some이 돌면서 매번 전체를 검사하면 비효율적일수도 있겠다는 생각이 들었음.
