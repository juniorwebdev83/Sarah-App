import React from 'react';
import Card from './Card';
import './Home.css';

const Home = () => {
  // Array of image URLs
  const imageUrls = [
    "https://th.bing.com/th/id/OIG2.yA1mPnJ3gsFmWeXHkyvn?pid=ImgGn",
    "https://th.bing.com/th/id/OIG2.8NO0aZ7hvIXXaLi3DpeL?pid=ImgGn",
    "https://th.bing.com/th/id/OIG2.LiwrALdwrmEtdiOGYWWn?pid=ImgGn",
    "https://th.bing.com/th/id/OIG4.HzhNYiV4T5SRmc6vuOEG?w=1024&h=1024&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIG4.3GaIt7YP.6oOwd7K5cn9?pid=ImgGn",
    "https://th.bing.com/th/id/OIG2.YgfltHG2OSAboxzhem5z?pid=ImgGn",
    "https://th.bing.com/th/id/OIG2.gcWCtrQSKiyStK.2jbK9?pid=ImgGn",
    "https://th.bing.com/th/id/OIG2.OvuqW62lg9.9mOnRzOzi?pid=ImgGn",
    "https://th.bing.com/th/id/OIG2.t3PZ0Jgc2LYQH9.zKL0W?pid=ImgGn",
    "https://th.bing.com/th/id/OIG3.5u5ZBGkvLQn1ELp4UqXH",
  ];

  return (
    <div className="home-container">
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
