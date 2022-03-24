import React from 'react';
import './Modalcart.css';
const Modalcart = ({ gun }) => {
  const { img, name, category } = gun;
  return (
    <div className="modal__card">
      <div className="modal__img">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="modal__details">
        <h3>{name}</h3>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default Modalcart;
