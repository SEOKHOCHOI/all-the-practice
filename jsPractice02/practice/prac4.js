array = ['gdgd', '323', 1, 2, 3];

// 아이템 하나당 함수적용
array.forEach(item => {
  console.log(item + 4);
});

// 원래의 아이템들의 타입을 갖고옴 return은 없음.
array.forEach(item => {
  console.log(typeof item);
});

// return 필요
array.map((item, index) => console.log(item, index))

// 그러니 배열을 반환함, 화살표 함수 한줄짜리라 return과 {} 생략한것.
let newArray = array.map((item)=> item)
console.log(newArray)

// 완전히 적어주면
// 또한 아이템 하나하나 함수를 적용해 하나의 배열로 반환해줌.
let newArray2 = array.map((item)=>{
  return(
    item + 4
  );
})
console.log(newArray2);
