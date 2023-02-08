function countNumberOfKeys(obj) {
  // 객체를 입력받아 속성의 개수를 리턴해야 합니다.
  // 카운트를 할 변수를 선언
  // for in 문으로 객체 내 모든 속성 접근
  // 반복문 안에 변수에 중감식 넣기
  // 선언한 변수 리턴
  let cnt = 0;
  for(let prop in obj){
    cnt += 1;
  }
  return cnt;
  
}
