function joinArrayOfArrays(arr) {
  // 2차원 배열(배열을 요소로 갖는 배열)을 입력받아
  // 배열들의 요소를 모두 담고 있는 단일 배열을 리턴해야 합니다.
  // reduce를 사용하여 acc cur 합치는 연산으로 합쳐주자!
  // concat, spread, push 를 사용하면 합치는 게 가능
  // spread는 새로운 배열을 생성하고 사용해야함
  // push 는 배열 자체가 들어가면 그 안의 요소가 몇개든 안의 요소가 하나의 요소로 바뀜
  // concat이 가장 적절하다.

  return arr.reduce(function(acc,cur){
    return acc.concat(cur);
  })
}