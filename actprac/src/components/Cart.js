import React  from 'react';

export default function Cart({ cart,clearCart, removeFromCart, setQuantity }) {
  
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  return(
    <>
      <h1>Cart</h1>
      { cart.length > 0 && (<button onClick={clearCart}>카트 비우기</button>) }
      {cart.map((item, index)=>{
        return(
          <div key={item.id + index}>
            <h3>{item.name}</h3>
            <h4>{item.cost}원</h4>
            <input value={item.quantity} onChange={(e)=>{setQuantity(item, parseInt(e.target.value))}} />
            <img src={item.image} alt={item.name} width="100px" />
            <button onClick={()=>removeFromCart(item)}>장바구니에서 제거</button>
          </div>
        );
      })}
      <div>총 금액: {getTotalSum()}원</div>
    </>
  );
}