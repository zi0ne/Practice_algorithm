function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  // 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우,
  // 배열의 각 요소를 제곱한 새로운 배열을 리턴해야 합니다.
  //조건문으로 키의 값이 배열인지 확인 >> is Array
  // map을 사용하여 제곱한 값을 리턴
  const data = obj[property];
  if(Array.isArray(data)){
    return data.map(function(el){
      return square(el);
    })
  
  }
  else{
    return [];
  }
}
