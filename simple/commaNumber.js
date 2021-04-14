// 코테 아쉬웠던 점 보완

// [문제]
// 3자리 마다 ','로 구분할 수 있는 숫자를 반환하는 함수 작성
// 예를들어 123456이 들어오면 123,456을 반환해야 하고, 1234이 들어오면 1,234를 반환해야 한다.
// 즉 어떤수가 들어오던 큰 수를 표현할때 읽기 쉽게 붙이는 콤마의 형태로 반환해야 한다.

// [해결]
function createCommaSeparatedNum(number) {
  const numArr = number.toString().split('');
  const tempArr = [];
  let cnt = 0;
  for (let i = numArr.length - 1; i >= 0; i--) {
    cnt++
    tempArr.unshift(numArr[i]);
    if (cnt === 3 && i !== 0) { // 3번 지날때 마다 뒤에서 콤마를 붙여주지만 맨 앞에는 콤마를 붙이지 않는다.
      tempArr.unshift(',');
      cnt = 0;
    }
  }
  const answer = tempArr.join('');
  console.log(answer);
}


// 테스트 케이스
createCommaSeparatedNum(1)
createCommaSeparatedNum(12)
createCommaSeparatedNum(123)
createCommaSeparatedNum(1234)
createCommaSeparatedNum(12345)
createCommaSeparatedNum(123456)
createCommaSeparatedNum(1234567)
createCommaSeparatedNum(12345678)
createCommaSeparatedNum(123456789)

// 출력
// 1
// 12
// 123
// 1,234
// 12,345
// 123,456
// 1,234,567
// 12,345,678
// 123,456,789
