import React from 'react';
import NavBar from '../components/NavBar';

const ProfilePage = () => {
  return (
    <div>
      <NavBar />
      <main className="profile-main">
        <h1>Your Profile</h1>
        <p>View and edit your profile information.</p>
        {/* Profile form or user data will go here */}
      </main>
    </div>
  );
};

export default ProfilePage;
