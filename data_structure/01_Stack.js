class Stack { //Stack 이라는 클래스 만들기 
  constructor() {
    this.storage = {}; // 저장소를 만들고
    this.top = -1; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화 합니다.
  }

  size() {
    return this.top + 1;  // 스택의 사이즈, top(상단) 으로만 데이터가 들어오기 때문에 크기도 top(-1) +1 = 0, 데이터가 들어와서 top이 +1 >> (0) + 1 = 1 사이즈를 나타냄 
  }

	// 스택에 데이터를 추가 할 수 있어야 합니다.
  push(element) {
    this.top += 1;   // 추가 >> 처음 들어온 데이터가 제일 뒤 (-1)번 그 다음이 그 앞 (0)번 .....
    this.storage[this.top] = element;
  }
	
	// 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.size() === 0) {
      return;
    }

    const result = this.storage[this.top];  // top 위치에 데이터를 넣었음 제일 마지막에 넣은 위치가 top 이므로 stack 구조상 그게 먼저 나가야 함.
    delete this.storage[this.top]; // stack 에서 빠져나왔으니 지우기
    this.top -= 1; // 빠져나왔으니 top 위치 조정
    
    return result;
  }
}