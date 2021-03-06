// Document Object Model 줄여서 DOM
/*
  자바스크립트로 화면을 조작하기 위해서 반드시 알아야하는 개념.
  DOM의 존재 목적:
  DOM은 자바스크립트를 사용해서 웹 콘텐츠를 추가, 수정, 삭제하거나
  마우스 클릭, 키보드 타이핑 등 이벤트에 대한 처리를 
  정의할 수 있도록 제공되는 프로그래밍 인터페이스(interface)이다.

  자바스크립트가 웹문서에 대한 어떤 동작을 구현하고 나면
  자바스크립트 파일이 아닌 돔의 그 결과가 반영되고,
  그 내용을 토대로 웹브라우저 화면이 다시 렌더링 되는 흐름이다.

  html 코드는 단지 정적인 텍스트일 뿐이기 때문에
  사용자와의 동적인 상호작용이 어렵고,
  돔이 사용자와 실직적으로 동적인 상호작용을 해준다.

  이 돔을 조작하기 위해서 필요한 자바스크립트 객체
  그리고 그 사용법을 공부해야한다.
*/

/*
  상식!!!
  1. 웹브라우저는 로딩이 마친 html 문서를 해석한다.
  2. 화면을 통해서 해석된 결과를 보여 주는 역할을 한다.
    
  브라우저가 스스로 해석한 html 코드를 화면을 통해 보여주는 과정을
    렌더링 이라고 한다. 
    (렌더링: 간단히 브라우저르 통해 html 코드가 해석되고 
    해석된 결과 어떤식으로 화면을 보여 주어야 겠다 라는
    판단이 끝나면 브라우저 화면에는 그 결과가 나타나게 되는 것.)

    웹 콘텐츠가 화면에 렌더링 되기에 앞서 
    브라우저는 html 코드를 해석해서 요소들을 트리 형태로
    구조화 해 표현하는 문서 객체를 생성한다.
    이때 이 객체를 바로 dom(돔) 이라고 부르는 것이다.

    이 dom이 생성되고 나면 브라우저가 그것을 토대로
    웹 콘텐츠들을 렌더링 한다.
    일반적으로 html코드는 요소가 다른 요소 안에 포함되는 형태를 
    띄게 되는데, 이러한 형태로 인해 돔은 
    트리형태의 계층 구조를 형성해 웹 요소들을 표현한다.

    html이 바디의 부모이고 또 바디는 div들의 부모이고..
    대충 이런식이다.

    따라서 렌더링 과정을 조금 더 자세히 표현하면 
    HTML ->  DOM  ->  웹브라우저 
    이런 형태가 되는 것이다.
*/

