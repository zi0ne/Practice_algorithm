function getElementsUpTo(arr, n) {
    //배열과 인덱스를 입력받아 주어진 인덱스 이전의 요소들을 갖는 새로운 배열을 리턴해야 합니다.
    //새로운 배열 선언
    // slice 메서드 이용(0)부터 n까지
    // 조건문 1. arr.length ===0  2. arr.length < n
    let arr2 = [];
    if(arr.length === 0){
      return arr2;
    }
    else if(arr.length < n){
      return arr2;
    }
    else{
    arr2 =arr.slice(0,n);
    return arr2;
    }
  }
  