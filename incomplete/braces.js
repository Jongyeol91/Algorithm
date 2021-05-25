const solution = (exampleArr) => {
  let answerArr = [];
  for (let i = 0; i < exampleArr.length; i++) {
  let message = 'YES';
    let strArr = exampleArr[i].split("");
    console.log(strArr)
    if (strArr.length % 2 === 0) {
      for (let i = 0; i < strArr.length / 2; i++) {
        if (strArr[i].charCodeAt() === 91 && strArr[strArr.length - i - 1].charCodeAt() !== 93) {
          message = 'NO'
        }
        if (strArr[i].charCodeAt() === 123 && strArr[strArr.length - i - 1].charCodeAt() !== 125) {
          message = 'NO'
        }
        if (strArr[i].charCodeAt() === 40 && strArr[strArr.length - i - 1].charCodeAt() !== 41) {
          console.log(strArr[i].charCodeAt())
          console.log(strArr[strArr.length - i - 1].charCodeAt())
          message = 'NO'
        }
      }
    }
  console.log(message)
    answerArr.push(message)
  }
  {([})]


  return answerArr;
}

let exampleArr = ['[{()}]', '[{]}']
let result = solution(exampleArr);
console.log(result)