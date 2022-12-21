function removeFromBackOfNew(arr) {
    // 배열을 입력받아 배열의 마지막 요소가 제외된 새로운 배열을 리턴해야 합니다.
    //slice 메서드를 활용한다
    //새로운 배열 선언
    // 새로운 배열에 arr를 slice(0,arr.length-1)
    
    let arr2 = arr.slice(0,arr.length-1);
    return arr2; 
  }
  