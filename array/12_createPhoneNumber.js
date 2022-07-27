/*function createPhoneNumber(arr) {
  // 0-9 사이의 정수를 요소로 갖는 배열을 입력받아 전화번호 형식의 문자열을 리턴해야 합니다.
  // 조건문으로 arr.length 가 11 / 8인지 구분
  // 1. 11인 경우, : 앞의 3개의 값은 ([0][1][2])로, 뒤에는 4개의 단위로 끊어 문자열로 반환
  // 2. 8인 경우, : (010) + 인덱스 값4개 단위로 끊어서 문자열로 반환

  if(arr.length === 8){
    return (`(010)${arr[0]}${arr[1]}${arr[2]}${arr[3]}-${arr[4]}${arr[5]}${arr[6]}${arr[7]}`);
  }
  else{
    return(`(${arr[0]}${arr[1]}${arr[2]})${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`);
  }

}
*/



// join 배열의 모든 요소를 연결하여 하나의 문자열로 만듭니다.
// join((구분자))
 // 조건문으로 arr.length 가 11 / 8인지 구분
  // 1. 11인 경우, : 앞의 3개의 값은 ([0][1][2])로, 뒤에는 4개의 단위로 끊어 문자열로 반환
  // 2. 8인 경우, : (010) + 인덱스 값4개 단위로 끊어서 문자열로 반환
  /*
    function createPhoneNumber(arr) {
    let head =[];
    let body = [];
    let tail = [];

    if(arr.length === 8){
      head = [0,1,0].join("");
      body = arr.slice(0,4).join("");
      tail = arr.slice(4,8).join("");
    }
    else{
      head = arr.slice(0,3).join("");
      body = arr.slice(3,7).join("");
      tail = arr.slice(7,12).join("");

    }
      return (`(${head})${body}-${tail}`);
  }
  */
  
  
  // 운도님의 힌트 <11자리뒤의 8자리와 = 8자리 뒤의 8자리>
  // 
  function createPhoneNumber(arr) {
    let len= arr.length;
    let head ='010';
    let body = arr.slice(len - 8 ,len - 4).join("");
    let tail = arr.slice((len - 4) , len+1).join("");

    if(len === 8){
      return  (`(${head})${body}-${tail}`);
    }
    else{
     head = arr.slice(0,3).join("");

    }
      return (`(${head})${body}-${tail}`);
  }