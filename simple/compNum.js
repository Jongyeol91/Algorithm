/** 입력 */
// 문자 다음는 항상 숫자
// 문자는 항상 소문자

/** 출력 */
// 1번이상 나오는 문자 뒤의 숫자의 합을 구하라
// 문자 + 합 형태로 구하라
// 출력문자 숫자는 입력 문자 순서와 동일

/** 예시 */
// b3c1a3c5
// => b3c6a3

// c14a4c4b4a3
// => c18a7b

/** 풀이 */
let answer = '';
const inputNum = 'a3c14d4';

// 배열로 만들기
const arr = inputNum.split("");
// key-value 만들기
obj = Object.create(null);
arr.forEach(function(word, idx) {
  if (!isNumeric(word)) { // 알파벳일경우
    for (let j = idx; j < arr.length; j++) {
      if (!isNumeric(arr[j+1])) {
        console.log(idx, j)
        obj[word] = (obj[word] || 0) + parseInt(arr.slice(idx+1, j+1).join(''));
        break;
      }
    }
  }
});

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

// key-value 순회하기
for (const [key, value] of Object.entries(obj)) {
  answer += `${key}${value}`;
}

console.log(answer);
