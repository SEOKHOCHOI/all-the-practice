import { useState } from "react";
export default function Hello(props) {
  console.log(props);
  // let name = "Mike";
  const [name, setName] = useState('Mike');
  const [age, setAge] = useState(props.age);

  // function changeName() {
  //   // const newName = name === "Mike" ? "Jane" : "Mike";
  //   // document.getElementById("name").innerText = name;
  //   setName(name === "Mike" ? "Jane" : "Mike");
  // }

  return (
    <div>
      <h1>state</h1>
      <h2 id="name">{name}({age}세)</h2>
      <button onClick={() => {
        setName(name === "Mike" ? "Jane" : "Mike");
        setAge(age + 1);
      }}>Change</button>
    </div>
  );
}

// <div> 없으면 에러.
// 왜냐?
// JSX는 하나의 태그만 만들 수 있어.