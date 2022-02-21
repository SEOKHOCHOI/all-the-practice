import React  from 'react';

export default function Cart({ cart, removeFromCart }) {
  return(
    <>
      <h1>Item</h1>
      {cart.map((item, index)=>{
        return(
          <div key={item.id + index}>
            <h3>{item.name}</h3>
            <h4>{item.cost}</h4>
            <img src={item.image} alt={item.name} width="100px" />
            <button onClick={()=>removeFromCart(item)}>장바구니에서 제거</button>
          </div>
        );
      })}
    </>
  );
}