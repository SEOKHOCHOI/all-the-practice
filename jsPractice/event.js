// 이벤트(event)

/*
  '사용 중이거나 프로그래밍 중인 시스템 내에서 일어나는 사건'을 뜻한다.
  당연히 웹에서도 이벤트가 발생한다.

  웹에서 발생하는 이벤트의 예
    1. 웹페이지 사용자가 저튼을 클릭했다, 클릭 이벤트!
    2. 웹페이지 사용자가 키보드를 눌렀다, 키다운 이벤트!
    3. 웹페이지 사용자가 입력 폼의 내용을 제출했다, 제출 이벤트!
    4. 외 다수
*/

// 발생하면 어쩌지?
/*
  각각의 이벤트들은 모두 이벤트 핸들러(handler)를 가질 수 있다.
  이벤트 핸들러란 이벤트가 발생되면 실행될 코드 블록을 뜻하며,
  주로 함수가 이 역할을 담당한다.
  이벤트 핸들러 역할을 수행하는 함수를 정의하는 것을 
  이벤트 핸들러 등록이라 한다.

  event handler register: 이벤트가 발생하면, 이 함수를 호출해라!
*/

// 예를 들어보자.
/*
  웹 사용자가 버튼(button) 요소를 클릭 했을 때, 경고 다이얼로그 박스를 띄워
  환영의 메시지를 보여주고 싶다면?

  1. 쿼리셀렉터로 버튼을 선택
  2. 버튼에 onclick이란 속성에 handleClick 함수를 대입

  여기에서 onclick 이란 속성이 바로 클릭이벤트핸들러 속성이다.
  onclick에 handleClick 함수를 대입했다는 것은,
  이 button에서 클릭 이벤트가 발생하거든 handleClick함수가 호출될 것이다
  라는것을 의미한다.
*/
const handleClick = function() {
  window.alert("환영합니다^^");
}

const button = document.querySelector("button")

button.onclick = handleClick // 여기가 포인트!

// 구문 기본 형태!!
/*
  이벤트가 발생할 수 있는(혹은 발생할 예정인) 타겟을 선택하고,
  이벤트 핸들러 속성에 이벤트 핸들러를 대입한다.

  타겟.on이벤트명 = 이벤트핸들러함수
  ex->
  button.onclick = handleClick
*/

// 이건 헷갈리면 안 된다!
/*
  이벤트 핸들러를 등록하기 위해 이벤트 속성에 함수를 대입하는 것과
  함수 호출문을 대입하는 것은 엄연히!!!! 다르다.

  handleClick 함수를 대입한다 ( 이벤트 핸들러 등록 )
  button.onclick = handleClick

  handleClick 호출 후 반환값을 대입한다 ( 굳이?????? )
  button.onclick = handleClick()
*/

// 이벤트 함수의 이름을 지을때는 handle어쩌구저쩌구~ 라고 많이 붙인다.
// onkeydown: 키보드가 눌렸을때 라는 이벤트 속성
const inputType = document.querySelector("#typing")
const inputClick = document.querySelector("#push")

const handleTyping = function(){
  console.log("타이핑 되고 있어요!");
}

const handleClick = function(){
  console.log("출력되고 있어요!");
}

inputType.onkeydown = handleTyping
inputClick.onclick = handleClick

/*
  이렇게 이벤트핸들러 함수를 만들어서
  개별 타겟의 이벤트속성에 대입하는 과정 이것을
  이벤트핸들러 등록이라고도 하고,
  이러한 전체적인 과정을 이벤트핸들링 이라고도 한다.

  위에
  inputType.onkeydown = handleTyping
  inputClick.onclick = handleClick  이것들은 
  익명의 함수를 대입한것과 동일한 효과를 가지고 있다.

  inputType.onkeydown = function(){console.log("타이핑 되고 있어요!");}
  inputClick.onclick = function(){console.log("출력되고 있어요!");}

  이것과 동일하다는 말이다! 

  그래서 굳이 함수에다 지정하지 않고 
  마지막 경우처럼 익명함수를 넣는 경우도 아주 많다!!!!
*/

// 주의할 점!!!!
/*
  이벤트핸들러 함수를 등록하기 위해서 이벤트핸들러 속성에다
  함수를 대입하는것이 맞다.

  이것은 함수 호출문을 대입하는 것과 다르다!!!
  습관처럼 함수 대입할때 ()소괄호 쓰지말자!
  
  만들어진 함수를 쓰려면 호출문을 써야하는거 아닌가? 라는 생각 때문이야.
  사실 함수 호출문 이라는건 반환값이 있을 경우엔,
  반환값으로 대체가 되기 때문에 함수이름() 이런식으로 
  이벤트핸들러 등록을 시도하면 오작동 돼!
  대신 함수 호출문을 썼기 때문에 한 번은 호출이 될거야.
*/