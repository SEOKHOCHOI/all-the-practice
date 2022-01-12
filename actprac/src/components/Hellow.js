export default function Hello() {

  function showName() {
    console.log("Mike");
  }
  function showSex(sex) {
    console.log(sex);
  }
  function showText(e){
    console.log(e.target.value)
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button onClick={
        ()=>{
          console.log(30);
        }
      }>Show age</button>
      <button onClick={showSex("남")}>sex</button>
      <input type="text" onChange={showText} />
    </div>
  );
}

// <div> 없으면 에러.
// 왜냐?
// JSX는 하나의 태그만 만들 수 있어.