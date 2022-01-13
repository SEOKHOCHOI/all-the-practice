// DOM을 조작할때 사용하는 메소드
// event와 연계해서 공부
// createElement & appendChild

// documnet.createElement
/*
  웹문서를 의미하는 document,
  documnet의 createElement 메소드는 지정된 이름의 HTML 요소를 만들어 반환해준다.
  지정된 이름이란 인자로 전달된 이름을 뜻하고,
  문자열 형태로 전달해주면 된다.

  하지만!!
  브라우저 화면에 div들이 곧장 추가될까? 
  아니다!!!!!!!!!!

  이렇게 메소드를 통해 만든 요소를 DOM 에다가 직접 추가해 주는 작업을
  꼭!!! 진행해야지만 브라우저를 통해 추가로 렌더링 되는 것을 확인할 수 있다.

  DOM에다 추가하는 작업은 어떻게 해야할까? 바로 appendChild 메소드!
*/
// div 요소를 만들어 반환해주는 메소드 호출문
document.createElement('div')

// appendChild 메소드
/*
  appendChild 메소드는 DOM 내 개별 요소('노드' 라고도 함)에 자식 요소를
  추가할 때 사용하는 메소드이고,
  이 메소드는 DOM 요소들이 공통적으로 가지고 있는 메소드이다.
*/
//기본 사용법
// target.appendChild(자식으로 추가할 요소)
/*
  createElement를 이용해서 p요소를 생성하고 이를 문서의 body태그 안에다가
  자식으로 추가하겠다 하는 코드이다.
 */
const p = document.createElement("p")
document.body.appendChild(p) // body가 타겟, p가 자식으로 추가할 요소

// appendChild vs append
/*
  appendChild와 비슷한 역할을 하는 append 메소드도 있다.
  타겟 요소에 자식 요소를 추가한다는 점에서 같으나, 차이점도 존재한다.

  주요한 차이
  1. appendChild의 경우 추가한 자식 노드를 반환하지만, append는
  반환 데이터가 없다.

  2. append를 이용하면 요소에 노드 객체(DOM요소) 또는 문자열을 자식 요소로 
  추가할 수 있지만, appendChild는 노드 객체만을 추가할 수 있다.

  그렇다면 우리는 무엇을 사용해서 자식요소를 추가하는게 좋을까?
  룰은 없고, 상황에 따라 쓰면된다.
  그러니 차이점을 잘 기억해두자.
*/

// 만들어진 div를 조작해보자.
const button = document.getElementById("push") // id가 push인 button 선택 후 button이라 상수명 이름붙임
const div = document.getElementById("area") //id가 area인 div 선택 후 div라 이름붙임.

button.addEventListener('click', function(){ // button 클릭할때마다 div요소 하나씩 생성.
  console.log("div 생성 중!")
  const newDiv = document.createElement("div")// 여기서 div가 만들어지고

  //여기서는 만들어진걸 추가하기전에 만들어진것에 대한 속성을 조작하는 작업을 해준다.
  // + 그러면 div에 어떤 내용들이 포함될 수 있게 된다.
  // + 여기서는 DOM 요소가 가질 수 있는 대표적인 속성인 style 속성을 조작해보았다.
  newDiv.style.backgroundColor = "red" // background-color 이렇게 쓰면 안돼, - 기호는 js에서 빼기 기호야.
  newDiv.style.width = "200px" 
  newDiv.style.height = "200px"


  div.appendChild(newDiv) // 여기서 div를 추가해준다.
  div.append("하하하 이런 문자열 추가가 가능해 append는 버튼누르면 이 글자들이 계속 추가돼!")
})
/*
  여기서 appendChild가 반환까지 해준다는 말은
  console.log(div.appendChild(newDiv)) 해줬을때 
  newDiv를 추가한다 라는 역할을 수행한 다음에는 
  newDiv를 반환까지 해준다.
  그래서 이렇게 console.log 해주게 되면 버튼을 누를때마다
  노드가 추가도 되고 반환돼서 출력도 된다.
  그러나 append는 이런게 없다.
*/