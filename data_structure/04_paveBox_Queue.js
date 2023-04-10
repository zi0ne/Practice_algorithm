function paveBox(boxes) {
  // [5,4,1,6] >> return 3!!
  //먼저 포장을 전부 끝낸 사람이 있더라도, 앞사람이 포장을 끝내지 않았다면 나갈 수 없습니다.
  // boxes[0] 의 값보다 더 큰 수를 가지고 있는 인덱스 번호 찾기
  // 그 앞의 친구들은 한꺼번에 나갈 수 있다?
  // 앗,,, 첫번째 친구가 나갈때 몇명이 나갈 수 있는가가 아니라 그냥 한번에 최대로 나가는 인원수를 물어보는 것이었음.,..!



  // let head = boxes[0];
  // let count = 1;

  // for(let i = 1; i< boxes.length; i++){
  //   if(head < boxes[i]){
  //     break;
  //   }
  //   else{
  //     count += 1;
  //   }
  // }
  // return count;


  // 다시다시

  // 1. 처음 부터 차례로 확인 [95,90,99,99,80,99]라고 가정
  // 95입장! 90 보다 크다! / 99 보다 작다!
  //

  // let head = boxes[0];
  // let count = 1;

  // for(let i =0 ; i< boxes.length; i++){
  //   if(head >= boxes[i]){
  //     count +=1;
  //   }
  //   else{
  //     count = 1;
  //     head = boxes[i];
  //   }
  // }
  // return count;

  // 큐를 사용...!
  // boxes의 배열은 한 번 다 돌아야하지 않을까..
  // 큐에 boxes의 원소를 담는다
  // 큐의 첫 원소보다 작다면 그냥 담고
  // 큐의 첫 원소보다 작지 않다면??? >> 지금 큐의 길이를 저장, 그리고 삭제,,? 다음거를 봐야하니까..? 
  // 큐의 길이가 제일 길었을 때를 알아야할 것 같다
  // Math.max 메서드 비교해주는구나,,,!
  // 마지막 요소를 카운트 하려면, if 문 안에도 count 설정이 필요합니다!!(마지막 인덱스 처리!! 중요!! ?? if(i === boxes.length-1) result = Math.max()) 해주시죠!!


  let queue = [];
  queue.push(boxes[0]);
  let count =  queue.length; 
  
  
  for(let i = 1; i < boxes.length; i++){ 

  if(queue[0] >= boxes[i]){
    queue.push(boxes[i]);
    count = queue.length;
    
  }
  else{
    count = Math.max(queue.length, count); 
    queue = [];
    queue.push(boxes[i]);
  }
  }
  return count;

}