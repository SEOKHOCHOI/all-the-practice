import { useState } from "react";
import UserName from "./UserName";
export default function Hello({ age }) {
  // let name = "Mike";
  const [name, setName] = useState('Mike');
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";
  // function changeName() {
  //   // const newName = name === "Mike" ? "Jane" : "Mike";
  //   // document.getElementById("name").innerText = name;
  //   setName(name === "Mike" ? "Jane" : "Mike");
  // }

  return (
    <div>
      <h1>state</h1>
      <UserName name={name} />
      <h2 id="name">{name}({age}세) : {msg}</h2>
      <button onClick={() => {
        setName(name === "Mike" ? "Jane" : "Mike");
      }}>Change</button>
    </div>
  );
}

// <div> 없으면 에러.
// 왜냐?
// JSX는 하나의 태그만 만들 수 있어.