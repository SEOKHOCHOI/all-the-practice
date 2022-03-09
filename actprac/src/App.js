import React, { useState } from "react";
import Styles from "./App.module.css";
import Layout from "./components/Layout";
import Layout2 from "./components/Layout2";

function App() {
  const [num, setNum] = useState(1);
  const [item] = useState([1, 2, 3, 5, 6, 7, 8, 9]);

  return (
    <div>
      <Layout className={Styles.App}>
        {item.map((i, index) => {
          return (
            <div key={index}>
              {num} * {i} = {num * i}
            </div>
          );
        })}
        <button onClick={() => setNum((prev) => prev + 1)}>+ 1</button>
        <button onClick={() => setNum((prev) => (prev > 1 ? prev - 1 : prev))}>
          - 1
        </button>
        <button onClick={() => setNum((prev) => prev * 2)}>* 2</button>
      </Layout>
      <Layout2>
        <div>children 사용법</div>
      </Layout2>
    </div>
  );
}

export default App;
