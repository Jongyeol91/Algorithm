const arr = [3, 3, 1, 2, 1];

counter = Object.create(null);
arr.forEach(function(word) {
  counter[word] = (counter[word] || 0) + 1;
});


var sortable = [];
for (var vehicle in counter) {
  sortable.push([vehicle, counter[vehicle]]);
}

console.log((sortable))

sortable.sort(function(a, b) {
  if (a[1] > b[1]) return -1;
  if (a[1] < b[1]) return 1;

  // 스코어 오름차순 정렬된 상태에서 우선순위별로 오름차순 정렬
  if (a[0] > b[0]) return -1;
  if (a[0] < b[0]) return 1;
});

console.log()


