function findMatryoshka(matryoshka, size) {
  //러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.
  // base >> 빈 객체 >> false
  // size가 matryoshka.size와 같을경우 >> true
  // 그것보다 작을 경우 >> findMatryoshka(matryoshka.matryoshka, size) >> 사이즈가 작을 수록 깊이 중첩되어있음

  if(matryoshka.size === size){
    return true;
  } 
  else if(matryoshka.size > size && matryoshka.matryoshka !== null){
    return findMatryoshka(matryoshka.matryoshka, size)
  }

  return false;
  
}
