import React from 'react';
import './whoissarah.css';
import sarahImage from '../images/sarah.jpg'; // Adjusted import path

const WhoIsSarah = () => {
  return (
    <div className="whois-container">
      <h2>Who is Sarah?</h2>
      <div className="card">
        <img src={sarahImage} alt="Sarah" className="card-image" />
        <div className="card-content">
          <p>Sarah is a French woman passionate about life and her family. She enjoys spending time with her husband, Valdemir, and their son, Joaquim. Sarah loves to live fully and embraces every moment with joy and enthusiasm.</p>
          <p>She is also known for her incredible cooking skills, bringing a touch of French cuisine and love to every meal she prepares for her family and friends.</p>
        </div>
      </div>
    </div>
  );
};

export default WhoIsSarah;
