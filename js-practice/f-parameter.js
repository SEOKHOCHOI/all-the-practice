// 매개변수, 인자

/*
  함수 호출문은 '함수명 + 소괄호'이다.
  소괄호의 역할은, 함수가 실행될 때 사용할 재료를 전달받는 것이다.
  재료란 데이터를 뜻한다.
  함수명(여기이부분!) 이다.
*/

// 매개변수
/*
  재료를 뭐라고 부를 건데?
  재료를 전달받아 기능을 수행하는 함수를 만들 때는, 재료의 이름을 정해 주어야 한다.
  이를 '매개변수'라 한다.
  매개변수에는 갯수제한이 없다. 0개부터 무한대 이다. 함수가 매개변수를
  여러개 포함할 경우에는 소괄호 안에서 구분자 , 쉼표를 이용해
  매개변수를 추가해주고 호출시에도 그에맞게 여러개의 재료를 전달해주면 된다.

  밑의 함수 호출 시, sayVegetable 함수에는 데이터 하나를 전달할 수 있다.
  전달된 데이터를 vegetable이라 부르고, 이것을 사용해 구문을 수행했다.

  이것은 Console에 
  함수에 전달된 채소는?
  당근
  함수에 전달된 채소는?
  오이
  라고 나온다.
*/
function sayVegetable(vegetable) {
  console.log("함수에 전달된 채소는?");
  console.log(vegetable)
}

sayVegetable("당근") // vegetable은 "당근"
sayVegetable("오이") // vegetable은 "오이"

/*
  재료라는 표현은 이해를 위한 표현이다.

  재료를 전달받기 위해 만들어 둔 변수를 매개변수(parameter)
  실제 함수 호출시에 전달하는 데이터를 인자(argument)라 부른다.
*/

/*
  재료를 이용해 반환값을 만든다.

  인자로 데이터를 전달받고, 이를 이용해 구문을 수행한 다음
  그에 따른 결과값을 반환하는 함수를 만들 수 있다.
*/
function whatIsBigger(n1, n2) {
  if(n1 > n2) {
    return n1;
  }else {
    return n2;
  }
}
console.log(whatIsBigger(3, 5)) // 5
console.log(whatIsBigger(10, 6)) // 10

// 매개변수에 전달받은 알규먼트 만큼 반복하게도 할 수 있다.
function sayAnything(ant, number) {
  for(let i = 0; i < number; i++) {
    console.log(ant)
  }
}
sayAnything("이게 옆 숫자만큼 반복돼.", 5)

// 홀수면 호출 짝수면 짝수 반환.
// 잊지말자 return 함수로부터 값을 반환해주고 값이 반환된다는 것은
// 함수의 호출문이 데이터로 대체된다 라는 것이다.
function oddEven(number) {
  if(number % 2 == 1) {
    return "홀수"
  }else {
    return "짝수"
  }
}
console.log(oddEven(10)) // 짝수 반환