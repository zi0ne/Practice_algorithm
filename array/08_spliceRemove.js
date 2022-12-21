function removeFromFront(arr) {
    //배열을 입력받아 배열의 첫번째 요소가 삭제된 배열을 리턴해야 합니다.
    //새로운 배열을 선언 / 할당해서 리턴하지 않습니다.
    // splice 메서드를 사용하여, 첫번째 요소[0] 1개삭제 리턴
  
    arr.splice(0,1);
    return arr;
  }
  