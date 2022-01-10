// 브라우저 내 데이터 저장소: 로컬스토리지(localStorage)

// window.localStorage
/*
  localStorage 속성은 현재 도메인(현재 내가 접속해있는 페이지)의 로컬 저장소에 접근할 수 있게 해 준다!
  로컬 저장소는 웹브라우저에서 각 도메인에 대해 할당해주는 저장 공간으로,
  여기에는 데이터를 영구적으로 보관할 수가 있다.
  데이터 보관 시에는 데이터의 이름인 key와 데이터의 실제 값인 value를 각각 지정하며,
  이때 데이터 타입은 문자열 형태만 허용된다.

  영구적으로 보관한다는 말은?
  브라우저를 껐다가 켜거나 페이지를 새로고침해도 해당 페이지에 데이터가
  남아있도록 할 수 있다는 뜻!
*/
// 로컬스토리지 사용법
/*
  로컬스토리지로부터 데이터를 읽거나 쓸 때에는 메소드를 이용해 접근한다.
  setItem: 키와 밸류를 전달받아 저장 -> setItem("key", "value")
  getItem: 전달받은 키에 해당하는 밸류를 반환 -> getItem("key")
  removeItem: 전달받은 키에 해당하는 데이터 삭제 -> removeItem("key")
  clear: 모든 데이터 삭제 -> clear()
  
  로컬스토리지 데이터를 제어할때 주의할 점은 이름이 같은 데이터를
  두개이상 저장할수 없다는 것이다.
  로컬스토리지의 데이터 이름은 중복될 수 없다!
  그러나 이름이 다르면 값은 같아도 상관없다.
  여기서 말하는 데이터 이름은 key를 의미하는 것이다.
*/

// const myName = "석호"

// console.log(myName)

// localStorage.setItem("myName", myName) // 웹브라우저에 저장, 이제 전부 지워도 남아있어.

// 브라우저, 컴퓨터를 완전히 껐다 켜도 보관상태 유지한다. 영구적 보관이다.
const myName = localStorage.getItem("myName")

alert(myName)

// 문자열
localStorage.setItem("cat", "고양이")
localStorage.setItem("dog", "강아지")
localStorage.setItem("myName", "최석호") // 기존에 존재, 같은키 중복 안되니 새롭게 덮어씌어져.

// removeItem
localStorage.removeItem("dog")

// clear: 인자없이 있는거 다지움
localStorage.clear()