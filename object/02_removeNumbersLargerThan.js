function removeNumbersLargerThan(num, obj) {
  // 수와 객체를 입력받아 입력받은 수보다 큰 수를 갖는 속성을 모두 제거해야 합니다.
  //대소 비교는 number 타입에만 적용합니다.
  // for in 반복문으로 obj 속성 모두를 확인
  // 조건문을 통해 number 타입인지 확인 && num 보다 값이 큰지 확인
  // true 라면 delete 

  for(let prop in obj){
    if(typeof(obj[prop]) === 'number' && obj[prop] > num){
      delete obj[prop];
    }
  }

}