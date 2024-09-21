import React from 'react';
import NavBar from '../components/NavBar';

const WalletPage = () => {
  return (
    <div>
      <NavBar />
      <main className="wallet-main">
        <h1>Your Wallet</h1>
        <p>Check your VoldCoin balance and transaction history.</p>
        {/* Wallet data will go here */}
      </main>
    </div>
  );
};

export default WalletPage;
