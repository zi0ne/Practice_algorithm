function reverseArr(arr) {
  //배열을 입력받아 순서가 뒤집힌 배열을 리턴해야 합니다.
  // base >> 빈배열  >> return []
  // 새로운 변수 선언, arr[0] 저장
  // shift() 사용하여 첫 요소 제거
  // return concat을 이용하여 뒤에 연결하기

  if(arr.length === 0){
    return [];
  }

  let newArr = arr[0];
  arr.shift();
  return reverseArr(arr).concat(newArr);
}
