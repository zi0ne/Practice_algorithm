function getAllElementsButLast(arr) {
    // 배열을 입력받아 마지막 요소를 제외한 배열을 리턴해야 합니다.
    // 새로운 배열 선언
    // 조건문 arr.length ===0 구분
    // splice 메서드 사용하여, 마지막 요소 지우고 리턴! 
    let arr2 = [];
    if(arr.lengrh === 0){
      return arr2;
    }
    else{
      arr.splice(-1,1);
      arr2 =arr;
      return arr2;
    }
  
  }
  