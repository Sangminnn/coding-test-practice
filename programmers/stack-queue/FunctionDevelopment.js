// 내가 만든 풀이

// 현재 진행 현황 - progresses
// 각 기능별 개발 속도 - speeds

function solution(progresses, speeds) {
	let answer_array = []
	let count = 0

	while (progresses.length > 0) {
		// 개발 하루치 1회 진행
		progresses = progresses.map((number, index) => number + speeds[index])

		// 안에 루프를 두어 첫번째 태스크가 100이 넘는지 체크하고 넘으면 제외해주면서 카운팅
		while (progresses[0] >= 100) {
			progresses.shift()
			speeds.shift()
			count++
		}
		answer_array.push(count)

		// count 초기화
		count = 0

		// 남은 progresses가 없다면 return 해주기
		if (progresses.length === 0) return answer_array
	}
}
