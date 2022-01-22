import React, { useState } from 'react';
import './App.css';


function App() {

  // 변수
  let hi = '안뇽';

  // 함수
  function 함수이름() { return('리턴해줄거'); }

  // img
  // <img src=".jpg"> 잘안씀, <img src={logo}/>이런식으로 원하는위치에 넣어주셈

  // style
  
  
  
  let st = {color:'blue'}
 


  // state
  const [이름0, 이름을변경해줄함수] = useState('최석호');
  const [이름1, 이름변경] = useState(['최석호', '박우현']);
  // {이름}, {이름[0]}, {이름[1]}
  return (
    <div className="App">
      <h1 style={st}>{hi}</h1>
      <h2 >{함수이름}</h2>
      <h2>{ 이름1 }</h2>
    </div>
  );
}

export default App;
