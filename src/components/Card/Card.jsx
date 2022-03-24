import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import './Card.css';
const Card = ({ gun, handleClickToCart }) => {
  const { name, img, action, capacity, category, bullet } = gun;
  return (
    <div>
      <div className="card">
        <div className="card__img">
          <img src={img} alt="" srcset="" />
        </div>
        <div className="card__details">
          <h2>{name}</h2>
          <p>Category: {category}</p>
          <p>Action: {action}</p>
          <p>Bullet: {bullet}</p>
          <p>Capacity: {capacity}</p>
        </div>
        <div onClick={() => handleClickToCart(gun)} className="add__cart">
          <p style={{ 'padding-right': '10px' }}>Add To Cart</p>
          <BsFillCartFill />
        </div>
      </div>
    </div>
  );
};

export default Card;
