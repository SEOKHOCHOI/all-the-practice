import React, { useState } from 'react';

const ItemList = ({ addToCart }) => {
  const [item, setItem] = useState([
    {
      // id: new Date(),
      name: 'Item1',
      cost: '1억',
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_2856167%2F28561672114.20210824233451.jpg&type=sc960_832'
    },
    {
      name: 'Item2',
      cost: '50억',
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220126_35%2F1643179303471IUdaP_JPEG%2F44315191961249306_252328433.jpg&type=sc960_832'
    }
  ]);

  return(
    <>
      <h1>Item</h1>
      {item.map((item, index)=>{
        return(
          <div key={index}>
            <h3>{item.name}</h3>
            <h4>{item.cost}</h4>
            <img src={item.image} alt={item.name} width="100px" />
            <button onClick={()=>addToCart(item)}>장바구니에 넣기</button>
          </div>
        );
      })}
    </>
  );
}

export default ItemList;