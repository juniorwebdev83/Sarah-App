import React from 'react';
import './Card.css';

const Card = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" />
      <div className="card-content">
        <h3>Card Title</h3>
        <p>This is a card component with an image.</p>
      </div>
    </div>
  );
}

export default Card;
