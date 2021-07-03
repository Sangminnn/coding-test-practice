function solution(s) {
  if (s.length % 2 === 1) return 'NO';

  let check_answer;

  function checkBalanced(str) {
    let caseA = str.match(/\(\)/g);
    let caseB = str.match(/\[\]/g);
    let caseC = str.match(/\{\}/g);

    if (!caseA && !caseB && !caseC) return false;

    if (caseA) return caseA[0];
    if (caseB) return caseB[0];
    if (caseC) return caseC[0];
  }

  while (s.length > 0) {
    check_answer = checkBalanced(s);

    if (!check_answer) return 'NO';

    s = s.replace(check_answer, '');
  }

  return 'YES';
}
