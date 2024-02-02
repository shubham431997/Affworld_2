import React from 'react';
import './css/Home.css'; 

function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <div className="banner-content">
          <h1 className="banner-title">Welcome to Movies</h1>
          <p className="banner-description">
            Watch your favorite movies and TV shows anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
