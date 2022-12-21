function addToBackOfNew(arr, el) {
    // 배열과 요소를 입력받아 새로운 요소가 추가된 새로운 배열을 리턴해야 합니다.
    //  splice, push는 원본 배열이 바뀌는 메서드
    // 새로운 배열에 arr 복사하기 (shallowCopyFrom )
    // 새로운 배열에 push 사용하여 el 넣기
    // 리턴!
    let arr2 = [...arr];
    arr2.push(el);
    return arr2;
  
  
  }