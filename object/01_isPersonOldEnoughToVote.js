function isPersonOldEnoughToVote(person) {
    // 객체를 입력받아 객체가 가진 age 속성값이 합법적으로 투표할 수 있는 나이(18세 이상)인지 여부를 리턴해야 합니다
    // 조건문을 통해 객체의 age 값이 18세 이상인지를 비교 하여 18세 이상이라면 true 리턴
    // 아니라면 false 리턴
    
    if(person['age'] >= 18){
      return true;
    }
    else{
      return false;
    }
  }
  