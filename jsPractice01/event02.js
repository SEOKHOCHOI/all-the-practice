// 이벤트핸들러 등록 메소드
// addEventListener & 이벤트 객체

// addEventListener
/*
  onclick, onkeydown 과 같은 이벤트 속성을 통해 이벤트 핸들러를 등록하는 것보다
  현대적인 방법은, addEventListener 메소드를 활용하는 것이다.
*/
// event.js에서 학습한 방식
target.onclick = function() {}

// addEventListener의 방식
target.addEventListener('click', function(){})

/*
  addEventListener은 대부분의 웹요소가 가지고 있는 공통 메소드라고 할 수 있다.
  메소드 이다보니 호출시에 인자를 전달받는다.
  위에선 'click'과 function(){} 이렇게 두개의 인자가 전달되고 있다.

  addEventListener의 
  첫 번째 인자는: 이벤트명을 나타내는 문자열이다.
  두 번째 인자는: 이벤트핸들러 역할을 할 함수이다.

  이렇게 함수에다 인자로 전달해주는 함수를 콜백함수 라고도 한다.

  사실 클릭이벤트가 발생했을 때 이벤트핸들러 함수가 동작하게 만든다 라는 점에서
  위의 두 코드의 결과는 완벽히 같다.
  결국 이벤트핸들러 등록을 한다 라는 점만보면 addEventListener은 그다지 
  특별하게 느껴지지 않는 메소드이다.

  그러나 이 메소드를 사용하여 이벤트핸들러를 등록하는 것 은
  이벤트핸들러 속성을 사용하는 것 에 비해 몇 가지 이점을 제공한다.

  이점
  1. 이전에 추가한 이벤트 핸들러를 제거할 수 있는 대응 메소드로
      removeEventListener 라는 메소드를 사용할 수 있게된다.

  2. 같은 리스너(타겟)에 대해 다수의 핸들러를 등록할 수 있다.
      이벤트 속성으로는 할 수 없는 일이다.

  3. 추가적인 옵션 사항들이 제공된다.
*/

// 이벤트 객체
/*
  이벤트 객체는 추가적인 기능과 정보를 제공하기 위해 이벤트 핸들러에
  자동으로 전달되는 데이터이다. 이를 활용하기 위해서는 이벤트 핸들러 함수에
  매개변수를 추가하여 이벤트 발생 시마다 전달받을 수 있도록 해야 한다.

  이벤트 핸들러 라는 것은 이벤트가 발생했을 때를 대비해서 등록하는 함수이다.
  이벤트가 발생하면 이벤트 핸들러 함수가 호출된다.
  그런데 이때 이벤트가 발생하는 그 순간에 이벤트에 대한 기능과
  정보를 가지고 있는 객체가 이 이벤트 핸들러 함수에 자동으로 전달이
  된다는 이야기 이다.
  함수의 데이터가 전달되는 것이니까 함수가 그걸 받으려면 방법은
  단 한가지! 매개변수를 통해 전달받는 방법뿐이 없다.
  
  그래서 아래와 같이 이벤트 핸들러 함수에 매개변수를 추가하게 되면
  이를 통해 이벤트객체를 활용할 수 있게된다.
  
  이벤트 핸들러를 전달받는 매개 변수의 이름은 관습적으로
  event 또는 e 라고 쓰는 경우가 많다. (이름을 내 마음대로 할 수 있긴하다.)
*/
// click 이벤트가 발생하면 함수를 호출하겠다!
target.addEventListener('click', function(){})

// click 이벤트가 발생하면 함수를 호출하겠다!
// + 이때 자동으로 전달되는 이벤트 객체를 매개변수 event에 대입하겠다!
target.addEventListener('click', function(event){})

// removeEventListener
// + 클릭 이벤트에 대해서 핸들 클릭을 제거하겠다 라는 구문.
target.removeEventListener('click', handleClick)

// event 중 target
/*
  이벤트 객체는 객체이기에 뒤에다 점을 찍으면 그 안에 있는 속성에
  접근할 수가 있는데 타겟은 이벤트가 발생한 말 그대로 타겟.. 타겟을 의미한다.
  그래서 우리가 버튼 툴을 눌렀을때 이벤트 타겟을 확인하게 되면
  id가 two인 버튼을 출력하게 된다. 이벤트의 타겟이다.
  
  btn1, 2, 3 이렇게 여러개에 줘봤을때 그 전과 무슨차이냐?
  이벤트가 발생한 타겟을 각자 확인할 수 있게 됐다 라는 차이가 있다.
  event.target은 지금 이벤트가 발생한 순간에 타겟을 알려주기 때문에
  똑같은 핸들러를 넣었다고해도 결과가 다르게 나타난다.
*/
const btn1 = document.getElementById("one")
const btn2 = document.getElementById("two")
const btn3 = document.getElementById("three")

const handleClick = function(event){
  console.log(event.target)
}

btn1.addEventListener('click', handleClick)
btn2.addEventListener('click', handleClick)
btn3.addEventListener('click', handleClick)