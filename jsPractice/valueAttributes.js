// 입력 요소 값 읽기
/*
  <input>, <select> 처럼 사용자로부터 입력을 받는데 사용 되는 요소들이 있다.
  여기에서 사용자가 입력한 값을 읽어들일 때는 요소의 value 속성에 접근하자.

  차이를 기억하자.
  1. 요소의 텍스트에 접근하고 싶다: textContent 또는 innerText
  2. 사용자가 요소에 입력한 값에 접근하고 싶다: value
*/
/*
  접근이라 함은..
  입력 요소의 value에 접근하여 할 수 있는 일은 크게 두 가지!
  읽기와 쓰기이다.
*/
// 대상 요소의 사용자 입력값을 읽어 콘솔에 출력하자! (읽기)
console.log(target.value)

// 대상 요소의 사용자 입력값을 약간 강제적으로 "변경값"으로 바꾸자! (쓰기)
target.value = "변경값"

// 입력 폼을 다루어보자
// + 여러 입력 요소를 포함할 수 있는 폼 요소로부터 여러 입력 값을 읽을 수 있다.
/*
  폼 안에 여러개의 입력요소를 포함시키고
  각 입력요소에 값을 입력하고 
  폼의 내용을 제출하면 입력요소의 값들이 한 번에 제출되는데
  폼에서 입력값을 제출하는 작업을 수행하면 
  이때는 form이 submit 이벤트 라는걸 발생시킨다. (제출 이벤트)
  submit 이벤트가 발생되는 그때 우리는 이벤트핸들러를 사용해서
  입력값들에 접근하면 되는데 이 작업을 하기전 해결해야할 문제가 있다.

  form에는 action이라고 하는 속성이 있는데 이 action은 
  form에 입력된 입력값들을 전송받아 이를 처리해줄 서버프로그램의
  url을 지정하는 속성이다.
  form이 웹문서에 기입된 입력값들을 제출하면 웹문서는 action에 쓰여진
  url로 리다이렉션이 된다.(그곳으로 이동하게 된다는 뜻)
  그래야 입력값을 토대로 어떤 동작이 이어질수있는건데
  만약 action 속성이 지정되지 않은 상태에서 form을 제출하게 되면
  그때는 페이지가 새로고침 돼 버리는 현상을 확인할 수 있다.

  따라서 action을 지정하지 않고 form에 입력값을 읽어들이고 싶을때는
  다른 추가적인 조치가 필요하다. 그리고 하나의 조치방법으로써
  이벤트객체를 사용해 보겠다.

  참고로 form안에서 name인 접근자로서,식별자로서의 역할을 한다.
*/

const textInput = document.getElementById("text")
const button = document.getElementById("button")

button.addEventListener("click", function(){
  console.log(textInput.value)
})

// form
const form = document.querySelector("form")

// 새로고침 방지위해 event객체 받아 preventDefault() 메소드 사용.
// + preventDefault는 기존의 기능을 차단한다 라는 의미.
// + 여기서 기존의 기능이란? 리다이렉션되는 기능을 아예 차단해 버리고
// + 그 밑에 내가 사용할 기능을 채워넣어 새로운 이벤트핸들링을 하겠다는 얘기.
// + form의 액션속성을 정상적으로 활용하고 있다면 해주지 않아도 돼.
// + <form action="url"> 그러나 우리에겐 현재 제대로된 url이 없으니 써야돼.
form.addEventListener("submit", function(){
  this.elements.preventDefault()
  console.log(form.name.value)
  console.log(form.town.vlaue)
})