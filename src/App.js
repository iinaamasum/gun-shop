import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shopping from './components/Shopping/Shopping';

function App() {
  const [cartItem, setCartItem] = useState(0);
  const handleClickToCart = (gun) => {
    setCartItem(cartItem + 1);
    console.log(gun);
  };
  console.log(cartItem);
  return (
    <div>
      <Navbar cartItem={cartItem} />
      <Shopping handleClickToCart={handleClickToCart} />
    </div>
  );
}

export default App;
