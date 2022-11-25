function mergeArrays(arr1, arr2) {
    // 두 개의 배열을 입력받아 순서대로 합쳐진 배열을 리턴해야 합니다.
    // 두 개의 배열을 합쳐줄 때 concat() 메서드 사용
    // 두 배열을 합친 값을 넣어줄 새로운 배열 선언
    // arr1에 arr2를 합쳐주고 리턴
    let arr3= [] ;
    arr3 = arr1.concat(arr2);
    return arr3;
  }
  