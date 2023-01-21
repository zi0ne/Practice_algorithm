function computeProductOfAllElements(arr) {
  // number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 곱을 리턴해야 합니다.
  // reduce 사용하여, 요소의 곱을 리턴
  // 빈배열을 입력받을 경우, 1을 리턴해야합니다. => 초기값 1

  return arr.reduce(function(acc,cur){
    return acc * cur;
  },1);

}
