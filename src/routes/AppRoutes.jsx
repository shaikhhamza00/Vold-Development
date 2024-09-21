import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from '../components/SplashScreen';
import HomePage from '../pages/HomePage';
import WalletPage from '../pages/WalletPage';
import ProfilePage from '../pages/ProfilePage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
