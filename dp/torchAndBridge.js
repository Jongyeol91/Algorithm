// 4, 1, 2, 5, 10
// 1, 2, 3, 4, 5, 6, 7

// => 1,2
// <= 1
// 3

// (1,3,4,5,6,7) / (2)
// => 6,7
// <= 2
// 9

// (1,2,3,4,5) / (6,7)
// => 1,2
// <= 1
// 3

// (1,3,4,5) / (2,5,6,7)
// => 4,5
// <= 2
//7

// (1,2,3) / (4,5,6,7)
// => 1,2
// <= 1
// 3

// (1,3)
// => 1,3
// 3

// 일반 (11초)
// (1,2,3,4)
// => 1,2
// <= 1
// 3

// (1,3,4) / (2)
// => 1,3
// <= 1
// 4

//(1,4) / (2,3)
// => 1,4
// 4

// 다이나믹 (11초)
// (1,2,3,4)
// => 1,2
// <= 1
// 3

// (1,3,4) / (2)
// => 3,4
// <= 2
// 6

// (1,2) / (3,4)
// => 1,2
// 2
timeToCross = [1,2,3,4,5,6,7];

function totalTime (timeToCross, n) {
  //Either 2 people or 1 person.
  if (n < 3) {
    //as the elements are sorted.
    return timeToCross[n - 1];
  }
  //3 people will be addition of all.
  else if (n == 3) {
    return timeToCross[0] + timeToCross[1] + timeToCross[2];
  }
  // n >= 4
  else {
    let timeTakenCaseOne = timeToCross[1] + timeToCross[0] + timeToCross[n-1] + timeToCross[1];
      return timeTakenCaseOne + totalTime(timeToCross, n - 2);
  }
}

console.log(totalTime(timeToCross, 7));