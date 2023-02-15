function getLastElementOfProperty(obj, property) {
  // 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소를 리턴해야 합니다.
  //주어진 키에 해당하는 값이 배열이고, 빈 배열이 아닌 경우에만 배열의 요소를 리턴해야 합니다.
  // 조건문으로 해당 키의 값이 배열인지 isArray로 확인
  //true 일경우, arr[arr.length-1]의 값을 리턴
    if(Array.isArray(obj[property])){
      return obj[property][obj[property].length-1];
    }
    else{
      return undefined;
    }

}