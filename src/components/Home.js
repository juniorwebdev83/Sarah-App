import React from 'react';
import Card from './Card';

const Home = () => {
  // Array of image URLs
  const imageUrls = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg",
    "https://example.com/image5.jpg",
    "https://example.com/image6.jpg",
    "https://example.com/image7.jpg",
    "https://example.com/image8.jpg",
    "https://example.com/image9.jpg",
    "https://example.com/image10.jpg",
  ];

  return (
    <div className="card-container">
      <h2>Home Page</h2>
      <div className="card-grid">
        {imageUrls.map((imageUrl, index) => (
          <Card key={index} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default Home;
