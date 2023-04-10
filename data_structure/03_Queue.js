class Queue {
  constructor() {
    this.storage = {};
    this.front = 0; // 앞
    this.rear = 0; // 뒤
  }

  size() {
    return (this.rear - this.front); // 뒤의 인덱스 넘버에서 앞의 인덱스 넘버 빼기
  }
	
	// 큐에 데이터를 추가 할 수 있어야 합니다.
  enqueue(element) {
    this.storage[this.rear] = element; // 큐는 데이터가 앞 >>>> 뒤 순차적 차곡 쌓임
    this.rear += 1;  // 뒤로 데이터 넣기
  }
	
	// 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
  dequeue() {
    // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
    if(this.size() === 0) {  // 큐가 비었을 때
      return;
    }
  // 큐가 안비었을 때
    const result = this.storage[this.front]; // 꺼내는건 앞에서 부터
    delete this.storage[this.front];
    this.front += 1; // 하나 꺼내져서 사라졌으므로 front는 그 뒤의 넘버

    return result;
  }
}