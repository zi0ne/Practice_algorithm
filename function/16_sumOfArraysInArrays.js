function sumOfArraysInArray(arr) {
    // 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(number)의 합을 리턴해야 합니다.
    // 1차원 배열로 만들기 >> reduce 와 concat을 사용하여 새로운 배열에 1차원 배열로 할당
    // filter를 이용하여 number 타입인 경우에만 배열에 저장
    // reduce를 이용하여 숫자들의 합을 리턴
  
    const arr2 = arr.reduce((acc,cur) => acc.concat(cur));
  
    const arr3 = arr2.filter((data) => typeof data === 'number');
   
    return arr3.reduce(((acc,cur) => acc + cur),0);
  }
  