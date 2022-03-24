import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shopping from './components/Shopping/Shopping';

function App() {
  const [cartItem, setCartItem] = useState(0);
  const [guns, setGun] = useState([]);
  const handleClickToCart = (gun) => {
    setCartItem(cartItem + 1);
    setGun([...guns, gun]);
  };
  console.log(guns);
  return (
    <div>
      <Navbar cartItem={cartItem} guns={guns} />
      <Shopping handleClickToCart={handleClickToCart} />
    </div>
  );
}

export default App;
