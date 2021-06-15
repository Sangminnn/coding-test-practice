function solution(name) {
	let vertical_count = 0
	let dictionary = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	]

	function calculate_horizontal(name) {
		let repeat_array = []
		let count = 0

		// 0번째 인덱스는 중요하지않음. 이후의 이동 방향을 찾는것이기 때문
		for (let i = 1; i < name.length; i++) {
			if (name[i] === 'A') {
				count++
			} else {
				if (name[i - 1] === 'A') {
					repeat_array.push(count)
					count = 0
				}
			}
		}
		// 잔여 count가 있다면 repeat_array에 추가
		if (count > 0) repeat_array.push(count)

		if (repeat_array.length === 0) return name.length - 1
		if (repeat_array.length === 1) return name.length - 2
		// 0번 인덱스가 마지막 인덱스보다 크거나, repeat_array가 1이면 무조건 역방향
		// 역방향이면 0번 인덱스 제외
		if (repeat_array[0] > repeat_array[repeat_array.length - 1]) {
			repeat_array.shift()
			return repeat_array.reduce((total, cur) => total + cur) + 1
		} else {
			repeat_array.pop()
			return repeat_array.reduce((total, cur) => total + cur)
		}
	}

	function calculate_vertical(targetAlp) {
		let targetIndex = dictionary.findIndex((alp) => alp === targetAlp)

		// 위로 이동하는 횟수가 더 많으면 아래 값 리턴, 아니면 그 반대
		return targetIndex > dictionary.length - targetIndex ? dictionary.length - targetIndex : targetIndex
	}

	// 전체를 돌면서 A가 아니면 calculateVertical을 태워준다.
	// 그 합을 누산하다가, 끝나면 horizontal 값을 더해서 return

	name.split('').forEach((alp) => {
		if (alp !== 'A') vertical_count += calculate_vertical(alp)
	})

	return vertical_count + calculate_horizontal(name)
}
