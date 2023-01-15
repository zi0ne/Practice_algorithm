function calculateScore(records, value) {
  //객체를 요소로 갖는 배열과 문자열을 입력받아 각 요소의 'animal' 속성값이 문자열과 일치할 경우,
  // 해당 요소의 'score' 속성값을 모두 더한 값을 리턴해야 합니다.
  
  //'animal' 속성값이 문자열과 일치하는 경우를 filter로 걸러낸다.
  // 해당요소의 'score' 속성값 => map
  // 을 모두 더하기 => reduce 사용
  // 빈배열의 경우 0 리턴

  const animalArr = records.filter(function(data){
    return data['animal'] === value;
  })
  
  const animalArr2 = animalArr.map(function(data){
    return data['score'];
  })

  return animalArr2.reduce(function(acc,cur){
    return acc + cur;
  },0)
}
