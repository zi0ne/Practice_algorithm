function findShortestWord(arr) {
  // 배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴해야 합니다.
  // 주어진 배열이 빈배열인지 아닌지 조건문을 사용하여 판단, 빈배열 >> 빈 문자열 리턴
  // 문자열인지 아닌지 필터링을 통해 확인
  // reduce 함수를 사용하여 길이가 짧은 문자열 요소를 얻고, 리턴 >> 길이 같은경우, 앞의 것으로 리턴해야함
  //
  //
  const arr2 = arr.filter(function(data){
    return typeof(data) === 'string';
  })

  if(arr2.length === 0 ){
    return '';
  }
  else{
      return arr2.reduce(function(acc,cur){
        if(acc.length <= cur.length){
          return acc;
        }
        else{
          return cur;
        }
      })
    }
    
  }
  


