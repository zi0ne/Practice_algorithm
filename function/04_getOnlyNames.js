function getOnlyNames(arr) {
  // 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아
  // 각 객체의 'name' 속성을 요소로 갖는 배열을 리턴해야 합니다.
  // map 사용
  
  return arr.map(function(data){
    return data.name;
  })

}