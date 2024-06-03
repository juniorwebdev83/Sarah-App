import React from 'react';
import './Card.css';

const Card = ({ imageUrl, title }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>Cherishing Every Moment</p>
      </div>
    </div>
  );
}

export default Card;
