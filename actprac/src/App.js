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
    console.log("gkgk")
    setCart([...cart, { ...item }]);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item !== itemToRemove ))
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  

  return (
    <div className="App">
      <header>
        <button onClick={()=>{navigateTo(PAGE_CART)}}>장바구니 보러가기 ({cart.length})</button>
      </header>
      { page === 'PAGE_ITEMS' && <ItemList addToCart={addToCart} /> }
      { page === 'PAGE_CART' && <Cart cart={cart} removeFromCart={removeFromCart} /> }
    </div>
  );
}

export default App;
