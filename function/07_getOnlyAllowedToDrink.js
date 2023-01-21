function getOnlyAllowedToDrink(arr) {
  //개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 18세 이상인 사람의 이름을 
  //요소로 갖는 배열을 리턴해야 합니다.
  // 함수를 하나 만들어서 18세 이상일때 를 얻을 수 있도록 filter
  // map 으로 filter된 요소의 키 name의 값들을 배열에 저장
   
  const pAge = function(data){
    return data.age >= 18;
  }
  const oldAge = arr.filter(pAge);
  return output = oldAge.map(function(data){
    return data.name;
  })
}