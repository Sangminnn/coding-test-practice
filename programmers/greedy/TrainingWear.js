function solution(n, lost, reserve) {
	let i = 0
	// 여분의 체육복이 있는 학생들을 객체화
	reserve = reserve.map((student) => {
		return { number: student, extra: true }
	})

	while (i < lost.length) {
		let exist = reserve.findIndex((reserve_person) => reserve_person.number === lost[i])

		// 양쪽에 모두 존재하면 두 배열에서 모두 빼준다.
		if (exist === -1) {
			i++
		} else {
			lost.splice(i, 1)
			reserve.splice(exist, 1)
		}
	}

	// 반복문을 위한 i 초기화
	i = 0

	// lost를 순회하면서 해당 값보다 +-1 이면서 extra가 true인 값의 index를 찾아서
	// 해당 index의 extra를 false로 바꿔주면서 lost의 i번째 값을 splice로 잘라준다.
	// 그런 값이 없다면 i를 ++ 해준다.
	while (i < lost.length) {
		let targetIndex = reserve.findIndex(
			(student) => (student.number === lost[i] + 1 || student.number === lost[i] - 1) && student.extra === true,
		)

		if (targetIndex === -1) {
			i++
		} else {
			// 체육복을 빌려줄 수 있는 학생이 있으면 찾아서 소진시킨다.
			// 이후 lost의 현재 i의 index에 있는 값을 splice로 제거해준다.
			reserve[targetIndex].extra = false
			lost.splice(i, 1)
		}
	}
	return n - lost.length
}

// 발상이 비슷했던 Case

function solution(n, lost, reserve) {
	let tmp = reserve.slice()

	for (let i in tmp) {
		let key = lost.indexOf(tmp[i])

		if (key != -1) {
			lost.splice(key, 1)
			reserve.splice(reserve.indexOf(tmp[i]), 1)
		}
	}

	for (let i of reserve) {
		let key = lost.includes(i - 1) ? lost.indexOf(i - 1) : lost.indexOf(i + 1)

		if (key != -1) {
			lost.splice(key, 1)
		}
	}

	return n - lost.length
}

// 예외 케이스로 인해 문제의 정답은 아니나, 코드 자체와 발상은 깔끔한 Case

function solution(n, lost, reserve) {
	return (
		n -
		lost.filter((a) => {
			const b = reserve.find((r) => Math.abs(r - a) <= 1)
			if (!b) return true
			reserve = reserve.filter((r) => r !== b)
		}).length
	)
}
