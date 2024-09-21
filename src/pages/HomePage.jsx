import React from 'react';
import NavBar from '../components/NavBar';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <main className="home-main">
        <h1>Welcome to VoldCoin</h1>
        <p>Explore the magical world of cryptocurrency and start earning today!</p>
      </main>
    </div>
  );
};

export default HomePage;
