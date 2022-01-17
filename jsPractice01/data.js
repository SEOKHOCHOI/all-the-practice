//null
/*
  널(null) 데이터는 '없다'를 의미하는 데이터.
  의도적으로 데이터가 없음을 나타내기 위해 사용하는 일종의 표현 수단.
*/
let number;
// 이 변수의 숫자는 0 이다.
/*
  0을 수치적으로 봤을때는 아무것도 없다를 의미하는 것 같지만,
  사실 0 그 자체로도 하나의 숫자이다.
  즉, 데이터가 없다 라는 상태가 아니라
  숫자 0이 있다 의 상태를 만드는 작업이다.
*/
number = 0;

// 이 변수에는 아무 것도 없다!
// 정말 변수가 없다를 표현하는 상태이다.
number = null;

// undefined: 아직 데이터가 정의되지 않았음을 나타낸다.
let number2;

// 여기에는 아직 값이 정의되지 않았다. 즉, undefined다.
console.log(number2); // undefined 

// number2는 3이라고 정의한 다음 확인.
number2 = 3;
console.log(number); // 3 출력.

// boolean
/*
  불리언(불린이라고도 한다.)은 데이터가 아니다.
  숫자, 문자열과 같은 데이터 타입(즉, 자료형) 중 하나이다.
  true와 false, 단 두가지 값만 존재.
  참과 거짓 여부를 나타내기 위해 사용한다.
*/
let value;
value = true; //소문자로 써야한다.True금지.
value = false; 

// 불리언 데이터가 불리언 데이터가맞다라는 키워드는?
// typeOf: 내가 사용하고 있는 데이터의 타입이 무엇인지 확인해서 반환해주는 연산자.
console.log(typeof value) // boolean 이라고 데이터 타입이 출력됨.