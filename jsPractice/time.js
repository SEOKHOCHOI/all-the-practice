// 타이머 관련 기능
// 모두 윈도우 객체의 메소드 들이다.
// 웹 화면 통해서 스탑워치, 시계 구현에 좋은 메소드들.

// setTimeout
/*
  정해진 시간이 지나고 나면 주어진 함수를 실행 해주는 타이머 메소드!
  사용방법:
  setTimeout(실행할_함수, ms_단위의_시간)
  첫번째 인자는 콜백함수, 두번째 인자는 밀리초 단위의 시간을 의미하는 숫자데이터.
 */
// 1000ms(1초) 가 지나고 나면 함수를 실행한다!
setTimeout(function(){
  console.log("재미있다!")
}, 1000)

// setInterval
/*
  일정한 시간 간격에 따라 함수를 반복 실행할 수 있도록 해주는 타이머 메소드!
  사용방법:
  setInterval(반복_실행할_함수, ms_단위의_시간)
*/
// 500ms 마다 함수를 반복 실행한다!
setInterval(function(){
  console.log("안녕하세요^^")
}, 500)

// clearInterval
/*
  setInterval 메소드가 호출되어 반복 실행할 함수 타이머를 등록하면,
  타이머는 0이 아닌 숫자를 반환한다. 숫자는 타이머의 ID를 의미하며,
  이를 clearInterval 메소드에 전달하면 해당 타이머의 반복 실행이 취소된다.

  setInterval을 여러번 호출하게되면 반복실행되는 타이머도 여러개가
  만들어지기 때문에, setInterval은 이러한 식별자를 반환하도록 설계가 돼있다.
  그리고 이 식별자를 clearInterval 메소드에 전달하면 반복실행이 취소된단거다.
*/
// 셋팅된 타이머의 반환값(ID)을 변수에 저장하자
let timer;
timer = setInterval(function(){
  console.log("안녕하세요^^")
}, 500)

// 셋팅된 타이머를 멈춰주세요(취소해주세요)!
clearInterval(timer)




// 실습
/*
  setInterval은 주기적으로 함수를 호출하는 타이머를 등록함과 동시에
  자신의 아이디를 반환한다. 그런데 이 id는 0이 아닌 정수값을 반환하게
  되는것이고 랜덤으로 반환이 된다.
*/
const button = document.querySelector('button')

let interId;
interId = setInterval(function(){
  console.log("Hello")
}, 2000)
console.log(interId)

button.addEventListener('click', function(){
  clearInterval(interId)
})