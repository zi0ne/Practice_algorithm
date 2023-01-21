function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  //객체와 키를 입력받아 키에 해당하는 값이 배열인 경우,
  // 100 보다 작은 요소들만 갖는 배열을 리턴해야 합니다.
  // 조건문을 사용하여 배열인지 가려내기
  // 배열이 아니라면 빈배열 리턴
  // 배열이라면, 함수생성하여 넘버타입인지 가려내는 동작 만들기
  // lessThan100 함수와 새로만든 함수로 필터링 한 값 리턴
  
  if(Array.isArray(obj[property])){
    const func = function(data){
      return typeof(data) === 'number'
    }
    output = obj[property].filter(lessThan100);
    return output2 = output.filter(func);
  }
  else{
    return []
  }
}