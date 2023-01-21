function getFullNames(arr) {
  // 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 
  // 이름 전체를 요소로 갖는 배열을 리턴해야 합니다.
  // map 으로 firstName 속성과 lastName 속성의 문자열을 합쳐서 리턴!

  return arr.map((el)=>{
    return el['firstName'] + ' '+ el['lastName'];
  })

}
