// 반복문 while, for

// while
// 주어진 조건이 참일 동안에 구문을 반복

while(조건){
  // 조건이 true인 동안에 반복 수행할 코드 
}
// 조건이란 불리언을 반환하거나 불리엉느로 해석될 수 있는 표현식! (조건문도 마찬가지)
// 반복 구문은 '루프(loop)' 라고도 한다.

let number = 1;

// number가 3보다 작은 동안에는 반복해라
while(number < 3) {
  console.log(number); // 출력한 다음
  number += 1; // number를 1씩 증가
}

window.alert("경고창에 쓸 메시지!");

/*
  alert와 사용방법 유사.
  차이는 확인과 취소라는 선택지가 제공 된다.

  여기서 확인과 취소의 의미는 confirm이 
  true를 반환할 것이냐 false를 반환할 것이냐 이다.
*/
window.confirm("경고창에 쓸 메시지!");
console.log(confirm("메시지!")); // 확인: true반환 돼 출력, 취소: false 반환

/*
  다시말해 confirm 메소드가 띄어주는 다이얼로그 창도 
  조건으로 사용할 수 있는 자격이 된다.

  즉,
*/
while(confirm("메시지!")) {
  console.log("확인 버튼을 누르고 있군요");
} 

console.log("취소 버튼을 눌렀군요");

// for
for(초기식; 조건식; 반복식) {
  // 조건이 true인 경우 반복 수행할 코드
}
// 초기식: 반복 조건의 초기화 작업(for문이 시작될때 딱 한 번만 실행)
// 반복식: 반복이 한 번 끝날 때마다 실행될 작업

for(let i = 1; i <= 3; i += 1) {
  console.log(i);
}