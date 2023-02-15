function getValueOfNthElement(arr, num) {
  /*배열과 수를 입력받아 수가 가리키는 인덱스에 해당하는 
   객체의 'name' 속성값을 리턴해야 합니다.
  */
  //빈 배열을 입력받은 경우, 'no name'을 리턴해야 합니다.
  //배열의 범위를 벗어나는 인덱스를 입력받은 경우, 마지막 객체의 'name' 속성값을 리턴해야 합니다.
  // 조건문으로 배열의 길이가 0일 때, 'no name' return
  // 배열의 길이가 num보다 작을때, arr[length-1] 의 객체에 name 속성값 리턴
  // 모두 다 아닐 때. arr[num]의 name 속성값 리턴 

  if(arr.length === 0){
    return 'no name';
  }
  else if(arr.length-1 < num){
    return arr[arr.length-1].name;
  }
  else{
    return arr[num].name;
  }

}
