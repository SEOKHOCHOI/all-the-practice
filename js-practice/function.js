// 함수
/*
  함수는 '호출될 수 있는 코드 조각'이다.
  변수를 선언하고 데이터를 대입하면 변수의 이름을 데이터 대신 사용할 수 있는 것처럼,
  함수를 선언하면 함수의 이름을 코드 조각 대신 사용할 수 있다.
*/
let value = "문자열";

// value는 "문자열" 대신 사용된다!
console.log(value);

let work = console.log("!");

// work는 콘솔에 !를 출력하는 기능 대신 사용된다??
// 아니다!! 
// 데이터에 이름을 붙이는 변수선언 방법은 오직 데이터(하나의 값)에 대해서만 사용 가능하다.

// 함수 선언식
/*
  function 함수명() {
    // 함수의 기능을 표현한 구문
  }

  위와 같은 선언 이후, 해ㅏㅁ수명은 줄괄호 안의 기능 대신 사용될 수 있다!
*/

// 함수 표현식
/*
  변수에다 데이터가 아니라 function을 대입하는 방식.
  함수 선언식에서 이름만 빼고 함수를 하나 만든다.
  그리고 거기에 이름을 붙여주는 방식이 바로 함수 표현식이다.
  이름을 빼고 만드는 함수는 간단히 익명함수 라고도 부른다.

  const 함수명 = function() {
    // 함수의 기능을 표현한 구문
  }

  마찬가지로 선언 이후, 함수명은 중괄호 안의 기능 대신 사용될 수 있다!
*/

// 함수 선언식과 표현식의 차이
/*
  공통점:
  함수를 만든다.

  차이점:
  사용함에 있어 차이 있다.
  1. 문법적 차이
  2. 호출문의 위치
      함수 선언식 같은 경우 만드는코드가 호출하는 코드보다
      아래에 있어도 괜찮다. ( 이런 현상을 호이스팅이 가능하다 라고 한다. )
      
      함수이름()
      function 함수이름() { 실행될 구문 }
      이렇게 말이다.

      하지만 함수 표현식은 무조건 만드는 코드보다 
      함수호출보다 위에 있어야 한다.
      함수를 호출하는 위치에서 함수의 기능이 아직 존재하지 않는 상태이기 때문이다.
*/

// 사용
/*
  함수가 만들어지고 나면, 함수명은 스스로 보관하고 있는 구문 대신 사용될 수 있다.
  그리고 함수가 사용되기 위해서는 함수를 '호출' 해야만 한다!
  함수를 호출할 때는 함수의 이름 뒤에 반드시 소괄호를 붙여줘야 한다.
*/
const sayHello = function() {
  let number = 3 + 3;
  console.log(number);
}

sayHello() // 함수 호출!

// 함수의 이름짓기!
/*
  함수의 기능을 호출하기 위해서는 함수의 이름을 알아야 한다.
  함수 이름을 정할 때의 규칙은 변수 이름 정할 때의 규칙과 유사하나,
  다음과 같은 사항들을 추가적으로 고려하는 것이 좋다.

  1. 함수의 기능을 적절하게 표현할 수 있는 이름을 사용하자.
  2. 명사보다는 동사로 된 이름을 사용하자(기능이므로)
  3. 소문자로 시작하되, 여러 단어가 섞인 경우 카멜표기법을 사용하자.
*/

/*
  함수 내부에서 변수를 만들어 사용.
  함수 내부에서 선언한 변수는 함수 바깥에서 쓸 수 없다!!!

  그래서 함수 안에서 선언된 변수를 해당 지역에서만 쓸 수 있다 해서
  지역변수 라고 부르기도 한다.
 */
function sayBye() {
  let hello = "문자열 헬로우";
  console.log(hello);
}

sayBye()
console.log(hello) // hello is not defined 라는 메시지를 받을것이다.


// 데이터 변환
/*
  함수를 만들 때, 함수가 데이터를 반환하도록 할 수 있다.
  함수가 데이터를 반환한다는 것은, 함수 호출문이 데이터로 대체됨을 뜻한다!
*/
/*
  저절로 되는 건 아니다.
  함수가 데이터를 반환하려면, '이 데이터를 반환한다'라는 구문을
  함수 내부에 추가해주어야 한다.
  이때 키워드 return이 사용된다.
*/
function getThree(){
  //이 함수를 호출하면, 호출문이 3을 반환할 것!
  return 3;
  /*
  함수 내부에 return문 외 다른 코드를 포함해도 된다.
  하지만 위로 적어야한다 return에서 함수가 멈추니 아래 적으면 안된다!
  
  return은 함수 내부에서 함수의 부가 기능을 위해 사용하는 키워드.
  return은 
  1. 함수로부터 데이터를 반환한다.
  2. 함수를 끝낸다.
  라는 두 가지 기능을 가지고 있다.
  */
}
// 그냥 3을 출력
console.log(3)

// 3을 반환하는 함수 호출문 출력
console.log(getThree())

// return은 뒤에 붙은 데이터를 반환한다. 
// 이때 데이터는 한번에 딱 하나씩만 반환할 수 있다.
function getData() {
  let result = 3 + 2 + 1;
  return result;  // 지역변수 값도 return 가능.
}
console.log(getData()) // 6 출력

// 한번에 하나가 무슨 말이냐?
function getData2() {
  let result1 = 3 + 2 + 1;
  let result2 = 4 + 3 + 1;
  return result1
  return rewult2 // << 이부분 소용 없음
}
console.log(getData2()) // 어차피 첫 번째 6만 반환됨.

// 함수를 끝낸 다는건? 강제 종료!!
// 종료 목적이 있는 경우 return 뒤에 데이터를 기입하지 않아도 돼.
function sayHi() {
  console.log("Hi");
  console.log("Hello!");
  return;  // 여기서 종료
  console.log("안녕!");
}
sayHi() // Hi와 Hello!만 반환됨.

/*  
  조건, 반복문 에서도 했듯이
  confirm은 다이얼로그를 띄우고 다이얼로그에서 받은 데이터를 
  반환해준다. 이 말의 뜻은
  
  const result = window.confirm("확인해봐요")
  console.log(result) 

  에서 확인을 누르면 trun 반환, 취소를 누르면 false 반환.
  여기에서 반환은 window.confirm("확인해봐요") 이 코드에서 
  값이 반환됐다 라는 것이고 반환된다라는 것은 이 코드
  자체가 하나의 데이터로 대체 된다는 의미이다. 

  const result = true
  console.log(result)  이렇게 말이다.

  그리고 우리가 만들 함수에서도 이러한 데이터 반환을 할 수 있다.
*/

/*
  return이란 키워드가 없음에도 불구하고 result에 대입을 시켜놨다.
  이럴경우 noReturn의 기능인 반환하지 않는다. 아무것도를 출력한 다음,
  result를 확인해보면 undefined 라고 나올것이다.
  undefined는 변수는 있지만 그 안에 데이터는 대입되지 않은 상태를 의미한다.
*/
function noReturn() {
  console.log("반환하지 않는다, 아무것도!");
}

const result = noReturn() // 반환하지 않는다, 아무것도!
console.log(result) // undefined


// 반환하는 함수
function thereIsReturn() {
  console.log("반환한다, 무언가를!")
  return 10;
}

const result = thereIsReturn()  // 반환한다, 무언가를!
console.log(result)  // 10

/*
  즉, 함수가 자신의 기능을 수행한 다음에

const result = thereIsReturn()  <-이부분에 반환한다, 무언가를!
이라는 본인의 기능을 수행 후!!

const result = 10 이렇게 자신의 호출문 자리에 return값을 두고 간다!!
그럼
console.log(10) 이 돼 10이 출력되는 것이다.
*/

function yesReturn() {
  return 10,20,30,40,50; // ,가 아니라 공백(띄어쓰기)하면 코드흐름이 이어지지않는다는 에러나버림
}

const result2 = yesReturn() // 함수 기능이 없으니 하는거 없이 50 두고감.
console.log(result2) // 마지막에 쓴 50만 반환.