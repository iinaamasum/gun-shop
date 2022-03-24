import React from 'react';
import './Card.css';
const Card = (props) => {
  const { name, img, action, capacity, category, bullet } = props.gun;
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
        <div className="add__cart">
          <p>addtocart</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
