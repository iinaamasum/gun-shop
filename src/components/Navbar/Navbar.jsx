import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import './Navbar.css';
const Navbar = ({ cartItem }) => {
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="logo">
          <img src={logo} alt="" srcset="" />
          <h1>GunLoading</h1>
        </div>
        <ul className="nav__link">
          <li>Home</li>
          <li>Guns</li>
          <li className="cart">
            <BsFillCartFill />
            <div className="item__num">{cartItem}</div>
          </li>
          <li>
            <FaRegUserCircle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
