import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Shopping.css';

const Shopping = () => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="row__container">
      <div className="row">
        {guns.map((gun) => (
          <Card key={gun.id} gun={gun} />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
