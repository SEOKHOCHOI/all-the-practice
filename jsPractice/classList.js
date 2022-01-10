// Element.classList
/*
  웹 요소(Element)로부터 클래스 콜렉션을 반환하는 읽기 전용 속성이다.

  우리가 HTML 문서를 작성할 때 태그에 class를 추가해주는 경우가 자주 있는데,
  태그를 통해 만들어진 요소에서 class의 목록만 쏙 뽑아내는 속성이 바로
  classList 이다.

  예시:

  <p class="cla1 cla2 cla3"> 클래스가3개 </p>

  1. 위의 p태그를 querySelector로 선택한 다음 
  2. 선택한 요소에서 classList를 읽어들이게 되면 
    DOMTokenList { 0: 'cla1', 1: 'cal2', 2: 'cal3' }
    이렇게 클래스목록객체를 확인할 수 있다. 각각의 클래스 값에는
    0번부터 순서대로 번호가 매겨져 있다.
    클래스 리스트속성을 사용하면 클래스 콜렉션 객체를 반환해 주는데
    이 콜렉션은 객체이고 여기엔 유용한 메소드가 다수 정의돼 있다.
    add: 지정한 클래스 값 추가 -> 사용예: add("new_class")
    remove: 지정한 클래스 값 제거 -> remove("old_class")
    item: 인덱스를 이용한 클래스 값 반환 -> item(1)
    toggle: 클래스 값 토글링 -> toggle("some_value")
    contains: 지정한 클래스 값 존재 여부 확인 -> contains("is_contains")
    replace: 기존 클래스를 새 클래스로 대체 -> replcace("old", "new")
*/

// 실습
const h1 = document.querySelector("h1");
const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");
const toggleBtn = document.querySelector("toggle");

console.log(h1.classList)

addBtn.addEventListener('click', function(){
  h1.classList.add('text')
})
removeBtn.addEventListener('click', function(){
  h1.classList.remove('text')
})
toggleBtn.addEventListener('click', function(){
  h1.classList.toggle('text')
})