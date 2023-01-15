function getLongestElement(arr) {
  // 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴해야 합니다.
  // 배열의 첫번째 요소의 길이를 저장할 변수가 필요
  // 계속해서 앞에서부터 두개씩 비교가 필요
  // 처음과 두번재 비교, 더 큰 값 얻고 > 더 큰 값과 그 다음값 비교 > 그 중 더 큰 값 얻기...
  // 조건문 사용하여 길이 비교
  // reduce는 누적한 값을 라턴하여 보여준다 > 를 이용
  
  // reduce 를 사용하여
  // 조건문으로 acc의 길이와 cur의 길이 중 어느게 더 큰지를 비교하기
  // 더 큰 값을 리턴
  // if문을 사용하여 빈배열인지 가려내기

  if(arr.length === 0){
    return '';
  }
  else{
  return (arr.reduce(function(acc,cur){
    if(acc.length < cur.length){
      return cur;
    }
    else{
      return acc;
    }
  })).length
  }
}
