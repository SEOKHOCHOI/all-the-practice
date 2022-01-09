/*
  등가 비교를 할 때 등호(=)의 개수에 따라 비교 규칙에 차이를 보인다.
  == 는 '추상적(abstract) 같음 비교'로써, 자료형이 서로 다르더라도 같다고 판단할 수 있는 비교.
  === 는 '엄격한(strict) 같음 비교'로써, 자료형과 데이터가 모두 일치해야만 같다고 판단.
*/
console.log('1' == 1); // true
console.log('1' === 1); // false

console.log('1' != 1) // false
console.log('1' !== 1) // true