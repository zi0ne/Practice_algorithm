//입력된 괄호 값들이 모두 쌍이 맞게 올바른지를 판단해 모두 쌍이 맞으면 true 그렇지 않으면 false를 출력하세요.
const isValid = (str) => {
  if(str.length === 0){ // 입력이 비어있다면 false
    return false;
  }

  let twin = { // 괄호의 쌍 맞추기
    '[' : ']',
    '{' : '}',
    '(' : ')'
  }

  let arr = str.split(""); // 입력 값 스플릿하여 배열로 저장
  let stack = []; // stack 사용 배열

  for(let i =0; i< arr.length; i++){ // 반복문을 통해 괄호 확인
    if(arr[i] === '[' || arr[i] === '{' || arr[i] === '('){ // 열린 괄호 스택에 넣기
     stack.push(arr[i]);
    }
    else{ // 닫힌 괄호가 들어왔다면
      let top = stack[stack.length -1]; // 그 전에 열린괄호 확인
      if(twin[top] !== arr[i]){ // 쌍이 맞지않다면
        return false; // false
      }
      stack.pop(); // 쌍이 맞다면 스택에서 아웃
    }

  }
  return stack.length ? false : true; // 스택의 길이가 있다면 >> 쌍이 맞지 않았다는 것 false, 길이가 없다면 >> 쌍이 맞아서 pop true
}
