function solution(brown, yellow) {
	// 아이디어로는 Yellow의 공약수를 구해서 쌍을 만들어주고,
	// 감싸고있는 brown수와 같은지 검증하여 맞다면 해당 쌍을 return 시켜줘야 할듯
	let answer = []
	let shape = []
	let k = 0

	// 나눈 값의 나머지가 없는 경우 (약수)에는 shape에 넣어준다.
	for (let i = 0; i <= yellow; i++) {
		if (yellow % i === 0) shape.push(i)
	}

	// answer배열에 쌍을 만들어서 넣어준다.
	for (let j = 0; j <= Math.ceil(shape.length / 2); j++) {
		answer.push([shape[shape.length - j - 1], shape[j]])
	}

	while (k <= answer.length) {
		if (brown === (answer[k][0] + 2) * 2 + answer[k][1] * 2) {
			return [answer[k][0] + 2, answer[k][1] + 2]
		}
		k++
	}
}

// Best 풀이

function solution(brown, yellow) {
	for (var i = 3; i <= (brown + yellow) / i; i++) {
		var x = Math.floor((brown + yellow) / i)
		if ((x - 2) * (i - 2) === yellow) {
			break
		}
	}

	return [x, i]
}
