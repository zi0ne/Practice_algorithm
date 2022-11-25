function getEvenNumbers(arr) {
  // 수를 요소로 갖는 배열을 입력받아 짝수만을 요소로 갖는 배열을 리턴해야 합니다.
  // 리턴할 값을 저장하는 새로운 배열 선언
  // 반복문을 통해 배열의 요소를 확인하여 짝수인지 확인, 짝수라면 배열안에 push
  // 짝수인 지를 확인할 때는 if문 사용 (%2 === 0)

  let arr2 = [];
  for(i = 0 ; i < arr.length; i++){
    if(arr[i] % 2 === 0 ){
      arr2.push(arr[i]);
    }
  }
  return arr2;
}