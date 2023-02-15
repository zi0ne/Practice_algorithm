function select(arr, obj) {
  // 배열과 객체를 입력받아 배열의 각 요소들을 객체의 키로 했을 때 
  // 그 값을 추출하여 만든 새로운 객체를 리턴해야 합니다.
  // 새로운 obj 선언
  // for문으로 객체를 돌아본다
  // 반복문 안에서 조건문을 넣어 해당 객체가 배열에 포함되어 있는가를 확인
  //  includes 를 사용하여 확인하여 true일 경우,
  // 새로운 obj 에 추가
  // 새로운 obj 리턴

  let obj2= {};
  for(let prop in obj){
    if(arr.includes(prop)){
      obj2[prop] = obj[prop];
    }
  }  
  return obj2;

}
