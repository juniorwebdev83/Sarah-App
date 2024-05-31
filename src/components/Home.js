// Home.js
import React from 'react';
import './home.css';

const Home = () => {
  const cards = Array.from({ length: 10 }).map((_, index) => (
    <div className="card" key={index}>
      <img src={`https://via.placeholder.com/300?text=Card+${index + 1}`} alt={`Card ${index + 1}`} className="card-image"/>
      <div className="card-content">
        <h3>Card {index + 1}</h3>
        <p>This is the description for card {index + 1}.</p>
      </div>
    </div>
  ));

  return (
    <div className="home-container">
      {cards}
    </div>
  );
};

export default Home;
