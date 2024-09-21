import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/SplashScreen.css';

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate('/home');  // Redirect to Home page after splash
    }, 3000);  // 3 seconds delay
  }, [navigate]);

  return (
    <div className="splash-screen">
      {loading ? (
        <div className="splash-content">
          <img src="/assets/images/voldcoin-logo.svg" alt="VoldCoin Logo" />
          <h1>Unlock the Magic of the Blockchain</h1>
          <p>Loading...</p>
        </div>
      ) : null}
    </div>
  );
};

export default SplashScreen;
