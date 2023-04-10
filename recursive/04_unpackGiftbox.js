function unpackGiftbox(giftBox, wish) {
  // 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.
  // base >> 빈배열 >> false
  // 반복문을 통해 giftBox 안의 요소를 확인한다.
  // 이때 만약 wish 가 있다면 true 리턴
  // 만약 giftBox의 i번째 요소가 배열이라면, 다시 한 번 unpackGiftbox를 진행(giftBox[i], wish)
  // 다시 한 번 진행한 unpackGiftbox가 true 라면, true 리턴
  // 다 아니라면 false 리턴

  for(let i =0; i< giftBox.length; i++){
    if(Array.isArray(giftBox[i])){
      let again = unpackGiftbox(giftBox[i], wish);
      if(again === true){
        return true;
      }
    }
    else if(giftBox[i] === wish){
      return true;
    }
  }
  return false;
}