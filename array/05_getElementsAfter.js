function getElementsAfter(arr, n) {
    // 배열과 인덱스를 입력받아 주어진 인덱스 이후의 요소들을 갖는 새로운 배열을 리턴해야 합니다.
    // 새로운 배열 선언 빈 배열로 할당
    // 조건문  arr.length로 구분, 1. 0  2. arr,length < n 
    // slice 메서드 사용(시작 인덱스, 끝 인덱스 -1)
    // 시작은 n+1부터,[length]까지.
    
    let arr2= [];
    if(arr.length === 0){
      return arr2;
    }
    else if(arr.length < n){
      return arr2;
    }
    else{
      arr2 = arr.slice(n+1, arr.length);
      return arr2;
    }
  
  }