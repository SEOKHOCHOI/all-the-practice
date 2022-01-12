import { useState } from "react";
export default function Hello() {

  // let name = "Mike";
  const [name, setName] = useState('Mike');

  function changeName() {
    // const newName = name === "Mike" ? "Jane" : "Mike";
    // document.getElementById("name").innerText = name;
    setName(name === "Mike" ? "Jane" : "Mike");
  }

  return (
    <div>
      <h1>state</h1>
      <h2 id="name">{name}</h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
}

// <div> 없으면 에러.
// 왜냐?
// JSX는 하나의 태그만 만들 수 있어.