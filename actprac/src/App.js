import React, { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import Cart from './components/Cart';

const PAGE_ITEMS = 'items';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_ITEMS);
  
  const addToCart = (item) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((itemIn)=> item.name === itemIn.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {...item, quantity: 1}
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item !== itemToRemove ))
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return (
      cart.reduce((sum, {quantity}) => sum + quantity, 0)
    );
  }

  const setQuantity = (item, amount) => {
    const newCart = [...cart];
    newCart.find((itemIn)=>itemIn.name === item.name)
      .quantity = amount;
      setCart(newCart);
  };
  

  return (
    <div className="App">
      <header>
        <button onClick={()=>{navigateTo(PAGE_CART)}}>장바구니 보러가기 ({ getCartTotal() })</button>
      </header>
      { page === PAGE_ITEMS && <ItemList addToCart={addToCart} /> }
      { page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} setQuantity = {setQuantity} /> }
    </div>
  );
}

export default App;
