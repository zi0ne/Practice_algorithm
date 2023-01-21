function checkEvenOrNot(arr) {
  // 수를 요소로 갖는 배열을 입력받아 각 요소가 2의 배수인지에 대한 정보를 요소로 갖는 
  // 새로운 배열을 리턴해야 합니다.
  // 2의 배수인 경우, ok 아닌 경우 no 리턴
  // map 할 함수 안에 조건문을 사용하여, 2의 배수인지 아닌지 판별, 
  // 0이라면 'no' 리턴
  // 배수가 맞을 경우 'ok' 리턴 
  // 아닐경우 'no' 리턴

  return arr.map((el)=>{
    if (el === 0){
      return 'no';
    }
    else if(el % 2 === 0){
      return 'ok';
    }
    else{
      return 'no';
    }
  
  }
  )}