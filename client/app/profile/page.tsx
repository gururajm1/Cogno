import React from 'react';
import DoctorDashboard from '../components/sidebar';

function Profile() {
  return (
    <div className="flex">
      <DoctorDashboard />

      <div className="flex-grow p-4">
        <h1 className="text-xl font-bold">Profile</h1>
        <p>Here you can add the main content related to Profile.</p>
      </div>
    </div>
  );
}

export default Profile;
