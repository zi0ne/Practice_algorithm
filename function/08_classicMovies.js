function classicMovies(arr, year) {
  // 영화 정보가 담긴 객체를 요소로 갖는 배열과 연도를 입력받아 
  //해당 연도 이전의 영화를 요소로 갖는 배열을 리턴해야 합니다
  // 출력시 영화 제목 by 영화 감독의 형태를 가져야 합니다.

  // 영화의 arr 의 year가 해당연도 이전인지를 확인 >> filter 사용
  // 출력은 arr['title'] by arr['director']

  const movie = arr.filter((el)=>{
    return el['year'] < year;
  })
  return movie.map((el)=>{
    return `${el['title']} by ${el['director']}`;
  })
}