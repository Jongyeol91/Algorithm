// jongyeol 풀이
// 우선 큐를 클래스 문법을 통해서 만들었다.  (백준 채점 시스템은 현재 Node.JS 버전10이며, ES6를 지원하기에 클래스 문법이 가능
// 백준 알고리즘을 node.js로 풀때 또 중요한것이 node.js의 입력과 출력을 잘 알고 있어야 한다.
// 백준에서 명시하고 있는 표준 입출력 방식은 아니지만 readline이라는 내장 모듈을 사용.

// 입력방법: 행과 열을 입력후 1,0 으로 통로와 벽을 구분해준다.

// 4 4
// 1110
// 1000
// 1011
// 1111

const readline = require("readline");

class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(params) {
    this.data.push(params);
  }
  dequeue() {
    return this.data.shift();
  }
  isEmpty() {
    if (this.data.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

function Location(x, y) {
  (this.curX = x), (this.curY = y);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let map = [];
let cnt = 0;
let N = 0;
let M = 0;

rl.on("line", function(line) {
  if (cnt === 0) {
    N = parseInt(line.split(" ")[0]);
    M = parseInt(line.split(" ")[1]);
  }
  if (cnt >= 1) {
    map.push(line.split("").map(Number));
  }
  if (cnt === M) {
    rl.close();
  }
  cnt++;
}).on("close", function() {
  const dx = [0, 1, 0, -1]; // 북, 동, 남, 서
  const dy = [1, 0, -1, 0]; // 북, 동, 남, 서

  const queue = new Queue();
  map[0][0] = -1;
  const location = new Location(0, 0);
  queue.enqueue(location);
  outer: while (!queue.isEmpty()) {
    let loc = queue.dequeue(); // 큐에서 나온 위치 객체
    for (let i = 0; i < 4; i++) {
      let _x = loc.curX + dx[i];
      let _y = loc.curY + dy[i];

      // 범위를 넘어가면
      if (_x < 0 || _y < 0 || _x >= N || _y >= M) {
        continue;
      }
      // 이미 방문한 노드면
      if (map[_x][_y] === -1) {
        continue;
      }

      // 북, 동, 남, 서 차례로 검사해서 길이 있으면
      if (map[_x][_y] === 1) {
        // 좌표를 가지고 있는 위치 인스턴스를 생성한다.
        const location = new Location(_x, _y);
        // 큐에 위치 인스턴스를 넣는다.
        queue.enqueue(location);
        // 지도에 몇번째 시도로 도착했는지 흔적을 남긴다 (지도의 자연수와 섞이지 않게 음수로 흔적을 남김)
        map[_x][_y] = map[loc.curX][loc.curY] - 1;
        if (_x === N - 1 && _y === M - 1) {
          break outer; // 바깥 while문을 탈출한다.
        }
      }
    }
  }
  console.log(map[N - 1][M - 1] * -1); // 거리를 출력
});