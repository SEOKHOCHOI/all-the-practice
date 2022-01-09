// 문서 인터페이스의 관련 기능들을 사용하는 방법과 개념

// window.document
/*
  브라우저 객체 window의 document 속성은 창이 포함한 문서를 참조.
  즉, window.document은 현재 브라우저에 렌더링되고 있는 문서를 의미하며,
  이 속성을 이용하면 해당 문서에 접근할 수 있다.
  
  window.document는 페이지 콘텐츠, 즉 DOM에 대한 진입점 역할을
  하는 프로그래밍 인터페이스이다.
  이를 이용하면 페이지의 정보를 얻거나 웹 요소를 
  생성 및 조작할 수 있다.

  JS에선 window.은 생략 가능.
  react에선 생략 안돼.
*/
/*
  기본적으로 document는 문서(HTML, XML, SVG등)에 대한
  공통의 속성과 메소드를 제공.
  즉, 다양한 API(Application Programming Interface)를 제공.
*/

// 요소를 선택하기 위해 사용할 수 있는 대표적인 메소드 두 개만 해보자.
// 두 메소드는 모두 요소(Element) 객체를 반환한다.
// document.querySelector 와 document.getElementById 이다.


// document.querySelector
/*
  document의 querySelector 메소드는 선택자를 인자로 전달받아,
  전달받은 선택자와 일치하는 문서 내 첫 번째 요소(Element)를 반환.
  일치하는 요소가 없으면 '없다'라는 의미의 null 데이터를 반환.
  인자로 전달되는 선택자는 문자열 타입의 '유효한 CSS 선택자'를 의미.
*/
// p 태그를 선택하자!
document.querySelector("p");

// id가 text인 요소를 선택하자!
document.querySelector("#text");

// class가 text인 요소를 선택하자!
document.querySelector(".text");

// document.getElementById
/*
  documnet와 getElementById 메소드는 id를 인자로 전달받아,
  전달받은 선택자와 일치하는 문서 내 요소(Elemnet)를 반환.
  일치하는 요소가 없으면 '없다'라는 의미의 null 데이터를 반환.
  인자로 전달되는 선택자는 문자열 타입의'id'를 의미.
*/
// id가 text인 요소를 선택하자!
document.getElementById("text");

// id가 image인 요소를 선택하자!
document.getElementById("image");

// textContent
/*
  textContent 속성은 해당 노드가 포함하고 있는
  텍스트 콘텐츠를 표현하는 속성이다.
  textContent를 통해 요소가 포함한 텍스트를 읽을 수도,
  변경할 수도 있다.
*/
// p 요소를 반환받아 상수로 이름을 붙인다!
const p = document.querySelector("p");

// p 요소의 textContent 속성을 콘솔에 출력해보자!
console.log(p.textContent);

// p 요소의 textContent 값을 변경해보자!
p.textContent = "텍스트를 이걸로 바꿔!";


/*
요소를 선택해준다. 그리고 반환해준다. 
인데 둘 사이 한 가지 차이가 있다면 
  querySelector는 css 선택자를 받아서 그것과 일치하는 요소를 반환한다 이지만,
  getElementById는 id가 있는 요소에만 사용할 수 있다.

  반환된 요소는 DOM객체로서 조작할수 있는 대상인것이다.
*/

// h1, p라는 이름은 실제 태그들에 접근할 수 있는 이름이 된다.
const h1 = document.querySelector("h1");
const p = document.getElementById("text");

/*
  DOM객체 h1에서 textContent속성을 보겠다 라는 의미.
  textContent는 말 그대로 쓰여있는 콘텐츠를 의미한다.
*/
// 읽기
// 이미 정의한것만 지워주면 연결 src 변경해가며 사용하는 용도! 가 반환될 것이다.
console.log(h1.textContent);

// 변경
h1.textContent = "이거로 변경돼!";
