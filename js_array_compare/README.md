#### js에서 배열끼리 비교하는 방법들에 대하여 정리해 보았습니다.  
#### 알고리즘 뿐만 아니라 실무에서도 유용하게 사용될 것 같습니다.

## 주어진 배열 2개

```jsx
var a1 = ['a', 'b',     ];
var a2 = [     'b', 'c'];
```

## a에 대한 a2의 차집합 구하기(difference) ['a'] 
#### plain javascript

- a에 대한 a2의 차집합이란, a에만 있고 a2는 없는 원소를 구하는 것이다.
- indexOf 메서드는 배열을 순회할 때 값이 없으면 -1을 리턴한다.
- a2에 값이 없으면 result 배열에 push해줌으로서 차집합을 구할 수 있다. 

```js
function difference(a1, a2) {
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) { // a2의 원소가 a1에 속하지 않을때 result에 push
      result.push(a1[i]);
    }
  }
  return result;
}
```

#### ES6 Set
- set은 중복을 허용하지 않는 자료구조이다.
- 참고로 시간복잡도가 O(1)이기 때문에 중복을 제거하는데 매우 효율적이다.
- has 메서드와 filter를 통해 a1의 원소중에 a2Set에 속하지 않는 원소를 리턴하며 차집합을 구한다. 
```js
function difference(a1, a2) {
  var a2Set = new Set(a2);
  return a1.filter(function(x) { return !a2Set.has(x); });
}
```

#### ES7 includes
- includes 메서드는 es7에 추가된 어레이 메서드로서 배열에 특정 값이 속하면 true아니면 false를 반환한다.
- filter메서드와 includes메서드를 결합하여 a1의 원소가 a2에 속하지 않을때 리턴하여 차집합을 구한다.

```js
let difference = a1.filter(x => !a2.includes(x));
```

## a, a2 교집합 구하기 (intersection) ['b']
#### ES6 filter 
-  filter메소드를 통해 a1원소들을 순회할때 a2에 a1의 원소가 속하면 리턴
- indexOf는 인덱스의 값을 리턴하기에 -1을 꼭 명시해서 비교해줘야 한다.
```js
function intersection(a1, a2) {
    a1.filter(value => -1 !== a2.indexOf(value));
}
```

#### ES7 includes
```js
function intersection(a1, a2) {
    a1.filter(value => a2.includes(value));
}
```

### 대칭차 구하기 ['a', 'c'] (차집합 두번 구해서 합치면 됨) 
#### plain javascript

- 대칭차란 a, b 공통으로 속하는 원소를 뺀 나머지 모두의 원소들을 나타낸다.
- 각각의 차집합을 구해서 result배열에 더해줌으로서 구할 수 있다.
```js
function symmetricDifference(a1, a2) {
  let result = [];
  for (let i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }
  for (let i = 0; i < a2.length; i++) {
    if (a1.indexOf(a2[i]) === -1) {
      result.push(a2[i]);
    }
  }
  return result;
}
```

#### ES6 Set 
- 각각의 차집합을 구한 후 concat 메서드를 활용해서 두 배열을 이어준다.
```js
// 위의 차집합 es6 set과 동일한 함수
function difference(a1, a2) {
  var a2Set = new Set(a2);
  return a1.filter(function(x) { return !a2Set.has(x); }); // a2의 여집합을 구한다
}

function symmetricDifference(a1, a2) {
  return difference(a1, a2).concat(difference(a2, a1));
// a2의 여집합과 a1의 여집합을 합한다.
}
```