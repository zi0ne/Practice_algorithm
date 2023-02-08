function getElementOfArrayProperty(obj, key, index) {
  let arrProperty = obj[key];
  /*객체, 키, 수를 입력받아 주어진 키에 해당하는 값이 배열인 경우,
   수가 가리키는 인덱스에 해당하는 요소를 리턴해야 합니다.
  */
  // 조건문으로 키 값이 배열인지 isArray로 확인 && 주어진 인덱스가 배열의 length -1 이하인 경우
  // 조건 충족 시 index가 가리키는 인덱스에 해당하는 요소를 리턴


  if(Array.isArray(arrProperty) && arrProperty.length > index){
    return arrProperty[index];
  }
}