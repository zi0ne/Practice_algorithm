function addToFrontOfNew(arr, el) {
    //배열과 요소를 입력받아 맨앞에 새로운 요소가 추가된 새로운 배열을 리턴해야 합니다.
    //새로운 배열 선언
    //arr를 새로운 배열에 복사하기
    //새로운 배열을 unshift를 사용하고 리턴!
  
    let arr2 = [];
    arr2 = [...arr];
    arr2.unshift(el);
    return arr2;
  }
  