function computeAverageOfNumbers(arr) {
  // number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 평균을 리턴해야 합니다.
  // reduce 를 사용하여 배열의 전체의 요소의 합을 얻고, 
  // 얻은 요소의 합을 arr의 길이로 나눠 리턴해준다.
  // if 문을 이용하여 빈배열인지 아닌지 판별 > 빈배열일 경우 0 리턴


  const sum = arr.reduce(function(acc,cur){
    return acc+cur;
  },0)
  if(arr.length === 0){
    return 0;
  }
  else{
  return sum / arr.length;
  }
}
