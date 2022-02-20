import React, { useState } from 'react';
import './App.css';
import Data from './Data';



function App() {
  const [book, setBook] = useState(Data.list[0]);


  
  return (
    <div className="App">
      <h1>{book.proTitle}</h1>
    </div>
  );
}

export default App;
