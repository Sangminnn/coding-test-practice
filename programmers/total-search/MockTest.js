function solution(answers) {
	let answer = []

	// answers의 길이만큼 수포자들의 답을 세팅해준다.
	function makeMathHater(length) {
		let hater_1 = [1, 2, 3, 4, 5]
		let hater_2 = [2, 1, 2, 3, 2, 4, 2, 5]
		let hater_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

		return [
			[
				...hater_1
					.join('')
					.repeat(parseInt(length / hater_1.length))
					.split(''),
				...hater_1.splice(0, length % hater_1.length),
			],
			[
				...hater_2
					.join('')
					.repeat(parseInt(length / hater_2.length))
					.split(''),
				...hater_2.splice(0, length % hater_2.length),
			],
			[
				...hater_3
					.join('')
					.repeat(parseInt(length / hater_3.length))
					.split(''),
				...hater_3.splice(0, length % hater_3.length),
			],
		]
	}

	// return 값은 얼마나 맞췄는지 개수를 반환해주는 것이다.
	function checkAnswer(person) {
		if (!person) return 0

		return person
			.map((number, index) => {
				if (+number === answers[index]) return true
				return false
			})
			.filter((bool) => bool).length
	}

	// 수포자 답안지를 가지고 오고 채점하여 배열로 가지고 있고
	let answerArray = makeMathHater(answers.length).map((array) => checkAnswer(array))

	// 배열내의 최댓값을 구하여 해당 값을 가진 배열을 return한다.
	let bestScore = Math.max.apply(null, answerArray)

	answerArray.forEach((person, index) => {
		if (bestScore === person) answer.push(index + 1)
	})

	return answer
}

// best 풀이
function solution(answers) {
	var answer = []
	var a1 = [1, 2, 3, 4, 5]
	var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
	var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

	var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length
	var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length
	var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length
	var max = Math.max(a1c, a2c, a3c)

	if (a1c === max) {
		answer.push(1)
	}
	if (a2c === max) {
		answer.push(2)
	}
	if (a3c === max) {
		answer.push(3)
	}

	return answer
}
